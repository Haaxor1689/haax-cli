// @ts-check
import fs from 'fs';
import path from 'path';

import sharp from 'sharp';

import { deleteFile, exec, ScriptDirname, TmpFileExt } from '../utils.mjs';

/** @type {(filePath: string, colCount?: string | number) => Promise<void>} */
const mergeBlp = async (filePath, colCount) => {
	if (fs.existsSync(filePath) && fs.lstatSync(filePath).isDirectory()) {
		const files = fs.readdirSync(filePath).filter(v => v.match(/\D+1\.blp/));
		for (const f of files) await mergeBlp(`${filePath}/${f}`);
		return;
	}

	if (!filePath.endsWith('1.blp'))
		throw 'Please provide valid path to first blp of a set to merge.';

	const cwd = path.dirname(filePath);
	const baseName = path.basename(filePath).slice(0, -5);
	const files = fs
		.readdirSync(cwd)
		.filter(v => v.match(`${baseName}\\d+\\.blp`));

	files.forEach(f =>
		fs.copyFileSync(`${cwd}/${f}`, `${cwd}/${f.slice(0, -4)}${TmpFileExt}.blp`)
	);

	const indexes = [...Array(files.length).keys()];
	try {
		console.log(`Converting ${baseName}...`);
		await exec(
			`${ScriptDirname}/scripts/BLPConverter.exe /M ${indexes
				.map(i => `"${baseName}${i + 1}${TmpFileExt}.blp"`)
				.join(' ')}`,
			{ cwd }
		);

		let columns = 0;
		let rows = 0;
		let lastWidth = 0;
		let lastHeight = 0;

		const images = [];
		for (const i of indexes) {
			const img = await sharp(`${cwd}/${baseName}${i + 1}${TmpFileExt}.png`);
			const { width, height } = await img.metadata();

			const input = await img.ensureAlpha().raw().toBuffer();
			images.push({ input, raw: { width, height, channels: 4 } });

			lastWidth = width;
			lastHeight = height;
		}

		if (colCount && !Number.isNaN(Number(colCount))) {
			columns = Number(colCount) - 1;
			rows = images.length / (columns + 1);
		} else {
			const firstInLastRow = images.findIndex(v => v.raw.height < 256);
			const lastInFirstRow = images.findIndex(v => v.raw.width < 256);
			if (firstInLastRow !== -1) {
				columns = images.length - firstInLastRow - 1;
				rows = images.length / (columns + 1) - 1;
			} else if (lastInFirstRow !== -1) {
				columns = lastInFirstRow;
				rows = images.length / (columns + 1) - 1;
			} else if (files.length === 12) {
				columns = 3;
				rows = 2;
				console.log('[!] World map special case');
			} else {
				columns = images.length - 1;
				rows = 0;
				columns > 0 && console.log(`[!] Non deterministic texture size`);
			}
		}

		console.log('Merging...');
		await sharp({
			create: {
				width: columns * 256 + lastWidth,
				height: rows * 256 + lastHeight,
				channels: 4,
				background: 'transparent'
			}
		})
			.composite(
				images.map((img, i) => ({
					...img,
					top: 256 * Math.floor(i / (columns + 1)),
					left: 256 * (i % (columns + 1))
				}))
			)
			.toFile(`${cwd}/${baseName}.png`);
	} finally {
		indexes.forEach(i => {
			deleteFile(`${cwd}/${baseName}${i + 1}${TmpFileExt}.blp`);
			deleteFile(`${cwd}/${baseName}${i + 1}${TmpFileExt}.png`);
		});
	}
};

export default mergeBlp;

// @ts-check
import path from 'path';

import fs from 'fs-extra';
import sharp from 'sharp';

import { deleteFile, exec, ScriptDirname, TmpFileExt } from '../utils.mjs';

/** @type {(filePath: string) => Promise<void>} */
const sliceBlp = async filePath => {
	if (fs.existsSync(filePath) && fs.lstatSync(filePath).isDirectory()) {
		const files = fs.readdirSync(filePath).filter(v => v.endsWith('.png'));
		for (const f of files) await sliceBlp(`${filePath}/${f}`);
		return;
	}

	if (!filePath.endsWith('.png')) throw 'Please provide a .png file to slice.';

	const baseName = path.basename(filePath).slice(0, -4);
	const cwd = path.dirname(filePath);

	/** @type {number[]} */
	let keys = [];
	console.log(`Slicing ${filePath}...`);
	try {
		fs.copyFileSync(filePath, `${cwd}/${baseName}0${TmpFileExt}.png`);

		const image = await sharp(`${cwd}/${baseName}0${TmpFileExt}.png`);
		const { width, height } = await image.metadata();

		let columns = Math.floor(width / 256);
		let rows = Math.floor(height / 256);

		let lastWidth = width % 256;
		let lastHeight = height % 256;

		if (lastWidth === 0) {
			lastWidth = 256;
			columns--;
		}

		if (lastHeight === 0) {
			lastHeight = 256;
			rows--;
		}

		keys = [...Array((columns + 1) * (rows + 1)).keys()];
		for (const i of keys) {
			await image
				.clone()
				.extract({
					top: 256 * Math.floor(i / (columns + 1)),
					left: 256 * (i % (columns + 1)),
					width: i % (columns + 1) === columns ? lastWidth : 256,
					height: i >= (columns + 1) * rows ? lastHeight : 256
				})
				.toFile(`${cwd}/${baseName}${i + 1}${TmpFileExt}.png`);
		}

		await exec(
			`${ScriptDirname}/scripts/BLPConverter.exe /M ${keys
				.map(i => `"${baseName}${i + 1}${TmpFileExt}.png"`)
				.join(' ')}`,
			{ cwd }
		);

		keys.forEach(i => {
			fs.renameSync(
				`${cwd}/${baseName}${i + 1}${TmpFileExt}.blp`,
				`${cwd}/${baseName}${i + 1}.blp`
			);
		});
	} finally {
		[-1, ...keys].forEach(i =>
			deleteFile(`${cwd}/${baseName}${i + 1}${TmpFileExt}.png`)
		);
	}
};

export default sliceBlp;

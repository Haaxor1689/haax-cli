import path from 'path';

import fs from 'fs-extra';
import sharp from 'sharp';

import { blpFromSharp, blpToFile } from './utils.js';

const sliceBlp = async ({ filePath }: { filePath: string }) => {
	if (fs.existsSync(filePath) && fs.lstatSync(filePath).isDirectory()) {
		const files = fs.readdirSync(filePath).filter(v => v.endsWith('.png'));
		for (const f of files) await sliceBlp({ filePath: `${filePath}/${f}` });
		return;
	}

	if (!filePath.endsWith('.png')) throw 'Please provide a .png file to slice.';

	const baseName = path.basename(filePath).slice(0, -4);
	const cwd = path.dirname(filePath);

	let keys: number[] = [];
	console.log(`Slicing ${filePath}...`);

	const image = await sharp(filePath);
	const { width = 0, height = 0 } = await image.metadata();

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
		const extract = {
			top: 256 * Math.floor(i / (columns + 1)),
			left: 256 * (i % (columns + 1)),
			width: i % (columns + 1) === columns ? lastWidth : 256,
			height: i >= (columns + 1) * rows ? lastHeight : 256
		};
		const slice = await blpFromSharp(await image.clone().extract(extract), {
			meta: { width: extract.width, height: extract.height, paletteBitDepth: 0 }
		});
		fs.removeSync(path.join(cwd, `${baseName}${i + 1}.blp`));
		blpToFile(slice, path.join(cwd, `${baseName}${i + 1}.blp`));
	}
};

export default sliceBlp;

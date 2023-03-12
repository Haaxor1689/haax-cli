import path from 'path';

import fs from 'fs-extra';

import { BLPConverter, exec } from '../utils.js';

const fixWorldMapCompression = async (directoryPath: string) => {
	const images = fs
		.readdirSync(directoryPath)
		.filter(f => fs.lstatSync(path.join(directoryPath, f)).isDirectory())
		.flatMap(f =>
			fs
				.readdirSync(path.join(directoryPath, f))
				.map(blp => path.join(directoryPath, f, path.parse(blp).name))
		);

	for (const img of images) {
		const split = img.split('/').flatMap(i => i.split('\\'));
		const isMap = split.at(-1)?.match(`${split.at(-2)}\\d+`);
		console.log(img, !!isMap);

		await exec(`"${BLPConverter}" ${img}.blp`);
		await exec(
			`"${BLPConverter}" /N /UPNG_RGBA=${
				isMap ? 'BLP_DXT1_A1' : 'BLP_DXT5'
			} ${img}.png`
		);
		fs.unlinkSync(`${img}.png`);
	}
};
121;

fixWorldMapCompression(process.argv[2] ?? '');

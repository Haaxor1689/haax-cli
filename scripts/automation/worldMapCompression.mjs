import path from 'path';

import fs from 'fs-extra';

import { exec, ScriptDirname } from '../utils.mjs';

const fixWorldMapCompression = async directoryPath => {
	console.log(directoryPath);
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
		const isMap = split.at(-1).match(`${split.at(-2)}\\d+`);
		console.log(img, !!isMap);

		await exec(`${ScriptDirname}/../BLPConverter.exe ${img}.blp`);
		await exec(
			`${ScriptDirname}/../BLPConverter.exe /N /UPNG_RGBA=${
				isMap ? 'BLP_DXT1_A1' : 'BLP_DXT5'
			} ${img}.png`
		);
		fs.unlinkSync(`${img}.png`);
	}
};
121;

fixWorldMapCompression(process.argv[2]);

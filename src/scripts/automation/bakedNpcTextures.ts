import path from 'path';

import fs from 'fs-extra';

import { BLPConverter, exec } from '../utils.js';

const fixBakedNpcTextures = async (cwd: string) => {
	const dir = fs.readdirSync(cwd).filter(f => f.endsWith('.blp'));

	for (const b of dir) {
		const blp = fs.readFileSync(path.join(cwd, b));
		if (blp.length === 44876) continue;
		console.log(b, blp.length);

		const img = path.join(cwd, b.slice(0, -4));
		await exec(`"${BLPConverter}" ${path.join(cwd, b)}`);
		await exec(`"${BLPConverter}" /FBLP_DXT1_A0 ${img}.png`);
	}

	fs.readdirSync(cwd)
		.filter(v => v.endsWith('.png'))
		.forEach(f => fs.unlinkSync(path.join(cwd, f)));
};

fixBakedNpcTextures(process.argv[2] ?? '');

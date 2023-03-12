import path from 'path';

import fs from 'fs-extra';

import { isNotUndefined } from '../utils.js';

const findMissingMinimap = async (...pathNames: string[]) => {
	// const worldPath = path.join(pathNames[0] ?? '', '..', '..', 'World');

	const data = fs.readFileSync(`${pathNames[0]}/md5translate.trs`, {
		encoding: 'utf-8'
	});
	const maps = data.split('dir: ');

	for (const map of maps) {
		const [name, ...lines] = map.split('\r\n');

		// if (!name || !fs.existsSync(path.join(worldPath, name))) {
		if (!name) {
			continue;
		}

		const entries = lines
			.filter(v => v)
			.map(v => v.trim().split('\t') as [string, string]);

		if (entries.length <= 0) continue;

		// const chunks = fs
		// 	.readdirSync(path.join(worldPath, name))
		// 	.map(c => path.join(name, c));
		const textures = pathNames.flatMap(dir => fs.readdirSync(dir));

		entries.forEach(([k, v]) => {
			if (v && !textures.some(t => t === v)) console.log(`${k}: ${v}`);
		});

		// chunks.forEach(c => {
		// 	if (!entries.some(e => e.indexOf(c.slice(0, -4)) >= 0))
		// 		console.log(c, 'missing');
		// });
	}
};

export default findMissingMinimap;

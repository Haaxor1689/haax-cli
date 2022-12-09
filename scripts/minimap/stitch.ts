import path from 'path';

import fs from 'fs-extra';
import sharp from 'sharp';

import { exec } from '../utils.js';

const paths = [
	'C:/Projects/_WoW/_Patches/turtlewow-client/Textures/Minimap',
	'C:/Projects/_WoW/_Patches/Patch/textures/Minimap',
	'C:/Projects/_WoW/_Patches/Textures/textures/Minimap'
];
const out = 'C:/Projects/_WoW/ps-templates/stitches';

const data = fs.readFileSync(`${paths[0]}/md5translate.trs`, {
	encoding: 'utf-8'
});
const maps = data.split('dir: ');

for (const map of maps) {
	const [name, ...lines] = map.split('\r\n');

	if (!name || lines.filter(v => v).some(l => !l.match(/map\d+_\d+/))) {
		console.log(name, 'skip');
		continue;
	}

	const entries = lines
		.filter(v => v)
		.map(v => {
			const s = v.trim().split('\t');
			const [_, x, y] = [...(s[0]?.match(/map(\d+)_(\d+)/) ?? [])];
			const hash = s[1]?.slice(0, -4) ?? '';
			return {
				hash,
				x: Number(x),
				y: Number(y),
				cwd: paths.find(
					cwd =>
						fs.existsSync(`${cwd}/${hash}.blp`) &&
						fs.statSync(`${cwd}/${hash}.blp`).size > 0
				)
			};
		})
		.filter(v => v.cwd);

	if (entries.length <= 0) {
		continue;
	}
	console.log(name);

	const xMin = entries.reduce(
		(acc, next) => Math.min(acc, next.x),
		entries[0]?.x ?? 0
	);

	const xMax = entries.reduce(
		(acc, next) => Math.max(acc, next.x),
		entries[0]?.x ?? 0
	);

	const yMin = entries.reduce(
		(acc, next) => Math.min(acc, next.y),
		entries[0]?.y ?? 0
	);

	const yMax = entries.reduce(
		(acc, next) => Math.max(acc, next.y),
		entries[0]?.y ?? 0
	);

	const width = 256 * (xMax - xMin + 1);
	const height = 256 * (yMax - yMin + 1);

	for (const { hash, cwd } of entries) {
		const { stderr } = await exec(
			`${process.cwd()}/scripts/BLPConverter.exe ${hash}.blp`,
			{ cwd }
		);
		stderr && console.log(hash, stderr);
	}

	console.log({ xMin, xMax, yMin, yMax, width, height });

	await sharp({
		create: {
			width,
			height,
			channels: 4,
			background: 'transparent'
		}
	})
		.composite(
			entries
				.filter(i => fs.existsSync(`${i.cwd}/${i.hash}.png`))
				.map(i => ({
					input: `${i.cwd}/${i.hash}.png`,
					top: 256 * (i.y - yMin),
					left: 256 * (i.x - xMin)
				}))
		)
		.toFile(`${out}/${name}.png`);
}

paths.forEach(p => {
	fs.readdirSync(p)
		.filter(v => v.endsWith('.png'))
		.forEach(f => fs.unlinkSync(path.join(p, f)));
});

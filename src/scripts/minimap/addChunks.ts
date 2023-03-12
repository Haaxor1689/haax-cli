import path from 'path';

import Config from '../config.js';
import { loopFilesRecursive } from '../utils.js';
import { blpToFile, pngToBlp } from '../blp/utils.js';

import loadMinimap from './load.js';
import saveMinimap from './save.js';

const addMinimapChunks = async () => {
	const texturesDir = path.join(Config('PatchPath'), 'Textures', 'Minimap');
	const minimap = loadMinimap();

	await loopFilesRecursive(texturesDir, async (f, isDir) => {
		if (isDir) return;

		const [_, name, x, y] = f.match(/(\w+)\\(\d+)_(\d+)\.png$/) ?? [];
		if (!name || !x || !y) {
			f.endsWith('.png') && console.log(`Skipping ${f}...`);
			return;
		}

		if (!minimap[name]) {
			console.log(`Unknown map ${name}...`);
			return;
		}

		const entry = minimap[name]?.find(
			e => e.type === 'map' && e.x === Number(x) && e.y === Number(y)
		);
		const dest = `${name}\\map${x}_${y}.blp`;

		if (!entry) {
			const e = {
				src: dest,
				dest,
				type: 'map' as const,
				x: Number(x),
				y: Number(y)
			};
			console.log('Pushing new entry...', e);
			minimap[name]?.push(e);
		} else if (entry.dest !== dest) {
			console.log(`Updating from ${entry.dest} to ${dest}...`);
			entry.dest = dest;
		}

		blpToFile(
			await pngToBlp(path.join(texturesDir, `${name}\\${x}_${y}.png`), {
				compression: 'PIXEL_DXT1'
			}),
			path.join(texturesDir, dest)
		);
	});

	saveMinimap(minimap);
};

export default addMinimapChunks;

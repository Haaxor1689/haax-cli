import path from 'path';

import fs from 'fs-extra';
import { padStart } from 'lodash-es';

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

		const wmoMatch = f.match(/Minimap\\(.+)\\([^\\]+)_(\d+)_(\d+)_(\d+)\.png$/);
		if (wmoMatch) {
			const [_, p, name, c, x, y] = wmoMatch;

			if (!p || !name || !c || !x || !y) {
				console.log(`Skipping ${f}...`);
				return;
			}

			if (!minimap[p]) {
				console.log(`Adding new WMO ${p}...`);
				minimap[p] = [];
			}

			const entry = minimap[p]?.find(
				e =>
					e.type === 'wmo' &&
					e.name === name &&
					e.c === Number(c) &&
					e.x === Number(x) &&
					e.y === Number(y)
			);
			const src = `${p}\\${name}_${padStart(c, 3, '0')}_${padStart(
				x,
				2,
				'0'
			)}_${padStart(y, 2, '0')}.blp`;
			const dest = `${name}_${padStart(c, 3, '0')}_${padStart(
				x,
				2,
				'0'
			)}_${padStart(y, 2, '0')}.blp`;

			if (!entry) {
				const e = {
					src,
					dest,
					type: 'wmo' as const,
					name: String(name),
					c: Number(c),
					x: Number(x),
					y: Number(y)
				};
				console.log('Pushing new entry...', e);
				minimap[p]?.push(e);
			} else if (entry.dest !== dest) {
				console.log(`Updating from ${entry.dest} to ${dest}...`);
				entry.dest = dest;
			}

			blpToFile(
				await pngToBlp(f, { compression: 'PIXEL_DXT1' }),
				path.join(texturesDir, dest)
			);
			await fs.remove(f);
			return;
		}

		const worldMapMatch = f.match(/(\w+)_(\d+)_(\d+)\.png$/);
		if (worldMapMatch) {
			const [_, name, x, y] = worldMapMatch;

			if (!name || !x || !y) {
				console.log(`Skipping ${f}...`);
				return;
			}

			if (!minimap[name]) {
				console.log(`Adding new map ${name}...`);
				minimap[name] = [];
			}

			await fs.ensureDir(path.join(texturesDir, name));
			const entry = minimap[name]?.find(
				e => e.type === 'map' && e.x === Number(x) && e.y === Number(y)
			);
			const dest = `${name}\\map${padStart(x, 2, '0')}_${padStart(
				y,
				2,
				'0'
			)}.blp`;

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
				await pngToBlp(f, { compression: 'PIXEL_DXT1' }),
				path.join(texturesDir, dest)
			);
			await fs.remove(f);
		}
	});

	saveMinimap(minimap);
};

export default addMinimapChunks;

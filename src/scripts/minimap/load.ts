import path from 'path';

import fs from 'fs-extra';

import Config from '../config.js';
import { isNotUndefined } from '../utils.js';

export type CommonEntry = { src: string; dest: string };
export type MapEntry = { type: 'map'; x: number; y: number };
export type WmoEntry = {
	type: 'wmo';
	name: string;
	c: number;
	x: number;
	y: number;
};
export type MinimapEntry = CommonEntry & (MapEntry | WmoEntry);

const loadMinimap = (
	trsPath = path.join(
		Config('PatchPath'),
		'Textures',
		'Minimap',
		'md5translate.trs'
	)
) => {
	const data = fs.readFileSync(trsPath, { encoding: 'utf-8' });
	const entries = data
		.split('dir: ')
		.filter(v => v)
		.map(m => {
			const [name, ...lines] = m.trim().split('\r\n');
			if (!name) return undefined;
			return [
				name,
				lines
					.map<MinimapEntry | undefined>(l => {
						const [src, dest] = l.trim().split('\t');
						if (!src || !dest) {
							console.log(`Probably incorrectly formatted line ${l}`);
							return undefined;
						}

						const worldMapMatch = src?.match(/map(\d+)_(\d+)/);
						if (worldMapMatch) {
							const [_, x, y] = worldMapMatch;
							return {
								src,
								dest,
								type: 'map',
								x: Number(x),
								y: Number(y)
							};
						}
						const wmoMatch = src?.match(/([^\\]+)_(\d+)_(\d+)_(\d+)/);
						if (wmoMatch) {
							const [_, name, c, x, y] = wmoMatch;
							return {
								src,
								dest,
								type: 'wmo',
								name: String(name),
								c: Number(c),
								x: Number(x),
								y: Number(y)
							};
						}

						console.log(`${l} did not match neither map nor WMO.`);
						return undefined;
					})
					.filter(isNotUndefined)
			] as const;
		})
		.filter(isNotUndefined);
	return Object.fromEntries(entries);
};

export default loadMinimap;

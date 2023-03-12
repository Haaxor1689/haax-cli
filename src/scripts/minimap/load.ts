import path from 'path';

import fs from 'fs-extra';

import Config from '../config.js';
import { isNotUndefined } from '../utils.js';

export type CommonEntry = { src: string; dest: string };
export type MapEntry = { type: 'map'; x: number; y: number };
export type WmoEntry = { type: 'wmo' };
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

						const [_, x, y] = src?.match(/map(\d+)_(\d+)/) ?? [];

						return {
							src,
							dest,
							...(!x || !y
								? { type: 'wmo' }
								: { type: 'map', x: Number(x), y: Number(y) })
						};
					})
					.filter(isNotUndefined)
			] as const;
		})
		.filter(isNotUndefined);
	return Object.fromEntries(entries);
};

export default loadMinimap;

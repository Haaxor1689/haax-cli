import path from 'path';

import fs from 'fs-extra';
import sharp from 'sharp';

import { blpFromFile } from '../blp/utils.js';
import {
	getFileFromPatch,
	getSortedPatches,
	isNotUndefined
} from '../utils.js';
import Config from '../config.js';

import loadMinimap, { CommonEntry, MapEntry } from './load.js';

const stitchMinimap = async ({
	withCoordinates = false,
	patchesDir = path.join(Config('PatchPath'), '..'),
	outDir = path.join(Config('PatchPath'), 'Textures', 'Minimap', 'Stitches')
}: {
	withCoordinates: boolean;
	patchesDir: string;
	outDir: string;
}) => {
	const patches = getSortedPatches(patchesDir);
	const trsPath = getFileFromPatch(
		patches,
		'Textures/Minimap/md5translate.trs'
	);

	if (!trsPath) throw "Couldn't find md5translate.trs in any of the patches.";
	await fs.ensureDir(outDir);

	for (const [name, entr] of Object.entries(loadMinimap(trsPath))) {
		const entries = entr.filter(
			(v): v is CommonEntry & MapEntry => v.type === 'map'
		);

		// Skip WMOs (for now)
		if (entries.length <= 0) {
			console.log(`Skipped ${name}...`);
			continue;
		}
		console.log(`Parsing ${name}...`);

		const xMin = Math.min(...entries.map(v => v.x));
		const xMax = Math.max(...entries.map(v => v.x));
		const yMin = Math.min(...entries.map(v => v.y));
		const yMax = Math.max(...entries.map(v => v.y));

		const width = 256 * (xMax - xMin + 1);
		const height = 256 * (yMax - yMin + 1);

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
					.flatMap(e => {
						if (e.type !== 'map') return undefined;
						const blpPath = getFileFromPatch(
							patches,
							`Textures/Minimap/${e.dest}`
						);
						if (!blpPath) return undefined;
						const { buffer, ...raw } = blpFromFile(blpPath).images[0];
						return [
							{
								input: Buffer.from(buffer),
								raw: { ...raw, channels: 4 as const },
								top: 256 * (e.y - yMin),
								left: 256 * (e.x - xMin)
							},
							withCoordinates
								? {
										input: { text: { text: `${e.x}_${e.y}` } },
										top: 256 * (e.y - yMin),
										left: 256 * (e.x - xMin)
								  }
								: undefined
						];
					})
					.filter(isNotUndefined)
			)
			.toFile(path.join(outDir, `${name}.png`));
	}
};

export default stitchMinimap;

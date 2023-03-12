import path from 'path';

import fs from 'fs-extra';
import glob from 'glob';

import { BlpParseOptions, parseFromBlp, parseFromRaw } from '../blp/parse.js';
import { Blp } from '../blp/types.js';
import Config from '../config.js';

const CompressionLookup: [
	string[],
	(((prev: BlpParseOptions) => BlpParseOptions) | BlpParseOptions)?
][] = [
	[
		['**/Interface/Icons/*.blp'],
		{
			format: 'COLOR_DXT',
			alphaSize: 0,
			mipMaps: 'MIPS_NONE',
			compression: 'PIXEL_DXT1'
		}
	],
	[
		['**/Textures/BakedNpcTextures/*.blp'],
		{
			format: 'COLOR_DXT',
			alphaSize: 0,
			mipMaps: 'MIPS_GENERATED',
			compression: 'PIXEL_DXT1'
		}
	],
	// [
	// 	['**/TileSet/Expansion02/DragonBlight/**/*.blp'],
	// 	prev => ({
	// 		...prev,
	// 		alphaSize: 4,
	// 		mipMaps: 'MIPS_GENERATED'
	// 	})
	// ],
	[
		['**/Interface/TaxiFrame/*.blp'],
		{
			format: 'COLOR_DXT',
			alphaSize: 8,
			mipMaps: 'MIPS_GENERATED',
			compression: 'PIXEL_DXT3'
		}
	],
	[
		[
			'**/Character/**/*.blp',
			'**/Creature/**/*.blp',
			'**/Dungeons/**/*.blp',
			'**/Environments/**/*.blp',
			'**/World/**/*.blp'
		],
		prev => ({
			format: prev.format === 'COLOR_PALETTE' ? 'COLOR_PALETTE' : undefined,
			mipMaps: 'MIPS_GENERATED'
		})
	],
	[['**/Interface/!(Icons|TaxiFrame)/**/*.blp', '**/Textures/Minimap/*.blp']]
];

// const Dxt5Data = (pixelCount: number) =>
// 	new r.Array(
// 		new r.Struct({
// 			alpha: new r.Array(r.uint8, 2),
// 			lookup: new CompactArray(3, 16),
// 			pixels: new CompactArray(4, 16)
// 		}),
// 		pixelCount / (16 * 16)
// 	);

const blpCompression = async (dirPath = Config('PatchPath')) => {
	for (const [patterns, options] of CompressionLookup) {
		const files = patterns.flatMap(p => glob.sync(p, { cwd: dirPath }));
		console.log(patterns);

		for (const file of files) {
			try {
				const fullPath = path.join(dirPath, file);
				const blp = parseFromBlp(fs.readFileSync(fullPath));
				console.log(`Fixing ${file}...`);
				options &&
					Object.entries(options).forEach(([k, v]) => {
						const val = blp[k as keyof BlpParseOptions];
						v !== val && console.log(`  ${k}: ${val} !== ${v}`);
					});

				const newLocal = await parseFromRaw(
					blp.images[0].buffer as Buffer,
					blp.width,
					blp.height,
					typeof options === 'function' ? options(blp as never) : options
				);
				const buffer = Blp.toBuffer(newLocal);
				// TODO: Fix DX5 low alpha issue
				fs.writeFileSync(fullPath, buffer);
			} catch (e) {
				console.log(`Failed ${file}...`);
				console.log(e);
			}
		}
	}
};

export default blpCompression;

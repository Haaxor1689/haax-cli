import dxtJs from 'dxt-js';
import { isEqual, omit } from 'lodash-es';
import * as r from 'restructure';

import { CompactArray } from '../restructure.js';
import { isNotUndefined } from '../utils.js';

const getDxtCompression = (compression: string | number) => {
	switch (compression) {
		case 'PIXEL_DXT1':
			return dxtJs.flags.DXT1;
		case 'PIXEL_DXT3':
			return dxtJs.flags.DXT3;
		case 'PIXEL_DXT5':
			return dxtJs.flags.DXT5;
	}
	throw `Unsupported DXT compression ${compression}.`;
};

export const RawRGBA = (pixels: number) =>
	new r.Array(new r.Array(r.uint8, 4), pixels);

const BlpFormats = [
	'COLOR_JPEG',
	'COLOR_PALETTE',
	'COLOR_DXT',
	'COLOR_ARGB8888'
] as const;
export type BlpFormats = typeof BlpFormats[number];

const BlpCompressions = [
	'PIXEL_DXT1',
	'PIXEL_DXT3',
	'PIXEL_ARGB8888',
	'PIXEL_ARGB1555',
	'PIXEL_ARGB4444',
	'PIXEL_RGB565',
	'PIXEL_A8',
	'PIXEL_DXT5',
	'PIXEL_UNSPECIFIED',
	'PIXEL_ARGB2565',
	'PIXEL_BC5'
] as const;
export type BlpCompressions = typeof BlpCompressions[number];

const BlpMips = ['MIPS_NONE', 'MIPS_GENERATED', 'MIPS_HANDMADE'] as const;
export type BlpMips = typeof BlpMips[number];

const BlpAlphaSizes = [0, 1, 4, 8] as const;
export type BlpAlphaSizes = typeof BlpAlphaSizes[number];

export const Blp = new r.Struct({
	signature: new r.String(4),

	version: r.int32le,
	format: new r.Enum(r.uint8, BlpFormats),
	alphaSize: r.uint8,
	compression: new r.Enum(r.uint8, BlpCompressions),
	mipMaps: new r.Enum(r.uint8, BlpMips),

	width: r.int32le,
	height: r.int32le,

	mipOffsets: new r.Array(r.uint32le, 16),
	mipSizes: new r.Array(r.uint32le, 16),

	palette: new r.Array(new r.Array(r.uint8, 4), 256),

	buffer: new r.Buffer(Number.MAX_SAFE_INTEGER),

	images() {
		// Try to handle unknown formats
		if (typeof this.format === 'number') {
			console.log(
				`WARNING: Unknown format ${this.format}, trying to find best possible replacement.`
			);
			console.log(this);
			if (this.palette.some(v => !isEqual(v, [0, 0, 0, 0]))) {
				this.format = 'COLOR_PALETTE';
			} else if (
				typeof this.compression === 'string' &&
				this.compression.match('DXT')
			) {
				this.format = 'COLOR_DXT';
			} else {
				this.format = 'COLOR_ARGB8888';
			}
		}

		const base = (this.mipOffsets[0] ?? 0) as number;
		const mips = (this.mipOffsets as number[])
			.filter(v => v)
			.map((m, i) =>
				i === 0
					? (this.buffer as Buffer)
					: (this.buffer as Buffer).subarray(
							m - base,
							m - base + (this.mipSizes[i] ?? 0)
					  )
			)
			.map((m, i) => {
				const width = Math.ceil(this.width / Math.pow(2, i));
				const height = Math.ceil(this.height / Math.pow(2, i));
				const pixelCount = width * height;

				let buffer: Uint8Array;
				switch (this.format) {
					case 'COLOR_ARGB8888': {
						const raw = new r.Array(
							new r.Array(r.uint8, 4),
							pixelCount
						).fromBuffer(m);

						buffer = new Uint8Array(
							raw.flatMap(([b, g, r, a]) => [r, g, b, a])
						);
						break;
					}
					case 'COLOR_DXT':
						buffer = dxtJs.decompress(
							new Uint8Array(m),
							width,
							height,
							getDxtCompression(this.compression)
						);
						break;
					case 'COLOR_PALETTE': {
						const raw = new r.Struct({
							img: new r.Array(r.uint8, pixelCount),
							alpha: new r.Optional(
								new CompactArray(this.alphaSize as never, pixelCount),
								!!this.alphaSize
							)
						}).fromBuffer(m);

						buffer = new Uint8Array(
							[...Array(pixelCount).keys()].flatMap(i => {
								let alpha = raw.alpha?.[i] ?? 0;
								switch (this.alphaSize) {
									case 0:
										alpha = 255;
										break;
									case 1:
										alpha *= 255;
										break;
									case 4:
										alpha *= 2;
										break;
								}

								const [b = 0, g = 0, r = 0] = (
									this.palette[raw.img[i] ?? 0] ?? []
								).slice(0, -1);
								return [r, g, b, alpha];
							})
						);
						break;
					}
					default:
						throw `Unsupported format ${this.format}\n\n${JSON.stringify(
							omit(this, ['mipSizes', 'mipOffsets', 'palette', 'buffer']),
							null,
							2
						)}`;
				}

				return { buffer, width, height };
			})
			.filter(isNotUndefined);
		return mips as [typeof mips[number], ...typeof mips];
	}
});

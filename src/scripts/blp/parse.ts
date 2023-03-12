import { isEqual, uniq, uniqWith } from 'lodash-es';
import * as r from 'restructure';
import dxtJs from 'dxt-js';
import sharp from 'sharp';

import { CompactArray } from '../restructure.js';

import {
	Blp,
	BlpAlphaSizes,
	BlpCompressions,
	BlpFormats,
	BlpMips
} from './types.js';

const RawRGBA = <L extends number>(length: L) =>
	new r.Array(new r.Array(r.uint8, 4), length);
type RawRGBA = r.LengthArray<r.LengthArray<number, 4>, number>;

const createLengthArray = <T, L extends number>(
	length: L,
	fill: T,
	initialData?: T[]
) => {
	const arr = initialData ?? [];
	for (let i = arr.length; i < length; i++) {
		arr.push(fill);
	}
	return arr as r.LengthArray<T, L>;
};

const getAlphaDepth = (raw: RawRGBA) => {
	const alphas = uniq(raw.map(v => v[3]));
	// TODO: Add support for 4bit depth alpha
	if (alphas.length > 2) return 8;
	if (alphas.some(a => a !== 255)) return 1;
	return 0;
};

const createPalette = (format: string, raw: RawRGBA) =>
	createLengthArray<r.LengthArray<number, 4>, 256>(
		256,
		[0, 0, 0, 0],
		format === 'COLOR_PALETTE'
			? uniqWith(
					raw.map(([r, g, b]) => [b, g, r, 0]),
					isEqual
			  )
			: undefined
	);

const rawToBlp = async (
	raw: RawRGBA,
	buffer: Buffer,
	width: number,
	height: number,
	meta: Omit<Required<BlpParseOptions>, 'mipMaps'> & {
		palette: r.LengthArray<r.LengthArray<number, 4>, 256>;
	}
) => {
	switch (meta.format) {
		case 'COLOR_DXT': {
			return dxtJs.compress(
				buffer,
				width,
				height,
				meta.compression === 'PIXEL_DXT1'
					? dxtJs.flags.DXT1
					: meta.compression === 'PIXEL_DXT3'
					? dxtJs.flags.DXT3
					: dxtJs.flags.DXT5
			) as Buffer;
		}
		case 'COLOR_PALETTE': {
			const img = new Uint8Array(
				raw.flatMap(([r, g, b]) =>
					meta.palette.findIndex(v => isEqual(v, [b, g, r, 0]))
				)
			) as Buffer;

			if (meta.alphaSize) {
				const alpha = new CompactArray(meta.alphaSize, width * height).toBuffer(
					raw.flatMap(v =>
						meta.alphaSize === 8
							? v[3]
							: meta.alphaSize === 4
							? v[3] / 2
							: v[3]
							? 1
							: 0
					)
				);
				return Buffer.concat([img, alpha]);
			}
			return img;
		}
		case 'COLOR_ARGB8888':
			return buffer;
		default:
			throw `Unsupported compression ${meta.compression}`;
	}
};

export type BlpParseOptions = {
	format?: BlpFormats;
	mipMaps?: BlpMips;
	alphaSize?: BlpAlphaSizes;
	compression?: BlpCompressions;
};

export const parseFromRaw = async (
	imgBuffer: Buffer,
	width: number,
	height: number,
	{
		format = 'COLOR_DXT',
		mipMaps = 'MIPS_NONE',
		alphaSize,
		compression
	}: BlpParseOptions = {}
) => {
	imgBuffer = Buffer.from(imgBuffer);
	const imgRaw = RawRGBA(width * height).fromBuffer(imgBuffer);

	const palette = createPalette(format, imgRaw);

	if (alphaSize === undefined) alphaSize = getAlphaDepth(imgRaw);
	if (!compression)
		compression =
			format === 'COLOR_PALETTE'
				? 'PIXEL_UNSPECIFIED'
				: alphaSize <= 1
				? 'PIXEL_DXT1'
				: 'PIXEL_DXT3';

	const compressionOptions = {
		format,
		compression,
		palette,
		alphaSize
	} as const;

	let buffer = await rawToBlp(
		imgRaw,
		imgBuffer,
		width,
		height,
		compressionOptions
	);

	const mipOffsets = createLengthArray(16, 0, [1172]);
	const mipSizes = createLengthArray(16, 0, [buffer.length]);

	if (mipMaps !== 'MIPS_NONE') {
		let mipWidth = width;
		let mipHeight = height;
		let idx = 0;

		let prevMip = sharp(imgBuffer, { raw: { width, height, channels: 4 } });

		do {
			++idx;
			mipWidth = Math.max(1, mipWidth / 2);
			mipHeight = Math.max(1, mipHeight / 2);

			const mip = prevMip.resize(mipWidth, mipHeight, { kernel: 'nearest' });
			prevMip = mip.clone();

			const rawBuffer = await mip.ensureAlpha().raw().toBuffer();
			const mipBuffer = await rawToBlp(
				RawRGBA(mipWidth * mipHeight).fromBuffer(rawBuffer),
				rawBuffer,
				mipWidth,
				mipHeight,
				compressionOptions
			);

			mipOffsets[idx] = (mipOffsets[idx - 1] ?? 0) + (mipSizes[idx - 1] ?? 0);
			mipSizes[idx] = mipBuffer.length;

			buffer = Buffer.concat([buffer, mipBuffer]);
		} while (mipWidth > 1 || mipHeight > 1);
	}

	return {
		signature: 'BLP2',
		version: 1,
		format,
		alphaSize,
		compression,
		mipMaps,
		width,
		height,
		mipOffsets,
		mipSizes,
		palette,
		buffer
	} as const;
};

export const parseFromBlp = (buffer: Buffer) => Blp.fromBuffer(buffer);

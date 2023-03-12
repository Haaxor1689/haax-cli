import fs from 'fs-extra';
import sharp from 'sharp';

import { parseFromRaw } from './parse.js';
import { Blp, BlpCompressions } from './types.js';

export const blpFromFile = (filePath: string) =>
	Blp.fromBuffer(fs.readFileSync(filePath));

type Meta = Record<'width' | 'height' | 'paletteBitDepth', number>;

export type BlpParseOptions = {
	compression?: BlpCompressions;
	meta?: Meta;
	hasMips?: boolean;
};

export const blpFromSharp = async (
	image: sharp.Sharp,
	{ compression, meta, hasMips }: BlpParseOptions = {}
) => {
	const {
		width = 0,
		height = 0,
		paletteBitDepth = 0
	} = meta ?? ((await image.metadata()) as unknown as Meta);

	return await parseFromRaw(
		await image.ensureAlpha().raw().toBuffer(),
		width,
		height,
		{
			compression,
			format: paletteBitDepth ? 'COLOR_PALETTE' : 'COLOR_DXT',
			mipMaps: hasMips ? 'MIPS_GENERATED' : 'MIPS_NONE'
		}
	);
};

export const blpToSharp = (blp: ReturnType<(typeof Blp)['fromBuffer']>) =>
	sharp(blp.images[0].buffer, { raw: { ...blp.images[0], channels: 4 } }).png({
		palette: blp.format === 'COLOR_PALETTE'
	});

export const blpToPngFile = async (
	blp: ReturnType<(typeof Blp)['fromBuffer']>,
	filePath: string,
	withMips?: boolean
) => {
	await blpToSharp(blp).toFile(
		`${filePath.slice(0, -4)}${blp.images.length > 1 ? '.mips' : ''}.png`
	);

	if (withMips)
		for (const { buffer, ...raw } of blp.images.slice(1)) {
			await sharp(buffer, { raw: { ...raw, channels: 4 } })
				.png({ palette: blp.format === 'COLOR_PALETTE' })
				.toFile(`${filePath.slice(0, -4)}-${raw.width}x${raw.height}.png`);
		}
};

export const pngToBlp = async (
	filePath: string,
	options: BlpParseOptions = {}
) => {
	const image = await sharp(filePath);
	return blpFromSharp(image, {
		hasMips: filePath.endsWith('.mips.png'),
		...options
	});
};

export const blpToFile = (
	blp: Omit<ReturnType<(typeof Blp)['fromBuffer']>, 'images'>,
	filePath: string
) => {
	const buffer = Blp.toBuffer(blp);
	fs.writeFileSync(filePath.replace(/(\.mips)?\.png/, '.blp'), buffer);
};

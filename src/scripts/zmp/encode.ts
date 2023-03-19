import path from 'path';

import fs from 'fs-extra';
import sharp from 'sharp';
import Color from 'color';

import Entities from '../dbc/types.js';
import { parseCsv, readDbcString } from '../utils.js';

import { PngData, ZmpData } from './utils.js';

const encodeZmp = async (filePath: string, dbcPath: string) => {
	if (!filePath?.endsWith('.png')) throw 'Please provide a .png file to decode';
	if (!dbcPath?.endsWith('AreaTable.dbc'))
		throw 'Please provide path to AreaTable.dbc';

	const map = path.basename(filePath).slice(0, -4);
	const colorsPath = path.join(path.dirname(filePath), `${map}.color.csv`);
	if (!fs.readFileSync(colorsPath)) throw `Missing ${map}.color.csv file`;

	console.log('Loading image data...');
	const imageData = PngData.fromBuffer(await sharp(filePath).raw().toBuffer());

	console.log('Loading AreaTable.dbc...');
	const dbc = Entities.AreaTable.fromBuffer(fs.readFileSync(dbcPath));

	console.log('Parsing colors file...');
	const colors = parseCsv<[string, string]>(
		fs.readFileSync(colorsPath, { encoding: 'utf8' })
	)
		.slice(1)
		.map(
			([k, v]) =>
				[
					dbc.records.find(
						r => readDbcString(r.name_enUS, dbc.stringBlock) === k
					)?.id ?? 0,
					v
				] as const
		);

	console.log(`Saving ${map}.zmp file...`);
	fs.writeFileSync(
		path.join(path.dirname(filePath), `${map}.zmp`),
		ZmpData.toBuffer(
			imageData.map(
				v =>
					colors.find(c => c[1].toUpperCase() === Color.rgb(...v).hex())?.[0] ??
					0
			)
		)
	);
};

export default encodeZmp;

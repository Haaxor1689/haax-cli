import path from 'path';

import { uniq } from 'lodash-es';
import fs from 'fs-extra';
import sharp from 'sharp';
import Color from 'color';

import Entities from '../dbc/types.js';
import { parseCsv, readDbcString } from '../utils.js';

import { PngData, ZmpData } from './utils.js';

const decodeZmp = async (filePath: string, dbcPath: string) => {
	if (!filePath?.endsWith('.zmp')) throw 'Please provide a .zmp file to decode';
	if (!dbcPath?.endsWith('AreaTable.dbc'))
		throw 'Please provide path to AreaTable.dbc';

	const map = path.basename(filePath).slice(0, -4);
	const colorsPath = path.join(path.dirname(filePath), `${map}.color.csv`);

	console.log('Loading zmp data...');
	const data = ZmpData.fromBuffer(fs.readFileSync(filePath));

	console.log('Loading AreaTable.dbc...');
	const dbc = Entities.AreaTable.fromBuffer(fs.readFileSync(dbcPath));
	const stringBlock = dbc.stringBlock.toString();

	let colors: [number, string][] = [];
	if (fs.existsSync(colorsPath)) {
		console.log('Parsing colors file...');
		colors = parseCsv(fs.readFileSync(colorsPath, { encoding: 'utf8' }))
			.slice(1)
			.map(([k, v]) => [
				dbc.records.find(r => readDbcString(r.name_enUS, stringBlock) === k)
					?.id ?? 0,
				v
			]) as never;
	} else {
		console.log('No colors file found, generating new one...');
		colors = uniq([...data].sort()).map(v => [
			v,
			Color.rgb(
				Math.random() * 256,
				Math.random() * 256,
				Math.random() * 256
			).hex()
		]);
		fs.writeFileSync(
			colorsPath,
			`ZoneName,ColorHue\n${colors
				.map(
					v =>
						`${
							readDbcString(
								dbc.records.find(r => r.id === v[0])?.name_enUS ?? 0,
								stringBlock
							) || 'None'
						},${v[1]}`
				)
				.join('\n')}`
		);
	}

	console.log(`Saving ${map}.png file...`);
	await sharp(
		PngData.toBuffer(
			data.map(v => {
				const c = (Color(colors.find(c => c[0] === v)?.[1]).rgb() as any)
					.color as [number, number, number];
				return [...c, 255];
			})
		),
		{ raw: { width: 128, height: 128, channels: 4 } }
	).toFile(path.join(path.dirname(filePath), `${map}.png`));
};

export default decodeZmp;

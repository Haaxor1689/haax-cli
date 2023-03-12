import path from 'path';

import * as r from 'restructure';
import fs from 'fs-extra';
import sharp from 'sharp';
import { uniq, uniqBy } from 'lodash-es';
import Color from 'color';

import { readDbcString } from '../utils.js';
import Entities from '../dbc/types.js';

import { Adt } from './types.js';

const BlockWidth = 16;
const TotalWidth = BlockWidth * 64;

const decodeAdt = async (dirPath: string, ...otherPaths: string[]) => {
	const paths = uniqBy(
		[dirPath, ...otherPaths].flatMap(p => {
			if (!fs.lstatSync(p).isDirectory()) {
				throw 'Please provide path to a directory containing .adt chunks';
			}
			return fs
				.readdirSync(p)
				.filter(v => v.match(/\d+_\d+\.adt/))
				.map(c => [p, c]);
		}),
		v => v[1]?.toLocaleUpperCase()
	).map(v => path.join(...v));

	let areaIds = new Array<number>(TotalWidth * TotalWidth).fill(0);
	for (const block of paths) {
		const [_, xS, yS] = block.match(/_(\d+)_(\d+)\.adt/) ?? [];

		const x = Number(xS);
		const y = Number(yS);

		console.log(`Loading ADT ${block}...`);
		const adt = Adt.fromBuffer(fs.readFileSync(block));

		const chunks = adt
			.filter(v => v.type === 'MCNK')
			.map(
				({ data }: any) =>
					({
						x: data.header.x,
						y: data.header.y,
						areaId: data.header.areaId
					} as { x: number; y: number; areaId: number })
			);

		chunks.forEach(chunk => {
			areaIds[
				x * BlockWidth + // Block X
					y * TotalWidth * BlockWidth + //Block Y
					chunk.x + // Chunk X
					chunk.y * TotalWidth // Chunk Y
			] = chunk.areaId;
		});
	}

	const dbc = Entities.AreaTable.fromBuffer(
		fs.readFileSync(
			'C:/Projects/_WoW/_Patches/turtlewow-client-patch-3/DBFilesClient/AreaTable.dbc'
		)
	);

	areaIds = areaIds.map(a => {
		let area = dbc.records.find(r => r.id === a);
		if (!area || area.parentAreaId <= 0) return a;
		let parent;
		do {
			parent = dbc.records.find(r => r.id === area?.parentAreaId);
			if (parent) area = parent;
		} while (parent);
		return area.id;
	});

	const colors = uniq([...areaIds].sort()).map(
		v =>
			[
				v,
				Color.rgb(
					Math.random() * 256,
					Math.random() * 256,
					Math.random() * 256
				).hex()
			] as const
	);
	const stringBlock = dbc.stringBlock.toString();
	fs.writeFileSync(
		path.join(dirPath, `${path.basename(dirPath)}.colors.csv`),
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

	console.log(`Saving ${path.basename(dirPath)}.png file...`);
	await sharp(
		new r.Array(new r.Array(r.uint8, 4), TotalWidth * TotalWidth).toBuffer(
			areaIds.map(v => {
				const c = (Color(colors.find(c => c[0] === v)?.[1]).rgb() as any)
					.color as [number, number, number];

				return [...c, 255];
			})
		),
		{ raw: { width: TotalWidth, height: TotalWidth, channels: 4 } }
	).toFile(path.join(dirPath, `${path.basename(dirPath)}.png`));
};

export default decodeAdt;

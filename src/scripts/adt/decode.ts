import path from 'path';

import * as r from 'restructure';
import fs from 'fs-extra';
import sharp from 'sharp';
import { uniq } from 'lodash-es';
import Color from 'color';

import {
	getFileFromPatch,
	getSortedPatches,
	isNotUndefined,
	readDbcString
} from '../utils.js';
import Entities from '../dbc/types.js';
import Config from '../config.js';

import { Adt } from './types.js';

const BlockWidth = 16;
const TotalWidth = BlockWidth * 64;

const decodeAdt = async ({
	dirPath,
	patchesDir = path.join(Config('PatchPath'), '..'),
	areaTablePath = `${Config('PatchPath')}/DBFilesClient/AreaTable.dbc`
}: {
	dirPath: string;
	patchesDir?: string;
	areaTablePath?: string;
}) => {
	const patches = getSortedPatches(patchesDir);
	const basename = path.basename(dirPath);

	const paths = [...Array(64).keys()]
		.flatMap(x =>
			[...Array(64).keys()].map(y =>
				getFileFromPatch(
					patches,
					path.join(dirPath, `${basename}_${x}_${y}.adt`)
				)
			)
		)
		.filter(isNotUndefined);

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

	const dbc = Entities.AreaTable.fromBuffer(fs.readFileSync(areaTablePath));

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
	fs.writeFileSync(
		path.join(Config('PatchPath'), dirPath, `${basename}.colors.csv`),
		`ZoneName,ColorHue\n${colors
			.map(
				v =>
					`${
						readDbcString(
							dbc.records.find(r => r.id === v[0])?.name_enUS ?? 0,
							dbc.stringBlock
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
	).toFile(path.join(Config('PatchPath'), dirPath, `${basename}.png`));
};

export default decodeAdt;

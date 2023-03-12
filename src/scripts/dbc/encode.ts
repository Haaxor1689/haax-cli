import path from 'path';

import fs from 'fs-extra';

import { dbcRecordsToFile, parseCsv } from '../utils.js';

import Entities from './types.js';

const encodeDbc = async (filePath: string) => {
	// Directory mode
	if (fs.existsSync(filePath) && fs.lstatSync(filePath).isDirectory()) {
		for (const e of Object.keys(Entities)) {
			const p = path.join(filePath, `${e}.csv`);
			fs.existsSync(p) && (await encodeDbc(p));
		}
		return;
	}
	if (!filePath.endsWith('.csv')) throw 'Please provide a .csv file to encode.';

	const file = path.basename(filePath).slice(0, -4);
	const Entity = Entities[file as keyof typeof Entities];
	if (!Entity) throw `Unknown dbc table ${file}`;

	console.log(`Encoding ${filePath}`);

	const csv = fs.readFileSync(filePath, { encoding: 'utf8' });
	const entries = parseCsv(csv).slice(1);

	dbcRecordsToFile(Entity, entries, `${filePath.slice(0, -4)}.dbc`);
};

export default encodeDbc;

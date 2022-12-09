import path from 'path';

import fs from 'fs-extra';

import { dbcRecordsFromFile } from '../utils.js';

import Entities from './types.js';

const decodeDbc = async (filePath: string) => {
	// Directory mode
	if (fs.existsSync(filePath) && fs.lstatSync(filePath).isDirectory()) {
		for (const e of Object.keys(Entities)) {
			const p = path.join(filePath, `${e}.dbc`);
			fs.existsSync(p) && (await decodeDbc(p));
		}
		return;
	}
	if (!filePath.endsWith('.dbc')) throw 'Please provide a .dbc file to decode.';

	const file = path.basename(filePath).slice(0, -4);
	const entity = Entities[file];
	if (!entity) throw `Unknown dbc table ${file}.`;

	console.log(`Decoding ${filePath}`);
	const dbc = dbcRecordsFromFile(entity, filePath);

	fs.writeFileSync(
		`${filePath.slice(0, -4)}.csv`,
		[
			Object.keys(entity.fields.records.type.fields),
			...dbc.map(r =>
				Object.values(r).map(v =>
					typeof v === 'string' ? `"${v.replaceAll('"', '""')}"` : v
				)
			)
		].join('\n')
	);
};

export default decodeDbc;

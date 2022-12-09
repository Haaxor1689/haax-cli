import path from 'path';

import fs from 'fs-extra';

import Config from '../config.js';
import { exec, ScriptDirname } from '../utils.js';

import importDb from './import.js';

export const DatabasePath = () =>
	path.join(Config('PatchPath'), 'DBFilesClient/client.db');

const initDb = async (force?: string) => {
	if (!force && fs.existsSync(DatabasePath())) return;

	console.log('Importing database from dbc...');
	await exec(`npx prisma db push --schema="${ScriptDirname}/schema.prisma"`, {
		env: { DATABASE_URL: `file:${DatabasePath()}` }
	});
	await exec(`npx prisma generate --schema="${ScriptDirname}/schema.prisma"`, {
		env: { DATABASE_URL: `file:${DatabasePath()}` }
	});

	await importDb();
};

export default initDb;

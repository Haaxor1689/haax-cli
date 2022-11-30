// @ts-check
import path from 'path';

import fs from 'fs-extra';

import Config from '../config.mjs';
import { exec, ScriptDirname } from '../utils.mjs';

import importDb from './import.mjs';

export const DatabasePath = () =>
	path.join(Config().PatchPath, 'DBFilesClient/dev.db');

const initDb = async () => {
	if (fs.existsSync(DatabasePath())) return;

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

import path from 'path';

import fs from 'fs-extra';

import Config from '../config.js';
import { exec, PrismaSchema, ScriptDirname } from '../utils.js';

export const DatabasePath = () =>
	path.join(Config('PatchPath'), 'DBFilesClient/client.db');

const initDb = async (force?: string) => {
	if (!force && fs.existsSync(DatabasePath())) return;

	console.log('Initializing database from schema...');
	await exec(`npx prisma db push --schema="${PrismaSchema}"`, {
		env: { DATABASE_URL: `file:${DatabasePath()}` },
		cwd: ScriptDirname
	});
	await exec(`npx prisma generate --schema="${PrismaSchema}"`, {
		env: { DATABASE_URL: `file:${DatabasePath()}` },
		cwd: ScriptDirname
	});
};

export default initDb;

import { exec } from 'child_process';

import fs from 'fs-extra';

import Config from '../config.js';
import { ScriptDirname } from '../utils.js';

import initDb, { DatabasePath } from './init.js';

const prismaClient = async () => {
	if (!fs.existsSync(`${Config('PatchPath')}/DBFilesClient`))
		throw 'No DBFilesClient folder...';

	await initDb();

	console.log('Starting Prisma Studio...');
	const prisma = exec(
		`npx prisma studio --schema="${ScriptDirname}/schema.prisma"`,
		{ env: { DATABASE_URL: `file:${DatabasePath()}` } }
	);

	prisma.stdout?.on('data', d => d.trim() && console.log(d.trim()));
};

export default prismaClient;

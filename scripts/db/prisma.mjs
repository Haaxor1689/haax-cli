// @ts-check
import { exec } from 'child_process';

import fs from 'fs-extra';

import Config from '../config.mjs';
import { ScriptDirname } from '../utils.mjs';

import initDb, { DatabasePath } from './init.mjs';

const prismaClient = async () => {
	if (!fs.existsSync(`${Config().PatchPath}/DBFilesClient`))
		throw 'No DBFilesClient folder...';

	await initDb();

	console.log('Starting Prisma Studio...');
	const prisma = exec(
		`npx prisma studio --schema=${ScriptDirname}/schema.prisma`,
		{ env: { DATABASE_URL: `file:${DatabasePath()}` } }
	);

	prisma.stdout?.on('data', d => d.trim() && console.log(d.trim()));
};

export default prismaClient;

import { exec } from 'child_process';

import fs from 'fs-extra';

import Config from '../config.js';
import { PrismaSchema, ScriptDirname } from '../utils.js';

import initDb, { DatabasePath } from './init.js';

const prismaStudio = async () => {
	if (!fs.existsSync(`${Config('PatchPath')}/DBFilesClient`))
		throw 'No DBFilesClient folder...';

	await initDb();

	console.log('Starting Prisma Studio...');
	try {
		const prisma = exec(`npx prisma studio --schema="${PrismaSchema}"`, {
			env: { DATABASE_URL: `file:${DatabasePath()}` },
			cwd: ScriptDirname
		});

		prisma.stdout?.on('data', d => d.trim() && console.log(d.trim()));
		prisma.stderr?.on('data', d => d.trim() && console.log(d.trim()));
	} catch (e) {
		console.log(e);
	}
};

export default prismaStudio;

// @ts-check
import fs from 'fs-extra';

import Config from '../config.mjs';
import { exec, ScriptDirname } from '../utils.mjs';

import initDb from './init.mjs';

const prismaClient = async () => {
	if (!fs.existsSync(`${Config().PatchPath}/DBFilesClient`))
		throw 'No DBFilesClient folder...';

	initDb();
	await exec(`npx prisma studio --schema=${ScriptDirname}/schema.prisma`);
};

export default prismaClient;

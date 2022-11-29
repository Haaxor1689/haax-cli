// @ts-check
import fs from 'fs-extra';

import Config from '../config.mjs';
import { exec, ScriptDirname } from '../utils.mjs';

import importDb from './import.mjs';

const initDb = async () => {
	const newSchema = fs
		.readFileSync(`${ScriptDirname}/schema.prisma`, {
			encoding: 'utf8'
		})
		.replace(
			/(url\s+= "file:)[^"]*"/,
			`$1${Config().PatchPath}/DBFilesClient/dev.db"`.split('\\').join('/')
		);
	fs.writeFileSync(`${ScriptDirname}/schema.prisma`, newSchema);

	if (!fs.existsSync(`${Config().PatchPath}/DBFilesClient/dev.db`)) {
		console.log('Importing database from dbc...');
		await exec(`npx prisma db push --schema=${ScriptDirname}/schema.prisma`);
		await importDb();
	}
};

export default initDb;

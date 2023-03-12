import path from 'path';

import fs from 'fs-extra';

import { parseTrs } from './utils.js';

const cleanUnusedMinimap = async (filePath: string) => {
	if (
		!fs.existsSync(filePath) ||
		!fs.lstatSync(filePath).isDirectory() ||
		!fs.existsSync(path.join(filePath, 'md5translate.trs'))
	)
		throw 'Please provide path to a directory with md5translate.trs and minimap chunk textures within as a first argument.';

	const hashTable = parseTrs(path.join(filePath, 'md5translate.trs'));

	fs.readdirSync(filePath).forEach(t => {
		if (
			!t.endsWith('.blp') ||
			hashTable.find(m => Object.values(m.entries).find(h => h === t))
		)
			return;
		console.log(`Unused: ${t}`);
		fs.moveSync(path.join(filePath, t), path.join(filePath, 'unused', t));
	});
};

export default cleanUnusedMinimap;

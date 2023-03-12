import path from 'path';

import fs from 'fs-extra';

import { parseTrs } from './utils.js';

const unhashMinimap = async (filePath: string, vanillaPath?: string) => {
	if (
		!fs.existsSync(filePath) ||
		!fs.lstatSync(filePath).isDirectory() ||
		!fs.existsSync(path.join(filePath, 'md5translate.trs'))
	)
		throw 'Please provide path to a directory with md5translate.trs and minimap chunk textures within as a first argument.';

	const hashTable = parseTrs(path.join(filePath, 'md5translate.trs'));
	hashTable.forEach(m => {
		Object.entries(m.entries).forEach(([file, hash]) => {
			if (!fs.existsSync(path.join(filePath, hash))) return;
			console.log(`Creating ${path.join(filePath, file)}...`);

			fs.ensureFileSync(path.join(filePath, file));
			fs.copyFileSync(path.join(filePath, hash), path.join(filePath, file));
		});
	});
};

export default unhashMinimap;

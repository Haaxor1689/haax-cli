import path from 'path';

import fs from 'fs-extra';

import { exec, ScriptDirname, TmpFileExt } from '../utils.mjs';

const ignoreEndings = [
	'.exe',
	'.dll',
	'.csv',
	'.png',
	'.psd',
	'.txt',
	'.md',
	'.git',
	'.gitignore'
];

/** @type {(dirName: string, callback: (pathName: string) => boolean) => void} */
const loopFilesRecursive = (dirName, callback) => {
	fs.readdirSync(dirName).forEach(f => {
		const fullPath = path.join(dirName, f);
		if (callback(fullPath)) return;
		if (fs.statSync(fullPath).isDirectory())
			loopFilesRecursive(fullPath, callback);
	});
};

/** @type {(source: string, destination: string) => Promise<void>} */
const buildMpq = async (source, destination) => {
	fs.copySync(source, `${ScriptDirname}/patch${TmpFileExt}`);

	try {
		loopFilesRecursive(`${ScriptDirname}/patch${TmpFileExt}`, f => {
			if (ignoreEndings.some(e => f.endsWith(e))) {
				fs.removeSync(f);
				return true;
			}
		});

		await exec(`mpqtool.exe new ../patch${TmpFileExt} ${destination}`, {
			cwd: `${ScriptDirname}/scripts`
		});
	} finally {
		fs.removeSync(`${ScriptDirname}/patch${TmpFileExt}`);
	}
};

export default buildMpq;

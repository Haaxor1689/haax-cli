// @ts-check
import path from 'path';

import fs from 'fs-extra';

import { exec, ScriptDirname, TmpFileExt } from '../utils.mjs';
import Config from '../config.mjs';

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

/** @type {(sourceDir?: string, destination?: string) => Promise<void>} */
const buildMpq = async (
	sourceDir = Config('PatchPath'),
	outputPath = `${Config('ClientPath')}/Data/${Config('PatchName')}`
) => {
	if (!outputPath?.endsWith('.mpq'))
		throw 'Please provide a valid destination.';

	fs.copySync(sourceDir, `${Config('PatchPath')}/../patch${TmpFileExt}`);

	try {
		loopFilesRecursive(`${Config('PatchPath')}/../patch${TmpFileExt}`, f => {
			if (ignoreEndings.some(e => f.endsWith(e))) {
				fs.removeSync(f);
				return true;
			}
		});

		await exec(
			`mpqtool.exe new "${Config(
				'PatchPath'
			)}/../patch${TmpFileExt}" "${outputPath}"`,
			{ cwd: `${ScriptDirname}/scripts` }
		);
	} finally {
		fs.removeSync(`../patch${TmpFileExt}`);
	}
};

export default buildMpq;

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

/** @type {(sourceDir?: string, destination?: string, inPlace?: unknown) => Promise<void>} */
const buildMpq = async (
	sourceDir = Config('PatchPath'),
	outputPath = `${Config('ClientPath')}/Data/${Config('PatchName')}`,
	inPlace
) => {
	if (!outputPath?.endsWith('.mpq'))
		throw 'Please provide a valid destination.';

	console.log(`Building mpq from directory ${sourceDir}...`);
	const TmpPatchPath = inPlace
		? sourceDir
		: `${Config('PatchPath')}/../patch${TmpFileExt}`;

	!inPlace &&
		fs.copySync(sourceDir, `${Config('PatchPath')}/../patch${TmpFileExt}`);

	try {
		loopFilesRecursive(TmpPatchPath, f => {
			if (ignoreEndings.some(e => f.endsWith(e))) {
				fs.removeSync(f);
				return true;
			}
		});

		await exec(`mpqtool.exe new "${TmpPatchPath}" "${outputPath}"`, {
			cwd: `${ScriptDirname}/scripts`
		});
		console.log(`Created mpq archive at ${outputPath}`);
	} finally {
		fs.removeSync(`../patch${TmpFileExt}`);
	}
};

export default buildMpq;

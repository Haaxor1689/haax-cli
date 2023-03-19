import path from 'path';

import fs from 'fs-extra';

import {
	exec,
	fixRelativePath,
	loopFilesRecursive,
	ScriptDirname,
	TmpFileExt
} from '../utils.js';
import Config from '../config.js';

const ignoreEndings = [
	'.json',
	'.exe',
	'.dll',
	'.db',
	'.csv',
	'.png',
	'.psd',
	'.txt',
	'.md',
	'.git',
	'.github',
	'.gitignore'
];

const buildMpq = async ({
	sourceDir = Config('PatchPath'),
	outputPath = `${Config('ClientPath')}/Data/${Config('PatchName')}`,
	inPlace
}: {
	sourceDir?: string;
	outputPath?: string;
	inPlace?: boolean;
}) => {
	if (!outputPath?.endsWith('.mpq'))
		throw 'Please provide a valid destination.';

	console.log(`Building mpq from directory ${sourceDir}...`);
	const TmpPatchPath = inPlace
		? sourceDir
		: `${Config('PatchPath')}/../patch${TmpFileExt}`;

	!inPlace &&
		fs.copySync(sourceDir, `${Config('PatchPath')}/../patch${TmpFileExt}`);

	const basePathLength = inPlace
		? Config('PatchPath').length
		: path.join(path.dirname(Config('PatchPath')), `patch${TmpFileExt}`).length;

	try {
		loopFilesRecursive(TmpPatchPath, async f => {
			if (ignoreEndings.some(e => f.endsWith(e))) {
				console.log(`Removing ${f.slice(basePathLength)}...`);
				fs.removeSync(f);
				return true;
			}
		});

		await exec(
			`mpqtool.exe new "${fixRelativePath(TmpPatchPath)}" "${fixRelativePath(
				outputPath
			)}"`,
			{ cwd: path.join(ScriptDirname, '..', 'bin') }
		);
		console.log(`Created mpq archive at ${outputPath}`);
	} finally {
		fs.removeSync(`${Config('PatchPath')}/../patch${TmpFileExt}`);
	}
};

export default buildMpq;

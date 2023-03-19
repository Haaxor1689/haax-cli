import path from 'path';

import Config from '../config.js';
import { getFileFromPatch, getSortedPatches } from '../utils.js';

const findFile = ({
	filePath,
	patchesDir = path.join(Config('PatchPath'), '..')
}: {
	filePath: string;
	patchesDir: string;
}) => {
	const patches = getSortedPatches(patchesDir);
	const trsPath = getFileFromPatch(patches, filePath);
	console.log(trsPath ?? `File ${filePath} not found in any of the patches.`);
};

export default findFile;

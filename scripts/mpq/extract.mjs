// @ts-check
import path from 'path';

import { exec, ScriptDirname } from '../utils.mjs';

/** @type {(filePath: string, outputDir: string) => Promise<void>} */
const extractMpq = async (filePath, outputDir) => {
	const file = path.basename(filePath);

	if (!file.match(/\.[mM][pP][qQ]$/))
		throw 'Please provide a path to an .mpq file';

	console.log(`Extracting ${filePath}`);
	const { stderr } = await exec(
		`mpqtool.exe extract ${filePath} --output ${path.join(
			outputDir,
			file.slice(0, -4)
		)}`,
		{ cwd: `${ScriptDirname}/scripts` }
	);

	if (stderr) throw stderr;
};

export default extractMpq;

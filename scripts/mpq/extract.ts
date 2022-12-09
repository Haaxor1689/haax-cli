import path from 'path';

import { exec, fixRelativePath, ScriptDirname } from '../utils.js';

const extractMpq = async (filePath: string, outputDir: string) => {
	const file = path.basename(filePath);

	if (!file.match(/\.[mM][pP][qQ]$/))
		throw 'Please provide a path to an .mpq file';

	console.log(`Extracting ${filePath}`);
	const { stderr } = await exec(
		`mpqtool.exe extract "${fixRelativePath(
			filePath
		)}" --output "${fixRelativePath(`${outputDir}/${file.slice(0, -4)}`)}"`,
		{ cwd: `${ScriptDirname}/scripts` }
	);

	if (stderr) throw stderr;
};

export default extractMpq;

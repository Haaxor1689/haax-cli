import path from 'path';

import fs from 'fs-extra';

import { blpFromFile, blpToPngFile } from './utils.js';

const loadBlp = async ({
	filePath,
	outputPath = filePath,
	withMips
}: {
	filePath: string;
	outputPath?: string;
	withMips?: boolean;
}) => {
	if (fs.lstatSync(filePath).isDirectory()) {
		for (const m of fs.readdirSync(filePath).filter(v => v.endsWith('.blp'))) {
			await loadBlp({ filePath: path.join(filePath, m), withMips });
		}
		return;
	}

	if (!filePath.endsWith('.blp') || !fs.existsSync(filePath))
		throw 'Please provide valid path to a blp image.';

	console.log(`Loading BLP ${filePath}...`);

	const blp = blpFromFile(filePath);
	console.log(blp);
	await blpToPngFile(blp, outputPath, !!withMips);
};

export default loadBlp;

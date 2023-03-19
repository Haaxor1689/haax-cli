import path from 'path';

import fs from 'fs-extra';

import { blpToFile, pngToBlp } from './utils.js';

const saveBlp = async ({
	filePath,
	outputPath = filePath
}: {
	filePath: string;
	outputPath?: string;
}) => {
	if (fs.lstatSync(filePath).isDirectory()) {
		for (const m of fs.readdirSync(filePath).filter(v => v.endsWith('.png'))) {
			await saveBlp({ filePath: path.join(filePath, m) });
		}
		return;
	}
	console.log(`Loading PNG ${filePath}...`);

	const blp = await pngToBlp(filePath);
	console.log(blp);
	blpToFile(blp, outputPath);
};

export default saveBlp;

import path from 'path';

import fs from 'fs-extra';

import { Wmo } from './types.js';

const decodeWmo = async ({ filePath }: { filePath: string }) => {
	if (fs.lstatSync(filePath).isDirectory()) {
		for (const m of fs.readdirSync(filePath).filter(v => v.endsWith('.wmo'))) {
			await decodeWmo({ filePath: path.join(filePath, m) });
		}
		return;
	}
	console.log(`Loading WMO ${filePath}...`);

	const wmo = Wmo.fromBuffer(fs.readFileSync(filePath));

	console.dir(wmo, { depth: null });
};

export default decodeWmo;

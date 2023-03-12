import path from 'path';

import fs from 'fs-extra';

import { Wmo } from './types.js';

const decodeWmo = async (filePath: string) => {
	if (fs.lstatSync(filePath).isDirectory()) {
		for (const m of fs.readdirSync(filePath).filter(v => v.endsWith('.wmo'))) {
			await decodeWmo(path.join(filePath, m));
		}
		return;
	}
	console.log(`Loading WMO ${filePath}...`);

	const wmo = Wmo.fromBuffer(fs.readFileSync(filePath));

	console.log((wmo.find(v => v.type === 'MOHD') as any)?.data?.wmoId);
};

export default decodeWmo;

import path from 'path';

import fs from 'fs-extra';

import Config from '../config.js';

import loadMinimap from './load.js';

const saveMinimap = (
	minimap: ReturnType<typeof loadMinimap>,
	trsPath = path.join(
		Config('PatchPath'),
		'Textures',
		'Minimap',
		'md5translate.trs'
	)
) => {
	fs.writeFileSync(
		trsPath,
		`${Object.entries(minimap)
			.sort((l, r) => l[0].localeCompare(r[0]))
			.flatMap(([name, entries]) => [
				`dir: ${name}`,
				...entries.map(e => `${e.src}\t${e.dest}`)
			])
			.join('\r\n')}\r\n`
	);
};

export default saveMinimap;

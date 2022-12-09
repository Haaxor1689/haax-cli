import fs from 'fs-extra';

import { isNotUndefined } from '../utils.js';

export const parseTrs = (pathName: string) => {
	const data = fs.readFileSync(pathName, { encoding: 'utf-8' });
	return data
		.split('dir: ')
		.map(m => {
			const [name, ...lines] = m.split('\r\n');
			if (!name) {
				console.log(name, lines, 'skip');
				return undefined;
			}
			console.log(`Parsed: ${name}`);
			const entries = lines
				.filter(v => v)
				.reduce((obj, v) => {
					const [file, hash] = v.trim().split(/\s/);
					if (!file || !hash || obj[file]) {
						console.log(v, 'invalid');
						return obj;
					}
					return {
						...obj,
						[file]: hash
					};
				}, {} as Record<string, string>);

			return { name, entries };
		})
		.filter(isNotUndefined);
};

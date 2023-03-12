import fs from 'fs';
import { promisify } from 'node:util';
import { exec as ex } from 'node:child_process';
import path from 'path';

import * as r from 'restructure';
import { mapValues } from 'lodash-es';

import { Dbc } from './dbc/types.js';
import { Enum, StringRef } from './restructure.js';

export const deleteFile = (path: string) => {
	fs.existsSync(path) && fs.unlinkSync(path);
};

export const exec = promisify(ex);

export const TmpFileExt = '.__tmp__';
export const ScriptDirname = path.dirname(process.argv[1] ?? '');
export const BLPConverter = path.join(
	ScriptDirname,
	'..',
	'bin',
	'BLPConverter.exe'
);
export const PrismaSchema = path.join(
	ScriptDirname,
	'..',
	'prisma',
	'schema.prisma'
);

export const readDbcString = (ref: number, stringBlock: Uint8Array) => {
	const str = stringBlock.slice(ref);
	return str.slice(0, str.indexOf(0)).toString();
};

export const dbcRecordsFromFile = <T extends Record<string, unknown>>(
	Entity: ReturnType<typeof Dbc<r.StructFields<T>>>,
	filePath: string
) => {
	const data = Entity.fromBuffer(fs.readFileSync(filePath));

	return data.records.map(r =>
		mapValues(r, (v, k: keyof T) => {
			if (Entity.fields.records.type.fields[k] instanceof StringRef)
				return readDbcString(v as number, data.stringBlock);
			return v;
		})
	) as r.StructType<T>[];
};

export const dbcRecordsToFile = (
	Entity: any,
	entries: any[],
	filePath: string
) => {
	const fields = Object.entries(Entity.fields.records.type.fields);
	let stringBlock = '\0';

	const records = entries.map(e =>
		// FIXME: Types
		e.reduce((obj: any, v: any, i: number) => {
			if (i >= fields.length) {
				console.log(
					`Incorrect number of columns. Got ${i}, expected ${
						fields.length - 1
					}`,
					e.join()
				);
			}
			// FIXME: Types
			const [key, field] = fields[i] as [string, any];
			if (field instanceof StringRef) {
				if (!v) return { ...obj, [key]: 0 };

				const idx = stringBlock.indexOf(`\0${v}\0`);
				if (idx !== -1) return { ...obj, [key]: idx + 1 };

				const ptr = stringBlock.length;
				stringBlock += `${v}\0`;
				return { ...obj, [key]: ptr };
			}
			if (field instanceof Enum) {
				if (!Number.isNaN(Number(v))) return { ...obj, [key]: v };
				return {
					...obj,
					[key]: field.options.indexOf(v)
				};
			}
			return { ...obj, [key]: Number(v) };
		}, {})
	);

	const recordCount = records.length;
	const fieldCount = Object.entries(Entity.fields.records.type.fields).length;
	const recordSize = 4 * fieldCount;
	const stringBlockSize = stringBlock.length;

	const dbc = Entity.toBuffer({
		signature: 'WDBC',
		recordCount,
		fieldCount,
		recordSize,
		stringBlockSize,
		records,
		stringBlock: Buffer.from(stringBlock)
	});
	fs.writeFileSync(filePath, dbc);
};

export const parseCsv = <T extends string[] = string[]>(str: string): T[] => {
	const arr: string[][] = [];
	let quote = false; // 'true' means we're inside a quoted field

	// Iterate over each character, keep track of current row and column (of the returned array)
	for (let row = 0, col = 0, c = 0; c < str.length; c++) {
		const cc = str[c],
			nc = str[c + 1]; // Current character, next character
		if (!arr[row]) arr[row] = []; // Create a new row if necessary
		arr[row]![col] = arr[row]?.[col] ?? ''; // Create a new column (start with empty string) if necessary

		// If the current character is a quotation mark, and we're inside a
		// quoted field, and the next character is also a quotation mark,
		// add a quotation mark to the current column and skip the next character
		if (cc === '"' && quote && nc === '"') {
			arr[row]![col] += cc;
			++c;
			continue;
		}

		// If it's just one quotation mark, begin/end quoted field
		if (cc === '"') {
			quote = !quote;
			continue;
		}

		// If it's a comma and we're not in a quoted field, move on to the next column
		if (cc === ',' && !quote && nc !== '\r' && nc !== '\n') {
			++col;
			continue;
		}

		// If it's a newline (CRLF) and we're not in a quoted field, skip the next character
		// and move on to the next row and move to column 0 of that new row
		if (cc === '\r' && nc === '\n' && !quote) {
			++row;
			col = 0;
			++c;
			continue;
		}

		// If it's a newline (LF or CR) and we're not in a quoted field,
		// move on to the next row and move to column 0 of that new row
		if (cc === '\n' && !quote) {
			++row;
			col = 0;
			continue;
		}
		if (cc === '\r' && !quote) {
			++row;
			col = 0;
			continue;
		}

		// Otherwise, append the current character to the current column
		arr[row]![col] += cc;
	}
	return arr as never;
};

// const getMapCoords = ([x, y], [x2, y2], [w, h], [w2, h2]) => {
// 	const s1 = Math.abs(x - x2) / Math.abs(h - h2);
// 	const s2 = Math.abs(y - y2) / Math.abs(w - w2);
// 	return [y + w * s2, y - (1002 - w) * s2, x + h * s1, x - (668 - h) * s1];
// };

export const fixRelativePath = (filePath: string) =>
	path.isAbsolute(filePath) ? filePath : path.join(process.cwd(), filePath);

export const uncapitalize = <T extends string>(str: T) =>
	(str[0]?.toUpperCase() + str.slice(1)) as Uncapitalize<T>;

export const isNotUndefined = <T extends unknown | undefined>(
	obj: T
): obj is Exclude<T, undefined> => obj !== undefined;

export const getSortedPatches = (patchesDir: string) =>
	fs
		.readdirSync(patchesDir)
		.filter(p => !p.startsWith('_'))
		.sort((lhs, rhs) => {
			const lp = lhs.startsWith('patch');
			const rp = rhs.startsWith('patch');
			if (lp && rp) return rhs.localeCompare(lhs);
			if (lp) return -1;
			if (rp) return 1;
			return 0;
		})
		.map(p => path.join(patchesDir, p));

export const getFileFromPatch = (patches: string[], filePath: string) => {
	const patch = patches.find(p => fs.existsSync(path.join(p, filePath)));
	if (!patch) return undefined;
	return path.join(patch, filePath);
};

export const loopFilesRecursive = async (
	dirName: string,
	callback: (pathName: string, isDir: boolean) => Promise<boolean | void>
) => {
	for (const f of fs.readdirSync(dirName)) {
		const fullPath = path.join(dirName, f);
		const isDir = fs.statSync(fullPath).isDirectory();
		if (await callback(fullPath, isDir)) continue;
		if (isDir) await loopFilesRecursive(fullPath, callback);
	}
};

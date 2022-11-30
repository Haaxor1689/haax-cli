//@ts-check
import fs from 'fs';
import { promisify } from 'node:util';
import { exec as ex } from 'node:child_process';
import path from 'path';

import { mapValues } from 'lodash-es';

/** @type {(path: string) => void} */
export const deleteFile = path => {
	fs.existsSync(path) && fs.unlinkSync(path);
};

export const exec = promisify(ex);

export const TmpFileExt = '.__tmp__';
export const ScriptDirname = path.dirname(process.argv[1]);

/** @type {(ref: number, stringBlock: string) => string} */
export const readDbcString = (ref, stringBlock) => {
	const str = stringBlock.slice(ref);
	return str.slice(0, str.indexOf('\0'));
};

export const dbcRecordsFromFile = (Entity, filePath) => {
	const data = Entity.fromBuffer(fs.readFileSync(filePath));

	const stringBlock = data.stringBlock.toString();

	return data.records.map(r =>
		mapValues(r, (v, k) => {
			if (Entity.fields.records.type.fields[k].isStringRef)
				return readDbcString(v, stringBlock);
			return v;
		})
	);
};

export const dbcRecordsToFile = (Entity, entries, filePath) => {
	const fields = Object.entries(Entity.fields.records.type.fields);
	let stringBlock = '\0';

	const records = entries.map(e =>
		e.reduce((obj, v, i) => {
			if (i >= fields.length) {
				console.log(
					`Incorrect number of columns. Got ${i}, expected ${
						fields.length - 1
					}`,
					e.join()
				);
			}
			const [key, field] = fields[i];
			if (field.isStringRef) {
				const idx = stringBlock.indexOf(`\0${v}\0`);
				if (idx !== -1) return { ...obj, [key]: idx + 1 };

				const ptr = stringBlock.length;
				stringBlock += `${v}\0`;
				return { ...obj, [key]: ptr };
			}
			if (field.isEnum) {
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

/** @type {(str: string) => string[][]} */
export const parseCsv = str => {
	/** @type string[][] */
	const arr = [];
	let quote = false; // 'true' means we're inside a quoted field

	// Iterate over each character, keep track of current row and column (of the returned array)
	for (let row = 0, col = 0, c = 0; c < str.length; c++) {
		const cc = str[c],
			nc = str[c + 1]; // Current character, next character
		arr[row] = arr[row] || []; // Create a new row if necessary
		arr[row][col] = arr[row][col] || ''; // Create a new column (start with empty string) if necessary

		// If the current character is a quotation mark, and we're inside a
		// quoted field, and the next character is also a quotation mark,
		// add a quotation mark to the current column and skip the next character
		if (cc === '"' && quote && nc === '"') {
			arr[row][col] += cc;
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
		arr[row][col] += cc;
	}
	return arr;
};

export const getMapCoords = ([x, y], [x2, y2], [w, h], [w2, h2]) => {
	const s1 = Math.abs(x - x2) / Math.abs(h - h2);
	const s2 = Math.abs(y - y2) / Math.abs(w - w2);
	return [y + w * s2, y - (1002 - w) * s2, x + h * s1, x - (668 - h) * s1];
};

/** @type {(filePath: string) => string} */
export const fixRelativePath = filePath =>
	path.isAbsolute(filePath) ? filePath : path.join(process.cwd(), filePath);

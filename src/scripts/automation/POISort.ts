import fs from 'fs-extra';
import { groupBy, omit } from 'lodash-es';

import { parseCsv } from '../utils.js';

const isSorted = <T>(arr: T[]): boolean => {
	for (let i = 0; i < arr.length - 1; i++) {
		if (typeof arr[i] === 'number' && arr[i]! < arr[i + 1]!) {
			return false;
		} else if (
			typeof arr[i] === 'string' &&
			(arr[i]! as string).localeCompare(arr[i + 1]! as string) > 0
		) {
			return false;
		}
	}
	return true;
};

const csv = fs.readFileSync(`${process.cwd()}/POI.csv`, { encoding: 'utf8' });
const entries = parseCsv(csv);

const findSort = (list: string[][], skip: number[] = []): number[] => {
	const idx = [...Array(list[0]?.length ?? 0).keys()].find(
		i => !skip.includes(i) && isSorted(list.map(e => e[i]))
	);
	if (!idx) return [];
	return [
		idx,
		...findSort(groupBy(list, v => v[idx])[0] ?? [], [...skip, idx])
	];
};

console.log(findSort(entries.slice(1)).map(i => entries[0]![i]));

import { PrismaClient } from '@prisma/client';
import fs from 'fs-extra';
import { sortBy, groupBy } from 'lodash-es';

import { DatabasePath } from '../db/init.mjs';

process.env.DATABASE_URL = `file:${DatabasePath()}`;
const prisma = new PrismaClient();

const vanilla = fs.readJsonSync('./AreaTable.json');

try {
	const areaTable = await prisma.areaTable.findMany({
		where: { id: { lt: 0 } }
	});

	let highestAreaBit = sortBy(areaTable, 'areaBit').at(-1).areaBit;

	const duplicates = Object.entries(
		groupBy(
			areaTable.filter(v => !vanilla.find(j => j.ID === v.id)),
			'areaBit'
		)
	)
		.filter(v => v[1].length > 1)
		.flatMap(([_, v]) => v.slice(1));

	for (const d of duplicates) {
		highestAreaBit++;
		await prisma.areaTable.update({
			data: { ...d, areaBit: highestAreaBit },
			where: { id: d.id }
		});
	}
} finally {
	prisma.$disconnect();
}

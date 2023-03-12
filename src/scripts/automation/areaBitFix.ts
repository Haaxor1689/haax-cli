import fs from 'fs-extra';

import { PrismaClient } from '../../../prisma/index.js';
import { DatabasePath } from '../db/init.js';

process.env.DATABASE_URL = `file:${DatabasePath()}`;
const prisma = new PrismaClient();

try {
	const rows = await prisma.areaTable.findMany({
		select: { id: true, name_enUS: true }
	});
	fs.writeFileSync(
		`areaList.csv`,
		[
			'id,name',
			...rows.map(r =>
				Object.values(r).map(v =>
					typeof v === 'string' ? `"${v.replaceAll('"', '""')}"` : v
				)
			)
		].join('\n')
	);
	// console.log(
	// 	Object.values(groupBy(rows, 'areaBit'))
	// 		.filter(v => v.length > 1)
	// 		.map(v => v[0]?.areaBit)
	// );
	// const rows = await prisma.areaTable.findMany({
	// 	where: { areaBit: { gt: 1182 } }
	// });
	// for (let i = 0; i < rows.length; i++) {
	// 	const row = rows[i];
	// 	await prisma.areaTable.update({
	// 		data: { areaBit: 1182 + i },
	// 		where: { id: row?.id }
	// 	});
	// }

	// await prisma.areaPOI.deleteMany({
	// 	where: { continentId: { in: [530, 534, 540, 543, 559, 560, 562] } }
	// });

	// await prisma.continent.deleteMany({
	// 	where: { id: { in: [530, 534, 540, 543, 559, 560, 562] } }
	// });

	// for (const e of rows) {
	// 	try {
	// 		await prisma.areaTable.delete({ where: { id: e.id } });
	// 	} catch (e) {
	// 		console.error(e);
	// 	}
	// }
	// const areaTable = await prisma.areaTable.findMany({
	// 	where: { id: { lt: 0 } }
	// });

	// let highestAreaBit = sortBy(areaTable, 'areaBit').at(-1)?.areaBit;

	// const duplicates = Object.entries(
	// 	groupBy(
	// 		areaTable.filter(v => !vanilla.find(j => j.ID === v.id)),
	// 		'areaBit'
	// 	)
	// )
	// 	.filter(v => v[1].length > 1)
	// 	.flatMap(([_, v]) => v.slice(1));

	// for (const d of duplicates) {
	// 	highestAreaBit++;
	// 	await prisma.areaTable.update({
	// 		data: { ...d, areaBit: highestAreaBit },
	// 		where: { id: d.id }
	// 	});
	// }
} finally {
	prisma.$disconnect();
}

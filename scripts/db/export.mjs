// @ts-check
import { PrismaClient } from '@prisma/client';
import { sortBy } from 'lodash-es';

import Entities from '../dbc/types.mjs';
import { dbcRecordsToFile } from '../utils.mjs';

/** @type {(dbcPath: string) => Promise<void>} */
const exportDb = async dbcPath => {
	const prisma = new PrismaClient();
	try {
		dbcRecordsToFile(
			Entities.AreaPOI,
			(await prisma.areaPOI.findMany()).map(Object.values),
			`${dbcPath}/AreaPOI.dbc`
		);
		dbcRecordsToFile(
			Entities.AreaTable,
			(
				await prisma.areaTable.findMany({
					where: { AND: [{ id: { not: -1 } }, { id: { not: -0 } }] }
				})
			).map(Object.values),
			`${dbcPath}/AreaTable.dbc`
		);
		dbcRecordsToFile(
			Entities.WMOAreaTable,
			sortBy(await prisma.wMOAreaTable.findMany(), [
				'wmoId',
				'nameSetId',
				'wmoGroupId'
			]).map(Object.values),
			`${dbcPath}/WMOAreaTable.dbc`
		);
		dbcRecordsToFile(
			Entities.WorldMapArea,
			(await prisma.worldMapArea.findMany()).map(Object.values),
			`${dbcPath}/WorldMapArea.dbc`
		);
		dbcRecordsToFile(
			Entities.WorldMapContinent,
			(await prisma.worldMapContinent.findMany()).map(Object.values),
			`${dbcPath}/WorldMapContinent.dbc`
		);
	} finally {
		prisma.$disconnect();
	}
};

export default exportDb;

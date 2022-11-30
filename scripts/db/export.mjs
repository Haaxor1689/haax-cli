// @ts-check
import fs from 'fs-extra';
import { PrismaClient } from '@prisma/client';
import { sortBy } from 'lodash-es';

import Config from '../config.mjs';
import Entities from '../dbc/types.mjs';
import { dbcRecordsToFile } from '../utils.mjs';

import { DatabasePath } from './init.mjs';

/** @type {(dbcPath?: string) => Promise<void>} */
const exportDb = async (dbcPath = `${Config().PatchPath}/DBFilesClient`) => {
	if (!fs.existsSync(DatabasePath()))
		throw 'Database has not been initialized.';

	process.env.DATABASE_URL = `file:${DatabasePath()}`;
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

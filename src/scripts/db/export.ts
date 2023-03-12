import fs from 'fs-extra';
import { sortBy } from 'lodash-es';

import { PrismaClient } from '../../../prisma/index.js';
import Config from '../config.js';
import Entities from '../dbc/types.js';
import { dbcRecordsToFile } from '../utils.js';

import { DatabasePath } from './init.js';

/** @type {(dbcPath?: string) => Promise<void>} */
const exportDb = async (dbcPath = `${Config('PatchPath')}/DBFilesClient`) => {
	if (!fs.existsSync(DatabasePath()))
		throw 'Database has not been initialized.';

	process.env.DATABASE_URL = `file:${DatabasePath()}`;
	const prisma = new PrismaClient();
	try {
		dbcRecordsToFile(
			Entities.AreaPOI,
			sortBy(await prisma.areaPOI.findMany(), ['continentId', 'name_enUS']).map(
				Object.values
			),
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
			Entities.AreaTrigger,
			sortBy(await prisma.areaTrigger.findMany(), ['continentId', 'id']).map(
				Object.values
			),
			`${dbcPath}/AreaTrigger.dbc`
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

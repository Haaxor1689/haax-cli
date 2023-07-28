import fs from 'fs-extra';
import { pick, sortBy } from 'lodash-es';

import { PrismaClient } from '../../../prisma/index.js';
import Config from '../config.js';
import Entities from '../dbc/types.js';
import { dbcRecordsFromFile, uncapitalize } from '../utils.js';

import continents from './continents.js';
import { DatabasePath } from './init.js';

const importDb = async ({
	dbcPath = `${Config('PatchPath')}/DBFilesClient`
}: {
	dbcPath?: string;
}) => {
	if (!fs.existsSync(DatabasePath()))
		throw 'Database has not been initialized.';

	process.env.DATABASE_URL = `file:${DatabasePath()}`;
	const prisma = new PrismaClient();

	try {
		console.log('Importing Continents(from exported server data)...');
		for (const row of [
			...[17, 24, 28, 805].map(c => ({ id: c, name: '???' })),
			...continents
		]) {
			await prisma.continent
				.upsert({
					create: row,
					update: row,
					where: { id: row.id }
				})
				.catch(e => {
					console.log(row.name);
					console.log(e);
				});
		}

		await prisma.lightSkybox
			.upsert({
				create: { id: 0, name: 'NONE' },
				update: { id: 0, name: 'NONE' },
				where: { id: 0 }
			})
			.catch((e: unknown) => {
				console.log(e);
			});

		const lightParams = {
			id: 0,
			highlightSky: 0,
			lightSkyboxId: 0,
			glow: 0,
			waterShallowAlpha: 0,
			waterDeepAlpha: 0,
			oceanShallowAlpha: 0,
			oceanDeepAlpha: 0,
			flags: 0
		};
		await prisma.lightParams
			.upsert({
				create: lightParams,
				update: lightParams,
				where: { id: 0 }
			})
			.catch((e: unknown) => {
				console.log(e);
			});

		const light = {
			id: 0,
			continentId: 0,
			x: 0,
			y: 0,
			z: 0,
			falloffStart: 0,
			falloffEnd: 0,
			paramStandardId: 0,
			paramUnderwaterId: 0,
			paramSunsetId: 0,
			paramOtherId: 0,
			paramDeathId: 0
		};
		await prisma.light
			.upsert({
				create: light,
				update: light,
				where: { id: 0 }
			})
			.catch((e: unknown) => {
				console.log(e);
			});

		for (const entity of ['LightSkybox', 'LightParams', 'Light'] as const) {
			if (!fs.existsSync(`${dbcPath}/${entity}.dbc`)) continue;
			console.log(`Importing ${entity}...`);
			const data = dbcRecordsFromFile(
				// FIXME: Fix types
				Entities[entity] as never,
				`${dbcPath}/${entity}.dbc`
			);
			for (const row of data) {
				// FIXME: Fix types
				await (prisma as any)[uncapitalize(entity)]
					.upsert({
						create: row,
						update: row,
						where: { id: row.id }
					})
					.catch((e: unknown) => {
						console.log(
							Object.values(row).find(v => typeof v === 'string') ?? row
						);
						console.log(e);
					});
			}
		}

		if (!fs.existsSync(`${dbcPath}/AreaTable.dbc`)) return;
		console.log('Importing AreaTable...');
		const AreaTable = dbcRecordsFromFile(
			Entities.AreaTable,
			`${dbcPath}/AreaTable.dbc`
		);
		const areaMock = {
			continentId: 0,
			parentAreaId: -1,
			areaBit: 0,
			flags: 0,
			soundPreferenceId: 0,
			underwaterSoundPreferenceId: 0,
			soundAmbienceId: 0,
			zoneMusicId: 0,
			zoneIntroMusicId: 0,
			explorationLevel: 0,
			name_enGB: '',
			name_koKR: '',
			name_frFR: '',
			name_deDE: '',
			name_enCN: '',
			name_zhCN: '',
			name_enTW: '',
			nameMask: 0,
			factionGroupMask: 0,
			liquidTypeId: 0,
			minElevation: 0,
			ambientMultiplier: 0,
			lightId: 0
		};
		for (const row of [
			{ ...areaMock, id: -1, name_enUS: 'NONE' },
			{ ...areaMock, id: 0, name_enUS: 'ROOT' },
			...sortBy(AreaTable, ['parentAreaId'])
		]) {
			await prisma.areaTable
				.upsert({
					// FIXME: Types
					create: row as never,
					update: row as never,
					where: { id: row.id }
				})
				.catch(e => {
					console.log(
						pick(row, [
							'id',
							'continentId',
							'parentAreaId',
							'name_enUS',
							'lightId'
						])
					);
					console.log(e);
				});
		}

		for (const entity of [
			'AreaPOI',
			'AreaTrigger',
			'CreatureDisplayInfoExtra',
			'WMOAreaTable',
			'WorldMapArea',
			'WorldMapContinent',
			'WorldMapOverlay'
		] as const) {
			if (!fs.existsSync(`${dbcPath}/${entity}.dbc`)) continue;
			console.log(`Importing ${entity}...`);
			const data = dbcRecordsFromFile(
				// FIXME: Fix types
				Entities[entity] as never,
				`${dbcPath}/${entity}.dbc`
			);
			for (const row of data) {
				// FIXME: Fix types
				await (prisma as any)[uncapitalize(entity)]
					.upsert({
						create: row,
						update: row,
						where: { id: row.id }
					})
					.catch((e: unknown) => {
						console.log(
							Object.values(row).find(v => typeof v === 'string') ?? row
						);
						console.log(e);
					});
			}
		}
	} finally {
		prisma.$disconnect();
	}
};

export default importDb;

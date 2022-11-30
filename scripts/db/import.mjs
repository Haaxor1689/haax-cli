// @ts-check
import { PrismaClient } from '@prisma/client';
import fs from 'fs-extra';
import { sortBy } from 'lodash-es';

import Config from '../config.mjs';
import Entities from '../dbc/types.mjs';
import { dbcRecordsFromFile } from '../utils.mjs';

import { DatabasePath } from './init.mjs';

/** @type {(dbcPath?: string) => Promise<void>} */
const importDb = async (dbcPath = `${Config('PatchPath')}/DBFilesClient`) => {
	if (!fs.existsSync(DatabasePath()))
		throw 'Database has not been initialized.';

	process.env.DATABASE_URL = `file:${DatabasePath()}`;
	const prisma = new PrismaClient();
	try {
		for (const row of [
			{ id: 0, name: 'Kalimdor' },
			{ id: 1, name: 'Eastern Kingdoms' },
			{ id: 17, name: '***On Map Dungeon***' },
			{ id: 25, name: 'Lordaeron Arena' },
			{ id: 27, name: 'Sunnyglade Valley' },
			{ id: 30, name: 'Alterac Valley' },
			{ id: 31, name: 'Alterac Valley Classic' },
			{ id: 33, name: 'Shadowfang Keep' },
			{ id: 34, name: 'Stockades' },
			{ id: 36, name: 'Deadmines' },
			{ id: 37, name: 'Azshara Crater' },
			{ id: 42, name: "Quel'Thalas" },
			{ id: 43, name: 'Wailing Caverns' },
			{ id: 45, name: 'Scarlet Citadel' },
			{ id: 47, name: 'Razorfen Kraul' },
			{ id: 48, name: 'Blackfathom Deeps' },
			{ id: 70, name: 'Uldaman' },
			{ id: 90, name: 'Gnomeregan' },
			{ id: 109, name: 'Sunken Temple' },
			{ id: 129, name: 'Razorfen Downs' },
			{ id: 169, name: 'Emerald Dream' },
			{ id: 150, name: 'Outland' },
			{ id: 189, name: 'Scarlet Monastery' },
			{ id: 209, name: "Zul'Farak" },
			{ id: 229, name: 'Blackrock Spire' },
			{ id: 230, name: 'Blackrock Depths' },
			{ id: 249, name: "Onyxia's lair" },
			{ id: 269, name: 'Black Morass' },
			{ id: 289, name: 'Scholomance' },
			{ id: 309, name: "Zul'Gurub" },
			{ id: 329, name: 'Stratholme' },
			{ id: 349, name: 'Maraudon' },
			{ id: 369, name: 'Deeprun Tram' },
			{ id: 389, name: 'Ragefire Chasm' },
			{ id: 409, name: 'Molten Core' },
			{ id: 429, name: 'Dire Maul' },
			{ id: 449, name: 'Blackwing Lair' },
			{ id: 451, name: 'Development' },
			{ id: 469, name: "Champions' Hall" },
			{ id: 489, name: 'Warsong Gulch' },
			{ id: 509, name: "Ruins of Ahn'Qiraj" },
			{ id: 529, name: 'Arathi Basin' },
			{ id: 531, name: "Ahn'Qiraj" },
			{ id: 532, name: 'Karazhan' },
			{ id: 530, name: 'Outland' },
			{ id: 533, name: 'Naxxramas' },
			{ id: 534, name: 'Mount Hyjal' },
			{ id: 540, name: 'Hellfire Citadel' },
			{ id: 543, name: 'Hellfire Ramparts' },
			{ id: 559, name: 'Nagrand Arena' },
			{ id: 562, name: "Blade's Edge Arena" },
			{ id: 560, name: 'Old Hillsbrad Foothills' },
			{ id: 801, name: 'Moomoo Grove' },
			{ id: 802, name: 'Crescent Grove' },
			{ id: 805, name: '_The Dungeon' },
			{ id: 806, name: 'Frostmane Retreat' },
			{ id: 807, name: 'Emerald Sanctum' },
			{ id: 808, name: 'Hateforge Quarry' },
			{ id: 813, name: 'Winter Veil Vale' }
		]) {
			await prisma.continent
				.upsert({
					create: row,
					update: row,
					where: { id: row.id }
				})
				.catch(e => {
					console.log(row);
					console.log(e);
				});
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
					create: row,
					update: row,
					where: { id: row.id }
				})
				.catch(e => {
					console.log(row);
					console.log(e);
				});
		}

		for (const entity of [
			'AreaPOI',
			'WMOAreaTable',
			'WorldMapArea',
			'WorldMapContinent'
		]) {
			console.log(`Importing ${entity}...`);
			if (!fs.existsSync(`${dbcPath}/${entity}.dbc`)) continue;
			const data = dbcRecordsFromFile(
				Entities[entity],
				`${dbcPath}/${entity}.dbc`
			);
			for (const row of data) {
				await prisma[entity[0]?.toUpperCase() + entity.slice(1)]
					.upsert({
						create: row,
						update: row,
						where: { id: row.id }
					})
					.catch(e => {
						console.log(row);
						console.log(e);
					});
			}
		}
	} finally {
		prisma.$disconnect();
	}
};

export default importDb;

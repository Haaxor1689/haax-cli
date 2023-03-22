import path from 'path';

import fs from 'fs-extra';
import { v4 } from 'uuid';

import Config from '../config.js';
import Entities from '../dbc/types.js';
import {
	dbcRecordsFromFile,
	getFileFromPatch,
	getSortedPatches
} from '../utils.js';

const exportTalents = () => {
	const patches = getSortedPatches(path.join(Config('PatchPath'), '..'));

	const talentsPath = getFileFromPatch(
		patches,
		path.join('DBFilesClient', 'Talent.dbc')
	);
	const talentTabsPath = getFileFromPatch(
		patches,
		path.join('DBFilesClient', 'TalentTab.dbc')
	);
	const spellsPath = getFileFromPatch(
		patches,
		path.join('DBFilesClient', 'Spell.dbc')
	);
	const spellIconsPath = getFileFromPatch(
		patches,
		path.join('DBFilesClient', 'SpellIcon.dbc')
	);

	if (!talentsPath || !talentTabsPath || !spellsPath || !spellIconsPath) return;

	const talents = dbcRecordsFromFile(Entities.Talent, talentsPath);
	const talentTabs = dbcRecordsFromFile(Entities.TalentTab, talentTabsPath);
	const spells = dbcRecordsFromFile(Entities.Spell, spellsPath);
	const spellIcons = dbcRecordsFromFile(Entities.SpellIcon, spellIconsPath);

	const getSpellIcon = (icon: number) =>
		(spellIcons.find(i => i.id === icon)?.texture as any)
			.split('\\')
			.at(-1)
			?.toLowerCase();

	fs.writeJSONSync(
		'talents.json',
		Object.fromEntries(
			talentTabs
				.map(tab => ({
					id: v4(),
					icon: getSpellIcon(tab.spellIconId),
					class: tab.classMask,
					name: tab.name_enUS,
					tree: [...Array(4 * 7).keys()].map(idx => {
						const talent = talents.find(
							t => t.specId === tab.id && t.tierId * 4 + t.columnIndex === idx
						);
						if (!talent) return {};

						const spell = spells.find(
							s => s.id === (talent as any).spellRank_1
						);
						if (!spell) throw `Unknown spell ${(talent as any).spellRank_1}`;

						const pre = talents.find(
							t => t.id === (talent as any).prerequisiteTalent_1
						);

						return {
							icon: getSpellIcon(spell.spellIconId),
							name: spell.name_enUS,
							ranks: [0, 1, 2, 3, 4, 5, 6, 7, 8].find(
								i => (talent as any)[`spellRank_${i + 1}`] === 0
							),
							description: spell.description_enUS,
							requires: pre ? pre.tierId * 4 + pre.columnIndex : undefined
						};
					})
				}))
				.sort((l, r) => (l.class > r.class ? 1 : l.class < r.class ? -1 : 0))
				.map(tab => [tab.id, tab])
		)
	);
};

export default exportTalents;

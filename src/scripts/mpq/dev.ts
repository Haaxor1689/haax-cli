import { ChildProcess, spawn } from 'child_process';

import { watch } from 'chokidar';
import fs from 'fs-extra';

import sliceBlp from '../blp/slice.js';
import Config from '../config.js';
import exportDb from '../db/export.js';
import initDb from '../db/init.js';
import encodeDbc from '../dbc/encode.js';
import { TmpFileExt } from '../utils.js';

import buildMpq from './build.js';

let WoW: ChildProcess | null = null;
let SavePending = false;
let DbExportPending = false;
let ExitPending = false;
let RebuildingAssets = false;

const startWoW = () => {
	console.log('Starting WoW client...');
	WoW = spawn(`${Config('ClientPath')}/WoW.exe`);
	WoW.on('exit', async () => {
		if (ExitPending) return;
		console.log('WoW client shuting down...');
		WoW = null;
		SavePending
			? await saveMpq()
			: console.log('No changes found. Stop this process to quit.');
		startWoW();
	});
};

const saveMpq = async () => {
	if (DbExportPending) {
		console.log('Applying db changes...');
		await exportDb();
		DbExportPending = false;
	}
	while (RebuildingAssets) await new Promise(r => setTimeout(r, 1000));
	await buildMpq();
	SavePending = false;
};

const cleanup = () => {
	console.log('Cleaning up...');
	process.exit(0);
};

const watchCallback = (event: string) => async (filename: string) => {
	if (!fs.existsSync(filename)) return;

	console.log(
		`Detected file change: ${filename.slice(
			Config('PatchPath').length
		)} ${event}`
	);
	SavePending = true;

	try {
		RebuildingAssets = true;
		if (
			filename.match(/Interface\\WorldMap\\.+\\/) &&
			filename.endsWith('.png')
		)
			await sliceBlp(filename);

		if (filename.includes('DBFilesClient\\') && filename.endsWith('.csv'))
			await encodeDbc(filename);

		if (filename.endsWith('.db')) {
			console.log('Queued db export...');
			DbExportPending = true;
		}
	} finally {
		RebuildingAssets = false;
	}
};

const devMpq = async () => {
	try {
		if (fs.existsSync(`${Config('PatchPath')}/DBFilesClient`)) {
			await initDb();
		}

		await saveMpq();

		watch(Config('PatchPath'), {
			depth: 99,
			ignored: [new RegExp(TmpFileExt), /^\/.git\/.*/, /.*\.db-journal$/],
			ignoreInitial: true
		})
			.on('add', watchCallback('add'))
			.on('change', watchCallback('change'));

		startWoW();

		process.stdin.once('data', () => {
			ExitPending = true;
			WoW?.kill();
			WoW?.on('exit', cleanup);
		});
	} catch (e) {
		console.error(e);
		cleanup();
	}
};

export default devMpq;

import { ChildProcess, spawn } from 'child_process';

import fs from 'fs-extra';
import { watch } from 'chokidar';

import Config from '../config.js';
import { deleteFile, ScriptDirname, TmpFileExt } from '../utils.js';
import sliceBlp from '../blp/slice.js';
import encodeDbc from '../dbc/encode.js';
import initDb from '../db/init.js';

import buildMpq from './build.js';

let WoW: ChildProcess | null = null;
let SavePending = false;
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
	while (RebuildingAssets) await new Promise(r => setTimeout(r, 1000));
	await buildMpq();
	SavePending = false;
};

const autoLoginPatch = async () => {
	if (!Config('AutoLogin')) return;

	const TmpAutologin = `autologin${TmpFileExt}`;
	fs.copySync(`${ScriptDirname}/templates/autologin`, TmpAutologin);

	const accLogin = fs.readFileSync(
		`${TmpAutologin}/Interface/GlueXML/AccountLogin.lua`,
		{ encoding: 'utf-8' }
	);
	fs.writeFileSync(
		`${TmpAutologin}/Interface/GlueXML/AccountLogin.lua`,
		accLogin
			.replace('$$AutoLoginName$$', Config('AutoLogin').Name)
			.replace('$$AutoLoginPassword$$', Config('AutoLogin').Password)
	);

	const charSelect = fs.readFileSync(
		`${TmpAutologin}/Interface/GlueXML/CharacterSelect.lua`,
		{ encoding: 'utf-8' }
	);
	fs.writeFileSync(
		`${TmpAutologin}/Interface/GlueXML/CharacterSelect.lua`,
		charSelect.replace(
			'"$$AutoLoginCharacter$$"',
			Config('AutoLogin').Char?.toString() ?? '1'
		)
	);

	await buildMpq(
		`${process.cwd()}/${TmpAutologin}`,
		`${Config('ClientPath')}/Data/Patch-9.mpq`,
		'inPlace'
	);

	fs.rmSync(TmpAutologin, { recursive: true });
	console.log('Autologin patch added...');
};

const cleanup = () => {
	console.log('Cleaning up...');
	if (Config('AutoLogin')) {
		deleteFile(`${Config('ClientPath')}/Data/Patch-9.mpq`);
		console.log('Autologin patch removed...');
	}
	process.exit(0);
};

const watchCallback = (event: string) => async (filename: string) => {
	if (!fs.existsSync(filename)) return;

	console.log(`Detected file change: ${filename} ${event}`);
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
	} finally {
		RebuildingAssets = false;
	}
};

const devMpq = async () => {
	try {
		await autoLoginPatch();

		if (fs.existsSync(`${Config('PatchPath')}/DBFilesClient`)) {
			await initDb();
		}

		await saveMpq();

		watch(Config('PatchPath'), {
			depth: 99,
			ignored: [`/**/*${TmpFileExt}*`, '/.git/**/*', '/**/*.db-journal'],
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

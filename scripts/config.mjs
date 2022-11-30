// @ts-check
import fs from 'fs-extra';

/** @type {Record<'ClientPath'|'PatchName'|'PatchPath', string> & { AutoLogin: Record<'Name'|'Password'|'Char', string> }} */
let _cfg;

/** @type {<T extends 'ClientPath'|'PatchName'|'PatchPath'|'AutoLogin'>(key:T) => T extends 'AutoLogin' ? Record<'Name'|'Password'|'Char', string>:string } */
const Config = key => {
	if (_cfg[key] !== undefined) return _cfg[key];

	if (!_cfg) {
		const configPath = `${process.cwd()}/haax-config.json`;
		_cfg = fs.existsSync(configPath) ? fs.readJsonSync(configPath) : {};
	}

	switch (key) {
		case 'ClientPath':
			if (!_cfg.ClientPath)
				throw 'Missing config key "ClientPath" - path to wow client.';
			break;
		case 'PatchName':
			if (!_cfg.PatchName)
				throw 'Missing config key "PatchName" - name of the patch that is generated.';
			break;
		case 'PatchPath':
			if (!_cfg.PatchPath) _cfg.PatchPath = process.cwd();
			break;
		case 'AutoLogin':
			if (_cfg.AutoLogin && (!_cfg.AutoLogin.Name || !_cfg.AutoLogin.Password))
				throw 'Incorrect config key "AutoLogin" - both "Name" and "Password" are required.';
			if (_cfg.AutoLogin?.Char && Number.isNaN(Number(_cfg.AutoLogin.Char)))
				throw 'Incorrect config key "AutoLogin" - "Char" must be a valid number.';
	}

	return _cfg[key];
};

export default Config;

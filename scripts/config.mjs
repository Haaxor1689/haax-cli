// @ts-check
import fs from 'fs-extra';

/** @type {Record<'ClientPath'|'PatchName'|'PatchPath', string> & { AutoLogin: Record<'Name'|'Password'|'Char', string> }} */
let _cfg;

const Config = () => {
	if (_cfg) return _cfg;

	const configPath = `${process.cwd()}/haax-config.json`;
	if (!fs.existsSync(configPath)) throw `Missing "haax-config.json" file.`;
	_cfg = fs.readJsonSync(configPath);

	if (!_cfg.ClientPath)
		throw 'Missing config key "ClientPath" - path to wow client.';

	if (!_cfg.PatchName)
		throw 'Missing config key "PatchName" - name of the patch that is generated.';

	if (!_cfg.PatchPath) _cfg.PatchPath = process.cwd();

	if (_cfg.AutoLogin && (!_cfg.AutoLogin.Name || !_cfg.AutoLogin.Password))
		throw 'Incorrect config key "AutoLogin" - both "Name" and "Password" are required.';

	if (_cfg.AutoLogin && Number.isNaN(Number(_cfg.AutoLogin.Char)))
		throw 'Incorrect config key "AutoLogin" - "Char" must be a valid number.';

	return _cfg;
};

export default Config;

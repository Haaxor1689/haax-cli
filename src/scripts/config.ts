// @ts-check
import path from 'path';

import fs from 'fs-extra';

let _cfg: {
	ClientPath: string;
	PatchName: string;
	PatchPath: string;
};

const Config = (key: keyof typeof _cfg) => {
	if (_cfg?.[key] !== undefined) return _cfg[key];

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
				_cfg.PatchName = `${path.basename(process.cwd())}.mpq`;
			break;
		case 'PatchPath':
			if (!_cfg.PatchPath) _cfg.PatchPath = process.cwd();
			break;
	}

	return _cfg[key];
};

export default Config;

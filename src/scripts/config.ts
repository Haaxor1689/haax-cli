// @ts-check
import fs from 'fs-extra';

let _cfg: Record<'ClientPath' | 'PatchName' | 'PatchPath', string>;

const Config = <T extends 'ClientPath' | 'PatchName' | 'PatchPath'>(
	key: T
): string => {
	// FIXME: Types
	if (_cfg?.[key] !== undefined) return _cfg[key] as any;

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
	}

	// FIXME: Types
	return _cfg[key] as any;
};

export default Config;

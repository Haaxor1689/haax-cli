import fs from 'fs-extra';
import { pick } from 'lodash-es';

import { Blp } from './types.js';

const metaBlp = async (filePath: string, full?: unknown) => {
	console.log(`Loading BLP ${filePath}...`);

	const blp = Blp.fromBuffer(fs.readFileSync(filePath));
	console.log(
		full
			? blp
			: {
					...pick(blp, [
						'format',
						'alphaSize',
						'compression',
						'mipMaps',
						'width',
						'height'
					]),
					mipOffsets: blp.mipOffsets.filter(v => v).join(', '),
					mipSizes: blp.mipSizes.filter(v => v).join(', ')
			  }
	);
};

export default metaBlp;

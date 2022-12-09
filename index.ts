#!/usr/bin/env ts-node

import devMpq from './scripts/mpq/dev.js';
import buildMpq from './scripts/mpq/build.js';
import prismaClient from './scripts/db/prisma.js';
import mergeBlp from './scripts/blp/merge.js';
import sliceBlp from './scripts/blp/slice.js';
import initDb from './scripts/db/init.js';
import importDb from './scripts/db/import.js';
import exportDb from './scripts/db/export.js';
import encodeDbc from './scripts/dbc/encode.js';
import decodeDbc from './scripts/dbc/decode.js';
import extractMpq from './scripts/mpq/extract.js';
import decodeZmp from './scripts/zmp/decode.js';
import encodeZmp from './scripts/zmp/encode.js';
import unhashMinimap from './scripts/minimap/unhash.js';
import cleanUnusedMinimap from './scripts/minimap/unused.js';

const Actions: Record<
	string,
	{ help?: string; exec: (...args: string[]) => Promise<void> }
> = {
	'dev': {
		exec: devMpq,
		help: '\n\t\tStarts a dev environment that watches for file changes, rebuilds assets from source (f.e. png to blp) and starts a WoW instance.\n\t\tAutomatically runs "db-import" if no db is found.'
	},
	'build': {
		exec: buildMpq,
		help: '<sourceDir> <outputPath> <inPlace?>\n\t\tBuilds provided directory sourceDir into an MPQ archive at outputPath.\n\t\tIgnores development assets like psd/png/csv files.\n\t\tIf third argument is provided, patch will be constructed in place instead, which is faster but also deletes the otherwise ignored files from sourceDir.'
	},
	'prisma': {
		exec: prismaClient,
		help: '\n\t\tStarts Prisma Studio where you can browse and edit contents of dbc files.'
	},
	'blp-merge': {
		exec: mergeBlp,
		help: '<filePath> <colCount?>\n\t\tMerges blp textures into one png image. filePath should point to first blp file in a texture set.\n\t\tOptionally you can also provide colCount which will override inferred column count of the texture.\n\t\tIf filePath is a directory, all blp textures inside will be merged instead.'
	},
	'blp-slice': {
		exec: sliceBlp,
		help: '<filePath>\n\t\tSlices a png image into correct number of blp textures.\n\t\tIf filePath is a directory, all png images inside will be sliced instead.'
	},
	'db-init': {
		exec: initDb,
		help: '\n\t\tCorrectly initializes the qslite database. This step is required before you are able to import and export data from the db.'
	},
	'db-import': {
		exec: importDb,
		help: '<dbcPath>\n\t\tImports all data from available dbc files from DBFilesClient folder under dbcPath argument into SQLite DBFilesClient.db.\n\t\tIf dbcPath is not provided, DBFilesClient folder under Config.PatchPath will be used.'
	},
	'db-export': {
		exec: exportDb,
		help: '<dbcPath>\n\t\tExports all data from SQLite DBFilesClient.db to dbc files inside DBFilesClient folder under dbcPath argument.\n\t\tIf dbcPath is not provided, DBFilesClient folder under Config.PatchPath will be used.'
	},
	'dbc-decode': {
		exec: decodeDbc,
		help: '<filePath>\n\t\tDecodes a dbc file into csv file. filePath should point to a specific .dbc file.\n\t\tIf filePath is a directory, all dbc files inside will be decoded instead.'
	},
	'dbc-encode': {
		exec: encodeDbc,
		help: '<filePath>\n\t\tEncodes a csv file into dbc file. filePath should point to a specific .csv file.\n\t\tIf filePath is a directory, all csv files inside will be encoded instead.'
	},
	'minimap-unhash': {
		exec: unhashMinimap,
		help: 'TODO'
	},
	'minimap-clean-unused': {
		exec: cleanUnusedMinimap,
		help: 'TODO'
	},
	'mpq-extract': {
		exec: extractMpq,
		help: '<filePath> <outputDir>\n\t\tExtracts provided mpq archive filePath into a directory with the same name inside outputDir directory.'
	},
	'zmp-decode': {
		exec: decodeZmp,
		help: '<filePath> <areaTableDbcPath>\n\t\tDecodes a zmp file into a 128x128 png image where each pixel represents one chunk of map and the color represents which zone it corresponds to on world map.\n\t\tIf no filePath.color.csv file is found, new one will be generated with random colors for each found zone.\n\t\tareaTableVbcPath is required in order to correctly match areaIds with human readable area names in color csv.'
	},
	'zmp-encode': {
		exec: encodeZmp,
		help: '<filePath> <areaTableDbcPath>\n\t\tEncodes a 128x128 png image into a zmp binary file.\n\t\tRequires a filePath.color.csv file that contains table of area names and hex colors they are represented by in the image.\n\t\tareaTableVbcPath is required in order to correctly match areaIds with human readable area names in color csv.'
	}
};

const action = Actions[process.argv[2] ?? ''];
if (!action) {
	process.argv[2] && console.log(`Unknown action "${process.argv[2]}".`);
	console.log(
		`Available actions:\n\n${Object.entries(Actions)
			.map(([k, v]) => `\t${k}${v.help ? ` ${v.help}` : ''}\n`)
			.join('\n')}`
	);
	process.exit(0);
}

await action.exec(...process.argv.slice(3));

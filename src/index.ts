#!/usr/bin/env node

import yargs from 'yargs';

const Actions: Record<string, { help?: string; args?: string; exec: string }> =
	{
		'fix-blp-compression': {
			exec: './scripts/automation/blpCompression.ts'
		},
		'dev': {
			exec: './scripts/mpq/dev.js',
			help: 'Starts a dev environment that watches for file changes, rebuilds assets from source (f.e. png to blp) and starts a WoW instance. Automatically runs "db-import" if no db is found.'
		},
		'build': {
			exec: './scripts/mpq/build.js',
			args: '[sourceDir] [outputPath] [inPlace?]',
			help: 'Builds provided directory sourceDir into an MPQ archive at outputPath. Ignores development assets like psd/png/csv files. If third argument is provided, patch will be constructed in place instead, which is faster but also deletes the otherwise ignored files from sourceDir.'
		},
		'find': {
			exec: './scripts/mpq/find.js',
			args: '[filePath] [patchesDir?]',
			help: 'Starts Prisma Studio where you can browse and edit contents of dbc files.'
		},
		'prisma': {
			exec: './scripts/db/prisma.js',
			help: 'Starts Prisma Studio where you can browse and edit contents of dbc files.'
		},
		'adt-decode': {
			exec: './scripts/adt/decode.js',
			args: '[filePath]'
		},
		'blp-merge': {
			exec: './scripts/blp/merge.js',
			args: '[filePath] [colCount?]',
			help: 'Merges blp textures into one png image. filePath should point to first blp file in a texture set. Optionally you can also provide colCount which will override inferred column count of the texture. If filePath is a directory, all blp textures inside will be merged instead.'
		},
		'blp-slice': {
			exec: './scripts/blp/slice.js',
			args: '[filePath]',
			help: 'Slices a png image into correct number of blp textures. If filePath is a directory, all png images inside will be sliced instead.'
		},
		'blp-meta': {
			exec: './scripts/blp/meta.js',
			args: '[filePath]'
		},
		'blp-load': {
			exec: './scripts/blp/load.js',
			args: '[filePath]'
		},
		'blp-save': {
			exec: './scripts/blp/save.js',
			args: '[filePath]'
		},
		'db-init': {
			exec: './scripts/db/init.js',
			help: 'Correctly initializes the qslite database. This step is required before you are able to import and export data from the db.'
		},
		'db-import': {
			exec: './scripts/db/import.js',
			args: '[dbcPath]',
			help: 'Imports all data from available dbc files from DBFilesClient folder under dbcPath argument into SQLite DBFilesClient.db. If dbcPath is not provided, DBFilesClient folder under Config.PatchPath will be used.'
		},
		'db-export': {
			exec: './scripts/db/export.js',
			args: '[dbcPath]',
			help: 'Exports all data from SQLite DBFilesClient.db to dbc files inside DBFilesClient folder under dbcPath argument. If dbcPath is not provided, DBFilesClient folder under Config.PatchPath will be used.'
		},
		'dbc-decode': {
			exec: './scripts/dbc/decode.js',
			args: '[filePath]',
			help: 'Decodes a dbc file into csv file. filePath should point to a specific .dbc file. If filePath is a directory, all dbc files inside will be decoded instead.'
		},
		'dbc-encode': {
			exec: './scripts/dbc/encode.js',
			args: '[filePath]',
			help: 'Encodes a csv file into dbc file. filePath should point to a specific .csv file. If filePath is a directory, all csv files inside will be encoded instead.'
		},
		'minimap-find-missing': {
			exec: './scripts/minimap/findMissing.js',
			args: '[...patchDirs]'
		},
		'minimap-stitch': {
			exec: './scripts/minimap/stitch.js',
			args: '[withCoordinates] [patchesDir] [outDir]',
			help: 'It will use md5translate.trs file from the highest priority patch and stitch a png image together for each map found and place it in the outDir.'
		},
		'minimap-unhash': {
			exec: './scripts/minimap/unhash.js',
			args: '[filePath]',
			help: 'Loads a md5translate.trs file from provided path and copies all textures linked in it into a folder structure with the original unhashed file names.'
		},
		'minimap-clean-unused': {
			exec: './scripts/minimap/unused.js'
		},
		'minimap-add-chunks': {
			exec: './scripts/minimap/addChunks.js'
		},
		'mpq-extract': {
			exec: './scripts/mpq/extract.js',
			args: '[filePath] [outputDir]',
			help: 'Extracts provided mpq archive filePath into a directory with the same name inside outputDir directory.'
		},
		'wmo-decode': {
			exec: './scripts/wmo/decode.js',
			args: '[filePath]'
		},
		'zmp-decode': {
			exec: './scripts/zmp/decode.js',
			args: '[filePath] [areaTableDbcPath]',
			help: 'Decodes a zmp file into a 128x128 png image where each pixel represents one chunk of map and the color represents which zone it corresponds to on world map. If no filePath.color.csv file is found, new one will be generated with random colors for each found zone. areaTableVbcPath is required in order to correctly match areaIds with human readable area names in color csv.'
		},
		'zmp-encode': {
			exec: './scripts/zmp/encode.js',
			args: '[filePath] [areaTableDbcPath]',
			help: 'Encodes a 128x128 png image into a zmp binary file. Requires a filePath.color.csv file that contains table of area names and hex colors they are represented by in the image. areaTableVbcPath is required in order to correctly match areaIds with human readable area names in color csv.'
		}
	};

const argsInit = yargs(process.argv.slice(2))
	.scriptName('haax')
	.usage('$0 <command> [args]');

const args = Object.entries(Actions).reduce(
	(a, [name, opts]) =>
		a.command(
			[name, opts.args].filter(v => v).join(' '),
			[opts.args, opts.help].filter(v => v).join('\n'),
			{},
			async () => {
				try {
					const func = (await import(opts.exec)).default as (
						...args: string[]
					) => Promise<void>;

					const timer = 'Completed in';
					console.time(timer);
					await func(...process.argv.slice(3));
					console.timeEnd(timer);
				} catch (e) {
					console.log(e);
				}
			}
		),
	argsInit
);

args
	.help()
	.version()
	.demandCommand(1, 'Provide a command to run.')
	.strictCommands()
	.recommendCommands()
	.wrap(yargs().terminalWidth()).argv;

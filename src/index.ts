#!/usr/bin/env ts-node

import yargs, { type Options } from 'yargs';

const Actions: Record<
	string,
	{ help?: string; args?: { [key: string]: Options }; exec: string }
> = {
	'dev': {
		exec: './scripts/mpq/dev.js',
		help: 'Starts a dev environment that watches for file changes, rebuilds assets from source and keeps restarting a WoW instance. Requires haax.config.json file.'
	},
	'build': {
		exec: './scripts/mpq/build.js',
		args: {
			sourceDir: {
				desc: 'Path to directory containing files you want to package into the patch.',
				defaultDescription: '<PatchPath>',
				requiresArg: true,
				normalize: true,
				type: 'string',
				alias: ['s', 'src']
			},
			outputPath: {
				desc: 'Path to the patch including whole name with extension.',
				defaultDescription: '<ClientPath>/Data/<PatchName>',
				requiresArg: true,
				normalize: true,
				type: 'string',
				alias: ['o', 'out']
			},
			inPlace: {
				desc: 'If provided, build will not copy files but ignored files will be deleted.',
				type: 'boolean',
				alias: 'i'
			}
		},
		help: 'Builds provided sourceDir into an MPQ archive at outputPath. Ignores development assets like psd/png/csv files.'
	},
	'find': {
		exec: './scripts/mpq/find.js',
		args: {
			filePath: {
				desc: 'Path to searched file relative to patch root.',
				demandOption: true,
				requiresArg: true,
				normalize: true,
				type: 'string',
				alias: 'f'
			},
			patchesDir: {
				desc: 'Path to folder containing extracted patches.',
				defaultDescription: '<PatchPath>/..',
				requiresArg: true,
				normalize: true,
				type: 'string',
				alias: 'p'
			}
		},
		help: 'Looks for given file and returns a path to one that will be loaded in game, based on patch priorities.'
	},
	'prisma': {
		exec: './scripts/db/prisma.js',
		help: 'Starts Prisma Studio where you can browse and edit contents of dbc files.'
	},
	'adt-decode': {
		exec: './scripts/adt/decode.js',
		args: {
			dirPath: {
				desc: 'Path to the directory containing .adt files.',
				demandOption: true,
				requiresArg: true,
				normalize: true,
				type: 'string',
				alias: ['m', 'map']
			},
			patchesDir: {
				desc: 'Path to folder containing extracted patches.',
				defaultDescription: '<PatchPath>/..',
				requiresArg: true,
				normalize: true,
				type: 'string',
				alias: 'p'
			},
			areaTablePath: {
				desc: 'Path to the patch including whole name with extension.',
				defaultDescription: '<PatchPath>/DBFilesClient/AreaTable.dbc',
				requiresArg: true,
				normalize: true,
				type: 'string',
				alias: 'a'
			}
		},
		help: 'Prints info about contents of provided .adt file.'
	},
	'blp-merge': {
		exec: './scripts/blp/merge.js',
		args: {
			filePath: {
				desc: 'Path to the first blp of a sliced texture.',
				demandOption: true,
				normalize: true,
				type: 'string',
				alias: 'f'
			},
			colCount: {
				desc: 'Required if both texture width and height are multiples of 256. World map is automatically detected.',
				requiresArg: true,
				type: 'number',
				alias: 'c'
			}
		},
		help: 'Merges blp texture slices into one png image.'
	},
	'blp-slice': {
		exec: './scripts/blp/slice.js',
		args: {
			filePath: {
				desc: 'Path to the png image.',
				demandOption: true,
				normalize: true,
				type: 'string',
				alias: 'f'
			}
		},
		help: 'Slices a png image into correct number of blp textures. If filePath is a directory, all png images inside will be sliced instead.'
	},
	'blp-meta': {
		exec: './scripts/blp/meta.js',
		args: {
			filePath: {
				desc: 'Path to the blp texture.',
				demandOption: true,
				normalize: true,
				type: 'string',
				alias: 'f'
			},
			verbose: {
				desc: 'Prints out complete information about the texture.',
				type: 'boolean',
				alias: 'v'
			}
		},
		help: 'Prints out info about texture compression, color and alpha.'
	},
	'blp-load': {
		exec: './scripts/blp/load.js',
		args: {
			filePath: {
				desc: 'Path to the blp texture.',
				demandOption: true,
				normalize: true,
				type: 'string',
				alias: 'f'
			},
			outputPath: {
				desc: 'Path to save the png to.',
				defaultDescription: '<filePath>',
				normalize: true,
				type: 'string',
				alias: ['o', 'out']
			},
			withMips: {
				desc: 'Also export all mip-maps as separate images.',
				type: 'boolean',
				alias: ['m', 'mips']
			}
		},
		help: 'Transforms blp into a png image.'
	},
	'blp-save': {
		exec: './scripts/blp/save.js',
		args: {
			filePath: {
				desc: 'Path to the png image.',
				demandOption: true,
				normalize: true,
				type: 'string',
				alias: 'f'
			},
			outputPath: {
				desc: 'Path to save the blp to.',
				defaultDescription: '<filePath>',
				normalize: true,
				type: 'string',
				alias: ['o', 'out']
			}
		},
		help: 'Transforms png into a blp texture.'
	},
	'db-init': {
		exec: './scripts/db/init.js',
		args: {
			force: {
				desc: 'Force generate new db, even if one already exists.',
				type: 'boolean',
				alias: 'f'
			}
		},
		help: 'Correctly initializes the sqlite database. This step is required before you are able to import and export data from the db.'
	},
	'db-import': {
		exec: './scripts/db/import.js',
		args: {
			dbcPath: {
				desc: 'Path to the DBFilesClient folder.',
				defaultDescription: '<PatchPath>/DBFilesClient',
				normalize: true,
				type: 'string',
				alias: 'f'
			}
		},
		help: 'Imports all data from available dbc files from DBFilesClient folder under dbcPath argument into SQLite DBFilesClient.db.'
	},
	'db-export': {
		exec: './scripts/db/export.js',
		args: {
			dbcPath: {
				desc: 'Path to the DBFilesClient folder.',
				defaultDescription: '<PatchPath>/DBFilesClient',
				normalize: true,
				type: 'string',
				alias: 'f'
			}
		},
		help: 'Exports all data from SQLite DBFilesClient.db to dbc files inside DBFilesClient folder under dbcPath argument.'
	},
	'dbc-decode': {
		exec: './scripts/dbc/decode.js',
		args: {
			filePath: {
				desc: 'Path to the dbc.',
				demandOption: true,
				normalize: true,
				type: 'string',
				alias: 'f'
			}
		},
		help: 'Decodes a dbc file into csv file. filePath should point to a specific .dbc file. If filePath is a directory, all dbc files inside will be decoded instead.'
	},
	'dbc-encode': {
		exec: './scripts/dbc/encode.js',
		args: {
			filePath: {
				desc: 'Path to the decoded csv.',
				demandOption: true,
				normalize: true,
				type: 'string',
				alias: 'f'
			}
		},
		help: 'Encodes a csv file into dbc file. filePath should point to a specific .csv file. If filePath is a directory, all csv files inside will be encoded instead.'
	},
	'minimap-find-missing': {
		exec: './scripts/minimap/findMissing.js'
		// args: '[...patchDirs]'
	},
	'minimap-stitch': {
		exec: './scripts/minimap/stitch.js',
		args: {
			withCoordinates: { boolean: true },
			patchesDir: {
				normalize: true,
				type: 'string'
			},
			outDir: {
				normalize: true,
				type: 'string'
			}
		},
		help: 'It will use md5translate.trs file from the highest priority patch and stitch a png image together for each map found and place it in the outDir.'
	},
	'minimap-unhash': {
		exec: './scripts/minimap/unhash.js',
		args: { filePath: { demandOption: true } },
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
		args: {
			filePath: {
				desc: 'Path to the mpq archive.',
				demandOption: true,
				normalize: true,
				type: 'string',
				alias: 'f'
			},
			outputDir: {
				desc: 'Path to the output directory.',
				demandOption: true,
				normalize: true,
				type: 'string',
				alias: 'o'
			}
		},
		help: 'Extracts provided mpq archive filePath into a directory with the same name inside outputDir directory.'
	},
	'wmo-decode': {
		exec: './scripts/wmo/decode.js',
		args: {
			filePath: {
				desc: 'Path to the root WMO file.',
				demandOption: true,
				normalize: true,
				type: 'string',
				alias: 'f'
			}
		}
	},
	'zmp-decode': {
		exec: './scripts/zmp/decode.js',
		args: {
			filePath: { demandOption: true },
			areaTableDbcPath: { demandOption: true }
		},
		help: 'Decodes a zmp file into a 128x128 png image where each pixel represents one chunk of map and the color represents which zone it corresponds to on world map. If no filePath.color.csv file is found, new one will be generated with random colors for each found zone. areaTableVbcPath is required in order to correctly match areaIds with human readable area names in color csv.'
	},
	'zmp-encode': {
		exec: './scripts/zmp/encode.js',
		args: {
			filePath: { demandOption: true, type: 'string' },
			areaTableDbcPath: { demandOption: true, type: 'string' }
		},
		help: 'Encodes a 128x128 png image into a zmp binary file. Requires a filePath.color.csv file that contains table of area names and hex colors they are represented by in the image. areaTableVbcPath is required in order to correctly match areaIds with human readable area names in color csv.'
	},
	'fix-blp-compression': {
		exec: './scripts/automation/blpCompression.ts'
	},
	'talents-export': {
		exec: './scripts/talents/export.ts'
	}
};

Object.entries(Actions).reduce(
	(a, [name, opts]) =>
		a.command(
			name,
			`${opts.help ?? '...'}\n`,
			{
				// help: { hidden: true },
				// version: { hidden: true },
				...(opts.args ?? {})
			},
			async args => {
				try {
					const func = (await import(opts.exec)).default as (
						args: unknown
					) => Promise<void>;

					const timer = 'Completed in';
					console.time(timer);
					await func(args);
					console.timeEnd(timer);
				} catch (e) {
					console.log(e);
				}
			}
		),
	yargs(process.argv.slice(2))
		.scriptName('haax')
		.usage('$0 <command> [args]')
		.strict()
		.help()
		.version()
		.demandCommand(1, 'Provide a command to run.')
		.recommendCommands()
		.wrap(yargs().terminalWidth())
).argv;

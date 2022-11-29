# Haax - WoW DevTools

This package contains collection of tools that help make developing custom content for Vanilla WoW easier.

> **Note:** Curretnly only works on **Windows**

## Usage

Most convenient way of using this package is inside folder with unpacked MPQ patch.

```
npx haax mpq-extract path/to/patch.mpq path/to/working/directory
```

Then add a `haax-config.json` file inside the working directory. Here you

```jsonc
{
  "ClientPath": "C:/path/to/wow/client", // Path to WoW client directory
  "PatchName": "Patch-4.mpq", // Name of the patch that the dev action should create

  // (Optional) If extracted patch is not in current folder
  "PatchPath": "C:/path/to/patch/directory",

  // (Optional) AutoLogin feature
  "AutoLogin": {
    "Name": "name",
    "Password": "password",
    "Char": 1 // Default: 1
  }
}
```

Both `ClientPath` and `PatchName` are required. You can also change `PatchPath` which is by default current directory. You can also fill out optional auto-login info to start WoW with pre-filled login info and skip character select screen.

Now you can start development environment that will watch for file changes inside working directory, rebuild various assets and automatically rebuild patch and reopen WoW after you close it. To exit dev mode, press Enter.

```
npx haax dev
```

If you are working with dbc files, you can also explore and edit them in Prisma Studio database tool, where you can also see relations between supported dbc tables.

```
npx haax prisma
```

You can find list of all supported actions below.

## Available actions

```
dev
	Starts a dev environment that watches for file changes, rebuilds assets from source (f.e. png to blp) and starts a WoW instance.

build <sourceDir> <outputPath>
	Builds provided directory sourceDir into an MPQ archive at outputPath.
	Ignores development assets like psd/png/csv files.

prisma
	Starts Prisma Studio where you can browse and edit contents of dbc files.

blp-merge <filePath> <colCount?>
	Merges blp textures into one png image. filePath should point to first blp file in a texture set.
	Optionally you can also provide colCount which will override inferred column count of the texture.
	If filePath is a directory, all blp textures inside will be merged instead.

blp-slice <filePath>
	Slices a png image into correct number of blp textures.
	If filePath is a directory, all png images inside will be sliced instead.

db-import <dbcPath>
	Imports all data from available dbc files from DBFilesClient folder under dbcPath argument into SQLite DBFilesClient.db.

db-export <dbcPath>
	Exports all data from SQLite DBFilesClient.db to dbc files inside DBFilesClient folder under dbcPath argument.

dbc-decode <filePath>
	If filePath is a directory, all dbc files inside will be decoded instead.

dbc-encode <filePath>
	If filePath is a directory, all csv files inside will be encoded instead.

mpq-extract <filePath> <outputDir>
	Extracts provided mpq archive filePath into a directory with the same name inside outputDir directory.

zmp-decode <filePath> <areaTableDbcPath>
	Decodes a zmp file into a 128x128 png image where each pixel represents one chunk of map and the color represents which zone it corresponds to on world map.
	If no filePath.color.csv file is found, new one will be generated with random colors for each found zone.
	areaTableVbcPath is required in order to correctly match areaIds with human readable area names in color csv.

zmp-encode <filePath> <areaTableDbcPath>
	Encodes a 128x128 png image into a zmp binary file.
	Requires a filePath.color.csv file that contains table of area names and hex colors they are represented by in the image.
	areaTableVbcPath is required in order to correctly match areaIds with human readable area names in color csv.
```

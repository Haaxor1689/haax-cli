# Haax - WoW DevTools

This package contains collection of tools that help make developing custom content for Vanilla WoW easier.

> **Note:** Curretnly only works on **Windows**

## Usage

Most convenient way of using this package is inside folder with unpacked MPQ patch.

```
npx haax mpq-extract -f path/to/patch.mpq -o path/to/working/directory
```

Then add a `haax-config.json` file inside the working directory.

```jsonc
{
	"ClientPath": "C:/path/to/wow/client", // Path to WoW client directory
	"PatchName": "Patch-4.mpq", // Name of the patch that the dev action should create

	// (Optional) If extracted patch is not in current folder
	"PatchPath": "C:/path/to/patch/directory"
}
```

Both `ClientPath` and `PatchName` are required. You can also change `PatchPath` which is by default current directory. You can also fill out optional auto-login info to start WoW with pre-filled login info and skip character select screen.

Now you can start development environment that will watch for file changes inside working directory, rebuild various assets and automatically rebuild patch and reopen WoW after you close it. To exit dev mode, press Enter.

```
npx haax dev
```

## Available actions

You can find full list of available actions by running following command

```
npx haax --help
```

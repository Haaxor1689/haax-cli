# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

## 0.3.5 - 2023-03-22

## 0.3.4 - 2023-03-22

## 0.3.3 - 2023-03-22

## 0.3.2 - 2023-03-22

## 0.3.1 - 2023-03-22
### Fixed
- Fixed publish pipeline

## 0.3.0 - 2023-03-22
### Added
- Support for converting singular blp file into png
- Auto-detect correct blp compression for world map textures
- Automation scripts
- Typescript migration
- CreatureDisplayInfoExtra db support
- `talents-export` script for https://talent-builder.haaxor1689.dev/

### Changed
- Documentation and CLI help for commands

### Fixed
- Empty strings in DBCs now point to 0 instead of creating new pointer
- Also remove `.db` and `.yaml` files from mpq builds
- Correctly clean up tmp files after mpq build
- Build auto-login patch in place since it's a copy anyway
- Sorting of AreaPOI.dbc on db export

## 0.1.13 - 2022-11-30
### Added
- Support for relative paths in build and mpq-extract actions

## 0.1.12 - 2022-11-30
### Added
- inPlace option for mpq build action
- console logs that inform about patch build progress

## 0.1.11 - 2022-11-30
### Fixed
- Fixed crash when accessing Config for the first time

## 0.1.10 - 2022-11-30
### Fixed
- Fixed config file being required even in action that didn't really need it

## 0.1.9 - 2022-11-30
### Changed
- Call prisma generate on db init

## 0.1.8 - 2022-11-30
### Fixed
- Fix issue with spaces in path to scripts

## 0.1.7 - 2022-11-30
### Added
- Standalone init db action

### Fixed
- Prisma related actions
- Actions that were trying to write to script execution folder

## 0.1.6 - 2022-11-29
### Changed
- Start dev watch after initialization
- Changed .db location
- Improved prisma action

## 0.1.5 - 2022-11-29
### Changed
- In `db-export` and `db-import` actions, if dbcPath is not provided, DBFilesClient folder under Config.PatchPath will be used
- Renamed prisma.schema so it's picked up automatically during install
- Moved .db location to PatchPatch root
- Added .db-journal to dev watch ignore

## 0.1.4 - 2022-11-29
### Fixed
- AutoLogin issues

## 0.1.3 - 2022-11-29
### Fixed
- AutoLogin Char parse

## 0.1.2 - 2022-11-29
### Fixed
- Incorrect AutoLogin config parse

## 0.1.1 - 2022-11-29
### Added
- Initial version

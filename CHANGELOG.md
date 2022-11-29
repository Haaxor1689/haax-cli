# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

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

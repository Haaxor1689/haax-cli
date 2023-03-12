
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.10.1
 * Query Engine version: aead147aa326ccb985dcfed5b065b4fdabd44b19
 */
Prisma.prismaVersion = {
  client: "4.10.1",
  engine: "aead147aa326ccb985dcfed5b065b4fdabd44b19"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AreaPOIScalarFieldEnum = makeEnum({
  id: 'id',
  importance: 'importance',
  icon: 'icon',
  factionId: 'factionId',
  x: 'x',
  y: 'y',
  z: 'z',
  continentId: 'continentId',
  flags: 'flags',
  areaId: 'areaId',
  name_enUS: 'name_enUS',
  name_enGB: 'name_enGB',
  name_koKR: 'name_koKR',
  name_frFR: 'name_frFR',
  name_deDE: 'name_deDE',
  name_enCN: 'name_enCN',
  name_zhCN: 'name_zhCN',
  name_enTW: 'name_enTW',
  nameMask: 'nameMask',
  description_enUS: 'description_enUS',
  description_enGB: 'description_enGB',
  description_koKR: 'description_koKR',
  description_frFR: 'description_frFR',
  description_deDE: 'description_deDE',
  description_enCN: 'description_enCN',
  description_zhCN: 'description_zhCN',
  description_enTW: 'description_enTW',
  descriptionMask: 'descriptionMask',
  worldStateId: 'worldStateId'
});

exports.Prisma.AreaTableScalarFieldEnum = makeEnum({
  id: 'id',
  continentId: 'continentId',
  parentAreaId: 'parentAreaId',
  areaBit: 'areaBit',
  flags: 'flags',
  soundPreferenceId: 'soundPreferenceId',
  underwaterSoundPreferenceId: 'underwaterSoundPreferenceId',
  soundAmbienceId: 'soundAmbienceId',
  zoneMusicId: 'zoneMusicId',
  zoneIntroMusicId: 'zoneIntroMusicId',
  explorationLevel: 'explorationLevel',
  name_enUS: 'name_enUS',
  name_enGB: 'name_enGB',
  name_koKR: 'name_koKR',
  name_frFR: 'name_frFR',
  name_deDE: 'name_deDE',
  name_enCN: 'name_enCN',
  name_zhCN: 'name_zhCN',
  name_enTW: 'name_enTW',
  nameMask: 'nameMask',
  factionGroupMask: 'factionGroupMask',
  liquidTypeId: 'liquidTypeId',
  minElevation: 'minElevation',
  ambientMultiplier: 'ambientMultiplier',
  lightId: 'lightId'
});

exports.Prisma.AreaTriggerScalarFieldEnum = makeEnum({
  id: 'id',
  continentId: 'continentId',
  x: 'x',
  y: 'y',
  z: 'z',
  radius: 'radius',
  boxLength: 'boxLength',
  boxWidth: 'boxWidth',
  boxHeight: 'boxHeight',
  boxYaw: 'boxYaw'
});

exports.Prisma.ContinentScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.CreatureDisplayInfoExtraScalarFieldEnum = makeEnum({
  id: 'id',
  displayRaceId: 'displayRaceId',
  displaySexId: 'displaySexId',
  skinId: 'skinId',
  faceId: 'faceId',
  hairStyleId: 'hairStyleId',
  hairColorId: 'hairColorId',
  facialHairId: 'facialHairId',
  itemDisplayId_1: 'itemDisplayId_1',
  itemDisplayId_2: 'itemDisplayId_2',
  itemDisplayId_3: 'itemDisplayId_3',
  itemDisplayId_4: 'itemDisplayId_4',
  itemDisplayId_5: 'itemDisplayId_5',
  itemDisplayId_6: 'itemDisplayId_6',
  itemDisplayId_7: 'itemDisplayId_7',
  itemDisplayId_8: 'itemDisplayId_8',
  itemDisplayId_9: 'itemDisplayId_9',
  itemDisplayId_10: 'itemDisplayId_10',
  bakeName: 'bakeName'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.WMOAreaTableScalarFieldEnum = makeEnum({
  id: 'id',
  wmoId: 'wmoId',
  nameSetId: 'nameSetId',
  wmoGroupId: 'wmoGroupId',
  soundProviderId: 'soundProviderId',
  underwaterSoundProviderId: 'underwaterSoundProviderId',
  ambienceId: 'ambienceId',
  zoneMusicId: 'zoneMusicId',
  introSoundId: 'introSoundId',
  flags: 'flags',
  areaTableId: 'areaTableId',
  name_enUS: 'name_enUS',
  name_enGB: 'name_enGB',
  name_koKR: 'name_koKR',
  name_frFR: 'name_frFR',
  name_deDE: 'name_deDE',
  name_enCN: 'name_enCN',
  name_zhCN: 'name_zhCN',
  name_enTW: 'name_enTW',
  nameMask: 'nameMask'
});

exports.Prisma.WorldMapAreaScalarFieldEnum = makeEnum({
  id: 'id',
  continentId: 'continentId',
  areaId: 'areaId',
  name: 'name',
  locLeft: 'locLeft',
  locRight: 'locRight',
  locTop: 'locTop',
  locBottom: 'locBottom'
});

exports.Prisma.WorldMapContinentScalarFieldEnum = makeEnum({
  id: 'id',
  continentId: 'continentId',
  left: 'left',
  right: 'right',
  top: 'top',
  bottom: 'bottom',
  offsetX: 'offsetX',
  offsetY: 'offsetY',
  scale: 'scale',
  taxiMinX: 'taxiMinX',
  taxiMinY: 'taxiMinY',
  taxiMaxX: 'taxiMaxX',
  taxiMaxY: 'taxiMaxY'
});

exports.Prisma.WorldMapOverlayScalarFieldEnum = makeEnum({
  id: 'id',
  worldMapAreaId: 'worldMapAreaId',
  areaId_1: 'areaId_1',
  areaId_2: 'areaId_2',
  areaId_3: 'areaId_3',
  areaId_4: 'areaId_4',
  mapPointX: 'mapPointX',
  mapPointY: 'mapPointY',
  texture: 'texture',
  textureWidth: 'textureWidth',
  textureHeight: 'textureHeight',
  offsetX: 'offsetX',
  offsetY: 'offsetY',
  hitRectTop: 'hitRectTop',
  hitRectLeft: 'hitRectLeft',
  hitRectBottom: 'hitRectBottom',
  hitRectRight: 'hitRectRight'
});


exports.Prisma.ModelName = makeEnum({
  Continent: 'Continent',
  AreaPOI: 'AreaPOI',
  AreaTable: 'AreaTable',
  AreaTrigger: 'AreaTrigger',
  CreatureDisplayInfoExtra: 'CreatureDisplayInfoExtra',
  WMOAreaTable: 'WMOAreaTable',
  WorldMapArea: 'WorldMapArea',
  WorldMapContinent: 'WorldMapContinent',
  WorldMapOverlay: 'WorldMapOverlay'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

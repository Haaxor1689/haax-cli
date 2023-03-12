import * as r from 'restructure';

import { Enum, StringRef } from '../restructure.js';

export const Dbc = <T extends Record<string, unknown>>(
	fields: r.StructFields<T>
) =>
	new r.Struct({
		signature: new r.String(4),

		recordCount: r.int32le,
		fieldCount: r.int32le,
		recordSize: r.int32le,
		stringBlockSize: r.int32le,

		records: new r.Array(new r.Struct(fields), 'recordCount'),

		stringBlock: new r.Buffer('stringBlockSize')
	});

const Position = {
	x: r.floatle,
	y: r.floatle,
	z: r.floatle
};

const Languages = [
	'enUS',
	'enGB',
	'koKR',
	'frFR',
	'deDE',
	'enCN',
	'zhCN',
	'enTW'
] as const;

export const LocalizedStringRef = <T extends string>(key: T) =>
	({
		...Languages.reduce(
			(obj, lng) => ({ ...obj, [`${key}_${lng}`]: new StringRef() }),
			{}
		),
		[`${key}Mask`]: r.int32le
	} as Record<`${T}_${typeof Languages[number]}`, StringRef> &
		Record<`${T}Mask`, r.Number>);

export const ArrayField = (key: string, type: unknown, count: number) =>
	[...Array(count).keys()].reduce(
		(obj, i) => ({ ...obj, [`${key}_${i + 1}`]: type }),
		{}
	);

const Entities = {
	AnimationData: Dbc({
		id: r.int32le,
		name: new StringRef(),
		weaponFlags: r.int32le,
		bodyFlags: r.int32le,
		flags: r.int32le,
		fallback: r.int32le,
		previous: r.int32le
	}),
	AreaPOI: Dbc({
		id: r.int32le,
		importance: r.int32le,
		icon: r.int32le,
		factionId: r.int32le,
		...Position,
		continentId: r.int32le,
		flags: r.int32le,
		areaId: r.int32le,
		...LocalizedStringRef('name'),
		...LocalizedStringRef('description'),
		worldStateId: r.int32le
	}),
	AreaTable: Dbc({
		id: r.int32le,
		continentId: r.int32le,
		parentAreaId: r.int32le,
		areaBit: r.int32le,
		flags: r.int32le,

		soundPreferenceId: r.int32le,
		underwaterSoundPreferenceId: r.int32le,
		soundAmbienceId: r.int32le,
		zoneMusicId: r.int32le,
		zoneIntroMusicId: r.int32le,

		explorationLevel: r.int32le,
		...LocalizedStringRef('name'),
		factionGroupMask: r.int32le,
		liquidTypeId: r.int32le,
		minElevation: r.floatle,
		ambientMultiplier: r.floatle,
		lightId: r.int32le
	}),
	AreaTrigger: Dbc({
		id: r.int32le,
		continentId: r.int32le,
		...Position,
		radius: r.floatle,
		boxLength: r.floatle,
		boxWidth: r.floatle,
		boxHeight: r.floatle,
		boxYaw: r.floatle
	}),
	AuctionHouse: Dbc({
		id: r.int32le,
		factionId: r.int32le,
		depositRate: r.int32le,
		consignmentRate: r.int32le,
		...LocalizedStringRef('name')
	}),
	BankBagSlotPrices: Dbc({
		id: r.int32le,
		cost: r.int32le
	}),
	CameraShakes: Dbc({
		id: r.int32le,
		shakeType: new Enum([
			'CAMSHAKE_SINE',
			'CAMSHAKE_DECAYED_SINE',
			'NUM_CAMERA_SHAKETYPES'
		]),
		direction: new Enum([
			'CAMERA_FORWARD',
			'CAMERA_RIGHT',
			'CAMERA_UP',
			'NUM_CAMERA_DIRECTIONS'
		]),
		amplitude: r.floatle,
		frequency: r.floatle,
		duration: r.floatle,
		phase: r.floatle,
		coefficient: r.floatle
	}),
	Cfg_Categories: Dbc({
		id: r.int32le,
		region: r.int32le,
		...LocalizedStringRef('name')
	}),
	Cfg_Configs: Dbc({
		id: r.int32le,
		realmType: r.int32le,
		playerKillingAllowed: r.int32le,
		rolePlaying: r.int32le
	}),
	CharacterFacialHairStyles: Dbc({
		raceId: r.int32le,
		sexId: r.int32le,
		variationId: r.int32le,
		beardGeoset: r.int32le,
		moustacheGeoset: r.int32le,
		sideburnGeoset: r.int32le,
		...ArrayField('otherGeoset', r.int32le, 3)
	}),
	CharHairGeosets: Dbc({
		id: r.int32le,
		raceId: r.int32le,
		sexId: r.int32le,
		variationId: r.int32le,
		geosetId: r.int32le,
		showScalp: r.int32le
	}),
	CharSections: Dbc({
		id: r.int32le,
		raceId: r.int32le,
		sexId: r.int32le,
		baseSection: r.int32le,
		variationIndex: r.int32le,
		colorIndex: r.int32le,
		...ArrayField('textureName', new StringRef(), 3),
		flags: r.int32le
	}),
	CharStartOutfit: Dbc({
		id: r.int32le,
		raceId: r.uint8,
		classId: r.uint8,
		sexId: r.uint8,
		outfitId: r.uint8,
		...ArrayField('itemId', r.int32le, 12),
		...ArrayField('displayItemId', r.int32le, 12),
		...ArrayField('inventoryType', r.int32le, 12)
	}),
	ChatChannels: Dbc({
		id: r.int32le,
		flags: r.int32le,
		factionGroup: r.int32le,
		...LocalizedStringRef('name'),
		...LocalizedStringRef('shortcut')
	}),
	ChatProfanity: Dbc({
		id: r.int32le,
		text: new StringRef()
	}),
	ChrClasses: Dbc({
		id: r.int32le,
		playerClass: r.int32le,
		damageBonusStat: r.int32le,
		displayPower: r.int32le,
		petNameToken: new StringRef(),
		...LocalizedStringRef('name'),
		filename: new StringRef(),
		spellClassSet: r.int32le,
		flags: r.int32le
	}),
	ChrRaces: Dbc({
		id: r.int32le,
		flags: r.int32le,
		factionId: r.int32le,
		explorationSoundId: r.int32le,
		maleDisplayId: r.int32le,
		femaleDisplayId: r.int32le,
		clientPrefix: new StringRef(),
		mountScale: r.floatle,
		baseLanguage: r.int32le,
		creatureType: r.int32le,
		loginEffectSpellId: r.int32le,
		combatStunSpellId: r.int32le,
		resSicknessSpellId: r.int32le,
		splashSoundId: r.int32le,
		startingTaxiNodes: r.int32le,
		clientFileString: new StringRef(),
		cinematicSequenceId: r.int32le,
		...LocalizedStringRef('name'),
		maleCustomization: new StringRef(),
		femaleCustomization: new StringRef(),
		hairCustomization: new StringRef()
	}),
	CinematicCamera: Dbc({
		id: r.int32le,
		model: new StringRef(),
		soundId: r.int32le,
		originX: r.floatle,
		originY: r.floatle,
		originZ: r.floatle,
		originFacing: r.floatle
	}),
	CinematicSequences: Dbc({
		id: r.int32le,
		soundId: r.int32le,
		...ArrayField('camera', r.int32le, 8)
	}),
	CreatureDisplayInfo: Dbc({
		id: r.int32le,
		modelId: r.int32le,
		soundId: r.int32le,
		extendedDisplayInfoId: r.int32le,
		modelScale: r.floatle,
		modelAlpha: r.floatle,
		...ArrayField('textureVariant', new StringRef(), 3),
		sizeClass: r.int32le,
		bloodId: r.int32le,
		npcSoundId: r.int32le
	}),
	CreatureDisplayInfoExtra: Dbc({
		id: r.int32le,
		displayRaceId: r.int32le,
		displaySexId: r.int32le,
		skinId: r.int32le,
		faceId: r.int32le,
		hairStyleId: r.int32le,
		hairColorId: r.int32le,
		facialHairId: r.int32le,
		...ArrayField('itemDisplayId', r.int32le, 10),
		bakeName: new StringRef()
	}),
	CreatureFamily: Dbc({
		id: r.int32le,
		minScale: r.floatle,
		minScaleLevel: r.int32le,
		maxScale: r.floatle,
		maxScaleLevel: r.int32le,
		petFoodMask: r.int32le,
		petTalentType: r.int32le,
		categoryEnumId: r.int32le,
		...LocalizedStringRef('name'),
		iconFile: new StringRef()
	}),
	CreatureModelData: Dbc({
		id: r.int32le,
		flags: r.int32le,
		modelName: new StringRef(),
		sizeClass: r.int32le,
		modelScale: r.floatle,
		bloodId: r.int32le,
		footprintTextureId: r.int32le,
		footprintTextureLength: r.floatle,
		footprintTextureWidth: r.floatle,
		footprintTextureScale: r.floatle,
		foleyMaterialId: r.int32le,
		footstepShakeSize: r.int32le,
		deathThudShakeSize: r.int32le,
		collisionWidth: r.floatle,
		collisionHeight: r.floatle,
		mountHeight: r.floatle
	}),
	CreatureSoundData: Dbc({
		id: r.int32le,
		extertionId: r.int32le,
		extertionCriticalId: r.int32le,
		injuryId: r.int32le,
		injuryCriticalId: r.int32le,
		injuryCrushingBlowId: r.int32le,
		deathId: r.int32le,
		stunId: r.int32le,
		standId: r.int32le,
		footstepId: r.int32le,
		aggroId: r.int32le,
		wingFlapId: r.int32le,
		wingGlideId: r.int32le,
		alertId: r.int32le,
		...ArrayField('fidgetId', r.int32le, 4),
		...ArrayField('customAttackId', r.int32le, 4),
		npcSoundId: r.int32le,
		loopSoundId: r.int32le,
		creatureImpactType: r.int32le,
		jumpStartId: r.int32le,
		jumpEndId: r.int32le,
		petAttackId: r.int32le,
		petOrderId: r.int32le,
		petDismissId: r.int32le
	}),
	CreatureSpellData: Dbc({
		id: r.int32le,
		...ArrayField('spellId', r.int32le, 4),
		...ArrayField('availability', r.int32le, 4)
	}),
	CreatureType: Dbc({
		id: r.int32le,
		...LocalizedStringRef('name'),
		flags: r.int32le
	}),
	DeathThudLookups: Dbc({
		id: r.int32le,
		sizeClass: r.int32le,
		terrainTypeSoundId: r.int32le,
		soundId: r.int32le,
		waterSoundId: r.int32le
	}),
	DurabilityCosts: Dbc({
		id: r.int32le,
		...ArrayField('weaponClassCost', r.int32le, 21),
		...ArrayField('armorClassCost', r.int32le, 8)
	}),
	DurabilityQuality: Dbc({
		id: r.int32le,
		data: r.floatle
	}),
	Emotes: Dbc({
		id: r.int32le,
		slashCommand: new StringRef(),
		animationId: r.int32le,
		flags: r.int32le,
		specProc: r.int32le,
		specProcParam: r.int32le,
		soundId: r.int32le
	}),
	EmotesText: Dbc({
		id: r.int32le,
		name: new StringRef(),
		emoteId: r.int32le,
		...ArrayField('text', r.int32le, 16)
	}),
	EmotesTextData: Dbc({
		id: r.int32le,
		...LocalizedStringRef('text')
	}),
	EmotesTextSound: Dbc({
		id: r.int32le,
		emotesTextId: r.int32le,
		raceId: r.int32le,
		sexId: r.int32le,
		soundId: r.int32le
	}),
	Exhaustion: Dbc({
		id: r.int32le,
		xp: r.int32le,
		factor: r.floatle,
		outdoorHours: r.int32le,
		indoorHours: r.int32le,
		...LocalizedStringRef('name'),
		threshold: r.floatle
	}),
	Faction: Dbc({
		id: r.int32le,
		reputationIdx: r.int32le,
		...ArrayField('repRaceMask', r.int32le, 4),
		...ArrayField('repClassMask', r.int32le, 4),
		...ArrayField('repBase', r.int32le, 4),
		...ArrayField('repFlags', r.int32le, 4),
		parentFactionId: r.int32le,
		...LocalizedStringRef('name'),
		...LocalizedStringRef('description')
	}),
	FactionGroup: Dbc({
		id: r.int32le,
		maskId: r.int32le,
		internalName: new StringRef(),
		...LocalizedStringRef('name')
	}),
	FactionTemplate: Dbc({
		id: r.int32le,
		faction: r.int32le,
		flags: r.int32le,
		factionGroup: r.int32le,
		friendGroup: r.int32le,
		enemyGroup: r.int32le,
		...ArrayField('enemy', r.int32le, 4),
		...ArrayField('friend', r.int32le, 4)
	}),
	FootstepTerrainLookup: Dbc({
		id: r.int32le,
		creatureFootstepId: r.int32le,
		terrainSoundId: r.int32le,
		soundId: r.int32le,
		splashSoundId: r.int32le
	}),
	GameObjectArtKit: Dbc({
		id: r.int32le,
		...ArrayField('textureVariant', new StringRef(), 3),
		...ArrayField('attachModel', new StringRef(), 4)
	}),
	GameObjectDisplayInfo: Dbc({
		id: r.int32le,
		modelName: new StringRef(),
		standSound: r.int32le,
		openSound: r.int32le,
		loopSound: r.int32le,
		closeSound: r.int32le,
		destroySound: r.int32le,
		openedSound: r.int32le,
		...ArrayField('customSound', r.int32le, 4)
	}),
	GameTips: Dbc({
		id: r.int32le,
		...LocalizedStringRef('text')
	}),
	GMSurveyCurrentSurvey: Dbc({
		id: r.int32le,
		gmSurveyId: r.int32le
	}),
	GMSurveyQuestions: Dbc({
		id: r.int32le,
		...LocalizedStringRef('question')
	}),
	GMSurveySurveys: Dbc({
		id: r.int32le,
		...ArrayField('question', r.int32le, 10)
	}),
	GMTicketCategory: Dbc({
		id: r.int32le,
		...LocalizedStringRef('category')
	}),
	GroundEffectDoodad: Dbc({
		id: r.int32le,
		tagId: r.int32le,
		path: new StringRef()
	}),
	GroundEffectTexture: Dbc({
		id: r.int32le,
		...ArrayField('doodadId', r.int32le, 4),
		density: r.int32le,
		terrainTypeId: r.int32le
	}),
	HelmetGeosetVisData: Dbc({
		id: r.int32le,
		hairRaceMask: r.int32le,
		...ArrayField('facialRaceMask', r.int32le, 3),
		earsRaceMask: r.int32le
	}),
	ItemBagFamily: Dbc({
		id: r.int32le,
		...LocalizedStringRef('name')
	}),
	ItemClass: Dbc({
		id: r.int32le,
		subclassMapId: r.int32le,
		flags: r.int32le,
		...LocalizedStringRef('className')
	}),
	ItemDisplayInfo: Dbc({
		id: r.int32le,
		...ArrayField('modelName', new StringRef(), 2),
		...ArrayField('modelTexture', new StringRef(), 2),
		inventoryIcon: new StringRef(),
		...ArrayField('geosetGroup', r.int32le, 3),
		flags: r.int32le,
		spellVisualId: r.int32le,
		groupSoundIndex: r.int32le,
		...ArrayField('helmetGeosetVisId', r.int32le, 2),
		...ArrayField('texture', new StringRef(), 8),
		itemVisual: r.int32le
	}),
	ItemPetFood: Dbc({
		id: r.int32le,
		...LocalizedStringRef('name')
	}),
	ItemRandomProperties: Dbc({
		id: r.int32le,
		name: new StringRef(),
		...ArrayField('enchantment', r.int32le, 5),
		...LocalizedStringRef('suffix')
	}),
	ItemSet: Dbc({
		id: r.int32le,
		...LocalizedStringRef('name'),
		...ArrayField('itemId', r.int32le, 17),
		...ArrayField('setSpellId', r.int32le, 8),
		...ArrayField('setThreshold', r.int32le, 8),
		requiredSkillId: r.int32le,
		requiredSkillRank: r.int32le
	}),
	ItemSubClass: Dbc({
		classId: r.int32le,
		subclassId: r.int32le,
		prereqProficiency: r.int32le,
		postreqProficiency: r.int32le,
		flags: r.int32le,
		displayFlags: r.int32le,
		weaponParrySeq: r.int32le,
		weaponReadySeq: r.int32le,
		weaponAttackSeq: r.int32le,
		weaponSwingSize: r.int32le,
		...LocalizedStringRef('displayName'),
		...LocalizedStringRef('verboseName')
	}),
	ItemSubClassMask: Dbc({
		classId: r.int32le,
		mask: r.int32le,
		...LocalizedStringRef('name')
	}),
	ItemVisualEffects: Dbc({
		id: r.int32le,
		model: new StringRef()
	}),
	ItemVisuals: Dbc({
		id: r.int32le,
		...ArrayField('slot', r.int32le, 5)
	}),
	Languages: Dbc({
		id: r.int32le,
		...LocalizedStringRef('name')
	}),
	LFGDungeons: Dbc({
		id: r.int32le,
		...LocalizedStringRef('name'),
		levelMin: r.int32le,
		levelMax: r.int32le,
		instanceType: r.int32le,
		faction: r.int32le
	}),
	Light: Dbc({
		id: r.int32le,
		continentId: r.int32le,
		...Position,
		falloffStart: r.floatle,
		falloffEnd: r.floatle,
		paramStandard: r.int32le,
		paramUnderwater: r.int32le,
		paramSunset: r.int32le,
		paramOther: r.int32le,
		paramDeath: r.int32le
	}),
	LightFloatBand: Dbc({
		id: r.int32le,
		num: r.int32le,
		...ArrayField('time', r.int32le, 16),
		...ArrayField('data', r.floatle, 16)
	}),
	LightIntBand: Dbc({
		id: r.int32le,
		num: r.int32le,
		...ArrayField('time', r.int32le, 16),
		...ArrayField('data', r.int32le, 16)
	}),
	LightParams: Dbc({
		id: r.int32le,
		highlightSky: r.int32le,
		lightSkyboxId: r.int32le,
		glow: r.floatle,
		waterShallowAlpha: r.floatle,
		waterDeepAlpha: r.floatle,
		oceanShallowAlpha: r.floatle,
		oceanDeepAlpha: r.floatle,
		flags: r.int32le
	}),
	LightSkybox: Dbc({
		id: r.int32le,
		name: new StringRef()
	}),
	LiquidType: Dbc({
		id: r.int32le,
		name: new StringRef(),
		type: r.int32le,
		spellId: r.int32le
	}),
	LoadingScreens: Dbc({
		id: r.int32le,
		name: new StringRef(),
		fileName: new StringRef()
	}),
	LoadingScreenTaxiSplines: Dbc({
		id: r.int32le,
		pathId: r.int32le,
		...ArrayField('locX', r.floatle, 8),
		...ArrayField('locY', r.floatle, 8),
		legIndex: r.int32le
	}),
	Lock: Dbc({
		id: r.int32le,
		...ArrayField('type', r.int32le, 8),
		...ArrayField('index', r.int32le, 8),
		...ArrayField('skill', r.int32le, 8),
		...ArrayField('action', r.int32le, 8)
	}),
	LockType: Dbc({
		id: r.int32le,
		...LocalizedStringRef('name'),
		...LocalizedStringRef('resource'),
		...LocalizedStringRef('verb'),
		cursorName: new StringRef()
	}),
	MailTemplate: Dbc({
		id: r.int32le,
		...LocalizedStringRef('body')
	}),
	Map: Dbc({
		id: r.int32le,
		directory: new StringRef(),
		instanceType: r.int32le,
		isPvP: r.int32le,
		...LocalizedStringRef('name'),
		levelMin: r.int32le,
		levelMax: r.int32le,
		maxPlayers: r.int32le,
		...ArrayField('unknown', r.int32le, 3),
		areaTableId: r.int32le,
		...LocalizedStringRef('description'),
		...LocalizedStringRef('description2'),
		loadingScreenId: r.int32le,
		raidOffset: r.int32le,
		...ArrayField('unknown_', r.int32le, 2)
	}),
	NameGen: Dbc({
		id: r.int32le,
		name: new StringRef(),
		raceId: r.int32le,
		sexId: r.int32le
	}),
	NamesProfanity: Dbc({
		id: r.int32le,
		name: new StringRef()
	}),
	NamesReserved: Dbc({
		id: r.int32le,
		name: new StringRef()
	}),
	NPCSounds: Dbc({
		id: r.int32le,
		helloId: r.int32le,
		goodbyeId: r.int32le,
		annoyedId: r.int32le,
		ackId: r.int32le
	}),
	PageTextMaterial: Dbc({
		id: r.int32le,
		name: new StringRef()
	}),
	PaperDollItemFrame: Dbc({
		id: r.int32le,
		sortIcon: new StringRef(),
		slotNumber: r.int32le
	}),
	PetLoyalty: Dbc({
		id: r.int32le,
		...LocalizedStringRef('name')
	}),
	PetPersonality: Dbc({
		id: r.int32le,
		...LocalizedStringRef('name'),
		...ArrayField('happinessThreshold', r.int32le, 3),
		...ArrayField('happinessDamage', r.floatle, 3),
		...ArrayField('damageModifier', r.int32le, 3)
	}),
	QuestInfo: Dbc({
		id: r.int32le,
		...LocalizedStringRef('name')
	}),
	QuestSort: Dbc({
		id: r.int32le,
		...LocalizedStringRef('name')
	}),
	Resistances: Dbc({
		id: r.int32le,
		flags: r.int32le,
		fizzleSoundId: r.int32le,
		...LocalizedStringRef('name')
	}),
	ServerMessages: Dbc({
		id: r.int32le,
		...LocalizedStringRef('text')
	}),
	SkillLine: Dbc({
		id: r.int32le,
		categoryId: r.int32le,
		skillCostsId: r.int32le,
		...LocalizedStringRef('name'),
		...LocalizedStringRef('description'),
		spellIconId: r.int32le
	}),
	SkillLineAbility: Dbc({
		id: r.int32le,
		skillLine: r.int32le,
		spell: r.int32le,
		raceMask: r.int32le,
		classMask: r.int32le,
		excludeRace: r.int32le,
		excludeClass: r.int32le,
		minSkillLikeRank: r.int32le,
		supersededBySpellId: r.int32le,
		acquireMethod: r.int32le,
		trivialSkillLineRankHigh: r.int32le,
		trivialSkillLineRankLow: r.int32le,
		...ArrayField('charcterPoints', r.int32le, 2),
		numSkillUps: r.int32le
	}),
	SkillLineCategory: Dbc({
		id: r.int32le,
		...LocalizedStringRef('name'),
		sortIndex: r.int32le
	}),
	SkillRaceClassInfo: Dbc({
		id: r.int32le,
		skillId: r.int32le,
		raceMask: r.int32le,
		classMask: r.int32le,
		flags: r.int32le,
		minLevel: r.int32le,
		skillTierId: r.int32le,
		skillCostIndex: r.int32le
	}),
	SkillTiers: Dbc({
		id: r.int32le,
		...ArrayField('cost', r.int32le, 16),
		...ArrayField('value', r.int32le, 16)
	}),
	SoundAmbience: Dbc({
		id: r.int32le,
		...ArrayField('ambienceId', r.int32le, 2)
	}),
	SoundEntries: Dbc({
		id: r.int32le,
		soundType: r.int32le,
		name: new StringRef(),
		...ArrayField('file', new StringRef(), 10),
		...ArrayField('freq', r.int32le, 10),
		directoryBase: new StringRef(),
		volume: r.floatle,
		flags: r.int32le,
		distanceMin: r.floatle,
		distanceCutoff: r.floatle,
		soundEntriesAdvancedId: r.int32le
	}),
	SoundProviderPreferences: Dbc({
		id: r.int32le,
		description: new StringRef(),
		flags: r.int32le,
		EAXEnvironmentSelection: r.int32le,
		EAXDecayTime: r.floatle,
		EAX2EnvironmentSize: r.floatle,
		EAX2EnvironmentDiffusion: r.floatle,
		EAX2Room: r.int32le,
		EAX2RoomHF: r.int32le,
		EAX2DecayHFRatio: r.floatle,
		EAX2Reflections: r.int32le,
		EAX2ReflectionsDelay: r.floatle,
		EAX2Reverb: r.int32le,
		EAX2ReverbDelay: r.floatle,
		EAX2RoomRolloff: r.floatle,
		EAX2AirAbsorption: r.floatle,
		EAX3RoomLF: r.int32le,
		EAX3DecayLFRatio: r.floatle,
		EAX3EchoTime: r.floatle,
		EAX3EchoDepth: r.floatle,
		EAX3ModulationTime: r.floatle,
		EAX3ModulationDepth: r.floatle,
		EAX3HFReference: r.floatle,
		EAX3LFReference: r.floatle
	}),
	SoundWaterType: Dbc({
		id: r.int32le,
		liquidTypeId: r.int32le,
		fluidSpeed: r.int32le,
		soundId: r.int32le
	}),
	SpamMessages: Dbc({
		id: r.int32le,
		text: new StringRef()
	}),
	Spell: Dbc({
		id: r.int32le,
		school: r.int32le,
		category: r.int32le,
		castUi: r.int32le,
		dispelType: r.int32le,
		mechanic: r.int32le,
		...ArrayField('attribute', r.int32le, 5),
		shapeshiftMask: r.int32le,
		shapeshiftExclude: r.int32le,
		targets: r.int32le,
		targetCreatureType: r.int32le,
		requiresSpellFocus: r.int32le,
		casterAuraStat: r.int32le,
		targetAuraState: r.int32le,
		castingTimeIndex: r.int32le,
		recoveryTime: r.int32le,
		categoryRecoveryTime: r.int32le,
		interruptFlags: r.int32le,
		auraInterruptFlags: r.int32le,
		channelInterruptFlags: r.int32le,
		procTypeMask: r.int32le,
		procChance: r.int32le,
		procCharges: r.int32le,
		maxLevel: r.int32le,
		baseLevel: r.int32le,
		spellLevel: r.int32le,
		durationIndex: r.int32le,
		powerType: r.int32le,
		manaCost: r.int32le,
		manaPerLevel: r.int32le,
		manaPerSecond: r.int32le,
		manaPerSecondPerLevel: r.int32le,
		rangeIndex: r.int32le,
		speed: r.int32le,
		modalNextSpell: r.int32le,
		stackAmount: r.int32le,
		...ArrayField('totem', r.int32le, 2),
		...ArrayField('reagent', r.int32le, 8),
		...ArrayField('reagentCount', r.int32le, 8),
		equippedItemClass: r.int32le,
		equippedItemSubClassMask: r.int32le,
		equippedItemInventoryTypeMask: r.int32le,
		...ArrayField('effect', r.int32le, 3),
		...ArrayField('effectDieSides', r.int32le, 3),
		...ArrayField('effectBaseDice', r.int32le, 3),
		...ArrayField('effectDicePerLevel', r.int32le, 3),
		...ArrayField('effectRealPointsPerLevel', r.int32le, 3),
		...ArrayField('effectBasePoints', r.int32le, 3),
		...ArrayField('effectMechanic', r.int32le, 3),
		...ArrayField('effectImplicitTargetA', r.int32le, 3),
		...ArrayField('effectImplicitTargetB', r.int32le, 3),
		...ArrayField('effectRadiusIndex', r.int32le, 3),
		...ArrayField('effectApplyAura', r.int32le, 3),
		...ArrayField('effectAmplitude', r.int32le, 3),
		...ArrayField('effectMultipleValue', r.floatle, 3),
		...ArrayField('effectChainTarget', r.int32le, 3),
		...ArrayField('effectItemType', r.int32le, 3),
		...ArrayField('effectMiscValue', r.int32le, 3),
		...ArrayField('effectTriggerSpell', r.int32le, 3),
		...ArrayField('effectPointsPerCombo', r.floatle, 3),
		...ArrayField('spellVisualId', r.int32le, 2),
		spellIconId: r.int32le,
		activeIconId: r.int32le,
		spellPriority: r.int32le,
		...LocalizedStringRef('name'),
		...LocalizedStringRef('subtext'),
		...LocalizedStringRef('description'),
		...LocalizedStringRef('auraDescription'),
		manaCostPercentage: r.int32le,
		startRecoveryCategory: r.int32le,
		startRecoveryTime: r.int32le,
		maxTargetLevel: r.int32le,
		spellClassSet: r.int32le,
		...ArrayField('spellClassMask', r.int32le, 2),
		maxTargets: r.int32le,
		damageType: r.int32le,
		preventionType: r.int32le,
		stanceBarOrder: r.int32le,
		...ArrayField('damageMultiplier', r.floatle, 3),
		minFactionId: r.int32le,
		minReputation: r.int32le,
		requiredAuraVision: r.int32le
	}),
	SpellCastTimes: Dbc({
		id: r.int32le,
		base: r.int32le,
		perLevel: r.int32le,
		minimum: r.int32le
	}),
	SpellCategory: Dbc({
		id: r.int32le,
		flags: r.int32le
	}),
	SpellChainEffects: Dbc({
		id: r.int32le,
		averageSegmentLength: r.floatle,
		width: r.floatle,
		noiseScale: r.floatle,
		textureCoordScale: r.floatle,
		segmentDuration: r.int32le,
		segmentDelay: r.int32le,
		texture: new StringRef()
	}),
	SpellDispelType: Dbc({
		id: r.int32le,
		...LocalizedStringRef('name'),
		mask: r.int32le,
		immunityPossible: r.int32le
	}),
	SpellDuration: Dbc({
		id: r.int32le,
		duration: r.int32le,
		durationPerLevel: r.int32le,
		durationMax: r.int32le
	}),
	SpellEffectCameraShakes: Dbc({
		id: r.int32le,
		...ArrayField('cameraShake', r.int32le, 3)
	}),
	SpellFocusObject: Dbc({
		id: r.int32le,
		...LocalizedStringRef('name')
	}),
	SpellIcon: Dbc({
		id: r.int32le,
		texture: new StringRef()
	}),
	SpellItemEnchantment: Dbc({
		id: r.int32le,
		...ArrayField('effect', r.int32le, 3),
		...ArrayField('pointsMin', r.int32le, 3),
		...ArrayField('pointsMax', r.int32le, 3),
		...ArrayField('effectArg', r.int32le, 3),
		...LocalizedStringRef('name'),
		itemVisual: r.int32le,
		flags: r.int32le
	}),
	SpellMechanic: Dbc({
		id: r.int32le,
		...LocalizedStringRef('name')
	}),
	SpellRadius: Dbc({
		id: r.int32le,
		radius: r.floatle,
		radiusPerLevel: r.int32le,
		radiusMax: r.int32le
	}),
	SpellRange: Dbc({
		id: r.int32le,
		rangeMin: r.int32le,
		rangeMax: r.int32le,
		flags: r.int32le,
		...LocalizedStringRef('name'),
		...LocalizedStringRef('shortName')
	}),
	SpellShapeshiftForm: Dbc({
		id: r.int32le,
		bonusActionBar: r.int32le,
		...LocalizedStringRef('name'),
		flags: r.int32le,
		creatureType: r.int32le,
		combatRoundTime: r.int32le
	}),
	SpellVisual: Dbc({
		id: r.int32le,
		precastKit: r.int32le,
		castKit: r.int32le,
		impactKit: r.int32le,
		stateKit: r.int32le,
		stateDoneKit: r.int32le,
		channelKit: r.int32le,
		hasMissile: r.int32le,
		missileModel: r.int32le,
		missilePathType: r.int32le,
		missileDestinationAttachment: r.int32le,
		missileSound: r.int32le,
		animationEventSoundId: r.int32le,
		flags: r.int32le,
		casterImpactKit: r.int32le,
		targetImpactKit: r.int32le
	}),
	SpellVisualEffectName: Dbc({
		id: r.int32le,
		name: new StringRef(),
		fileName: new StringRef(),
		areaEffectSize: r.int32le,
		scale: r.floatle
	}),
	SpellVisualKit: Dbc({
		id: r.int32le,
		startAnimationId: r.int32le,
		animationId: r.int32le,
		animationKitId: r.int32le,
		headEffect: r.int32le,
		chestEffect: r.int32le,
		baseEffect: r.int32le,
		leftHandEffect: r.int32le,
		rightHandEffect: r.int32le,
		breathEffect: r.int32le,
		leftWeaponEffect: r.int32le,
		rightWeaponEffect: r.int32le,
		...ArrayField('specialEffect', r.int32le, 3),
		worldEffect: r.int32le,
		soundId: r.int32le,
		shakeId: r.int32le,
		...ArrayField('characterProc', r.int32le, 4),
		...ArrayField('paramZero', r.floatle, 4),
		...ArrayField('paramOne', r.floatle, 4),
		...ArrayField('paramTwo', r.floatle, 4),
		flags: r.int32le
	}),
	Startup_Strings: Dbc({
		id: r.int32le,
		name: new StringRef(),
		...LocalizedStringRef('string')
	}),
	Stationery: Dbc({
		id: r.int32le,
		itemId: r.int32le,
		texture: new StringRef(),
		flags: r.int32le
	}),
	Talent: Dbc({
		id: r.int32le,
		specId: r.int32le,
		tierId: r.int32le,
		columnIndex: r.int32le,
		...ArrayField('spellRank', r.int32le, 9),
		...ArrayField('prerequisiteTalent', r.int32le, 3),
		...ArrayField('prerequisiteRank', r.int32le, 3),
		flags: r.int32le,
		requiredSpellId: r.int32le
	}),
	TalentTab: Dbc({
		id: r.int32le,
		...LocalizedStringRef('name'),
		spellIconId: r.int32le,
		raceMask: r.int32le,
		classMask: r.int32le,
		orderIndex: r.int32le,
		background: new StringRef()
	}),
	TaxiNodes: Dbc({
		id: r.int32le,
		continentId: r.int32le,
		...Position,
		...LocalizedStringRef('name'),
		...ArrayField('mountCreatureId', r.int32le, 2)
	}),
	TaxiPath: Dbc({
		id: r.int32le,
		fromNode: r.int32le,
		toNode: r.int32le,
		cost: r.int32le
	}),
	TaxiPathNode: Dbc({
		id: r.int32le,
		pathId: r.int32le,
		nodeIndex: r.int32le,
		continentId: r.int32le,
		...Position,
		flags: r.int32le,
		delay: r.int32le
	}),
	TransportAnimation: Dbc({
		id: r.int32le,
		transportId: r.int32le,
		timeIndex: r.int32le,
		...Position,
		animationSequenceId: r.int32le
	}),
	VocalUISounds: Dbc({
		id: r.int32le,
		vocalUi: r.int32le,
		raceId: r.int32le,
		normalMaleSoundId: r.int32le,
		normalFemaleSoundId: r.int32le,
		drunkMaleSoundId: r.int32le,
		drunkFemaleSoundId: r.int32le
	}),
	WeaponImpactSounds: Dbc({
		id: r.int32le,
		weaponSubclassId: r.int32le,
		parrySoundType: new Enum(['WOOD', 'METAL']),
		...ArrayField('impactSoundId', r.int32le, 10),
		...ArrayField('critSoundId', r.int32le, 10)
	}),
	WMOAreaTable: Dbc({
		id: r.int32le,
		wmoId: r.int32le,
		nameSetId: r.int32le,
		wmoGroupId: r.int32le,
		soundProviderId: r.int32le,
		underwaterSoundProviderId: r.int32le,
		ambienceId: r.int32le,
		zoneMusicId: r.int32le,
		introSoundId: r.int32le,
		flags: r.int32le,
		areaTableId: r.int32le,
		...LocalizedStringRef('name')
	}),
	WorldMapArea: Dbc({
		id: r.int32le,
		continentId: r.int32le,
		areaId: r.int32le,
		name: new StringRef(),
		locLeft: r.floatle,
		locRight: r.floatle,
		locTop: r.floatle,
		locBottom: r.floatle
	}),
	WorldMapContinent: Dbc({
		id: r.int32le,
		continentId: r.int32le,
		left: r.int32le,
		right: r.int32le,
		top: r.int32le,
		bottom: r.int32le,
		offsetX: r.floatle,
		offsetY: r.floatle,
		scale: r.floatle,
		taxiMinX: r.int32le,
		taxiMinY: r.int32le,
		taxiMaxX: r.int32le,
		taxiMaxY: r.int32le
	}),
	WorldMapOverlay: Dbc({
		id: r.int32le,
		worldMapAreaId: r.int32le,
		...ArrayField('areaId', r.int32le, 4),
		mapPointX: r.int32le,
		mapPointY: r.int32le,
		texture: new StringRef(),
		textureWidth: r.int32le,
		textureHeight: r.int32le,
		offsetX: r.int32le,
		offsetY: r.int32le,
		hitRectTop: r.int32le,
		hitRectLeft: r.int32le,
		hitRectBottom: r.int32le,
		hitRectRight: r.int32le
	}),
	WorldSafeLocs: Dbc({
		id: r.int32le,
		continentId: r.int32le,
		...Position,
		...LocalizedStringRef('name')
	}),
	WorldStateUI: Dbc({
		id: r.int32le,
		mapId: r.int32le,
		areaId: r.int32le,
		icon: new StringRef(),
		...LocalizedStringRef('text'),
		...LocalizedStringRef('tooltip'),
		state: r.int32le,
		stateVariable: r.int32le,
		type: r.int32le,
		dynamicIcon: new StringRef(),
		...LocalizedStringRef('dynamicTooltip'),
		extendedUi: new StringRef(),
		...ArrayField('extendedUiVariable', r.int32le, 3)
	}),
	WowError_Strings: Dbc({
		id: r.int32le,
		errorName: new StringRef(),
		...LocalizedStringRef('errorText')
	}),
	ZoneIntroMusicTable: Dbc({
		id: r.int32le,
		name: new StringRef(),
		soundId: r.int32le,
		priority: r.int32le,
		minDelayMinutes: r.int32le
	}),
	ZoneMusic: Dbc({
		id: r.int32le,
		name: new StringRef(),
		silenceIntervalMinDay: r.int32le,
		silenceIntervalMaxDay: r.int32le,
		silenceIntervalMinNight: r.int32le,
		silenceIntervalMaxNight: r.int32le,
		soundsDay: r.int32le,
		soundsNight: r.int32le
	})
};
export default Entities;

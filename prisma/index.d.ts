
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Continent
 * 
 */
export type Continent = {
  id: number
  name: string
}

/**
 * Model AreaPOI
 * 
 */
export type AreaPOI = {
  id: number
  importance: number
  icon: number
  factionId: number
  x: number
  y: number
  z: number
  continentId: number
  flags: number
  areaId: number
  name_enUS: string
  name_enGB: string
  name_koKR: string
  name_frFR: string
  name_deDE: string
  name_enCN: string
  name_zhCN: string
  name_enTW: string
  nameMask: number
  description_enUS: string
  description_enGB: string
  description_koKR: string
  description_frFR: string
  description_deDE: string
  description_enCN: string
  description_zhCN: string
  description_enTW: string
  descriptionMask: number
  worldStateId: number
}

/**
 * Model AreaTable
 * 
 */
export type AreaTable = {
  id: number
  continentId: number
  parentAreaId: number
  areaBit: number
  flags: number
  soundPreferenceId: number
  underwaterSoundPreferenceId: number
  soundAmbienceId: number
  zoneMusicId: number
  zoneIntroMusicId: number
  explorationLevel: number
  name_enUS: string
  name_enGB: string
  name_koKR: string
  name_frFR: string
  name_deDE: string
  name_enCN: string
  name_zhCN: string
  name_enTW: string
  nameMask: number
  factionGroupMask: number
  liquidTypeId: number
  minElevation: number
  ambientMultiplier: number
  lightId: number
}

/**
 * Model AreaTrigger
 * 
 */
export type AreaTrigger = {
  id: number
  continentId: number
  x: number
  y: number
  z: number
  radius: number
  boxLength: number
  boxWidth: number
  boxHeight: number
  boxYaw: number
}

/**
 * Model CreatureDisplayInfoExtra
 * 
 */
export type CreatureDisplayInfoExtra = {
  id: number
  displayRaceId: number
  displaySexId: number
  skinId: number
  faceId: number
  hairStyleId: number
  hairColorId: number
  facialHairId: number
  itemDisplayId_1: number
  itemDisplayId_2: number
  itemDisplayId_3: number
  itemDisplayId_4: number
  itemDisplayId_5: number
  itemDisplayId_6: number
  itemDisplayId_7: number
  itemDisplayId_8: number
  itemDisplayId_9: number
  itemDisplayId_10: number
  bakeName: string
}

/**
 * Model Light
 * 
 */
export type Light = {
  id: number
  continentId: number
  x: number
  y: number
  z: number
  falloffStart: number
  falloffEnd: number
  paramStandardId: number
  paramUnderwaterId: number
  paramSunsetId: number
  paramOtherId: number
  paramDeathId: number
}

/**
 * Model LightParams
 * 
 */
export type LightParams = {
  id: number
  highlightSky: number
  lightSkyboxId: number
  glow: number
  waterShallowAlpha: number
  waterDeepAlpha: number
  oceanShallowAlpha: number
  oceanDeepAlpha: number
  flags: number
}

/**
 * Model LightSkybox
 * 
 */
export type LightSkybox = {
  id: number
  name: string
}

/**
 * Model WMOAreaTable
 * 
 */
export type WMOAreaTable = {
  id: number
  wmoId: number
  nameSetId: number
  wmoGroupId: number
  soundProviderId: number
  underwaterSoundProviderId: number
  ambienceId: number
  zoneMusicId: number
  introSoundId: number
  flags: number
  areaTableId: number
  name_enUS: string
  name_enGB: string
  name_koKR: string
  name_frFR: string
  name_deDE: string
  name_enCN: string
  name_zhCN: string
  name_enTW: string
  nameMask: number
}

/**
 * Model WorldMapArea
 * 
 */
export type WorldMapArea = {
  id: number
  continentId: number
  areaId: number
  name: string
  locLeft: number
  locRight: number
  locTop: number
  locBottom: number
}

/**
 * Model WorldMapContinent
 * 
 */
export type WorldMapContinent = {
  id: number
  continentId: number
  left: number
  right: number
  top: number
  bottom: number
  offsetX: number
  offsetY: number
  scale: number
  taxiMinX: number
  taxiMinY: number
  taxiMaxX: number
  taxiMaxY: number
}

/**
 * Model WorldMapOverlay
 * 
 */
export type WorldMapOverlay = {
  id: number
  worldMapAreaId: number
  areaId_1: number
  areaId_2: number
  areaId_3: number
  areaId_4: number
  mapPointX: number
  mapPointY: number
  texture: string
  textureWidth: number
  textureHeight: number
  offsetX: number
  offsetY: number
  hitRectTop: number
  hitRectLeft: number
  hitRectBottom: number
  hitRectRight: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Continents
 * const continents = await prisma.continent.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Continents
   * const continents = await prisma.continent.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.continent`: Exposes CRUD operations for the **Continent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Continents
    * const continents = await prisma.continent.findMany()
    * ```
    */
  get continent(): Prisma.ContinentDelegate<GlobalReject>;

  /**
   * `prisma.areaPOI`: Exposes CRUD operations for the **AreaPOI** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AreaPOIS
    * const areaPOIS = await prisma.areaPOI.findMany()
    * ```
    */
  get areaPOI(): Prisma.AreaPOIDelegate<GlobalReject>;

  /**
   * `prisma.areaTable`: Exposes CRUD operations for the **AreaTable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AreaTables
    * const areaTables = await prisma.areaTable.findMany()
    * ```
    */
  get areaTable(): Prisma.AreaTableDelegate<GlobalReject>;

  /**
   * `prisma.areaTrigger`: Exposes CRUD operations for the **AreaTrigger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AreaTriggers
    * const areaTriggers = await prisma.areaTrigger.findMany()
    * ```
    */
  get areaTrigger(): Prisma.AreaTriggerDelegate<GlobalReject>;

  /**
   * `prisma.creatureDisplayInfoExtra`: Exposes CRUD operations for the **CreatureDisplayInfoExtra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreatureDisplayInfoExtras
    * const creatureDisplayInfoExtras = await prisma.creatureDisplayInfoExtra.findMany()
    * ```
    */
  get creatureDisplayInfoExtra(): Prisma.CreatureDisplayInfoExtraDelegate<GlobalReject>;

  /**
   * `prisma.light`: Exposes CRUD operations for the **Light** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lights
    * const lights = await prisma.light.findMany()
    * ```
    */
  get light(): Prisma.LightDelegate<GlobalReject>;

  /**
   * `prisma.lightParams`: Exposes CRUD operations for the **LightParams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LightParams
    * const lightParams = await prisma.lightParams.findMany()
    * ```
    */
  get lightParams(): Prisma.LightParamsDelegate<GlobalReject>;

  /**
   * `prisma.lightSkybox`: Exposes CRUD operations for the **LightSkybox** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LightSkyboxes
    * const lightSkyboxes = await prisma.lightSkybox.findMany()
    * ```
    */
  get lightSkybox(): Prisma.LightSkyboxDelegate<GlobalReject>;

  /**
   * `prisma.wMOAreaTable`: Exposes CRUD operations for the **WMOAreaTable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WMOAreaTables
    * const wMOAreaTables = await prisma.wMOAreaTable.findMany()
    * ```
    */
  get wMOAreaTable(): Prisma.WMOAreaTableDelegate<GlobalReject>;

  /**
   * `prisma.worldMapArea`: Exposes CRUD operations for the **WorldMapArea** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorldMapAreas
    * const worldMapAreas = await prisma.worldMapArea.findMany()
    * ```
    */
  get worldMapArea(): Prisma.WorldMapAreaDelegate<GlobalReject>;

  /**
   * `prisma.worldMapContinent`: Exposes CRUD operations for the **WorldMapContinent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorldMapContinents
    * const worldMapContinents = await prisma.worldMapContinent.findMany()
    * ```
    */
  get worldMapContinent(): Prisma.WorldMapContinentDelegate<GlobalReject>;

  /**
   * `prisma.worldMapOverlay`: Exposes CRUD operations for the **WorldMapOverlay** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorldMapOverlays
    * const worldMapOverlays = await prisma.worldMapOverlay.findMany()
    * ```
    */
  get worldMapOverlay(): Prisma.WorldMapOverlayDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.10.1
   * Query Engine version: aead147aa326ccb985dcfed5b065b4fdabd44b19
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Continent: 'Continent',
    AreaPOI: 'AreaPOI',
    AreaTable: 'AreaTable',
    AreaTrigger: 'AreaTrigger',
    CreatureDisplayInfoExtra: 'CreatureDisplayInfoExtra',
    Light: 'Light',
    LightParams: 'LightParams',
    LightSkybox: 'LightSkybox',
    WMOAreaTable: 'WMOAreaTable',
    WorldMapArea: 'WorldMapArea',
    WorldMapContinent: 'WorldMapContinent',
    WorldMapOverlay: 'WorldMapOverlay'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ContinentCountOutputType
   */


  export type ContinentCountOutputType = {
    AreaPOI: number
    AreaTable: number
    WorldMapArea: number
    WorldMapContinent: number
    AreaTrigger: number
    Light: number
  }

  export type ContinentCountOutputTypeSelect = {
    AreaPOI?: boolean
    AreaTable?: boolean
    WorldMapArea?: boolean
    WorldMapContinent?: boolean
    AreaTrigger?: boolean
    Light?: boolean
  }

  export type ContinentCountOutputTypeGetPayload<S extends boolean | null | undefined | ContinentCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ContinentCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ContinentCountOutputTypeArgs)
    ? ContinentCountOutputType 
    : S extends { select: any } & (ContinentCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ContinentCountOutputType ? ContinentCountOutputType[P] : never
  } 
      : ContinentCountOutputType




  // Custom InputTypes

  /**
   * ContinentCountOutputType without action
   */
  export type ContinentCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ContinentCountOutputType
     */
    select?: ContinentCountOutputTypeSelect | null
  }



  /**
   * Count Type AreaTableCountOutputType
   */


  export type AreaTableCountOutputType = {
    ChildAreas: number
    AreaPOI: number
    WMOAreaTable: number
    WorldMapArea: number
    WorldMapOverlay1: number
    WorldMapOverlay2: number
    WorldMapOverlay3: number
    WorldMapOverlay4: number
  }

  export type AreaTableCountOutputTypeSelect = {
    ChildAreas?: boolean
    AreaPOI?: boolean
    WMOAreaTable?: boolean
    WorldMapArea?: boolean
    WorldMapOverlay1?: boolean
    WorldMapOverlay2?: boolean
    WorldMapOverlay3?: boolean
    WorldMapOverlay4?: boolean
  }

  export type AreaTableCountOutputTypeGetPayload<S extends boolean | null | undefined | AreaTableCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AreaTableCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (AreaTableCountOutputTypeArgs)
    ? AreaTableCountOutputType 
    : S extends { select: any } & (AreaTableCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof AreaTableCountOutputType ? AreaTableCountOutputType[P] : never
  } 
      : AreaTableCountOutputType




  // Custom InputTypes

  /**
   * AreaTableCountOutputType without action
   */
  export type AreaTableCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AreaTableCountOutputType
     */
    select?: AreaTableCountOutputTypeSelect | null
  }



  /**
   * Count Type LightCountOutputType
   */


  export type LightCountOutputType = {
    AreaTable: number
  }

  export type LightCountOutputTypeSelect = {
    AreaTable?: boolean
  }

  export type LightCountOutputTypeGetPayload<S extends boolean | null | undefined | LightCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? LightCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (LightCountOutputTypeArgs)
    ? LightCountOutputType 
    : S extends { select: any } & (LightCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof LightCountOutputType ? LightCountOutputType[P] : never
  } 
      : LightCountOutputType




  // Custom InputTypes

  /**
   * LightCountOutputType without action
   */
  export type LightCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the LightCountOutputType
     */
    select?: LightCountOutputTypeSelect | null
  }



  /**
   * Count Type LightParamsCountOutputType
   */


  export type LightParamsCountOutputType = {
    standatrdLight: number
    underwaterLight: number
    sunsetLight: number
    otherLight: number
    deathLight: number
  }

  export type LightParamsCountOutputTypeSelect = {
    standatrdLight?: boolean
    underwaterLight?: boolean
    sunsetLight?: boolean
    otherLight?: boolean
    deathLight?: boolean
  }

  export type LightParamsCountOutputTypeGetPayload<S extends boolean | null | undefined | LightParamsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? LightParamsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (LightParamsCountOutputTypeArgs)
    ? LightParamsCountOutputType 
    : S extends { select: any } & (LightParamsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof LightParamsCountOutputType ? LightParamsCountOutputType[P] : never
  } 
      : LightParamsCountOutputType




  // Custom InputTypes

  /**
   * LightParamsCountOutputType without action
   */
  export type LightParamsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the LightParamsCountOutputType
     */
    select?: LightParamsCountOutputTypeSelect | null
  }



  /**
   * Count Type LightSkyboxCountOutputType
   */


  export type LightSkyboxCountOutputType = {
    LightParams: number
  }

  export type LightSkyboxCountOutputTypeSelect = {
    LightParams?: boolean
  }

  export type LightSkyboxCountOutputTypeGetPayload<S extends boolean | null | undefined | LightSkyboxCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? LightSkyboxCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (LightSkyboxCountOutputTypeArgs)
    ? LightSkyboxCountOutputType 
    : S extends { select: any } & (LightSkyboxCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof LightSkyboxCountOutputType ? LightSkyboxCountOutputType[P] : never
  } 
      : LightSkyboxCountOutputType




  // Custom InputTypes

  /**
   * LightSkyboxCountOutputType without action
   */
  export type LightSkyboxCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the LightSkyboxCountOutputType
     */
    select?: LightSkyboxCountOutputTypeSelect | null
  }



  /**
   * Count Type WorldMapAreaCountOutputType
   */


  export type WorldMapAreaCountOutputType = {
    WorldMapOverlay: number
  }

  export type WorldMapAreaCountOutputTypeSelect = {
    WorldMapOverlay?: boolean
  }

  export type WorldMapAreaCountOutputTypeGetPayload<S extends boolean | null | undefined | WorldMapAreaCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? WorldMapAreaCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (WorldMapAreaCountOutputTypeArgs)
    ? WorldMapAreaCountOutputType 
    : S extends { select: any } & (WorldMapAreaCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof WorldMapAreaCountOutputType ? WorldMapAreaCountOutputType[P] : never
  } 
      : WorldMapAreaCountOutputType




  // Custom InputTypes

  /**
   * WorldMapAreaCountOutputType without action
   */
  export type WorldMapAreaCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the WorldMapAreaCountOutputType
     */
    select?: WorldMapAreaCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Continent
   */


  export type AggregateContinent = {
    _count: ContinentCountAggregateOutputType | null
    _avg: ContinentAvgAggregateOutputType | null
    _sum: ContinentSumAggregateOutputType | null
    _min: ContinentMinAggregateOutputType | null
    _max: ContinentMaxAggregateOutputType | null
  }

  export type ContinentAvgAggregateOutputType = {
    id: number | null
  }

  export type ContinentSumAggregateOutputType = {
    id: number | null
  }

  export type ContinentMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ContinentMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ContinentCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ContinentAvgAggregateInputType = {
    id?: true
  }

  export type ContinentSumAggregateInputType = {
    id?: true
  }

  export type ContinentMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ContinentMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ContinentCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ContinentAggregateArgs = {
    /**
     * Filter which Continent to aggregate.
     */
    where?: ContinentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Continents to fetch.
     */
    orderBy?: Enumerable<ContinentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContinentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Continents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Continents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Continents
    **/
    _count?: true | ContinentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContinentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContinentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContinentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContinentMaxAggregateInputType
  }

  export type GetContinentAggregateType<T extends ContinentAggregateArgs> = {
        [P in keyof T & keyof AggregateContinent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContinent[P]>
      : GetScalarType<T[P], AggregateContinent[P]>
  }




  export type ContinentGroupByArgs = {
    where?: ContinentWhereInput
    orderBy?: Enumerable<ContinentOrderByWithAggregationInput>
    by: ContinentScalarFieldEnum[]
    having?: ContinentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContinentCountAggregateInputType | true
    _avg?: ContinentAvgAggregateInputType
    _sum?: ContinentSumAggregateInputType
    _min?: ContinentMinAggregateInputType
    _max?: ContinentMaxAggregateInputType
  }


  export type ContinentGroupByOutputType = {
    id: number
    name: string
    _count: ContinentCountAggregateOutputType | null
    _avg: ContinentAvgAggregateOutputType | null
    _sum: ContinentSumAggregateOutputType | null
    _min: ContinentMinAggregateOutputType | null
    _max: ContinentMaxAggregateOutputType | null
  }

  type GetContinentGroupByPayload<T extends ContinentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ContinentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContinentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContinentGroupByOutputType[P]>
            : GetScalarType<T[P], ContinentGroupByOutputType[P]>
        }
      >
    >


  export type ContinentSelect = {
    id?: boolean
    name?: boolean
    AreaPOI?: boolean | Continent$AreaPOIArgs
    AreaTable?: boolean | Continent$AreaTableArgs
    WorldMapArea?: boolean | Continent$WorldMapAreaArgs
    WorldMapContinent?: boolean | Continent$WorldMapContinentArgs
    AreaTrigger?: boolean | Continent$AreaTriggerArgs
    Light?: boolean | Continent$LightArgs
    _count?: boolean | ContinentCountOutputTypeArgs
  }


  export type ContinentInclude = {
    AreaPOI?: boolean | Continent$AreaPOIArgs
    AreaTable?: boolean | Continent$AreaTableArgs
    WorldMapArea?: boolean | Continent$WorldMapAreaArgs
    WorldMapContinent?: boolean | Continent$WorldMapContinentArgs
    AreaTrigger?: boolean | Continent$AreaTriggerArgs
    Light?: boolean | Continent$LightArgs
    _count?: boolean | ContinentCountOutputTypeArgs
  }

  export type ContinentGetPayload<S extends boolean | null | undefined | ContinentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Continent :
    S extends undefined ? never :
    S extends { include: any } & (ContinentArgs | ContinentFindManyArgs)
    ? Continent  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'AreaPOI' ? Array < AreaPOIGetPayload<S['include'][P]>>  :
        P extends 'AreaTable' ? Array < AreaTableGetPayload<S['include'][P]>>  :
        P extends 'WorldMapArea' ? Array < WorldMapAreaGetPayload<S['include'][P]>>  :
        P extends 'WorldMapContinent' ? Array < WorldMapContinentGetPayload<S['include'][P]>>  :
        P extends 'AreaTrigger' ? Array < AreaTriggerGetPayload<S['include'][P]>>  :
        P extends 'Light' ? Array < LightGetPayload<S['include'][P]>>  :
        P extends '_count' ? ContinentCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ContinentArgs | ContinentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'AreaPOI' ? Array < AreaPOIGetPayload<S['select'][P]>>  :
        P extends 'AreaTable' ? Array < AreaTableGetPayload<S['select'][P]>>  :
        P extends 'WorldMapArea' ? Array < WorldMapAreaGetPayload<S['select'][P]>>  :
        P extends 'WorldMapContinent' ? Array < WorldMapContinentGetPayload<S['select'][P]>>  :
        P extends 'AreaTrigger' ? Array < AreaTriggerGetPayload<S['select'][P]>>  :
        P extends 'Light' ? Array < LightGetPayload<S['select'][P]>>  :
        P extends '_count' ? ContinentCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Continent ? Continent[P] : never
  } 
      : Continent


  type ContinentCountArgs = 
    Omit<ContinentFindManyArgs, 'select' | 'include'> & {
      select?: ContinentCountAggregateInputType | true
    }

  export interface ContinentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Continent that matches the filter.
     * @param {ContinentFindUniqueArgs} args - Arguments to find a Continent
     * @example
     * // Get one Continent
     * const continent = await prisma.continent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContinentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ContinentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Continent'> extends True ? Prisma__ContinentClient<ContinentGetPayload<T>> : Prisma__ContinentClient<ContinentGetPayload<T> | null, null>

    /**
     * Find one Continent that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ContinentFindUniqueOrThrowArgs} args - Arguments to find a Continent
     * @example
     * // Get one Continent
     * const continent = await prisma.continent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContinentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ContinentFindUniqueOrThrowArgs>
    ): Prisma__ContinentClient<ContinentGetPayload<T>>

    /**
     * Find the first Continent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContinentFindFirstArgs} args - Arguments to find a Continent
     * @example
     * // Get one Continent
     * const continent = await prisma.continent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContinentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ContinentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Continent'> extends True ? Prisma__ContinentClient<ContinentGetPayload<T>> : Prisma__ContinentClient<ContinentGetPayload<T> | null, null>

    /**
     * Find the first Continent that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContinentFindFirstOrThrowArgs} args - Arguments to find a Continent
     * @example
     * // Get one Continent
     * const continent = await prisma.continent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContinentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ContinentFindFirstOrThrowArgs>
    ): Prisma__ContinentClient<ContinentGetPayload<T>>

    /**
     * Find zero or more Continents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContinentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Continents
     * const continents = await prisma.continent.findMany()
     * 
     * // Get first 10 Continents
     * const continents = await prisma.continent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const continentWithIdOnly = await prisma.continent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContinentFindManyArgs>(
      args?: SelectSubset<T, ContinentFindManyArgs>
    ): Prisma.PrismaPromise<Array<ContinentGetPayload<T>>>

    /**
     * Create a Continent.
     * @param {ContinentCreateArgs} args - Arguments to create a Continent.
     * @example
     * // Create one Continent
     * const Continent = await prisma.continent.create({
     *   data: {
     *     // ... data to create a Continent
     *   }
     * })
     * 
    **/
    create<T extends ContinentCreateArgs>(
      args: SelectSubset<T, ContinentCreateArgs>
    ): Prisma__ContinentClient<ContinentGetPayload<T>>

    /**
     * Delete a Continent.
     * @param {ContinentDeleteArgs} args - Arguments to delete one Continent.
     * @example
     * // Delete one Continent
     * const Continent = await prisma.continent.delete({
     *   where: {
     *     // ... filter to delete one Continent
     *   }
     * })
     * 
    **/
    delete<T extends ContinentDeleteArgs>(
      args: SelectSubset<T, ContinentDeleteArgs>
    ): Prisma__ContinentClient<ContinentGetPayload<T>>

    /**
     * Update one Continent.
     * @param {ContinentUpdateArgs} args - Arguments to update one Continent.
     * @example
     * // Update one Continent
     * const continent = await prisma.continent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContinentUpdateArgs>(
      args: SelectSubset<T, ContinentUpdateArgs>
    ): Prisma__ContinentClient<ContinentGetPayload<T>>

    /**
     * Delete zero or more Continents.
     * @param {ContinentDeleteManyArgs} args - Arguments to filter Continents to delete.
     * @example
     * // Delete a few Continents
     * const { count } = await prisma.continent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContinentDeleteManyArgs>(
      args?: SelectSubset<T, ContinentDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Continents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContinentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Continents
     * const continent = await prisma.continent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContinentUpdateManyArgs>(
      args: SelectSubset<T, ContinentUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Continent.
     * @param {ContinentUpsertArgs} args - Arguments to update or create a Continent.
     * @example
     * // Update or create a Continent
     * const continent = await prisma.continent.upsert({
     *   create: {
     *     // ... data to create a Continent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Continent we want to update
     *   }
     * })
    **/
    upsert<T extends ContinentUpsertArgs>(
      args: SelectSubset<T, ContinentUpsertArgs>
    ): Prisma__ContinentClient<ContinentGetPayload<T>>

    /**
     * Count the number of Continents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContinentCountArgs} args - Arguments to filter Continents to count.
     * @example
     * // Count the number of Continents
     * const count = await prisma.continent.count({
     *   where: {
     *     // ... the filter for the Continents we want to count
     *   }
     * })
    **/
    count<T extends ContinentCountArgs>(
      args?: Subset<T, ContinentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContinentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Continent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContinentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContinentAggregateArgs>(args: Subset<T, ContinentAggregateArgs>): Prisma.PrismaPromise<GetContinentAggregateType<T>>

    /**
     * Group by Continent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContinentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContinentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContinentGroupByArgs['orderBy'] }
        : { orderBy?: ContinentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContinentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContinentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Continent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ContinentClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    AreaPOI<T extends Continent$AreaPOIArgs= {}>(args?: Subset<T, Continent$AreaPOIArgs>): Prisma.PrismaPromise<Array<AreaPOIGetPayload<T>>| Null>;

    AreaTable<T extends Continent$AreaTableArgs= {}>(args?: Subset<T, Continent$AreaTableArgs>): Prisma.PrismaPromise<Array<AreaTableGetPayload<T>>| Null>;

    WorldMapArea<T extends Continent$WorldMapAreaArgs= {}>(args?: Subset<T, Continent$WorldMapAreaArgs>): Prisma.PrismaPromise<Array<WorldMapAreaGetPayload<T>>| Null>;

    WorldMapContinent<T extends Continent$WorldMapContinentArgs= {}>(args?: Subset<T, Continent$WorldMapContinentArgs>): Prisma.PrismaPromise<Array<WorldMapContinentGetPayload<T>>| Null>;

    AreaTrigger<T extends Continent$AreaTriggerArgs= {}>(args?: Subset<T, Continent$AreaTriggerArgs>): Prisma.PrismaPromise<Array<AreaTriggerGetPayload<T>>| Null>;

    Light<T extends Continent$LightArgs= {}>(args?: Subset<T, Continent$LightArgs>): Prisma.PrismaPromise<Array<LightGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Continent base type for findUnique actions
   */
  export type ContinentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Continent
     */
    select?: ContinentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContinentInclude | null
    /**
     * Filter, which Continent to fetch.
     */
    where: ContinentWhereUniqueInput
  }

  /**
   * Continent findUnique
   */
  export interface ContinentFindUniqueArgs extends ContinentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Continent findUniqueOrThrow
   */
  export type ContinentFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Continent
     */
    select?: ContinentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContinentInclude | null
    /**
     * Filter, which Continent to fetch.
     */
    where: ContinentWhereUniqueInput
  }


  /**
   * Continent base type for findFirst actions
   */
  export type ContinentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Continent
     */
    select?: ContinentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContinentInclude | null
    /**
     * Filter, which Continent to fetch.
     */
    where?: ContinentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Continents to fetch.
     */
    orderBy?: Enumerable<ContinentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Continents.
     */
    cursor?: ContinentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Continents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Continents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Continents.
     */
    distinct?: Enumerable<ContinentScalarFieldEnum>
  }

  /**
   * Continent findFirst
   */
  export interface ContinentFindFirstArgs extends ContinentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Continent findFirstOrThrow
   */
  export type ContinentFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Continent
     */
    select?: ContinentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContinentInclude | null
    /**
     * Filter, which Continent to fetch.
     */
    where?: ContinentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Continents to fetch.
     */
    orderBy?: Enumerable<ContinentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Continents.
     */
    cursor?: ContinentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Continents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Continents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Continents.
     */
    distinct?: Enumerable<ContinentScalarFieldEnum>
  }


  /**
   * Continent findMany
   */
  export type ContinentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Continent
     */
    select?: ContinentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContinentInclude | null
    /**
     * Filter, which Continents to fetch.
     */
    where?: ContinentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Continents to fetch.
     */
    orderBy?: Enumerable<ContinentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Continents.
     */
    cursor?: ContinentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Continents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Continents.
     */
    skip?: number
    distinct?: Enumerable<ContinentScalarFieldEnum>
  }


  /**
   * Continent create
   */
  export type ContinentCreateArgs = {
    /**
     * Select specific fields to fetch from the Continent
     */
    select?: ContinentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContinentInclude | null
    /**
     * The data needed to create a Continent.
     */
    data: XOR<ContinentCreateInput, ContinentUncheckedCreateInput>
  }


  /**
   * Continent update
   */
  export type ContinentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Continent
     */
    select?: ContinentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContinentInclude | null
    /**
     * The data needed to update a Continent.
     */
    data: XOR<ContinentUpdateInput, ContinentUncheckedUpdateInput>
    /**
     * Choose, which Continent to update.
     */
    where: ContinentWhereUniqueInput
  }


  /**
   * Continent updateMany
   */
  export type ContinentUpdateManyArgs = {
    /**
     * The data used to update Continents.
     */
    data: XOR<ContinentUpdateManyMutationInput, ContinentUncheckedUpdateManyInput>
    /**
     * Filter which Continents to update
     */
    where?: ContinentWhereInput
  }


  /**
   * Continent upsert
   */
  export type ContinentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Continent
     */
    select?: ContinentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContinentInclude | null
    /**
     * The filter to search for the Continent to update in case it exists.
     */
    where: ContinentWhereUniqueInput
    /**
     * In case the Continent found by the `where` argument doesn't exist, create a new Continent with this data.
     */
    create: XOR<ContinentCreateInput, ContinentUncheckedCreateInput>
    /**
     * In case the Continent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContinentUpdateInput, ContinentUncheckedUpdateInput>
  }


  /**
   * Continent delete
   */
  export type ContinentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Continent
     */
    select?: ContinentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContinentInclude | null
    /**
     * Filter which Continent to delete.
     */
    where: ContinentWhereUniqueInput
  }


  /**
   * Continent deleteMany
   */
  export type ContinentDeleteManyArgs = {
    /**
     * Filter which Continents to delete
     */
    where?: ContinentWhereInput
  }


  /**
   * Continent.AreaPOI
   */
  export type Continent$AreaPOIArgs = {
    /**
     * Select specific fields to fetch from the AreaPOI
     */
    select?: AreaPOISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaPOIInclude | null
    where?: AreaPOIWhereInput
    orderBy?: Enumerable<AreaPOIOrderByWithRelationInput>
    cursor?: AreaPOIWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AreaPOIScalarFieldEnum>
  }


  /**
   * Continent.AreaTable
   */
  export type Continent$AreaTableArgs = {
    /**
     * Select specific fields to fetch from the AreaTable
     */
    select?: AreaTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaTableInclude | null
    where?: AreaTableWhereInput
    orderBy?: Enumerable<AreaTableOrderByWithRelationInput>
    cursor?: AreaTableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AreaTableScalarFieldEnum>
  }


  /**
   * Continent.WorldMapArea
   */
  export type Continent$WorldMapAreaArgs = {
    /**
     * Select specific fields to fetch from the WorldMapArea
     */
    select?: WorldMapAreaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapAreaInclude | null
    where?: WorldMapAreaWhereInput
    orderBy?: Enumerable<WorldMapAreaOrderByWithRelationInput>
    cursor?: WorldMapAreaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<WorldMapAreaScalarFieldEnum>
  }


  /**
   * Continent.WorldMapContinent
   */
  export type Continent$WorldMapContinentArgs = {
    /**
     * Select specific fields to fetch from the WorldMapContinent
     */
    select?: WorldMapContinentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapContinentInclude | null
    where?: WorldMapContinentWhereInput
    orderBy?: Enumerable<WorldMapContinentOrderByWithRelationInput>
    cursor?: WorldMapContinentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<WorldMapContinentScalarFieldEnum>
  }


  /**
   * Continent.AreaTrigger
   */
  export type Continent$AreaTriggerArgs = {
    /**
     * Select specific fields to fetch from the AreaTrigger
     */
    select?: AreaTriggerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaTriggerInclude | null
    where?: AreaTriggerWhereInput
    orderBy?: Enumerable<AreaTriggerOrderByWithRelationInput>
    cursor?: AreaTriggerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AreaTriggerScalarFieldEnum>
  }


  /**
   * Continent.Light
   */
  export type Continent$LightArgs = {
    /**
     * Select specific fields to fetch from the Light
     */
    select?: LightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightInclude | null
    where?: LightWhereInput
    orderBy?: Enumerable<LightOrderByWithRelationInput>
    cursor?: LightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<LightScalarFieldEnum>
  }


  /**
   * Continent without action
   */
  export type ContinentArgs = {
    /**
     * Select specific fields to fetch from the Continent
     */
    select?: ContinentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContinentInclude | null
  }



  /**
   * Model AreaPOI
   */


  export type AggregateAreaPOI = {
    _count: AreaPOICountAggregateOutputType | null
    _avg: AreaPOIAvgAggregateOutputType | null
    _sum: AreaPOISumAggregateOutputType | null
    _min: AreaPOIMinAggregateOutputType | null
    _max: AreaPOIMaxAggregateOutputType | null
  }

  export type AreaPOIAvgAggregateOutputType = {
    id: number | null
    importance: number | null
    icon: number | null
    factionId: number | null
    x: number | null
    y: number | null
    z: number | null
    continentId: number | null
    flags: number | null
    areaId: number | null
    nameMask: number | null
    descriptionMask: number | null
    worldStateId: number | null
  }

  export type AreaPOISumAggregateOutputType = {
    id: number | null
    importance: number | null
    icon: number | null
    factionId: number | null
    x: number | null
    y: number | null
    z: number | null
    continentId: number | null
    flags: number | null
    areaId: number | null
    nameMask: number | null
    descriptionMask: number | null
    worldStateId: number | null
  }

  export type AreaPOIMinAggregateOutputType = {
    id: number | null
    importance: number | null
    icon: number | null
    factionId: number | null
    x: number | null
    y: number | null
    z: number | null
    continentId: number | null
    flags: number | null
    areaId: number | null
    name_enUS: string | null
    name_enGB: string | null
    name_koKR: string | null
    name_frFR: string | null
    name_deDE: string | null
    name_enCN: string | null
    name_zhCN: string | null
    name_enTW: string | null
    nameMask: number | null
    description_enUS: string | null
    description_enGB: string | null
    description_koKR: string | null
    description_frFR: string | null
    description_deDE: string | null
    description_enCN: string | null
    description_zhCN: string | null
    description_enTW: string | null
    descriptionMask: number | null
    worldStateId: number | null
  }

  export type AreaPOIMaxAggregateOutputType = {
    id: number | null
    importance: number | null
    icon: number | null
    factionId: number | null
    x: number | null
    y: number | null
    z: number | null
    continentId: number | null
    flags: number | null
    areaId: number | null
    name_enUS: string | null
    name_enGB: string | null
    name_koKR: string | null
    name_frFR: string | null
    name_deDE: string | null
    name_enCN: string | null
    name_zhCN: string | null
    name_enTW: string | null
    nameMask: number | null
    description_enUS: string | null
    description_enGB: string | null
    description_koKR: string | null
    description_frFR: string | null
    description_deDE: string | null
    description_enCN: string | null
    description_zhCN: string | null
    description_enTW: string | null
    descriptionMask: number | null
    worldStateId: number | null
  }

  export type AreaPOICountAggregateOutputType = {
    id: number
    importance: number
    icon: number
    factionId: number
    x: number
    y: number
    z: number
    continentId: number
    flags: number
    areaId: number
    name_enUS: number
    name_enGB: number
    name_koKR: number
    name_frFR: number
    name_deDE: number
    name_enCN: number
    name_zhCN: number
    name_enTW: number
    nameMask: number
    description_enUS: number
    description_enGB: number
    description_koKR: number
    description_frFR: number
    description_deDE: number
    description_enCN: number
    description_zhCN: number
    description_enTW: number
    descriptionMask: number
    worldStateId: number
    _all: number
  }


  export type AreaPOIAvgAggregateInputType = {
    id?: true
    importance?: true
    icon?: true
    factionId?: true
    x?: true
    y?: true
    z?: true
    continentId?: true
    flags?: true
    areaId?: true
    nameMask?: true
    descriptionMask?: true
    worldStateId?: true
  }

  export type AreaPOISumAggregateInputType = {
    id?: true
    importance?: true
    icon?: true
    factionId?: true
    x?: true
    y?: true
    z?: true
    continentId?: true
    flags?: true
    areaId?: true
    nameMask?: true
    descriptionMask?: true
    worldStateId?: true
  }

  export type AreaPOIMinAggregateInputType = {
    id?: true
    importance?: true
    icon?: true
    factionId?: true
    x?: true
    y?: true
    z?: true
    continentId?: true
    flags?: true
    areaId?: true
    name_enUS?: true
    name_enGB?: true
    name_koKR?: true
    name_frFR?: true
    name_deDE?: true
    name_enCN?: true
    name_zhCN?: true
    name_enTW?: true
    nameMask?: true
    description_enUS?: true
    description_enGB?: true
    description_koKR?: true
    description_frFR?: true
    description_deDE?: true
    description_enCN?: true
    description_zhCN?: true
    description_enTW?: true
    descriptionMask?: true
    worldStateId?: true
  }

  export type AreaPOIMaxAggregateInputType = {
    id?: true
    importance?: true
    icon?: true
    factionId?: true
    x?: true
    y?: true
    z?: true
    continentId?: true
    flags?: true
    areaId?: true
    name_enUS?: true
    name_enGB?: true
    name_koKR?: true
    name_frFR?: true
    name_deDE?: true
    name_enCN?: true
    name_zhCN?: true
    name_enTW?: true
    nameMask?: true
    description_enUS?: true
    description_enGB?: true
    description_koKR?: true
    description_frFR?: true
    description_deDE?: true
    description_enCN?: true
    description_zhCN?: true
    description_enTW?: true
    descriptionMask?: true
    worldStateId?: true
  }

  export type AreaPOICountAggregateInputType = {
    id?: true
    importance?: true
    icon?: true
    factionId?: true
    x?: true
    y?: true
    z?: true
    continentId?: true
    flags?: true
    areaId?: true
    name_enUS?: true
    name_enGB?: true
    name_koKR?: true
    name_frFR?: true
    name_deDE?: true
    name_enCN?: true
    name_zhCN?: true
    name_enTW?: true
    nameMask?: true
    description_enUS?: true
    description_enGB?: true
    description_koKR?: true
    description_frFR?: true
    description_deDE?: true
    description_enCN?: true
    description_zhCN?: true
    description_enTW?: true
    descriptionMask?: true
    worldStateId?: true
    _all?: true
  }

  export type AreaPOIAggregateArgs = {
    /**
     * Filter which AreaPOI to aggregate.
     */
    where?: AreaPOIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AreaPOIS to fetch.
     */
    orderBy?: Enumerable<AreaPOIOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AreaPOIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AreaPOIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AreaPOIS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AreaPOIS
    **/
    _count?: true | AreaPOICountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AreaPOIAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AreaPOISumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AreaPOIMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AreaPOIMaxAggregateInputType
  }

  export type GetAreaPOIAggregateType<T extends AreaPOIAggregateArgs> = {
        [P in keyof T & keyof AggregateAreaPOI]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAreaPOI[P]>
      : GetScalarType<T[P], AggregateAreaPOI[P]>
  }




  export type AreaPOIGroupByArgs = {
    where?: AreaPOIWhereInput
    orderBy?: Enumerable<AreaPOIOrderByWithAggregationInput>
    by: AreaPOIScalarFieldEnum[]
    having?: AreaPOIScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AreaPOICountAggregateInputType | true
    _avg?: AreaPOIAvgAggregateInputType
    _sum?: AreaPOISumAggregateInputType
    _min?: AreaPOIMinAggregateInputType
    _max?: AreaPOIMaxAggregateInputType
  }


  export type AreaPOIGroupByOutputType = {
    id: number
    importance: number
    icon: number
    factionId: number
    x: number
    y: number
    z: number
    continentId: number
    flags: number
    areaId: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
    description_enUS: string
    description_enGB: string
    description_koKR: string
    description_frFR: string
    description_deDE: string
    description_enCN: string
    description_zhCN: string
    description_enTW: string
    descriptionMask: number
    worldStateId: number
    _count: AreaPOICountAggregateOutputType | null
    _avg: AreaPOIAvgAggregateOutputType | null
    _sum: AreaPOISumAggregateOutputType | null
    _min: AreaPOIMinAggregateOutputType | null
    _max: AreaPOIMaxAggregateOutputType | null
  }

  type GetAreaPOIGroupByPayload<T extends AreaPOIGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AreaPOIGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AreaPOIGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AreaPOIGroupByOutputType[P]>
            : GetScalarType<T[P], AreaPOIGroupByOutputType[P]>
        }
      >
    >


  export type AreaPOISelect = {
    id?: boolean
    importance?: boolean
    icon?: boolean
    factionId?: boolean
    x?: boolean
    y?: boolean
    z?: boolean
    continentId?: boolean
    continent?: boolean | ContinentArgs
    flags?: boolean
    areaId?: boolean
    area?: boolean | AreaTableArgs
    name_enUS?: boolean
    name_enGB?: boolean
    name_koKR?: boolean
    name_frFR?: boolean
    name_deDE?: boolean
    name_enCN?: boolean
    name_zhCN?: boolean
    name_enTW?: boolean
    nameMask?: boolean
    description_enUS?: boolean
    description_enGB?: boolean
    description_koKR?: boolean
    description_frFR?: boolean
    description_deDE?: boolean
    description_enCN?: boolean
    description_zhCN?: boolean
    description_enTW?: boolean
    descriptionMask?: boolean
    worldStateId?: boolean
  }


  export type AreaPOIInclude = {
    continent?: boolean | ContinentArgs
    area?: boolean | AreaTableArgs
  }

  export type AreaPOIGetPayload<S extends boolean | null | undefined | AreaPOIArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AreaPOI :
    S extends undefined ? never :
    S extends { include: any } & (AreaPOIArgs | AreaPOIFindManyArgs)
    ? AreaPOI  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'continent' ? ContinentGetPayload<S['include'][P]> :
        P extends 'area' ? AreaTableGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AreaPOIArgs | AreaPOIFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'continent' ? ContinentGetPayload<S['select'][P]> :
        P extends 'area' ? AreaTableGetPayload<S['select'][P]> :  P extends keyof AreaPOI ? AreaPOI[P] : never
  } 
      : AreaPOI


  type AreaPOICountArgs = 
    Omit<AreaPOIFindManyArgs, 'select' | 'include'> & {
      select?: AreaPOICountAggregateInputType | true
    }

  export interface AreaPOIDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one AreaPOI that matches the filter.
     * @param {AreaPOIFindUniqueArgs} args - Arguments to find a AreaPOI
     * @example
     * // Get one AreaPOI
     * const areaPOI = await prisma.areaPOI.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AreaPOIFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AreaPOIFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'AreaPOI'> extends True ? Prisma__AreaPOIClient<AreaPOIGetPayload<T>> : Prisma__AreaPOIClient<AreaPOIGetPayload<T> | null, null>

    /**
     * Find one AreaPOI that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AreaPOIFindUniqueOrThrowArgs} args - Arguments to find a AreaPOI
     * @example
     * // Get one AreaPOI
     * const areaPOI = await prisma.areaPOI.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AreaPOIFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AreaPOIFindUniqueOrThrowArgs>
    ): Prisma__AreaPOIClient<AreaPOIGetPayload<T>>

    /**
     * Find the first AreaPOI that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaPOIFindFirstArgs} args - Arguments to find a AreaPOI
     * @example
     * // Get one AreaPOI
     * const areaPOI = await prisma.areaPOI.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AreaPOIFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AreaPOIFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'AreaPOI'> extends True ? Prisma__AreaPOIClient<AreaPOIGetPayload<T>> : Prisma__AreaPOIClient<AreaPOIGetPayload<T> | null, null>

    /**
     * Find the first AreaPOI that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaPOIFindFirstOrThrowArgs} args - Arguments to find a AreaPOI
     * @example
     * // Get one AreaPOI
     * const areaPOI = await prisma.areaPOI.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AreaPOIFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AreaPOIFindFirstOrThrowArgs>
    ): Prisma__AreaPOIClient<AreaPOIGetPayload<T>>

    /**
     * Find zero or more AreaPOIS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaPOIFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AreaPOIS
     * const areaPOIS = await prisma.areaPOI.findMany()
     * 
     * // Get first 10 AreaPOIS
     * const areaPOIS = await prisma.areaPOI.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const areaPOIWithIdOnly = await prisma.areaPOI.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AreaPOIFindManyArgs>(
      args?: SelectSubset<T, AreaPOIFindManyArgs>
    ): Prisma.PrismaPromise<Array<AreaPOIGetPayload<T>>>

    /**
     * Create a AreaPOI.
     * @param {AreaPOICreateArgs} args - Arguments to create a AreaPOI.
     * @example
     * // Create one AreaPOI
     * const AreaPOI = await prisma.areaPOI.create({
     *   data: {
     *     // ... data to create a AreaPOI
     *   }
     * })
     * 
    **/
    create<T extends AreaPOICreateArgs>(
      args: SelectSubset<T, AreaPOICreateArgs>
    ): Prisma__AreaPOIClient<AreaPOIGetPayload<T>>

    /**
     * Delete a AreaPOI.
     * @param {AreaPOIDeleteArgs} args - Arguments to delete one AreaPOI.
     * @example
     * // Delete one AreaPOI
     * const AreaPOI = await prisma.areaPOI.delete({
     *   where: {
     *     // ... filter to delete one AreaPOI
     *   }
     * })
     * 
    **/
    delete<T extends AreaPOIDeleteArgs>(
      args: SelectSubset<T, AreaPOIDeleteArgs>
    ): Prisma__AreaPOIClient<AreaPOIGetPayload<T>>

    /**
     * Update one AreaPOI.
     * @param {AreaPOIUpdateArgs} args - Arguments to update one AreaPOI.
     * @example
     * // Update one AreaPOI
     * const areaPOI = await prisma.areaPOI.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AreaPOIUpdateArgs>(
      args: SelectSubset<T, AreaPOIUpdateArgs>
    ): Prisma__AreaPOIClient<AreaPOIGetPayload<T>>

    /**
     * Delete zero or more AreaPOIS.
     * @param {AreaPOIDeleteManyArgs} args - Arguments to filter AreaPOIS to delete.
     * @example
     * // Delete a few AreaPOIS
     * const { count } = await prisma.areaPOI.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AreaPOIDeleteManyArgs>(
      args?: SelectSubset<T, AreaPOIDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AreaPOIS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaPOIUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AreaPOIS
     * const areaPOI = await prisma.areaPOI.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AreaPOIUpdateManyArgs>(
      args: SelectSubset<T, AreaPOIUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AreaPOI.
     * @param {AreaPOIUpsertArgs} args - Arguments to update or create a AreaPOI.
     * @example
     * // Update or create a AreaPOI
     * const areaPOI = await prisma.areaPOI.upsert({
     *   create: {
     *     // ... data to create a AreaPOI
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AreaPOI we want to update
     *   }
     * })
    **/
    upsert<T extends AreaPOIUpsertArgs>(
      args: SelectSubset<T, AreaPOIUpsertArgs>
    ): Prisma__AreaPOIClient<AreaPOIGetPayload<T>>

    /**
     * Count the number of AreaPOIS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaPOICountArgs} args - Arguments to filter AreaPOIS to count.
     * @example
     * // Count the number of AreaPOIS
     * const count = await prisma.areaPOI.count({
     *   where: {
     *     // ... the filter for the AreaPOIS we want to count
     *   }
     * })
    **/
    count<T extends AreaPOICountArgs>(
      args?: Subset<T, AreaPOICountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AreaPOICountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AreaPOI.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaPOIAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AreaPOIAggregateArgs>(args: Subset<T, AreaPOIAggregateArgs>): Prisma.PrismaPromise<GetAreaPOIAggregateType<T>>

    /**
     * Group by AreaPOI.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaPOIGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AreaPOIGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AreaPOIGroupByArgs['orderBy'] }
        : { orderBy?: AreaPOIGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AreaPOIGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAreaPOIGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for AreaPOI.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AreaPOIClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    continent<T extends ContinentArgs= {}>(args?: Subset<T, ContinentArgs>): Prisma__ContinentClient<ContinentGetPayload<T> | Null>;

    area<T extends AreaTableArgs= {}>(args?: Subset<T, AreaTableArgs>): Prisma__AreaTableClient<AreaTableGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * AreaPOI base type for findUnique actions
   */
  export type AreaPOIFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the AreaPOI
     */
    select?: AreaPOISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaPOIInclude | null
    /**
     * Filter, which AreaPOI to fetch.
     */
    where: AreaPOIWhereUniqueInput
  }

  /**
   * AreaPOI findUnique
   */
  export interface AreaPOIFindUniqueArgs extends AreaPOIFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AreaPOI findUniqueOrThrow
   */
  export type AreaPOIFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the AreaPOI
     */
    select?: AreaPOISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaPOIInclude | null
    /**
     * Filter, which AreaPOI to fetch.
     */
    where: AreaPOIWhereUniqueInput
  }


  /**
   * AreaPOI base type for findFirst actions
   */
  export type AreaPOIFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the AreaPOI
     */
    select?: AreaPOISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaPOIInclude | null
    /**
     * Filter, which AreaPOI to fetch.
     */
    where?: AreaPOIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AreaPOIS to fetch.
     */
    orderBy?: Enumerable<AreaPOIOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AreaPOIS.
     */
    cursor?: AreaPOIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AreaPOIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AreaPOIS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AreaPOIS.
     */
    distinct?: Enumerable<AreaPOIScalarFieldEnum>
  }

  /**
   * AreaPOI findFirst
   */
  export interface AreaPOIFindFirstArgs extends AreaPOIFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AreaPOI findFirstOrThrow
   */
  export type AreaPOIFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the AreaPOI
     */
    select?: AreaPOISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaPOIInclude | null
    /**
     * Filter, which AreaPOI to fetch.
     */
    where?: AreaPOIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AreaPOIS to fetch.
     */
    orderBy?: Enumerable<AreaPOIOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AreaPOIS.
     */
    cursor?: AreaPOIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AreaPOIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AreaPOIS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AreaPOIS.
     */
    distinct?: Enumerable<AreaPOIScalarFieldEnum>
  }


  /**
   * AreaPOI findMany
   */
  export type AreaPOIFindManyArgs = {
    /**
     * Select specific fields to fetch from the AreaPOI
     */
    select?: AreaPOISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaPOIInclude | null
    /**
     * Filter, which AreaPOIS to fetch.
     */
    where?: AreaPOIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AreaPOIS to fetch.
     */
    orderBy?: Enumerable<AreaPOIOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AreaPOIS.
     */
    cursor?: AreaPOIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AreaPOIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AreaPOIS.
     */
    skip?: number
    distinct?: Enumerable<AreaPOIScalarFieldEnum>
  }


  /**
   * AreaPOI create
   */
  export type AreaPOICreateArgs = {
    /**
     * Select specific fields to fetch from the AreaPOI
     */
    select?: AreaPOISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaPOIInclude | null
    /**
     * The data needed to create a AreaPOI.
     */
    data: XOR<AreaPOICreateInput, AreaPOIUncheckedCreateInput>
  }


  /**
   * AreaPOI update
   */
  export type AreaPOIUpdateArgs = {
    /**
     * Select specific fields to fetch from the AreaPOI
     */
    select?: AreaPOISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaPOIInclude | null
    /**
     * The data needed to update a AreaPOI.
     */
    data: XOR<AreaPOIUpdateInput, AreaPOIUncheckedUpdateInput>
    /**
     * Choose, which AreaPOI to update.
     */
    where: AreaPOIWhereUniqueInput
  }


  /**
   * AreaPOI updateMany
   */
  export type AreaPOIUpdateManyArgs = {
    /**
     * The data used to update AreaPOIS.
     */
    data: XOR<AreaPOIUpdateManyMutationInput, AreaPOIUncheckedUpdateManyInput>
    /**
     * Filter which AreaPOIS to update
     */
    where?: AreaPOIWhereInput
  }


  /**
   * AreaPOI upsert
   */
  export type AreaPOIUpsertArgs = {
    /**
     * Select specific fields to fetch from the AreaPOI
     */
    select?: AreaPOISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaPOIInclude | null
    /**
     * The filter to search for the AreaPOI to update in case it exists.
     */
    where: AreaPOIWhereUniqueInput
    /**
     * In case the AreaPOI found by the `where` argument doesn't exist, create a new AreaPOI with this data.
     */
    create: XOR<AreaPOICreateInput, AreaPOIUncheckedCreateInput>
    /**
     * In case the AreaPOI was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AreaPOIUpdateInput, AreaPOIUncheckedUpdateInput>
  }


  /**
   * AreaPOI delete
   */
  export type AreaPOIDeleteArgs = {
    /**
     * Select specific fields to fetch from the AreaPOI
     */
    select?: AreaPOISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaPOIInclude | null
    /**
     * Filter which AreaPOI to delete.
     */
    where: AreaPOIWhereUniqueInput
  }


  /**
   * AreaPOI deleteMany
   */
  export type AreaPOIDeleteManyArgs = {
    /**
     * Filter which AreaPOIS to delete
     */
    where?: AreaPOIWhereInput
  }


  /**
   * AreaPOI without action
   */
  export type AreaPOIArgs = {
    /**
     * Select specific fields to fetch from the AreaPOI
     */
    select?: AreaPOISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaPOIInclude | null
  }



  /**
   * Model AreaTable
   */


  export type AggregateAreaTable = {
    _count: AreaTableCountAggregateOutputType | null
    _avg: AreaTableAvgAggregateOutputType | null
    _sum: AreaTableSumAggregateOutputType | null
    _min: AreaTableMinAggregateOutputType | null
    _max: AreaTableMaxAggregateOutputType | null
  }

  export type AreaTableAvgAggregateOutputType = {
    id: number | null
    continentId: number | null
    parentAreaId: number | null
    areaBit: number | null
    flags: number | null
    soundPreferenceId: number | null
    underwaterSoundPreferenceId: number | null
    soundAmbienceId: number | null
    zoneMusicId: number | null
    zoneIntroMusicId: number | null
    explorationLevel: number | null
    nameMask: number | null
    factionGroupMask: number | null
    liquidTypeId: number | null
    minElevation: number | null
    ambientMultiplier: number | null
    lightId: number | null
  }

  export type AreaTableSumAggregateOutputType = {
    id: number | null
    continentId: number | null
    parentAreaId: number | null
    areaBit: number | null
    flags: number | null
    soundPreferenceId: number | null
    underwaterSoundPreferenceId: number | null
    soundAmbienceId: number | null
    zoneMusicId: number | null
    zoneIntroMusicId: number | null
    explorationLevel: number | null
    nameMask: number | null
    factionGroupMask: number | null
    liquidTypeId: number | null
    minElevation: number | null
    ambientMultiplier: number | null
    lightId: number | null
  }

  export type AreaTableMinAggregateOutputType = {
    id: number | null
    continentId: number | null
    parentAreaId: number | null
    areaBit: number | null
    flags: number | null
    soundPreferenceId: number | null
    underwaterSoundPreferenceId: number | null
    soundAmbienceId: number | null
    zoneMusicId: number | null
    zoneIntroMusicId: number | null
    explorationLevel: number | null
    name_enUS: string | null
    name_enGB: string | null
    name_koKR: string | null
    name_frFR: string | null
    name_deDE: string | null
    name_enCN: string | null
    name_zhCN: string | null
    name_enTW: string | null
    nameMask: number | null
    factionGroupMask: number | null
    liquidTypeId: number | null
    minElevation: number | null
    ambientMultiplier: number | null
    lightId: number | null
  }

  export type AreaTableMaxAggregateOutputType = {
    id: number | null
    continentId: number | null
    parentAreaId: number | null
    areaBit: number | null
    flags: number | null
    soundPreferenceId: number | null
    underwaterSoundPreferenceId: number | null
    soundAmbienceId: number | null
    zoneMusicId: number | null
    zoneIntroMusicId: number | null
    explorationLevel: number | null
    name_enUS: string | null
    name_enGB: string | null
    name_koKR: string | null
    name_frFR: string | null
    name_deDE: string | null
    name_enCN: string | null
    name_zhCN: string | null
    name_enTW: string | null
    nameMask: number | null
    factionGroupMask: number | null
    liquidTypeId: number | null
    minElevation: number | null
    ambientMultiplier: number | null
    lightId: number | null
  }

  export type AreaTableCountAggregateOutputType = {
    id: number
    continentId: number
    parentAreaId: number
    areaBit: number
    flags: number
    soundPreferenceId: number
    underwaterSoundPreferenceId: number
    soundAmbienceId: number
    zoneMusicId: number
    zoneIntroMusicId: number
    explorationLevel: number
    name_enUS: number
    name_enGB: number
    name_koKR: number
    name_frFR: number
    name_deDE: number
    name_enCN: number
    name_zhCN: number
    name_enTW: number
    nameMask: number
    factionGroupMask: number
    liquidTypeId: number
    minElevation: number
    ambientMultiplier: number
    lightId: number
    _all: number
  }


  export type AreaTableAvgAggregateInputType = {
    id?: true
    continentId?: true
    parentAreaId?: true
    areaBit?: true
    flags?: true
    soundPreferenceId?: true
    underwaterSoundPreferenceId?: true
    soundAmbienceId?: true
    zoneMusicId?: true
    zoneIntroMusicId?: true
    explorationLevel?: true
    nameMask?: true
    factionGroupMask?: true
    liquidTypeId?: true
    minElevation?: true
    ambientMultiplier?: true
    lightId?: true
  }

  export type AreaTableSumAggregateInputType = {
    id?: true
    continentId?: true
    parentAreaId?: true
    areaBit?: true
    flags?: true
    soundPreferenceId?: true
    underwaterSoundPreferenceId?: true
    soundAmbienceId?: true
    zoneMusicId?: true
    zoneIntroMusicId?: true
    explorationLevel?: true
    nameMask?: true
    factionGroupMask?: true
    liquidTypeId?: true
    minElevation?: true
    ambientMultiplier?: true
    lightId?: true
  }

  export type AreaTableMinAggregateInputType = {
    id?: true
    continentId?: true
    parentAreaId?: true
    areaBit?: true
    flags?: true
    soundPreferenceId?: true
    underwaterSoundPreferenceId?: true
    soundAmbienceId?: true
    zoneMusicId?: true
    zoneIntroMusicId?: true
    explorationLevel?: true
    name_enUS?: true
    name_enGB?: true
    name_koKR?: true
    name_frFR?: true
    name_deDE?: true
    name_enCN?: true
    name_zhCN?: true
    name_enTW?: true
    nameMask?: true
    factionGroupMask?: true
    liquidTypeId?: true
    minElevation?: true
    ambientMultiplier?: true
    lightId?: true
  }

  export type AreaTableMaxAggregateInputType = {
    id?: true
    continentId?: true
    parentAreaId?: true
    areaBit?: true
    flags?: true
    soundPreferenceId?: true
    underwaterSoundPreferenceId?: true
    soundAmbienceId?: true
    zoneMusicId?: true
    zoneIntroMusicId?: true
    explorationLevel?: true
    name_enUS?: true
    name_enGB?: true
    name_koKR?: true
    name_frFR?: true
    name_deDE?: true
    name_enCN?: true
    name_zhCN?: true
    name_enTW?: true
    nameMask?: true
    factionGroupMask?: true
    liquidTypeId?: true
    minElevation?: true
    ambientMultiplier?: true
    lightId?: true
  }

  export type AreaTableCountAggregateInputType = {
    id?: true
    continentId?: true
    parentAreaId?: true
    areaBit?: true
    flags?: true
    soundPreferenceId?: true
    underwaterSoundPreferenceId?: true
    soundAmbienceId?: true
    zoneMusicId?: true
    zoneIntroMusicId?: true
    explorationLevel?: true
    name_enUS?: true
    name_enGB?: true
    name_koKR?: true
    name_frFR?: true
    name_deDE?: true
    name_enCN?: true
    name_zhCN?: true
    name_enTW?: true
    nameMask?: true
    factionGroupMask?: true
    liquidTypeId?: true
    minElevation?: true
    ambientMultiplier?: true
    lightId?: true
    _all?: true
  }

  export type AreaTableAggregateArgs = {
    /**
     * Filter which AreaTable to aggregate.
     */
    where?: AreaTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AreaTables to fetch.
     */
    orderBy?: Enumerable<AreaTableOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AreaTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AreaTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AreaTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AreaTables
    **/
    _count?: true | AreaTableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AreaTableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AreaTableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AreaTableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AreaTableMaxAggregateInputType
  }

  export type GetAreaTableAggregateType<T extends AreaTableAggregateArgs> = {
        [P in keyof T & keyof AggregateAreaTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAreaTable[P]>
      : GetScalarType<T[P], AggregateAreaTable[P]>
  }




  export type AreaTableGroupByArgs = {
    where?: AreaTableWhereInput
    orderBy?: Enumerable<AreaTableOrderByWithAggregationInput>
    by: AreaTableScalarFieldEnum[]
    having?: AreaTableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AreaTableCountAggregateInputType | true
    _avg?: AreaTableAvgAggregateInputType
    _sum?: AreaTableSumAggregateInputType
    _min?: AreaTableMinAggregateInputType
    _max?: AreaTableMaxAggregateInputType
  }


  export type AreaTableGroupByOutputType = {
    id: number
    continentId: number
    parentAreaId: number
    areaBit: number
    flags: number
    soundPreferenceId: number
    underwaterSoundPreferenceId: number
    soundAmbienceId: number
    zoneMusicId: number
    zoneIntroMusicId: number
    explorationLevel: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
    factionGroupMask: number
    liquidTypeId: number
    minElevation: number
    ambientMultiplier: number
    lightId: number
    _count: AreaTableCountAggregateOutputType | null
    _avg: AreaTableAvgAggregateOutputType | null
    _sum: AreaTableSumAggregateOutputType | null
    _min: AreaTableMinAggregateOutputType | null
    _max: AreaTableMaxAggregateOutputType | null
  }

  type GetAreaTableGroupByPayload<T extends AreaTableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AreaTableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AreaTableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AreaTableGroupByOutputType[P]>
            : GetScalarType<T[P], AreaTableGroupByOutputType[P]>
        }
      >
    >


  export type AreaTableSelect = {
    id?: boolean
    continentId?: boolean
    continent?: boolean | ContinentArgs
    parentAreaId?: boolean
    parentArea?: boolean | AreaTableArgs
    areaBit?: boolean
    flags?: boolean
    soundPreferenceId?: boolean
    underwaterSoundPreferenceId?: boolean
    soundAmbienceId?: boolean
    zoneMusicId?: boolean
    zoneIntroMusicId?: boolean
    explorationLevel?: boolean
    name_enUS?: boolean
    name_enGB?: boolean
    name_koKR?: boolean
    name_frFR?: boolean
    name_deDE?: boolean
    name_enCN?: boolean
    name_zhCN?: boolean
    name_enTW?: boolean
    nameMask?: boolean
    factionGroupMask?: boolean
    liquidTypeId?: boolean
    minElevation?: boolean
    ambientMultiplier?: boolean
    lightId?: boolean
    light?: boolean | LightArgs
    ChildAreas?: boolean | AreaTable$ChildAreasArgs
    AreaPOI?: boolean | AreaTable$AreaPOIArgs
    WMOAreaTable?: boolean | AreaTable$WMOAreaTableArgs
    WorldMapArea?: boolean | AreaTable$WorldMapAreaArgs
    WorldMapOverlay1?: boolean | AreaTable$WorldMapOverlay1Args
    WorldMapOverlay2?: boolean | AreaTable$WorldMapOverlay2Args
    WorldMapOverlay3?: boolean | AreaTable$WorldMapOverlay3Args
    WorldMapOverlay4?: boolean | AreaTable$WorldMapOverlay4Args
    _count?: boolean | AreaTableCountOutputTypeArgs
  }


  export type AreaTableInclude = {
    continent?: boolean | ContinentArgs
    parentArea?: boolean | AreaTableArgs
    light?: boolean | LightArgs
    ChildAreas?: boolean | AreaTable$ChildAreasArgs
    AreaPOI?: boolean | AreaTable$AreaPOIArgs
    WMOAreaTable?: boolean | AreaTable$WMOAreaTableArgs
    WorldMapArea?: boolean | AreaTable$WorldMapAreaArgs
    WorldMapOverlay1?: boolean | AreaTable$WorldMapOverlay1Args
    WorldMapOverlay2?: boolean | AreaTable$WorldMapOverlay2Args
    WorldMapOverlay3?: boolean | AreaTable$WorldMapOverlay3Args
    WorldMapOverlay4?: boolean | AreaTable$WorldMapOverlay4Args
    _count?: boolean | AreaTableCountOutputTypeArgs
  }

  export type AreaTableGetPayload<S extends boolean | null | undefined | AreaTableArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AreaTable :
    S extends undefined ? never :
    S extends { include: any } & (AreaTableArgs | AreaTableFindManyArgs)
    ? AreaTable  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'continent' ? ContinentGetPayload<S['include'][P]> :
        P extends 'parentArea' ? AreaTableGetPayload<S['include'][P]> :
        P extends 'light' ? LightGetPayload<S['include'][P]> :
        P extends 'ChildAreas' ? Array < AreaTableGetPayload<S['include'][P]>>  :
        P extends 'AreaPOI' ? Array < AreaPOIGetPayload<S['include'][P]>>  :
        P extends 'WMOAreaTable' ? Array < WMOAreaTableGetPayload<S['include'][P]>>  :
        P extends 'WorldMapArea' ? Array < WorldMapAreaGetPayload<S['include'][P]>>  :
        P extends 'WorldMapOverlay1' ? Array < WorldMapOverlayGetPayload<S['include'][P]>>  :
        P extends 'WorldMapOverlay2' ? Array < WorldMapOverlayGetPayload<S['include'][P]>>  :
        P extends 'WorldMapOverlay3' ? Array < WorldMapOverlayGetPayload<S['include'][P]>>  :
        P extends 'WorldMapOverlay4' ? Array < WorldMapOverlayGetPayload<S['include'][P]>>  :
        P extends '_count' ? AreaTableCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AreaTableArgs | AreaTableFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'continent' ? ContinentGetPayload<S['select'][P]> :
        P extends 'parentArea' ? AreaTableGetPayload<S['select'][P]> :
        P extends 'light' ? LightGetPayload<S['select'][P]> :
        P extends 'ChildAreas' ? Array < AreaTableGetPayload<S['select'][P]>>  :
        P extends 'AreaPOI' ? Array < AreaPOIGetPayload<S['select'][P]>>  :
        P extends 'WMOAreaTable' ? Array < WMOAreaTableGetPayload<S['select'][P]>>  :
        P extends 'WorldMapArea' ? Array < WorldMapAreaGetPayload<S['select'][P]>>  :
        P extends 'WorldMapOverlay1' ? Array < WorldMapOverlayGetPayload<S['select'][P]>>  :
        P extends 'WorldMapOverlay2' ? Array < WorldMapOverlayGetPayload<S['select'][P]>>  :
        P extends 'WorldMapOverlay3' ? Array < WorldMapOverlayGetPayload<S['select'][P]>>  :
        P extends 'WorldMapOverlay4' ? Array < WorldMapOverlayGetPayload<S['select'][P]>>  :
        P extends '_count' ? AreaTableCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof AreaTable ? AreaTable[P] : never
  } 
      : AreaTable


  type AreaTableCountArgs = 
    Omit<AreaTableFindManyArgs, 'select' | 'include'> & {
      select?: AreaTableCountAggregateInputType | true
    }

  export interface AreaTableDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one AreaTable that matches the filter.
     * @param {AreaTableFindUniqueArgs} args - Arguments to find a AreaTable
     * @example
     * // Get one AreaTable
     * const areaTable = await prisma.areaTable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AreaTableFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AreaTableFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'AreaTable'> extends True ? Prisma__AreaTableClient<AreaTableGetPayload<T>> : Prisma__AreaTableClient<AreaTableGetPayload<T> | null, null>

    /**
     * Find one AreaTable that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AreaTableFindUniqueOrThrowArgs} args - Arguments to find a AreaTable
     * @example
     * // Get one AreaTable
     * const areaTable = await prisma.areaTable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AreaTableFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AreaTableFindUniqueOrThrowArgs>
    ): Prisma__AreaTableClient<AreaTableGetPayload<T>>

    /**
     * Find the first AreaTable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaTableFindFirstArgs} args - Arguments to find a AreaTable
     * @example
     * // Get one AreaTable
     * const areaTable = await prisma.areaTable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AreaTableFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AreaTableFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'AreaTable'> extends True ? Prisma__AreaTableClient<AreaTableGetPayload<T>> : Prisma__AreaTableClient<AreaTableGetPayload<T> | null, null>

    /**
     * Find the first AreaTable that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaTableFindFirstOrThrowArgs} args - Arguments to find a AreaTable
     * @example
     * // Get one AreaTable
     * const areaTable = await prisma.areaTable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AreaTableFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AreaTableFindFirstOrThrowArgs>
    ): Prisma__AreaTableClient<AreaTableGetPayload<T>>

    /**
     * Find zero or more AreaTables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaTableFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AreaTables
     * const areaTables = await prisma.areaTable.findMany()
     * 
     * // Get first 10 AreaTables
     * const areaTables = await prisma.areaTable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const areaTableWithIdOnly = await prisma.areaTable.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AreaTableFindManyArgs>(
      args?: SelectSubset<T, AreaTableFindManyArgs>
    ): Prisma.PrismaPromise<Array<AreaTableGetPayload<T>>>

    /**
     * Create a AreaTable.
     * @param {AreaTableCreateArgs} args - Arguments to create a AreaTable.
     * @example
     * // Create one AreaTable
     * const AreaTable = await prisma.areaTable.create({
     *   data: {
     *     // ... data to create a AreaTable
     *   }
     * })
     * 
    **/
    create<T extends AreaTableCreateArgs>(
      args: SelectSubset<T, AreaTableCreateArgs>
    ): Prisma__AreaTableClient<AreaTableGetPayload<T>>

    /**
     * Delete a AreaTable.
     * @param {AreaTableDeleteArgs} args - Arguments to delete one AreaTable.
     * @example
     * // Delete one AreaTable
     * const AreaTable = await prisma.areaTable.delete({
     *   where: {
     *     // ... filter to delete one AreaTable
     *   }
     * })
     * 
    **/
    delete<T extends AreaTableDeleteArgs>(
      args: SelectSubset<T, AreaTableDeleteArgs>
    ): Prisma__AreaTableClient<AreaTableGetPayload<T>>

    /**
     * Update one AreaTable.
     * @param {AreaTableUpdateArgs} args - Arguments to update one AreaTable.
     * @example
     * // Update one AreaTable
     * const areaTable = await prisma.areaTable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AreaTableUpdateArgs>(
      args: SelectSubset<T, AreaTableUpdateArgs>
    ): Prisma__AreaTableClient<AreaTableGetPayload<T>>

    /**
     * Delete zero or more AreaTables.
     * @param {AreaTableDeleteManyArgs} args - Arguments to filter AreaTables to delete.
     * @example
     * // Delete a few AreaTables
     * const { count } = await prisma.areaTable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AreaTableDeleteManyArgs>(
      args?: SelectSubset<T, AreaTableDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AreaTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaTableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AreaTables
     * const areaTable = await prisma.areaTable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AreaTableUpdateManyArgs>(
      args: SelectSubset<T, AreaTableUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AreaTable.
     * @param {AreaTableUpsertArgs} args - Arguments to update or create a AreaTable.
     * @example
     * // Update or create a AreaTable
     * const areaTable = await prisma.areaTable.upsert({
     *   create: {
     *     // ... data to create a AreaTable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AreaTable we want to update
     *   }
     * })
    **/
    upsert<T extends AreaTableUpsertArgs>(
      args: SelectSubset<T, AreaTableUpsertArgs>
    ): Prisma__AreaTableClient<AreaTableGetPayload<T>>

    /**
     * Count the number of AreaTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaTableCountArgs} args - Arguments to filter AreaTables to count.
     * @example
     * // Count the number of AreaTables
     * const count = await prisma.areaTable.count({
     *   where: {
     *     // ... the filter for the AreaTables we want to count
     *   }
     * })
    **/
    count<T extends AreaTableCountArgs>(
      args?: Subset<T, AreaTableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AreaTableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AreaTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaTableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AreaTableAggregateArgs>(args: Subset<T, AreaTableAggregateArgs>): Prisma.PrismaPromise<GetAreaTableAggregateType<T>>

    /**
     * Group by AreaTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaTableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AreaTableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AreaTableGroupByArgs['orderBy'] }
        : { orderBy?: AreaTableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AreaTableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAreaTableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for AreaTable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AreaTableClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    continent<T extends ContinentArgs= {}>(args?: Subset<T, ContinentArgs>): Prisma__ContinentClient<ContinentGetPayload<T> | Null>;

    parentArea<T extends AreaTableArgs= {}>(args?: Subset<T, AreaTableArgs>): Prisma__AreaTableClient<AreaTableGetPayload<T> | Null>;

    light<T extends LightArgs= {}>(args?: Subset<T, LightArgs>): Prisma__LightClient<LightGetPayload<T> | Null>;

    ChildAreas<T extends AreaTable$ChildAreasArgs= {}>(args?: Subset<T, AreaTable$ChildAreasArgs>): Prisma.PrismaPromise<Array<AreaTableGetPayload<T>>| Null>;

    AreaPOI<T extends AreaTable$AreaPOIArgs= {}>(args?: Subset<T, AreaTable$AreaPOIArgs>): Prisma.PrismaPromise<Array<AreaPOIGetPayload<T>>| Null>;

    WMOAreaTable<T extends AreaTable$WMOAreaTableArgs= {}>(args?: Subset<T, AreaTable$WMOAreaTableArgs>): Prisma.PrismaPromise<Array<WMOAreaTableGetPayload<T>>| Null>;

    WorldMapArea<T extends AreaTable$WorldMapAreaArgs= {}>(args?: Subset<T, AreaTable$WorldMapAreaArgs>): Prisma.PrismaPromise<Array<WorldMapAreaGetPayload<T>>| Null>;

    WorldMapOverlay1<T extends AreaTable$WorldMapOverlay1Args= {}>(args?: Subset<T, AreaTable$WorldMapOverlay1Args>): Prisma.PrismaPromise<Array<WorldMapOverlayGetPayload<T>>| Null>;

    WorldMapOverlay2<T extends AreaTable$WorldMapOverlay2Args= {}>(args?: Subset<T, AreaTable$WorldMapOverlay2Args>): Prisma.PrismaPromise<Array<WorldMapOverlayGetPayload<T>>| Null>;

    WorldMapOverlay3<T extends AreaTable$WorldMapOverlay3Args= {}>(args?: Subset<T, AreaTable$WorldMapOverlay3Args>): Prisma.PrismaPromise<Array<WorldMapOverlayGetPayload<T>>| Null>;

    WorldMapOverlay4<T extends AreaTable$WorldMapOverlay4Args= {}>(args?: Subset<T, AreaTable$WorldMapOverlay4Args>): Prisma.PrismaPromise<Array<WorldMapOverlayGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * AreaTable base type for findUnique actions
   */
  export type AreaTableFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the AreaTable
     */
    select?: AreaTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaTableInclude | null
    /**
     * Filter, which AreaTable to fetch.
     */
    where: AreaTableWhereUniqueInput
  }

  /**
   * AreaTable findUnique
   */
  export interface AreaTableFindUniqueArgs extends AreaTableFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AreaTable findUniqueOrThrow
   */
  export type AreaTableFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the AreaTable
     */
    select?: AreaTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaTableInclude | null
    /**
     * Filter, which AreaTable to fetch.
     */
    where: AreaTableWhereUniqueInput
  }


  /**
   * AreaTable base type for findFirst actions
   */
  export type AreaTableFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the AreaTable
     */
    select?: AreaTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaTableInclude | null
    /**
     * Filter, which AreaTable to fetch.
     */
    where?: AreaTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AreaTables to fetch.
     */
    orderBy?: Enumerable<AreaTableOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AreaTables.
     */
    cursor?: AreaTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AreaTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AreaTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AreaTables.
     */
    distinct?: Enumerable<AreaTableScalarFieldEnum>
  }

  /**
   * AreaTable findFirst
   */
  export interface AreaTableFindFirstArgs extends AreaTableFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AreaTable findFirstOrThrow
   */
  export type AreaTableFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the AreaTable
     */
    select?: AreaTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaTableInclude | null
    /**
     * Filter, which AreaTable to fetch.
     */
    where?: AreaTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AreaTables to fetch.
     */
    orderBy?: Enumerable<AreaTableOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AreaTables.
     */
    cursor?: AreaTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AreaTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AreaTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AreaTables.
     */
    distinct?: Enumerable<AreaTableScalarFieldEnum>
  }


  /**
   * AreaTable findMany
   */
  export type AreaTableFindManyArgs = {
    /**
     * Select specific fields to fetch from the AreaTable
     */
    select?: AreaTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaTableInclude | null
    /**
     * Filter, which AreaTables to fetch.
     */
    where?: AreaTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AreaTables to fetch.
     */
    orderBy?: Enumerable<AreaTableOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AreaTables.
     */
    cursor?: AreaTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AreaTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AreaTables.
     */
    skip?: number
    distinct?: Enumerable<AreaTableScalarFieldEnum>
  }


  /**
   * AreaTable create
   */
  export type AreaTableCreateArgs = {
    /**
     * Select specific fields to fetch from the AreaTable
     */
    select?: AreaTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaTableInclude | null
    /**
     * The data needed to create a AreaTable.
     */
    data: XOR<AreaTableCreateInput, AreaTableUncheckedCreateInput>
  }


  /**
   * AreaTable update
   */
  export type AreaTableUpdateArgs = {
    /**
     * Select specific fields to fetch from the AreaTable
     */
    select?: AreaTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaTableInclude | null
    /**
     * The data needed to update a AreaTable.
     */
    data: XOR<AreaTableUpdateInput, AreaTableUncheckedUpdateInput>
    /**
     * Choose, which AreaTable to update.
     */
    where: AreaTableWhereUniqueInput
  }


  /**
   * AreaTable updateMany
   */
  export type AreaTableUpdateManyArgs = {
    /**
     * The data used to update AreaTables.
     */
    data: XOR<AreaTableUpdateManyMutationInput, AreaTableUncheckedUpdateManyInput>
    /**
     * Filter which AreaTables to update
     */
    where?: AreaTableWhereInput
  }


  /**
   * AreaTable upsert
   */
  export type AreaTableUpsertArgs = {
    /**
     * Select specific fields to fetch from the AreaTable
     */
    select?: AreaTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaTableInclude | null
    /**
     * The filter to search for the AreaTable to update in case it exists.
     */
    where: AreaTableWhereUniqueInput
    /**
     * In case the AreaTable found by the `where` argument doesn't exist, create a new AreaTable with this data.
     */
    create: XOR<AreaTableCreateInput, AreaTableUncheckedCreateInput>
    /**
     * In case the AreaTable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AreaTableUpdateInput, AreaTableUncheckedUpdateInput>
  }


  /**
   * AreaTable delete
   */
  export type AreaTableDeleteArgs = {
    /**
     * Select specific fields to fetch from the AreaTable
     */
    select?: AreaTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaTableInclude | null
    /**
     * Filter which AreaTable to delete.
     */
    where: AreaTableWhereUniqueInput
  }


  /**
   * AreaTable deleteMany
   */
  export type AreaTableDeleteManyArgs = {
    /**
     * Filter which AreaTables to delete
     */
    where?: AreaTableWhereInput
  }


  /**
   * AreaTable.ChildAreas
   */
  export type AreaTable$ChildAreasArgs = {
    /**
     * Select specific fields to fetch from the AreaTable
     */
    select?: AreaTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaTableInclude | null
    where?: AreaTableWhereInput
    orderBy?: Enumerable<AreaTableOrderByWithRelationInput>
    cursor?: AreaTableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AreaTableScalarFieldEnum>
  }


  /**
   * AreaTable.AreaPOI
   */
  export type AreaTable$AreaPOIArgs = {
    /**
     * Select specific fields to fetch from the AreaPOI
     */
    select?: AreaPOISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaPOIInclude | null
    where?: AreaPOIWhereInput
    orderBy?: Enumerable<AreaPOIOrderByWithRelationInput>
    cursor?: AreaPOIWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AreaPOIScalarFieldEnum>
  }


  /**
   * AreaTable.WMOAreaTable
   */
  export type AreaTable$WMOAreaTableArgs = {
    /**
     * Select specific fields to fetch from the WMOAreaTable
     */
    select?: WMOAreaTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WMOAreaTableInclude | null
    where?: WMOAreaTableWhereInput
    orderBy?: Enumerable<WMOAreaTableOrderByWithRelationInput>
    cursor?: WMOAreaTableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<WMOAreaTableScalarFieldEnum>
  }


  /**
   * AreaTable.WorldMapArea
   */
  export type AreaTable$WorldMapAreaArgs = {
    /**
     * Select specific fields to fetch from the WorldMapArea
     */
    select?: WorldMapAreaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapAreaInclude | null
    where?: WorldMapAreaWhereInput
    orderBy?: Enumerable<WorldMapAreaOrderByWithRelationInput>
    cursor?: WorldMapAreaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<WorldMapAreaScalarFieldEnum>
  }


  /**
   * AreaTable.WorldMapOverlay1
   */
  export type AreaTable$WorldMapOverlay1Args = {
    /**
     * Select specific fields to fetch from the WorldMapOverlay
     */
    select?: WorldMapOverlaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapOverlayInclude | null
    where?: WorldMapOverlayWhereInput
    orderBy?: Enumerable<WorldMapOverlayOrderByWithRelationInput>
    cursor?: WorldMapOverlayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<WorldMapOverlayScalarFieldEnum>
  }


  /**
   * AreaTable.WorldMapOverlay2
   */
  export type AreaTable$WorldMapOverlay2Args = {
    /**
     * Select specific fields to fetch from the WorldMapOverlay
     */
    select?: WorldMapOverlaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapOverlayInclude | null
    where?: WorldMapOverlayWhereInput
    orderBy?: Enumerable<WorldMapOverlayOrderByWithRelationInput>
    cursor?: WorldMapOverlayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<WorldMapOverlayScalarFieldEnum>
  }


  /**
   * AreaTable.WorldMapOverlay3
   */
  export type AreaTable$WorldMapOverlay3Args = {
    /**
     * Select specific fields to fetch from the WorldMapOverlay
     */
    select?: WorldMapOverlaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapOverlayInclude | null
    where?: WorldMapOverlayWhereInput
    orderBy?: Enumerable<WorldMapOverlayOrderByWithRelationInput>
    cursor?: WorldMapOverlayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<WorldMapOverlayScalarFieldEnum>
  }


  /**
   * AreaTable.WorldMapOverlay4
   */
  export type AreaTable$WorldMapOverlay4Args = {
    /**
     * Select specific fields to fetch from the WorldMapOverlay
     */
    select?: WorldMapOverlaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapOverlayInclude | null
    where?: WorldMapOverlayWhereInput
    orderBy?: Enumerable<WorldMapOverlayOrderByWithRelationInput>
    cursor?: WorldMapOverlayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<WorldMapOverlayScalarFieldEnum>
  }


  /**
   * AreaTable without action
   */
  export type AreaTableArgs = {
    /**
     * Select specific fields to fetch from the AreaTable
     */
    select?: AreaTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaTableInclude | null
  }



  /**
   * Model AreaTrigger
   */


  export type AggregateAreaTrigger = {
    _count: AreaTriggerCountAggregateOutputType | null
    _avg: AreaTriggerAvgAggregateOutputType | null
    _sum: AreaTriggerSumAggregateOutputType | null
    _min: AreaTriggerMinAggregateOutputType | null
    _max: AreaTriggerMaxAggregateOutputType | null
  }

  export type AreaTriggerAvgAggregateOutputType = {
    id: number | null
    continentId: number | null
    x: number | null
    y: number | null
    z: number | null
    radius: number | null
    boxLength: number | null
    boxWidth: number | null
    boxHeight: number | null
    boxYaw: number | null
  }

  export type AreaTriggerSumAggregateOutputType = {
    id: number | null
    continentId: number | null
    x: number | null
    y: number | null
    z: number | null
    radius: number | null
    boxLength: number | null
    boxWidth: number | null
    boxHeight: number | null
    boxYaw: number | null
  }

  export type AreaTriggerMinAggregateOutputType = {
    id: number | null
    continentId: number | null
    x: number | null
    y: number | null
    z: number | null
    radius: number | null
    boxLength: number | null
    boxWidth: number | null
    boxHeight: number | null
    boxYaw: number | null
  }

  export type AreaTriggerMaxAggregateOutputType = {
    id: number | null
    continentId: number | null
    x: number | null
    y: number | null
    z: number | null
    radius: number | null
    boxLength: number | null
    boxWidth: number | null
    boxHeight: number | null
    boxYaw: number | null
  }

  export type AreaTriggerCountAggregateOutputType = {
    id: number
    continentId: number
    x: number
    y: number
    z: number
    radius: number
    boxLength: number
    boxWidth: number
    boxHeight: number
    boxYaw: number
    _all: number
  }


  export type AreaTriggerAvgAggregateInputType = {
    id?: true
    continentId?: true
    x?: true
    y?: true
    z?: true
    radius?: true
    boxLength?: true
    boxWidth?: true
    boxHeight?: true
    boxYaw?: true
  }

  export type AreaTriggerSumAggregateInputType = {
    id?: true
    continentId?: true
    x?: true
    y?: true
    z?: true
    radius?: true
    boxLength?: true
    boxWidth?: true
    boxHeight?: true
    boxYaw?: true
  }

  export type AreaTriggerMinAggregateInputType = {
    id?: true
    continentId?: true
    x?: true
    y?: true
    z?: true
    radius?: true
    boxLength?: true
    boxWidth?: true
    boxHeight?: true
    boxYaw?: true
  }

  export type AreaTriggerMaxAggregateInputType = {
    id?: true
    continentId?: true
    x?: true
    y?: true
    z?: true
    radius?: true
    boxLength?: true
    boxWidth?: true
    boxHeight?: true
    boxYaw?: true
  }

  export type AreaTriggerCountAggregateInputType = {
    id?: true
    continentId?: true
    x?: true
    y?: true
    z?: true
    radius?: true
    boxLength?: true
    boxWidth?: true
    boxHeight?: true
    boxYaw?: true
    _all?: true
  }

  export type AreaTriggerAggregateArgs = {
    /**
     * Filter which AreaTrigger to aggregate.
     */
    where?: AreaTriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AreaTriggers to fetch.
     */
    orderBy?: Enumerable<AreaTriggerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AreaTriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AreaTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AreaTriggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AreaTriggers
    **/
    _count?: true | AreaTriggerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AreaTriggerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AreaTriggerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AreaTriggerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AreaTriggerMaxAggregateInputType
  }

  export type GetAreaTriggerAggregateType<T extends AreaTriggerAggregateArgs> = {
        [P in keyof T & keyof AggregateAreaTrigger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAreaTrigger[P]>
      : GetScalarType<T[P], AggregateAreaTrigger[P]>
  }




  export type AreaTriggerGroupByArgs = {
    where?: AreaTriggerWhereInput
    orderBy?: Enumerable<AreaTriggerOrderByWithAggregationInput>
    by: AreaTriggerScalarFieldEnum[]
    having?: AreaTriggerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AreaTriggerCountAggregateInputType | true
    _avg?: AreaTriggerAvgAggregateInputType
    _sum?: AreaTriggerSumAggregateInputType
    _min?: AreaTriggerMinAggregateInputType
    _max?: AreaTriggerMaxAggregateInputType
  }


  export type AreaTriggerGroupByOutputType = {
    id: number
    continentId: number
    x: number
    y: number
    z: number
    radius: number
    boxLength: number
    boxWidth: number
    boxHeight: number
    boxYaw: number
    _count: AreaTriggerCountAggregateOutputType | null
    _avg: AreaTriggerAvgAggregateOutputType | null
    _sum: AreaTriggerSumAggregateOutputType | null
    _min: AreaTriggerMinAggregateOutputType | null
    _max: AreaTriggerMaxAggregateOutputType | null
  }

  type GetAreaTriggerGroupByPayload<T extends AreaTriggerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AreaTriggerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AreaTriggerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AreaTriggerGroupByOutputType[P]>
            : GetScalarType<T[P], AreaTriggerGroupByOutputType[P]>
        }
      >
    >


  export type AreaTriggerSelect = {
    id?: boolean
    continentId?: boolean
    continent?: boolean | ContinentArgs
    x?: boolean
    y?: boolean
    z?: boolean
    radius?: boolean
    boxLength?: boolean
    boxWidth?: boolean
    boxHeight?: boolean
    boxYaw?: boolean
  }


  export type AreaTriggerInclude = {
    continent?: boolean | ContinentArgs
  }

  export type AreaTriggerGetPayload<S extends boolean | null | undefined | AreaTriggerArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AreaTrigger :
    S extends undefined ? never :
    S extends { include: any } & (AreaTriggerArgs | AreaTriggerFindManyArgs)
    ? AreaTrigger  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'continent' ? ContinentGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AreaTriggerArgs | AreaTriggerFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'continent' ? ContinentGetPayload<S['select'][P]> :  P extends keyof AreaTrigger ? AreaTrigger[P] : never
  } 
      : AreaTrigger


  type AreaTriggerCountArgs = 
    Omit<AreaTriggerFindManyArgs, 'select' | 'include'> & {
      select?: AreaTriggerCountAggregateInputType | true
    }

  export interface AreaTriggerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one AreaTrigger that matches the filter.
     * @param {AreaTriggerFindUniqueArgs} args - Arguments to find a AreaTrigger
     * @example
     * // Get one AreaTrigger
     * const areaTrigger = await prisma.areaTrigger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AreaTriggerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AreaTriggerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'AreaTrigger'> extends True ? Prisma__AreaTriggerClient<AreaTriggerGetPayload<T>> : Prisma__AreaTriggerClient<AreaTriggerGetPayload<T> | null, null>

    /**
     * Find one AreaTrigger that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AreaTriggerFindUniqueOrThrowArgs} args - Arguments to find a AreaTrigger
     * @example
     * // Get one AreaTrigger
     * const areaTrigger = await prisma.areaTrigger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AreaTriggerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AreaTriggerFindUniqueOrThrowArgs>
    ): Prisma__AreaTriggerClient<AreaTriggerGetPayload<T>>

    /**
     * Find the first AreaTrigger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaTriggerFindFirstArgs} args - Arguments to find a AreaTrigger
     * @example
     * // Get one AreaTrigger
     * const areaTrigger = await prisma.areaTrigger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AreaTriggerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AreaTriggerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'AreaTrigger'> extends True ? Prisma__AreaTriggerClient<AreaTriggerGetPayload<T>> : Prisma__AreaTriggerClient<AreaTriggerGetPayload<T> | null, null>

    /**
     * Find the first AreaTrigger that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaTriggerFindFirstOrThrowArgs} args - Arguments to find a AreaTrigger
     * @example
     * // Get one AreaTrigger
     * const areaTrigger = await prisma.areaTrigger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AreaTriggerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AreaTriggerFindFirstOrThrowArgs>
    ): Prisma__AreaTriggerClient<AreaTriggerGetPayload<T>>

    /**
     * Find zero or more AreaTriggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaTriggerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AreaTriggers
     * const areaTriggers = await prisma.areaTrigger.findMany()
     * 
     * // Get first 10 AreaTriggers
     * const areaTriggers = await prisma.areaTrigger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const areaTriggerWithIdOnly = await prisma.areaTrigger.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AreaTriggerFindManyArgs>(
      args?: SelectSubset<T, AreaTriggerFindManyArgs>
    ): Prisma.PrismaPromise<Array<AreaTriggerGetPayload<T>>>

    /**
     * Create a AreaTrigger.
     * @param {AreaTriggerCreateArgs} args - Arguments to create a AreaTrigger.
     * @example
     * // Create one AreaTrigger
     * const AreaTrigger = await prisma.areaTrigger.create({
     *   data: {
     *     // ... data to create a AreaTrigger
     *   }
     * })
     * 
    **/
    create<T extends AreaTriggerCreateArgs>(
      args: SelectSubset<T, AreaTriggerCreateArgs>
    ): Prisma__AreaTriggerClient<AreaTriggerGetPayload<T>>

    /**
     * Delete a AreaTrigger.
     * @param {AreaTriggerDeleteArgs} args - Arguments to delete one AreaTrigger.
     * @example
     * // Delete one AreaTrigger
     * const AreaTrigger = await prisma.areaTrigger.delete({
     *   where: {
     *     // ... filter to delete one AreaTrigger
     *   }
     * })
     * 
    **/
    delete<T extends AreaTriggerDeleteArgs>(
      args: SelectSubset<T, AreaTriggerDeleteArgs>
    ): Prisma__AreaTriggerClient<AreaTriggerGetPayload<T>>

    /**
     * Update one AreaTrigger.
     * @param {AreaTriggerUpdateArgs} args - Arguments to update one AreaTrigger.
     * @example
     * // Update one AreaTrigger
     * const areaTrigger = await prisma.areaTrigger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AreaTriggerUpdateArgs>(
      args: SelectSubset<T, AreaTriggerUpdateArgs>
    ): Prisma__AreaTriggerClient<AreaTriggerGetPayload<T>>

    /**
     * Delete zero or more AreaTriggers.
     * @param {AreaTriggerDeleteManyArgs} args - Arguments to filter AreaTriggers to delete.
     * @example
     * // Delete a few AreaTriggers
     * const { count } = await prisma.areaTrigger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AreaTriggerDeleteManyArgs>(
      args?: SelectSubset<T, AreaTriggerDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AreaTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaTriggerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AreaTriggers
     * const areaTrigger = await prisma.areaTrigger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AreaTriggerUpdateManyArgs>(
      args: SelectSubset<T, AreaTriggerUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AreaTrigger.
     * @param {AreaTriggerUpsertArgs} args - Arguments to update or create a AreaTrigger.
     * @example
     * // Update or create a AreaTrigger
     * const areaTrigger = await prisma.areaTrigger.upsert({
     *   create: {
     *     // ... data to create a AreaTrigger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AreaTrigger we want to update
     *   }
     * })
    **/
    upsert<T extends AreaTriggerUpsertArgs>(
      args: SelectSubset<T, AreaTriggerUpsertArgs>
    ): Prisma__AreaTriggerClient<AreaTriggerGetPayload<T>>

    /**
     * Count the number of AreaTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaTriggerCountArgs} args - Arguments to filter AreaTriggers to count.
     * @example
     * // Count the number of AreaTriggers
     * const count = await prisma.areaTrigger.count({
     *   where: {
     *     // ... the filter for the AreaTriggers we want to count
     *   }
     * })
    **/
    count<T extends AreaTriggerCountArgs>(
      args?: Subset<T, AreaTriggerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AreaTriggerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AreaTrigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaTriggerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AreaTriggerAggregateArgs>(args: Subset<T, AreaTriggerAggregateArgs>): Prisma.PrismaPromise<GetAreaTriggerAggregateType<T>>

    /**
     * Group by AreaTrigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaTriggerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AreaTriggerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AreaTriggerGroupByArgs['orderBy'] }
        : { orderBy?: AreaTriggerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AreaTriggerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAreaTriggerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for AreaTrigger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AreaTriggerClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    continent<T extends ContinentArgs= {}>(args?: Subset<T, ContinentArgs>): Prisma__ContinentClient<ContinentGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * AreaTrigger base type for findUnique actions
   */
  export type AreaTriggerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the AreaTrigger
     */
    select?: AreaTriggerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaTriggerInclude | null
    /**
     * Filter, which AreaTrigger to fetch.
     */
    where: AreaTriggerWhereUniqueInput
  }

  /**
   * AreaTrigger findUnique
   */
  export interface AreaTriggerFindUniqueArgs extends AreaTriggerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AreaTrigger findUniqueOrThrow
   */
  export type AreaTriggerFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the AreaTrigger
     */
    select?: AreaTriggerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaTriggerInclude | null
    /**
     * Filter, which AreaTrigger to fetch.
     */
    where: AreaTriggerWhereUniqueInput
  }


  /**
   * AreaTrigger base type for findFirst actions
   */
  export type AreaTriggerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the AreaTrigger
     */
    select?: AreaTriggerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaTriggerInclude | null
    /**
     * Filter, which AreaTrigger to fetch.
     */
    where?: AreaTriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AreaTriggers to fetch.
     */
    orderBy?: Enumerable<AreaTriggerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AreaTriggers.
     */
    cursor?: AreaTriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AreaTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AreaTriggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AreaTriggers.
     */
    distinct?: Enumerable<AreaTriggerScalarFieldEnum>
  }

  /**
   * AreaTrigger findFirst
   */
  export interface AreaTriggerFindFirstArgs extends AreaTriggerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AreaTrigger findFirstOrThrow
   */
  export type AreaTriggerFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the AreaTrigger
     */
    select?: AreaTriggerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaTriggerInclude | null
    /**
     * Filter, which AreaTrigger to fetch.
     */
    where?: AreaTriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AreaTriggers to fetch.
     */
    orderBy?: Enumerable<AreaTriggerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AreaTriggers.
     */
    cursor?: AreaTriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AreaTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AreaTriggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AreaTriggers.
     */
    distinct?: Enumerable<AreaTriggerScalarFieldEnum>
  }


  /**
   * AreaTrigger findMany
   */
  export type AreaTriggerFindManyArgs = {
    /**
     * Select specific fields to fetch from the AreaTrigger
     */
    select?: AreaTriggerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaTriggerInclude | null
    /**
     * Filter, which AreaTriggers to fetch.
     */
    where?: AreaTriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AreaTriggers to fetch.
     */
    orderBy?: Enumerable<AreaTriggerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AreaTriggers.
     */
    cursor?: AreaTriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AreaTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AreaTriggers.
     */
    skip?: number
    distinct?: Enumerable<AreaTriggerScalarFieldEnum>
  }


  /**
   * AreaTrigger create
   */
  export type AreaTriggerCreateArgs = {
    /**
     * Select specific fields to fetch from the AreaTrigger
     */
    select?: AreaTriggerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaTriggerInclude | null
    /**
     * The data needed to create a AreaTrigger.
     */
    data: XOR<AreaTriggerCreateInput, AreaTriggerUncheckedCreateInput>
  }


  /**
   * AreaTrigger update
   */
  export type AreaTriggerUpdateArgs = {
    /**
     * Select specific fields to fetch from the AreaTrigger
     */
    select?: AreaTriggerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaTriggerInclude | null
    /**
     * The data needed to update a AreaTrigger.
     */
    data: XOR<AreaTriggerUpdateInput, AreaTriggerUncheckedUpdateInput>
    /**
     * Choose, which AreaTrigger to update.
     */
    where: AreaTriggerWhereUniqueInput
  }


  /**
   * AreaTrigger updateMany
   */
  export type AreaTriggerUpdateManyArgs = {
    /**
     * The data used to update AreaTriggers.
     */
    data: XOR<AreaTriggerUpdateManyMutationInput, AreaTriggerUncheckedUpdateManyInput>
    /**
     * Filter which AreaTriggers to update
     */
    where?: AreaTriggerWhereInput
  }


  /**
   * AreaTrigger upsert
   */
  export type AreaTriggerUpsertArgs = {
    /**
     * Select specific fields to fetch from the AreaTrigger
     */
    select?: AreaTriggerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaTriggerInclude | null
    /**
     * The filter to search for the AreaTrigger to update in case it exists.
     */
    where: AreaTriggerWhereUniqueInput
    /**
     * In case the AreaTrigger found by the `where` argument doesn't exist, create a new AreaTrigger with this data.
     */
    create: XOR<AreaTriggerCreateInput, AreaTriggerUncheckedCreateInput>
    /**
     * In case the AreaTrigger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AreaTriggerUpdateInput, AreaTriggerUncheckedUpdateInput>
  }


  /**
   * AreaTrigger delete
   */
  export type AreaTriggerDeleteArgs = {
    /**
     * Select specific fields to fetch from the AreaTrigger
     */
    select?: AreaTriggerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaTriggerInclude | null
    /**
     * Filter which AreaTrigger to delete.
     */
    where: AreaTriggerWhereUniqueInput
  }


  /**
   * AreaTrigger deleteMany
   */
  export type AreaTriggerDeleteManyArgs = {
    /**
     * Filter which AreaTriggers to delete
     */
    where?: AreaTriggerWhereInput
  }


  /**
   * AreaTrigger without action
   */
  export type AreaTriggerArgs = {
    /**
     * Select specific fields to fetch from the AreaTrigger
     */
    select?: AreaTriggerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaTriggerInclude | null
  }



  /**
   * Model CreatureDisplayInfoExtra
   */


  export type AggregateCreatureDisplayInfoExtra = {
    _count: CreatureDisplayInfoExtraCountAggregateOutputType | null
    _avg: CreatureDisplayInfoExtraAvgAggregateOutputType | null
    _sum: CreatureDisplayInfoExtraSumAggregateOutputType | null
    _min: CreatureDisplayInfoExtraMinAggregateOutputType | null
    _max: CreatureDisplayInfoExtraMaxAggregateOutputType | null
  }

  export type CreatureDisplayInfoExtraAvgAggregateOutputType = {
    id: number | null
    displayRaceId: number | null
    displaySexId: number | null
    skinId: number | null
    faceId: number | null
    hairStyleId: number | null
    hairColorId: number | null
    facialHairId: number | null
    itemDisplayId_1: number | null
    itemDisplayId_2: number | null
    itemDisplayId_3: number | null
    itemDisplayId_4: number | null
    itemDisplayId_5: number | null
    itemDisplayId_6: number | null
    itemDisplayId_7: number | null
    itemDisplayId_8: number | null
    itemDisplayId_9: number | null
    itemDisplayId_10: number | null
  }

  export type CreatureDisplayInfoExtraSumAggregateOutputType = {
    id: number | null
    displayRaceId: number | null
    displaySexId: number | null
    skinId: number | null
    faceId: number | null
    hairStyleId: number | null
    hairColorId: number | null
    facialHairId: number | null
    itemDisplayId_1: number | null
    itemDisplayId_2: number | null
    itemDisplayId_3: number | null
    itemDisplayId_4: number | null
    itemDisplayId_5: number | null
    itemDisplayId_6: number | null
    itemDisplayId_7: number | null
    itemDisplayId_8: number | null
    itemDisplayId_9: number | null
    itemDisplayId_10: number | null
  }

  export type CreatureDisplayInfoExtraMinAggregateOutputType = {
    id: number | null
    displayRaceId: number | null
    displaySexId: number | null
    skinId: number | null
    faceId: number | null
    hairStyleId: number | null
    hairColorId: number | null
    facialHairId: number | null
    itemDisplayId_1: number | null
    itemDisplayId_2: number | null
    itemDisplayId_3: number | null
    itemDisplayId_4: number | null
    itemDisplayId_5: number | null
    itemDisplayId_6: number | null
    itemDisplayId_7: number | null
    itemDisplayId_8: number | null
    itemDisplayId_9: number | null
    itemDisplayId_10: number | null
    bakeName: string | null
  }

  export type CreatureDisplayInfoExtraMaxAggregateOutputType = {
    id: number | null
    displayRaceId: number | null
    displaySexId: number | null
    skinId: number | null
    faceId: number | null
    hairStyleId: number | null
    hairColorId: number | null
    facialHairId: number | null
    itemDisplayId_1: number | null
    itemDisplayId_2: number | null
    itemDisplayId_3: number | null
    itemDisplayId_4: number | null
    itemDisplayId_5: number | null
    itemDisplayId_6: number | null
    itemDisplayId_7: number | null
    itemDisplayId_8: number | null
    itemDisplayId_9: number | null
    itemDisplayId_10: number | null
    bakeName: string | null
  }

  export type CreatureDisplayInfoExtraCountAggregateOutputType = {
    id: number
    displayRaceId: number
    displaySexId: number
    skinId: number
    faceId: number
    hairStyleId: number
    hairColorId: number
    facialHairId: number
    itemDisplayId_1: number
    itemDisplayId_2: number
    itemDisplayId_3: number
    itemDisplayId_4: number
    itemDisplayId_5: number
    itemDisplayId_6: number
    itemDisplayId_7: number
    itemDisplayId_8: number
    itemDisplayId_9: number
    itemDisplayId_10: number
    bakeName: number
    _all: number
  }


  export type CreatureDisplayInfoExtraAvgAggregateInputType = {
    id?: true
    displayRaceId?: true
    displaySexId?: true
    skinId?: true
    faceId?: true
    hairStyleId?: true
    hairColorId?: true
    facialHairId?: true
    itemDisplayId_1?: true
    itemDisplayId_2?: true
    itemDisplayId_3?: true
    itemDisplayId_4?: true
    itemDisplayId_5?: true
    itemDisplayId_6?: true
    itemDisplayId_7?: true
    itemDisplayId_8?: true
    itemDisplayId_9?: true
    itemDisplayId_10?: true
  }

  export type CreatureDisplayInfoExtraSumAggregateInputType = {
    id?: true
    displayRaceId?: true
    displaySexId?: true
    skinId?: true
    faceId?: true
    hairStyleId?: true
    hairColorId?: true
    facialHairId?: true
    itemDisplayId_1?: true
    itemDisplayId_2?: true
    itemDisplayId_3?: true
    itemDisplayId_4?: true
    itemDisplayId_5?: true
    itemDisplayId_6?: true
    itemDisplayId_7?: true
    itemDisplayId_8?: true
    itemDisplayId_9?: true
    itemDisplayId_10?: true
  }

  export type CreatureDisplayInfoExtraMinAggregateInputType = {
    id?: true
    displayRaceId?: true
    displaySexId?: true
    skinId?: true
    faceId?: true
    hairStyleId?: true
    hairColorId?: true
    facialHairId?: true
    itemDisplayId_1?: true
    itemDisplayId_2?: true
    itemDisplayId_3?: true
    itemDisplayId_4?: true
    itemDisplayId_5?: true
    itemDisplayId_6?: true
    itemDisplayId_7?: true
    itemDisplayId_8?: true
    itemDisplayId_9?: true
    itemDisplayId_10?: true
    bakeName?: true
  }

  export type CreatureDisplayInfoExtraMaxAggregateInputType = {
    id?: true
    displayRaceId?: true
    displaySexId?: true
    skinId?: true
    faceId?: true
    hairStyleId?: true
    hairColorId?: true
    facialHairId?: true
    itemDisplayId_1?: true
    itemDisplayId_2?: true
    itemDisplayId_3?: true
    itemDisplayId_4?: true
    itemDisplayId_5?: true
    itemDisplayId_6?: true
    itemDisplayId_7?: true
    itemDisplayId_8?: true
    itemDisplayId_9?: true
    itemDisplayId_10?: true
    bakeName?: true
  }

  export type CreatureDisplayInfoExtraCountAggregateInputType = {
    id?: true
    displayRaceId?: true
    displaySexId?: true
    skinId?: true
    faceId?: true
    hairStyleId?: true
    hairColorId?: true
    facialHairId?: true
    itemDisplayId_1?: true
    itemDisplayId_2?: true
    itemDisplayId_3?: true
    itemDisplayId_4?: true
    itemDisplayId_5?: true
    itemDisplayId_6?: true
    itemDisplayId_7?: true
    itemDisplayId_8?: true
    itemDisplayId_9?: true
    itemDisplayId_10?: true
    bakeName?: true
    _all?: true
  }

  export type CreatureDisplayInfoExtraAggregateArgs = {
    /**
     * Filter which CreatureDisplayInfoExtra to aggregate.
     */
    where?: CreatureDisplayInfoExtraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreatureDisplayInfoExtras to fetch.
     */
    orderBy?: Enumerable<CreatureDisplayInfoExtraOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreatureDisplayInfoExtraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreatureDisplayInfoExtras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreatureDisplayInfoExtras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreatureDisplayInfoExtras
    **/
    _count?: true | CreatureDisplayInfoExtraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreatureDisplayInfoExtraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreatureDisplayInfoExtraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreatureDisplayInfoExtraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreatureDisplayInfoExtraMaxAggregateInputType
  }

  export type GetCreatureDisplayInfoExtraAggregateType<T extends CreatureDisplayInfoExtraAggregateArgs> = {
        [P in keyof T & keyof AggregateCreatureDisplayInfoExtra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreatureDisplayInfoExtra[P]>
      : GetScalarType<T[P], AggregateCreatureDisplayInfoExtra[P]>
  }




  export type CreatureDisplayInfoExtraGroupByArgs = {
    where?: CreatureDisplayInfoExtraWhereInput
    orderBy?: Enumerable<CreatureDisplayInfoExtraOrderByWithAggregationInput>
    by: CreatureDisplayInfoExtraScalarFieldEnum[]
    having?: CreatureDisplayInfoExtraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreatureDisplayInfoExtraCountAggregateInputType | true
    _avg?: CreatureDisplayInfoExtraAvgAggregateInputType
    _sum?: CreatureDisplayInfoExtraSumAggregateInputType
    _min?: CreatureDisplayInfoExtraMinAggregateInputType
    _max?: CreatureDisplayInfoExtraMaxAggregateInputType
  }


  export type CreatureDisplayInfoExtraGroupByOutputType = {
    id: number
    displayRaceId: number
    displaySexId: number
    skinId: number
    faceId: number
    hairStyleId: number
    hairColorId: number
    facialHairId: number
    itemDisplayId_1: number
    itemDisplayId_2: number
    itemDisplayId_3: number
    itemDisplayId_4: number
    itemDisplayId_5: number
    itemDisplayId_6: number
    itemDisplayId_7: number
    itemDisplayId_8: number
    itemDisplayId_9: number
    itemDisplayId_10: number
    bakeName: string
    _count: CreatureDisplayInfoExtraCountAggregateOutputType | null
    _avg: CreatureDisplayInfoExtraAvgAggregateOutputType | null
    _sum: CreatureDisplayInfoExtraSumAggregateOutputType | null
    _min: CreatureDisplayInfoExtraMinAggregateOutputType | null
    _max: CreatureDisplayInfoExtraMaxAggregateOutputType | null
  }

  type GetCreatureDisplayInfoExtraGroupByPayload<T extends CreatureDisplayInfoExtraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CreatureDisplayInfoExtraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreatureDisplayInfoExtraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreatureDisplayInfoExtraGroupByOutputType[P]>
            : GetScalarType<T[P], CreatureDisplayInfoExtraGroupByOutputType[P]>
        }
      >
    >


  export type CreatureDisplayInfoExtraSelect = {
    id?: boolean
    displayRaceId?: boolean
    displaySexId?: boolean
    skinId?: boolean
    faceId?: boolean
    hairStyleId?: boolean
    hairColorId?: boolean
    facialHairId?: boolean
    itemDisplayId_1?: boolean
    itemDisplayId_2?: boolean
    itemDisplayId_3?: boolean
    itemDisplayId_4?: boolean
    itemDisplayId_5?: boolean
    itemDisplayId_6?: boolean
    itemDisplayId_7?: boolean
    itemDisplayId_8?: boolean
    itemDisplayId_9?: boolean
    itemDisplayId_10?: boolean
    bakeName?: boolean
  }


  export type CreatureDisplayInfoExtraGetPayload<S extends boolean | null | undefined | CreatureDisplayInfoExtraArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CreatureDisplayInfoExtra :
    S extends undefined ? never :
    S extends { include: any } & (CreatureDisplayInfoExtraArgs | CreatureDisplayInfoExtraFindManyArgs)
    ? CreatureDisplayInfoExtra 
    : S extends { select: any } & (CreatureDisplayInfoExtraArgs | CreatureDisplayInfoExtraFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CreatureDisplayInfoExtra ? CreatureDisplayInfoExtra[P] : never
  } 
      : CreatureDisplayInfoExtra


  type CreatureDisplayInfoExtraCountArgs = 
    Omit<CreatureDisplayInfoExtraFindManyArgs, 'select' | 'include'> & {
      select?: CreatureDisplayInfoExtraCountAggregateInputType | true
    }

  export interface CreatureDisplayInfoExtraDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one CreatureDisplayInfoExtra that matches the filter.
     * @param {CreatureDisplayInfoExtraFindUniqueArgs} args - Arguments to find a CreatureDisplayInfoExtra
     * @example
     * // Get one CreatureDisplayInfoExtra
     * const creatureDisplayInfoExtra = await prisma.creatureDisplayInfoExtra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CreatureDisplayInfoExtraFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CreatureDisplayInfoExtraFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CreatureDisplayInfoExtra'> extends True ? Prisma__CreatureDisplayInfoExtraClient<CreatureDisplayInfoExtraGetPayload<T>> : Prisma__CreatureDisplayInfoExtraClient<CreatureDisplayInfoExtraGetPayload<T> | null, null>

    /**
     * Find one CreatureDisplayInfoExtra that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CreatureDisplayInfoExtraFindUniqueOrThrowArgs} args - Arguments to find a CreatureDisplayInfoExtra
     * @example
     * // Get one CreatureDisplayInfoExtra
     * const creatureDisplayInfoExtra = await prisma.creatureDisplayInfoExtra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CreatureDisplayInfoExtraFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CreatureDisplayInfoExtraFindUniqueOrThrowArgs>
    ): Prisma__CreatureDisplayInfoExtraClient<CreatureDisplayInfoExtraGetPayload<T>>

    /**
     * Find the first CreatureDisplayInfoExtra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatureDisplayInfoExtraFindFirstArgs} args - Arguments to find a CreatureDisplayInfoExtra
     * @example
     * // Get one CreatureDisplayInfoExtra
     * const creatureDisplayInfoExtra = await prisma.creatureDisplayInfoExtra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CreatureDisplayInfoExtraFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CreatureDisplayInfoExtraFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CreatureDisplayInfoExtra'> extends True ? Prisma__CreatureDisplayInfoExtraClient<CreatureDisplayInfoExtraGetPayload<T>> : Prisma__CreatureDisplayInfoExtraClient<CreatureDisplayInfoExtraGetPayload<T> | null, null>

    /**
     * Find the first CreatureDisplayInfoExtra that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatureDisplayInfoExtraFindFirstOrThrowArgs} args - Arguments to find a CreatureDisplayInfoExtra
     * @example
     * // Get one CreatureDisplayInfoExtra
     * const creatureDisplayInfoExtra = await prisma.creatureDisplayInfoExtra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CreatureDisplayInfoExtraFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CreatureDisplayInfoExtraFindFirstOrThrowArgs>
    ): Prisma__CreatureDisplayInfoExtraClient<CreatureDisplayInfoExtraGetPayload<T>>

    /**
     * Find zero or more CreatureDisplayInfoExtras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatureDisplayInfoExtraFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreatureDisplayInfoExtras
     * const creatureDisplayInfoExtras = await prisma.creatureDisplayInfoExtra.findMany()
     * 
     * // Get first 10 CreatureDisplayInfoExtras
     * const creatureDisplayInfoExtras = await prisma.creatureDisplayInfoExtra.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creatureDisplayInfoExtraWithIdOnly = await prisma.creatureDisplayInfoExtra.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CreatureDisplayInfoExtraFindManyArgs>(
      args?: SelectSubset<T, CreatureDisplayInfoExtraFindManyArgs>
    ): Prisma.PrismaPromise<Array<CreatureDisplayInfoExtraGetPayload<T>>>

    /**
     * Create a CreatureDisplayInfoExtra.
     * @param {CreatureDisplayInfoExtraCreateArgs} args - Arguments to create a CreatureDisplayInfoExtra.
     * @example
     * // Create one CreatureDisplayInfoExtra
     * const CreatureDisplayInfoExtra = await prisma.creatureDisplayInfoExtra.create({
     *   data: {
     *     // ... data to create a CreatureDisplayInfoExtra
     *   }
     * })
     * 
    **/
    create<T extends CreatureDisplayInfoExtraCreateArgs>(
      args: SelectSubset<T, CreatureDisplayInfoExtraCreateArgs>
    ): Prisma__CreatureDisplayInfoExtraClient<CreatureDisplayInfoExtraGetPayload<T>>

    /**
     * Delete a CreatureDisplayInfoExtra.
     * @param {CreatureDisplayInfoExtraDeleteArgs} args - Arguments to delete one CreatureDisplayInfoExtra.
     * @example
     * // Delete one CreatureDisplayInfoExtra
     * const CreatureDisplayInfoExtra = await prisma.creatureDisplayInfoExtra.delete({
     *   where: {
     *     // ... filter to delete one CreatureDisplayInfoExtra
     *   }
     * })
     * 
    **/
    delete<T extends CreatureDisplayInfoExtraDeleteArgs>(
      args: SelectSubset<T, CreatureDisplayInfoExtraDeleteArgs>
    ): Prisma__CreatureDisplayInfoExtraClient<CreatureDisplayInfoExtraGetPayload<T>>

    /**
     * Update one CreatureDisplayInfoExtra.
     * @param {CreatureDisplayInfoExtraUpdateArgs} args - Arguments to update one CreatureDisplayInfoExtra.
     * @example
     * // Update one CreatureDisplayInfoExtra
     * const creatureDisplayInfoExtra = await prisma.creatureDisplayInfoExtra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CreatureDisplayInfoExtraUpdateArgs>(
      args: SelectSubset<T, CreatureDisplayInfoExtraUpdateArgs>
    ): Prisma__CreatureDisplayInfoExtraClient<CreatureDisplayInfoExtraGetPayload<T>>

    /**
     * Delete zero or more CreatureDisplayInfoExtras.
     * @param {CreatureDisplayInfoExtraDeleteManyArgs} args - Arguments to filter CreatureDisplayInfoExtras to delete.
     * @example
     * // Delete a few CreatureDisplayInfoExtras
     * const { count } = await prisma.creatureDisplayInfoExtra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CreatureDisplayInfoExtraDeleteManyArgs>(
      args?: SelectSubset<T, CreatureDisplayInfoExtraDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreatureDisplayInfoExtras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatureDisplayInfoExtraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreatureDisplayInfoExtras
     * const creatureDisplayInfoExtra = await prisma.creatureDisplayInfoExtra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CreatureDisplayInfoExtraUpdateManyArgs>(
      args: SelectSubset<T, CreatureDisplayInfoExtraUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CreatureDisplayInfoExtra.
     * @param {CreatureDisplayInfoExtraUpsertArgs} args - Arguments to update or create a CreatureDisplayInfoExtra.
     * @example
     * // Update or create a CreatureDisplayInfoExtra
     * const creatureDisplayInfoExtra = await prisma.creatureDisplayInfoExtra.upsert({
     *   create: {
     *     // ... data to create a CreatureDisplayInfoExtra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreatureDisplayInfoExtra we want to update
     *   }
     * })
    **/
    upsert<T extends CreatureDisplayInfoExtraUpsertArgs>(
      args: SelectSubset<T, CreatureDisplayInfoExtraUpsertArgs>
    ): Prisma__CreatureDisplayInfoExtraClient<CreatureDisplayInfoExtraGetPayload<T>>

    /**
     * Count the number of CreatureDisplayInfoExtras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatureDisplayInfoExtraCountArgs} args - Arguments to filter CreatureDisplayInfoExtras to count.
     * @example
     * // Count the number of CreatureDisplayInfoExtras
     * const count = await prisma.creatureDisplayInfoExtra.count({
     *   where: {
     *     // ... the filter for the CreatureDisplayInfoExtras we want to count
     *   }
     * })
    **/
    count<T extends CreatureDisplayInfoExtraCountArgs>(
      args?: Subset<T, CreatureDisplayInfoExtraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreatureDisplayInfoExtraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreatureDisplayInfoExtra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatureDisplayInfoExtraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CreatureDisplayInfoExtraAggregateArgs>(args: Subset<T, CreatureDisplayInfoExtraAggregateArgs>): Prisma.PrismaPromise<GetCreatureDisplayInfoExtraAggregateType<T>>

    /**
     * Group by CreatureDisplayInfoExtra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatureDisplayInfoExtraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CreatureDisplayInfoExtraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreatureDisplayInfoExtraGroupByArgs['orderBy'] }
        : { orderBy?: CreatureDisplayInfoExtraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CreatureDisplayInfoExtraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreatureDisplayInfoExtraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CreatureDisplayInfoExtra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CreatureDisplayInfoExtraClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * CreatureDisplayInfoExtra base type for findUnique actions
   */
  export type CreatureDisplayInfoExtraFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CreatureDisplayInfoExtra
     */
    select?: CreatureDisplayInfoExtraSelect | null
    /**
     * Filter, which CreatureDisplayInfoExtra to fetch.
     */
    where: CreatureDisplayInfoExtraWhereUniqueInput
  }

  /**
   * CreatureDisplayInfoExtra findUnique
   */
  export interface CreatureDisplayInfoExtraFindUniqueArgs extends CreatureDisplayInfoExtraFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CreatureDisplayInfoExtra findUniqueOrThrow
   */
  export type CreatureDisplayInfoExtraFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CreatureDisplayInfoExtra
     */
    select?: CreatureDisplayInfoExtraSelect | null
    /**
     * Filter, which CreatureDisplayInfoExtra to fetch.
     */
    where: CreatureDisplayInfoExtraWhereUniqueInput
  }


  /**
   * CreatureDisplayInfoExtra base type for findFirst actions
   */
  export type CreatureDisplayInfoExtraFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CreatureDisplayInfoExtra
     */
    select?: CreatureDisplayInfoExtraSelect | null
    /**
     * Filter, which CreatureDisplayInfoExtra to fetch.
     */
    where?: CreatureDisplayInfoExtraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreatureDisplayInfoExtras to fetch.
     */
    orderBy?: Enumerable<CreatureDisplayInfoExtraOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreatureDisplayInfoExtras.
     */
    cursor?: CreatureDisplayInfoExtraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreatureDisplayInfoExtras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreatureDisplayInfoExtras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreatureDisplayInfoExtras.
     */
    distinct?: Enumerable<CreatureDisplayInfoExtraScalarFieldEnum>
  }

  /**
   * CreatureDisplayInfoExtra findFirst
   */
  export interface CreatureDisplayInfoExtraFindFirstArgs extends CreatureDisplayInfoExtraFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CreatureDisplayInfoExtra findFirstOrThrow
   */
  export type CreatureDisplayInfoExtraFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CreatureDisplayInfoExtra
     */
    select?: CreatureDisplayInfoExtraSelect | null
    /**
     * Filter, which CreatureDisplayInfoExtra to fetch.
     */
    where?: CreatureDisplayInfoExtraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreatureDisplayInfoExtras to fetch.
     */
    orderBy?: Enumerable<CreatureDisplayInfoExtraOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreatureDisplayInfoExtras.
     */
    cursor?: CreatureDisplayInfoExtraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreatureDisplayInfoExtras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreatureDisplayInfoExtras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreatureDisplayInfoExtras.
     */
    distinct?: Enumerable<CreatureDisplayInfoExtraScalarFieldEnum>
  }


  /**
   * CreatureDisplayInfoExtra findMany
   */
  export type CreatureDisplayInfoExtraFindManyArgs = {
    /**
     * Select specific fields to fetch from the CreatureDisplayInfoExtra
     */
    select?: CreatureDisplayInfoExtraSelect | null
    /**
     * Filter, which CreatureDisplayInfoExtras to fetch.
     */
    where?: CreatureDisplayInfoExtraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreatureDisplayInfoExtras to fetch.
     */
    orderBy?: Enumerable<CreatureDisplayInfoExtraOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreatureDisplayInfoExtras.
     */
    cursor?: CreatureDisplayInfoExtraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreatureDisplayInfoExtras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreatureDisplayInfoExtras.
     */
    skip?: number
    distinct?: Enumerable<CreatureDisplayInfoExtraScalarFieldEnum>
  }


  /**
   * CreatureDisplayInfoExtra create
   */
  export type CreatureDisplayInfoExtraCreateArgs = {
    /**
     * Select specific fields to fetch from the CreatureDisplayInfoExtra
     */
    select?: CreatureDisplayInfoExtraSelect | null
    /**
     * The data needed to create a CreatureDisplayInfoExtra.
     */
    data: XOR<CreatureDisplayInfoExtraCreateInput, CreatureDisplayInfoExtraUncheckedCreateInput>
  }


  /**
   * CreatureDisplayInfoExtra update
   */
  export type CreatureDisplayInfoExtraUpdateArgs = {
    /**
     * Select specific fields to fetch from the CreatureDisplayInfoExtra
     */
    select?: CreatureDisplayInfoExtraSelect | null
    /**
     * The data needed to update a CreatureDisplayInfoExtra.
     */
    data: XOR<CreatureDisplayInfoExtraUpdateInput, CreatureDisplayInfoExtraUncheckedUpdateInput>
    /**
     * Choose, which CreatureDisplayInfoExtra to update.
     */
    where: CreatureDisplayInfoExtraWhereUniqueInput
  }


  /**
   * CreatureDisplayInfoExtra updateMany
   */
  export type CreatureDisplayInfoExtraUpdateManyArgs = {
    /**
     * The data used to update CreatureDisplayInfoExtras.
     */
    data: XOR<CreatureDisplayInfoExtraUpdateManyMutationInput, CreatureDisplayInfoExtraUncheckedUpdateManyInput>
    /**
     * Filter which CreatureDisplayInfoExtras to update
     */
    where?: CreatureDisplayInfoExtraWhereInput
  }


  /**
   * CreatureDisplayInfoExtra upsert
   */
  export type CreatureDisplayInfoExtraUpsertArgs = {
    /**
     * Select specific fields to fetch from the CreatureDisplayInfoExtra
     */
    select?: CreatureDisplayInfoExtraSelect | null
    /**
     * The filter to search for the CreatureDisplayInfoExtra to update in case it exists.
     */
    where: CreatureDisplayInfoExtraWhereUniqueInput
    /**
     * In case the CreatureDisplayInfoExtra found by the `where` argument doesn't exist, create a new CreatureDisplayInfoExtra with this data.
     */
    create: XOR<CreatureDisplayInfoExtraCreateInput, CreatureDisplayInfoExtraUncheckedCreateInput>
    /**
     * In case the CreatureDisplayInfoExtra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreatureDisplayInfoExtraUpdateInput, CreatureDisplayInfoExtraUncheckedUpdateInput>
  }


  /**
   * CreatureDisplayInfoExtra delete
   */
  export type CreatureDisplayInfoExtraDeleteArgs = {
    /**
     * Select specific fields to fetch from the CreatureDisplayInfoExtra
     */
    select?: CreatureDisplayInfoExtraSelect | null
    /**
     * Filter which CreatureDisplayInfoExtra to delete.
     */
    where: CreatureDisplayInfoExtraWhereUniqueInput
  }


  /**
   * CreatureDisplayInfoExtra deleteMany
   */
  export type CreatureDisplayInfoExtraDeleteManyArgs = {
    /**
     * Filter which CreatureDisplayInfoExtras to delete
     */
    where?: CreatureDisplayInfoExtraWhereInput
  }


  /**
   * CreatureDisplayInfoExtra without action
   */
  export type CreatureDisplayInfoExtraArgs = {
    /**
     * Select specific fields to fetch from the CreatureDisplayInfoExtra
     */
    select?: CreatureDisplayInfoExtraSelect | null
  }



  /**
   * Model Light
   */


  export type AggregateLight = {
    _count: LightCountAggregateOutputType | null
    _avg: LightAvgAggregateOutputType | null
    _sum: LightSumAggregateOutputType | null
    _min: LightMinAggregateOutputType | null
    _max: LightMaxAggregateOutputType | null
  }

  export type LightAvgAggregateOutputType = {
    id: number | null
    continentId: number | null
    x: number | null
    y: number | null
    z: number | null
    falloffStart: number | null
    falloffEnd: number | null
    paramStandardId: number | null
    paramUnderwaterId: number | null
    paramSunsetId: number | null
    paramOtherId: number | null
    paramDeathId: number | null
  }

  export type LightSumAggregateOutputType = {
    id: number | null
    continentId: number | null
    x: number | null
    y: number | null
    z: number | null
    falloffStart: number | null
    falloffEnd: number | null
    paramStandardId: number | null
    paramUnderwaterId: number | null
    paramSunsetId: number | null
    paramOtherId: number | null
    paramDeathId: number | null
  }

  export type LightMinAggregateOutputType = {
    id: number | null
    continentId: number | null
    x: number | null
    y: number | null
    z: number | null
    falloffStart: number | null
    falloffEnd: number | null
    paramStandardId: number | null
    paramUnderwaterId: number | null
    paramSunsetId: number | null
    paramOtherId: number | null
    paramDeathId: number | null
  }

  export type LightMaxAggregateOutputType = {
    id: number | null
    continentId: number | null
    x: number | null
    y: number | null
    z: number | null
    falloffStart: number | null
    falloffEnd: number | null
    paramStandardId: number | null
    paramUnderwaterId: number | null
    paramSunsetId: number | null
    paramOtherId: number | null
    paramDeathId: number | null
  }

  export type LightCountAggregateOutputType = {
    id: number
    continentId: number
    x: number
    y: number
    z: number
    falloffStart: number
    falloffEnd: number
    paramStandardId: number
    paramUnderwaterId: number
    paramSunsetId: number
    paramOtherId: number
    paramDeathId: number
    _all: number
  }


  export type LightAvgAggregateInputType = {
    id?: true
    continentId?: true
    x?: true
    y?: true
    z?: true
    falloffStart?: true
    falloffEnd?: true
    paramStandardId?: true
    paramUnderwaterId?: true
    paramSunsetId?: true
    paramOtherId?: true
    paramDeathId?: true
  }

  export type LightSumAggregateInputType = {
    id?: true
    continentId?: true
    x?: true
    y?: true
    z?: true
    falloffStart?: true
    falloffEnd?: true
    paramStandardId?: true
    paramUnderwaterId?: true
    paramSunsetId?: true
    paramOtherId?: true
    paramDeathId?: true
  }

  export type LightMinAggregateInputType = {
    id?: true
    continentId?: true
    x?: true
    y?: true
    z?: true
    falloffStart?: true
    falloffEnd?: true
    paramStandardId?: true
    paramUnderwaterId?: true
    paramSunsetId?: true
    paramOtherId?: true
    paramDeathId?: true
  }

  export type LightMaxAggregateInputType = {
    id?: true
    continentId?: true
    x?: true
    y?: true
    z?: true
    falloffStart?: true
    falloffEnd?: true
    paramStandardId?: true
    paramUnderwaterId?: true
    paramSunsetId?: true
    paramOtherId?: true
    paramDeathId?: true
  }

  export type LightCountAggregateInputType = {
    id?: true
    continentId?: true
    x?: true
    y?: true
    z?: true
    falloffStart?: true
    falloffEnd?: true
    paramStandardId?: true
    paramUnderwaterId?: true
    paramSunsetId?: true
    paramOtherId?: true
    paramDeathId?: true
    _all?: true
  }

  export type LightAggregateArgs = {
    /**
     * Filter which Light to aggregate.
     */
    where?: LightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lights to fetch.
     */
    orderBy?: Enumerable<LightOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lights
    **/
    _count?: true | LightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LightAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LightSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LightMaxAggregateInputType
  }

  export type GetLightAggregateType<T extends LightAggregateArgs> = {
        [P in keyof T & keyof AggregateLight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLight[P]>
      : GetScalarType<T[P], AggregateLight[P]>
  }




  export type LightGroupByArgs = {
    where?: LightWhereInput
    orderBy?: Enumerable<LightOrderByWithAggregationInput>
    by: LightScalarFieldEnum[]
    having?: LightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LightCountAggregateInputType | true
    _avg?: LightAvgAggregateInputType
    _sum?: LightSumAggregateInputType
    _min?: LightMinAggregateInputType
    _max?: LightMaxAggregateInputType
  }


  export type LightGroupByOutputType = {
    id: number
    continentId: number
    x: number
    y: number
    z: number
    falloffStart: number
    falloffEnd: number
    paramStandardId: number
    paramUnderwaterId: number
    paramSunsetId: number
    paramOtherId: number
    paramDeathId: number
    _count: LightCountAggregateOutputType | null
    _avg: LightAvgAggregateOutputType | null
    _sum: LightSumAggregateOutputType | null
    _min: LightMinAggregateOutputType | null
    _max: LightMaxAggregateOutputType | null
  }

  type GetLightGroupByPayload<T extends LightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<LightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LightGroupByOutputType[P]>
            : GetScalarType<T[P], LightGroupByOutputType[P]>
        }
      >
    >


  export type LightSelect = {
    id?: boolean
    continentId?: boolean
    continent?: boolean | ContinentArgs
    x?: boolean
    y?: boolean
    z?: boolean
    falloffStart?: boolean
    falloffEnd?: boolean
    paramStandardId?: boolean
    paramStandard?: boolean | LightParamsArgs
    paramUnderwaterId?: boolean
    paramUnderwater?: boolean | LightParamsArgs
    paramSunsetId?: boolean
    paramSunset?: boolean | LightParamsArgs
    paramOtherId?: boolean
    paramOther?: boolean | LightParamsArgs
    paramDeathId?: boolean
    paramDeath?: boolean | LightParamsArgs
    AreaTable?: boolean | Light$AreaTableArgs
    _count?: boolean | LightCountOutputTypeArgs
  }


  export type LightInclude = {
    continent?: boolean | ContinentArgs
    paramStandard?: boolean | LightParamsArgs
    paramUnderwater?: boolean | LightParamsArgs
    paramSunset?: boolean | LightParamsArgs
    paramOther?: boolean | LightParamsArgs
    paramDeath?: boolean | LightParamsArgs
    AreaTable?: boolean | Light$AreaTableArgs
    _count?: boolean | LightCountOutputTypeArgs
  }

  export type LightGetPayload<S extends boolean | null | undefined | LightArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Light :
    S extends undefined ? never :
    S extends { include: any } & (LightArgs | LightFindManyArgs)
    ? Light  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'continent' ? ContinentGetPayload<S['include'][P]> :
        P extends 'paramStandard' ? LightParamsGetPayload<S['include'][P]> :
        P extends 'paramUnderwater' ? LightParamsGetPayload<S['include'][P]> :
        P extends 'paramSunset' ? LightParamsGetPayload<S['include'][P]> :
        P extends 'paramOther' ? LightParamsGetPayload<S['include'][P]> :
        P extends 'paramDeath' ? LightParamsGetPayload<S['include'][P]> :
        P extends 'AreaTable' ? Array < AreaTableGetPayload<S['include'][P]>>  :
        P extends '_count' ? LightCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (LightArgs | LightFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'continent' ? ContinentGetPayload<S['select'][P]> :
        P extends 'paramStandard' ? LightParamsGetPayload<S['select'][P]> :
        P extends 'paramUnderwater' ? LightParamsGetPayload<S['select'][P]> :
        P extends 'paramSunset' ? LightParamsGetPayload<S['select'][P]> :
        P extends 'paramOther' ? LightParamsGetPayload<S['select'][P]> :
        P extends 'paramDeath' ? LightParamsGetPayload<S['select'][P]> :
        P extends 'AreaTable' ? Array < AreaTableGetPayload<S['select'][P]>>  :
        P extends '_count' ? LightCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Light ? Light[P] : never
  } 
      : Light


  type LightCountArgs = 
    Omit<LightFindManyArgs, 'select' | 'include'> & {
      select?: LightCountAggregateInputType | true
    }

  export interface LightDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Light that matches the filter.
     * @param {LightFindUniqueArgs} args - Arguments to find a Light
     * @example
     * // Get one Light
     * const light = await prisma.light.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LightFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LightFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Light'> extends True ? Prisma__LightClient<LightGetPayload<T>> : Prisma__LightClient<LightGetPayload<T> | null, null>

    /**
     * Find one Light that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LightFindUniqueOrThrowArgs} args - Arguments to find a Light
     * @example
     * // Get one Light
     * const light = await prisma.light.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LightFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, LightFindUniqueOrThrowArgs>
    ): Prisma__LightClient<LightGetPayload<T>>

    /**
     * Find the first Light that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LightFindFirstArgs} args - Arguments to find a Light
     * @example
     * // Get one Light
     * const light = await prisma.light.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LightFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LightFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Light'> extends True ? Prisma__LightClient<LightGetPayload<T>> : Prisma__LightClient<LightGetPayload<T> | null, null>

    /**
     * Find the first Light that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LightFindFirstOrThrowArgs} args - Arguments to find a Light
     * @example
     * // Get one Light
     * const light = await prisma.light.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LightFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LightFindFirstOrThrowArgs>
    ): Prisma__LightClient<LightGetPayload<T>>

    /**
     * Find zero or more Lights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LightFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lights
     * const lights = await prisma.light.findMany()
     * 
     * // Get first 10 Lights
     * const lights = await prisma.light.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lightWithIdOnly = await prisma.light.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LightFindManyArgs>(
      args?: SelectSubset<T, LightFindManyArgs>
    ): Prisma.PrismaPromise<Array<LightGetPayload<T>>>

    /**
     * Create a Light.
     * @param {LightCreateArgs} args - Arguments to create a Light.
     * @example
     * // Create one Light
     * const Light = await prisma.light.create({
     *   data: {
     *     // ... data to create a Light
     *   }
     * })
     * 
    **/
    create<T extends LightCreateArgs>(
      args: SelectSubset<T, LightCreateArgs>
    ): Prisma__LightClient<LightGetPayload<T>>

    /**
     * Delete a Light.
     * @param {LightDeleteArgs} args - Arguments to delete one Light.
     * @example
     * // Delete one Light
     * const Light = await prisma.light.delete({
     *   where: {
     *     // ... filter to delete one Light
     *   }
     * })
     * 
    **/
    delete<T extends LightDeleteArgs>(
      args: SelectSubset<T, LightDeleteArgs>
    ): Prisma__LightClient<LightGetPayload<T>>

    /**
     * Update one Light.
     * @param {LightUpdateArgs} args - Arguments to update one Light.
     * @example
     * // Update one Light
     * const light = await prisma.light.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LightUpdateArgs>(
      args: SelectSubset<T, LightUpdateArgs>
    ): Prisma__LightClient<LightGetPayload<T>>

    /**
     * Delete zero or more Lights.
     * @param {LightDeleteManyArgs} args - Arguments to filter Lights to delete.
     * @example
     * // Delete a few Lights
     * const { count } = await prisma.light.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LightDeleteManyArgs>(
      args?: SelectSubset<T, LightDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lights
     * const light = await prisma.light.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LightUpdateManyArgs>(
      args: SelectSubset<T, LightUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Light.
     * @param {LightUpsertArgs} args - Arguments to update or create a Light.
     * @example
     * // Update or create a Light
     * const light = await prisma.light.upsert({
     *   create: {
     *     // ... data to create a Light
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Light we want to update
     *   }
     * })
    **/
    upsert<T extends LightUpsertArgs>(
      args: SelectSubset<T, LightUpsertArgs>
    ): Prisma__LightClient<LightGetPayload<T>>

    /**
     * Count the number of Lights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LightCountArgs} args - Arguments to filter Lights to count.
     * @example
     * // Count the number of Lights
     * const count = await prisma.light.count({
     *   where: {
     *     // ... the filter for the Lights we want to count
     *   }
     * })
    **/
    count<T extends LightCountArgs>(
      args?: Subset<T, LightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Light.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LightAggregateArgs>(args: Subset<T, LightAggregateArgs>): Prisma.PrismaPromise<GetLightAggregateType<T>>

    /**
     * Group by Light.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LightGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LightGroupByArgs['orderBy'] }
        : { orderBy?: LightGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Light.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LightClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    continent<T extends ContinentArgs= {}>(args?: Subset<T, ContinentArgs>): Prisma__ContinentClient<ContinentGetPayload<T> | Null>;

    paramStandard<T extends LightParamsArgs= {}>(args?: Subset<T, LightParamsArgs>): Prisma__LightParamsClient<LightParamsGetPayload<T> | Null>;

    paramUnderwater<T extends LightParamsArgs= {}>(args?: Subset<T, LightParamsArgs>): Prisma__LightParamsClient<LightParamsGetPayload<T> | Null>;

    paramSunset<T extends LightParamsArgs= {}>(args?: Subset<T, LightParamsArgs>): Prisma__LightParamsClient<LightParamsGetPayload<T> | Null>;

    paramOther<T extends LightParamsArgs= {}>(args?: Subset<T, LightParamsArgs>): Prisma__LightParamsClient<LightParamsGetPayload<T> | Null>;

    paramDeath<T extends LightParamsArgs= {}>(args?: Subset<T, LightParamsArgs>): Prisma__LightParamsClient<LightParamsGetPayload<T> | Null>;

    AreaTable<T extends Light$AreaTableArgs= {}>(args?: Subset<T, Light$AreaTableArgs>): Prisma.PrismaPromise<Array<AreaTableGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Light base type for findUnique actions
   */
  export type LightFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Light
     */
    select?: LightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightInclude | null
    /**
     * Filter, which Light to fetch.
     */
    where: LightWhereUniqueInput
  }

  /**
   * Light findUnique
   */
  export interface LightFindUniqueArgs extends LightFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Light findUniqueOrThrow
   */
  export type LightFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Light
     */
    select?: LightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightInclude | null
    /**
     * Filter, which Light to fetch.
     */
    where: LightWhereUniqueInput
  }


  /**
   * Light base type for findFirst actions
   */
  export type LightFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Light
     */
    select?: LightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightInclude | null
    /**
     * Filter, which Light to fetch.
     */
    where?: LightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lights to fetch.
     */
    orderBy?: Enumerable<LightOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lights.
     */
    cursor?: LightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lights.
     */
    distinct?: Enumerable<LightScalarFieldEnum>
  }

  /**
   * Light findFirst
   */
  export interface LightFindFirstArgs extends LightFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Light findFirstOrThrow
   */
  export type LightFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Light
     */
    select?: LightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightInclude | null
    /**
     * Filter, which Light to fetch.
     */
    where?: LightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lights to fetch.
     */
    orderBy?: Enumerable<LightOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lights.
     */
    cursor?: LightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lights.
     */
    distinct?: Enumerable<LightScalarFieldEnum>
  }


  /**
   * Light findMany
   */
  export type LightFindManyArgs = {
    /**
     * Select specific fields to fetch from the Light
     */
    select?: LightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightInclude | null
    /**
     * Filter, which Lights to fetch.
     */
    where?: LightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lights to fetch.
     */
    orderBy?: Enumerable<LightOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lights.
     */
    cursor?: LightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lights.
     */
    skip?: number
    distinct?: Enumerable<LightScalarFieldEnum>
  }


  /**
   * Light create
   */
  export type LightCreateArgs = {
    /**
     * Select specific fields to fetch from the Light
     */
    select?: LightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightInclude | null
    /**
     * The data needed to create a Light.
     */
    data: XOR<LightCreateInput, LightUncheckedCreateInput>
  }


  /**
   * Light update
   */
  export type LightUpdateArgs = {
    /**
     * Select specific fields to fetch from the Light
     */
    select?: LightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightInclude | null
    /**
     * The data needed to update a Light.
     */
    data: XOR<LightUpdateInput, LightUncheckedUpdateInput>
    /**
     * Choose, which Light to update.
     */
    where: LightWhereUniqueInput
  }


  /**
   * Light updateMany
   */
  export type LightUpdateManyArgs = {
    /**
     * The data used to update Lights.
     */
    data: XOR<LightUpdateManyMutationInput, LightUncheckedUpdateManyInput>
    /**
     * Filter which Lights to update
     */
    where?: LightWhereInput
  }


  /**
   * Light upsert
   */
  export type LightUpsertArgs = {
    /**
     * Select specific fields to fetch from the Light
     */
    select?: LightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightInclude | null
    /**
     * The filter to search for the Light to update in case it exists.
     */
    where: LightWhereUniqueInput
    /**
     * In case the Light found by the `where` argument doesn't exist, create a new Light with this data.
     */
    create: XOR<LightCreateInput, LightUncheckedCreateInput>
    /**
     * In case the Light was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LightUpdateInput, LightUncheckedUpdateInput>
  }


  /**
   * Light delete
   */
  export type LightDeleteArgs = {
    /**
     * Select specific fields to fetch from the Light
     */
    select?: LightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightInclude | null
    /**
     * Filter which Light to delete.
     */
    where: LightWhereUniqueInput
  }


  /**
   * Light deleteMany
   */
  export type LightDeleteManyArgs = {
    /**
     * Filter which Lights to delete
     */
    where?: LightWhereInput
  }


  /**
   * Light.AreaTable
   */
  export type Light$AreaTableArgs = {
    /**
     * Select specific fields to fetch from the AreaTable
     */
    select?: AreaTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AreaTableInclude | null
    where?: AreaTableWhereInput
    orderBy?: Enumerable<AreaTableOrderByWithRelationInput>
    cursor?: AreaTableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AreaTableScalarFieldEnum>
  }


  /**
   * Light without action
   */
  export type LightArgs = {
    /**
     * Select specific fields to fetch from the Light
     */
    select?: LightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightInclude | null
  }



  /**
   * Model LightParams
   */


  export type AggregateLightParams = {
    _count: LightParamsCountAggregateOutputType | null
    _avg: LightParamsAvgAggregateOutputType | null
    _sum: LightParamsSumAggregateOutputType | null
    _min: LightParamsMinAggregateOutputType | null
    _max: LightParamsMaxAggregateOutputType | null
  }

  export type LightParamsAvgAggregateOutputType = {
    id: number | null
    highlightSky: number | null
    lightSkyboxId: number | null
    glow: number | null
    waterShallowAlpha: number | null
    waterDeepAlpha: number | null
    oceanShallowAlpha: number | null
    oceanDeepAlpha: number | null
    flags: number | null
  }

  export type LightParamsSumAggregateOutputType = {
    id: number | null
    highlightSky: number | null
    lightSkyboxId: number | null
    glow: number | null
    waterShallowAlpha: number | null
    waterDeepAlpha: number | null
    oceanShallowAlpha: number | null
    oceanDeepAlpha: number | null
    flags: number | null
  }

  export type LightParamsMinAggregateOutputType = {
    id: number | null
    highlightSky: number | null
    lightSkyboxId: number | null
    glow: number | null
    waterShallowAlpha: number | null
    waterDeepAlpha: number | null
    oceanShallowAlpha: number | null
    oceanDeepAlpha: number | null
    flags: number | null
  }

  export type LightParamsMaxAggregateOutputType = {
    id: number | null
    highlightSky: number | null
    lightSkyboxId: number | null
    glow: number | null
    waterShallowAlpha: number | null
    waterDeepAlpha: number | null
    oceanShallowAlpha: number | null
    oceanDeepAlpha: number | null
    flags: number | null
  }

  export type LightParamsCountAggregateOutputType = {
    id: number
    highlightSky: number
    lightSkyboxId: number
    glow: number
    waterShallowAlpha: number
    waterDeepAlpha: number
    oceanShallowAlpha: number
    oceanDeepAlpha: number
    flags: number
    _all: number
  }


  export type LightParamsAvgAggregateInputType = {
    id?: true
    highlightSky?: true
    lightSkyboxId?: true
    glow?: true
    waterShallowAlpha?: true
    waterDeepAlpha?: true
    oceanShallowAlpha?: true
    oceanDeepAlpha?: true
    flags?: true
  }

  export type LightParamsSumAggregateInputType = {
    id?: true
    highlightSky?: true
    lightSkyboxId?: true
    glow?: true
    waterShallowAlpha?: true
    waterDeepAlpha?: true
    oceanShallowAlpha?: true
    oceanDeepAlpha?: true
    flags?: true
  }

  export type LightParamsMinAggregateInputType = {
    id?: true
    highlightSky?: true
    lightSkyboxId?: true
    glow?: true
    waterShallowAlpha?: true
    waterDeepAlpha?: true
    oceanShallowAlpha?: true
    oceanDeepAlpha?: true
    flags?: true
  }

  export type LightParamsMaxAggregateInputType = {
    id?: true
    highlightSky?: true
    lightSkyboxId?: true
    glow?: true
    waterShallowAlpha?: true
    waterDeepAlpha?: true
    oceanShallowAlpha?: true
    oceanDeepAlpha?: true
    flags?: true
  }

  export type LightParamsCountAggregateInputType = {
    id?: true
    highlightSky?: true
    lightSkyboxId?: true
    glow?: true
    waterShallowAlpha?: true
    waterDeepAlpha?: true
    oceanShallowAlpha?: true
    oceanDeepAlpha?: true
    flags?: true
    _all?: true
  }

  export type LightParamsAggregateArgs = {
    /**
     * Filter which LightParams to aggregate.
     */
    where?: LightParamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LightParams to fetch.
     */
    orderBy?: Enumerable<LightParamsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LightParamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LightParams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LightParams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LightParams
    **/
    _count?: true | LightParamsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LightParamsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LightParamsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LightParamsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LightParamsMaxAggregateInputType
  }

  export type GetLightParamsAggregateType<T extends LightParamsAggregateArgs> = {
        [P in keyof T & keyof AggregateLightParams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLightParams[P]>
      : GetScalarType<T[P], AggregateLightParams[P]>
  }




  export type LightParamsGroupByArgs = {
    where?: LightParamsWhereInput
    orderBy?: Enumerable<LightParamsOrderByWithAggregationInput>
    by: LightParamsScalarFieldEnum[]
    having?: LightParamsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LightParamsCountAggregateInputType | true
    _avg?: LightParamsAvgAggregateInputType
    _sum?: LightParamsSumAggregateInputType
    _min?: LightParamsMinAggregateInputType
    _max?: LightParamsMaxAggregateInputType
  }


  export type LightParamsGroupByOutputType = {
    id: number
    highlightSky: number
    lightSkyboxId: number
    glow: number
    waterShallowAlpha: number
    waterDeepAlpha: number
    oceanShallowAlpha: number
    oceanDeepAlpha: number
    flags: number
    _count: LightParamsCountAggregateOutputType | null
    _avg: LightParamsAvgAggregateOutputType | null
    _sum: LightParamsSumAggregateOutputType | null
    _min: LightParamsMinAggregateOutputType | null
    _max: LightParamsMaxAggregateOutputType | null
  }

  type GetLightParamsGroupByPayload<T extends LightParamsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<LightParamsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LightParamsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LightParamsGroupByOutputType[P]>
            : GetScalarType<T[P], LightParamsGroupByOutputType[P]>
        }
      >
    >


  export type LightParamsSelect = {
    id?: boolean
    highlightSky?: boolean
    lightSkyboxId?: boolean
    lightSkybox?: boolean | LightSkyboxArgs
    glow?: boolean
    waterShallowAlpha?: boolean
    waterDeepAlpha?: boolean
    oceanShallowAlpha?: boolean
    oceanDeepAlpha?: boolean
    flags?: boolean
    standatrdLight?: boolean | LightParams$standatrdLightArgs
    underwaterLight?: boolean | LightParams$underwaterLightArgs
    sunsetLight?: boolean | LightParams$sunsetLightArgs
    otherLight?: boolean | LightParams$otherLightArgs
    deathLight?: boolean | LightParams$deathLightArgs
    _count?: boolean | LightParamsCountOutputTypeArgs
  }


  export type LightParamsInclude = {
    lightSkybox?: boolean | LightSkyboxArgs
    standatrdLight?: boolean | LightParams$standatrdLightArgs
    underwaterLight?: boolean | LightParams$underwaterLightArgs
    sunsetLight?: boolean | LightParams$sunsetLightArgs
    otherLight?: boolean | LightParams$otherLightArgs
    deathLight?: boolean | LightParams$deathLightArgs
    _count?: boolean | LightParamsCountOutputTypeArgs
  }

  export type LightParamsGetPayload<S extends boolean | null | undefined | LightParamsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? LightParams :
    S extends undefined ? never :
    S extends { include: any } & (LightParamsArgs | LightParamsFindManyArgs)
    ? LightParams  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'lightSkybox' ? LightSkyboxGetPayload<S['include'][P]> :
        P extends 'standatrdLight' ? Array < LightGetPayload<S['include'][P]>>  :
        P extends 'underwaterLight' ? Array < LightGetPayload<S['include'][P]>>  :
        P extends 'sunsetLight' ? Array < LightGetPayload<S['include'][P]>>  :
        P extends 'otherLight' ? Array < LightGetPayload<S['include'][P]>>  :
        P extends 'deathLight' ? Array < LightGetPayload<S['include'][P]>>  :
        P extends '_count' ? LightParamsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (LightParamsArgs | LightParamsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'lightSkybox' ? LightSkyboxGetPayload<S['select'][P]> :
        P extends 'standatrdLight' ? Array < LightGetPayload<S['select'][P]>>  :
        P extends 'underwaterLight' ? Array < LightGetPayload<S['select'][P]>>  :
        P extends 'sunsetLight' ? Array < LightGetPayload<S['select'][P]>>  :
        P extends 'otherLight' ? Array < LightGetPayload<S['select'][P]>>  :
        P extends 'deathLight' ? Array < LightGetPayload<S['select'][P]>>  :
        P extends '_count' ? LightParamsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof LightParams ? LightParams[P] : never
  } 
      : LightParams


  type LightParamsCountArgs = 
    Omit<LightParamsFindManyArgs, 'select' | 'include'> & {
      select?: LightParamsCountAggregateInputType | true
    }

  export interface LightParamsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one LightParams that matches the filter.
     * @param {LightParamsFindUniqueArgs} args - Arguments to find a LightParams
     * @example
     * // Get one LightParams
     * const lightParams = await prisma.lightParams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LightParamsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LightParamsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'LightParams'> extends True ? Prisma__LightParamsClient<LightParamsGetPayload<T>> : Prisma__LightParamsClient<LightParamsGetPayload<T> | null, null>

    /**
     * Find one LightParams that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LightParamsFindUniqueOrThrowArgs} args - Arguments to find a LightParams
     * @example
     * // Get one LightParams
     * const lightParams = await prisma.lightParams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LightParamsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, LightParamsFindUniqueOrThrowArgs>
    ): Prisma__LightParamsClient<LightParamsGetPayload<T>>

    /**
     * Find the first LightParams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LightParamsFindFirstArgs} args - Arguments to find a LightParams
     * @example
     * // Get one LightParams
     * const lightParams = await prisma.lightParams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LightParamsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LightParamsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'LightParams'> extends True ? Prisma__LightParamsClient<LightParamsGetPayload<T>> : Prisma__LightParamsClient<LightParamsGetPayload<T> | null, null>

    /**
     * Find the first LightParams that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LightParamsFindFirstOrThrowArgs} args - Arguments to find a LightParams
     * @example
     * // Get one LightParams
     * const lightParams = await prisma.lightParams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LightParamsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LightParamsFindFirstOrThrowArgs>
    ): Prisma__LightParamsClient<LightParamsGetPayload<T>>

    /**
     * Find zero or more LightParams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LightParamsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LightParams
     * const lightParams = await prisma.lightParams.findMany()
     * 
     * // Get first 10 LightParams
     * const lightParams = await prisma.lightParams.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lightParamsWithIdOnly = await prisma.lightParams.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LightParamsFindManyArgs>(
      args?: SelectSubset<T, LightParamsFindManyArgs>
    ): Prisma.PrismaPromise<Array<LightParamsGetPayload<T>>>

    /**
     * Create a LightParams.
     * @param {LightParamsCreateArgs} args - Arguments to create a LightParams.
     * @example
     * // Create one LightParams
     * const LightParams = await prisma.lightParams.create({
     *   data: {
     *     // ... data to create a LightParams
     *   }
     * })
     * 
    **/
    create<T extends LightParamsCreateArgs>(
      args: SelectSubset<T, LightParamsCreateArgs>
    ): Prisma__LightParamsClient<LightParamsGetPayload<T>>

    /**
     * Delete a LightParams.
     * @param {LightParamsDeleteArgs} args - Arguments to delete one LightParams.
     * @example
     * // Delete one LightParams
     * const LightParams = await prisma.lightParams.delete({
     *   where: {
     *     // ... filter to delete one LightParams
     *   }
     * })
     * 
    **/
    delete<T extends LightParamsDeleteArgs>(
      args: SelectSubset<T, LightParamsDeleteArgs>
    ): Prisma__LightParamsClient<LightParamsGetPayload<T>>

    /**
     * Update one LightParams.
     * @param {LightParamsUpdateArgs} args - Arguments to update one LightParams.
     * @example
     * // Update one LightParams
     * const lightParams = await prisma.lightParams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LightParamsUpdateArgs>(
      args: SelectSubset<T, LightParamsUpdateArgs>
    ): Prisma__LightParamsClient<LightParamsGetPayload<T>>

    /**
     * Delete zero or more LightParams.
     * @param {LightParamsDeleteManyArgs} args - Arguments to filter LightParams to delete.
     * @example
     * // Delete a few LightParams
     * const { count } = await prisma.lightParams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LightParamsDeleteManyArgs>(
      args?: SelectSubset<T, LightParamsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LightParams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LightParamsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LightParams
     * const lightParams = await prisma.lightParams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LightParamsUpdateManyArgs>(
      args: SelectSubset<T, LightParamsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LightParams.
     * @param {LightParamsUpsertArgs} args - Arguments to update or create a LightParams.
     * @example
     * // Update or create a LightParams
     * const lightParams = await prisma.lightParams.upsert({
     *   create: {
     *     // ... data to create a LightParams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LightParams we want to update
     *   }
     * })
    **/
    upsert<T extends LightParamsUpsertArgs>(
      args: SelectSubset<T, LightParamsUpsertArgs>
    ): Prisma__LightParamsClient<LightParamsGetPayload<T>>

    /**
     * Count the number of LightParams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LightParamsCountArgs} args - Arguments to filter LightParams to count.
     * @example
     * // Count the number of LightParams
     * const count = await prisma.lightParams.count({
     *   where: {
     *     // ... the filter for the LightParams we want to count
     *   }
     * })
    **/
    count<T extends LightParamsCountArgs>(
      args?: Subset<T, LightParamsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LightParamsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LightParams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LightParamsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LightParamsAggregateArgs>(args: Subset<T, LightParamsAggregateArgs>): Prisma.PrismaPromise<GetLightParamsAggregateType<T>>

    /**
     * Group by LightParams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LightParamsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LightParamsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LightParamsGroupByArgs['orderBy'] }
        : { orderBy?: LightParamsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LightParamsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLightParamsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for LightParams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LightParamsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    lightSkybox<T extends LightSkyboxArgs= {}>(args?: Subset<T, LightSkyboxArgs>): Prisma__LightSkyboxClient<LightSkyboxGetPayload<T> | Null>;

    standatrdLight<T extends LightParams$standatrdLightArgs= {}>(args?: Subset<T, LightParams$standatrdLightArgs>): Prisma.PrismaPromise<Array<LightGetPayload<T>>| Null>;

    underwaterLight<T extends LightParams$underwaterLightArgs= {}>(args?: Subset<T, LightParams$underwaterLightArgs>): Prisma.PrismaPromise<Array<LightGetPayload<T>>| Null>;

    sunsetLight<T extends LightParams$sunsetLightArgs= {}>(args?: Subset<T, LightParams$sunsetLightArgs>): Prisma.PrismaPromise<Array<LightGetPayload<T>>| Null>;

    otherLight<T extends LightParams$otherLightArgs= {}>(args?: Subset<T, LightParams$otherLightArgs>): Prisma.PrismaPromise<Array<LightGetPayload<T>>| Null>;

    deathLight<T extends LightParams$deathLightArgs= {}>(args?: Subset<T, LightParams$deathLightArgs>): Prisma.PrismaPromise<Array<LightGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * LightParams base type for findUnique actions
   */
  export type LightParamsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the LightParams
     */
    select?: LightParamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightParamsInclude | null
    /**
     * Filter, which LightParams to fetch.
     */
    where: LightParamsWhereUniqueInput
  }

  /**
   * LightParams findUnique
   */
  export interface LightParamsFindUniqueArgs extends LightParamsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * LightParams findUniqueOrThrow
   */
  export type LightParamsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the LightParams
     */
    select?: LightParamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightParamsInclude | null
    /**
     * Filter, which LightParams to fetch.
     */
    where: LightParamsWhereUniqueInput
  }


  /**
   * LightParams base type for findFirst actions
   */
  export type LightParamsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the LightParams
     */
    select?: LightParamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightParamsInclude | null
    /**
     * Filter, which LightParams to fetch.
     */
    where?: LightParamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LightParams to fetch.
     */
    orderBy?: Enumerable<LightParamsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LightParams.
     */
    cursor?: LightParamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LightParams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LightParams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LightParams.
     */
    distinct?: Enumerable<LightParamsScalarFieldEnum>
  }

  /**
   * LightParams findFirst
   */
  export interface LightParamsFindFirstArgs extends LightParamsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * LightParams findFirstOrThrow
   */
  export type LightParamsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the LightParams
     */
    select?: LightParamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightParamsInclude | null
    /**
     * Filter, which LightParams to fetch.
     */
    where?: LightParamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LightParams to fetch.
     */
    orderBy?: Enumerable<LightParamsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LightParams.
     */
    cursor?: LightParamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LightParams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LightParams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LightParams.
     */
    distinct?: Enumerable<LightParamsScalarFieldEnum>
  }


  /**
   * LightParams findMany
   */
  export type LightParamsFindManyArgs = {
    /**
     * Select specific fields to fetch from the LightParams
     */
    select?: LightParamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightParamsInclude | null
    /**
     * Filter, which LightParams to fetch.
     */
    where?: LightParamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LightParams to fetch.
     */
    orderBy?: Enumerable<LightParamsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LightParams.
     */
    cursor?: LightParamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LightParams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LightParams.
     */
    skip?: number
    distinct?: Enumerable<LightParamsScalarFieldEnum>
  }


  /**
   * LightParams create
   */
  export type LightParamsCreateArgs = {
    /**
     * Select specific fields to fetch from the LightParams
     */
    select?: LightParamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightParamsInclude | null
    /**
     * The data needed to create a LightParams.
     */
    data: XOR<LightParamsCreateInput, LightParamsUncheckedCreateInput>
  }


  /**
   * LightParams update
   */
  export type LightParamsUpdateArgs = {
    /**
     * Select specific fields to fetch from the LightParams
     */
    select?: LightParamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightParamsInclude | null
    /**
     * The data needed to update a LightParams.
     */
    data: XOR<LightParamsUpdateInput, LightParamsUncheckedUpdateInput>
    /**
     * Choose, which LightParams to update.
     */
    where: LightParamsWhereUniqueInput
  }


  /**
   * LightParams updateMany
   */
  export type LightParamsUpdateManyArgs = {
    /**
     * The data used to update LightParams.
     */
    data: XOR<LightParamsUpdateManyMutationInput, LightParamsUncheckedUpdateManyInput>
    /**
     * Filter which LightParams to update
     */
    where?: LightParamsWhereInput
  }


  /**
   * LightParams upsert
   */
  export type LightParamsUpsertArgs = {
    /**
     * Select specific fields to fetch from the LightParams
     */
    select?: LightParamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightParamsInclude | null
    /**
     * The filter to search for the LightParams to update in case it exists.
     */
    where: LightParamsWhereUniqueInput
    /**
     * In case the LightParams found by the `where` argument doesn't exist, create a new LightParams with this data.
     */
    create: XOR<LightParamsCreateInput, LightParamsUncheckedCreateInput>
    /**
     * In case the LightParams was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LightParamsUpdateInput, LightParamsUncheckedUpdateInput>
  }


  /**
   * LightParams delete
   */
  export type LightParamsDeleteArgs = {
    /**
     * Select specific fields to fetch from the LightParams
     */
    select?: LightParamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightParamsInclude | null
    /**
     * Filter which LightParams to delete.
     */
    where: LightParamsWhereUniqueInput
  }


  /**
   * LightParams deleteMany
   */
  export type LightParamsDeleteManyArgs = {
    /**
     * Filter which LightParams to delete
     */
    where?: LightParamsWhereInput
  }


  /**
   * LightParams.standatrdLight
   */
  export type LightParams$standatrdLightArgs = {
    /**
     * Select specific fields to fetch from the Light
     */
    select?: LightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightInclude | null
    where?: LightWhereInput
    orderBy?: Enumerable<LightOrderByWithRelationInput>
    cursor?: LightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<LightScalarFieldEnum>
  }


  /**
   * LightParams.underwaterLight
   */
  export type LightParams$underwaterLightArgs = {
    /**
     * Select specific fields to fetch from the Light
     */
    select?: LightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightInclude | null
    where?: LightWhereInput
    orderBy?: Enumerable<LightOrderByWithRelationInput>
    cursor?: LightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<LightScalarFieldEnum>
  }


  /**
   * LightParams.sunsetLight
   */
  export type LightParams$sunsetLightArgs = {
    /**
     * Select specific fields to fetch from the Light
     */
    select?: LightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightInclude | null
    where?: LightWhereInput
    orderBy?: Enumerable<LightOrderByWithRelationInput>
    cursor?: LightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<LightScalarFieldEnum>
  }


  /**
   * LightParams.otherLight
   */
  export type LightParams$otherLightArgs = {
    /**
     * Select specific fields to fetch from the Light
     */
    select?: LightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightInclude | null
    where?: LightWhereInput
    orderBy?: Enumerable<LightOrderByWithRelationInput>
    cursor?: LightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<LightScalarFieldEnum>
  }


  /**
   * LightParams.deathLight
   */
  export type LightParams$deathLightArgs = {
    /**
     * Select specific fields to fetch from the Light
     */
    select?: LightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightInclude | null
    where?: LightWhereInput
    orderBy?: Enumerable<LightOrderByWithRelationInput>
    cursor?: LightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<LightScalarFieldEnum>
  }


  /**
   * LightParams without action
   */
  export type LightParamsArgs = {
    /**
     * Select specific fields to fetch from the LightParams
     */
    select?: LightParamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightParamsInclude | null
  }



  /**
   * Model LightSkybox
   */


  export type AggregateLightSkybox = {
    _count: LightSkyboxCountAggregateOutputType | null
    _avg: LightSkyboxAvgAggregateOutputType | null
    _sum: LightSkyboxSumAggregateOutputType | null
    _min: LightSkyboxMinAggregateOutputType | null
    _max: LightSkyboxMaxAggregateOutputType | null
  }

  export type LightSkyboxAvgAggregateOutputType = {
    id: number | null
  }

  export type LightSkyboxSumAggregateOutputType = {
    id: number | null
  }

  export type LightSkyboxMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type LightSkyboxMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type LightSkyboxCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type LightSkyboxAvgAggregateInputType = {
    id?: true
  }

  export type LightSkyboxSumAggregateInputType = {
    id?: true
  }

  export type LightSkyboxMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type LightSkyboxMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type LightSkyboxCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type LightSkyboxAggregateArgs = {
    /**
     * Filter which LightSkybox to aggregate.
     */
    where?: LightSkyboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LightSkyboxes to fetch.
     */
    orderBy?: Enumerable<LightSkyboxOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LightSkyboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LightSkyboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LightSkyboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LightSkyboxes
    **/
    _count?: true | LightSkyboxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LightSkyboxAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LightSkyboxSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LightSkyboxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LightSkyboxMaxAggregateInputType
  }

  export type GetLightSkyboxAggregateType<T extends LightSkyboxAggregateArgs> = {
        [P in keyof T & keyof AggregateLightSkybox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLightSkybox[P]>
      : GetScalarType<T[P], AggregateLightSkybox[P]>
  }




  export type LightSkyboxGroupByArgs = {
    where?: LightSkyboxWhereInput
    orderBy?: Enumerable<LightSkyboxOrderByWithAggregationInput>
    by: LightSkyboxScalarFieldEnum[]
    having?: LightSkyboxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LightSkyboxCountAggregateInputType | true
    _avg?: LightSkyboxAvgAggregateInputType
    _sum?: LightSkyboxSumAggregateInputType
    _min?: LightSkyboxMinAggregateInputType
    _max?: LightSkyboxMaxAggregateInputType
  }


  export type LightSkyboxGroupByOutputType = {
    id: number
    name: string
    _count: LightSkyboxCountAggregateOutputType | null
    _avg: LightSkyboxAvgAggregateOutputType | null
    _sum: LightSkyboxSumAggregateOutputType | null
    _min: LightSkyboxMinAggregateOutputType | null
    _max: LightSkyboxMaxAggregateOutputType | null
  }

  type GetLightSkyboxGroupByPayload<T extends LightSkyboxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<LightSkyboxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LightSkyboxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LightSkyboxGroupByOutputType[P]>
            : GetScalarType<T[P], LightSkyboxGroupByOutputType[P]>
        }
      >
    >


  export type LightSkyboxSelect = {
    id?: boolean
    name?: boolean
    LightParams?: boolean | LightSkybox$LightParamsArgs
    _count?: boolean | LightSkyboxCountOutputTypeArgs
  }


  export type LightSkyboxInclude = {
    LightParams?: boolean | LightSkybox$LightParamsArgs
    _count?: boolean | LightSkyboxCountOutputTypeArgs
  }

  export type LightSkyboxGetPayload<S extends boolean | null | undefined | LightSkyboxArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? LightSkybox :
    S extends undefined ? never :
    S extends { include: any } & (LightSkyboxArgs | LightSkyboxFindManyArgs)
    ? LightSkybox  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'LightParams' ? Array < LightParamsGetPayload<S['include'][P]>>  :
        P extends '_count' ? LightSkyboxCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (LightSkyboxArgs | LightSkyboxFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'LightParams' ? Array < LightParamsGetPayload<S['select'][P]>>  :
        P extends '_count' ? LightSkyboxCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof LightSkybox ? LightSkybox[P] : never
  } 
      : LightSkybox


  type LightSkyboxCountArgs = 
    Omit<LightSkyboxFindManyArgs, 'select' | 'include'> & {
      select?: LightSkyboxCountAggregateInputType | true
    }

  export interface LightSkyboxDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one LightSkybox that matches the filter.
     * @param {LightSkyboxFindUniqueArgs} args - Arguments to find a LightSkybox
     * @example
     * // Get one LightSkybox
     * const lightSkybox = await prisma.lightSkybox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LightSkyboxFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LightSkyboxFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'LightSkybox'> extends True ? Prisma__LightSkyboxClient<LightSkyboxGetPayload<T>> : Prisma__LightSkyboxClient<LightSkyboxGetPayload<T> | null, null>

    /**
     * Find one LightSkybox that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LightSkyboxFindUniqueOrThrowArgs} args - Arguments to find a LightSkybox
     * @example
     * // Get one LightSkybox
     * const lightSkybox = await prisma.lightSkybox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LightSkyboxFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, LightSkyboxFindUniqueOrThrowArgs>
    ): Prisma__LightSkyboxClient<LightSkyboxGetPayload<T>>

    /**
     * Find the first LightSkybox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LightSkyboxFindFirstArgs} args - Arguments to find a LightSkybox
     * @example
     * // Get one LightSkybox
     * const lightSkybox = await prisma.lightSkybox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LightSkyboxFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LightSkyboxFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'LightSkybox'> extends True ? Prisma__LightSkyboxClient<LightSkyboxGetPayload<T>> : Prisma__LightSkyboxClient<LightSkyboxGetPayload<T> | null, null>

    /**
     * Find the first LightSkybox that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LightSkyboxFindFirstOrThrowArgs} args - Arguments to find a LightSkybox
     * @example
     * // Get one LightSkybox
     * const lightSkybox = await prisma.lightSkybox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LightSkyboxFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LightSkyboxFindFirstOrThrowArgs>
    ): Prisma__LightSkyboxClient<LightSkyboxGetPayload<T>>

    /**
     * Find zero or more LightSkyboxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LightSkyboxFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LightSkyboxes
     * const lightSkyboxes = await prisma.lightSkybox.findMany()
     * 
     * // Get first 10 LightSkyboxes
     * const lightSkyboxes = await prisma.lightSkybox.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lightSkyboxWithIdOnly = await prisma.lightSkybox.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LightSkyboxFindManyArgs>(
      args?: SelectSubset<T, LightSkyboxFindManyArgs>
    ): Prisma.PrismaPromise<Array<LightSkyboxGetPayload<T>>>

    /**
     * Create a LightSkybox.
     * @param {LightSkyboxCreateArgs} args - Arguments to create a LightSkybox.
     * @example
     * // Create one LightSkybox
     * const LightSkybox = await prisma.lightSkybox.create({
     *   data: {
     *     // ... data to create a LightSkybox
     *   }
     * })
     * 
    **/
    create<T extends LightSkyboxCreateArgs>(
      args: SelectSubset<T, LightSkyboxCreateArgs>
    ): Prisma__LightSkyboxClient<LightSkyboxGetPayload<T>>

    /**
     * Delete a LightSkybox.
     * @param {LightSkyboxDeleteArgs} args - Arguments to delete one LightSkybox.
     * @example
     * // Delete one LightSkybox
     * const LightSkybox = await prisma.lightSkybox.delete({
     *   where: {
     *     // ... filter to delete one LightSkybox
     *   }
     * })
     * 
    **/
    delete<T extends LightSkyboxDeleteArgs>(
      args: SelectSubset<T, LightSkyboxDeleteArgs>
    ): Prisma__LightSkyboxClient<LightSkyboxGetPayload<T>>

    /**
     * Update one LightSkybox.
     * @param {LightSkyboxUpdateArgs} args - Arguments to update one LightSkybox.
     * @example
     * // Update one LightSkybox
     * const lightSkybox = await prisma.lightSkybox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LightSkyboxUpdateArgs>(
      args: SelectSubset<T, LightSkyboxUpdateArgs>
    ): Prisma__LightSkyboxClient<LightSkyboxGetPayload<T>>

    /**
     * Delete zero or more LightSkyboxes.
     * @param {LightSkyboxDeleteManyArgs} args - Arguments to filter LightSkyboxes to delete.
     * @example
     * // Delete a few LightSkyboxes
     * const { count } = await prisma.lightSkybox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LightSkyboxDeleteManyArgs>(
      args?: SelectSubset<T, LightSkyboxDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LightSkyboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LightSkyboxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LightSkyboxes
     * const lightSkybox = await prisma.lightSkybox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LightSkyboxUpdateManyArgs>(
      args: SelectSubset<T, LightSkyboxUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LightSkybox.
     * @param {LightSkyboxUpsertArgs} args - Arguments to update or create a LightSkybox.
     * @example
     * // Update or create a LightSkybox
     * const lightSkybox = await prisma.lightSkybox.upsert({
     *   create: {
     *     // ... data to create a LightSkybox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LightSkybox we want to update
     *   }
     * })
    **/
    upsert<T extends LightSkyboxUpsertArgs>(
      args: SelectSubset<T, LightSkyboxUpsertArgs>
    ): Prisma__LightSkyboxClient<LightSkyboxGetPayload<T>>

    /**
     * Count the number of LightSkyboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LightSkyboxCountArgs} args - Arguments to filter LightSkyboxes to count.
     * @example
     * // Count the number of LightSkyboxes
     * const count = await prisma.lightSkybox.count({
     *   where: {
     *     // ... the filter for the LightSkyboxes we want to count
     *   }
     * })
    **/
    count<T extends LightSkyboxCountArgs>(
      args?: Subset<T, LightSkyboxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LightSkyboxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LightSkybox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LightSkyboxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LightSkyboxAggregateArgs>(args: Subset<T, LightSkyboxAggregateArgs>): Prisma.PrismaPromise<GetLightSkyboxAggregateType<T>>

    /**
     * Group by LightSkybox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LightSkyboxGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LightSkyboxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LightSkyboxGroupByArgs['orderBy'] }
        : { orderBy?: LightSkyboxGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LightSkyboxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLightSkyboxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for LightSkybox.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LightSkyboxClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    LightParams<T extends LightSkybox$LightParamsArgs= {}>(args?: Subset<T, LightSkybox$LightParamsArgs>): Prisma.PrismaPromise<Array<LightParamsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * LightSkybox base type for findUnique actions
   */
  export type LightSkyboxFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the LightSkybox
     */
    select?: LightSkyboxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightSkyboxInclude | null
    /**
     * Filter, which LightSkybox to fetch.
     */
    where: LightSkyboxWhereUniqueInput
  }

  /**
   * LightSkybox findUnique
   */
  export interface LightSkyboxFindUniqueArgs extends LightSkyboxFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * LightSkybox findUniqueOrThrow
   */
  export type LightSkyboxFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the LightSkybox
     */
    select?: LightSkyboxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightSkyboxInclude | null
    /**
     * Filter, which LightSkybox to fetch.
     */
    where: LightSkyboxWhereUniqueInput
  }


  /**
   * LightSkybox base type for findFirst actions
   */
  export type LightSkyboxFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the LightSkybox
     */
    select?: LightSkyboxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightSkyboxInclude | null
    /**
     * Filter, which LightSkybox to fetch.
     */
    where?: LightSkyboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LightSkyboxes to fetch.
     */
    orderBy?: Enumerable<LightSkyboxOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LightSkyboxes.
     */
    cursor?: LightSkyboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LightSkyboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LightSkyboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LightSkyboxes.
     */
    distinct?: Enumerable<LightSkyboxScalarFieldEnum>
  }

  /**
   * LightSkybox findFirst
   */
  export interface LightSkyboxFindFirstArgs extends LightSkyboxFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * LightSkybox findFirstOrThrow
   */
  export type LightSkyboxFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the LightSkybox
     */
    select?: LightSkyboxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightSkyboxInclude | null
    /**
     * Filter, which LightSkybox to fetch.
     */
    where?: LightSkyboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LightSkyboxes to fetch.
     */
    orderBy?: Enumerable<LightSkyboxOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LightSkyboxes.
     */
    cursor?: LightSkyboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LightSkyboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LightSkyboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LightSkyboxes.
     */
    distinct?: Enumerable<LightSkyboxScalarFieldEnum>
  }


  /**
   * LightSkybox findMany
   */
  export type LightSkyboxFindManyArgs = {
    /**
     * Select specific fields to fetch from the LightSkybox
     */
    select?: LightSkyboxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightSkyboxInclude | null
    /**
     * Filter, which LightSkyboxes to fetch.
     */
    where?: LightSkyboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LightSkyboxes to fetch.
     */
    orderBy?: Enumerable<LightSkyboxOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LightSkyboxes.
     */
    cursor?: LightSkyboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LightSkyboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LightSkyboxes.
     */
    skip?: number
    distinct?: Enumerable<LightSkyboxScalarFieldEnum>
  }


  /**
   * LightSkybox create
   */
  export type LightSkyboxCreateArgs = {
    /**
     * Select specific fields to fetch from the LightSkybox
     */
    select?: LightSkyboxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightSkyboxInclude | null
    /**
     * The data needed to create a LightSkybox.
     */
    data: XOR<LightSkyboxCreateInput, LightSkyboxUncheckedCreateInput>
  }


  /**
   * LightSkybox update
   */
  export type LightSkyboxUpdateArgs = {
    /**
     * Select specific fields to fetch from the LightSkybox
     */
    select?: LightSkyboxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightSkyboxInclude | null
    /**
     * The data needed to update a LightSkybox.
     */
    data: XOR<LightSkyboxUpdateInput, LightSkyboxUncheckedUpdateInput>
    /**
     * Choose, which LightSkybox to update.
     */
    where: LightSkyboxWhereUniqueInput
  }


  /**
   * LightSkybox updateMany
   */
  export type LightSkyboxUpdateManyArgs = {
    /**
     * The data used to update LightSkyboxes.
     */
    data: XOR<LightSkyboxUpdateManyMutationInput, LightSkyboxUncheckedUpdateManyInput>
    /**
     * Filter which LightSkyboxes to update
     */
    where?: LightSkyboxWhereInput
  }


  /**
   * LightSkybox upsert
   */
  export type LightSkyboxUpsertArgs = {
    /**
     * Select specific fields to fetch from the LightSkybox
     */
    select?: LightSkyboxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightSkyboxInclude | null
    /**
     * The filter to search for the LightSkybox to update in case it exists.
     */
    where: LightSkyboxWhereUniqueInput
    /**
     * In case the LightSkybox found by the `where` argument doesn't exist, create a new LightSkybox with this data.
     */
    create: XOR<LightSkyboxCreateInput, LightSkyboxUncheckedCreateInput>
    /**
     * In case the LightSkybox was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LightSkyboxUpdateInput, LightSkyboxUncheckedUpdateInput>
  }


  /**
   * LightSkybox delete
   */
  export type LightSkyboxDeleteArgs = {
    /**
     * Select specific fields to fetch from the LightSkybox
     */
    select?: LightSkyboxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightSkyboxInclude | null
    /**
     * Filter which LightSkybox to delete.
     */
    where: LightSkyboxWhereUniqueInput
  }


  /**
   * LightSkybox deleteMany
   */
  export type LightSkyboxDeleteManyArgs = {
    /**
     * Filter which LightSkyboxes to delete
     */
    where?: LightSkyboxWhereInput
  }


  /**
   * LightSkybox.LightParams
   */
  export type LightSkybox$LightParamsArgs = {
    /**
     * Select specific fields to fetch from the LightParams
     */
    select?: LightParamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightParamsInclude | null
    where?: LightParamsWhereInput
    orderBy?: Enumerable<LightParamsOrderByWithRelationInput>
    cursor?: LightParamsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<LightParamsScalarFieldEnum>
  }


  /**
   * LightSkybox without action
   */
  export type LightSkyboxArgs = {
    /**
     * Select specific fields to fetch from the LightSkybox
     */
    select?: LightSkyboxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LightSkyboxInclude | null
  }



  /**
   * Model WMOAreaTable
   */


  export type AggregateWMOAreaTable = {
    _count: WMOAreaTableCountAggregateOutputType | null
    _avg: WMOAreaTableAvgAggregateOutputType | null
    _sum: WMOAreaTableSumAggregateOutputType | null
    _min: WMOAreaTableMinAggregateOutputType | null
    _max: WMOAreaTableMaxAggregateOutputType | null
  }

  export type WMOAreaTableAvgAggregateOutputType = {
    id: number | null
    wmoId: number | null
    nameSetId: number | null
    wmoGroupId: number | null
    soundProviderId: number | null
    underwaterSoundProviderId: number | null
    ambienceId: number | null
    zoneMusicId: number | null
    introSoundId: number | null
    flags: number | null
    areaTableId: number | null
    nameMask: number | null
  }

  export type WMOAreaTableSumAggregateOutputType = {
    id: number | null
    wmoId: number | null
    nameSetId: number | null
    wmoGroupId: number | null
    soundProviderId: number | null
    underwaterSoundProviderId: number | null
    ambienceId: number | null
    zoneMusicId: number | null
    introSoundId: number | null
    flags: number | null
    areaTableId: number | null
    nameMask: number | null
  }

  export type WMOAreaTableMinAggregateOutputType = {
    id: number | null
    wmoId: number | null
    nameSetId: number | null
    wmoGroupId: number | null
    soundProviderId: number | null
    underwaterSoundProviderId: number | null
    ambienceId: number | null
    zoneMusicId: number | null
    introSoundId: number | null
    flags: number | null
    areaTableId: number | null
    name_enUS: string | null
    name_enGB: string | null
    name_koKR: string | null
    name_frFR: string | null
    name_deDE: string | null
    name_enCN: string | null
    name_zhCN: string | null
    name_enTW: string | null
    nameMask: number | null
  }

  export type WMOAreaTableMaxAggregateOutputType = {
    id: number | null
    wmoId: number | null
    nameSetId: number | null
    wmoGroupId: number | null
    soundProviderId: number | null
    underwaterSoundProviderId: number | null
    ambienceId: number | null
    zoneMusicId: number | null
    introSoundId: number | null
    flags: number | null
    areaTableId: number | null
    name_enUS: string | null
    name_enGB: string | null
    name_koKR: string | null
    name_frFR: string | null
    name_deDE: string | null
    name_enCN: string | null
    name_zhCN: string | null
    name_enTW: string | null
    nameMask: number | null
  }

  export type WMOAreaTableCountAggregateOutputType = {
    id: number
    wmoId: number
    nameSetId: number
    wmoGroupId: number
    soundProviderId: number
    underwaterSoundProviderId: number
    ambienceId: number
    zoneMusicId: number
    introSoundId: number
    flags: number
    areaTableId: number
    name_enUS: number
    name_enGB: number
    name_koKR: number
    name_frFR: number
    name_deDE: number
    name_enCN: number
    name_zhCN: number
    name_enTW: number
    nameMask: number
    _all: number
  }


  export type WMOAreaTableAvgAggregateInputType = {
    id?: true
    wmoId?: true
    nameSetId?: true
    wmoGroupId?: true
    soundProviderId?: true
    underwaterSoundProviderId?: true
    ambienceId?: true
    zoneMusicId?: true
    introSoundId?: true
    flags?: true
    areaTableId?: true
    nameMask?: true
  }

  export type WMOAreaTableSumAggregateInputType = {
    id?: true
    wmoId?: true
    nameSetId?: true
    wmoGroupId?: true
    soundProviderId?: true
    underwaterSoundProviderId?: true
    ambienceId?: true
    zoneMusicId?: true
    introSoundId?: true
    flags?: true
    areaTableId?: true
    nameMask?: true
  }

  export type WMOAreaTableMinAggregateInputType = {
    id?: true
    wmoId?: true
    nameSetId?: true
    wmoGroupId?: true
    soundProviderId?: true
    underwaterSoundProviderId?: true
    ambienceId?: true
    zoneMusicId?: true
    introSoundId?: true
    flags?: true
    areaTableId?: true
    name_enUS?: true
    name_enGB?: true
    name_koKR?: true
    name_frFR?: true
    name_deDE?: true
    name_enCN?: true
    name_zhCN?: true
    name_enTW?: true
    nameMask?: true
  }

  export type WMOAreaTableMaxAggregateInputType = {
    id?: true
    wmoId?: true
    nameSetId?: true
    wmoGroupId?: true
    soundProviderId?: true
    underwaterSoundProviderId?: true
    ambienceId?: true
    zoneMusicId?: true
    introSoundId?: true
    flags?: true
    areaTableId?: true
    name_enUS?: true
    name_enGB?: true
    name_koKR?: true
    name_frFR?: true
    name_deDE?: true
    name_enCN?: true
    name_zhCN?: true
    name_enTW?: true
    nameMask?: true
  }

  export type WMOAreaTableCountAggregateInputType = {
    id?: true
    wmoId?: true
    nameSetId?: true
    wmoGroupId?: true
    soundProviderId?: true
    underwaterSoundProviderId?: true
    ambienceId?: true
    zoneMusicId?: true
    introSoundId?: true
    flags?: true
    areaTableId?: true
    name_enUS?: true
    name_enGB?: true
    name_koKR?: true
    name_frFR?: true
    name_deDE?: true
    name_enCN?: true
    name_zhCN?: true
    name_enTW?: true
    nameMask?: true
    _all?: true
  }

  export type WMOAreaTableAggregateArgs = {
    /**
     * Filter which WMOAreaTable to aggregate.
     */
    where?: WMOAreaTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WMOAreaTables to fetch.
     */
    orderBy?: Enumerable<WMOAreaTableOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WMOAreaTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WMOAreaTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WMOAreaTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WMOAreaTables
    **/
    _count?: true | WMOAreaTableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WMOAreaTableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WMOAreaTableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WMOAreaTableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WMOAreaTableMaxAggregateInputType
  }

  export type GetWMOAreaTableAggregateType<T extends WMOAreaTableAggregateArgs> = {
        [P in keyof T & keyof AggregateWMOAreaTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWMOAreaTable[P]>
      : GetScalarType<T[P], AggregateWMOAreaTable[P]>
  }




  export type WMOAreaTableGroupByArgs = {
    where?: WMOAreaTableWhereInput
    orderBy?: Enumerable<WMOAreaTableOrderByWithAggregationInput>
    by: WMOAreaTableScalarFieldEnum[]
    having?: WMOAreaTableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WMOAreaTableCountAggregateInputType | true
    _avg?: WMOAreaTableAvgAggregateInputType
    _sum?: WMOAreaTableSumAggregateInputType
    _min?: WMOAreaTableMinAggregateInputType
    _max?: WMOAreaTableMaxAggregateInputType
  }


  export type WMOAreaTableGroupByOutputType = {
    id: number
    wmoId: number
    nameSetId: number
    wmoGroupId: number
    soundProviderId: number
    underwaterSoundProviderId: number
    ambienceId: number
    zoneMusicId: number
    introSoundId: number
    flags: number
    areaTableId: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
    _count: WMOAreaTableCountAggregateOutputType | null
    _avg: WMOAreaTableAvgAggregateOutputType | null
    _sum: WMOAreaTableSumAggregateOutputType | null
    _min: WMOAreaTableMinAggregateOutputType | null
    _max: WMOAreaTableMaxAggregateOutputType | null
  }

  type GetWMOAreaTableGroupByPayload<T extends WMOAreaTableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<WMOAreaTableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WMOAreaTableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WMOAreaTableGroupByOutputType[P]>
            : GetScalarType<T[P], WMOAreaTableGroupByOutputType[P]>
        }
      >
    >


  export type WMOAreaTableSelect = {
    id?: boolean
    wmoId?: boolean
    nameSetId?: boolean
    wmoGroupId?: boolean
    soundProviderId?: boolean
    underwaterSoundProviderId?: boolean
    ambienceId?: boolean
    zoneMusicId?: boolean
    introSoundId?: boolean
    flags?: boolean
    areaTableId?: boolean
    areaTable?: boolean | AreaTableArgs
    name_enUS?: boolean
    name_enGB?: boolean
    name_koKR?: boolean
    name_frFR?: boolean
    name_deDE?: boolean
    name_enCN?: boolean
    name_zhCN?: boolean
    name_enTW?: boolean
    nameMask?: boolean
  }


  export type WMOAreaTableInclude = {
    areaTable?: boolean | AreaTableArgs
  }

  export type WMOAreaTableGetPayload<S extends boolean | null | undefined | WMOAreaTableArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? WMOAreaTable :
    S extends undefined ? never :
    S extends { include: any } & (WMOAreaTableArgs | WMOAreaTableFindManyArgs)
    ? WMOAreaTable  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'areaTable' ? AreaTableGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (WMOAreaTableArgs | WMOAreaTableFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'areaTable' ? AreaTableGetPayload<S['select'][P]> :  P extends keyof WMOAreaTable ? WMOAreaTable[P] : never
  } 
      : WMOAreaTable


  type WMOAreaTableCountArgs = 
    Omit<WMOAreaTableFindManyArgs, 'select' | 'include'> & {
      select?: WMOAreaTableCountAggregateInputType | true
    }

  export interface WMOAreaTableDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one WMOAreaTable that matches the filter.
     * @param {WMOAreaTableFindUniqueArgs} args - Arguments to find a WMOAreaTable
     * @example
     * // Get one WMOAreaTable
     * const wMOAreaTable = await prisma.wMOAreaTable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WMOAreaTableFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WMOAreaTableFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'WMOAreaTable'> extends True ? Prisma__WMOAreaTableClient<WMOAreaTableGetPayload<T>> : Prisma__WMOAreaTableClient<WMOAreaTableGetPayload<T> | null, null>

    /**
     * Find one WMOAreaTable that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WMOAreaTableFindUniqueOrThrowArgs} args - Arguments to find a WMOAreaTable
     * @example
     * // Get one WMOAreaTable
     * const wMOAreaTable = await prisma.wMOAreaTable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WMOAreaTableFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, WMOAreaTableFindUniqueOrThrowArgs>
    ): Prisma__WMOAreaTableClient<WMOAreaTableGetPayload<T>>

    /**
     * Find the first WMOAreaTable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WMOAreaTableFindFirstArgs} args - Arguments to find a WMOAreaTable
     * @example
     * // Get one WMOAreaTable
     * const wMOAreaTable = await prisma.wMOAreaTable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WMOAreaTableFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WMOAreaTableFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'WMOAreaTable'> extends True ? Prisma__WMOAreaTableClient<WMOAreaTableGetPayload<T>> : Prisma__WMOAreaTableClient<WMOAreaTableGetPayload<T> | null, null>

    /**
     * Find the first WMOAreaTable that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WMOAreaTableFindFirstOrThrowArgs} args - Arguments to find a WMOAreaTable
     * @example
     * // Get one WMOAreaTable
     * const wMOAreaTable = await prisma.wMOAreaTable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WMOAreaTableFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WMOAreaTableFindFirstOrThrowArgs>
    ): Prisma__WMOAreaTableClient<WMOAreaTableGetPayload<T>>

    /**
     * Find zero or more WMOAreaTables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WMOAreaTableFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WMOAreaTables
     * const wMOAreaTables = await prisma.wMOAreaTable.findMany()
     * 
     * // Get first 10 WMOAreaTables
     * const wMOAreaTables = await prisma.wMOAreaTable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wMOAreaTableWithIdOnly = await prisma.wMOAreaTable.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WMOAreaTableFindManyArgs>(
      args?: SelectSubset<T, WMOAreaTableFindManyArgs>
    ): Prisma.PrismaPromise<Array<WMOAreaTableGetPayload<T>>>

    /**
     * Create a WMOAreaTable.
     * @param {WMOAreaTableCreateArgs} args - Arguments to create a WMOAreaTable.
     * @example
     * // Create one WMOAreaTable
     * const WMOAreaTable = await prisma.wMOAreaTable.create({
     *   data: {
     *     // ... data to create a WMOAreaTable
     *   }
     * })
     * 
    **/
    create<T extends WMOAreaTableCreateArgs>(
      args: SelectSubset<T, WMOAreaTableCreateArgs>
    ): Prisma__WMOAreaTableClient<WMOAreaTableGetPayload<T>>

    /**
     * Delete a WMOAreaTable.
     * @param {WMOAreaTableDeleteArgs} args - Arguments to delete one WMOAreaTable.
     * @example
     * // Delete one WMOAreaTable
     * const WMOAreaTable = await prisma.wMOAreaTable.delete({
     *   where: {
     *     // ... filter to delete one WMOAreaTable
     *   }
     * })
     * 
    **/
    delete<T extends WMOAreaTableDeleteArgs>(
      args: SelectSubset<T, WMOAreaTableDeleteArgs>
    ): Prisma__WMOAreaTableClient<WMOAreaTableGetPayload<T>>

    /**
     * Update one WMOAreaTable.
     * @param {WMOAreaTableUpdateArgs} args - Arguments to update one WMOAreaTable.
     * @example
     * // Update one WMOAreaTable
     * const wMOAreaTable = await prisma.wMOAreaTable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WMOAreaTableUpdateArgs>(
      args: SelectSubset<T, WMOAreaTableUpdateArgs>
    ): Prisma__WMOAreaTableClient<WMOAreaTableGetPayload<T>>

    /**
     * Delete zero or more WMOAreaTables.
     * @param {WMOAreaTableDeleteManyArgs} args - Arguments to filter WMOAreaTables to delete.
     * @example
     * // Delete a few WMOAreaTables
     * const { count } = await prisma.wMOAreaTable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WMOAreaTableDeleteManyArgs>(
      args?: SelectSubset<T, WMOAreaTableDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WMOAreaTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WMOAreaTableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WMOAreaTables
     * const wMOAreaTable = await prisma.wMOAreaTable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WMOAreaTableUpdateManyArgs>(
      args: SelectSubset<T, WMOAreaTableUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WMOAreaTable.
     * @param {WMOAreaTableUpsertArgs} args - Arguments to update or create a WMOAreaTable.
     * @example
     * // Update or create a WMOAreaTable
     * const wMOAreaTable = await prisma.wMOAreaTable.upsert({
     *   create: {
     *     // ... data to create a WMOAreaTable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WMOAreaTable we want to update
     *   }
     * })
    **/
    upsert<T extends WMOAreaTableUpsertArgs>(
      args: SelectSubset<T, WMOAreaTableUpsertArgs>
    ): Prisma__WMOAreaTableClient<WMOAreaTableGetPayload<T>>

    /**
     * Count the number of WMOAreaTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WMOAreaTableCountArgs} args - Arguments to filter WMOAreaTables to count.
     * @example
     * // Count the number of WMOAreaTables
     * const count = await prisma.wMOAreaTable.count({
     *   where: {
     *     // ... the filter for the WMOAreaTables we want to count
     *   }
     * })
    **/
    count<T extends WMOAreaTableCountArgs>(
      args?: Subset<T, WMOAreaTableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WMOAreaTableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WMOAreaTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WMOAreaTableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WMOAreaTableAggregateArgs>(args: Subset<T, WMOAreaTableAggregateArgs>): Prisma.PrismaPromise<GetWMOAreaTableAggregateType<T>>

    /**
     * Group by WMOAreaTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WMOAreaTableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WMOAreaTableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WMOAreaTableGroupByArgs['orderBy'] }
        : { orderBy?: WMOAreaTableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WMOAreaTableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWMOAreaTableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for WMOAreaTable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WMOAreaTableClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    areaTable<T extends AreaTableArgs= {}>(args?: Subset<T, AreaTableArgs>): Prisma__AreaTableClient<AreaTableGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * WMOAreaTable base type for findUnique actions
   */
  export type WMOAreaTableFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the WMOAreaTable
     */
    select?: WMOAreaTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WMOAreaTableInclude | null
    /**
     * Filter, which WMOAreaTable to fetch.
     */
    where: WMOAreaTableWhereUniqueInput
  }

  /**
   * WMOAreaTable findUnique
   */
  export interface WMOAreaTableFindUniqueArgs extends WMOAreaTableFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WMOAreaTable findUniqueOrThrow
   */
  export type WMOAreaTableFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the WMOAreaTable
     */
    select?: WMOAreaTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WMOAreaTableInclude | null
    /**
     * Filter, which WMOAreaTable to fetch.
     */
    where: WMOAreaTableWhereUniqueInput
  }


  /**
   * WMOAreaTable base type for findFirst actions
   */
  export type WMOAreaTableFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the WMOAreaTable
     */
    select?: WMOAreaTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WMOAreaTableInclude | null
    /**
     * Filter, which WMOAreaTable to fetch.
     */
    where?: WMOAreaTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WMOAreaTables to fetch.
     */
    orderBy?: Enumerable<WMOAreaTableOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WMOAreaTables.
     */
    cursor?: WMOAreaTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WMOAreaTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WMOAreaTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WMOAreaTables.
     */
    distinct?: Enumerable<WMOAreaTableScalarFieldEnum>
  }

  /**
   * WMOAreaTable findFirst
   */
  export interface WMOAreaTableFindFirstArgs extends WMOAreaTableFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WMOAreaTable findFirstOrThrow
   */
  export type WMOAreaTableFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the WMOAreaTable
     */
    select?: WMOAreaTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WMOAreaTableInclude | null
    /**
     * Filter, which WMOAreaTable to fetch.
     */
    where?: WMOAreaTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WMOAreaTables to fetch.
     */
    orderBy?: Enumerable<WMOAreaTableOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WMOAreaTables.
     */
    cursor?: WMOAreaTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WMOAreaTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WMOAreaTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WMOAreaTables.
     */
    distinct?: Enumerable<WMOAreaTableScalarFieldEnum>
  }


  /**
   * WMOAreaTable findMany
   */
  export type WMOAreaTableFindManyArgs = {
    /**
     * Select specific fields to fetch from the WMOAreaTable
     */
    select?: WMOAreaTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WMOAreaTableInclude | null
    /**
     * Filter, which WMOAreaTables to fetch.
     */
    where?: WMOAreaTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WMOAreaTables to fetch.
     */
    orderBy?: Enumerable<WMOAreaTableOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WMOAreaTables.
     */
    cursor?: WMOAreaTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WMOAreaTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WMOAreaTables.
     */
    skip?: number
    distinct?: Enumerable<WMOAreaTableScalarFieldEnum>
  }


  /**
   * WMOAreaTable create
   */
  export type WMOAreaTableCreateArgs = {
    /**
     * Select specific fields to fetch from the WMOAreaTable
     */
    select?: WMOAreaTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WMOAreaTableInclude | null
    /**
     * The data needed to create a WMOAreaTable.
     */
    data: XOR<WMOAreaTableCreateInput, WMOAreaTableUncheckedCreateInput>
  }


  /**
   * WMOAreaTable update
   */
  export type WMOAreaTableUpdateArgs = {
    /**
     * Select specific fields to fetch from the WMOAreaTable
     */
    select?: WMOAreaTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WMOAreaTableInclude | null
    /**
     * The data needed to update a WMOAreaTable.
     */
    data: XOR<WMOAreaTableUpdateInput, WMOAreaTableUncheckedUpdateInput>
    /**
     * Choose, which WMOAreaTable to update.
     */
    where: WMOAreaTableWhereUniqueInput
  }


  /**
   * WMOAreaTable updateMany
   */
  export type WMOAreaTableUpdateManyArgs = {
    /**
     * The data used to update WMOAreaTables.
     */
    data: XOR<WMOAreaTableUpdateManyMutationInput, WMOAreaTableUncheckedUpdateManyInput>
    /**
     * Filter which WMOAreaTables to update
     */
    where?: WMOAreaTableWhereInput
  }


  /**
   * WMOAreaTable upsert
   */
  export type WMOAreaTableUpsertArgs = {
    /**
     * Select specific fields to fetch from the WMOAreaTable
     */
    select?: WMOAreaTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WMOAreaTableInclude | null
    /**
     * The filter to search for the WMOAreaTable to update in case it exists.
     */
    where: WMOAreaTableWhereUniqueInput
    /**
     * In case the WMOAreaTable found by the `where` argument doesn't exist, create a new WMOAreaTable with this data.
     */
    create: XOR<WMOAreaTableCreateInput, WMOAreaTableUncheckedCreateInput>
    /**
     * In case the WMOAreaTable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WMOAreaTableUpdateInput, WMOAreaTableUncheckedUpdateInput>
  }


  /**
   * WMOAreaTable delete
   */
  export type WMOAreaTableDeleteArgs = {
    /**
     * Select specific fields to fetch from the WMOAreaTable
     */
    select?: WMOAreaTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WMOAreaTableInclude | null
    /**
     * Filter which WMOAreaTable to delete.
     */
    where: WMOAreaTableWhereUniqueInput
  }


  /**
   * WMOAreaTable deleteMany
   */
  export type WMOAreaTableDeleteManyArgs = {
    /**
     * Filter which WMOAreaTables to delete
     */
    where?: WMOAreaTableWhereInput
  }


  /**
   * WMOAreaTable without action
   */
  export type WMOAreaTableArgs = {
    /**
     * Select specific fields to fetch from the WMOAreaTable
     */
    select?: WMOAreaTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WMOAreaTableInclude | null
  }



  /**
   * Model WorldMapArea
   */


  export type AggregateWorldMapArea = {
    _count: WorldMapAreaCountAggregateOutputType | null
    _avg: WorldMapAreaAvgAggregateOutputType | null
    _sum: WorldMapAreaSumAggregateOutputType | null
    _min: WorldMapAreaMinAggregateOutputType | null
    _max: WorldMapAreaMaxAggregateOutputType | null
  }

  export type WorldMapAreaAvgAggregateOutputType = {
    id: number | null
    continentId: number | null
    areaId: number | null
    locLeft: number | null
    locRight: number | null
    locTop: number | null
    locBottom: number | null
  }

  export type WorldMapAreaSumAggregateOutputType = {
    id: number | null
    continentId: number | null
    areaId: number | null
    locLeft: number | null
    locRight: number | null
    locTop: number | null
    locBottom: number | null
  }

  export type WorldMapAreaMinAggregateOutputType = {
    id: number | null
    continentId: number | null
    areaId: number | null
    name: string | null
    locLeft: number | null
    locRight: number | null
    locTop: number | null
    locBottom: number | null
  }

  export type WorldMapAreaMaxAggregateOutputType = {
    id: number | null
    continentId: number | null
    areaId: number | null
    name: string | null
    locLeft: number | null
    locRight: number | null
    locTop: number | null
    locBottom: number | null
  }

  export type WorldMapAreaCountAggregateOutputType = {
    id: number
    continentId: number
    areaId: number
    name: number
    locLeft: number
    locRight: number
    locTop: number
    locBottom: number
    _all: number
  }


  export type WorldMapAreaAvgAggregateInputType = {
    id?: true
    continentId?: true
    areaId?: true
    locLeft?: true
    locRight?: true
    locTop?: true
    locBottom?: true
  }

  export type WorldMapAreaSumAggregateInputType = {
    id?: true
    continentId?: true
    areaId?: true
    locLeft?: true
    locRight?: true
    locTop?: true
    locBottom?: true
  }

  export type WorldMapAreaMinAggregateInputType = {
    id?: true
    continentId?: true
    areaId?: true
    name?: true
    locLeft?: true
    locRight?: true
    locTop?: true
    locBottom?: true
  }

  export type WorldMapAreaMaxAggregateInputType = {
    id?: true
    continentId?: true
    areaId?: true
    name?: true
    locLeft?: true
    locRight?: true
    locTop?: true
    locBottom?: true
  }

  export type WorldMapAreaCountAggregateInputType = {
    id?: true
    continentId?: true
    areaId?: true
    name?: true
    locLeft?: true
    locRight?: true
    locTop?: true
    locBottom?: true
    _all?: true
  }

  export type WorldMapAreaAggregateArgs = {
    /**
     * Filter which WorldMapArea to aggregate.
     */
    where?: WorldMapAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldMapAreas to fetch.
     */
    orderBy?: Enumerable<WorldMapAreaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorldMapAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldMapAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldMapAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorldMapAreas
    **/
    _count?: true | WorldMapAreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorldMapAreaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorldMapAreaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorldMapAreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorldMapAreaMaxAggregateInputType
  }

  export type GetWorldMapAreaAggregateType<T extends WorldMapAreaAggregateArgs> = {
        [P in keyof T & keyof AggregateWorldMapArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorldMapArea[P]>
      : GetScalarType<T[P], AggregateWorldMapArea[P]>
  }




  export type WorldMapAreaGroupByArgs = {
    where?: WorldMapAreaWhereInput
    orderBy?: Enumerable<WorldMapAreaOrderByWithAggregationInput>
    by: WorldMapAreaScalarFieldEnum[]
    having?: WorldMapAreaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorldMapAreaCountAggregateInputType | true
    _avg?: WorldMapAreaAvgAggregateInputType
    _sum?: WorldMapAreaSumAggregateInputType
    _min?: WorldMapAreaMinAggregateInputType
    _max?: WorldMapAreaMaxAggregateInputType
  }


  export type WorldMapAreaGroupByOutputType = {
    id: number
    continentId: number
    areaId: number
    name: string
    locLeft: number
    locRight: number
    locTop: number
    locBottom: number
    _count: WorldMapAreaCountAggregateOutputType | null
    _avg: WorldMapAreaAvgAggregateOutputType | null
    _sum: WorldMapAreaSumAggregateOutputType | null
    _min: WorldMapAreaMinAggregateOutputType | null
    _max: WorldMapAreaMaxAggregateOutputType | null
  }

  type GetWorldMapAreaGroupByPayload<T extends WorldMapAreaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<WorldMapAreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorldMapAreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorldMapAreaGroupByOutputType[P]>
            : GetScalarType<T[P], WorldMapAreaGroupByOutputType[P]>
        }
      >
    >


  export type WorldMapAreaSelect = {
    id?: boolean
    continentId?: boolean
    continent?: boolean | ContinentArgs
    areaId?: boolean
    areaTable?: boolean | AreaTableArgs
    name?: boolean
    locLeft?: boolean
    locRight?: boolean
    locTop?: boolean
    locBottom?: boolean
    WorldMapOverlay?: boolean | WorldMapArea$WorldMapOverlayArgs
    _count?: boolean | WorldMapAreaCountOutputTypeArgs
  }


  export type WorldMapAreaInclude = {
    continent?: boolean | ContinentArgs
    areaTable?: boolean | AreaTableArgs
    WorldMapOverlay?: boolean | WorldMapArea$WorldMapOverlayArgs
    _count?: boolean | WorldMapAreaCountOutputTypeArgs
  }

  export type WorldMapAreaGetPayload<S extends boolean | null | undefined | WorldMapAreaArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? WorldMapArea :
    S extends undefined ? never :
    S extends { include: any } & (WorldMapAreaArgs | WorldMapAreaFindManyArgs)
    ? WorldMapArea  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'continent' ? ContinentGetPayload<S['include'][P]> :
        P extends 'areaTable' ? AreaTableGetPayload<S['include'][P]> :
        P extends 'WorldMapOverlay' ? Array < WorldMapOverlayGetPayload<S['include'][P]>>  :
        P extends '_count' ? WorldMapAreaCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (WorldMapAreaArgs | WorldMapAreaFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'continent' ? ContinentGetPayload<S['select'][P]> :
        P extends 'areaTable' ? AreaTableGetPayload<S['select'][P]> :
        P extends 'WorldMapOverlay' ? Array < WorldMapOverlayGetPayload<S['select'][P]>>  :
        P extends '_count' ? WorldMapAreaCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof WorldMapArea ? WorldMapArea[P] : never
  } 
      : WorldMapArea


  type WorldMapAreaCountArgs = 
    Omit<WorldMapAreaFindManyArgs, 'select' | 'include'> & {
      select?: WorldMapAreaCountAggregateInputType | true
    }

  export interface WorldMapAreaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one WorldMapArea that matches the filter.
     * @param {WorldMapAreaFindUniqueArgs} args - Arguments to find a WorldMapArea
     * @example
     * // Get one WorldMapArea
     * const worldMapArea = await prisma.worldMapArea.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WorldMapAreaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WorldMapAreaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'WorldMapArea'> extends True ? Prisma__WorldMapAreaClient<WorldMapAreaGetPayload<T>> : Prisma__WorldMapAreaClient<WorldMapAreaGetPayload<T> | null, null>

    /**
     * Find one WorldMapArea that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WorldMapAreaFindUniqueOrThrowArgs} args - Arguments to find a WorldMapArea
     * @example
     * // Get one WorldMapArea
     * const worldMapArea = await prisma.worldMapArea.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WorldMapAreaFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, WorldMapAreaFindUniqueOrThrowArgs>
    ): Prisma__WorldMapAreaClient<WorldMapAreaGetPayload<T>>

    /**
     * Find the first WorldMapArea that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldMapAreaFindFirstArgs} args - Arguments to find a WorldMapArea
     * @example
     * // Get one WorldMapArea
     * const worldMapArea = await prisma.worldMapArea.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WorldMapAreaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WorldMapAreaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'WorldMapArea'> extends True ? Prisma__WorldMapAreaClient<WorldMapAreaGetPayload<T>> : Prisma__WorldMapAreaClient<WorldMapAreaGetPayload<T> | null, null>

    /**
     * Find the first WorldMapArea that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldMapAreaFindFirstOrThrowArgs} args - Arguments to find a WorldMapArea
     * @example
     * // Get one WorldMapArea
     * const worldMapArea = await prisma.worldMapArea.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WorldMapAreaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WorldMapAreaFindFirstOrThrowArgs>
    ): Prisma__WorldMapAreaClient<WorldMapAreaGetPayload<T>>

    /**
     * Find zero or more WorldMapAreas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldMapAreaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorldMapAreas
     * const worldMapAreas = await prisma.worldMapArea.findMany()
     * 
     * // Get first 10 WorldMapAreas
     * const worldMapAreas = await prisma.worldMapArea.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const worldMapAreaWithIdOnly = await prisma.worldMapArea.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WorldMapAreaFindManyArgs>(
      args?: SelectSubset<T, WorldMapAreaFindManyArgs>
    ): Prisma.PrismaPromise<Array<WorldMapAreaGetPayload<T>>>

    /**
     * Create a WorldMapArea.
     * @param {WorldMapAreaCreateArgs} args - Arguments to create a WorldMapArea.
     * @example
     * // Create one WorldMapArea
     * const WorldMapArea = await prisma.worldMapArea.create({
     *   data: {
     *     // ... data to create a WorldMapArea
     *   }
     * })
     * 
    **/
    create<T extends WorldMapAreaCreateArgs>(
      args: SelectSubset<T, WorldMapAreaCreateArgs>
    ): Prisma__WorldMapAreaClient<WorldMapAreaGetPayload<T>>

    /**
     * Delete a WorldMapArea.
     * @param {WorldMapAreaDeleteArgs} args - Arguments to delete one WorldMapArea.
     * @example
     * // Delete one WorldMapArea
     * const WorldMapArea = await prisma.worldMapArea.delete({
     *   where: {
     *     // ... filter to delete one WorldMapArea
     *   }
     * })
     * 
    **/
    delete<T extends WorldMapAreaDeleteArgs>(
      args: SelectSubset<T, WorldMapAreaDeleteArgs>
    ): Prisma__WorldMapAreaClient<WorldMapAreaGetPayload<T>>

    /**
     * Update one WorldMapArea.
     * @param {WorldMapAreaUpdateArgs} args - Arguments to update one WorldMapArea.
     * @example
     * // Update one WorldMapArea
     * const worldMapArea = await prisma.worldMapArea.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WorldMapAreaUpdateArgs>(
      args: SelectSubset<T, WorldMapAreaUpdateArgs>
    ): Prisma__WorldMapAreaClient<WorldMapAreaGetPayload<T>>

    /**
     * Delete zero or more WorldMapAreas.
     * @param {WorldMapAreaDeleteManyArgs} args - Arguments to filter WorldMapAreas to delete.
     * @example
     * // Delete a few WorldMapAreas
     * const { count } = await prisma.worldMapArea.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WorldMapAreaDeleteManyArgs>(
      args?: SelectSubset<T, WorldMapAreaDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorldMapAreas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldMapAreaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorldMapAreas
     * const worldMapArea = await prisma.worldMapArea.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WorldMapAreaUpdateManyArgs>(
      args: SelectSubset<T, WorldMapAreaUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorldMapArea.
     * @param {WorldMapAreaUpsertArgs} args - Arguments to update or create a WorldMapArea.
     * @example
     * // Update or create a WorldMapArea
     * const worldMapArea = await prisma.worldMapArea.upsert({
     *   create: {
     *     // ... data to create a WorldMapArea
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorldMapArea we want to update
     *   }
     * })
    **/
    upsert<T extends WorldMapAreaUpsertArgs>(
      args: SelectSubset<T, WorldMapAreaUpsertArgs>
    ): Prisma__WorldMapAreaClient<WorldMapAreaGetPayload<T>>

    /**
     * Count the number of WorldMapAreas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldMapAreaCountArgs} args - Arguments to filter WorldMapAreas to count.
     * @example
     * // Count the number of WorldMapAreas
     * const count = await prisma.worldMapArea.count({
     *   where: {
     *     // ... the filter for the WorldMapAreas we want to count
     *   }
     * })
    **/
    count<T extends WorldMapAreaCountArgs>(
      args?: Subset<T, WorldMapAreaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorldMapAreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorldMapArea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldMapAreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorldMapAreaAggregateArgs>(args: Subset<T, WorldMapAreaAggregateArgs>): Prisma.PrismaPromise<GetWorldMapAreaAggregateType<T>>

    /**
     * Group by WorldMapArea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldMapAreaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorldMapAreaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorldMapAreaGroupByArgs['orderBy'] }
        : { orderBy?: WorldMapAreaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorldMapAreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorldMapAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for WorldMapArea.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WorldMapAreaClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    continent<T extends ContinentArgs= {}>(args?: Subset<T, ContinentArgs>): Prisma__ContinentClient<ContinentGetPayload<T> | Null>;

    areaTable<T extends AreaTableArgs= {}>(args?: Subset<T, AreaTableArgs>): Prisma__AreaTableClient<AreaTableGetPayload<T> | Null>;

    WorldMapOverlay<T extends WorldMapArea$WorldMapOverlayArgs= {}>(args?: Subset<T, WorldMapArea$WorldMapOverlayArgs>): Prisma.PrismaPromise<Array<WorldMapOverlayGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * WorldMapArea base type for findUnique actions
   */
  export type WorldMapAreaFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the WorldMapArea
     */
    select?: WorldMapAreaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapAreaInclude | null
    /**
     * Filter, which WorldMapArea to fetch.
     */
    where: WorldMapAreaWhereUniqueInput
  }

  /**
   * WorldMapArea findUnique
   */
  export interface WorldMapAreaFindUniqueArgs extends WorldMapAreaFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WorldMapArea findUniqueOrThrow
   */
  export type WorldMapAreaFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the WorldMapArea
     */
    select?: WorldMapAreaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapAreaInclude | null
    /**
     * Filter, which WorldMapArea to fetch.
     */
    where: WorldMapAreaWhereUniqueInput
  }


  /**
   * WorldMapArea base type for findFirst actions
   */
  export type WorldMapAreaFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the WorldMapArea
     */
    select?: WorldMapAreaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapAreaInclude | null
    /**
     * Filter, which WorldMapArea to fetch.
     */
    where?: WorldMapAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldMapAreas to fetch.
     */
    orderBy?: Enumerable<WorldMapAreaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorldMapAreas.
     */
    cursor?: WorldMapAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldMapAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldMapAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorldMapAreas.
     */
    distinct?: Enumerable<WorldMapAreaScalarFieldEnum>
  }

  /**
   * WorldMapArea findFirst
   */
  export interface WorldMapAreaFindFirstArgs extends WorldMapAreaFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WorldMapArea findFirstOrThrow
   */
  export type WorldMapAreaFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the WorldMapArea
     */
    select?: WorldMapAreaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapAreaInclude | null
    /**
     * Filter, which WorldMapArea to fetch.
     */
    where?: WorldMapAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldMapAreas to fetch.
     */
    orderBy?: Enumerable<WorldMapAreaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorldMapAreas.
     */
    cursor?: WorldMapAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldMapAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldMapAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorldMapAreas.
     */
    distinct?: Enumerable<WorldMapAreaScalarFieldEnum>
  }


  /**
   * WorldMapArea findMany
   */
  export type WorldMapAreaFindManyArgs = {
    /**
     * Select specific fields to fetch from the WorldMapArea
     */
    select?: WorldMapAreaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapAreaInclude | null
    /**
     * Filter, which WorldMapAreas to fetch.
     */
    where?: WorldMapAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldMapAreas to fetch.
     */
    orderBy?: Enumerable<WorldMapAreaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorldMapAreas.
     */
    cursor?: WorldMapAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldMapAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldMapAreas.
     */
    skip?: number
    distinct?: Enumerable<WorldMapAreaScalarFieldEnum>
  }


  /**
   * WorldMapArea create
   */
  export type WorldMapAreaCreateArgs = {
    /**
     * Select specific fields to fetch from the WorldMapArea
     */
    select?: WorldMapAreaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapAreaInclude | null
    /**
     * The data needed to create a WorldMapArea.
     */
    data: XOR<WorldMapAreaCreateInput, WorldMapAreaUncheckedCreateInput>
  }


  /**
   * WorldMapArea update
   */
  export type WorldMapAreaUpdateArgs = {
    /**
     * Select specific fields to fetch from the WorldMapArea
     */
    select?: WorldMapAreaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapAreaInclude | null
    /**
     * The data needed to update a WorldMapArea.
     */
    data: XOR<WorldMapAreaUpdateInput, WorldMapAreaUncheckedUpdateInput>
    /**
     * Choose, which WorldMapArea to update.
     */
    where: WorldMapAreaWhereUniqueInput
  }


  /**
   * WorldMapArea updateMany
   */
  export type WorldMapAreaUpdateManyArgs = {
    /**
     * The data used to update WorldMapAreas.
     */
    data: XOR<WorldMapAreaUpdateManyMutationInput, WorldMapAreaUncheckedUpdateManyInput>
    /**
     * Filter which WorldMapAreas to update
     */
    where?: WorldMapAreaWhereInput
  }


  /**
   * WorldMapArea upsert
   */
  export type WorldMapAreaUpsertArgs = {
    /**
     * Select specific fields to fetch from the WorldMapArea
     */
    select?: WorldMapAreaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapAreaInclude | null
    /**
     * The filter to search for the WorldMapArea to update in case it exists.
     */
    where: WorldMapAreaWhereUniqueInput
    /**
     * In case the WorldMapArea found by the `where` argument doesn't exist, create a new WorldMapArea with this data.
     */
    create: XOR<WorldMapAreaCreateInput, WorldMapAreaUncheckedCreateInput>
    /**
     * In case the WorldMapArea was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorldMapAreaUpdateInput, WorldMapAreaUncheckedUpdateInput>
  }


  /**
   * WorldMapArea delete
   */
  export type WorldMapAreaDeleteArgs = {
    /**
     * Select specific fields to fetch from the WorldMapArea
     */
    select?: WorldMapAreaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapAreaInclude | null
    /**
     * Filter which WorldMapArea to delete.
     */
    where: WorldMapAreaWhereUniqueInput
  }


  /**
   * WorldMapArea deleteMany
   */
  export type WorldMapAreaDeleteManyArgs = {
    /**
     * Filter which WorldMapAreas to delete
     */
    where?: WorldMapAreaWhereInput
  }


  /**
   * WorldMapArea.WorldMapOverlay
   */
  export type WorldMapArea$WorldMapOverlayArgs = {
    /**
     * Select specific fields to fetch from the WorldMapOverlay
     */
    select?: WorldMapOverlaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapOverlayInclude | null
    where?: WorldMapOverlayWhereInput
    orderBy?: Enumerable<WorldMapOverlayOrderByWithRelationInput>
    cursor?: WorldMapOverlayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<WorldMapOverlayScalarFieldEnum>
  }


  /**
   * WorldMapArea without action
   */
  export type WorldMapAreaArgs = {
    /**
     * Select specific fields to fetch from the WorldMapArea
     */
    select?: WorldMapAreaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapAreaInclude | null
  }



  /**
   * Model WorldMapContinent
   */


  export type AggregateWorldMapContinent = {
    _count: WorldMapContinentCountAggregateOutputType | null
    _avg: WorldMapContinentAvgAggregateOutputType | null
    _sum: WorldMapContinentSumAggregateOutputType | null
    _min: WorldMapContinentMinAggregateOutputType | null
    _max: WorldMapContinentMaxAggregateOutputType | null
  }

  export type WorldMapContinentAvgAggregateOutputType = {
    id: number | null
    continentId: number | null
    left: number | null
    right: number | null
    top: number | null
    bottom: number | null
    offsetX: number | null
    offsetY: number | null
    scale: number | null
    taxiMinX: number | null
    taxiMinY: number | null
    taxiMaxX: number | null
    taxiMaxY: number | null
  }

  export type WorldMapContinentSumAggregateOutputType = {
    id: number | null
    continentId: number | null
    left: number | null
    right: number | null
    top: number | null
    bottom: number | null
    offsetX: number | null
    offsetY: number | null
    scale: number | null
    taxiMinX: number | null
    taxiMinY: number | null
    taxiMaxX: number | null
    taxiMaxY: number | null
  }

  export type WorldMapContinentMinAggregateOutputType = {
    id: number | null
    continentId: number | null
    left: number | null
    right: number | null
    top: number | null
    bottom: number | null
    offsetX: number | null
    offsetY: number | null
    scale: number | null
    taxiMinX: number | null
    taxiMinY: number | null
    taxiMaxX: number | null
    taxiMaxY: number | null
  }

  export type WorldMapContinentMaxAggregateOutputType = {
    id: number | null
    continentId: number | null
    left: number | null
    right: number | null
    top: number | null
    bottom: number | null
    offsetX: number | null
    offsetY: number | null
    scale: number | null
    taxiMinX: number | null
    taxiMinY: number | null
    taxiMaxX: number | null
    taxiMaxY: number | null
  }

  export type WorldMapContinentCountAggregateOutputType = {
    id: number
    continentId: number
    left: number
    right: number
    top: number
    bottom: number
    offsetX: number
    offsetY: number
    scale: number
    taxiMinX: number
    taxiMinY: number
    taxiMaxX: number
    taxiMaxY: number
    _all: number
  }


  export type WorldMapContinentAvgAggregateInputType = {
    id?: true
    continentId?: true
    left?: true
    right?: true
    top?: true
    bottom?: true
    offsetX?: true
    offsetY?: true
    scale?: true
    taxiMinX?: true
    taxiMinY?: true
    taxiMaxX?: true
    taxiMaxY?: true
  }

  export type WorldMapContinentSumAggregateInputType = {
    id?: true
    continentId?: true
    left?: true
    right?: true
    top?: true
    bottom?: true
    offsetX?: true
    offsetY?: true
    scale?: true
    taxiMinX?: true
    taxiMinY?: true
    taxiMaxX?: true
    taxiMaxY?: true
  }

  export type WorldMapContinentMinAggregateInputType = {
    id?: true
    continentId?: true
    left?: true
    right?: true
    top?: true
    bottom?: true
    offsetX?: true
    offsetY?: true
    scale?: true
    taxiMinX?: true
    taxiMinY?: true
    taxiMaxX?: true
    taxiMaxY?: true
  }

  export type WorldMapContinentMaxAggregateInputType = {
    id?: true
    continentId?: true
    left?: true
    right?: true
    top?: true
    bottom?: true
    offsetX?: true
    offsetY?: true
    scale?: true
    taxiMinX?: true
    taxiMinY?: true
    taxiMaxX?: true
    taxiMaxY?: true
  }

  export type WorldMapContinentCountAggregateInputType = {
    id?: true
    continentId?: true
    left?: true
    right?: true
    top?: true
    bottom?: true
    offsetX?: true
    offsetY?: true
    scale?: true
    taxiMinX?: true
    taxiMinY?: true
    taxiMaxX?: true
    taxiMaxY?: true
    _all?: true
  }

  export type WorldMapContinentAggregateArgs = {
    /**
     * Filter which WorldMapContinent to aggregate.
     */
    where?: WorldMapContinentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldMapContinents to fetch.
     */
    orderBy?: Enumerable<WorldMapContinentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorldMapContinentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldMapContinents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldMapContinents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorldMapContinents
    **/
    _count?: true | WorldMapContinentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorldMapContinentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorldMapContinentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorldMapContinentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorldMapContinentMaxAggregateInputType
  }

  export type GetWorldMapContinentAggregateType<T extends WorldMapContinentAggregateArgs> = {
        [P in keyof T & keyof AggregateWorldMapContinent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorldMapContinent[P]>
      : GetScalarType<T[P], AggregateWorldMapContinent[P]>
  }




  export type WorldMapContinentGroupByArgs = {
    where?: WorldMapContinentWhereInput
    orderBy?: Enumerable<WorldMapContinentOrderByWithAggregationInput>
    by: WorldMapContinentScalarFieldEnum[]
    having?: WorldMapContinentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorldMapContinentCountAggregateInputType | true
    _avg?: WorldMapContinentAvgAggregateInputType
    _sum?: WorldMapContinentSumAggregateInputType
    _min?: WorldMapContinentMinAggregateInputType
    _max?: WorldMapContinentMaxAggregateInputType
  }


  export type WorldMapContinentGroupByOutputType = {
    id: number
    continentId: number
    left: number
    right: number
    top: number
    bottom: number
    offsetX: number
    offsetY: number
    scale: number
    taxiMinX: number
    taxiMinY: number
    taxiMaxX: number
    taxiMaxY: number
    _count: WorldMapContinentCountAggregateOutputType | null
    _avg: WorldMapContinentAvgAggregateOutputType | null
    _sum: WorldMapContinentSumAggregateOutputType | null
    _min: WorldMapContinentMinAggregateOutputType | null
    _max: WorldMapContinentMaxAggregateOutputType | null
  }

  type GetWorldMapContinentGroupByPayload<T extends WorldMapContinentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<WorldMapContinentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorldMapContinentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorldMapContinentGroupByOutputType[P]>
            : GetScalarType<T[P], WorldMapContinentGroupByOutputType[P]>
        }
      >
    >


  export type WorldMapContinentSelect = {
    id?: boolean
    continentId?: boolean
    continent?: boolean | ContinentArgs
    left?: boolean
    right?: boolean
    top?: boolean
    bottom?: boolean
    offsetX?: boolean
    offsetY?: boolean
    scale?: boolean
    taxiMinX?: boolean
    taxiMinY?: boolean
    taxiMaxX?: boolean
    taxiMaxY?: boolean
  }


  export type WorldMapContinentInclude = {
    continent?: boolean | ContinentArgs
  }

  export type WorldMapContinentGetPayload<S extends boolean | null | undefined | WorldMapContinentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? WorldMapContinent :
    S extends undefined ? never :
    S extends { include: any } & (WorldMapContinentArgs | WorldMapContinentFindManyArgs)
    ? WorldMapContinent  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'continent' ? ContinentGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (WorldMapContinentArgs | WorldMapContinentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'continent' ? ContinentGetPayload<S['select'][P]> :  P extends keyof WorldMapContinent ? WorldMapContinent[P] : never
  } 
      : WorldMapContinent


  type WorldMapContinentCountArgs = 
    Omit<WorldMapContinentFindManyArgs, 'select' | 'include'> & {
      select?: WorldMapContinentCountAggregateInputType | true
    }

  export interface WorldMapContinentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one WorldMapContinent that matches the filter.
     * @param {WorldMapContinentFindUniqueArgs} args - Arguments to find a WorldMapContinent
     * @example
     * // Get one WorldMapContinent
     * const worldMapContinent = await prisma.worldMapContinent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WorldMapContinentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WorldMapContinentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'WorldMapContinent'> extends True ? Prisma__WorldMapContinentClient<WorldMapContinentGetPayload<T>> : Prisma__WorldMapContinentClient<WorldMapContinentGetPayload<T> | null, null>

    /**
     * Find one WorldMapContinent that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WorldMapContinentFindUniqueOrThrowArgs} args - Arguments to find a WorldMapContinent
     * @example
     * // Get one WorldMapContinent
     * const worldMapContinent = await prisma.worldMapContinent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WorldMapContinentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, WorldMapContinentFindUniqueOrThrowArgs>
    ): Prisma__WorldMapContinentClient<WorldMapContinentGetPayload<T>>

    /**
     * Find the first WorldMapContinent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldMapContinentFindFirstArgs} args - Arguments to find a WorldMapContinent
     * @example
     * // Get one WorldMapContinent
     * const worldMapContinent = await prisma.worldMapContinent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WorldMapContinentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WorldMapContinentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'WorldMapContinent'> extends True ? Prisma__WorldMapContinentClient<WorldMapContinentGetPayload<T>> : Prisma__WorldMapContinentClient<WorldMapContinentGetPayload<T> | null, null>

    /**
     * Find the first WorldMapContinent that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldMapContinentFindFirstOrThrowArgs} args - Arguments to find a WorldMapContinent
     * @example
     * // Get one WorldMapContinent
     * const worldMapContinent = await prisma.worldMapContinent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WorldMapContinentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WorldMapContinentFindFirstOrThrowArgs>
    ): Prisma__WorldMapContinentClient<WorldMapContinentGetPayload<T>>

    /**
     * Find zero or more WorldMapContinents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldMapContinentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorldMapContinents
     * const worldMapContinents = await prisma.worldMapContinent.findMany()
     * 
     * // Get first 10 WorldMapContinents
     * const worldMapContinents = await prisma.worldMapContinent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const worldMapContinentWithIdOnly = await prisma.worldMapContinent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WorldMapContinentFindManyArgs>(
      args?: SelectSubset<T, WorldMapContinentFindManyArgs>
    ): Prisma.PrismaPromise<Array<WorldMapContinentGetPayload<T>>>

    /**
     * Create a WorldMapContinent.
     * @param {WorldMapContinentCreateArgs} args - Arguments to create a WorldMapContinent.
     * @example
     * // Create one WorldMapContinent
     * const WorldMapContinent = await prisma.worldMapContinent.create({
     *   data: {
     *     // ... data to create a WorldMapContinent
     *   }
     * })
     * 
    **/
    create<T extends WorldMapContinentCreateArgs>(
      args: SelectSubset<T, WorldMapContinentCreateArgs>
    ): Prisma__WorldMapContinentClient<WorldMapContinentGetPayload<T>>

    /**
     * Delete a WorldMapContinent.
     * @param {WorldMapContinentDeleteArgs} args - Arguments to delete one WorldMapContinent.
     * @example
     * // Delete one WorldMapContinent
     * const WorldMapContinent = await prisma.worldMapContinent.delete({
     *   where: {
     *     // ... filter to delete one WorldMapContinent
     *   }
     * })
     * 
    **/
    delete<T extends WorldMapContinentDeleteArgs>(
      args: SelectSubset<T, WorldMapContinentDeleteArgs>
    ): Prisma__WorldMapContinentClient<WorldMapContinentGetPayload<T>>

    /**
     * Update one WorldMapContinent.
     * @param {WorldMapContinentUpdateArgs} args - Arguments to update one WorldMapContinent.
     * @example
     * // Update one WorldMapContinent
     * const worldMapContinent = await prisma.worldMapContinent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WorldMapContinentUpdateArgs>(
      args: SelectSubset<T, WorldMapContinentUpdateArgs>
    ): Prisma__WorldMapContinentClient<WorldMapContinentGetPayload<T>>

    /**
     * Delete zero or more WorldMapContinents.
     * @param {WorldMapContinentDeleteManyArgs} args - Arguments to filter WorldMapContinents to delete.
     * @example
     * // Delete a few WorldMapContinents
     * const { count } = await prisma.worldMapContinent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WorldMapContinentDeleteManyArgs>(
      args?: SelectSubset<T, WorldMapContinentDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorldMapContinents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldMapContinentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorldMapContinents
     * const worldMapContinent = await prisma.worldMapContinent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WorldMapContinentUpdateManyArgs>(
      args: SelectSubset<T, WorldMapContinentUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorldMapContinent.
     * @param {WorldMapContinentUpsertArgs} args - Arguments to update or create a WorldMapContinent.
     * @example
     * // Update or create a WorldMapContinent
     * const worldMapContinent = await prisma.worldMapContinent.upsert({
     *   create: {
     *     // ... data to create a WorldMapContinent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorldMapContinent we want to update
     *   }
     * })
    **/
    upsert<T extends WorldMapContinentUpsertArgs>(
      args: SelectSubset<T, WorldMapContinentUpsertArgs>
    ): Prisma__WorldMapContinentClient<WorldMapContinentGetPayload<T>>

    /**
     * Count the number of WorldMapContinents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldMapContinentCountArgs} args - Arguments to filter WorldMapContinents to count.
     * @example
     * // Count the number of WorldMapContinents
     * const count = await prisma.worldMapContinent.count({
     *   where: {
     *     // ... the filter for the WorldMapContinents we want to count
     *   }
     * })
    **/
    count<T extends WorldMapContinentCountArgs>(
      args?: Subset<T, WorldMapContinentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorldMapContinentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorldMapContinent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldMapContinentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorldMapContinentAggregateArgs>(args: Subset<T, WorldMapContinentAggregateArgs>): Prisma.PrismaPromise<GetWorldMapContinentAggregateType<T>>

    /**
     * Group by WorldMapContinent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldMapContinentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorldMapContinentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorldMapContinentGroupByArgs['orderBy'] }
        : { orderBy?: WorldMapContinentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorldMapContinentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorldMapContinentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for WorldMapContinent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WorldMapContinentClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    continent<T extends ContinentArgs= {}>(args?: Subset<T, ContinentArgs>): Prisma__ContinentClient<ContinentGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * WorldMapContinent base type for findUnique actions
   */
  export type WorldMapContinentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the WorldMapContinent
     */
    select?: WorldMapContinentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapContinentInclude | null
    /**
     * Filter, which WorldMapContinent to fetch.
     */
    where: WorldMapContinentWhereUniqueInput
  }

  /**
   * WorldMapContinent findUnique
   */
  export interface WorldMapContinentFindUniqueArgs extends WorldMapContinentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WorldMapContinent findUniqueOrThrow
   */
  export type WorldMapContinentFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the WorldMapContinent
     */
    select?: WorldMapContinentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapContinentInclude | null
    /**
     * Filter, which WorldMapContinent to fetch.
     */
    where: WorldMapContinentWhereUniqueInput
  }


  /**
   * WorldMapContinent base type for findFirst actions
   */
  export type WorldMapContinentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the WorldMapContinent
     */
    select?: WorldMapContinentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapContinentInclude | null
    /**
     * Filter, which WorldMapContinent to fetch.
     */
    where?: WorldMapContinentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldMapContinents to fetch.
     */
    orderBy?: Enumerable<WorldMapContinentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorldMapContinents.
     */
    cursor?: WorldMapContinentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldMapContinents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldMapContinents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorldMapContinents.
     */
    distinct?: Enumerable<WorldMapContinentScalarFieldEnum>
  }

  /**
   * WorldMapContinent findFirst
   */
  export interface WorldMapContinentFindFirstArgs extends WorldMapContinentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WorldMapContinent findFirstOrThrow
   */
  export type WorldMapContinentFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the WorldMapContinent
     */
    select?: WorldMapContinentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapContinentInclude | null
    /**
     * Filter, which WorldMapContinent to fetch.
     */
    where?: WorldMapContinentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldMapContinents to fetch.
     */
    orderBy?: Enumerable<WorldMapContinentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorldMapContinents.
     */
    cursor?: WorldMapContinentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldMapContinents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldMapContinents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorldMapContinents.
     */
    distinct?: Enumerable<WorldMapContinentScalarFieldEnum>
  }


  /**
   * WorldMapContinent findMany
   */
  export type WorldMapContinentFindManyArgs = {
    /**
     * Select specific fields to fetch from the WorldMapContinent
     */
    select?: WorldMapContinentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapContinentInclude | null
    /**
     * Filter, which WorldMapContinents to fetch.
     */
    where?: WorldMapContinentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldMapContinents to fetch.
     */
    orderBy?: Enumerable<WorldMapContinentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorldMapContinents.
     */
    cursor?: WorldMapContinentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldMapContinents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldMapContinents.
     */
    skip?: number
    distinct?: Enumerable<WorldMapContinentScalarFieldEnum>
  }


  /**
   * WorldMapContinent create
   */
  export type WorldMapContinentCreateArgs = {
    /**
     * Select specific fields to fetch from the WorldMapContinent
     */
    select?: WorldMapContinentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapContinentInclude | null
    /**
     * The data needed to create a WorldMapContinent.
     */
    data: XOR<WorldMapContinentCreateInput, WorldMapContinentUncheckedCreateInput>
  }


  /**
   * WorldMapContinent update
   */
  export type WorldMapContinentUpdateArgs = {
    /**
     * Select specific fields to fetch from the WorldMapContinent
     */
    select?: WorldMapContinentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapContinentInclude | null
    /**
     * The data needed to update a WorldMapContinent.
     */
    data: XOR<WorldMapContinentUpdateInput, WorldMapContinentUncheckedUpdateInput>
    /**
     * Choose, which WorldMapContinent to update.
     */
    where: WorldMapContinentWhereUniqueInput
  }


  /**
   * WorldMapContinent updateMany
   */
  export type WorldMapContinentUpdateManyArgs = {
    /**
     * The data used to update WorldMapContinents.
     */
    data: XOR<WorldMapContinentUpdateManyMutationInput, WorldMapContinentUncheckedUpdateManyInput>
    /**
     * Filter which WorldMapContinents to update
     */
    where?: WorldMapContinentWhereInput
  }


  /**
   * WorldMapContinent upsert
   */
  export type WorldMapContinentUpsertArgs = {
    /**
     * Select specific fields to fetch from the WorldMapContinent
     */
    select?: WorldMapContinentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapContinentInclude | null
    /**
     * The filter to search for the WorldMapContinent to update in case it exists.
     */
    where: WorldMapContinentWhereUniqueInput
    /**
     * In case the WorldMapContinent found by the `where` argument doesn't exist, create a new WorldMapContinent with this data.
     */
    create: XOR<WorldMapContinentCreateInput, WorldMapContinentUncheckedCreateInput>
    /**
     * In case the WorldMapContinent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorldMapContinentUpdateInput, WorldMapContinentUncheckedUpdateInput>
  }


  /**
   * WorldMapContinent delete
   */
  export type WorldMapContinentDeleteArgs = {
    /**
     * Select specific fields to fetch from the WorldMapContinent
     */
    select?: WorldMapContinentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapContinentInclude | null
    /**
     * Filter which WorldMapContinent to delete.
     */
    where: WorldMapContinentWhereUniqueInput
  }


  /**
   * WorldMapContinent deleteMany
   */
  export type WorldMapContinentDeleteManyArgs = {
    /**
     * Filter which WorldMapContinents to delete
     */
    where?: WorldMapContinentWhereInput
  }


  /**
   * WorldMapContinent without action
   */
  export type WorldMapContinentArgs = {
    /**
     * Select specific fields to fetch from the WorldMapContinent
     */
    select?: WorldMapContinentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapContinentInclude | null
  }



  /**
   * Model WorldMapOverlay
   */


  export type AggregateWorldMapOverlay = {
    _count: WorldMapOverlayCountAggregateOutputType | null
    _avg: WorldMapOverlayAvgAggregateOutputType | null
    _sum: WorldMapOverlaySumAggregateOutputType | null
    _min: WorldMapOverlayMinAggregateOutputType | null
    _max: WorldMapOverlayMaxAggregateOutputType | null
  }

  export type WorldMapOverlayAvgAggregateOutputType = {
    id: number | null
    worldMapAreaId: number | null
    areaId_1: number | null
    areaId_2: number | null
    areaId_3: number | null
    areaId_4: number | null
    mapPointX: number | null
    mapPointY: number | null
    textureWidth: number | null
    textureHeight: number | null
    offsetX: number | null
    offsetY: number | null
    hitRectTop: number | null
    hitRectLeft: number | null
    hitRectBottom: number | null
    hitRectRight: number | null
  }

  export type WorldMapOverlaySumAggregateOutputType = {
    id: number | null
    worldMapAreaId: number | null
    areaId_1: number | null
    areaId_2: number | null
    areaId_3: number | null
    areaId_4: number | null
    mapPointX: number | null
    mapPointY: number | null
    textureWidth: number | null
    textureHeight: number | null
    offsetX: number | null
    offsetY: number | null
    hitRectTop: number | null
    hitRectLeft: number | null
    hitRectBottom: number | null
    hitRectRight: number | null
  }

  export type WorldMapOverlayMinAggregateOutputType = {
    id: number | null
    worldMapAreaId: number | null
    areaId_1: number | null
    areaId_2: number | null
    areaId_3: number | null
    areaId_4: number | null
    mapPointX: number | null
    mapPointY: number | null
    texture: string | null
    textureWidth: number | null
    textureHeight: number | null
    offsetX: number | null
    offsetY: number | null
    hitRectTop: number | null
    hitRectLeft: number | null
    hitRectBottom: number | null
    hitRectRight: number | null
  }

  export type WorldMapOverlayMaxAggregateOutputType = {
    id: number | null
    worldMapAreaId: number | null
    areaId_1: number | null
    areaId_2: number | null
    areaId_3: number | null
    areaId_4: number | null
    mapPointX: number | null
    mapPointY: number | null
    texture: string | null
    textureWidth: number | null
    textureHeight: number | null
    offsetX: number | null
    offsetY: number | null
    hitRectTop: number | null
    hitRectLeft: number | null
    hitRectBottom: number | null
    hitRectRight: number | null
  }

  export type WorldMapOverlayCountAggregateOutputType = {
    id: number
    worldMapAreaId: number
    areaId_1: number
    areaId_2: number
    areaId_3: number
    areaId_4: number
    mapPointX: number
    mapPointY: number
    texture: number
    textureWidth: number
    textureHeight: number
    offsetX: number
    offsetY: number
    hitRectTop: number
    hitRectLeft: number
    hitRectBottom: number
    hitRectRight: number
    _all: number
  }


  export type WorldMapOverlayAvgAggregateInputType = {
    id?: true
    worldMapAreaId?: true
    areaId_1?: true
    areaId_2?: true
    areaId_3?: true
    areaId_4?: true
    mapPointX?: true
    mapPointY?: true
    textureWidth?: true
    textureHeight?: true
    offsetX?: true
    offsetY?: true
    hitRectTop?: true
    hitRectLeft?: true
    hitRectBottom?: true
    hitRectRight?: true
  }

  export type WorldMapOverlaySumAggregateInputType = {
    id?: true
    worldMapAreaId?: true
    areaId_1?: true
    areaId_2?: true
    areaId_3?: true
    areaId_4?: true
    mapPointX?: true
    mapPointY?: true
    textureWidth?: true
    textureHeight?: true
    offsetX?: true
    offsetY?: true
    hitRectTop?: true
    hitRectLeft?: true
    hitRectBottom?: true
    hitRectRight?: true
  }

  export type WorldMapOverlayMinAggregateInputType = {
    id?: true
    worldMapAreaId?: true
    areaId_1?: true
    areaId_2?: true
    areaId_3?: true
    areaId_4?: true
    mapPointX?: true
    mapPointY?: true
    texture?: true
    textureWidth?: true
    textureHeight?: true
    offsetX?: true
    offsetY?: true
    hitRectTop?: true
    hitRectLeft?: true
    hitRectBottom?: true
    hitRectRight?: true
  }

  export type WorldMapOverlayMaxAggregateInputType = {
    id?: true
    worldMapAreaId?: true
    areaId_1?: true
    areaId_2?: true
    areaId_3?: true
    areaId_4?: true
    mapPointX?: true
    mapPointY?: true
    texture?: true
    textureWidth?: true
    textureHeight?: true
    offsetX?: true
    offsetY?: true
    hitRectTop?: true
    hitRectLeft?: true
    hitRectBottom?: true
    hitRectRight?: true
  }

  export type WorldMapOverlayCountAggregateInputType = {
    id?: true
    worldMapAreaId?: true
    areaId_1?: true
    areaId_2?: true
    areaId_3?: true
    areaId_4?: true
    mapPointX?: true
    mapPointY?: true
    texture?: true
    textureWidth?: true
    textureHeight?: true
    offsetX?: true
    offsetY?: true
    hitRectTop?: true
    hitRectLeft?: true
    hitRectBottom?: true
    hitRectRight?: true
    _all?: true
  }

  export type WorldMapOverlayAggregateArgs = {
    /**
     * Filter which WorldMapOverlay to aggregate.
     */
    where?: WorldMapOverlayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldMapOverlays to fetch.
     */
    orderBy?: Enumerable<WorldMapOverlayOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorldMapOverlayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldMapOverlays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldMapOverlays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorldMapOverlays
    **/
    _count?: true | WorldMapOverlayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorldMapOverlayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorldMapOverlaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorldMapOverlayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorldMapOverlayMaxAggregateInputType
  }

  export type GetWorldMapOverlayAggregateType<T extends WorldMapOverlayAggregateArgs> = {
        [P in keyof T & keyof AggregateWorldMapOverlay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorldMapOverlay[P]>
      : GetScalarType<T[P], AggregateWorldMapOverlay[P]>
  }




  export type WorldMapOverlayGroupByArgs = {
    where?: WorldMapOverlayWhereInput
    orderBy?: Enumerable<WorldMapOverlayOrderByWithAggregationInput>
    by: WorldMapOverlayScalarFieldEnum[]
    having?: WorldMapOverlayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorldMapOverlayCountAggregateInputType | true
    _avg?: WorldMapOverlayAvgAggregateInputType
    _sum?: WorldMapOverlaySumAggregateInputType
    _min?: WorldMapOverlayMinAggregateInputType
    _max?: WorldMapOverlayMaxAggregateInputType
  }


  export type WorldMapOverlayGroupByOutputType = {
    id: number
    worldMapAreaId: number
    areaId_1: number
    areaId_2: number
    areaId_3: number
    areaId_4: number
    mapPointX: number
    mapPointY: number
    texture: string
    textureWidth: number
    textureHeight: number
    offsetX: number
    offsetY: number
    hitRectTop: number
    hitRectLeft: number
    hitRectBottom: number
    hitRectRight: number
    _count: WorldMapOverlayCountAggregateOutputType | null
    _avg: WorldMapOverlayAvgAggregateOutputType | null
    _sum: WorldMapOverlaySumAggregateOutputType | null
    _min: WorldMapOverlayMinAggregateOutputType | null
    _max: WorldMapOverlayMaxAggregateOutputType | null
  }

  type GetWorldMapOverlayGroupByPayload<T extends WorldMapOverlayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<WorldMapOverlayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorldMapOverlayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorldMapOverlayGroupByOutputType[P]>
            : GetScalarType<T[P], WorldMapOverlayGroupByOutputType[P]>
        }
      >
    >


  export type WorldMapOverlaySelect = {
    id?: boolean
    worldMapAreaId?: boolean
    mapArea?: boolean | WorldMapAreaArgs
    areaId_1?: boolean
    area_1?: boolean | AreaTableArgs
    areaId_2?: boolean
    area_2?: boolean | AreaTableArgs
    areaId_3?: boolean
    area_3?: boolean | AreaTableArgs
    areaId_4?: boolean
    area_4?: boolean | AreaTableArgs
    mapPointX?: boolean
    mapPointY?: boolean
    texture?: boolean
    textureWidth?: boolean
    textureHeight?: boolean
    offsetX?: boolean
    offsetY?: boolean
    hitRectTop?: boolean
    hitRectLeft?: boolean
    hitRectBottom?: boolean
    hitRectRight?: boolean
  }


  export type WorldMapOverlayInclude = {
    mapArea?: boolean | WorldMapAreaArgs
    area_1?: boolean | AreaTableArgs
    area_2?: boolean | AreaTableArgs
    area_3?: boolean | AreaTableArgs
    area_4?: boolean | AreaTableArgs
  }

  export type WorldMapOverlayGetPayload<S extends boolean | null | undefined | WorldMapOverlayArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? WorldMapOverlay :
    S extends undefined ? never :
    S extends { include: any } & (WorldMapOverlayArgs | WorldMapOverlayFindManyArgs)
    ? WorldMapOverlay  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'mapArea' ? WorldMapAreaGetPayload<S['include'][P]> :
        P extends 'area_1' ? AreaTableGetPayload<S['include'][P]> :
        P extends 'area_2' ? AreaTableGetPayload<S['include'][P]> :
        P extends 'area_3' ? AreaTableGetPayload<S['include'][P]> :
        P extends 'area_4' ? AreaTableGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (WorldMapOverlayArgs | WorldMapOverlayFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'mapArea' ? WorldMapAreaGetPayload<S['select'][P]> :
        P extends 'area_1' ? AreaTableGetPayload<S['select'][P]> :
        P extends 'area_2' ? AreaTableGetPayload<S['select'][P]> :
        P extends 'area_3' ? AreaTableGetPayload<S['select'][P]> :
        P extends 'area_4' ? AreaTableGetPayload<S['select'][P]> :  P extends keyof WorldMapOverlay ? WorldMapOverlay[P] : never
  } 
      : WorldMapOverlay


  type WorldMapOverlayCountArgs = 
    Omit<WorldMapOverlayFindManyArgs, 'select' | 'include'> & {
      select?: WorldMapOverlayCountAggregateInputType | true
    }

  export interface WorldMapOverlayDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one WorldMapOverlay that matches the filter.
     * @param {WorldMapOverlayFindUniqueArgs} args - Arguments to find a WorldMapOverlay
     * @example
     * // Get one WorldMapOverlay
     * const worldMapOverlay = await prisma.worldMapOverlay.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WorldMapOverlayFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WorldMapOverlayFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'WorldMapOverlay'> extends True ? Prisma__WorldMapOverlayClient<WorldMapOverlayGetPayload<T>> : Prisma__WorldMapOverlayClient<WorldMapOverlayGetPayload<T> | null, null>

    /**
     * Find one WorldMapOverlay that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WorldMapOverlayFindUniqueOrThrowArgs} args - Arguments to find a WorldMapOverlay
     * @example
     * // Get one WorldMapOverlay
     * const worldMapOverlay = await prisma.worldMapOverlay.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WorldMapOverlayFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, WorldMapOverlayFindUniqueOrThrowArgs>
    ): Prisma__WorldMapOverlayClient<WorldMapOverlayGetPayload<T>>

    /**
     * Find the first WorldMapOverlay that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldMapOverlayFindFirstArgs} args - Arguments to find a WorldMapOverlay
     * @example
     * // Get one WorldMapOverlay
     * const worldMapOverlay = await prisma.worldMapOverlay.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WorldMapOverlayFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WorldMapOverlayFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'WorldMapOverlay'> extends True ? Prisma__WorldMapOverlayClient<WorldMapOverlayGetPayload<T>> : Prisma__WorldMapOverlayClient<WorldMapOverlayGetPayload<T> | null, null>

    /**
     * Find the first WorldMapOverlay that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldMapOverlayFindFirstOrThrowArgs} args - Arguments to find a WorldMapOverlay
     * @example
     * // Get one WorldMapOverlay
     * const worldMapOverlay = await prisma.worldMapOverlay.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WorldMapOverlayFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WorldMapOverlayFindFirstOrThrowArgs>
    ): Prisma__WorldMapOverlayClient<WorldMapOverlayGetPayload<T>>

    /**
     * Find zero or more WorldMapOverlays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldMapOverlayFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorldMapOverlays
     * const worldMapOverlays = await prisma.worldMapOverlay.findMany()
     * 
     * // Get first 10 WorldMapOverlays
     * const worldMapOverlays = await prisma.worldMapOverlay.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const worldMapOverlayWithIdOnly = await prisma.worldMapOverlay.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WorldMapOverlayFindManyArgs>(
      args?: SelectSubset<T, WorldMapOverlayFindManyArgs>
    ): Prisma.PrismaPromise<Array<WorldMapOverlayGetPayload<T>>>

    /**
     * Create a WorldMapOverlay.
     * @param {WorldMapOverlayCreateArgs} args - Arguments to create a WorldMapOverlay.
     * @example
     * // Create one WorldMapOverlay
     * const WorldMapOverlay = await prisma.worldMapOverlay.create({
     *   data: {
     *     // ... data to create a WorldMapOverlay
     *   }
     * })
     * 
    **/
    create<T extends WorldMapOverlayCreateArgs>(
      args: SelectSubset<T, WorldMapOverlayCreateArgs>
    ): Prisma__WorldMapOverlayClient<WorldMapOverlayGetPayload<T>>

    /**
     * Delete a WorldMapOverlay.
     * @param {WorldMapOverlayDeleteArgs} args - Arguments to delete one WorldMapOverlay.
     * @example
     * // Delete one WorldMapOverlay
     * const WorldMapOverlay = await prisma.worldMapOverlay.delete({
     *   where: {
     *     // ... filter to delete one WorldMapOverlay
     *   }
     * })
     * 
    **/
    delete<T extends WorldMapOverlayDeleteArgs>(
      args: SelectSubset<T, WorldMapOverlayDeleteArgs>
    ): Prisma__WorldMapOverlayClient<WorldMapOverlayGetPayload<T>>

    /**
     * Update one WorldMapOverlay.
     * @param {WorldMapOverlayUpdateArgs} args - Arguments to update one WorldMapOverlay.
     * @example
     * // Update one WorldMapOverlay
     * const worldMapOverlay = await prisma.worldMapOverlay.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WorldMapOverlayUpdateArgs>(
      args: SelectSubset<T, WorldMapOverlayUpdateArgs>
    ): Prisma__WorldMapOverlayClient<WorldMapOverlayGetPayload<T>>

    /**
     * Delete zero or more WorldMapOverlays.
     * @param {WorldMapOverlayDeleteManyArgs} args - Arguments to filter WorldMapOverlays to delete.
     * @example
     * // Delete a few WorldMapOverlays
     * const { count } = await prisma.worldMapOverlay.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WorldMapOverlayDeleteManyArgs>(
      args?: SelectSubset<T, WorldMapOverlayDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorldMapOverlays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldMapOverlayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorldMapOverlays
     * const worldMapOverlay = await prisma.worldMapOverlay.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WorldMapOverlayUpdateManyArgs>(
      args: SelectSubset<T, WorldMapOverlayUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorldMapOverlay.
     * @param {WorldMapOverlayUpsertArgs} args - Arguments to update or create a WorldMapOverlay.
     * @example
     * // Update or create a WorldMapOverlay
     * const worldMapOverlay = await prisma.worldMapOverlay.upsert({
     *   create: {
     *     // ... data to create a WorldMapOverlay
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorldMapOverlay we want to update
     *   }
     * })
    **/
    upsert<T extends WorldMapOverlayUpsertArgs>(
      args: SelectSubset<T, WorldMapOverlayUpsertArgs>
    ): Prisma__WorldMapOverlayClient<WorldMapOverlayGetPayload<T>>

    /**
     * Count the number of WorldMapOverlays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldMapOverlayCountArgs} args - Arguments to filter WorldMapOverlays to count.
     * @example
     * // Count the number of WorldMapOverlays
     * const count = await prisma.worldMapOverlay.count({
     *   where: {
     *     // ... the filter for the WorldMapOverlays we want to count
     *   }
     * })
    **/
    count<T extends WorldMapOverlayCountArgs>(
      args?: Subset<T, WorldMapOverlayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorldMapOverlayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorldMapOverlay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldMapOverlayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorldMapOverlayAggregateArgs>(args: Subset<T, WorldMapOverlayAggregateArgs>): Prisma.PrismaPromise<GetWorldMapOverlayAggregateType<T>>

    /**
     * Group by WorldMapOverlay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldMapOverlayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorldMapOverlayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorldMapOverlayGroupByArgs['orderBy'] }
        : { orderBy?: WorldMapOverlayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorldMapOverlayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorldMapOverlayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for WorldMapOverlay.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WorldMapOverlayClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    mapArea<T extends WorldMapAreaArgs= {}>(args?: Subset<T, WorldMapAreaArgs>): Prisma__WorldMapAreaClient<WorldMapAreaGetPayload<T> | Null>;

    area_1<T extends AreaTableArgs= {}>(args?: Subset<T, AreaTableArgs>): Prisma__AreaTableClient<AreaTableGetPayload<T> | Null>;

    area_2<T extends AreaTableArgs= {}>(args?: Subset<T, AreaTableArgs>): Prisma__AreaTableClient<AreaTableGetPayload<T> | Null>;

    area_3<T extends AreaTableArgs= {}>(args?: Subset<T, AreaTableArgs>): Prisma__AreaTableClient<AreaTableGetPayload<T> | Null>;

    area_4<T extends AreaTableArgs= {}>(args?: Subset<T, AreaTableArgs>): Prisma__AreaTableClient<AreaTableGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * WorldMapOverlay base type for findUnique actions
   */
  export type WorldMapOverlayFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the WorldMapOverlay
     */
    select?: WorldMapOverlaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapOverlayInclude | null
    /**
     * Filter, which WorldMapOverlay to fetch.
     */
    where: WorldMapOverlayWhereUniqueInput
  }

  /**
   * WorldMapOverlay findUnique
   */
  export interface WorldMapOverlayFindUniqueArgs extends WorldMapOverlayFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WorldMapOverlay findUniqueOrThrow
   */
  export type WorldMapOverlayFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the WorldMapOverlay
     */
    select?: WorldMapOverlaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapOverlayInclude | null
    /**
     * Filter, which WorldMapOverlay to fetch.
     */
    where: WorldMapOverlayWhereUniqueInput
  }


  /**
   * WorldMapOverlay base type for findFirst actions
   */
  export type WorldMapOverlayFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the WorldMapOverlay
     */
    select?: WorldMapOverlaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapOverlayInclude | null
    /**
     * Filter, which WorldMapOverlay to fetch.
     */
    where?: WorldMapOverlayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldMapOverlays to fetch.
     */
    orderBy?: Enumerable<WorldMapOverlayOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorldMapOverlays.
     */
    cursor?: WorldMapOverlayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldMapOverlays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldMapOverlays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorldMapOverlays.
     */
    distinct?: Enumerable<WorldMapOverlayScalarFieldEnum>
  }

  /**
   * WorldMapOverlay findFirst
   */
  export interface WorldMapOverlayFindFirstArgs extends WorldMapOverlayFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WorldMapOverlay findFirstOrThrow
   */
  export type WorldMapOverlayFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the WorldMapOverlay
     */
    select?: WorldMapOverlaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapOverlayInclude | null
    /**
     * Filter, which WorldMapOverlay to fetch.
     */
    where?: WorldMapOverlayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldMapOverlays to fetch.
     */
    orderBy?: Enumerable<WorldMapOverlayOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorldMapOverlays.
     */
    cursor?: WorldMapOverlayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldMapOverlays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldMapOverlays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorldMapOverlays.
     */
    distinct?: Enumerable<WorldMapOverlayScalarFieldEnum>
  }


  /**
   * WorldMapOverlay findMany
   */
  export type WorldMapOverlayFindManyArgs = {
    /**
     * Select specific fields to fetch from the WorldMapOverlay
     */
    select?: WorldMapOverlaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapOverlayInclude | null
    /**
     * Filter, which WorldMapOverlays to fetch.
     */
    where?: WorldMapOverlayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldMapOverlays to fetch.
     */
    orderBy?: Enumerable<WorldMapOverlayOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorldMapOverlays.
     */
    cursor?: WorldMapOverlayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldMapOverlays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldMapOverlays.
     */
    skip?: number
    distinct?: Enumerable<WorldMapOverlayScalarFieldEnum>
  }


  /**
   * WorldMapOverlay create
   */
  export type WorldMapOverlayCreateArgs = {
    /**
     * Select specific fields to fetch from the WorldMapOverlay
     */
    select?: WorldMapOverlaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapOverlayInclude | null
    /**
     * The data needed to create a WorldMapOverlay.
     */
    data: XOR<WorldMapOverlayCreateInput, WorldMapOverlayUncheckedCreateInput>
  }


  /**
   * WorldMapOverlay update
   */
  export type WorldMapOverlayUpdateArgs = {
    /**
     * Select specific fields to fetch from the WorldMapOverlay
     */
    select?: WorldMapOverlaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapOverlayInclude | null
    /**
     * The data needed to update a WorldMapOverlay.
     */
    data: XOR<WorldMapOverlayUpdateInput, WorldMapOverlayUncheckedUpdateInput>
    /**
     * Choose, which WorldMapOverlay to update.
     */
    where: WorldMapOverlayWhereUniqueInput
  }


  /**
   * WorldMapOverlay updateMany
   */
  export type WorldMapOverlayUpdateManyArgs = {
    /**
     * The data used to update WorldMapOverlays.
     */
    data: XOR<WorldMapOverlayUpdateManyMutationInput, WorldMapOverlayUncheckedUpdateManyInput>
    /**
     * Filter which WorldMapOverlays to update
     */
    where?: WorldMapOverlayWhereInput
  }


  /**
   * WorldMapOverlay upsert
   */
  export type WorldMapOverlayUpsertArgs = {
    /**
     * Select specific fields to fetch from the WorldMapOverlay
     */
    select?: WorldMapOverlaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapOverlayInclude | null
    /**
     * The filter to search for the WorldMapOverlay to update in case it exists.
     */
    where: WorldMapOverlayWhereUniqueInput
    /**
     * In case the WorldMapOverlay found by the `where` argument doesn't exist, create a new WorldMapOverlay with this data.
     */
    create: XOR<WorldMapOverlayCreateInput, WorldMapOverlayUncheckedCreateInput>
    /**
     * In case the WorldMapOverlay was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorldMapOverlayUpdateInput, WorldMapOverlayUncheckedUpdateInput>
  }


  /**
   * WorldMapOverlay delete
   */
  export type WorldMapOverlayDeleteArgs = {
    /**
     * Select specific fields to fetch from the WorldMapOverlay
     */
    select?: WorldMapOverlaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapOverlayInclude | null
    /**
     * Filter which WorldMapOverlay to delete.
     */
    where: WorldMapOverlayWhereUniqueInput
  }


  /**
   * WorldMapOverlay deleteMany
   */
  export type WorldMapOverlayDeleteManyArgs = {
    /**
     * Filter which WorldMapOverlays to delete
     */
    where?: WorldMapOverlayWhereInput
  }


  /**
   * WorldMapOverlay without action
   */
  export type WorldMapOverlayArgs = {
    /**
     * Select specific fields to fetch from the WorldMapOverlay
     */
    select?: WorldMapOverlaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldMapOverlayInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AreaPOIScalarFieldEnum: {
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
  };

  export type AreaPOIScalarFieldEnum = (typeof AreaPOIScalarFieldEnum)[keyof typeof AreaPOIScalarFieldEnum]


  export const AreaTableScalarFieldEnum: {
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
  };

  export type AreaTableScalarFieldEnum = (typeof AreaTableScalarFieldEnum)[keyof typeof AreaTableScalarFieldEnum]


  export const AreaTriggerScalarFieldEnum: {
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
  };

  export type AreaTriggerScalarFieldEnum = (typeof AreaTriggerScalarFieldEnum)[keyof typeof AreaTriggerScalarFieldEnum]


  export const ContinentScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ContinentScalarFieldEnum = (typeof ContinentScalarFieldEnum)[keyof typeof ContinentScalarFieldEnum]


  export const CreatureDisplayInfoExtraScalarFieldEnum: {
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
  };

  export type CreatureDisplayInfoExtraScalarFieldEnum = (typeof CreatureDisplayInfoExtraScalarFieldEnum)[keyof typeof CreatureDisplayInfoExtraScalarFieldEnum]


  export const LightParamsScalarFieldEnum: {
    id: 'id',
    highlightSky: 'highlightSky',
    lightSkyboxId: 'lightSkyboxId',
    glow: 'glow',
    waterShallowAlpha: 'waterShallowAlpha',
    waterDeepAlpha: 'waterDeepAlpha',
    oceanShallowAlpha: 'oceanShallowAlpha',
    oceanDeepAlpha: 'oceanDeepAlpha',
    flags: 'flags'
  };

  export type LightParamsScalarFieldEnum = (typeof LightParamsScalarFieldEnum)[keyof typeof LightParamsScalarFieldEnum]


  export const LightScalarFieldEnum: {
    id: 'id',
    continentId: 'continentId',
    x: 'x',
    y: 'y',
    z: 'z',
    falloffStart: 'falloffStart',
    falloffEnd: 'falloffEnd',
    paramStandardId: 'paramStandardId',
    paramUnderwaterId: 'paramUnderwaterId',
    paramSunsetId: 'paramSunsetId',
    paramOtherId: 'paramOtherId',
    paramDeathId: 'paramDeathId'
  };

  export type LightScalarFieldEnum = (typeof LightScalarFieldEnum)[keyof typeof LightScalarFieldEnum]


  export const LightSkyboxScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type LightSkyboxScalarFieldEnum = (typeof LightSkyboxScalarFieldEnum)[keyof typeof LightSkyboxScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WMOAreaTableScalarFieldEnum: {
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
  };

  export type WMOAreaTableScalarFieldEnum = (typeof WMOAreaTableScalarFieldEnum)[keyof typeof WMOAreaTableScalarFieldEnum]


  export const WorldMapAreaScalarFieldEnum: {
    id: 'id',
    continentId: 'continentId',
    areaId: 'areaId',
    name: 'name',
    locLeft: 'locLeft',
    locRight: 'locRight',
    locTop: 'locTop',
    locBottom: 'locBottom'
  };

  export type WorldMapAreaScalarFieldEnum = (typeof WorldMapAreaScalarFieldEnum)[keyof typeof WorldMapAreaScalarFieldEnum]


  export const WorldMapContinentScalarFieldEnum: {
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
  };

  export type WorldMapContinentScalarFieldEnum = (typeof WorldMapContinentScalarFieldEnum)[keyof typeof WorldMapContinentScalarFieldEnum]


  export const WorldMapOverlayScalarFieldEnum: {
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
  };

  export type WorldMapOverlayScalarFieldEnum = (typeof WorldMapOverlayScalarFieldEnum)[keyof typeof WorldMapOverlayScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type ContinentWhereInput = {
    AND?: Enumerable<ContinentWhereInput>
    OR?: Enumerable<ContinentWhereInput>
    NOT?: Enumerable<ContinentWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    AreaPOI?: AreaPOIListRelationFilter
    AreaTable?: AreaTableListRelationFilter
    WorldMapArea?: WorldMapAreaListRelationFilter
    WorldMapContinent?: WorldMapContinentListRelationFilter
    AreaTrigger?: AreaTriggerListRelationFilter
    Light?: LightListRelationFilter
  }

  export type ContinentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    AreaPOI?: AreaPOIOrderByRelationAggregateInput
    AreaTable?: AreaTableOrderByRelationAggregateInput
    WorldMapArea?: WorldMapAreaOrderByRelationAggregateInput
    WorldMapContinent?: WorldMapContinentOrderByRelationAggregateInput
    AreaTrigger?: AreaTriggerOrderByRelationAggregateInput
    Light?: LightOrderByRelationAggregateInput
  }

  export type ContinentWhereUniqueInput = {
    id?: number
  }

  export type ContinentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ContinentCountOrderByAggregateInput
    _avg?: ContinentAvgOrderByAggregateInput
    _max?: ContinentMaxOrderByAggregateInput
    _min?: ContinentMinOrderByAggregateInput
    _sum?: ContinentSumOrderByAggregateInput
  }

  export type ContinentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ContinentScalarWhereWithAggregatesInput>
    OR?: Enumerable<ContinentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ContinentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type AreaPOIWhereInput = {
    AND?: Enumerable<AreaPOIWhereInput>
    OR?: Enumerable<AreaPOIWhereInput>
    NOT?: Enumerable<AreaPOIWhereInput>
    id?: IntFilter | number
    importance?: IntFilter | number
    icon?: IntFilter | number
    factionId?: IntFilter | number
    x?: FloatFilter | number
    y?: FloatFilter | number
    z?: FloatFilter | number
    continentId?: IntFilter | number
    continent?: XOR<ContinentRelationFilter, ContinentWhereInput>
    flags?: IntFilter | number
    areaId?: IntFilter | number
    area?: XOR<AreaTableRelationFilter, AreaTableWhereInput>
    name_enUS?: StringFilter | string
    name_enGB?: StringFilter | string
    name_koKR?: StringFilter | string
    name_frFR?: StringFilter | string
    name_deDE?: StringFilter | string
    name_enCN?: StringFilter | string
    name_zhCN?: StringFilter | string
    name_enTW?: StringFilter | string
    nameMask?: IntFilter | number
    description_enUS?: StringFilter | string
    description_enGB?: StringFilter | string
    description_koKR?: StringFilter | string
    description_frFR?: StringFilter | string
    description_deDE?: StringFilter | string
    description_enCN?: StringFilter | string
    description_zhCN?: StringFilter | string
    description_enTW?: StringFilter | string
    descriptionMask?: IntFilter | number
    worldStateId?: IntFilter | number
  }

  export type AreaPOIOrderByWithRelationInput = {
    id?: SortOrder
    importance?: SortOrder
    icon?: SortOrder
    factionId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    continentId?: SortOrder
    continent?: ContinentOrderByWithRelationInput
    flags?: SortOrder
    areaId?: SortOrder
    area?: AreaTableOrderByWithRelationInput
    name_enUS?: SortOrder
    name_enGB?: SortOrder
    name_koKR?: SortOrder
    name_frFR?: SortOrder
    name_deDE?: SortOrder
    name_enCN?: SortOrder
    name_zhCN?: SortOrder
    name_enTW?: SortOrder
    nameMask?: SortOrder
    description_enUS?: SortOrder
    description_enGB?: SortOrder
    description_koKR?: SortOrder
    description_frFR?: SortOrder
    description_deDE?: SortOrder
    description_enCN?: SortOrder
    description_zhCN?: SortOrder
    description_enTW?: SortOrder
    descriptionMask?: SortOrder
    worldStateId?: SortOrder
  }

  export type AreaPOIWhereUniqueInput = {
    id?: number
  }

  export type AreaPOIOrderByWithAggregationInput = {
    id?: SortOrder
    importance?: SortOrder
    icon?: SortOrder
    factionId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    continentId?: SortOrder
    flags?: SortOrder
    areaId?: SortOrder
    name_enUS?: SortOrder
    name_enGB?: SortOrder
    name_koKR?: SortOrder
    name_frFR?: SortOrder
    name_deDE?: SortOrder
    name_enCN?: SortOrder
    name_zhCN?: SortOrder
    name_enTW?: SortOrder
    nameMask?: SortOrder
    description_enUS?: SortOrder
    description_enGB?: SortOrder
    description_koKR?: SortOrder
    description_frFR?: SortOrder
    description_deDE?: SortOrder
    description_enCN?: SortOrder
    description_zhCN?: SortOrder
    description_enTW?: SortOrder
    descriptionMask?: SortOrder
    worldStateId?: SortOrder
    _count?: AreaPOICountOrderByAggregateInput
    _avg?: AreaPOIAvgOrderByAggregateInput
    _max?: AreaPOIMaxOrderByAggregateInput
    _min?: AreaPOIMinOrderByAggregateInput
    _sum?: AreaPOISumOrderByAggregateInput
  }

  export type AreaPOIScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AreaPOIScalarWhereWithAggregatesInput>
    OR?: Enumerable<AreaPOIScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AreaPOIScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    importance?: IntWithAggregatesFilter | number
    icon?: IntWithAggregatesFilter | number
    factionId?: IntWithAggregatesFilter | number
    x?: FloatWithAggregatesFilter | number
    y?: FloatWithAggregatesFilter | number
    z?: FloatWithAggregatesFilter | number
    continentId?: IntWithAggregatesFilter | number
    flags?: IntWithAggregatesFilter | number
    areaId?: IntWithAggregatesFilter | number
    name_enUS?: StringWithAggregatesFilter | string
    name_enGB?: StringWithAggregatesFilter | string
    name_koKR?: StringWithAggregatesFilter | string
    name_frFR?: StringWithAggregatesFilter | string
    name_deDE?: StringWithAggregatesFilter | string
    name_enCN?: StringWithAggregatesFilter | string
    name_zhCN?: StringWithAggregatesFilter | string
    name_enTW?: StringWithAggregatesFilter | string
    nameMask?: IntWithAggregatesFilter | number
    description_enUS?: StringWithAggregatesFilter | string
    description_enGB?: StringWithAggregatesFilter | string
    description_koKR?: StringWithAggregatesFilter | string
    description_frFR?: StringWithAggregatesFilter | string
    description_deDE?: StringWithAggregatesFilter | string
    description_enCN?: StringWithAggregatesFilter | string
    description_zhCN?: StringWithAggregatesFilter | string
    description_enTW?: StringWithAggregatesFilter | string
    descriptionMask?: IntWithAggregatesFilter | number
    worldStateId?: IntWithAggregatesFilter | number
  }

  export type AreaTableWhereInput = {
    AND?: Enumerable<AreaTableWhereInput>
    OR?: Enumerable<AreaTableWhereInput>
    NOT?: Enumerable<AreaTableWhereInput>
    id?: IntFilter | number
    continentId?: IntFilter | number
    continent?: XOR<ContinentRelationFilter, ContinentWhereInput>
    parentAreaId?: IntFilter | number
    parentArea?: XOR<AreaTableRelationFilter, AreaTableWhereInput>
    areaBit?: IntFilter | number
    flags?: IntFilter | number
    soundPreferenceId?: IntFilter | number
    underwaterSoundPreferenceId?: IntFilter | number
    soundAmbienceId?: IntFilter | number
    zoneMusicId?: IntFilter | number
    zoneIntroMusicId?: IntFilter | number
    explorationLevel?: IntFilter | number
    name_enUS?: StringFilter | string
    name_enGB?: StringFilter | string
    name_koKR?: StringFilter | string
    name_frFR?: StringFilter | string
    name_deDE?: StringFilter | string
    name_enCN?: StringFilter | string
    name_zhCN?: StringFilter | string
    name_enTW?: StringFilter | string
    nameMask?: IntFilter | number
    factionGroupMask?: IntFilter | number
    liquidTypeId?: IntFilter | number
    minElevation?: FloatFilter | number
    ambientMultiplier?: FloatFilter | number
    lightId?: IntFilter | number
    light?: XOR<LightRelationFilter, LightWhereInput>
    ChildAreas?: AreaTableListRelationFilter
    AreaPOI?: AreaPOIListRelationFilter
    WMOAreaTable?: WMOAreaTableListRelationFilter
    WorldMapArea?: WorldMapAreaListRelationFilter
    WorldMapOverlay1?: WorldMapOverlayListRelationFilter
    WorldMapOverlay2?: WorldMapOverlayListRelationFilter
    WorldMapOverlay3?: WorldMapOverlayListRelationFilter
    WorldMapOverlay4?: WorldMapOverlayListRelationFilter
  }

  export type AreaTableOrderByWithRelationInput = {
    id?: SortOrder
    continentId?: SortOrder
    continent?: ContinentOrderByWithRelationInput
    parentAreaId?: SortOrder
    parentArea?: AreaTableOrderByWithRelationInput
    areaBit?: SortOrder
    flags?: SortOrder
    soundPreferenceId?: SortOrder
    underwaterSoundPreferenceId?: SortOrder
    soundAmbienceId?: SortOrder
    zoneMusicId?: SortOrder
    zoneIntroMusicId?: SortOrder
    explorationLevel?: SortOrder
    name_enUS?: SortOrder
    name_enGB?: SortOrder
    name_koKR?: SortOrder
    name_frFR?: SortOrder
    name_deDE?: SortOrder
    name_enCN?: SortOrder
    name_zhCN?: SortOrder
    name_enTW?: SortOrder
    nameMask?: SortOrder
    factionGroupMask?: SortOrder
    liquidTypeId?: SortOrder
    minElevation?: SortOrder
    ambientMultiplier?: SortOrder
    lightId?: SortOrder
    light?: LightOrderByWithRelationInput
    ChildAreas?: AreaTableOrderByRelationAggregateInput
    AreaPOI?: AreaPOIOrderByRelationAggregateInput
    WMOAreaTable?: WMOAreaTableOrderByRelationAggregateInput
    WorldMapArea?: WorldMapAreaOrderByRelationAggregateInput
    WorldMapOverlay1?: WorldMapOverlayOrderByRelationAggregateInput
    WorldMapOverlay2?: WorldMapOverlayOrderByRelationAggregateInput
    WorldMapOverlay3?: WorldMapOverlayOrderByRelationAggregateInput
    WorldMapOverlay4?: WorldMapOverlayOrderByRelationAggregateInput
  }

  export type AreaTableWhereUniqueInput = {
    id?: number
  }

  export type AreaTableOrderByWithAggregationInput = {
    id?: SortOrder
    continentId?: SortOrder
    parentAreaId?: SortOrder
    areaBit?: SortOrder
    flags?: SortOrder
    soundPreferenceId?: SortOrder
    underwaterSoundPreferenceId?: SortOrder
    soundAmbienceId?: SortOrder
    zoneMusicId?: SortOrder
    zoneIntroMusicId?: SortOrder
    explorationLevel?: SortOrder
    name_enUS?: SortOrder
    name_enGB?: SortOrder
    name_koKR?: SortOrder
    name_frFR?: SortOrder
    name_deDE?: SortOrder
    name_enCN?: SortOrder
    name_zhCN?: SortOrder
    name_enTW?: SortOrder
    nameMask?: SortOrder
    factionGroupMask?: SortOrder
    liquidTypeId?: SortOrder
    minElevation?: SortOrder
    ambientMultiplier?: SortOrder
    lightId?: SortOrder
    _count?: AreaTableCountOrderByAggregateInput
    _avg?: AreaTableAvgOrderByAggregateInput
    _max?: AreaTableMaxOrderByAggregateInput
    _min?: AreaTableMinOrderByAggregateInput
    _sum?: AreaTableSumOrderByAggregateInput
  }

  export type AreaTableScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AreaTableScalarWhereWithAggregatesInput>
    OR?: Enumerable<AreaTableScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AreaTableScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    continentId?: IntWithAggregatesFilter | number
    parentAreaId?: IntWithAggregatesFilter | number
    areaBit?: IntWithAggregatesFilter | number
    flags?: IntWithAggregatesFilter | number
    soundPreferenceId?: IntWithAggregatesFilter | number
    underwaterSoundPreferenceId?: IntWithAggregatesFilter | number
    soundAmbienceId?: IntWithAggregatesFilter | number
    zoneMusicId?: IntWithAggregatesFilter | number
    zoneIntroMusicId?: IntWithAggregatesFilter | number
    explorationLevel?: IntWithAggregatesFilter | number
    name_enUS?: StringWithAggregatesFilter | string
    name_enGB?: StringWithAggregatesFilter | string
    name_koKR?: StringWithAggregatesFilter | string
    name_frFR?: StringWithAggregatesFilter | string
    name_deDE?: StringWithAggregatesFilter | string
    name_enCN?: StringWithAggregatesFilter | string
    name_zhCN?: StringWithAggregatesFilter | string
    name_enTW?: StringWithAggregatesFilter | string
    nameMask?: IntWithAggregatesFilter | number
    factionGroupMask?: IntWithAggregatesFilter | number
    liquidTypeId?: IntWithAggregatesFilter | number
    minElevation?: FloatWithAggregatesFilter | number
    ambientMultiplier?: FloatWithAggregatesFilter | number
    lightId?: IntWithAggregatesFilter | number
  }

  export type AreaTriggerWhereInput = {
    AND?: Enumerable<AreaTriggerWhereInput>
    OR?: Enumerable<AreaTriggerWhereInput>
    NOT?: Enumerable<AreaTriggerWhereInput>
    id?: IntFilter | number
    continentId?: IntFilter | number
    continent?: XOR<ContinentRelationFilter, ContinentWhereInput>
    x?: FloatFilter | number
    y?: FloatFilter | number
    z?: FloatFilter | number
    radius?: FloatFilter | number
    boxLength?: FloatFilter | number
    boxWidth?: FloatFilter | number
    boxHeight?: FloatFilter | number
    boxYaw?: FloatFilter | number
  }

  export type AreaTriggerOrderByWithRelationInput = {
    id?: SortOrder
    continentId?: SortOrder
    continent?: ContinentOrderByWithRelationInput
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    radius?: SortOrder
    boxLength?: SortOrder
    boxWidth?: SortOrder
    boxHeight?: SortOrder
    boxYaw?: SortOrder
  }

  export type AreaTriggerWhereUniqueInput = {
    id?: number
  }

  export type AreaTriggerOrderByWithAggregationInput = {
    id?: SortOrder
    continentId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    radius?: SortOrder
    boxLength?: SortOrder
    boxWidth?: SortOrder
    boxHeight?: SortOrder
    boxYaw?: SortOrder
    _count?: AreaTriggerCountOrderByAggregateInput
    _avg?: AreaTriggerAvgOrderByAggregateInput
    _max?: AreaTriggerMaxOrderByAggregateInput
    _min?: AreaTriggerMinOrderByAggregateInput
    _sum?: AreaTriggerSumOrderByAggregateInput
  }

  export type AreaTriggerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AreaTriggerScalarWhereWithAggregatesInput>
    OR?: Enumerable<AreaTriggerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AreaTriggerScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    continentId?: IntWithAggregatesFilter | number
    x?: FloatWithAggregatesFilter | number
    y?: FloatWithAggregatesFilter | number
    z?: FloatWithAggregatesFilter | number
    radius?: FloatWithAggregatesFilter | number
    boxLength?: FloatWithAggregatesFilter | number
    boxWidth?: FloatWithAggregatesFilter | number
    boxHeight?: FloatWithAggregatesFilter | number
    boxYaw?: FloatWithAggregatesFilter | number
  }

  export type CreatureDisplayInfoExtraWhereInput = {
    AND?: Enumerable<CreatureDisplayInfoExtraWhereInput>
    OR?: Enumerable<CreatureDisplayInfoExtraWhereInput>
    NOT?: Enumerable<CreatureDisplayInfoExtraWhereInput>
    id?: IntFilter | number
    displayRaceId?: IntFilter | number
    displaySexId?: IntFilter | number
    skinId?: IntFilter | number
    faceId?: IntFilter | number
    hairStyleId?: IntFilter | number
    hairColorId?: IntFilter | number
    facialHairId?: IntFilter | number
    itemDisplayId_1?: IntFilter | number
    itemDisplayId_2?: IntFilter | number
    itemDisplayId_3?: IntFilter | number
    itemDisplayId_4?: IntFilter | number
    itemDisplayId_5?: IntFilter | number
    itemDisplayId_6?: IntFilter | number
    itemDisplayId_7?: IntFilter | number
    itemDisplayId_8?: IntFilter | number
    itemDisplayId_9?: IntFilter | number
    itemDisplayId_10?: IntFilter | number
    bakeName?: StringFilter | string
  }

  export type CreatureDisplayInfoExtraOrderByWithRelationInput = {
    id?: SortOrder
    displayRaceId?: SortOrder
    displaySexId?: SortOrder
    skinId?: SortOrder
    faceId?: SortOrder
    hairStyleId?: SortOrder
    hairColorId?: SortOrder
    facialHairId?: SortOrder
    itemDisplayId_1?: SortOrder
    itemDisplayId_2?: SortOrder
    itemDisplayId_3?: SortOrder
    itemDisplayId_4?: SortOrder
    itemDisplayId_5?: SortOrder
    itemDisplayId_6?: SortOrder
    itemDisplayId_7?: SortOrder
    itemDisplayId_8?: SortOrder
    itemDisplayId_9?: SortOrder
    itemDisplayId_10?: SortOrder
    bakeName?: SortOrder
  }

  export type CreatureDisplayInfoExtraWhereUniqueInput = {
    id?: number
  }

  export type CreatureDisplayInfoExtraOrderByWithAggregationInput = {
    id?: SortOrder
    displayRaceId?: SortOrder
    displaySexId?: SortOrder
    skinId?: SortOrder
    faceId?: SortOrder
    hairStyleId?: SortOrder
    hairColorId?: SortOrder
    facialHairId?: SortOrder
    itemDisplayId_1?: SortOrder
    itemDisplayId_2?: SortOrder
    itemDisplayId_3?: SortOrder
    itemDisplayId_4?: SortOrder
    itemDisplayId_5?: SortOrder
    itemDisplayId_6?: SortOrder
    itemDisplayId_7?: SortOrder
    itemDisplayId_8?: SortOrder
    itemDisplayId_9?: SortOrder
    itemDisplayId_10?: SortOrder
    bakeName?: SortOrder
    _count?: CreatureDisplayInfoExtraCountOrderByAggregateInput
    _avg?: CreatureDisplayInfoExtraAvgOrderByAggregateInput
    _max?: CreatureDisplayInfoExtraMaxOrderByAggregateInput
    _min?: CreatureDisplayInfoExtraMinOrderByAggregateInput
    _sum?: CreatureDisplayInfoExtraSumOrderByAggregateInput
  }

  export type CreatureDisplayInfoExtraScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CreatureDisplayInfoExtraScalarWhereWithAggregatesInput>
    OR?: Enumerable<CreatureDisplayInfoExtraScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CreatureDisplayInfoExtraScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    displayRaceId?: IntWithAggregatesFilter | number
    displaySexId?: IntWithAggregatesFilter | number
    skinId?: IntWithAggregatesFilter | number
    faceId?: IntWithAggregatesFilter | number
    hairStyleId?: IntWithAggregatesFilter | number
    hairColorId?: IntWithAggregatesFilter | number
    facialHairId?: IntWithAggregatesFilter | number
    itemDisplayId_1?: IntWithAggregatesFilter | number
    itemDisplayId_2?: IntWithAggregatesFilter | number
    itemDisplayId_3?: IntWithAggregatesFilter | number
    itemDisplayId_4?: IntWithAggregatesFilter | number
    itemDisplayId_5?: IntWithAggregatesFilter | number
    itemDisplayId_6?: IntWithAggregatesFilter | number
    itemDisplayId_7?: IntWithAggregatesFilter | number
    itemDisplayId_8?: IntWithAggregatesFilter | number
    itemDisplayId_9?: IntWithAggregatesFilter | number
    itemDisplayId_10?: IntWithAggregatesFilter | number
    bakeName?: StringWithAggregatesFilter | string
  }

  export type LightWhereInput = {
    AND?: Enumerable<LightWhereInput>
    OR?: Enumerable<LightWhereInput>
    NOT?: Enumerable<LightWhereInput>
    id?: IntFilter | number
    continentId?: IntFilter | number
    continent?: XOR<ContinentRelationFilter, ContinentWhereInput>
    x?: FloatFilter | number
    y?: FloatFilter | number
    z?: FloatFilter | number
    falloffStart?: FloatFilter | number
    falloffEnd?: FloatFilter | number
    paramStandardId?: IntFilter | number
    paramStandard?: XOR<LightParamsRelationFilter, LightParamsWhereInput>
    paramUnderwaterId?: IntFilter | number
    paramUnderwater?: XOR<LightParamsRelationFilter, LightParamsWhereInput>
    paramSunsetId?: IntFilter | number
    paramSunset?: XOR<LightParamsRelationFilter, LightParamsWhereInput>
    paramOtherId?: IntFilter | number
    paramOther?: XOR<LightParamsRelationFilter, LightParamsWhereInput>
    paramDeathId?: IntFilter | number
    paramDeath?: XOR<LightParamsRelationFilter, LightParamsWhereInput>
    AreaTable?: AreaTableListRelationFilter
  }

  export type LightOrderByWithRelationInput = {
    id?: SortOrder
    continentId?: SortOrder
    continent?: ContinentOrderByWithRelationInput
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    falloffStart?: SortOrder
    falloffEnd?: SortOrder
    paramStandardId?: SortOrder
    paramStandard?: LightParamsOrderByWithRelationInput
    paramUnderwaterId?: SortOrder
    paramUnderwater?: LightParamsOrderByWithRelationInput
    paramSunsetId?: SortOrder
    paramSunset?: LightParamsOrderByWithRelationInput
    paramOtherId?: SortOrder
    paramOther?: LightParamsOrderByWithRelationInput
    paramDeathId?: SortOrder
    paramDeath?: LightParamsOrderByWithRelationInput
    AreaTable?: AreaTableOrderByRelationAggregateInput
  }

  export type LightWhereUniqueInput = {
    id?: number
  }

  export type LightOrderByWithAggregationInput = {
    id?: SortOrder
    continentId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    falloffStart?: SortOrder
    falloffEnd?: SortOrder
    paramStandardId?: SortOrder
    paramUnderwaterId?: SortOrder
    paramSunsetId?: SortOrder
    paramOtherId?: SortOrder
    paramDeathId?: SortOrder
    _count?: LightCountOrderByAggregateInput
    _avg?: LightAvgOrderByAggregateInput
    _max?: LightMaxOrderByAggregateInput
    _min?: LightMinOrderByAggregateInput
    _sum?: LightSumOrderByAggregateInput
  }

  export type LightScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LightScalarWhereWithAggregatesInput>
    OR?: Enumerable<LightScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LightScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    continentId?: IntWithAggregatesFilter | number
    x?: FloatWithAggregatesFilter | number
    y?: FloatWithAggregatesFilter | number
    z?: FloatWithAggregatesFilter | number
    falloffStart?: FloatWithAggregatesFilter | number
    falloffEnd?: FloatWithAggregatesFilter | number
    paramStandardId?: IntWithAggregatesFilter | number
    paramUnderwaterId?: IntWithAggregatesFilter | number
    paramSunsetId?: IntWithAggregatesFilter | number
    paramOtherId?: IntWithAggregatesFilter | number
    paramDeathId?: IntWithAggregatesFilter | number
  }

  export type LightParamsWhereInput = {
    AND?: Enumerable<LightParamsWhereInput>
    OR?: Enumerable<LightParamsWhereInput>
    NOT?: Enumerable<LightParamsWhereInput>
    id?: IntFilter | number
    highlightSky?: IntFilter | number
    lightSkyboxId?: IntFilter | number
    lightSkybox?: XOR<LightSkyboxRelationFilter, LightSkyboxWhereInput>
    glow?: FloatFilter | number
    waterShallowAlpha?: FloatFilter | number
    waterDeepAlpha?: FloatFilter | number
    oceanShallowAlpha?: FloatFilter | number
    oceanDeepAlpha?: FloatFilter | number
    flags?: IntFilter | number
    standatrdLight?: LightListRelationFilter
    underwaterLight?: LightListRelationFilter
    sunsetLight?: LightListRelationFilter
    otherLight?: LightListRelationFilter
    deathLight?: LightListRelationFilter
  }

  export type LightParamsOrderByWithRelationInput = {
    id?: SortOrder
    highlightSky?: SortOrder
    lightSkyboxId?: SortOrder
    lightSkybox?: LightSkyboxOrderByWithRelationInput
    glow?: SortOrder
    waterShallowAlpha?: SortOrder
    waterDeepAlpha?: SortOrder
    oceanShallowAlpha?: SortOrder
    oceanDeepAlpha?: SortOrder
    flags?: SortOrder
    standatrdLight?: LightOrderByRelationAggregateInput
    underwaterLight?: LightOrderByRelationAggregateInput
    sunsetLight?: LightOrderByRelationAggregateInput
    otherLight?: LightOrderByRelationAggregateInput
    deathLight?: LightOrderByRelationAggregateInput
  }

  export type LightParamsWhereUniqueInput = {
    id?: number
  }

  export type LightParamsOrderByWithAggregationInput = {
    id?: SortOrder
    highlightSky?: SortOrder
    lightSkyboxId?: SortOrder
    glow?: SortOrder
    waterShallowAlpha?: SortOrder
    waterDeepAlpha?: SortOrder
    oceanShallowAlpha?: SortOrder
    oceanDeepAlpha?: SortOrder
    flags?: SortOrder
    _count?: LightParamsCountOrderByAggregateInput
    _avg?: LightParamsAvgOrderByAggregateInput
    _max?: LightParamsMaxOrderByAggregateInput
    _min?: LightParamsMinOrderByAggregateInput
    _sum?: LightParamsSumOrderByAggregateInput
  }

  export type LightParamsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LightParamsScalarWhereWithAggregatesInput>
    OR?: Enumerable<LightParamsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LightParamsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    highlightSky?: IntWithAggregatesFilter | number
    lightSkyboxId?: IntWithAggregatesFilter | number
    glow?: FloatWithAggregatesFilter | number
    waterShallowAlpha?: FloatWithAggregatesFilter | number
    waterDeepAlpha?: FloatWithAggregatesFilter | number
    oceanShallowAlpha?: FloatWithAggregatesFilter | number
    oceanDeepAlpha?: FloatWithAggregatesFilter | number
    flags?: IntWithAggregatesFilter | number
  }

  export type LightSkyboxWhereInput = {
    AND?: Enumerable<LightSkyboxWhereInput>
    OR?: Enumerable<LightSkyboxWhereInput>
    NOT?: Enumerable<LightSkyboxWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    LightParams?: LightParamsListRelationFilter
  }

  export type LightSkyboxOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    LightParams?: LightParamsOrderByRelationAggregateInput
  }

  export type LightSkyboxWhereUniqueInput = {
    id?: number
  }

  export type LightSkyboxOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: LightSkyboxCountOrderByAggregateInput
    _avg?: LightSkyboxAvgOrderByAggregateInput
    _max?: LightSkyboxMaxOrderByAggregateInput
    _min?: LightSkyboxMinOrderByAggregateInput
    _sum?: LightSkyboxSumOrderByAggregateInput
  }

  export type LightSkyboxScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LightSkyboxScalarWhereWithAggregatesInput>
    OR?: Enumerable<LightSkyboxScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LightSkyboxScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type WMOAreaTableWhereInput = {
    AND?: Enumerable<WMOAreaTableWhereInput>
    OR?: Enumerable<WMOAreaTableWhereInput>
    NOT?: Enumerable<WMOAreaTableWhereInput>
    id?: IntFilter | number
    wmoId?: IntFilter | number
    nameSetId?: IntFilter | number
    wmoGroupId?: IntFilter | number
    soundProviderId?: IntFilter | number
    underwaterSoundProviderId?: IntFilter | number
    ambienceId?: IntFilter | number
    zoneMusicId?: IntFilter | number
    introSoundId?: IntFilter | number
    flags?: IntFilter | number
    areaTableId?: IntFilter | number
    areaTable?: XOR<AreaTableRelationFilter, AreaTableWhereInput>
    name_enUS?: StringFilter | string
    name_enGB?: StringFilter | string
    name_koKR?: StringFilter | string
    name_frFR?: StringFilter | string
    name_deDE?: StringFilter | string
    name_enCN?: StringFilter | string
    name_zhCN?: StringFilter | string
    name_enTW?: StringFilter | string
    nameMask?: IntFilter | number
  }

  export type WMOAreaTableOrderByWithRelationInput = {
    id?: SortOrder
    wmoId?: SortOrder
    nameSetId?: SortOrder
    wmoGroupId?: SortOrder
    soundProviderId?: SortOrder
    underwaterSoundProviderId?: SortOrder
    ambienceId?: SortOrder
    zoneMusicId?: SortOrder
    introSoundId?: SortOrder
    flags?: SortOrder
    areaTableId?: SortOrder
    areaTable?: AreaTableOrderByWithRelationInput
    name_enUS?: SortOrder
    name_enGB?: SortOrder
    name_koKR?: SortOrder
    name_frFR?: SortOrder
    name_deDE?: SortOrder
    name_enCN?: SortOrder
    name_zhCN?: SortOrder
    name_enTW?: SortOrder
    nameMask?: SortOrder
  }

  export type WMOAreaTableWhereUniqueInput = {
    id?: number
  }

  export type WMOAreaTableOrderByWithAggregationInput = {
    id?: SortOrder
    wmoId?: SortOrder
    nameSetId?: SortOrder
    wmoGroupId?: SortOrder
    soundProviderId?: SortOrder
    underwaterSoundProviderId?: SortOrder
    ambienceId?: SortOrder
    zoneMusicId?: SortOrder
    introSoundId?: SortOrder
    flags?: SortOrder
    areaTableId?: SortOrder
    name_enUS?: SortOrder
    name_enGB?: SortOrder
    name_koKR?: SortOrder
    name_frFR?: SortOrder
    name_deDE?: SortOrder
    name_enCN?: SortOrder
    name_zhCN?: SortOrder
    name_enTW?: SortOrder
    nameMask?: SortOrder
    _count?: WMOAreaTableCountOrderByAggregateInput
    _avg?: WMOAreaTableAvgOrderByAggregateInput
    _max?: WMOAreaTableMaxOrderByAggregateInput
    _min?: WMOAreaTableMinOrderByAggregateInput
    _sum?: WMOAreaTableSumOrderByAggregateInput
  }

  export type WMOAreaTableScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WMOAreaTableScalarWhereWithAggregatesInput>
    OR?: Enumerable<WMOAreaTableScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WMOAreaTableScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    wmoId?: IntWithAggregatesFilter | number
    nameSetId?: IntWithAggregatesFilter | number
    wmoGroupId?: IntWithAggregatesFilter | number
    soundProviderId?: IntWithAggregatesFilter | number
    underwaterSoundProviderId?: IntWithAggregatesFilter | number
    ambienceId?: IntWithAggregatesFilter | number
    zoneMusicId?: IntWithAggregatesFilter | number
    introSoundId?: IntWithAggregatesFilter | number
    flags?: IntWithAggregatesFilter | number
    areaTableId?: IntWithAggregatesFilter | number
    name_enUS?: StringWithAggregatesFilter | string
    name_enGB?: StringWithAggregatesFilter | string
    name_koKR?: StringWithAggregatesFilter | string
    name_frFR?: StringWithAggregatesFilter | string
    name_deDE?: StringWithAggregatesFilter | string
    name_enCN?: StringWithAggregatesFilter | string
    name_zhCN?: StringWithAggregatesFilter | string
    name_enTW?: StringWithAggregatesFilter | string
    nameMask?: IntWithAggregatesFilter | number
  }

  export type WorldMapAreaWhereInput = {
    AND?: Enumerable<WorldMapAreaWhereInput>
    OR?: Enumerable<WorldMapAreaWhereInput>
    NOT?: Enumerable<WorldMapAreaWhereInput>
    id?: IntFilter | number
    continentId?: IntFilter | number
    continent?: XOR<ContinentRelationFilter, ContinentWhereInput>
    areaId?: IntFilter | number
    areaTable?: XOR<AreaTableRelationFilter, AreaTableWhereInput>
    name?: StringFilter | string
    locLeft?: FloatFilter | number
    locRight?: FloatFilter | number
    locTop?: FloatFilter | number
    locBottom?: FloatFilter | number
    WorldMapOverlay?: WorldMapOverlayListRelationFilter
  }

  export type WorldMapAreaOrderByWithRelationInput = {
    id?: SortOrder
    continentId?: SortOrder
    continent?: ContinentOrderByWithRelationInput
    areaId?: SortOrder
    areaTable?: AreaTableOrderByWithRelationInput
    name?: SortOrder
    locLeft?: SortOrder
    locRight?: SortOrder
    locTop?: SortOrder
    locBottom?: SortOrder
    WorldMapOverlay?: WorldMapOverlayOrderByRelationAggregateInput
  }

  export type WorldMapAreaWhereUniqueInput = {
    id?: number
  }

  export type WorldMapAreaOrderByWithAggregationInput = {
    id?: SortOrder
    continentId?: SortOrder
    areaId?: SortOrder
    name?: SortOrder
    locLeft?: SortOrder
    locRight?: SortOrder
    locTop?: SortOrder
    locBottom?: SortOrder
    _count?: WorldMapAreaCountOrderByAggregateInput
    _avg?: WorldMapAreaAvgOrderByAggregateInput
    _max?: WorldMapAreaMaxOrderByAggregateInput
    _min?: WorldMapAreaMinOrderByAggregateInput
    _sum?: WorldMapAreaSumOrderByAggregateInput
  }

  export type WorldMapAreaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WorldMapAreaScalarWhereWithAggregatesInput>
    OR?: Enumerable<WorldMapAreaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WorldMapAreaScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    continentId?: IntWithAggregatesFilter | number
    areaId?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    locLeft?: FloatWithAggregatesFilter | number
    locRight?: FloatWithAggregatesFilter | number
    locTop?: FloatWithAggregatesFilter | number
    locBottom?: FloatWithAggregatesFilter | number
  }

  export type WorldMapContinentWhereInput = {
    AND?: Enumerable<WorldMapContinentWhereInput>
    OR?: Enumerable<WorldMapContinentWhereInput>
    NOT?: Enumerable<WorldMapContinentWhereInput>
    id?: IntFilter | number
    continentId?: IntFilter | number
    continent?: XOR<ContinentRelationFilter, ContinentWhereInput>
    left?: IntFilter | number
    right?: IntFilter | number
    top?: IntFilter | number
    bottom?: IntFilter | number
    offsetX?: FloatFilter | number
    offsetY?: FloatFilter | number
    scale?: FloatFilter | number
    taxiMinX?: IntFilter | number
    taxiMinY?: IntFilter | number
    taxiMaxX?: IntFilter | number
    taxiMaxY?: IntFilter | number
  }

  export type WorldMapContinentOrderByWithRelationInput = {
    id?: SortOrder
    continentId?: SortOrder
    continent?: ContinentOrderByWithRelationInput
    left?: SortOrder
    right?: SortOrder
    top?: SortOrder
    bottom?: SortOrder
    offsetX?: SortOrder
    offsetY?: SortOrder
    scale?: SortOrder
    taxiMinX?: SortOrder
    taxiMinY?: SortOrder
    taxiMaxX?: SortOrder
    taxiMaxY?: SortOrder
  }

  export type WorldMapContinentWhereUniqueInput = {
    id?: number
  }

  export type WorldMapContinentOrderByWithAggregationInput = {
    id?: SortOrder
    continentId?: SortOrder
    left?: SortOrder
    right?: SortOrder
    top?: SortOrder
    bottom?: SortOrder
    offsetX?: SortOrder
    offsetY?: SortOrder
    scale?: SortOrder
    taxiMinX?: SortOrder
    taxiMinY?: SortOrder
    taxiMaxX?: SortOrder
    taxiMaxY?: SortOrder
    _count?: WorldMapContinentCountOrderByAggregateInput
    _avg?: WorldMapContinentAvgOrderByAggregateInput
    _max?: WorldMapContinentMaxOrderByAggregateInput
    _min?: WorldMapContinentMinOrderByAggregateInput
    _sum?: WorldMapContinentSumOrderByAggregateInput
  }

  export type WorldMapContinentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WorldMapContinentScalarWhereWithAggregatesInput>
    OR?: Enumerable<WorldMapContinentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WorldMapContinentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    continentId?: IntWithAggregatesFilter | number
    left?: IntWithAggregatesFilter | number
    right?: IntWithAggregatesFilter | number
    top?: IntWithAggregatesFilter | number
    bottom?: IntWithAggregatesFilter | number
    offsetX?: FloatWithAggregatesFilter | number
    offsetY?: FloatWithAggregatesFilter | number
    scale?: FloatWithAggregatesFilter | number
    taxiMinX?: IntWithAggregatesFilter | number
    taxiMinY?: IntWithAggregatesFilter | number
    taxiMaxX?: IntWithAggregatesFilter | number
    taxiMaxY?: IntWithAggregatesFilter | number
  }

  export type WorldMapOverlayWhereInput = {
    AND?: Enumerable<WorldMapOverlayWhereInput>
    OR?: Enumerable<WorldMapOverlayWhereInput>
    NOT?: Enumerable<WorldMapOverlayWhereInput>
    id?: IntFilter | number
    worldMapAreaId?: IntFilter | number
    mapArea?: XOR<WorldMapAreaRelationFilter, WorldMapAreaWhereInput>
    areaId_1?: IntFilter | number
    area_1?: XOR<AreaTableRelationFilter, AreaTableWhereInput>
    areaId_2?: IntFilter | number
    area_2?: XOR<AreaTableRelationFilter, AreaTableWhereInput>
    areaId_3?: IntFilter | number
    area_3?: XOR<AreaTableRelationFilter, AreaTableWhereInput>
    areaId_4?: IntFilter | number
    area_4?: XOR<AreaTableRelationFilter, AreaTableWhereInput>
    mapPointX?: IntFilter | number
    mapPointY?: IntFilter | number
    texture?: StringFilter | string
    textureWidth?: IntFilter | number
    textureHeight?: IntFilter | number
    offsetX?: IntFilter | number
    offsetY?: IntFilter | number
    hitRectTop?: IntFilter | number
    hitRectLeft?: IntFilter | number
    hitRectBottom?: IntFilter | number
    hitRectRight?: IntFilter | number
  }

  export type WorldMapOverlayOrderByWithRelationInput = {
    id?: SortOrder
    worldMapAreaId?: SortOrder
    mapArea?: WorldMapAreaOrderByWithRelationInput
    areaId_1?: SortOrder
    area_1?: AreaTableOrderByWithRelationInput
    areaId_2?: SortOrder
    area_2?: AreaTableOrderByWithRelationInput
    areaId_3?: SortOrder
    area_3?: AreaTableOrderByWithRelationInput
    areaId_4?: SortOrder
    area_4?: AreaTableOrderByWithRelationInput
    mapPointX?: SortOrder
    mapPointY?: SortOrder
    texture?: SortOrder
    textureWidth?: SortOrder
    textureHeight?: SortOrder
    offsetX?: SortOrder
    offsetY?: SortOrder
    hitRectTop?: SortOrder
    hitRectLeft?: SortOrder
    hitRectBottom?: SortOrder
    hitRectRight?: SortOrder
  }

  export type WorldMapOverlayWhereUniqueInput = {
    id?: number
  }

  export type WorldMapOverlayOrderByWithAggregationInput = {
    id?: SortOrder
    worldMapAreaId?: SortOrder
    areaId_1?: SortOrder
    areaId_2?: SortOrder
    areaId_3?: SortOrder
    areaId_4?: SortOrder
    mapPointX?: SortOrder
    mapPointY?: SortOrder
    texture?: SortOrder
    textureWidth?: SortOrder
    textureHeight?: SortOrder
    offsetX?: SortOrder
    offsetY?: SortOrder
    hitRectTop?: SortOrder
    hitRectLeft?: SortOrder
    hitRectBottom?: SortOrder
    hitRectRight?: SortOrder
    _count?: WorldMapOverlayCountOrderByAggregateInput
    _avg?: WorldMapOverlayAvgOrderByAggregateInput
    _max?: WorldMapOverlayMaxOrderByAggregateInput
    _min?: WorldMapOverlayMinOrderByAggregateInput
    _sum?: WorldMapOverlaySumOrderByAggregateInput
  }

  export type WorldMapOverlayScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WorldMapOverlayScalarWhereWithAggregatesInput>
    OR?: Enumerable<WorldMapOverlayScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WorldMapOverlayScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    worldMapAreaId?: IntWithAggregatesFilter | number
    areaId_1?: IntWithAggregatesFilter | number
    areaId_2?: IntWithAggregatesFilter | number
    areaId_3?: IntWithAggregatesFilter | number
    areaId_4?: IntWithAggregatesFilter | number
    mapPointX?: IntWithAggregatesFilter | number
    mapPointY?: IntWithAggregatesFilter | number
    texture?: StringWithAggregatesFilter | string
    textureWidth?: IntWithAggregatesFilter | number
    textureHeight?: IntWithAggregatesFilter | number
    offsetX?: IntWithAggregatesFilter | number
    offsetY?: IntWithAggregatesFilter | number
    hitRectTop?: IntWithAggregatesFilter | number
    hitRectLeft?: IntWithAggregatesFilter | number
    hitRectBottom?: IntWithAggregatesFilter | number
    hitRectRight?: IntWithAggregatesFilter | number
  }

  export type ContinentCreateInput = {
    id: number
    name: string
    AreaPOI?: AreaPOICreateNestedManyWithoutContinentInput
    AreaTable?: AreaTableCreateNestedManyWithoutContinentInput
    WorldMapArea?: WorldMapAreaCreateNestedManyWithoutContinentInput
    WorldMapContinent?: WorldMapContinentCreateNestedManyWithoutContinentInput
    AreaTrigger?: AreaTriggerCreateNestedManyWithoutContinentInput
    Light?: LightCreateNestedManyWithoutContinentInput
  }

  export type ContinentUncheckedCreateInput = {
    id: number
    name: string
    AreaPOI?: AreaPOIUncheckedCreateNestedManyWithoutContinentInput
    AreaTable?: AreaTableUncheckedCreateNestedManyWithoutContinentInput
    WorldMapArea?: WorldMapAreaUncheckedCreateNestedManyWithoutContinentInput
    WorldMapContinent?: WorldMapContinentUncheckedCreateNestedManyWithoutContinentInput
    AreaTrigger?: AreaTriggerUncheckedCreateNestedManyWithoutContinentInput
    Light?: LightUncheckedCreateNestedManyWithoutContinentInput
  }

  export type ContinentUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    AreaPOI?: AreaPOIUpdateManyWithoutContinentNestedInput
    AreaTable?: AreaTableUpdateManyWithoutContinentNestedInput
    WorldMapArea?: WorldMapAreaUpdateManyWithoutContinentNestedInput
    WorldMapContinent?: WorldMapContinentUpdateManyWithoutContinentNestedInput
    AreaTrigger?: AreaTriggerUpdateManyWithoutContinentNestedInput
    Light?: LightUpdateManyWithoutContinentNestedInput
  }

  export type ContinentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    AreaPOI?: AreaPOIUncheckedUpdateManyWithoutContinentNestedInput
    AreaTable?: AreaTableUncheckedUpdateManyWithoutContinentNestedInput
    WorldMapArea?: WorldMapAreaUncheckedUpdateManyWithoutContinentNestedInput
    WorldMapContinent?: WorldMapContinentUncheckedUpdateManyWithoutContinentNestedInput
    AreaTrigger?: AreaTriggerUncheckedUpdateManyWithoutContinentNestedInput
    Light?: LightUncheckedUpdateManyWithoutContinentNestedInput
  }

  export type ContinentUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ContinentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AreaPOICreateInput = {
    id: number
    importance: number
    icon: number
    factionId: number
    x: number
    y: number
    z: number
    continent: ContinentCreateNestedOneWithoutAreaPOIInput
    flags: number
    area: AreaTableCreateNestedOneWithoutAreaPOIInput
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
    description_enUS: string
    description_enGB: string
    description_koKR: string
    description_frFR: string
    description_deDE: string
    description_enCN: string
    description_zhCN: string
    description_enTW: string
    descriptionMask: number
    worldStateId: number
  }

  export type AreaPOIUncheckedCreateInput = {
    id: number
    importance: number
    icon: number
    factionId: number
    x: number
    y: number
    z: number
    continentId: number
    flags: number
    areaId: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
    description_enUS: string
    description_enGB: string
    description_koKR: string
    description_frFR: string
    description_deDE: string
    description_enCN: string
    description_zhCN: string
    description_enTW: string
    descriptionMask: number
    worldStateId: number
  }

  export type AreaPOIUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    importance?: IntFieldUpdateOperationsInput | number
    icon?: IntFieldUpdateOperationsInput | number
    factionId?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    continent?: ContinentUpdateOneRequiredWithoutAreaPOINestedInput
    flags?: IntFieldUpdateOperationsInput | number
    area?: AreaTableUpdateOneRequiredWithoutAreaPOINestedInput
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    description_enUS?: StringFieldUpdateOperationsInput | string
    description_enGB?: StringFieldUpdateOperationsInput | string
    description_koKR?: StringFieldUpdateOperationsInput | string
    description_frFR?: StringFieldUpdateOperationsInput | string
    description_deDE?: StringFieldUpdateOperationsInput | string
    description_enCN?: StringFieldUpdateOperationsInput | string
    description_zhCN?: StringFieldUpdateOperationsInput | string
    description_enTW?: StringFieldUpdateOperationsInput | string
    descriptionMask?: IntFieldUpdateOperationsInput | number
    worldStateId?: IntFieldUpdateOperationsInput | number
  }

  export type AreaPOIUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    importance?: IntFieldUpdateOperationsInput | number
    icon?: IntFieldUpdateOperationsInput | number
    factionId?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    areaId?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    description_enUS?: StringFieldUpdateOperationsInput | string
    description_enGB?: StringFieldUpdateOperationsInput | string
    description_koKR?: StringFieldUpdateOperationsInput | string
    description_frFR?: StringFieldUpdateOperationsInput | string
    description_deDE?: StringFieldUpdateOperationsInput | string
    description_enCN?: StringFieldUpdateOperationsInput | string
    description_zhCN?: StringFieldUpdateOperationsInput | string
    description_enTW?: StringFieldUpdateOperationsInput | string
    descriptionMask?: IntFieldUpdateOperationsInput | number
    worldStateId?: IntFieldUpdateOperationsInput | number
  }

  export type AreaPOIUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    importance?: IntFieldUpdateOperationsInput | number
    icon?: IntFieldUpdateOperationsInput | number
    factionId?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    description_enUS?: StringFieldUpdateOperationsInput | string
    description_enGB?: StringFieldUpdateOperationsInput | string
    description_koKR?: StringFieldUpdateOperationsInput | string
    description_frFR?: StringFieldUpdateOperationsInput | string
    description_deDE?: StringFieldUpdateOperationsInput | string
    description_enCN?: StringFieldUpdateOperationsInput | string
    description_zhCN?: StringFieldUpdateOperationsInput | string
    description_enTW?: StringFieldUpdateOperationsInput | string
    descriptionMask?: IntFieldUpdateOperationsInput | number
    worldStateId?: IntFieldUpdateOperationsInput | number
  }

  export type AreaPOIUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    importance?: IntFieldUpdateOperationsInput | number
    icon?: IntFieldUpdateOperationsInput | number
    factionId?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    areaId?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    description_enUS?: StringFieldUpdateOperationsInput | string
    description_enGB?: StringFieldUpdateOperationsInput | string
    description_koKR?: StringFieldUpdateOperationsInput | string
    description_frFR?: StringFieldUpdateOperationsInput | string
    description_deDE?: StringFieldUpdateOperationsInput | string
    description_enCN?: StringFieldUpdateOperationsInput | string
    description_zhCN?: StringFieldUpdateOperationsInput | string
    description_enTW?: StringFieldUpdateOperationsInput | string
    descriptionMask?: IntFieldUpdateOperationsInput | number
    worldStateId?: IntFieldUpdateOperationsInput | number
  }

  export type AreaTableCreateInput = {
    id: number
    continent: ContinentCreateNestedOneWithoutAreaTableInput
    parentArea: AreaTableCreateNestedOneWithoutChildAreasInput
    areaBit: number
    flags: number
    soundPreferenceId: number
    underwaterSoundPreferenceId: number
    soundAmbienceId: number
    zoneMusicId: number
    zoneIntroMusicId: number
    explorationLevel: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
    factionGroupMask: number
    liquidTypeId: number
    minElevation: number
    ambientMultiplier: number
    light: LightCreateNestedOneWithoutAreaTableInput
    ChildAreas?: AreaTableCreateNestedManyWithoutParentAreaInput
    AreaPOI?: AreaPOICreateNestedManyWithoutAreaInput
    WMOAreaTable?: WMOAreaTableCreateNestedManyWithoutAreaTableInput
    WorldMapArea?: WorldMapAreaCreateNestedManyWithoutAreaTableInput
    WorldMapOverlay1?: WorldMapOverlayCreateNestedManyWithoutArea_1Input
    WorldMapOverlay2?: WorldMapOverlayCreateNestedManyWithoutArea_2Input
    WorldMapOverlay3?: WorldMapOverlayCreateNestedManyWithoutArea_3Input
    WorldMapOverlay4?: WorldMapOverlayCreateNestedManyWithoutArea_4Input
  }

  export type AreaTableUncheckedCreateInput = {
    id: number
    continentId: number
    parentAreaId: number
    areaBit: number
    flags: number
    soundPreferenceId: number
    underwaterSoundPreferenceId: number
    soundAmbienceId: number
    zoneMusicId: number
    zoneIntroMusicId: number
    explorationLevel: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
    factionGroupMask: number
    liquidTypeId: number
    minElevation: number
    ambientMultiplier: number
    lightId: number
    ChildAreas?: AreaTableUncheckedCreateNestedManyWithoutParentAreaInput
    AreaPOI?: AreaPOIUncheckedCreateNestedManyWithoutAreaInput
    WMOAreaTable?: WMOAreaTableUncheckedCreateNestedManyWithoutAreaTableInput
    WorldMapArea?: WorldMapAreaUncheckedCreateNestedManyWithoutAreaTableInput
    WorldMapOverlay1?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_1Input
    WorldMapOverlay2?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_2Input
    WorldMapOverlay3?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_3Input
    WorldMapOverlay4?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_4Input
  }

  export type AreaTableUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    continent?: ContinentUpdateOneRequiredWithoutAreaTableNestedInput
    parentArea?: AreaTableUpdateOneRequiredWithoutChildAreasNestedInput
    areaBit?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    soundPreferenceId?: IntFieldUpdateOperationsInput | number
    underwaterSoundPreferenceId?: IntFieldUpdateOperationsInput | number
    soundAmbienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    zoneIntroMusicId?: IntFieldUpdateOperationsInput | number
    explorationLevel?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    factionGroupMask?: IntFieldUpdateOperationsInput | number
    liquidTypeId?: IntFieldUpdateOperationsInput | number
    minElevation?: FloatFieldUpdateOperationsInput | number
    ambientMultiplier?: FloatFieldUpdateOperationsInput | number
    light?: LightUpdateOneRequiredWithoutAreaTableNestedInput
    ChildAreas?: AreaTableUpdateManyWithoutParentAreaNestedInput
    AreaPOI?: AreaPOIUpdateManyWithoutAreaNestedInput
    WMOAreaTable?: WMOAreaTableUpdateManyWithoutAreaTableNestedInput
    WorldMapArea?: WorldMapAreaUpdateManyWithoutAreaTableNestedInput
    WorldMapOverlay1?: WorldMapOverlayUpdateManyWithoutArea_1NestedInput
    WorldMapOverlay2?: WorldMapOverlayUpdateManyWithoutArea_2NestedInput
    WorldMapOverlay3?: WorldMapOverlayUpdateManyWithoutArea_3NestedInput
    WorldMapOverlay4?: WorldMapOverlayUpdateManyWithoutArea_4NestedInput
  }

  export type AreaTableUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    parentAreaId?: IntFieldUpdateOperationsInput | number
    areaBit?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    soundPreferenceId?: IntFieldUpdateOperationsInput | number
    underwaterSoundPreferenceId?: IntFieldUpdateOperationsInput | number
    soundAmbienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    zoneIntroMusicId?: IntFieldUpdateOperationsInput | number
    explorationLevel?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    factionGroupMask?: IntFieldUpdateOperationsInput | number
    liquidTypeId?: IntFieldUpdateOperationsInput | number
    minElevation?: FloatFieldUpdateOperationsInput | number
    ambientMultiplier?: FloatFieldUpdateOperationsInput | number
    lightId?: IntFieldUpdateOperationsInput | number
    ChildAreas?: AreaTableUncheckedUpdateManyWithoutParentAreaNestedInput
    AreaPOI?: AreaPOIUncheckedUpdateManyWithoutAreaNestedInput
    WMOAreaTable?: WMOAreaTableUncheckedUpdateManyWithoutAreaTableNestedInput
    WorldMapArea?: WorldMapAreaUncheckedUpdateManyWithoutAreaTableNestedInput
    WorldMapOverlay1?: WorldMapOverlayUncheckedUpdateManyWithoutArea_1NestedInput
    WorldMapOverlay2?: WorldMapOverlayUncheckedUpdateManyWithoutArea_2NestedInput
    WorldMapOverlay3?: WorldMapOverlayUncheckedUpdateManyWithoutArea_3NestedInput
    WorldMapOverlay4?: WorldMapOverlayUncheckedUpdateManyWithoutArea_4NestedInput
  }

  export type AreaTableUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    areaBit?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    soundPreferenceId?: IntFieldUpdateOperationsInput | number
    underwaterSoundPreferenceId?: IntFieldUpdateOperationsInput | number
    soundAmbienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    zoneIntroMusicId?: IntFieldUpdateOperationsInput | number
    explorationLevel?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    factionGroupMask?: IntFieldUpdateOperationsInput | number
    liquidTypeId?: IntFieldUpdateOperationsInput | number
    minElevation?: FloatFieldUpdateOperationsInput | number
    ambientMultiplier?: FloatFieldUpdateOperationsInput | number
  }

  export type AreaTableUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    parentAreaId?: IntFieldUpdateOperationsInput | number
    areaBit?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    soundPreferenceId?: IntFieldUpdateOperationsInput | number
    underwaterSoundPreferenceId?: IntFieldUpdateOperationsInput | number
    soundAmbienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    zoneIntroMusicId?: IntFieldUpdateOperationsInput | number
    explorationLevel?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    factionGroupMask?: IntFieldUpdateOperationsInput | number
    liquidTypeId?: IntFieldUpdateOperationsInput | number
    minElevation?: FloatFieldUpdateOperationsInput | number
    ambientMultiplier?: FloatFieldUpdateOperationsInput | number
    lightId?: IntFieldUpdateOperationsInput | number
  }

  export type AreaTriggerCreateInput = {
    id: number
    continent: ContinentCreateNestedOneWithoutAreaTriggerInput
    x: number
    y: number
    z: number
    radius: number
    boxLength: number
    boxWidth: number
    boxHeight: number
    boxYaw: number
  }

  export type AreaTriggerUncheckedCreateInput = {
    id: number
    continentId: number
    x: number
    y: number
    z: number
    radius: number
    boxLength: number
    boxWidth: number
    boxHeight: number
    boxYaw: number
  }

  export type AreaTriggerUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    continent?: ContinentUpdateOneRequiredWithoutAreaTriggerNestedInput
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    radius?: FloatFieldUpdateOperationsInput | number
    boxLength?: FloatFieldUpdateOperationsInput | number
    boxWidth?: FloatFieldUpdateOperationsInput | number
    boxHeight?: FloatFieldUpdateOperationsInput | number
    boxYaw?: FloatFieldUpdateOperationsInput | number
  }

  export type AreaTriggerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    radius?: FloatFieldUpdateOperationsInput | number
    boxLength?: FloatFieldUpdateOperationsInput | number
    boxWidth?: FloatFieldUpdateOperationsInput | number
    boxHeight?: FloatFieldUpdateOperationsInput | number
    boxYaw?: FloatFieldUpdateOperationsInput | number
  }

  export type AreaTriggerUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    radius?: FloatFieldUpdateOperationsInput | number
    boxLength?: FloatFieldUpdateOperationsInput | number
    boxWidth?: FloatFieldUpdateOperationsInput | number
    boxHeight?: FloatFieldUpdateOperationsInput | number
    boxYaw?: FloatFieldUpdateOperationsInput | number
  }

  export type AreaTriggerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    radius?: FloatFieldUpdateOperationsInput | number
    boxLength?: FloatFieldUpdateOperationsInput | number
    boxWidth?: FloatFieldUpdateOperationsInput | number
    boxHeight?: FloatFieldUpdateOperationsInput | number
    boxYaw?: FloatFieldUpdateOperationsInput | number
  }

  export type CreatureDisplayInfoExtraCreateInput = {
    id: number
    displayRaceId: number
    displaySexId: number
    skinId: number
    faceId: number
    hairStyleId: number
    hairColorId: number
    facialHairId: number
    itemDisplayId_1: number
    itemDisplayId_2: number
    itemDisplayId_3: number
    itemDisplayId_4: number
    itemDisplayId_5: number
    itemDisplayId_6: number
    itemDisplayId_7: number
    itemDisplayId_8: number
    itemDisplayId_9: number
    itemDisplayId_10: number
    bakeName: string
  }

  export type CreatureDisplayInfoExtraUncheckedCreateInput = {
    id: number
    displayRaceId: number
    displaySexId: number
    skinId: number
    faceId: number
    hairStyleId: number
    hairColorId: number
    facialHairId: number
    itemDisplayId_1: number
    itemDisplayId_2: number
    itemDisplayId_3: number
    itemDisplayId_4: number
    itemDisplayId_5: number
    itemDisplayId_6: number
    itemDisplayId_7: number
    itemDisplayId_8: number
    itemDisplayId_9: number
    itemDisplayId_10: number
    bakeName: string
  }

  export type CreatureDisplayInfoExtraUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayRaceId?: IntFieldUpdateOperationsInput | number
    displaySexId?: IntFieldUpdateOperationsInput | number
    skinId?: IntFieldUpdateOperationsInput | number
    faceId?: IntFieldUpdateOperationsInput | number
    hairStyleId?: IntFieldUpdateOperationsInput | number
    hairColorId?: IntFieldUpdateOperationsInput | number
    facialHairId?: IntFieldUpdateOperationsInput | number
    itemDisplayId_1?: IntFieldUpdateOperationsInput | number
    itemDisplayId_2?: IntFieldUpdateOperationsInput | number
    itemDisplayId_3?: IntFieldUpdateOperationsInput | number
    itemDisplayId_4?: IntFieldUpdateOperationsInput | number
    itemDisplayId_5?: IntFieldUpdateOperationsInput | number
    itemDisplayId_6?: IntFieldUpdateOperationsInput | number
    itemDisplayId_7?: IntFieldUpdateOperationsInput | number
    itemDisplayId_8?: IntFieldUpdateOperationsInput | number
    itemDisplayId_9?: IntFieldUpdateOperationsInput | number
    itemDisplayId_10?: IntFieldUpdateOperationsInput | number
    bakeName?: StringFieldUpdateOperationsInput | string
  }

  export type CreatureDisplayInfoExtraUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayRaceId?: IntFieldUpdateOperationsInput | number
    displaySexId?: IntFieldUpdateOperationsInput | number
    skinId?: IntFieldUpdateOperationsInput | number
    faceId?: IntFieldUpdateOperationsInput | number
    hairStyleId?: IntFieldUpdateOperationsInput | number
    hairColorId?: IntFieldUpdateOperationsInput | number
    facialHairId?: IntFieldUpdateOperationsInput | number
    itemDisplayId_1?: IntFieldUpdateOperationsInput | number
    itemDisplayId_2?: IntFieldUpdateOperationsInput | number
    itemDisplayId_3?: IntFieldUpdateOperationsInput | number
    itemDisplayId_4?: IntFieldUpdateOperationsInput | number
    itemDisplayId_5?: IntFieldUpdateOperationsInput | number
    itemDisplayId_6?: IntFieldUpdateOperationsInput | number
    itemDisplayId_7?: IntFieldUpdateOperationsInput | number
    itemDisplayId_8?: IntFieldUpdateOperationsInput | number
    itemDisplayId_9?: IntFieldUpdateOperationsInput | number
    itemDisplayId_10?: IntFieldUpdateOperationsInput | number
    bakeName?: StringFieldUpdateOperationsInput | string
  }

  export type CreatureDisplayInfoExtraUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayRaceId?: IntFieldUpdateOperationsInput | number
    displaySexId?: IntFieldUpdateOperationsInput | number
    skinId?: IntFieldUpdateOperationsInput | number
    faceId?: IntFieldUpdateOperationsInput | number
    hairStyleId?: IntFieldUpdateOperationsInput | number
    hairColorId?: IntFieldUpdateOperationsInput | number
    facialHairId?: IntFieldUpdateOperationsInput | number
    itemDisplayId_1?: IntFieldUpdateOperationsInput | number
    itemDisplayId_2?: IntFieldUpdateOperationsInput | number
    itemDisplayId_3?: IntFieldUpdateOperationsInput | number
    itemDisplayId_4?: IntFieldUpdateOperationsInput | number
    itemDisplayId_5?: IntFieldUpdateOperationsInput | number
    itemDisplayId_6?: IntFieldUpdateOperationsInput | number
    itemDisplayId_7?: IntFieldUpdateOperationsInput | number
    itemDisplayId_8?: IntFieldUpdateOperationsInput | number
    itemDisplayId_9?: IntFieldUpdateOperationsInput | number
    itemDisplayId_10?: IntFieldUpdateOperationsInput | number
    bakeName?: StringFieldUpdateOperationsInput | string
  }

  export type CreatureDisplayInfoExtraUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayRaceId?: IntFieldUpdateOperationsInput | number
    displaySexId?: IntFieldUpdateOperationsInput | number
    skinId?: IntFieldUpdateOperationsInput | number
    faceId?: IntFieldUpdateOperationsInput | number
    hairStyleId?: IntFieldUpdateOperationsInput | number
    hairColorId?: IntFieldUpdateOperationsInput | number
    facialHairId?: IntFieldUpdateOperationsInput | number
    itemDisplayId_1?: IntFieldUpdateOperationsInput | number
    itemDisplayId_2?: IntFieldUpdateOperationsInput | number
    itemDisplayId_3?: IntFieldUpdateOperationsInput | number
    itemDisplayId_4?: IntFieldUpdateOperationsInput | number
    itemDisplayId_5?: IntFieldUpdateOperationsInput | number
    itemDisplayId_6?: IntFieldUpdateOperationsInput | number
    itemDisplayId_7?: IntFieldUpdateOperationsInput | number
    itemDisplayId_8?: IntFieldUpdateOperationsInput | number
    itemDisplayId_9?: IntFieldUpdateOperationsInput | number
    itemDisplayId_10?: IntFieldUpdateOperationsInput | number
    bakeName?: StringFieldUpdateOperationsInput | string
  }

  export type LightCreateInput = {
    id: number
    continent: ContinentCreateNestedOneWithoutLightInput
    x: number
    y: number
    z: number
    falloffStart: number
    falloffEnd: number
    paramStandard: LightParamsCreateNestedOneWithoutStandatrdLightInput
    paramUnderwater: LightParamsCreateNestedOneWithoutUnderwaterLightInput
    paramSunset: LightParamsCreateNestedOneWithoutSunsetLightInput
    paramOther: LightParamsCreateNestedOneWithoutOtherLightInput
    paramDeath: LightParamsCreateNestedOneWithoutDeathLightInput
    AreaTable?: AreaTableCreateNestedManyWithoutLightInput
  }

  export type LightUncheckedCreateInput = {
    id: number
    continentId: number
    x: number
    y: number
    z: number
    falloffStart: number
    falloffEnd: number
    paramStandardId: number
    paramUnderwaterId: number
    paramSunsetId: number
    paramOtherId: number
    paramDeathId: number
    AreaTable?: AreaTableUncheckedCreateNestedManyWithoutLightInput
  }

  export type LightUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    continent?: ContinentUpdateOneRequiredWithoutLightNestedInput
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    falloffStart?: FloatFieldUpdateOperationsInput | number
    falloffEnd?: FloatFieldUpdateOperationsInput | number
    paramStandard?: LightParamsUpdateOneRequiredWithoutStandatrdLightNestedInput
    paramUnderwater?: LightParamsUpdateOneRequiredWithoutUnderwaterLightNestedInput
    paramSunset?: LightParamsUpdateOneRequiredWithoutSunsetLightNestedInput
    paramOther?: LightParamsUpdateOneRequiredWithoutOtherLightNestedInput
    paramDeath?: LightParamsUpdateOneRequiredWithoutDeathLightNestedInput
    AreaTable?: AreaTableUpdateManyWithoutLightNestedInput
  }

  export type LightUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    falloffStart?: FloatFieldUpdateOperationsInput | number
    falloffEnd?: FloatFieldUpdateOperationsInput | number
    paramStandardId?: IntFieldUpdateOperationsInput | number
    paramUnderwaterId?: IntFieldUpdateOperationsInput | number
    paramSunsetId?: IntFieldUpdateOperationsInput | number
    paramOtherId?: IntFieldUpdateOperationsInput | number
    paramDeathId?: IntFieldUpdateOperationsInput | number
    AreaTable?: AreaTableUncheckedUpdateManyWithoutLightNestedInput
  }

  export type LightUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    falloffStart?: FloatFieldUpdateOperationsInput | number
    falloffEnd?: FloatFieldUpdateOperationsInput | number
  }

  export type LightUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    falloffStart?: FloatFieldUpdateOperationsInput | number
    falloffEnd?: FloatFieldUpdateOperationsInput | number
    paramStandardId?: IntFieldUpdateOperationsInput | number
    paramUnderwaterId?: IntFieldUpdateOperationsInput | number
    paramSunsetId?: IntFieldUpdateOperationsInput | number
    paramOtherId?: IntFieldUpdateOperationsInput | number
    paramDeathId?: IntFieldUpdateOperationsInput | number
  }

  export type LightParamsCreateInput = {
    id: number
    highlightSky: number
    lightSkybox: LightSkyboxCreateNestedOneWithoutLightParamsInput
    glow: number
    waterShallowAlpha: number
    waterDeepAlpha: number
    oceanShallowAlpha: number
    oceanDeepAlpha: number
    flags: number
    standatrdLight?: LightCreateNestedManyWithoutParamStandardInput
    underwaterLight?: LightCreateNestedManyWithoutParamUnderwaterInput
    sunsetLight?: LightCreateNestedManyWithoutParamSunsetInput
    otherLight?: LightCreateNestedManyWithoutParamOtherInput
    deathLight?: LightCreateNestedManyWithoutParamDeathInput
  }

  export type LightParamsUncheckedCreateInput = {
    id: number
    highlightSky: number
    lightSkyboxId: number
    glow: number
    waterShallowAlpha: number
    waterDeepAlpha: number
    oceanShallowAlpha: number
    oceanDeepAlpha: number
    flags: number
    standatrdLight?: LightUncheckedCreateNestedManyWithoutParamStandardInput
    underwaterLight?: LightUncheckedCreateNestedManyWithoutParamUnderwaterInput
    sunsetLight?: LightUncheckedCreateNestedManyWithoutParamSunsetInput
    otherLight?: LightUncheckedCreateNestedManyWithoutParamOtherInput
    deathLight?: LightUncheckedCreateNestedManyWithoutParamDeathInput
  }

  export type LightParamsUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    highlightSky?: IntFieldUpdateOperationsInput | number
    lightSkybox?: LightSkyboxUpdateOneRequiredWithoutLightParamsNestedInput
    glow?: FloatFieldUpdateOperationsInput | number
    waterShallowAlpha?: FloatFieldUpdateOperationsInput | number
    waterDeepAlpha?: FloatFieldUpdateOperationsInput | number
    oceanShallowAlpha?: FloatFieldUpdateOperationsInput | number
    oceanDeepAlpha?: FloatFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    standatrdLight?: LightUpdateManyWithoutParamStandardNestedInput
    underwaterLight?: LightUpdateManyWithoutParamUnderwaterNestedInput
    sunsetLight?: LightUpdateManyWithoutParamSunsetNestedInput
    otherLight?: LightUpdateManyWithoutParamOtherNestedInput
    deathLight?: LightUpdateManyWithoutParamDeathNestedInput
  }

  export type LightParamsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    highlightSky?: IntFieldUpdateOperationsInput | number
    lightSkyboxId?: IntFieldUpdateOperationsInput | number
    glow?: FloatFieldUpdateOperationsInput | number
    waterShallowAlpha?: FloatFieldUpdateOperationsInput | number
    waterDeepAlpha?: FloatFieldUpdateOperationsInput | number
    oceanShallowAlpha?: FloatFieldUpdateOperationsInput | number
    oceanDeepAlpha?: FloatFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    standatrdLight?: LightUncheckedUpdateManyWithoutParamStandardNestedInput
    underwaterLight?: LightUncheckedUpdateManyWithoutParamUnderwaterNestedInput
    sunsetLight?: LightUncheckedUpdateManyWithoutParamSunsetNestedInput
    otherLight?: LightUncheckedUpdateManyWithoutParamOtherNestedInput
    deathLight?: LightUncheckedUpdateManyWithoutParamDeathNestedInput
  }

  export type LightParamsUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    highlightSky?: IntFieldUpdateOperationsInput | number
    glow?: FloatFieldUpdateOperationsInput | number
    waterShallowAlpha?: FloatFieldUpdateOperationsInput | number
    waterDeepAlpha?: FloatFieldUpdateOperationsInput | number
    oceanShallowAlpha?: FloatFieldUpdateOperationsInput | number
    oceanDeepAlpha?: FloatFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
  }

  export type LightParamsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    highlightSky?: IntFieldUpdateOperationsInput | number
    lightSkyboxId?: IntFieldUpdateOperationsInput | number
    glow?: FloatFieldUpdateOperationsInput | number
    waterShallowAlpha?: FloatFieldUpdateOperationsInput | number
    waterDeepAlpha?: FloatFieldUpdateOperationsInput | number
    oceanShallowAlpha?: FloatFieldUpdateOperationsInput | number
    oceanDeepAlpha?: FloatFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
  }

  export type LightSkyboxCreateInput = {
    id: number
    name: string
    LightParams?: LightParamsCreateNestedManyWithoutLightSkyboxInput
  }

  export type LightSkyboxUncheckedCreateInput = {
    id: number
    name: string
    LightParams?: LightParamsUncheckedCreateNestedManyWithoutLightSkyboxInput
  }

  export type LightSkyboxUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    LightParams?: LightParamsUpdateManyWithoutLightSkyboxNestedInput
  }

  export type LightSkyboxUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    LightParams?: LightParamsUncheckedUpdateManyWithoutLightSkyboxNestedInput
  }

  export type LightSkyboxUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LightSkyboxUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WMOAreaTableCreateInput = {
    id: number
    wmoId: number
    nameSetId: number
    wmoGroupId: number
    soundProviderId: number
    underwaterSoundProviderId: number
    ambienceId: number
    zoneMusicId: number
    introSoundId: number
    flags: number
    areaTable: AreaTableCreateNestedOneWithoutWMOAreaTableInput
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
  }

  export type WMOAreaTableUncheckedCreateInput = {
    id: number
    wmoId: number
    nameSetId: number
    wmoGroupId: number
    soundProviderId: number
    underwaterSoundProviderId: number
    ambienceId: number
    zoneMusicId: number
    introSoundId: number
    flags: number
    areaTableId: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
  }

  export type WMOAreaTableUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    wmoId?: IntFieldUpdateOperationsInput | number
    nameSetId?: IntFieldUpdateOperationsInput | number
    wmoGroupId?: IntFieldUpdateOperationsInput | number
    soundProviderId?: IntFieldUpdateOperationsInput | number
    underwaterSoundProviderId?: IntFieldUpdateOperationsInput | number
    ambienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    introSoundId?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    areaTable?: AreaTableUpdateOneRequiredWithoutWMOAreaTableNestedInput
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
  }

  export type WMOAreaTableUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    wmoId?: IntFieldUpdateOperationsInput | number
    nameSetId?: IntFieldUpdateOperationsInput | number
    wmoGroupId?: IntFieldUpdateOperationsInput | number
    soundProviderId?: IntFieldUpdateOperationsInput | number
    underwaterSoundProviderId?: IntFieldUpdateOperationsInput | number
    ambienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    introSoundId?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    areaTableId?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
  }

  export type WMOAreaTableUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    wmoId?: IntFieldUpdateOperationsInput | number
    nameSetId?: IntFieldUpdateOperationsInput | number
    wmoGroupId?: IntFieldUpdateOperationsInput | number
    soundProviderId?: IntFieldUpdateOperationsInput | number
    underwaterSoundProviderId?: IntFieldUpdateOperationsInput | number
    ambienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    introSoundId?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
  }

  export type WMOAreaTableUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    wmoId?: IntFieldUpdateOperationsInput | number
    nameSetId?: IntFieldUpdateOperationsInput | number
    wmoGroupId?: IntFieldUpdateOperationsInput | number
    soundProviderId?: IntFieldUpdateOperationsInput | number
    underwaterSoundProviderId?: IntFieldUpdateOperationsInput | number
    ambienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    introSoundId?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    areaTableId?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
  }

  export type WorldMapAreaCreateInput = {
    continent: ContinentCreateNestedOneWithoutWorldMapAreaInput
    areaTable: AreaTableCreateNestedOneWithoutWorldMapAreaInput
    name: string
    locLeft: number
    locRight: number
    locTop: number
    locBottom: number
    WorldMapOverlay?: WorldMapOverlayCreateNestedManyWithoutMapAreaInput
  }

  export type WorldMapAreaUncheckedCreateInput = {
    id?: number
    continentId: number
    areaId: number
    name: string
    locLeft: number
    locRight: number
    locTop: number
    locBottom: number
    WorldMapOverlay?: WorldMapOverlayUncheckedCreateNestedManyWithoutMapAreaInput
  }

  export type WorldMapAreaUpdateInput = {
    continent?: ContinentUpdateOneRequiredWithoutWorldMapAreaNestedInput
    areaTable?: AreaTableUpdateOneRequiredWithoutWorldMapAreaNestedInput
    name?: StringFieldUpdateOperationsInput | string
    locLeft?: FloatFieldUpdateOperationsInput | number
    locRight?: FloatFieldUpdateOperationsInput | number
    locTop?: FloatFieldUpdateOperationsInput | number
    locBottom?: FloatFieldUpdateOperationsInput | number
    WorldMapOverlay?: WorldMapOverlayUpdateManyWithoutMapAreaNestedInput
  }

  export type WorldMapAreaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    areaId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    locLeft?: FloatFieldUpdateOperationsInput | number
    locRight?: FloatFieldUpdateOperationsInput | number
    locTop?: FloatFieldUpdateOperationsInput | number
    locBottom?: FloatFieldUpdateOperationsInput | number
    WorldMapOverlay?: WorldMapOverlayUncheckedUpdateManyWithoutMapAreaNestedInput
  }

  export type WorldMapAreaUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    locLeft?: FloatFieldUpdateOperationsInput | number
    locRight?: FloatFieldUpdateOperationsInput | number
    locTop?: FloatFieldUpdateOperationsInput | number
    locBottom?: FloatFieldUpdateOperationsInput | number
  }

  export type WorldMapAreaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    areaId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    locLeft?: FloatFieldUpdateOperationsInput | number
    locRight?: FloatFieldUpdateOperationsInput | number
    locTop?: FloatFieldUpdateOperationsInput | number
    locBottom?: FloatFieldUpdateOperationsInput | number
  }

  export type WorldMapContinentCreateInput = {
    id: number
    continent: ContinentCreateNestedOneWithoutWorldMapContinentInput
    left: number
    right: number
    top: number
    bottom: number
    offsetX: number
    offsetY: number
    scale: number
    taxiMinX: number
    taxiMinY: number
    taxiMaxX: number
    taxiMaxY: number
  }

  export type WorldMapContinentUncheckedCreateInput = {
    id: number
    continentId: number
    left: number
    right: number
    top: number
    bottom: number
    offsetX: number
    offsetY: number
    scale: number
    taxiMinX: number
    taxiMinY: number
    taxiMaxX: number
    taxiMaxY: number
  }

  export type WorldMapContinentUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    continent?: ContinentUpdateOneRequiredWithoutWorldMapContinentNestedInput
    left?: IntFieldUpdateOperationsInput | number
    right?: IntFieldUpdateOperationsInput | number
    top?: IntFieldUpdateOperationsInput | number
    bottom?: IntFieldUpdateOperationsInput | number
    offsetX?: FloatFieldUpdateOperationsInput | number
    offsetY?: FloatFieldUpdateOperationsInput | number
    scale?: FloatFieldUpdateOperationsInput | number
    taxiMinX?: IntFieldUpdateOperationsInput | number
    taxiMinY?: IntFieldUpdateOperationsInput | number
    taxiMaxX?: IntFieldUpdateOperationsInput | number
    taxiMaxY?: IntFieldUpdateOperationsInput | number
  }

  export type WorldMapContinentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    left?: IntFieldUpdateOperationsInput | number
    right?: IntFieldUpdateOperationsInput | number
    top?: IntFieldUpdateOperationsInput | number
    bottom?: IntFieldUpdateOperationsInput | number
    offsetX?: FloatFieldUpdateOperationsInput | number
    offsetY?: FloatFieldUpdateOperationsInput | number
    scale?: FloatFieldUpdateOperationsInput | number
    taxiMinX?: IntFieldUpdateOperationsInput | number
    taxiMinY?: IntFieldUpdateOperationsInput | number
    taxiMaxX?: IntFieldUpdateOperationsInput | number
    taxiMaxY?: IntFieldUpdateOperationsInput | number
  }

  export type WorldMapContinentUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    left?: IntFieldUpdateOperationsInput | number
    right?: IntFieldUpdateOperationsInput | number
    top?: IntFieldUpdateOperationsInput | number
    bottom?: IntFieldUpdateOperationsInput | number
    offsetX?: FloatFieldUpdateOperationsInput | number
    offsetY?: FloatFieldUpdateOperationsInput | number
    scale?: FloatFieldUpdateOperationsInput | number
    taxiMinX?: IntFieldUpdateOperationsInput | number
    taxiMinY?: IntFieldUpdateOperationsInput | number
    taxiMaxX?: IntFieldUpdateOperationsInput | number
    taxiMaxY?: IntFieldUpdateOperationsInput | number
  }

  export type WorldMapContinentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    left?: IntFieldUpdateOperationsInput | number
    right?: IntFieldUpdateOperationsInput | number
    top?: IntFieldUpdateOperationsInput | number
    bottom?: IntFieldUpdateOperationsInput | number
    offsetX?: FloatFieldUpdateOperationsInput | number
    offsetY?: FloatFieldUpdateOperationsInput | number
    scale?: FloatFieldUpdateOperationsInput | number
    taxiMinX?: IntFieldUpdateOperationsInput | number
    taxiMinY?: IntFieldUpdateOperationsInput | number
    taxiMaxX?: IntFieldUpdateOperationsInput | number
    taxiMaxY?: IntFieldUpdateOperationsInput | number
  }

  export type WorldMapOverlayCreateInput = {
    id: number
    mapArea: WorldMapAreaCreateNestedOneWithoutWorldMapOverlayInput
    area_1: AreaTableCreateNestedOneWithoutWorldMapOverlay1Input
    area_2: AreaTableCreateNestedOneWithoutWorldMapOverlay2Input
    area_3: AreaTableCreateNestedOneWithoutWorldMapOverlay3Input
    area_4: AreaTableCreateNestedOneWithoutWorldMapOverlay4Input
    mapPointX: number
    mapPointY: number
    texture: string
    textureWidth: number
    textureHeight: number
    offsetX: number
    offsetY: number
    hitRectTop: number
    hitRectLeft: number
    hitRectBottom: number
    hitRectRight: number
  }

  export type WorldMapOverlayUncheckedCreateInput = {
    id: number
    worldMapAreaId: number
    areaId_1: number
    areaId_2: number
    areaId_3: number
    areaId_4: number
    mapPointX: number
    mapPointY: number
    texture: string
    textureWidth: number
    textureHeight: number
    offsetX: number
    offsetY: number
    hitRectTop: number
    hitRectLeft: number
    hitRectBottom: number
    hitRectRight: number
  }

  export type WorldMapOverlayUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mapArea?: WorldMapAreaUpdateOneRequiredWithoutWorldMapOverlayNestedInput
    area_1?: AreaTableUpdateOneRequiredWithoutWorldMapOverlay1NestedInput
    area_2?: AreaTableUpdateOneRequiredWithoutWorldMapOverlay2NestedInput
    area_3?: AreaTableUpdateOneRequiredWithoutWorldMapOverlay3NestedInput
    area_4?: AreaTableUpdateOneRequiredWithoutWorldMapOverlay4NestedInput
    mapPointX?: IntFieldUpdateOperationsInput | number
    mapPointY?: IntFieldUpdateOperationsInput | number
    texture?: StringFieldUpdateOperationsInput | string
    textureWidth?: IntFieldUpdateOperationsInput | number
    textureHeight?: IntFieldUpdateOperationsInput | number
    offsetX?: IntFieldUpdateOperationsInput | number
    offsetY?: IntFieldUpdateOperationsInput | number
    hitRectTop?: IntFieldUpdateOperationsInput | number
    hitRectLeft?: IntFieldUpdateOperationsInput | number
    hitRectBottom?: IntFieldUpdateOperationsInput | number
    hitRectRight?: IntFieldUpdateOperationsInput | number
  }

  export type WorldMapOverlayUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    worldMapAreaId?: IntFieldUpdateOperationsInput | number
    areaId_1?: IntFieldUpdateOperationsInput | number
    areaId_2?: IntFieldUpdateOperationsInput | number
    areaId_3?: IntFieldUpdateOperationsInput | number
    areaId_4?: IntFieldUpdateOperationsInput | number
    mapPointX?: IntFieldUpdateOperationsInput | number
    mapPointY?: IntFieldUpdateOperationsInput | number
    texture?: StringFieldUpdateOperationsInput | string
    textureWidth?: IntFieldUpdateOperationsInput | number
    textureHeight?: IntFieldUpdateOperationsInput | number
    offsetX?: IntFieldUpdateOperationsInput | number
    offsetY?: IntFieldUpdateOperationsInput | number
    hitRectTop?: IntFieldUpdateOperationsInput | number
    hitRectLeft?: IntFieldUpdateOperationsInput | number
    hitRectBottom?: IntFieldUpdateOperationsInput | number
    hitRectRight?: IntFieldUpdateOperationsInput | number
  }

  export type WorldMapOverlayUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    mapPointX?: IntFieldUpdateOperationsInput | number
    mapPointY?: IntFieldUpdateOperationsInput | number
    texture?: StringFieldUpdateOperationsInput | string
    textureWidth?: IntFieldUpdateOperationsInput | number
    textureHeight?: IntFieldUpdateOperationsInput | number
    offsetX?: IntFieldUpdateOperationsInput | number
    offsetY?: IntFieldUpdateOperationsInput | number
    hitRectTop?: IntFieldUpdateOperationsInput | number
    hitRectLeft?: IntFieldUpdateOperationsInput | number
    hitRectBottom?: IntFieldUpdateOperationsInput | number
    hitRectRight?: IntFieldUpdateOperationsInput | number
  }

  export type WorldMapOverlayUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    worldMapAreaId?: IntFieldUpdateOperationsInput | number
    areaId_1?: IntFieldUpdateOperationsInput | number
    areaId_2?: IntFieldUpdateOperationsInput | number
    areaId_3?: IntFieldUpdateOperationsInput | number
    areaId_4?: IntFieldUpdateOperationsInput | number
    mapPointX?: IntFieldUpdateOperationsInput | number
    mapPointY?: IntFieldUpdateOperationsInput | number
    texture?: StringFieldUpdateOperationsInput | string
    textureWidth?: IntFieldUpdateOperationsInput | number
    textureHeight?: IntFieldUpdateOperationsInput | number
    offsetX?: IntFieldUpdateOperationsInput | number
    offsetY?: IntFieldUpdateOperationsInput | number
    hitRectTop?: IntFieldUpdateOperationsInput | number
    hitRectLeft?: IntFieldUpdateOperationsInput | number
    hitRectBottom?: IntFieldUpdateOperationsInput | number
    hitRectRight?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type AreaPOIListRelationFilter = {
    every?: AreaPOIWhereInput
    some?: AreaPOIWhereInput
    none?: AreaPOIWhereInput
  }

  export type AreaTableListRelationFilter = {
    every?: AreaTableWhereInput
    some?: AreaTableWhereInput
    none?: AreaTableWhereInput
  }

  export type WorldMapAreaListRelationFilter = {
    every?: WorldMapAreaWhereInput
    some?: WorldMapAreaWhereInput
    none?: WorldMapAreaWhereInput
  }

  export type WorldMapContinentListRelationFilter = {
    every?: WorldMapContinentWhereInput
    some?: WorldMapContinentWhereInput
    none?: WorldMapContinentWhereInput
  }

  export type AreaTriggerListRelationFilter = {
    every?: AreaTriggerWhereInput
    some?: AreaTriggerWhereInput
    none?: AreaTriggerWhereInput
  }

  export type LightListRelationFilter = {
    every?: LightWhereInput
    some?: LightWhereInput
    none?: LightWhereInput
  }

  export type AreaPOIOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AreaTableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorldMapAreaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorldMapContinentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AreaTriggerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LightOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContinentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ContinentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContinentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ContinentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ContinentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type ContinentRelationFilter = {
    is?: ContinentWhereInput
    isNot?: ContinentWhereInput
  }

  export type AreaTableRelationFilter = {
    is?: AreaTableWhereInput
    isNot?: AreaTableWhereInput
  }

  export type AreaPOICountOrderByAggregateInput = {
    id?: SortOrder
    importance?: SortOrder
    icon?: SortOrder
    factionId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    continentId?: SortOrder
    flags?: SortOrder
    areaId?: SortOrder
    name_enUS?: SortOrder
    name_enGB?: SortOrder
    name_koKR?: SortOrder
    name_frFR?: SortOrder
    name_deDE?: SortOrder
    name_enCN?: SortOrder
    name_zhCN?: SortOrder
    name_enTW?: SortOrder
    nameMask?: SortOrder
    description_enUS?: SortOrder
    description_enGB?: SortOrder
    description_koKR?: SortOrder
    description_frFR?: SortOrder
    description_deDE?: SortOrder
    description_enCN?: SortOrder
    description_zhCN?: SortOrder
    description_enTW?: SortOrder
    descriptionMask?: SortOrder
    worldStateId?: SortOrder
  }

  export type AreaPOIAvgOrderByAggregateInput = {
    id?: SortOrder
    importance?: SortOrder
    icon?: SortOrder
    factionId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    continentId?: SortOrder
    flags?: SortOrder
    areaId?: SortOrder
    nameMask?: SortOrder
    descriptionMask?: SortOrder
    worldStateId?: SortOrder
  }

  export type AreaPOIMaxOrderByAggregateInput = {
    id?: SortOrder
    importance?: SortOrder
    icon?: SortOrder
    factionId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    continentId?: SortOrder
    flags?: SortOrder
    areaId?: SortOrder
    name_enUS?: SortOrder
    name_enGB?: SortOrder
    name_koKR?: SortOrder
    name_frFR?: SortOrder
    name_deDE?: SortOrder
    name_enCN?: SortOrder
    name_zhCN?: SortOrder
    name_enTW?: SortOrder
    nameMask?: SortOrder
    description_enUS?: SortOrder
    description_enGB?: SortOrder
    description_koKR?: SortOrder
    description_frFR?: SortOrder
    description_deDE?: SortOrder
    description_enCN?: SortOrder
    description_zhCN?: SortOrder
    description_enTW?: SortOrder
    descriptionMask?: SortOrder
    worldStateId?: SortOrder
  }

  export type AreaPOIMinOrderByAggregateInput = {
    id?: SortOrder
    importance?: SortOrder
    icon?: SortOrder
    factionId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    continentId?: SortOrder
    flags?: SortOrder
    areaId?: SortOrder
    name_enUS?: SortOrder
    name_enGB?: SortOrder
    name_koKR?: SortOrder
    name_frFR?: SortOrder
    name_deDE?: SortOrder
    name_enCN?: SortOrder
    name_zhCN?: SortOrder
    name_enTW?: SortOrder
    nameMask?: SortOrder
    description_enUS?: SortOrder
    description_enGB?: SortOrder
    description_koKR?: SortOrder
    description_frFR?: SortOrder
    description_deDE?: SortOrder
    description_enCN?: SortOrder
    description_zhCN?: SortOrder
    description_enTW?: SortOrder
    descriptionMask?: SortOrder
    worldStateId?: SortOrder
  }

  export type AreaPOISumOrderByAggregateInput = {
    id?: SortOrder
    importance?: SortOrder
    icon?: SortOrder
    factionId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    continentId?: SortOrder
    flags?: SortOrder
    areaId?: SortOrder
    nameMask?: SortOrder
    descriptionMask?: SortOrder
    worldStateId?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type LightRelationFilter = {
    is?: LightWhereInput
    isNot?: LightWhereInput
  }

  export type WMOAreaTableListRelationFilter = {
    every?: WMOAreaTableWhereInput
    some?: WMOAreaTableWhereInput
    none?: WMOAreaTableWhereInput
  }

  export type WorldMapOverlayListRelationFilter = {
    every?: WorldMapOverlayWhereInput
    some?: WorldMapOverlayWhereInput
    none?: WorldMapOverlayWhereInput
  }

  export type WMOAreaTableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorldMapOverlayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AreaTableCountOrderByAggregateInput = {
    id?: SortOrder
    continentId?: SortOrder
    parentAreaId?: SortOrder
    areaBit?: SortOrder
    flags?: SortOrder
    soundPreferenceId?: SortOrder
    underwaterSoundPreferenceId?: SortOrder
    soundAmbienceId?: SortOrder
    zoneMusicId?: SortOrder
    zoneIntroMusicId?: SortOrder
    explorationLevel?: SortOrder
    name_enUS?: SortOrder
    name_enGB?: SortOrder
    name_koKR?: SortOrder
    name_frFR?: SortOrder
    name_deDE?: SortOrder
    name_enCN?: SortOrder
    name_zhCN?: SortOrder
    name_enTW?: SortOrder
    nameMask?: SortOrder
    factionGroupMask?: SortOrder
    liquidTypeId?: SortOrder
    minElevation?: SortOrder
    ambientMultiplier?: SortOrder
    lightId?: SortOrder
  }

  export type AreaTableAvgOrderByAggregateInput = {
    id?: SortOrder
    continentId?: SortOrder
    parentAreaId?: SortOrder
    areaBit?: SortOrder
    flags?: SortOrder
    soundPreferenceId?: SortOrder
    underwaterSoundPreferenceId?: SortOrder
    soundAmbienceId?: SortOrder
    zoneMusicId?: SortOrder
    zoneIntroMusicId?: SortOrder
    explorationLevel?: SortOrder
    nameMask?: SortOrder
    factionGroupMask?: SortOrder
    liquidTypeId?: SortOrder
    minElevation?: SortOrder
    ambientMultiplier?: SortOrder
    lightId?: SortOrder
  }

  export type AreaTableMaxOrderByAggregateInput = {
    id?: SortOrder
    continentId?: SortOrder
    parentAreaId?: SortOrder
    areaBit?: SortOrder
    flags?: SortOrder
    soundPreferenceId?: SortOrder
    underwaterSoundPreferenceId?: SortOrder
    soundAmbienceId?: SortOrder
    zoneMusicId?: SortOrder
    zoneIntroMusicId?: SortOrder
    explorationLevel?: SortOrder
    name_enUS?: SortOrder
    name_enGB?: SortOrder
    name_koKR?: SortOrder
    name_frFR?: SortOrder
    name_deDE?: SortOrder
    name_enCN?: SortOrder
    name_zhCN?: SortOrder
    name_enTW?: SortOrder
    nameMask?: SortOrder
    factionGroupMask?: SortOrder
    liquidTypeId?: SortOrder
    minElevation?: SortOrder
    ambientMultiplier?: SortOrder
    lightId?: SortOrder
  }

  export type AreaTableMinOrderByAggregateInput = {
    id?: SortOrder
    continentId?: SortOrder
    parentAreaId?: SortOrder
    areaBit?: SortOrder
    flags?: SortOrder
    soundPreferenceId?: SortOrder
    underwaterSoundPreferenceId?: SortOrder
    soundAmbienceId?: SortOrder
    zoneMusicId?: SortOrder
    zoneIntroMusicId?: SortOrder
    explorationLevel?: SortOrder
    name_enUS?: SortOrder
    name_enGB?: SortOrder
    name_koKR?: SortOrder
    name_frFR?: SortOrder
    name_deDE?: SortOrder
    name_enCN?: SortOrder
    name_zhCN?: SortOrder
    name_enTW?: SortOrder
    nameMask?: SortOrder
    factionGroupMask?: SortOrder
    liquidTypeId?: SortOrder
    minElevation?: SortOrder
    ambientMultiplier?: SortOrder
    lightId?: SortOrder
  }

  export type AreaTableSumOrderByAggregateInput = {
    id?: SortOrder
    continentId?: SortOrder
    parentAreaId?: SortOrder
    areaBit?: SortOrder
    flags?: SortOrder
    soundPreferenceId?: SortOrder
    underwaterSoundPreferenceId?: SortOrder
    soundAmbienceId?: SortOrder
    zoneMusicId?: SortOrder
    zoneIntroMusicId?: SortOrder
    explorationLevel?: SortOrder
    nameMask?: SortOrder
    factionGroupMask?: SortOrder
    liquidTypeId?: SortOrder
    minElevation?: SortOrder
    ambientMultiplier?: SortOrder
    lightId?: SortOrder
  }

  export type AreaTriggerCountOrderByAggregateInput = {
    id?: SortOrder
    continentId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    radius?: SortOrder
    boxLength?: SortOrder
    boxWidth?: SortOrder
    boxHeight?: SortOrder
    boxYaw?: SortOrder
  }

  export type AreaTriggerAvgOrderByAggregateInput = {
    id?: SortOrder
    continentId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    radius?: SortOrder
    boxLength?: SortOrder
    boxWidth?: SortOrder
    boxHeight?: SortOrder
    boxYaw?: SortOrder
  }

  export type AreaTriggerMaxOrderByAggregateInput = {
    id?: SortOrder
    continentId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    radius?: SortOrder
    boxLength?: SortOrder
    boxWidth?: SortOrder
    boxHeight?: SortOrder
    boxYaw?: SortOrder
  }

  export type AreaTriggerMinOrderByAggregateInput = {
    id?: SortOrder
    continentId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    radius?: SortOrder
    boxLength?: SortOrder
    boxWidth?: SortOrder
    boxHeight?: SortOrder
    boxYaw?: SortOrder
  }

  export type AreaTriggerSumOrderByAggregateInput = {
    id?: SortOrder
    continentId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    radius?: SortOrder
    boxLength?: SortOrder
    boxWidth?: SortOrder
    boxHeight?: SortOrder
    boxYaw?: SortOrder
  }

  export type CreatureDisplayInfoExtraCountOrderByAggregateInput = {
    id?: SortOrder
    displayRaceId?: SortOrder
    displaySexId?: SortOrder
    skinId?: SortOrder
    faceId?: SortOrder
    hairStyleId?: SortOrder
    hairColorId?: SortOrder
    facialHairId?: SortOrder
    itemDisplayId_1?: SortOrder
    itemDisplayId_2?: SortOrder
    itemDisplayId_3?: SortOrder
    itemDisplayId_4?: SortOrder
    itemDisplayId_5?: SortOrder
    itemDisplayId_6?: SortOrder
    itemDisplayId_7?: SortOrder
    itemDisplayId_8?: SortOrder
    itemDisplayId_9?: SortOrder
    itemDisplayId_10?: SortOrder
    bakeName?: SortOrder
  }

  export type CreatureDisplayInfoExtraAvgOrderByAggregateInput = {
    id?: SortOrder
    displayRaceId?: SortOrder
    displaySexId?: SortOrder
    skinId?: SortOrder
    faceId?: SortOrder
    hairStyleId?: SortOrder
    hairColorId?: SortOrder
    facialHairId?: SortOrder
    itemDisplayId_1?: SortOrder
    itemDisplayId_2?: SortOrder
    itemDisplayId_3?: SortOrder
    itemDisplayId_4?: SortOrder
    itemDisplayId_5?: SortOrder
    itemDisplayId_6?: SortOrder
    itemDisplayId_7?: SortOrder
    itemDisplayId_8?: SortOrder
    itemDisplayId_9?: SortOrder
    itemDisplayId_10?: SortOrder
  }

  export type CreatureDisplayInfoExtraMaxOrderByAggregateInput = {
    id?: SortOrder
    displayRaceId?: SortOrder
    displaySexId?: SortOrder
    skinId?: SortOrder
    faceId?: SortOrder
    hairStyleId?: SortOrder
    hairColorId?: SortOrder
    facialHairId?: SortOrder
    itemDisplayId_1?: SortOrder
    itemDisplayId_2?: SortOrder
    itemDisplayId_3?: SortOrder
    itemDisplayId_4?: SortOrder
    itemDisplayId_5?: SortOrder
    itemDisplayId_6?: SortOrder
    itemDisplayId_7?: SortOrder
    itemDisplayId_8?: SortOrder
    itemDisplayId_9?: SortOrder
    itemDisplayId_10?: SortOrder
    bakeName?: SortOrder
  }

  export type CreatureDisplayInfoExtraMinOrderByAggregateInput = {
    id?: SortOrder
    displayRaceId?: SortOrder
    displaySexId?: SortOrder
    skinId?: SortOrder
    faceId?: SortOrder
    hairStyleId?: SortOrder
    hairColorId?: SortOrder
    facialHairId?: SortOrder
    itemDisplayId_1?: SortOrder
    itemDisplayId_2?: SortOrder
    itemDisplayId_3?: SortOrder
    itemDisplayId_4?: SortOrder
    itemDisplayId_5?: SortOrder
    itemDisplayId_6?: SortOrder
    itemDisplayId_7?: SortOrder
    itemDisplayId_8?: SortOrder
    itemDisplayId_9?: SortOrder
    itemDisplayId_10?: SortOrder
    bakeName?: SortOrder
  }

  export type CreatureDisplayInfoExtraSumOrderByAggregateInput = {
    id?: SortOrder
    displayRaceId?: SortOrder
    displaySexId?: SortOrder
    skinId?: SortOrder
    faceId?: SortOrder
    hairStyleId?: SortOrder
    hairColorId?: SortOrder
    facialHairId?: SortOrder
    itemDisplayId_1?: SortOrder
    itemDisplayId_2?: SortOrder
    itemDisplayId_3?: SortOrder
    itemDisplayId_4?: SortOrder
    itemDisplayId_5?: SortOrder
    itemDisplayId_6?: SortOrder
    itemDisplayId_7?: SortOrder
    itemDisplayId_8?: SortOrder
    itemDisplayId_9?: SortOrder
    itemDisplayId_10?: SortOrder
  }

  export type LightParamsRelationFilter = {
    is?: LightParamsWhereInput
    isNot?: LightParamsWhereInput
  }

  export type LightCountOrderByAggregateInput = {
    id?: SortOrder
    continentId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    falloffStart?: SortOrder
    falloffEnd?: SortOrder
    paramStandardId?: SortOrder
    paramUnderwaterId?: SortOrder
    paramSunsetId?: SortOrder
    paramOtherId?: SortOrder
    paramDeathId?: SortOrder
  }

  export type LightAvgOrderByAggregateInput = {
    id?: SortOrder
    continentId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    falloffStart?: SortOrder
    falloffEnd?: SortOrder
    paramStandardId?: SortOrder
    paramUnderwaterId?: SortOrder
    paramSunsetId?: SortOrder
    paramOtherId?: SortOrder
    paramDeathId?: SortOrder
  }

  export type LightMaxOrderByAggregateInput = {
    id?: SortOrder
    continentId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    falloffStart?: SortOrder
    falloffEnd?: SortOrder
    paramStandardId?: SortOrder
    paramUnderwaterId?: SortOrder
    paramSunsetId?: SortOrder
    paramOtherId?: SortOrder
    paramDeathId?: SortOrder
  }

  export type LightMinOrderByAggregateInput = {
    id?: SortOrder
    continentId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    falloffStart?: SortOrder
    falloffEnd?: SortOrder
    paramStandardId?: SortOrder
    paramUnderwaterId?: SortOrder
    paramSunsetId?: SortOrder
    paramOtherId?: SortOrder
    paramDeathId?: SortOrder
  }

  export type LightSumOrderByAggregateInput = {
    id?: SortOrder
    continentId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    falloffStart?: SortOrder
    falloffEnd?: SortOrder
    paramStandardId?: SortOrder
    paramUnderwaterId?: SortOrder
    paramSunsetId?: SortOrder
    paramOtherId?: SortOrder
    paramDeathId?: SortOrder
  }

  export type LightSkyboxRelationFilter = {
    is?: LightSkyboxWhereInput
    isNot?: LightSkyboxWhereInput
  }

  export type LightParamsCountOrderByAggregateInput = {
    id?: SortOrder
    highlightSky?: SortOrder
    lightSkyboxId?: SortOrder
    glow?: SortOrder
    waterShallowAlpha?: SortOrder
    waterDeepAlpha?: SortOrder
    oceanShallowAlpha?: SortOrder
    oceanDeepAlpha?: SortOrder
    flags?: SortOrder
  }

  export type LightParamsAvgOrderByAggregateInput = {
    id?: SortOrder
    highlightSky?: SortOrder
    lightSkyboxId?: SortOrder
    glow?: SortOrder
    waterShallowAlpha?: SortOrder
    waterDeepAlpha?: SortOrder
    oceanShallowAlpha?: SortOrder
    oceanDeepAlpha?: SortOrder
    flags?: SortOrder
  }

  export type LightParamsMaxOrderByAggregateInput = {
    id?: SortOrder
    highlightSky?: SortOrder
    lightSkyboxId?: SortOrder
    glow?: SortOrder
    waterShallowAlpha?: SortOrder
    waterDeepAlpha?: SortOrder
    oceanShallowAlpha?: SortOrder
    oceanDeepAlpha?: SortOrder
    flags?: SortOrder
  }

  export type LightParamsMinOrderByAggregateInput = {
    id?: SortOrder
    highlightSky?: SortOrder
    lightSkyboxId?: SortOrder
    glow?: SortOrder
    waterShallowAlpha?: SortOrder
    waterDeepAlpha?: SortOrder
    oceanShallowAlpha?: SortOrder
    oceanDeepAlpha?: SortOrder
    flags?: SortOrder
  }

  export type LightParamsSumOrderByAggregateInput = {
    id?: SortOrder
    highlightSky?: SortOrder
    lightSkyboxId?: SortOrder
    glow?: SortOrder
    waterShallowAlpha?: SortOrder
    waterDeepAlpha?: SortOrder
    oceanShallowAlpha?: SortOrder
    oceanDeepAlpha?: SortOrder
    flags?: SortOrder
  }

  export type LightParamsListRelationFilter = {
    every?: LightParamsWhereInput
    some?: LightParamsWhereInput
    none?: LightParamsWhereInput
  }

  export type LightParamsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LightSkyboxCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type LightSkyboxAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LightSkyboxMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type LightSkyboxMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type LightSkyboxSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WMOAreaTableCountOrderByAggregateInput = {
    id?: SortOrder
    wmoId?: SortOrder
    nameSetId?: SortOrder
    wmoGroupId?: SortOrder
    soundProviderId?: SortOrder
    underwaterSoundProviderId?: SortOrder
    ambienceId?: SortOrder
    zoneMusicId?: SortOrder
    introSoundId?: SortOrder
    flags?: SortOrder
    areaTableId?: SortOrder
    name_enUS?: SortOrder
    name_enGB?: SortOrder
    name_koKR?: SortOrder
    name_frFR?: SortOrder
    name_deDE?: SortOrder
    name_enCN?: SortOrder
    name_zhCN?: SortOrder
    name_enTW?: SortOrder
    nameMask?: SortOrder
  }

  export type WMOAreaTableAvgOrderByAggregateInput = {
    id?: SortOrder
    wmoId?: SortOrder
    nameSetId?: SortOrder
    wmoGroupId?: SortOrder
    soundProviderId?: SortOrder
    underwaterSoundProviderId?: SortOrder
    ambienceId?: SortOrder
    zoneMusicId?: SortOrder
    introSoundId?: SortOrder
    flags?: SortOrder
    areaTableId?: SortOrder
    nameMask?: SortOrder
  }

  export type WMOAreaTableMaxOrderByAggregateInput = {
    id?: SortOrder
    wmoId?: SortOrder
    nameSetId?: SortOrder
    wmoGroupId?: SortOrder
    soundProviderId?: SortOrder
    underwaterSoundProviderId?: SortOrder
    ambienceId?: SortOrder
    zoneMusicId?: SortOrder
    introSoundId?: SortOrder
    flags?: SortOrder
    areaTableId?: SortOrder
    name_enUS?: SortOrder
    name_enGB?: SortOrder
    name_koKR?: SortOrder
    name_frFR?: SortOrder
    name_deDE?: SortOrder
    name_enCN?: SortOrder
    name_zhCN?: SortOrder
    name_enTW?: SortOrder
    nameMask?: SortOrder
  }

  export type WMOAreaTableMinOrderByAggregateInput = {
    id?: SortOrder
    wmoId?: SortOrder
    nameSetId?: SortOrder
    wmoGroupId?: SortOrder
    soundProviderId?: SortOrder
    underwaterSoundProviderId?: SortOrder
    ambienceId?: SortOrder
    zoneMusicId?: SortOrder
    introSoundId?: SortOrder
    flags?: SortOrder
    areaTableId?: SortOrder
    name_enUS?: SortOrder
    name_enGB?: SortOrder
    name_koKR?: SortOrder
    name_frFR?: SortOrder
    name_deDE?: SortOrder
    name_enCN?: SortOrder
    name_zhCN?: SortOrder
    name_enTW?: SortOrder
    nameMask?: SortOrder
  }

  export type WMOAreaTableSumOrderByAggregateInput = {
    id?: SortOrder
    wmoId?: SortOrder
    nameSetId?: SortOrder
    wmoGroupId?: SortOrder
    soundProviderId?: SortOrder
    underwaterSoundProviderId?: SortOrder
    ambienceId?: SortOrder
    zoneMusicId?: SortOrder
    introSoundId?: SortOrder
    flags?: SortOrder
    areaTableId?: SortOrder
    nameMask?: SortOrder
  }

  export type WorldMapAreaCountOrderByAggregateInput = {
    id?: SortOrder
    continentId?: SortOrder
    areaId?: SortOrder
    name?: SortOrder
    locLeft?: SortOrder
    locRight?: SortOrder
    locTop?: SortOrder
    locBottom?: SortOrder
  }

  export type WorldMapAreaAvgOrderByAggregateInput = {
    id?: SortOrder
    continentId?: SortOrder
    areaId?: SortOrder
    locLeft?: SortOrder
    locRight?: SortOrder
    locTop?: SortOrder
    locBottom?: SortOrder
  }

  export type WorldMapAreaMaxOrderByAggregateInput = {
    id?: SortOrder
    continentId?: SortOrder
    areaId?: SortOrder
    name?: SortOrder
    locLeft?: SortOrder
    locRight?: SortOrder
    locTop?: SortOrder
    locBottom?: SortOrder
  }

  export type WorldMapAreaMinOrderByAggregateInput = {
    id?: SortOrder
    continentId?: SortOrder
    areaId?: SortOrder
    name?: SortOrder
    locLeft?: SortOrder
    locRight?: SortOrder
    locTop?: SortOrder
    locBottom?: SortOrder
  }

  export type WorldMapAreaSumOrderByAggregateInput = {
    id?: SortOrder
    continentId?: SortOrder
    areaId?: SortOrder
    locLeft?: SortOrder
    locRight?: SortOrder
    locTop?: SortOrder
    locBottom?: SortOrder
  }

  export type WorldMapContinentCountOrderByAggregateInput = {
    id?: SortOrder
    continentId?: SortOrder
    left?: SortOrder
    right?: SortOrder
    top?: SortOrder
    bottom?: SortOrder
    offsetX?: SortOrder
    offsetY?: SortOrder
    scale?: SortOrder
    taxiMinX?: SortOrder
    taxiMinY?: SortOrder
    taxiMaxX?: SortOrder
    taxiMaxY?: SortOrder
  }

  export type WorldMapContinentAvgOrderByAggregateInput = {
    id?: SortOrder
    continentId?: SortOrder
    left?: SortOrder
    right?: SortOrder
    top?: SortOrder
    bottom?: SortOrder
    offsetX?: SortOrder
    offsetY?: SortOrder
    scale?: SortOrder
    taxiMinX?: SortOrder
    taxiMinY?: SortOrder
    taxiMaxX?: SortOrder
    taxiMaxY?: SortOrder
  }

  export type WorldMapContinentMaxOrderByAggregateInput = {
    id?: SortOrder
    continentId?: SortOrder
    left?: SortOrder
    right?: SortOrder
    top?: SortOrder
    bottom?: SortOrder
    offsetX?: SortOrder
    offsetY?: SortOrder
    scale?: SortOrder
    taxiMinX?: SortOrder
    taxiMinY?: SortOrder
    taxiMaxX?: SortOrder
    taxiMaxY?: SortOrder
  }

  export type WorldMapContinentMinOrderByAggregateInput = {
    id?: SortOrder
    continentId?: SortOrder
    left?: SortOrder
    right?: SortOrder
    top?: SortOrder
    bottom?: SortOrder
    offsetX?: SortOrder
    offsetY?: SortOrder
    scale?: SortOrder
    taxiMinX?: SortOrder
    taxiMinY?: SortOrder
    taxiMaxX?: SortOrder
    taxiMaxY?: SortOrder
  }

  export type WorldMapContinentSumOrderByAggregateInput = {
    id?: SortOrder
    continentId?: SortOrder
    left?: SortOrder
    right?: SortOrder
    top?: SortOrder
    bottom?: SortOrder
    offsetX?: SortOrder
    offsetY?: SortOrder
    scale?: SortOrder
    taxiMinX?: SortOrder
    taxiMinY?: SortOrder
    taxiMaxX?: SortOrder
    taxiMaxY?: SortOrder
  }

  export type WorldMapAreaRelationFilter = {
    is?: WorldMapAreaWhereInput
    isNot?: WorldMapAreaWhereInput
  }

  export type WorldMapOverlayCountOrderByAggregateInput = {
    id?: SortOrder
    worldMapAreaId?: SortOrder
    areaId_1?: SortOrder
    areaId_2?: SortOrder
    areaId_3?: SortOrder
    areaId_4?: SortOrder
    mapPointX?: SortOrder
    mapPointY?: SortOrder
    texture?: SortOrder
    textureWidth?: SortOrder
    textureHeight?: SortOrder
    offsetX?: SortOrder
    offsetY?: SortOrder
    hitRectTop?: SortOrder
    hitRectLeft?: SortOrder
    hitRectBottom?: SortOrder
    hitRectRight?: SortOrder
  }

  export type WorldMapOverlayAvgOrderByAggregateInput = {
    id?: SortOrder
    worldMapAreaId?: SortOrder
    areaId_1?: SortOrder
    areaId_2?: SortOrder
    areaId_3?: SortOrder
    areaId_4?: SortOrder
    mapPointX?: SortOrder
    mapPointY?: SortOrder
    textureWidth?: SortOrder
    textureHeight?: SortOrder
    offsetX?: SortOrder
    offsetY?: SortOrder
    hitRectTop?: SortOrder
    hitRectLeft?: SortOrder
    hitRectBottom?: SortOrder
    hitRectRight?: SortOrder
  }

  export type WorldMapOverlayMaxOrderByAggregateInput = {
    id?: SortOrder
    worldMapAreaId?: SortOrder
    areaId_1?: SortOrder
    areaId_2?: SortOrder
    areaId_3?: SortOrder
    areaId_4?: SortOrder
    mapPointX?: SortOrder
    mapPointY?: SortOrder
    texture?: SortOrder
    textureWidth?: SortOrder
    textureHeight?: SortOrder
    offsetX?: SortOrder
    offsetY?: SortOrder
    hitRectTop?: SortOrder
    hitRectLeft?: SortOrder
    hitRectBottom?: SortOrder
    hitRectRight?: SortOrder
  }

  export type WorldMapOverlayMinOrderByAggregateInput = {
    id?: SortOrder
    worldMapAreaId?: SortOrder
    areaId_1?: SortOrder
    areaId_2?: SortOrder
    areaId_3?: SortOrder
    areaId_4?: SortOrder
    mapPointX?: SortOrder
    mapPointY?: SortOrder
    texture?: SortOrder
    textureWidth?: SortOrder
    textureHeight?: SortOrder
    offsetX?: SortOrder
    offsetY?: SortOrder
    hitRectTop?: SortOrder
    hitRectLeft?: SortOrder
    hitRectBottom?: SortOrder
    hitRectRight?: SortOrder
  }

  export type WorldMapOverlaySumOrderByAggregateInput = {
    id?: SortOrder
    worldMapAreaId?: SortOrder
    areaId_1?: SortOrder
    areaId_2?: SortOrder
    areaId_3?: SortOrder
    areaId_4?: SortOrder
    mapPointX?: SortOrder
    mapPointY?: SortOrder
    textureWidth?: SortOrder
    textureHeight?: SortOrder
    offsetX?: SortOrder
    offsetY?: SortOrder
    hitRectTop?: SortOrder
    hitRectLeft?: SortOrder
    hitRectBottom?: SortOrder
    hitRectRight?: SortOrder
  }

  export type AreaPOICreateNestedManyWithoutContinentInput = {
    create?: XOR<Enumerable<AreaPOICreateWithoutContinentInput>, Enumerable<AreaPOIUncheckedCreateWithoutContinentInput>>
    connectOrCreate?: Enumerable<AreaPOICreateOrConnectWithoutContinentInput>
    connect?: Enumerable<AreaPOIWhereUniqueInput>
  }

  export type AreaTableCreateNestedManyWithoutContinentInput = {
    create?: XOR<Enumerable<AreaTableCreateWithoutContinentInput>, Enumerable<AreaTableUncheckedCreateWithoutContinentInput>>
    connectOrCreate?: Enumerable<AreaTableCreateOrConnectWithoutContinentInput>
    connect?: Enumerable<AreaTableWhereUniqueInput>
  }

  export type WorldMapAreaCreateNestedManyWithoutContinentInput = {
    create?: XOR<Enumerable<WorldMapAreaCreateWithoutContinentInput>, Enumerable<WorldMapAreaUncheckedCreateWithoutContinentInput>>
    connectOrCreate?: Enumerable<WorldMapAreaCreateOrConnectWithoutContinentInput>
    connect?: Enumerable<WorldMapAreaWhereUniqueInput>
  }

  export type WorldMapContinentCreateNestedManyWithoutContinentInput = {
    create?: XOR<Enumerable<WorldMapContinentCreateWithoutContinentInput>, Enumerable<WorldMapContinentUncheckedCreateWithoutContinentInput>>
    connectOrCreate?: Enumerable<WorldMapContinentCreateOrConnectWithoutContinentInput>
    connect?: Enumerable<WorldMapContinentWhereUniqueInput>
  }

  export type AreaTriggerCreateNestedManyWithoutContinentInput = {
    create?: XOR<Enumerable<AreaTriggerCreateWithoutContinentInput>, Enumerable<AreaTriggerUncheckedCreateWithoutContinentInput>>
    connectOrCreate?: Enumerable<AreaTriggerCreateOrConnectWithoutContinentInput>
    connect?: Enumerable<AreaTriggerWhereUniqueInput>
  }

  export type LightCreateNestedManyWithoutContinentInput = {
    create?: XOR<Enumerable<LightCreateWithoutContinentInput>, Enumerable<LightUncheckedCreateWithoutContinentInput>>
    connectOrCreate?: Enumerable<LightCreateOrConnectWithoutContinentInput>
    connect?: Enumerable<LightWhereUniqueInput>
  }

  export type AreaPOIUncheckedCreateNestedManyWithoutContinentInput = {
    create?: XOR<Enumerable<AreaPOICreateWithoutContinentInput>, Enumerable<AreaPOIUncheckedCreateWithoutContinentInput>>
    connectOrCreate?: Enumerable<AreaPOICreateOrConnectWithoutContinentInput>
    connect?: Enumerable<AreaPOIWhereUniqueInput>
  }

  export type AreaTableUncheckedCreateNestedManyWithoutContinentInput = {
    create?: XOR<Enumerable<AreaTableCreateWithoutContinentInput>, Enumerable<AreaTableUncheckedCreateWithoutContinentInput>>
    connectOrCreate?: Enumerable<AreaTableCreateOrConnectWithoutContinentInput>
    connect?: Enumerable<AreaTableWhereUniqueInput>
  }

  export type WorldMapAreaUncheckedCreateNestedManyWithoutContinentInput = {
    create?: XOR<Enumerable<WorldMapAreaCreateWithoutContinentInput>, Enumerable<WorldMapAreaUncheckedCreateWithoutContinentInput>>
    connectOrCreate?: Enumerable<WorldMapAreaCreateOrConnectWithoutContinentInput>
    connect?: Enumerable<WorldMapAreaWhereUniqueInput>
  }

  export type WorldMapContinentUncheckedCreateNestedManyWithoutContinentInput = {
    create?: XOR<Enumerable<WorldMapContinentCreateWithoutContinentInput>, Enumerable<WorldMapContinentUncheckedCreateWithoutContinentInput>>
    connectOrCreate?: Enumerable<WorldMapContinentCreateOrConnectWithoutContinentInput>
    connect?: Enumerable<WorldMapContinentWhereUniqueInput>
  }

  export type AreaTriggerUncheckedCreateNestedManyWithoutContinentInput = {
    create?: XOR<Enumerable<AreaTriggerCreateWithoutContinentInput>, Enumerable<AreaTriggerUncheckedCreateWithoutContinentInput>>
    connectOrCreate?: Enumerable<AreaTriggerCreateOrConnectWithoutContinentInput>
    connect?: Enumerable<AreaTriggerWhereUniqueInput>
  }

  export type LightUncheckedCreateNestedManyWithoutContinentInput = {
    create?: XOR<Enumerable<LightCreateWithoutContinentInput>, Enumerable<LightUncheckedCreateWithoutContinentInput>>
    connectOrCreate?: Enumerable<LightCreateOrConnectWithoutContinentInput>
    connect?: Enumerable<LightWhereUniqueInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AreaPOIUpdateManyWithoutContinentNestedInput = {
    create?: XOR<Enumerable<AreaPOICreateWithoutContinentInput>, Enumerable<AreaPOIUncheckedCreateWithoutContinentInput>>
    connectOrCreate?: Enumerable<AreaPOICreateOrConnectWithoutContinentInput>
    upsert?: Enumerable<AreaPOIUpsertWithWhereUniqueWithoutContinentInput>
    set?: Enumerable<AreaPOIWhereUniqueInput>
    disconnect?: Enumerable<AreaPOIWhereUniqueInput>
    delete?: Enumerable<AreaPOIWhereUniqueInput>
    connect?: Enumerable<AreaPOIWhereUniqueInput>
    update?: Enumerable<AreaPOIUpdateWithWhereUniqueWithoutContinentInput>
    updateMany?: Enumerable<AreaPOIUpdateManyWithWhereWithoutContinentInput>
    deleteMany?: Enumerable<AreaPOIScalarWhereInput>
  }

  export type AreaTableUpdateManyWithoutContinentNestedInput = {
    create?: XOR<Enumerable<AreaTableCreateWithoutContinentInput>, Enumerable<AreaTableUncheckedCreateWithoutContinentInput>>
    connectOrCreate?: Enumerable<AreaTableCreateOrConnectWithoutContinentInput>
    upsert?: Enumerable<AreaTableUpsertWithWhereUniqueWithoutContinentInput>
    set?: Enumerable<AreaTableWhereUniqueInput>
    disconnect?: Enumerable<AreaTableWhereUniqueInput>
    delete?: Enumerable<AreaTableWhereUniqueInput>
    connect?: Enumerable<AreaTableWhereUniqueInput>
    update?: Enumerable<AreaTableUpdateWithWhereUniqueWithoutContinentInput>
    updateMany?: Enumerable<AreaTableUpdateManyWithWhereWithoutContinentInput>
    deleteMany?: Enumerable<AreaTableScalarWhereInput>
  }

  export type WorldMapAreaUpdateManyWithoutContinentNestedInput = {
    create?: XOR<Enumerable<WorldMapAreaCreateWithoutContinentInput>, Enumerable<WorldMapAreaUncheckedCreateWithoutContinentInput>>
    connectOrCreate?: Enumerable<WorldMapAreaCreateOrConnectWithoutContinentInput>
    upsert?: Enumerable<WorldMapAreaUpsertWithWhereUniqueWithoutContinentInput>
    set?: Enumerable<WorldMapAreaWhereUniqueInput>
    disconnect?: Enumerable<WorldMapAreaWhereUniqueInput>
    delete?: Enumerable<WorldMapAreaWhereUniqueInput>
    connect?: Enumerable<WorldMapAreaWhereUniqueInput>
    update?: Enumerable<WorldMapAreaUpdateWithWhereUniqueWithoutContinentInput>
    updateMany?: Enumerable<WorldMapAreaUpdateManyWithWhereWithoutContinentInput>
    deleteMany?: Enumerable<WorldMapAreaScalarWhereInput>
  }

  export type WorldMapContinentUpdateManyWithoutContinentNestedInput = {
    create?: XOR<Enumerable<WorldMapContinentCreateWithoutContinentInput>, Enumerable<WorldMapContinentUncheckedCreateWithoutContinentInput>>
    connectOrCreate?: Enumerable<WorldMapContinentCreateOrConnectWithoutContinentInput>
    upsert?: Enumerable<WorldMapContinentUpsertWithWhereUniqueWithoutContinentInput>
    set?: Enumerable<WorldMapContinentWhereUniqueInput>
    disconnect?: Enumerable<WorldMapContinentWhereUniqueInput>
    delete?: Enumerable<WorldMapContinentWhereUniqueInput>
    connect?: Enumerable<WorldMapContinentWhereUniqueInput>
    update?: Enumerable<WorldMapContinentUpdateWithWhereUniqueWithoutContinentInput>
    updateMany?: Enumerable<WorldMapContinentUpdateManyWithWhereWithoutContinentInput>
    deleteMany?: Enumerable<WorldMapContinentScalarWhereInput>
  }

  export type AreaTriggerUpdateManyWithoutContinentNestedInput = {
    create?: XOR<Enumerable<AreaTriggerCreateWithoutContinentInput>, Enumerable<AreaTriggerUncheckedCreateWithoutContinentInput>>
    connectOrCreate?: Enumerable<AreaTriggerCreateOrConnectWithoutContinentInput>
    upsert?: Enumerable<AreaTriggerUpsertWithWhereUniqueWithoutContinentInput>
    set?: Enumerable<AreaTriggerWhereUniqueInput>
    disconnect?: Enumerable<AreaTriggerWhereUniqueInput>
    delete?: Enumerable<AreaTriggerWhereUniqueInput>
    connect?: Enumerable<AreaTriggerWhereUniqueInput>
    update?: Enumerable<AreaTriggerUpdateWithWhereUniqueWithoutContinentInput>
    updateMany?: Enumerable<AreaTriggerUpdateManyWithWhereWithoutContinentInput>
    deleteMany?: Enumerable<AreaTriggerScalarWhereInput>
  }

  export type LightUpdateManyWithoutContinentNestedInput = {
    create?: XOR<Enumerable<LightCreateWithoutContinentInput>, Enumerable<LightUncheckedCreateWithoutContinentInput>>
    connectOrCreate?: Enumerable<LightCreateOrConnectWithoutContinentInput>
    upsert?: Enumerable<LightUpsertWithWhereUniqueWithoutContinentInput>
    set?: Enumerable<LightWhereUniqueInput>
    disconnect?: Enumerable<LightWhereUniqueInput>
    delete?: Enumerable<LightWhereUniqueInput>
    connect?: Enumerable<LightWhereUniqueInput>
    update?: Enumerable<LightUpdateWithWhereUniqueWithoutContinentInput>
    updateMany?: Enumerable<LightUpdateManyWithWhereWithoutContinentInput>
    deleteMany?: Enumerable<LightScalarWhereInput>
  }

  export type AreaPOIUncheckedUpdateManyWithoutContinentNestedInput = {
    create?: XOR<Enumerable<AreaPOICreateWithoutContinentInput>, Enumerable<AreaPOIUncheckedCreateWithoutContinentInput>>
    connectOrCreate?: Enumerable<AreaPOICreateOrConnectWithoutContinentInput>
    upsert?: Enumerable<AreaPOIUpsertWithWhereUniqueWithoutContinentInput>
    set?: Enumerable<AreaPOIWhereUniqueInput>
    disconnect?: Enumerable<AreaPOIWhereUniqueInput>
    delete?: Enumerable<AreaPOIWhereUniqueInput>
    connect?: Enumerable<AreaPOIWhereUniqueInput>
    update?: Enumerable<AreaPOIUpdateWithWhereUniqueWithoutContinentInput>
    updateMany?: Enumerable<AreaPOIUpdateManyWithWhereWithoutContinentInput>
    deleteMany?: Enumerable<AreaPOIScalarWhereInput>
  }

  export type AreaTableUncheckedUpdateManyWithoutContinentNestedInput = {
    create?: XOR<Enumerable<AreaTableCreateWithoutContinentInput>, Enumerable<AreaTableUncheckedCreateWithoutContinentInput>>
    connectOrCreate?: Enumerable<AreaTableCreateOrConnectWithoutContinentInput>
    upsert?: Enumerable<AreaTableUpsertWithWhereUniqueWithoutContinentInput>
    set?: Enumerable<AreaTableWhereUniqueInput>
    disconnect?: Enumerable<AreaTableWhereUniqueInput>
    delete?: Enumerable<AreaTableWhereUniqueInput>
    connect?: Enumerable<AreaTableWhereUniqueInput>
    update?: Enumerable<AreaTableUpdateWithWhereUniqueWithoutContinentInput>
    updateMany?: Enumerable<AreaTableUpdateManyWithWhereWithoutContinentInput>
    deleteMany?: Enumerable<AreaTableScalarWhereInput>
  }

  export type WorldMapAreaUncheckedUpdateManyWithoutContinentNestedInput = {
    create?: XOR<Enumerable<WorldMapAreaCreateWithoutContinentInput>, Enumerable<WorldMapAreaUncheckedCreateWithoutContinentInput>>
    connectOrCreate?: Enumerable<WorldMapAreaCreateOrConnectWithoutContinentInput>
    upsert?: Enumerable<WorldMapAreaUpsertWithWhereUniqueWithoutContinentInput>
    set?: Enumerable<WorldMapAreaWhereUniqueInput>
    disconnect?: Enumerable<WorldMapAreaWhereUniqueInput>
    delete?: Enumerable<WorldMapAreaWhereUniqueInput>
    connect?: Enumerable<WorldMapAreaWhereUniqueInput>
    update?: Enumerable<WorldMapAreaUpdateWithWhereUniqueWithoutContinentInput>
    updateMany?: Enumerable<WorldMapAreaUpdateManyWithWhereWithoutContinentInput>
    deleteMany?: Enumerable<WorldMapAreaScalarWhereInput>
  }

  export type WorldMapContinentUncheckedUpdateManyWithoutContinentNestedInput = {
    create?: XOR<Enumerable<WorldMapContinentCreateWithoutContinentInput>, Enumerable<WorldMapContinentUncheckedCreateWithoutContinentInput>>
    connectOrCreate?: Enumerable<WorldMapContinentCreateOrConnectWithoutContinentInput>
    upsert?: Enumerable<WorldMapContinentUpsertWithWhereUniqueWithoutContinentInput>
    set?: Enumerable<WorldMapContinentWhereUniqueInput>
    disconnect?: Enumerable<WorldMapContinentWhereUniqueInput>
    delete?: Enumerable<WorldMapContinentWhereUniqueInput>
    connect?: Enumerable<WorldMapContinentWhereUniqueInput>
    update?: Enumerable<WorldMapContinentUpdateWithWhereUniqueWithoutContinentInput>
    updateMany?: Enumerable<WorldMapContinentUpdateManyWithWhereWithoutContinentInput>
    deleteMany?: Enumerable<WorldMapContinentScalarWhereInput>
  }

  export type AreaTriggerUncheckedUpdateManyWithoutContinentNestedInput = {
    create?: XOR<Enumerable<AreaTriggerCreateWithoutContinentInput>, Enumerable<AreaTriggerUncheckedCreateWithoutContinentInput>>
    connectOrCreate?: Enumerable<AreaTriggerCreateOrConnectWithoutContinentInput>
    upsert?: Enumerable<AreaTriggerUpsertWithWhereUniqueWithoutContinentInput>
    set?: Enumerable<AreaTriggerWhereUniqueInput>
    disconnect?: Enumerable<AreaTriggerWhereUniqueInput>
    delete?: Enumerable<AreaTriggerWhereUniqueInput>
    connect?: Enumerable<AreaTriggerWhereUniqueInput>
    update?: Enumerable<AreaTriggerUpdateWithWhereUniqueWithoutContinentInput>
    updateMany?: Enumerable<AreaTriggerUpdateManyWithWhereWithoutContinentInput>
    deleteMany?: Enumerable<AreaTriggerScalarWhereInput>
  }

  export type LightUncheckedUpdateManyWithoutContinentNestedInput = {
    create?: XOR<Enumerable<LightCreateWithoutContinentInput>, Enumerable<LightUncheckedCreateWithoutContinentInput>>
    connectOrCreate?: Enumerable<LightCreateOrConnectWithoutContinentInput>
    upsert?: Enumerable<LightUpsertWithWhereUniqueWithoutContinentInput>
    set?: Enumerable<LightWhereUniqueInput>
    disconnect?: Enumerable<LightWhereUniqueInput>
    delete?: Enumerable<LightWhereUniqueInput>
    connect?: Enumerable<LightWhereUniqueInput>
    update?: Enumerable<LightUpdateWithWhereUniqueWithoutContinentInput>
    updateMany?: Enumerable<LightUpdateManyWithWhereWithoutContinentInput>
    deleteMany?: Enumerable<LightScalarWhereInput>
  }

  export type ContinentCreateNestedOneWithoutAreaPOIInput = {
    create?: XOR<ContinentCreateWithoutAreaPOIInput, ContinentUncheckedCreateWithoutAreaPOIInput>
    connectOrCreate?: ContinentCreateOrConnectWithoutAreaPOIInput
    connect?: ContinentWhereUniqueInput
  }

  export type AreaTableCreateNestedOneWithoutAreaPOIInput = {
    create?: XOR<AreaTableCreateWithoutAreaPOIInput, AreaTableUncheckedCreateWithoutAreaPOIInput>
    connectOrCreate?: AreaTableCreateOrConnectWithoutAreaPOIInput
    connect?: AreaTableWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ContinentUpdateOneRequiredWithoutAreaPOINestedInput = {
    create?: XOR<ContinentCreateWithoutAreaPOIInput, ContinentUncheckedCreateWithoutAreaPOIInput>
    connectOrCreate?: ContinentCreateOrConnectWithoutAreaPOIInput
    upsert?: ContinentUpsertWithoutAreaPOIInput
    connect?: ContinentWhereUniqueInput
    update?: XOR<ContinentUpdateWithoutAreaPOIInput, ContinentUncheckedUpdateWithoutAreaPOIInput>
  }

  export type AreaTableUpdateOneRequiredWithoutAreaPOINestedInput = {
    create?: XOR<AreaTableCreateWithoutAreaPOIInput, AreaTableUncheckedCreateWithoutAreaPOIInput>
    connectOrCreate?: AreaTableCreateOrConnectWithoutAreaPOIInput
    upsert?: AreaTableUpsertWithoutAreaPOIInput
    connect?: AreaTableWhereUniqueInput
    update?: XOR<AreaTableUpdateWithoutAreaPOIInput, AreaTableUncheckedUpdateWithoutAreaPOIInput>
  }

  export type ContinentCreateNestedOneWithoutAreaTableInput = {
    create?: XOR<ContinentCreateWithoutAreaTableInput, ContinentUncheckedCreateWithoutAreaTableInput>
    connectOrCreate?: ContinentCreateOrConnectWithoutAreaTableInput
    connect?: ContinentWhereUniqueInput
  }

  export type AreaTableCreateNestedOneWithoutChildAreasInput = {
    create?: XOR<AreaTableCreateWithoutChildAreasInput, AreaTableUncheckedCreateWithoutChildAreasInput>
    connectOrCreate?: AreaTableCreateOrConnectWithoutChildAreasInput
    connect?: AreaTableWhereUniqueInput
  }

  export type LightCreateNestedOneWithoutAreaTableInput = {
    create?: XOR<LightCreateWithoutAreaTableInput, LightUncheckedCreateWithoutAreaTableInput>
    connectOrCreate?: LightCreateOrConnectWithoutAreaTableInput
    connect?: LightWhereUniqueInput
  }

  export type AreaTableCreateNestedManyWithoutParentAreaInput = {
    create?: XOR<Enumerable<AreaTableCreateWithoutParentAreaInput>, Enumerable<AreaTableUncheckedCreateWithoutParentAreaInput>>
    connectOrCreate?: Enumerable<AreaTableCreateOrConnectWithoutParentAreaInput>
    connect?: Enumerable<AreaTableWhereUniqueInput>
  }

  export type AreaPOICreateNestedManyWithoutAreaInput = {
    create?: XOR<Enumerable<AreaPOICreateWithoutAreaInput>, Enumerable<AreaPOIUncheckedCreateWithoutAreaInput>>
    connectOrCreate?: Enumerable<AreaPOICreateOrConnectWithoutAreaInput>
    connect?: Enumerable<AreaPOIWhereUniqueInput>
  }

  export type WMOAreaTableCreateNestedManyWithoutAreaTableInput = {
    create?: XOR<Enumerable<WMOAreaTableCreateWithoutAreaTableInput>, Enumerable<WMOAreaTableUncheckedCreateWithoutAreaTableInput>>
    connectOrCreate?: Enumerable<WMOAreaTableCreateOrConnectWithoutAreaTableInput>
    connect?: Enumerable<WMOAreaTableWhereUniqueInput>
  }

  export type WorldMapAreaCreateNestedManyWithoutAreaTableInput = {
    create?: XOR<Enumerable<WorldMapAreaCreateWithoutAreaTableInput>, Enumerable<WorldMapAreaUncheckedCreateWithoutAreaTableInput>>
    connectOrCreate?: Enumerable<WorldMapAreaCreateOrConnectWithoutAreaTableInput>
    connect?: Enumerable<WorldMapAreaWhereUniqueInput>
  }

  export type WorldMapOverlayCreateNestedManyWithoutArea_1Input = {
    create?: XOR<Enumerable<WorldMapOverlayCreateWithoutArea_1Input>, Enumerable<WorldMapOverlayUncheckedCreateWithoutArea_1Input>>
    connectOrCreate?: Enumerable<WorldMapOverlayCreateOrConnectWithoutArea_1Input>
    connect?: Enumerable<WorldMapOverlayWhereUniqueInput>
  }

  export type WorldMapOverlayCreateNestedManyWithoutArea_2Input = {
    create?: XOR<Enumerable<WorldMapOverlayCreateWithoutArea_2Input>, Enumerable<WorldMapOverlayUncheckedCreateWithoutArea_2Input>>
    connectOrCreate?: Enumerable<WorldMapOverlayCreateOrConnectWithoutArea_2Input>
    connect?: Enumerable<WorldMapOverlayWhereUniqueInput>
  }

  export type WorldMapOverlayCreateNestedManyWithoutArea_3Input = {
    create?: XOR<Enumerable<WorldMapOverlayCreateWithoutArea_3Input>, Enumerable<WorldMapOverlayUncheckedCreateWithoutArea_3Input>>
    connectOrCreate?: Enumerable<WorldMapOverlayCreateOrConnectWithoutArea_3Input>
    connect?: Enumerable<WorldMapOverlayWhereUniqueInput>
  }

  export type WorldMapOverlayCreateNestedManyWithoutArea_4Input = {
    create?: XOR<Enumerable<WorldMapOverlayCreateWithoutArea_4Input>, Enumerable<WorldMapOverlayUncheckedCreateWithoutArea_4Input>>
    connectOrCreate?: Enumerable<WorldMapOverlayCreateOrConnectWithoutArea_4Input>
    connect?: Enumerable<WorldMapOverlayWhereUniqueInput>
  }

  export type AreaTableUncheckedCreateNestedManyWithoutParentAreaInput = {
    create?: XOR<Enumerable<AreaTableCreateWithoutParentAreaInput>, Enumerable<AreaTableUncheckedCreateWithoutParentAreaInput>>
    connectOrCreate?: Enumerable<AreaTableCreateOrConnectWithoutParentAreaInput>
    connect?: Enumerable<AreaTableWhereUniqueInput>
  }

  export type AreaPOIUncheckedCreateNestedManyWithoutAreaInput = {
    create?: XOR<Enumerable<AreaPOICreateWithoutAreaInput>, Enumerable<AreaPOIUncheckedCreateWithoutAreaInput>>
    connectOrCreate?: Enumerable<AreaPOICreateOrConnectWithoutAreaInput>
    connect?: Enumerable<AreaPOIWhereUniqueInput>
  }

  export type WMOAreaTableUncheckedCreateNestedManyWithoutAreaTableInput = {
    create?: XOR<Enumerable<WMOAreaTableCreateWithoutAreaTableInput>, Enumerable<WMOAreaTableUncheckedCreateWithoutAreaTableInput>>
    connectOrCreate?: Enumerable<WMOAreaTableCreateOrConnectWithoutAreaTableInput>
    connect?: Enumerable<WMOAreaTableWhereUniqueInput>
  }

  export type WorldMapAreaUncheckedCreateNestedManyWithoutAreaTableInput = {
    create?: XOR<Enumerable<WorldMapAreaCreateWithoutAreaTableInput>, Enumerable<WorldMapAreaUncheckedCreateWithoutAreaTableInput>>
    connectOrCreate?: Enumerable<WorldMapAreaCreateOrConnectWithoutAreaTableInput>
    connect?: Enumerable<WorldMapAreaWhereUniqueInput>
  }

  export type WorldMapOverlayUncheckedCreateNestedManyWithoutArea_1Input = {
    create?: XOR<Enumerable<WorldMapOverlayCreateWithoutArea_1Input>, Enumerable<WorldMapOverlayUncheckedCreateWithoutArea_1Input>>
    connectOrCreate?: Enumerable<WorldMapOverlayCreateOrConnectWithoutArea_1Input>
    connect?: Enumerable<WorldMapOverlayWhereUniqueInput>
  }

  export type WorldMapOverlayUncheckedCreateNestedManyWithoutArea_2Input = {
    create?: XOR<Enumerable<WorldMapOverlayCreateWithoutArea_2Input>, Enumerable<WorldMapOverlayUncheckedCreateWithoutArea_2Input>>
    connectOrCreate?: Enumerable<WorldMapOverlayCreateOrConnectWithoutArea_2Input>
    connect?: Enumerable<WorldMapOverlayWhereUniqueInput>
  }

  export type WorldMapOverlayUncheckedCreateNestedManyWithoutArea_3Input = {
    create?: XOR<Enumerable<WorldMapOverlayCreateWithoutArea_3Input>, Enumerable<WorldMapOverlayUncheckedCreateWithoutArea_3Input>>
    connectOrCreate?: Enumerable<WorldMapOverlayCreateOrConnectWithoutArea_3Input>
    connect?: Enumerable<WorldMapOverlayWhereUniqueInput>
  }

  export type WorldMapOverlayUncheckedCreateNestedManyWithoutArea_4Input = {
    create?: XOR<Enumerable<WorldMapOverlayCreateWithoutArea_4Input>, Enumerable<WorldMapOverlayUncheckedCreateWithoutArea_4Input>>
    connectOrCreate?: Enumerable<WorldMapOverlayCreateOrConnectWithoutArea_4Input>
    connect?: Enumerable<WorldMapOverlayWhereUniqueInput>
  }

  export type ContinentUpdateOneRequiredWithoutAreaTableNestedInput = {
    create?: XOR<ContinentCreateWithoutAreaTableInput, ContinentUncheckedCreateWithoutAreaTableInput>
    connectOrCreate?: ContinentCreateOrConnectWithoutAreaTableInput
    upsert?: ContinentUpsertWithoutAreaTableInput
    connect?: ContinentWhereUniqueInput
    update?: XOR<ContinentUpdateWithoutAreaTableInput, ContinentUncheckedUpdateWithoutAreaTableInput>
  }

  export type AreaTableUpdateOneRequiredWithoutChildAreasNestedInput = {
    create?: XOR<AreaTableCreateWithoutChildAreasInput, AreaTableUncheckedCreateWithoutChildAreasInput>
    connectOrCreate?: AreaTableCreateOrConnectWithoutChildAreasInput
    upsert?: AreaTableUpsertWithoutChildAreasInput
    connect?: AreaTableWhereUniqueInput
    update?: XOR<AreaTableUpdateWithoutChildAreasInput, AreaTableUncheckedUpdateWithoutChildAreasInput>
  }

  export type LightUpdateOneRequiredWithoutAreaTableNestedInput = {
    create?: XOR<LightCreateWithoutAreaTableInput, LightUncheckedCreateWithoutAreaTableInput>
    connectOrCreate?: LightCreateOrConnectWithoutAreaTableInput
    upsert?: LightUpsertWithoutAreaTableInput
    connect?: LightWhereUniqueInput
    update?: XOR<LightUpdateWithoutAreaTableInput, LightUncheckedUpdateWithoutAreaTableInput>
  }

  export type AreaTableUpdateManyWithoutParentAreaNestedInput = {
    create?: XOR<Enumerable<AreaTableCreateWithoutParentAreaInput>, Enumerable<AreaTableUncheckedCreateWithoutParentAreaInput>>
    connectOrCreate?: Enumerable<AreaTableCreateOrConnectWithoutParentAreaInput>
    upsert?: Enumerable<AreaTableUpsertWithWhereUniqueWithoutParentAreaInput>
    set?: Enumerable<AreaTableWhereUniqueInput>
    disconnect?: Enumerable<AreaTableWhereUniqueInput>
    delete?: Enumerable<AreaTableWhereUniqueInput>
    connect?: Enumerable<AreaTableWhereUniqueInput>
    update?: Enumerable<AreaTableUpdateWithWhereUniqueWithoutParentAreaInput>
    updateMany?: Enumerable<AreaTableUpdateManyWithWhereWithoutParentAreaInput>
    deleteMany?: Enumerable<AreaTableScalarWhereInput>
  }

  export type AreaPOIUpdateManyWithoutAreaNestedInput = {
    create?: XOR<Enumerable<AreaPOICreateWithoutAreaInput>, Enumerable<AreaPOIUncheckedCreateWithoutAreaInput>>
    connectOrCreate?: Enumerable<AreaPOICreateOrConnectWithoutAreaInput>
    upsert?: Enumerable<AreaPOIUpsertWithWhereUniqueWithoutAreaInput>
    set?: Enumerable<AreaPOIWhereUniqueInput>
    disconnect?: Enumerable<AreaPOIWhereUniqueInput>
    delete?: Enumerable<AreaPOIWhereUniqueInput>
    connect?: Enumerable<AreaPOIWhereUniqueInput>
    update?: Enumerable<AreaPOIUpdateWithWhereUniqueWithoutAreaInput>
    updateMany?: Enumerable<AreaPOIUpdateManyWithWhereWithoutAreaInput>
    deleteMany?: Enumerable<AreaPOIScalarWhereInput>
  }

  export type WMOAreaTableUpdateManyWithoutAreaTableNestedInput = {
    create?: XOR<Enumerable<WMOAreaTableCreateWithoutAreaTableInput>, Enumerable<WMOAreaTableUncheckedCreateWithoutAreaTableInput>>
    connectOrCreate?: Enumerable<WMOAreaTableCreateOrConnectWithoutAreaTableInput>
    upsert?: Enumerable<WMOAreaTableUpsertWithWhereUniqueWithoutAreaTableInput>
    set?: Enumerable<WMOAreaTableWhereUniqueInput>
    disconnect?: Enumerable<WMOAreaTableWhereUniqueInput>
    delete?: Enumerable<WMOAreaTableWhereUniqueInput>
    connect?: Enumerable<WMOAreaTableWhereUniqueInput>
    update?: Enumerable<WMOAreaTableUpdateWithWhereUniqueWithoutAreaTableInput>
    updateMany?: Enumerable<WMOAreaTableUpdateManyWithWhereWithoutAreaTableInput>
    deleteMany?: Enumerable<WMOAreaTableScalarWhereInput>
  }

  export type WorldMapAreaUpdateManyWithoutAreaTableNestedInput = {
    create?: XOR<Enumerable<WorldMapAreaCreateWithoutAreaTableInput>, Enumerable<WorldMapAreaUncheckedCreateWithoutAreaTableInput>>
    connectOrCreate?: Enumerable<WorldMapAreaCreateOrConnectWithoutAreaTableInput>
    upsert?: Enumerable<WorldMapAreaUpsertWithWhereUniqueWithoutAreaTableInput>
    set?: Enumerable<WorldMapAreaWhereUniqueInput>
    disconnect?: Enumerable<WorldMapAreaWhereUniqueInput>
    delete?: Enumerable<WorldMapAreaWhereUniqueInput>
    connect?: Enumerable<WorldMapAreaWhereUniqueInput>
    update?: Enumerable<WorldMapAreaUpdateWithWhereUniqueWithoutAreaTableInput>
    updateMany?: Enumerable<WorldMapAreaUpdateManyWithWhereWithoutAreaTableInput>
    deleteMany?: Enumerable<WorldMapAreaScalarWhereInput>
  }

  export type WorldMapOverlayUpdateManyWithoutArea_1NestedInput = {
    create?: XOR<Enumerable<WorldMapOverlayCreateWithoutArea_1Input>, Enumerable<WorldMapOverlayUncheckedCreateWithoutArea_1Input>>
    connectOrCreate?: Enumerable<WorldMapOverlayCreateOrConnectWithoutArea_1Input>
    upsert?: Enumerable<WorldMapOverlayUpsertWithWhereUniqueWithoutArea_1Input>
    set?: Enumerable<WorldMapOverlayWhereUniqueInput>
    disconnect?: Enumerable<WorldMapOverlayWhereUniqueInput>
    delete?: Enumerable<WorldMapOverlayWhereUniqueInput>
    connect?: Enumerable<WorldMapOverlayWhereUniqueInput>
    update?: Enumerable<WorldMapOverlayUpdateWithWhereUniqueWithoutArea_1Input>
    updateMany?: Enumerable<WorldMapOverlayUpdateManyWithWhereWithoutArea_1Input>
    deleteMany?: Enumerable<WorldMapOverlayScalarWhereInput>
  }

  export type WorldMapOverlayUpdateManyWithoutArea_2NestedInput = {
    create?: XOR<Enumerable<WorldMapOverlayCreateWithoutArea_2Input>, Enumerable<WorldMapOverlayUncheckedCreateWithoutArea_2Input>>
    connectOrCreate?: Enumerable<WorldMapOverlayCreateOrConnectWithoutArea_2Input>
    upsert?: Enumerable<WorldMapOverlayUpsertWithWhereUniqueWithoutArea_2Input>
    set?: Enumerable<WorldMapOverlayWhereUniqueInput>
    disconnect?: Enumerable<WorldMapOverlayWhereUniqueInput>
    delete?: Enumerable<WorldMapOverlayWhereUniqueInput>
    connect?: Enumerable<WorldMapOverlayWhereUniqueInput>
    update?: Enumerable<WorldMapOverlayUpdateWithWhereUniqueWithoutArea_2Input>
    updateMany?: Enumerable<WorldMapOverlayUpdateManyWithWhereWithoutArea_2Input>
    deleteMany?: Enumerable<WorldMapOverlayScalarWhereInput>
  }

  export type WorldMapOverlayUpdateManyWithoutArea_3NestedInput = {
    create?: XOR<Enumerable<WorldMapOverlayCreateWithoutArea_3Input>, Enumerable<WorldMapOverlayUncheckedCreateWithoutArea_3Input>>
    connectOrCreate?: Enumerable<WorldMapOverlayCreateOrConnectWithoutArea_3Input>
    upsert?: Enumerable<WorldMapOverlayUpsertWithWhereUniqueWithoutArea_3Input>
    set?: Enumerable<WorldMapOverlayWhereUniqueInput>
    disconnect?: Enumerable<WorldMapOverlayWhereUniqueInput>
    delete?: Enumerable<WorldMapOverlayWhereUniqueInput>
    connect?: Enumerable<WorldMapOverlayWhereUniqueInput>
    update?: Enumerable<WorldMapOverlayUpdateWithWhereUniqueWithoutArea_3Input>
    updateMany?: Enumerable<WorldMapOverlayUpdateManyWithWhereWithoutArea_3Input>
    deleteMany?: Enumerable<WorldMapOverlayScalarWhereInput>
  }

  export type WorldMapOverlayUpdateManyWithoutArea_4NestedInput = {
    create?: XOR<Enumerable<WorldMapOverlayCreateWithoutArea_4Input>, Enumerable<WorldMapOverlayUncheckedCreateWithoutArea_4Input>>
    connectOrCreate?: Enumerable<WorldMapOverlayCreateOrConnectWithoutArea_4Input>
    upsert?: Enumerable<WorldMapOverlayUpsertWithWhereUniqueWithoutArea_4Input>
    set?: Enumerable<WorldMapOverlayWhereUniqueInput>
    disconnect?: Enumerable<WorldMapOverlayWhereUniqueInput>
    delete?: Enumerable<WorldMapOverlayWhereUniqueInput>
    connect?: Enumerable<WorldMapOverlayWhereUniqueInput>
    update?: Enumerable<WorldMapOverlayUpdateWithWhereUniqueWithoutArea_4Input>
    updateMany?: Enumerable<WorldMapOverlayUpdateManyWithWhereWithoutArea_4Input>
    deleteMany?: Enumerable<WorldMapOverlayScalarWhereInput>
  }

  export type AreaTableUncheckedUpdateManyWithoutParentAreaNestedInput = {
    create?: XOR<Enumerable<AreaTableCreateWithoutParentAreaInput>, Enumerable<AreaTableUncheckedCreateWithoutParentAreaInput>>
    connectOrCreate?: Enumerable<AreaTableCreateOrConnectWithoutParentAreaInput>
    upsert?: Enumerable<AreaTableUpsertWithWhereUniqueWithoutParentAreaInput>
    set?: Enumerable<AreaTableWhereUniqueInput>
    disconnect?: Enumerable<AreaTableWhereUniqueInput>
    delete?: Enumerable<AreaTableWhereUniqueInput>
    connect?: Enumerable<AreaTableWhereUniqueInput>
    update?: Enumerable<AreaTableUpdateWithWhereUniqueWithoutParentAreaInput>
    updateMany?: Enumerable<AreaTableUpdateManyWithWhereWithoutParentAreaInput>
    deleteMany?: Enumerable<AreaTableScalarWhereInput>
  }

  export type AreaPOIUncheckedUpdateManyWithoutAreaNestedInput = {
    create?: XOR<Enumerable<AreaPOICreateWithoutAreaInput>, Enumerable<AreaPOIUncheckedCreateWithoutAreaInput>>
    connectOrCreate?: Enumerable<AreaPOICreateOrConnectWithoutAreaInput>
    upsert?: Enumerable<AreaPOIUpsertWithWhereUniqueWithoutAreaInput>
    set?: Enumerable<AreaPOIWhereUniqueInput>
    disconnect?: Enumerable<AreaPOIWhereUniqueInput>
    delete?: Enumerable<AreaPOIWhereUniqueInput>
    connect?: Enumerable<AreaPOIWhereUniqueInput>
    update?: Enumerable<AreaPOIUpdateWithWhereUniqueWithoutAreaInput>
    updateMany?: Enumerable<AreaPOIUpdateManyWithWhereWithoutAreaInput>
    deleteMany?: Enumerable<AreaPOIScalarWhereInput>
  }

  export type WMOAreaTableUncheckedUpdateManyWithoutAreaTableNestedInput = {
    create?: XOR<Enumerable<WMOAreaTableCreateWithoutAreaTableInput>, Enumerable<WMOAreaTableUncheckedCreateWithoutAreaTableInput>>
    connectOrCreate?: Enumerable<WMOAreaTableCreateOrConnectWithoutAreaTableInput>
    upsert?: Enumerable<WMOAreaTableUpsertWithWhereUniqueWithoutAreaTableInput>
    set?: Enumerable<WMOAreaTableWhereUniqueInput>
    disconnect?: Enumerable<WMOAreaTableWhereUniqueInput>
    delete?: Enumerable<WMOAreaTableWhereUniqueInput>
    connect?: Enumerable<WMOAreaTableWhereUniqueInput>
    update?: Enumerable<WMOAreaTableUpdateWithWhereUniqueWithoutAreaTableInput>
    updateMany?: Enumerable<WMOAreaTableUpdateManyWithWhereWithoutAreaTableInput>
    deleteMany?: Enumerable<WMOAreaTableScalarWhereInput>
  }

  export type WorldMapAreaUncheckedUpdateManyWithoutAreaTableNestedInput = {
    create?: XOR<Enumerable<WorldMapAreaCreateWithoutAreaTableInput>, Enumerable<WorldMapAreaUncheckedCreateWithoutAreaTableInput>>
    connectOrCreate?: Enumerable<WorldMapAreaCreateOrConnectWithoutAreaTableInput>
    upsert?: Enumerable<WorldMapAreaUpsertWithWhereUniqueWithoutAreaTableInput>
    set?: Enumerable<WorldMapAreaWhereUniqueInput>
    disconnect?: Enumerable<WorldMapAreaWhereUniqueInput>
    delete?: Enumerable<WorldMapAreaWhereUniqueInput>
    connect?: Enumerable<WorldMapAreaWhereUniqueInput>
    update?: Enumerable<WorldMapAreaUpdateWithWhereUniqueWithoutAreaTableInput>
    updateMany?: Enumerable<WorldMapAreaUpdateManyWithWhereWithoutAreaTableInput>
    deleteMany?: Enumerable<WorldMapAreaScalarWhereInput>
  }

  export type WorldMapOverlayUncheckedUpdateManyWithoutArea_1NestedInput = {
    create?: XOR<Enumerable<WorldMapOverlayCreateWithoutArea_1Input>, Enumerable<WorldMapOverlayUncheckedCreateWithoutArea_1Input>>
    connectOrCreate?: Enumerable<WorldMapOverlayCreateOrConnectWithoutArea_1Input>
    upsert?: Enumerable<WorldMapOverlayUpsertWithWhereUniqueWithoutArea_1Input>
    set?: Enumerable<WorldMapOverlayWhereUniqueInput>
    disconnect?: Enumerable<WorldMapOverlayWhereUniqueInput>
    delete?: Enumerable<WorldMapOverlayWhereUniqueInput>
    connect?: Enumerable<WorldMapOverlayWhereUniqueInput>
    update?: Enumerable<WorldMapOverlayUpdateWithWhereUniqueWithoutArea_1Input>
    updateMany?: Enumerable<WorldMapOverlayUpdateManyWithWhereWithoutArea_1Input>
    deleteMany?: Enumerable<WorldMapOverlayScalarWhereInput>
  }

  export type WorldMapOverlayUncheckedUpdateManyWithoutArea_2NestedInput = {
    create?: XOR<Enumerable<WorldMapOverlayCreateWithoutArea_2Input>, Enumerable<WorldMapOverlayUncheckedCreateWithoutArea_2Input>>
    connectOrCreate?: Enumerable<WorldMapOverlayCreateOrConnectWithoutArea_2Input>
    upsert?: Enumerable<WorldMapOverlayUpsertWithWhereUniqueWithoutArea_2Input>
    set?: Enumerable<WorldMapOverlayWhereUniqueInput>
    disconnect?: Enumerable<WorldMapOverlayWhereUniqueInput>
    delete?: Enumerable<WorldMapOverlayWhereUniqueInput>
    connect?: Enumerable<WorldMapOverlayWhereUniqueInput>
    update?: Enumerable<WorldMapOverlayUpdateWithWhereUniqueWithoutArea_2Input>
    updateMany?: Enumerable<WorldMapOverlayUpdateManyWithWhereWithoutArea_2Input>
    deleteMany?: Enumerable<WorldMapOverlayScalarWhereInput>
  }

  export type WorldMapOverlayUncheckedUpdateManyWithoutArea_3NestedInput = {
    create?: XOR<Enumerable<WorldMapOverlayCreateWithoutArea_3Input>, Enumerable<WorldMapOverlayUncheckedCreateWithoutArea_3Input>>
    connectOrCreate?: Enumerable<WorldMapOverlayCreateOrConnectWithoutArea_3Input>
    upsert?: Enumerable<WorldMapOverlayUpsertWithWhereUniqueWithoutArea_3Input>
    set?: Enumerable<WorldMapOverlayWhereUniqueInput>
    disconnect?: Enumerable<WorldMapOverlayWhereUniqueInput>
    delete?: Enumerable<WorldMapOverlayWhereUniqueInput>
    connect?: Enumerable<WorldMapOverlayWhereUniqueInput>
    update?: Enumerable<WorldMapOverlayUpdateWithWhereUniqueWithoutArea_3Input>
    updateMany?: Enumerable<WorldMapOverlayUpdateManyWithWhereWithoutArea_3Input>
    deleteMany?: Enumerable<WorldMapOverlayScalarWhereInput>
  }

  export type WorldMapOverlayUncheckedUpdateManyWithoutArea_4NestedInput = {
    create?: XOR<Enumerable<WorldMapOverlayCreateWithoutArea_4Input>, Enumerable<WorldMapOverlayUncheckedCreateWithoutArea_4Input>>
    connectOrCreate?: Enumerable<WorldMapOverlayCreateOrConnectWithoutArea_4Input>
    upsert?: Enumerable<WorldMapOverlayUpsertWithWhereUniqueWithoutArea_4Input>
    set?: Enumerable<WorldMapOverlayWhereUniqueInput>
    disconnect?: Enumerable<WorldMapOverlayWhereUniqueInput>
    delete?: Enumerable<WorldMapOverlayWhereUniqueInput>
    connect?: Enumerable<WorldMapOverlayWhereUniqueInput>
    update?: Enumerable<WorldMapOverlayUpdateWithWhereUniqueWithoutArea_4Input>
    updateMany?: Enumerable<WorldMapOverlayUpdateManyWithWhereWithoutArea_4Input>
    deleteMany?: Enumerable<WorldMapOverlayScalarWhereInput>
  }

  export type ContinentCreateNestedOneWithoutAreaTriggerInput = {
    create?: XOR<ContinentCreateWithoutAreaTriggerInput, ContinentUncheckedCreateWithoutAreaTriggerInput>
    connectOrCreate?: ContinentCreateOrConnectWithoutAreaTriggerInput
    connect?: ContinentWhereUniqueInput
  }

  export type ContinentUpdateOneRequiredWithoutAreaTriggerNestedInput = {
    create?: XOR<ContinentCreateWithoutAreaTriggerInput, ContinentUncheckedCreateWithoutAreaTriggerInput>
    connectOrCreate?: ContinentCreateOrConnectWithoutAreaTriggerInput
    upsert?: ContinentUpsertWithoutAreaTriggerInput
    connect?: ContinentWhereUniqueInput
    update?: XOR<ContinentUpdateWithoutAreaTriggerInput, ContinentUncheckedUpdateWithoutAreaTriggerInput>
  }

  export type ContinentCreateNestedOneWithoutLightInput = {
    create?: XOR<ContinentCreateWithoutLightInput, ContinentUncheckedCreateWithoutLightInput>
    connectOrCreate?: ContinentCreateOrConnectWithoutLightInput
    connect?: ContinentWhereUniqueInput
  }

  export type LightParamsCreateNestedOneWithoutStandatrdLightInput = {
    create?: XOR<LightParamsCreateWithoutStandatrdLightInput, LightParamsUncheckedCreateWithoutStandatrdLightInput>
    connectOrCreate?: LightParamsCreateOrConnectWithoutStandatrdLightInput
    connect?: LightParamsWhereUniqueInput
  }

  export type LightParamsCreateNestedOneWithoutUnderwaterLightInput = {
    create?: XOR<LightParamsCreateWithoutUnderwaterLightInput, LightParamsUncheckedCreateWithoutUnderwaterLightInput>
    connectOrCreate?: LightParamsCreateOrConnectWithoutUnderwaterLightInput
    connect?: LightParamsWhereUniqueInput
  }

  export type LightParamsCreateNestedOneWithoutSunsetLightInput = {
    create?: XOR<LightParamsCreateWithoutSunsetLightInput, LightParamsUncheckedCreateWithoutSunsetLightInput>
    connectOrCreate?: LightParamsCreateOrConnectWithoutSunsetLightInput
    connect?: LightParamsWhereUniqueInput
  }

  export type LightParamsCreateNestedOneWithoutOtherLightInput = {
    create?: XOR<LightParamsCreateWithoutOtherLightInput, LightParamsUncheckedCreateWithoutOtherLightInput>
    connectOrCreate?: LightParamsCreateOrConnectWithoutOtherLightInput
    connect?: LightParamsWhereUniqueInput
  }

  export type LightParamsCreateNestedOneWithoutDeathLightInput = {
    create?: XOR<LightParamsCreateWithoutDeathLightInput, LightParamsUncheckedCreateWithoutDeathLightInput>
    connectOrCreate?: LightParamsCreateOrConnectWithoutDeathLightInput
    connect?: LightParamsWhereUniqueInput
  }

  export type AreaTableCreateNestedManyWithoutLightInput = {
    create?: XOR<Enumerable<AreaTableCreateWithoutLightInput>, Enumerable<AreaTableUncheckedCreateWithoutLightInput>>
    connectOrCreate?: Enumerable<AreaTableCreateOrConnectWithoutLightInput>
    connect?: Enumerable<AreaTableWhereUniqueInput>
  }

  export type AreaTableUncheckedCreateNestedManyWithoutLightInput = {
    create?: XOR<Enumerable<AreaTableCreateWithoutLightInput>, Enumerable<AreaTableUncheckedCreateWithoutLightInput>>
    connectOrCreate?: Enumerable<AreaTableCreateOrConnectWithoutLightInput>
    connect?: Enumerable<AreaTableWhereUniqueInput>
  }

  export type ContinentUpdateOneRequiredWithoutLightNestedInput = {
    create?: XOR<ContinentCreateWithoutLightInput, ContinentUncheckedCreateWithoutLightInput>
    connectOrCreate?: ContinentCreateOrConnectWithoutLightInput
    upsert?: ContinentUpsertWithoutLightInput
    connect?: ContinentWhereUniqueInput
    update?: XOR<ContinentUpdateWithoutLightInput, ContinentUncheckedUpdateWithoutLightInput>
  }

  export type LightParamsUpdateOneRequiredWithoutStandatrdLightNestedInput = {
    create?: XOR<LightParamsCreateWithoutStandatrdLightInput, LightParamsUncheckedCreateWithoutStandatrdLightInput>
    connectOrCreate?: LightParamsCreateOrConnectWithoutStandatrdLightInput
    upsert?: LightParamsUpsertWithoutStandatrdLightInput
    connect?: LightParamsWhereUniqueInput
    update?: XOR<LightParamsUpdateWithoutStandatrdLightInput, LightParamsUncheckedUpdateWithoutStandatrdLightInput>
  }

  export type LightParamsUpdateOneRequiredWithoutUnderwaterLightNestedInput = {
    create?: XOR<LightParamsCreateWithoutUnderwaterLightInput, LightParamsUncheckedCreateWithoutUnderwaterLightInput>
    connectOrCreate?: LightParamsCreateOrConnectWithoutUnderwaterLightInput
    upsert?: LightParamsUpsertWithoutUnderwaterLightInput
    connect?: LightParamsWhereUniqueInput
    update?: XOR<LightParamsUpdateWithoutUnderwaterLightInput, LightParamsUncheckedUpdateWithoutUnderwaterLightInput>
  }

  export type LightParamsUpdateOneRequiredWithoutSunsetLightNestedInput = {
    create?: XOR<LightParamsCreateWithoutSunsetLightInput, LightParamsUncheckedCreateWithoutSunsetLightInput>
    connectOrCreate?: LightParamsCreateOrConnectWithoutSunsetLightInput
    upsert?: LightParamsUpsertWithoutSunsetLightInput
    connect?: LightParamsWhereUniqueInput
    update?: XOR<LightParamsUpdateWithoutSunsetLightInput, LightParamsUncheckedUpdateWithoutSunsetLightInput>
  }

  export type LightParamsUpdateOneRequiredWithoutOtherLightNestedInput = {
    create?: XOR<LightParamsCreateWithoutOtherLightInput, LightParamsUncheckedCreateWithoutOtherLightInput>
    connectOrCreate?: LightParamsCreateOrConnectWithoutOtherLightInput
    upsert?: LightParamsUpsertWithoutOtherLightInput
    connect?: LightParamsWhereUniqueInput
    update?: XOR<LightParamsUpdateWithoutOtherLightInput, LightParamsUncheckedUpdateWithoutOtherLightInput>
  }

  export type LightParamsUpdateOneRequiredWithoutDeathLightNestedInput = {
    create?: XOR<LightParamsCreateWithoutDeathLightInput, LightParamsUncheckedCreateWithoutDeathLightInput>
    connectOrCreate?: LightParamsCreateOrConnectWithoutDeathLightInput
    upsert?: LightParamsUpsertWithoutDeathLightInput
    connect?: LightParamsWhereUniqueInput
    update?: XOR<LightParamsUpdateWithoutDeathLightInput, LightParamsUncheckedUpdateWithoutDeathLightInput>
  }

  export type AreaTableUpdateManyWithoutLightNestedInput = {
    create?: XOR<Enumerable<AreaTableCreateWithoutLightInput>, Enumerable<AreaTableUncheckedCreateWithoutLightInput>>
    connectOrCreate?: Enumerable<AreaTableCreateOrConnectWithoutLightInput>
    upsert?: Enumerable<AreaTableUpsertWithWhereUniqueWithoutLightInput>
    set?: Enumerable<AreaTableWhereUniqueInput>
    disconnect?: Enumerable<AreaTableWhereUniqueInput>
    delete?: Enumerable<AreaTableWhereUniqueInput>
    connect?: Enumerable<AreaTableWhereUniqueInput>
    update?: Enumerable<AreaTableUpdateWithWhereUniqueWithoutLightInput>
    updateMany?: Enumerable<AreaTableUpdateManyWithWhereWithoutLightInput>
    deleteMany?: Enumerable<AreaTableScalarWhereInput>
  }

  export type AreaTableUncheckedUpdateManyWithoutLightNestedInput = {
    create?: XOR<Enumerable<AreaTableCreateWithoutLightInput>, Enumerable<AreaTableUncheckedCreateWithoutLightInput>>
    connectOrCreate?: Enumerable<AreaTableCreateOrConnectWithoutLightInput>
    upsert?: Enumerable<AreaTableUpsertWithWhereUniqueWithoutLightInput>
    set?: Enumerable<AreaTableWhereUniqueInput>
    disconnect?: Enumerable<AreaTableWhereUniqueInput>
    delete?: Enumerable<AreaTableWhereUniqueInput>
    connect?: Enumerable<AreaTableWhereUniqueInput>
    update?: Enumerable<AreaTableUpdateWithWhereUniqueWithoutLightInput>
    updateMany?: Enumerable<AreaTableUpdateManyWithWhereWithoutLightInput>
    deleteMany?: Enumerable<AreaTableScalarWhereInput>
  }

  export type LightSkyboxCreateNestedOneWithoutLightParamsInput = {
    create?: XOR<LightSkyboxCreateWithoutLightParamsInput, LightSkyboxUncheckedCreateWithoutLightParamsInput>
    connectOrCreate?: LightSkyboxCreateOrConnectWithoutLightParamsInput
    connect?: LightSkyboxWhereUniqueInput
  }

  export type LightCreateNestedManyWithoutParamStandardInput = {
    create?: XOR<Enumerable<LightCreateWithoutParamStandardInput>, Enumerable<LightUncheckedCreateWithoutParamStandardInput>>
    connectOrCreate?: Enumerable<LightCreateOrConnectWithoutParamStandardInput>
    connect?: Enumerable<LightWhereUniqueInput>
  }

  export type LightCreateNestedManyWithoutParamUnderwaterInput = {
    create?: XOR<Enumerable<LightCreateWithoutParamUnderwaterInput>, Enumerable<LightUncheckedCreateWithoutParamUnderwaterInput>>
    connectOrCreate?: Enumerable<LightCreateOrConnectWithoutParamUnderwaterInput>
    connect?: Enumerable<LightWhereUniqueInput>
  }

  export type LightCreateNestedManyWithoutParamSunsetInput = {
    create?: XOR<Enumerable<LightCreateWithoutParamSunsetInput>, Enumerable<LightUncheckedCreateWithoutParamSunsetInput>>
    connectOrCreate?: Enumerable<LightCreateOrConnectWithoutParamSunsetInput>
    connect?: Enumerable<LightWhereUniqueInput>
  }

  export type LightCreateNestedManyWithoutParamOtherInput = {
    create?: XOR<Enumerable<LightCreateWithoutParamOtherInput>, Enumerable<LightUncheckedCreateWithoutParamOtherInput>>
    connectOrCreate?: Enumerable<LightCreateOrConnectWithoutParamOtherInput>
    connect?: Enumerable<LightWhereUniqueInput>
  }

  export type LightCreateNestedManyWithoutParamDeathInput = {
    create?: XOR<Enumerable<LightCreateWithoutParamDeathInput>, Enumerable<LightUncheckedCreateWithoutParamDeathInput>>
    connectOrCreate?: Enumerable<LightCreateOrConnectWithoutParamDeathInput>
    connect?: Enumerable<LightWhereUniqueInput>
  }

  export type LightUncheckedCreateNestedManyWithoutParamStandardInput = {
    create?: XOR<Enumerable<LightCreateWithoutParamStandardInput>, Enumerable<LightUncheckedCreateWithoutParamStandardInput>>
    connectOrCreate?: Enumerable<LightCreateOrConnectWithoutParamStandardInput>
    connect?: Enumerable<LightWhereUniqueInput>
  }

  export type LightUncheckedCreateNestedManyWithoutParamUnderwaterInput = {
    create?: XOR<Enumerable<LightCreateWithoutParamUnderwaterInput>, Enumerable<LightUncheckedCreateWithoutParamUnderwaterInput>>
    connectOrCreate?: Enumerable<LightCreateOrConnectWithoutParamUnderwaterInput>
    connect?: Enumerable<LightWhereUniqueInput>
  }

  export type LightUncheckedCreateNestedManyWithoutParamSunsetInput = {
    create?: XOR<Enumerable<LightCreateWithoutParamSunsetInput>, Enumerable<LightUncheckedCreateWithoutParamSunsetInput>>
    connectOrCreate?: Enumerable<LightCreateOrConnectWithoutParamSunsetInput>
    connect?: Enumerable<LightWhereUniqueInput>
  }

  export type LightUncheckedCreateNestedManyWithoutParamOtherInput = {
    create?: XOR<Enumerable<LightCreateWithoutParamOtherInput>, Enumerable<LightUncheckedCreateWithoutParamOtherInput>>
    connectOrCreate?: Enumerable<LightCreateOrConnectWithoutParamOtherInput>
    connect?: Enumerable<LightWhereUniqueInput>
  }

  export type LightUncheckedCreateNestedManyWithoutParamDeathInput = {
    create?: XOR<Enumerable<LightCreateWithoutParamDeathInput>, Enumerable<LightUncheckedCreateWithoutParamDeathInput>>
    connectOrCreate?: Enumerable<LightCreateOrConnectWithoutParamDeathInput>
    connect?: Enumerable<LightWhereUniqueInput>
  }

  export type LightSkyboxUpdateOneRequiredWithoutLightParamsNestedInput = {
    create?: XOR<LightSkyboxCreateWithoutLightParamsInput, LightSkyboxUncheckedCreateWithoutLightParamsInput>
    connectOrCreate?: LightSkyboxCreateOrConnectWithoutLightParamsInput
    upsert?: LightSkyboxUpsertWithoutLightParamsInput
    connect?: LightSkyboxWhereUniqueInput
    update?: XOR<LightSkyboxUpdateWithoutLightParamsInput, LightSkyboxUncheckedUpdateWithoutLightParamsInput>
  }

  export type LightUpdateManyWithoutParamStandardNestedInput = {
    create?: XOR<Enumerable<LightCreateWithoutParamStandardInput>, Enumerable<LightUncheckedCreateWithoutParamStandardInput>>
    connectOrCreate?: Enumerable<LightCreateOrConnectWithoutParamStandardInput>
    upsert?: Enumerable<LightUpsertWithWhereUniqueWithoutParamStandardInput>
    set?: Enumerable<LightWhereUniqueInput>
    disconnect?: Enumerable<LightWhereUniqueInput>
    delete?: Enumerable<LightWhereUniqueInput>
    connect?: Enumerable<LightWhereUniqueInput>
    update?: Enumerable<LightUpdateWithWhereUniqueWithoutParamStandardInput>
    updateMany?: Enumerable<LightUpdateManyWithWhereWithoutParamStandardInput>
    deleteMany?: Enumerable<LightScalarWhereInput>
  }

  export type LightUpdateManyWithoutParamUnderwaterNestedInput = {
    create?: XOR<Enumerable<LightCreateWithoutParamUnderwaterInput>, Enumerable<LightUncheckedCreateWithoutParamUnderwaterInput>>
    connectOrCreate?: Enumerable<LightCreateOrConnectWithoutParamUnderwaterInput>
    upsert?: Enumerable<LightUpsertWithWhereUniqueWithoutParamUnderwaterInput>
    set?: Enumerable<LightWhereUniqueInput>
    disconnect?: Enumerable<LightWhereUniqueInput>
    delete?: Enumerable<LightWhereUniqueInput>
    connect?: Enumerable<LightWhereUniqueInput>
    update?: Enumerable<LightUpdateWithWhereUniqueWithoutParamUnderwaterInput>
    updateMany?: Enumerable<LightUpdateManyWithWhereWithoutParamUnderwaterInput>
    deleteMany?: Enumerable<LightScalarWhereInput>
  }

  export type LightUpdateManyWithoutParamSunsetNestedInput = {
    create?: XOR<Enumerable<LightCreateWithoutParamSunsetInput>, Enumerable<LightUncheckedCreateWithoutParamSunsetInput>>
    connectOrCreate?: Enumerable<LightCreateOrConnectWithoutParamSunsetInput>
    upsert?: Enumerable<LightUpsertWithWhereUniqueWithoutParamSunsetInput>
    set?: Enumerable<LightWhereUniqueInput>
    disconnect?: Enumerable<LightWhereUniqueInput>
    delete?: Enumerable<LightWhereUniqueInput>
    connect?: Enumerable<LightWhereUniqueInput>
    update?: Enumerable<LightUpdateWithWhereUniqueWithoutParamSunsetInput>
    updateMany?: Enumerable<LightUpdateManyWithWhereWithoutParamSunsetInput>
    deleteMany?: Enumerable<LightScalarWhereInput>
  }

  export type LightUpdateManyWithoutParamOtherNestedInput = {
    create?: XOR<Enumerable<LightCreateWithoutParamOtherInput>, Enumerable<LightUncheckedCreateWithoutParamOtherInput>>
    connectOrCreate?: Enumerable<LightCreateOrConnectWithoutParamOtherInput>
    upsert?: Enumerable<LightUpsertWithWhereUniqueWithoutParamOtherInput>
    set?: Enumerable<LightWhereUniqueInput>
    disconnect?: Enumerable<LightWhereUniqueInput>
    delete?: Enumerable<LightWhereUniqueInput>
    connect?: Enumerable<LightWhereUniqueInput>
    update?: Enumerable<LightUpdateWithWhereUniqueWithoutParamOtherInput>
    updateMany?: Enumerable<LightUpdateManyWithWhereWithoutParamOtherInput>
    deleteMany?: Enumerable<LightScalarWhereInput>
  }

  export type LightUpdateManyWithoutParamDeathNestedInput = {
    create?: XOR<Enumerable<LightCreateWithoutParamDeathInput>, Enumerable<LightUncheckedCreateWithoutParamDeathInput>>
    connectOrCreate?: Enumerable<LightCreateOrConnectWithoutParamDeathInput>
    upsert?: Enumerable<LightUpsertWithWhereUniqueWithoutParamDeathInput>
    set?: Enumerable<LightWhereUniqueInput>
    disconnect?: Enumerable<LightWhereUniqueInput>
    delete?: Enumerable<LightWhereUniqueInput>
    connect?: Enumerable<LightWhereUniqueInput>
    update?: Enumerable<LightUpdateWithWhereUniqueWithoutParamDeathInput>
    updateMany?: Enumerable<LightUpdateManyWithWhereWithoutParamDeathInput>
    deleteMany?: Enumerable<LightScalarWhereInput>
  }

  export type LightUncheckedUpdateManyWithoutParamStandardNestedInput = {
    create?: XOR<Enumerable<LightCreateWithoutParamStandardInput>, Enumerable<LightUncheckedCreateWithoutParamStandardInput>>
    connectOrCreate?: Enumerable<LightCreateOrConnectWithoutParamStandardInput>
    upsert?: Enumerable<LightUpsertWithWhereUniqueWithoutParamStandardInput>
    set?: Enumerable<LightWhereUniqueInput>
    disconnect?: Enumerable<LightWhereUniqueInput>
    delete?: Enumerable<LightWhereUniqueInput>
    connect?: Enumerable<LightWhereUniqueInput>
    update?: Enumerable<LightUpdateWithWhereUniqueWithoutParamStandardInput>
    updateMany?: Enumerable<LightUpdateManyWithWhereWithoutParamStandardInput>
    deleteMany?: Enumerable<LightScalarWhereInput>
  }

  export type LightUncheckedUpdateManyWithoutParamUnderwaterNestedInput = {
    create?: XOR<Enumerable<LightCreateWithoutParamUnderwaterInput>, Enumerable<LightUncheckedCreateWithoutParamUnderwaterInput>>
    connectOrCreate?: Enumerable<LightCreateOrConnectWithoutParamUnderwaterInput>
    upsert?: Enumerable<LightUpsertWithWhereUniqueWithoutParamUnderwaterInput>
    set?: Enumerable<LightWhereUniqueInput>
    disconnect?: Enumerable<LightWhereUniqueInput>
    delete?: Enumerable<LightWhereUniqueInput>
    connect?: Enumerable<LightWhereUniqueInput>
    update?: Enumerable<LightUpdateWithWhereUniqueWithoutParamUnderwaterInput>
    updateMany?: Enumerable<LightUpdateManyWithWhereWithoutParamUnderwaterInput>
    deleteMany?: Enumerable<LightScalarWhereInput>
  }

  export type LightUncheckedUpdateManyWithoutParamSunsetNestedInput = {
    create?: XOR<Enumerable<LightCreateWithoutParamSunsetInput>, Enumerable<LightUncheckedCreateWithoutParamSunsetInput>>
    connectOrCreate?: Enumerable<LightCreateOrConnectWithoutParamSunsetInput>
    upsert?: Enumerable<LightUpsertWithWhereUniqueWithoutParamSunsetInput>
    set?: Enumerable<LightWhereUniqueInput>
    disconnect?: Enumerable<LightWhereUniqueInput>
    delete?: Enumerable<LightWhereUniqueInput>
    connect?: Enumerable<LightWhereUniqueInput>
    update?: Enumerable<LightUpdateWithWhereUniqueWithoutParamSunsetInput>
    updateMany?: Enumerable<LightUpdateManyWithWhereWithoutParamSunsetInput>
    deleteMany?: Enumerable<LightScalarWhereInput>
  }

  export type LightUncheckedUpdateManyWithoutParamOtherNestedInput = {
    create?: XOR<Enumerable<LightCreateWithoutParamOtherInput>, Enumerable<LightUncheckedCreateWithoutParamOtherInput>>
    connectOrCreate?: Enumerable<LightCreateOrConnectWithoutParamOtherInput>
    upsert?: Enumerable<LightUpsertWithWhereUniqueWithoutParamOtherInput>
    set?: Enumerable<LightWhereUniqueInput>
    disconnect?: Enumerable<LightWhereUniqueInput>
    delete?: Enumerable<LightWhereUniqueInput>
    connect?: Enumerable<LightWhereUniqueInput>
    update?: Enumerable<LightUpdateWithWhereUniqueWithoutParamOtherInput>
    updateMany?: Enumerable<LightUpdateManyWithWhereWithoutParamOtherInput>
    deleteMany?: Enumerable<LightScalarWhereInput>
  }

  export type LightUncheckedUpdateManyWithoutParamDeathNestedInput = {
    create?: XOR<Enumerable<LightCreateWithoutParamDeathInput>, Enumerable<LightUncheckedCreateWithoutParamDeathInput>>
    connectOrCreate?: Enumerable<LightCreateOrConnectWithoutParamDeathInput>
    upsert?: Enumerable<LightUpsertWithWhereUniqueWithoutParamDeathInput>
    set?: Enumerable<LightWhereUniqueInput>
    disconnect?: Enumerable<LightWhereUniqueInput>
    delete?: Enumerable<LightWhereUniqueInput>
    connect?: Enumerable<LightWhereUniqueInput>
    update?: Enumerable<LightUpdateWithWhereUniqueWithoutParamDeathInput>
    updateMany?: Enumerable<LightUpdateManyWithWhereWithoutParamDeathInput>
    deleteMany?: Enumerable<LightScalarWhereInput>
  }

  export type LightParamsCreateNestedManyWithoutLightSkyboxInput = {
    create?: XOR<Enumerable<LightParamsCreateWithoutLightSkyboxInput>, Enumerable<LightParamsUncheckedCreateWithoutLightSkyboxInput>>
    connectOrCreate?: Enumerable<LightParamsCreateOrConnectWithoutLightSkyboxInput>
    connect?: Enumerable<LightParamsWhereUniqueInput>
  }

  export type LightParamsUncheckedCreateNestedManyWithoutLightSkyboxInput = {
    create?: XOR<Enumerable<LightParamsCreateWithoutLightSkyboxInput>, Enumerable<LightParamsUncheckedCreateWithoutLightSkyboxInput>>
    connectOrCreate?: Enumerable<LightParamsCreateOrConnectWithoutLightSkyboxInput>
    connect?: Enumerable<LightParamsWhereUniqueInput>
  }

  export type LightParamsUpdateManyWithoutLightSkyboxNestedInput = {
    create?: XOR<Enumerable<LightParamsCreateWithoutLightSkyboxInput>, Enumerable<LightParamsUncheckedCreateWithoutLightSkyboxInput>>
    connectOrCreate?: Enumerable<LightParamsCreateOrConnectWithoutLightSkyboxInput>
    upsert?: Enumerable<LightParamsUpsertWithWhereUniqueWithoutLightSkyboxInput>
    set?: Enumerable<LightParamsWhereUniqueInput>
    disconnect?: Enumerable<LightParamsWhereUniqueInput>
    delete?: Enumerable<LightParamsWhereUniqueInput>
    connect?: Enumerable<LightParamsWhereUniqueInput>
    update?: Enumerable<LightParamsUpdateWithWhereUniqueWithoutLightSkyboxInput>
    updateMany?: Enumerable<LightParamsUpdateManyWithWhereWithoutLightSkyboxInput>
    deleteMany?: Enumerable<LightParamsScalarWhereInput>
  }

  export type LightParamsUncheckedUpdateManyWithoutLightSkyboxNestedInput = {
    create?: XOR<Enumerable<LightParamsCreateWithoutLightSkyboxInput>, Enumerable<LightParamsUncheckedCreateWithoutLightSkyboxInput>>
    connectOrCreate?: Enumerable<LightParamsCreateOrConnectWithoutLightSkyboxInput>
    upsert?: Enumerable<LightParamsUpsertWithWhereUniqueWithoutLightSkyboxInput>
    set?: Enumerable<LightParamsWhereUniqueInput>
    disconnect?: Enumerable<LightParamsWhereUniqueInput>
    delete?: Enumerable<LightParamsWhereUniqueInput>
    connect?: Enumerable<LightParamsWhereUniqueInput>
    update?: Enumerable<LightParamsUpdateWithWhereUniqueWithoutLightSkyboxInput>
    updateMany?: Enumerable<LightParamsUpdateManyWithWhereWithoutLightSkyboxInput>
    deleteMany?: Enumerable<LightParamsScalarWhereInput>
  }

  export type AreaTableCreateNestedOneWithoutWMOAreaTableInput = {
    create?: XOR<AreaTableCreateWithoutWMOAreaTableInput, AreaTableUncheckedCreateWithoutWMOAreaTableInput>
    connectOrCreate?: AreaTableCreateOrConnectWithoutWMOAreaTableInput
    connect?: AreaTableWhereUniqueInput
  }

  export type AreaTableUpdateOneRequiredWithoutWMOAreaTableNestedInput = {
    create?: XOR<AreaTableCreateWithoutWMOAreaTableInput, AreaTableUncheckedCreateWithoutWMOAreaTableInput>
    connectOrCreate?: AreaTableCreateOrConnectWithoutWMOAreaTableInput
    upsert?: AreaTableUpsertWithoutWMOAreaTableInput
    connect?: AreaTableWhereUniqueInput
    update?: XOR<AreaTableUpdateWithoutWMOAreaTableInput, AreaTableUncheckedUpdateWithoutWMOAreaTableInput>
  }

  export type ContinentCreateNestedOneWithoutWorldMapAreaInput = {
    create?: XOR<ContinentCreateWithoutWorldMapAreaInput, ContinentUncheckedCreateWithoutWorldMapAreaInput>
    connectOrCreate?: ContinentCreateOrConnectWithoutWorldMapAreaInput
    connect?: ContinentWhereUniqueInput
  }

  export type AreaTableCreateNestedOneWithoutWorldMapAreaInput = {
    create?: XOR<AreaTableCreateWithoutWorldMapAreaInput, AreaTableUncheckedCreateWithoutWorldMapAreaInput>
    connectOrCreate?: AreaTableCreateOrConnectWithoutWorldMapAreaInput
    connect?: AreaTableWhereUniqueInput
  }

  export type WorldMapOverlayCreateNestedManyWithoutMapAreaInput = {
    create?: XOR<Enumerable<WorldMapOverlayCreateWithoutMapAreaInput>, Enumerable<WorldMapOverlayUncheckedCreateWithoutMapAreaInput>>
    connectOrCreate?: Enumerable<WorldMapOverlayCreateOrConnectWithoutMapAreaInput>
    connect?: Enumerable<WorldMapOverlayWhereUniqueInput>
  }

  export type WorldMapOverlayUncheckedCreateNestedManyWithoutMapAreaInput = {
    create?: XOR<Enumerable<WorldMapOverlayCreateWithoutMapAreaInput>, Enumerable<WorldMapOverlayUncheckedCreateWithoutMapAreaInput>>
    connectOrCreate?: Enumerable<WorldMapOverlayCreateOrConnectWithoutMapAreaInput>
    connect?: Enumerable<WorldMapOverlayWhereUniqueInput>
  }

  export type ContinentUpdateOneRequiredWithoutWorldMapAreaNestedInput = {
    create?: XOR<ContinentCreateWithoutWorldMapAreaInput, ContinentUncheckedCreateWithoutWorldMapAreaInput>
    connectOrCreate?: ContinentCreateOrConnectWithoutWorldMapAreaInput
    upsert?: ContinentUpsertWithoutWorldMapAreaInput
    connect?: ContinentWhereUniqueInput
    update?: XOR<ContinentUpdateWithoutWorldMapAreaInput, ContinentUncheckedUpdateWithoutWorldMapAreaInput>
  }

  export type AreaTableUpdateOneRequiredWithoutWorldMapAreaNestedInput = {
    create?: XOR<AreaTableCreateWithoutWorldMapAreaInput, AreaTableUncheckedCreateWithoutWorldMapAreaInput>
    connectOrCreate?: AreaTableCreateOrConnectWithoutWorldMapAreaInput
    upsert?: AreaTableUpsertWithoutWorldMapAreaInput
    connect?: AreaTableWhereUniqueInput
    update?: XOR<AreaTableUpdateWithoutWorldMapAreaInput, AreaTableUncheckedUpdateWithoutWorldMapAreaInput>
  }

  export type WorldMapOverlayUpdateManyWithoutMapAreaNestedInput = {
    create?: XOR<Enumerable<WorldMapOverlayCreateWithoutMapAreaInput>, Enumerable<WorldMapOverlayUncheckedCreateWithoutMapAreaInput>>
    connectOrCreate?: Enumerable<WorldMapOverlayCreateOrConnectWithoutMapAreaInput>
    upsert?: Enumerable<WorldMapOverlayUpsertWithWhereUniqueWithoutMapAreaInput>
    set?: Enumerable<WorldMapOverlayWhereUniqueInput>
    disconnect?: Enumerable<WorldMapOverlayWhereUniqueInput>
    delete?: Enumerable<WorldMapOverlayWhereUniqueInput>
    connect?: Enumerable<WorldMapOverlayWhereUniqueInput>
    update?: Enumerable<WorldMapOverlayUpdateWithWhereUniqueWithoutMapAreaInput>
    updateMany?: Enumerable<WorldMapOverlayUpdateManyWithWhereWithoutMapAreaInput>
    deleteMany?: Enumerable<WorldMapOverlayScalarWhereInput>
  }

  export type WorldMapOverlayUncheckedUpdateManyWithoutMapAreaNestedInput = {
    create?: XOR<Enumerable<WorldMapOverlayCreateWithoutMapAreaInput>, Enumerable<WorldMapOverlayUncheckedCreateWithoutMapAreaInput>>
    connectOrCreate?: Enumerable<WorldMapOverlayCreateOrConnectWithoutMapAreaInput>
    upsert?: Enumerable<WorldMapOverlayUpsertWithWhereUniqueWithoutMapAreaInput>
    set?: Enumerable<WorldMapOverlayWhereUniqueInput>
    disconnect?: Enumerable<WorldMapOverlayWhereUniqueInput>
    delete?: Enumerable<WorldMapOverlayWhereUniqueInput>
    connect?: Enumerable<WorldMapOverlayWhereUniqueInput>
    update?: Enumerable<WorldMapOverlayUpdateWithWhereUniqueWithoutMapAreaInput>
    updateMany?: Enumerable<WorldMapOverlayUpdateManyWithWhereWithoutMapAreaInput>
    deleteMany?: Enumerable<WorldMapOverlayScalarWhereInput>
  }

  export type ContinentCreateNestedOneWithoutWorldMapContinentInput = {
    create?: XOR<ContinentCreateWithoutWorldMapContinentInput, ContinentUncheckedCreateWithoutWorldMapContinentInput>
    connectOrCreate?: ContinentCreateOrConnectWithoutWorldMapContinentInput
    connect?: ContinentWhereUniqueInput
  }

  export type ContinentUpdateOneRequiredWithoutWorldMapContinentNestedInput = {
    create?: XOR<ContinentCreateWithoutWorldMapContinentInput, ContinentUncheckedCreateWithoutWorldMapContinentInput>
    connectOrCreate?: ContinentCreateOrConnectWithoutWorldMapContinentInput
    upsert?: ContinentUpsertWithoutWorldMapContinentInput
    connect?: ContinentWhereUniqueInput
    update?: XOR<ContinentUpdateWithoutWorldMapContinentInput, ContinentUncheckedUpdateWithoutWorldMapContinentInput>
  }

  export type WorldMapAreaCreateNestedOneWithoutWorldMapOverlayInput = {
    create?: XOR<WorldMapAreaCreateWithoutWorldMapOverlayInput, WorldMapAreaUncheckedCreateWithoutWorldMapOverlayInput>
    connectOrCreate?: WorldMapAreaCreateOrConnectWithoutWorldMapOverlayInput
    connect?: WorldMapAreaWhereUniqueInput
  }

  export type AreaTableCreateNestedOneWithoutWorldMapOverlay1Input = {
    create?: XOR<AreaTableCreateWithoutWorldMapOverlay1Input, AreaTableUncheckedCreateWithoutWorldMapOverlay1Input>
    connectOrCreate?: AreaTableCreateOrConnectWithoutWorldMapOverlay1Input
    connect?: AreaTableWhereUniqueInput
  }

  export type AreaTableCreateNestedOneWithoutWorldMapOverlay2Input = {
    create?: XOR<AreaTableCreateWithoutWorldMapOverlay2Input, AreaTableUncheckedCreateWithoutWorldMapOverlay2Input>
    connectOrCreate?: AreaTableCreateOrConnectWithoutWorldMapOverlay2Input
    connect?: AreaTableWhereUniqueInput
  }

  export type AreaTableCreateNestedOneWithoutWorldMapOverlay3Input = {
    create?: XOR<AreaTableCreateWithoutWorldMapOverlay3Input, AreaTableUncheckedCreateWithoutWorldMapOverlay3Input>
    connectOrCreate?: AreaTableCreateOrConnectWithoutWorldMapOverlay3Input
    connect?: AreaTableWhereUniqueInput
  }

  export type AreaTableCreateNestedOneWithoutWorldMapOverlay4Input = {
    create?: XOR<AreaTableCreateWithoutWorldMapOverlay4Input, AreaTableUncheckedCreateWithoutWorldMapOverlay4Input>
    connectOrCreate?: AreaTableCreateOrConnectWithoutWorldMapOverlay4Input
    connect?: AreaTableWhereUniqueInput
  }

  export type WorldMapAreaUpdateOneRequiredWithoutWorldMapOverlayNestedInput = {
    create?: XOR<WorldMapAreaCreateWithoutWorldMapOverlayInput, WorldMapAreaUncheckedCreateWithoutWorldMapOverlayInput>
    connectOrCreate?: WorldMapAreaCreateOrConnectWithoutWorldMapOverlayInput
    upsert?: WorldMapAreaUpsertWithoutWorldMapOverlayInput
    connect?: WorldMapAreaWhereUniqueInput
    update?: XOR<WorldMapAreaUpdateWithoutWorldMapOverlayInput, WorldMapAreaUncheckedUpdateWithoutWorldMapOverlayInput>
  }

  export type AreaTableUpdateOneRequiredWithoutWorldMapOverlay1NestedInput = {
    create?: XOR<AreaTableCreateWithoutWorldMapOverlay1Input, AreaTableUncheckedCreateWithoutWorldMapOverlay1Input>
    connectOrCreate?: AreaTableCreateOrConnectWithoutWorldMapOverlay1Input
    upsert?: AreaTableUpsertWithoutWorldMapOverlay1Input
    connect?: AreaTableWhereUniqueInput
    update?: XOR<AreaTableUpdateWithoutWorldMapOverlay1Input, AreaTableUncheckedUpdateWithoutWorldMapOverlay1Input>
  }

  export type AreaTableUpdateOneRequiredWithoutWorldMapOverlay2NestedInput = {
    create?: XOR<AreaTableCreateWithoutWorldMapOverlay2Input, AreaTableUncheckedCreateWithoutWorldMapOverlay2Input>
    connectOrCreate?: AreaTableCreateOrConnectWithoutWorldMapOverlay2Input
    upsert?: AreaTableUpsertWithoutWorldMapOverlay2Input
    connect?: AreaTableWhereUniqueInput
    update?: XOR<AreaTableUpdateWithoutWorldMapOverlay2Input, AreaTableUncheckedUpdateWithoutWorldMapOverlay2Input>
  }

  export type AreaTableUpdateOneRequiredWithoutWorldMapOverlay3NestedInput = {
    create?: XOR<AreaTableCreateWithoutWorldMapOverlay3Input, AreaTableUncheckedCreateWithoutWorldMapOverlay3Input>
    connectOrCreate?: AreaTableCreateOrConnectWithoutWorldMapOverlay3Input
    upsert?: AreaTableUpsertWithoutWorldMapOverlay3Input
    connect?: AreaTableWhereUniqueInput
    update?: XOR<AreaTableUpdateWithoutWorldMapOverlay3Input, AreaTableUncheckedUpdateWithoutWorldMapOverlay3Input>
  }

  export type AreaTableUpdateOneRequiredWithoutWorldMapOverlay4NestedInput = {
    create?: XOR<AreaTableCreateWithoutWorldMapOverlay4Input, AreaTableUncheckedCreateWithoutWorldMapOverlay4Input>
    connectOrCreate?: AreaTableCreateOrConnectWithoutWorldMapOverlay4Input
    upsert?: AreaTableUpsertWithoutWorldMapOverlay4Input
    connect?: AreaTableWhereUniqueInput
    update?: XOR<AreaTableUpdateWithoutWorldMapOverlay4Input, AreaTableUncheckedUpdateWithoutWorldMapOverlay4Input>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type AreaPOICreateWithoutContinentInput = {
    id: number
    importance: number
    icon: number
    factionId: number
    x: number
    y: number
    z: number
    flags: number
    area: AreaTableCreateNestedOneWithoutAreaPOIInput
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
    description_enUS: string
    description_enGB: string
    description_koKR: string
    description_frFR: string
    description_deDE: string
    description_enCN: string
    description_zhCN: string
    description_enTW: string
    descriptionMask: number
    worldStateId: number
  }

  export type AreaPOIUncheckedCreateWithoutContinentInput = {
    id: number
    importance: number
    icon: number
    factionId: number
    x: number
    y: number
    z: number
    flags: number
    areaId: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
    description_enUS: string
    description_enGB: string
    description_koKR: string
    description_frFR: string
    description_deDE: string
    description_enCN: string
    description_zhCN: string
    description_enTW: string
    descriptionMask: number
    worldStateId: number
  }

  export type AreaPOICreateOrConnectWithoutContinentInput = {
    where: AreaPOIWhereUniqueInput
    create: XOR<AreaPOICreateWithoutContinentInput, AreaPOIUncheckedCreateWithoutContinentInput>
  }

  export type AreaTableCreateWithoutContinentInput = {
    id: number
    parentArea: AreaTableCreateNestedOneWithoutChildAreasInput
    areaBit: number
    flags: number
    soundPreferenceId: number
    underwaterSoundPreferenceId: number
    soundAmbienceId: number
    zoneMusicId: number
    zoneIntroMusicId: number
    explorationLevel: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
    factionGroupMask: number
    liquidTypeId: number
    minElevation: number
    ambientMultiplier: number
    light: LightCreateNestedOneWithoutAreaTableInput
    ChildAreas?: AreaTableCreateNestedManyWithoutParentAreaInput
    AreaPOI?: AreaPOICreateNestedManyWithoutAreaInput
    WMOAreaTable?: WMOAreaTableCreateNestedManyWithoutAreaTableInput
    WorldMapArea?: WorldMapAreaCreateNestedManyWithoutAreaTableInput
    WorldMapOverlay1?: WorldMapOverlayCreateNestedManyWithoutArea_1Input
    WorldMapOverlay2?: WorldMapOverlayCreateNestedManyWithoutArea_2Input
    WorldMapOverlay3?: WorldMapOverlayCreateNestedManyWithoutArea_3Input
    WorldMapOverlay4?: WorldMapOverlayCreateNestedManyWithoutArea_4Input
  }

  export type AreaTableUncheckedCreateWithoutContinentInput = {
    id: number
    parentAreaId: number
    areaBit: number
    flags: number
    soundPreferenceId: number
    underwaterSoundPreferenceId: number
    soundAmbienceId: number
    zoneMusicId: number
    zoneIntroMusicId: number
    explorationLevel: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
    factionGroupMask: number
    liquidTypeId: number
    minElevation: number
    ambientMultiplier: number
    lightId: number
    ChildAreas?: AreaTableUncheckedCreateNestedManyWithoutParentAreaInput
    AreaPOI?: AreaPOIUncheckedCreateNestedManyWithoutAreaInput
    WMOAreaTable?: WMOAreaTableUncheckedCreateNestedManyWithoutAreaTableInput
    WorldMapArea?: WorldMapAreaUncheckedCreateNestedManyWithoutAreaTableInput
    WorldMapOverlay1?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_1Input
    WorldMapOverlay2?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_2Input
    WorldMapOverlay3?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_3Input
    WorldMapOverlay4?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_4Input
  }

  export type AreaTableCreateOrConnectWithoutContinentInput = {
    where: AreaTableWhereUniqueInput
    create: XOR<AreaTableCreateWithoutContinentInput, AreaTableUncheckedCreateWithoutContinentInput>
  }

  export type WorldMapAreaCreateWithoutContinentInput = {
    areaTable: AreaTableCreateNestedOneWithoutWorldMapAreaInput
    name: string
    locLeft: number
    locRight: number
    locTop: number
    locBottom: number
    WorldMapOverlay?: WorldMapOverlayCreateNestedManyWithoutMapAreaInput
  }

  export type WorldMapAreaUncheckedCreateWithoutContinentInput = {
    id?: number
    areaId: number
    name: string
    locLeft: number
    locRight: number
    locTop: number
    locBottom: number
    WorldMapOverlay?: WorldMapOverlayUncheckedCreateNestedManyWithoutMapAreaInput
  }

  export type WorldMapAreaCreateOrConnectWithoutContinentInput = {
    where: WorldMapAreaWhereUniqueInput
    create: XOR<WorldMapAreaCreateWithoutContinentInput, WorldMapAreaUncheckedCreateWithoutContinentInput>
  }

  export type WorldMapContinentCreateWithoutContinentInput = {
    id: number
    left: number
    right: number
    top: number
    bottom: number
    offsetX: number
    offsetY: number
    scale: number
    taxiMinX: number
    taxiMinY: number
    taxiMaxX: number
    taxiMaxY: number
  }

  export type WorldMapContinentUncheckedCreateWithoutContinentInput = {
    id: number
    left: number
    right: number
    top: number
    bottom: number
    offsetX: number
    offsetY: number
    scale: number
    taxiMinX: number
    taxiMinY: number
    taxiMaxX: number
    taxiMaxY: number
  }

  export type WorldMapContinentCreateOrConnectWithoutContinentInput = {
    where: WorldMapContinentWhereUniqueInput
    create: XOR<WorldMapContinentCreateWithoutContinentInput, WorldMapContinentUncheckedCreateWithoutContinentInput>
  }

  export type AreaTriggerCreateWithoutContinentInput = {
    id: number
    x: number
    y: number
    z: number
    radius: number
    boxLength: number
    boxWidth: number
    boxHeight: number
    boxYaw: number
  }

  export type AreaTriggerUncheckedCreateWithoutContinentInput = {
    id: number
    x: number
    y: number
    z: number
    radius: number
    boxLength: number
    boxWidth: number
    boxHeight: number
    boxYaw: number
  }

  export type AreaTriggerCreateOrConnectWithoutContinentInput = {
    where: AreaTriggerWhereUniqueInput
    create: XOR<AreaTriggerCreateWithoutContinentInput, AreaTriggerUncheckedCreateWithoutContinentInput>
  }

  export type LightCreateWithoutContinentInput = {
    id: number
    x: number
    y: number
    z: number
    falloffStart: number
    falloffEnd: number
    paramStandard: LightParamsCreateNestedOneWithoutStandatrdLightInput
    paramUnderwater: LightParamsCreateNestedOneWithoutUnderwaterLightInput
    paramSunset: LightParamsCreateNestedOneWithoutSunsetLightInput
    paramOther: LightParamsCreateNestedOneWithoutOtherLightInput
    paramDeath: LightParamsCreateNestedOneWithoutDeathLightInput
    AreaTable?: AreaTableCreateNestedManyWithoutLightInput
  }

  export type LightUncheckedCreateWithoutContinentInput = {
    id: number
    x: number
    y: number
    z: number
    falloffStart: number
    falloffEnd: number
    paramStandardId: number
    paramUnderwaterId: number
    paramSunsetId: number
    paramOtherId: number
    paramDeathId: number
    AreaTable?: AreaTableUncheckedCreateNestedManyWithoutLightInput
  }

  export type LightCreateOrConnectWithoutContinentInput = {
    where: LightWhereUniqueInput
    create: XOR<LightCreateWithoutContinentInput, LightUncheckedCreateWithoutContinentInput>
  }

  export type AreaPOIUpsertWithWhereUniqueWithoutContinentInput = {
    where: AreaPOIWhereUniqueInput
    update: XOR<AreaPOIUpdateWithoutContinentInput, AreaPOIUncheckedUpdateWithoutContinentInput>
    create: XOR<AreaPOICreateWithoutContinentInput, AreaPOIUncheckedCreateWithoutContinentInput>
  }

  export type AreaPOIUpdateWithWhereUniqueWithoutContinentInput = {
    where: AreaPOIWhereUniqueInput
    data: XOR<AreaPOIUpdateWithoutContinentInput, AreaPOIUncheckedUpdateWithoutContinentInput>
  }

  export type AreaPOIUpdateManyWithWhereWithoutContinentInput = {
    where: AreaPOIScalarWhereInput
    data: XOR<AreaPOIUpdateManyMutationInput, AreaPOIUncheckedUpdateManyWithoutAreaPOIInput>
  }

  export type AreaPOIScalarWhereInput = {
    AND?: Enumerable<AreaPOIScalarWhereInput>
    OR?: Enumerable<AreaPOIScalarWhereInput>
    NOT?: Enumerable<AreaPOIScalarWhereInput>
    id?: IntFilter | number
    importance?: IntFilter | number
    icon?: IntFilter | number
    factionId?: IntFilter | number
    x?: FloatFilter | number
    y?: FloatFilter | number
    z?: FloatFilter | number
    continentId?: IntFilter | number
    flags?: IntFilter | number
    areaId?: IntFilter | number
    name_enUS?: StringFilter | string
    name_enGB?: StringFilter | string
    name_koKR?: StringFilter | string
    name_frFR?: StringFilter | string
    name_deDE?: StringFilter | string
    name_enCN?: StringFilter | string
    name_zhCN?: StringFilter | string
    name_enTW?: StringFilter | string
    nameMask?: IntFilter | number
    description_enUS?: StringFilter | string
    description_enGB?: StringFilter | string
    description_koKR?: StringFilter | string
    description_frFR?: StringFilter | string
    description_deDE?: StringFilter | string
    description_enCN?: StringFilter | string
    description_zhCN?: StringFilter | string
    description_enTW?: StringFilter | string
    descriptionMask?: IntFilter | number
    worldStateId?: IntFilter | number
  }

  export type AreaTableUpsertWithWhereUniqueWithoutContinentInput = {
    where: AreaTableWhereUniqueInput
    update: XOR<AreaTableUpdateWithoutContinentInput, AreaTableUncheckedUpdateWithoutContinentInput>
    create: XOR<AreaTableCreateWithoutContinentInput, AreaTableUncheckedCreateWithoutContinentInput>
  }

  export type AreaTableUpdateWithWhereUniqueWithoutContinentInput = {
    where: AreaTableWhereUniqueInput
    data: XOR<AreaTableUpdateWithoutContinentInput, AreaTableUncheckedUpdateWithoutContinentInput>
  }

  export type AreaTableUpdateManyWithWhereWithoutContinentInput = {
    where: AreaTableScalarWhereInput
    data: XOR<AreaTableUpdateManyMutationInput, AreaTableUncheckedUpdateManyWithoutAreaTableInput>
  }

  export type AreaTableScalarWhereInput = {
    AND?: Enumerable<AreaTableScalarWhereInput>
    OR?: Enumerable<AreaTableScalarWhereInput>
    NOT?: Enumerable<AreaTableScalarWhereInput>
    id?: IntFilter | number
    continentId?: IntFilter | number
    parentAreaId?: IntFilter | number
    areaBit?: IntFilter | number
    flags?: IntFilter | number
    soundPreferenceId?: IntFilter | number
    underwaterSoundPreferenceId?: IntFilter | number
    soundAmbienceId?: IntFilter | number
    zoneMusicId?: IntFilter | number
    zoneIntroMusicId?: IntFilter | number
    explorationLevel?: IntFilter | number
    name_enUS?: StringFilter | string
    name_enGB?: StringFilter | string
    name_koKR?: StringFilter | string
    name_frFR?: StringFilter | string
    name_deDE?: StringFilter | string
    name_enCN?: StringFilter | string
    name_zhCN?: StringFilter | string
    name_enTW?: StringFilter | string
    nameMask?: IntFilter | number
    factionGroupMask?: IntFilter | number
    liquidTypeId?: IntFilter | number
    minElevation?: FloatFilter | number
    ambientMultiplier?: FloatFilter | number
    lightId?: IntFilter | number
  }

  export type WorldMapAreaUpsertWithWhereUniqueWithoutContinentInput = {
    where: WorldMapAreaWhereUniqueInput
    update: XOR<WorldMapAreaUpdateWithoutContinentInput, WorldMapAreaUncheckedUpdateWithoutContinentInput>
    create: XOR<WorldMapAreaCreateWithoutContinentInput, WorldMapAreaUncheckedCreateWithoutContinentInput>
  }

  export type WorldMapAreaUpdateWithWhereUniqueWithoutContinentInput = {
    where: WorldMapAreaWhereUniqueInput
    data: XOR<WorldMapAreaUpdateWithoutContinentInput, WorldMapAreaUncheckedUpdateWithoutContinentInput>
  }

  export type WorldMapAreaUpdateManyWithWhereWithoutContinentInput = {
    where: WorldMapAreaScalarWhereInput
    data: XOR<WorldMapAreaUpdateManyMutationInput, WorldMapAreaUncheckedUpdateManyWithoutWorldMapAreaInput>
  }

  export type WorldMapAreaScalarWhereInput = {
    AND?: Enumerable<WorldMapAreaScalarWhereInput>
    OR?: Enumerable<WorldMapAreaScalarWhereInput>
    NOT?: Enumerable<WorldMapAreaScalarWhereInput>
    id?: IntFilter | number
    continentId?: IntFilter | number
    areaId?: IntFilter | number
    name?: StringFilter | string
    locLeft?: FloatFilter | number
    locRight?: FloatFilter | number
    locTop?: FloatFilter | number
    locBottom?: FloatFilter | number
  }

  export type WorldMapContinentUpsertWithWhereUniqueWithoutContinentInput = {
    where: WorldMapContinentWhereUniqueInput
    update: XOR<WorldMapContinentUpdateWithoutContinentInput, WorldMapContinentUncheckedUpdateWithoutContinentInput>
    create: XOR<WorldMapContinentCreateWithoutContinentInput, WorldMapContinentUncheckedCreateWithoutContinentInput>
  }

  export type WorldMapContinentUpdateWithWhereUniqueWithoutContinentInput = {
    where: WorldMapContinentWhereUniqueInput
    data: XOR<WorldMapContinentUpdateWithoutContinentInput, WorldMapContinentUncheckedUpdateWithoutContinentInput>
  }

  export type WorldMapContinentUpdateManyWithWhereWithoutContinentInput = {
    where: WorldMapContinentScalarWhereInput
    data: XOR<WorldMapContinentUpdateManyMutationInput, WorldMapContinentUncheckedUpdateManyWithoutWorldMapContinentInput>
  }

  export type WorldMapContinentScalarWhereInput = {
    AND?: Enumerable<WorldMapContinentScalarWhereInput>
    OR?: Enumerable<WorldMapContinentScalarWhereInput>
    NOT?: Enumerable<WorldMapContinentScalarWhereInput>
    id?: IntFilter | number
    continentId?: IntFilter | number
    left?: IntFilter | number
    right?: IntFilter | number
    top?: IntFilter | number
    bottom?: IntFilter | number
    offsetX?: FloatFilter | number
    offsetY?: FloatFilter | number
    scale?: FloatFilter | number
    taxiMinX?: IntFilter | number
    taxiMinY?: IntFilter | number
    taxiMaxX?: IntFilter | number
    taxiMaxY?: IntFilter | number
  }

  export type AreaTriggerUpsertWithWhereUniqueWithoutContinentInput = {
    where: AreaTriggerWhereUniqueInput
    update: XOR<AreaTriggerUpdateWithoutContinentInput, AreaTriggerUncheckedUpdateWithoutContinentInput>
    create: XOR<AreaTriggerCreateWithoutContinentInput, AreaTriggerUncheckedCreateWithoutContinentInput>
  }

  export type AreaTriggerUpdateWithWhereUniqueWithoutContinentInput = {
    where: AreaTriggerWhereUniqueInput
    data: XOR<AreaTriggerUpdateWithoutContinentInput, AreaTriggerUncheckedUpdateWithoutContinentInput>
  }

  export type AreaTriggerUpdateManyWithWhereWithoutContinentInput = {
    where: AreaTriggerScalarWhereInput
    data: XOR<AreaTriggerUpdateManyMutationInput, AreaTriggerUncheckedUpdateManyWithoutAreaTriggerInput>
  }

  export type AreaTriggerScalarWhereInput = {
    AND?: Enumerable<AreaTriggerScalarWhereInput>
    OR?: Enumerable<AreaTriggerScalarWhereInput>
    NOT?: Enumerable<AreaTriggerScalarWhereInput>
    id?: IntFilter | number
    continentId?: IntFilter | number
    x?: FloatFilter | number
    y?: FloatFilter | number
    z?: FloatFilter | number
    radius?: FloatFilter | number
    boxLength?: FloatFilter | number
    boxWidth?: FloatFilter | number
    boxHeight?: FloatFilter | number
    boxYaw?: FloatFilter | number
  }

  export type LightUpsertWithWhereUniqueWithoutContinentInput = {
    where: LightWhereUniqueInput
    update: XOR<LightUpdateWithoutContinentInput, LightUncheckedUpdateWithoutContinentInput>
    create: XOR<LightCreateWithoutContinentInput, LightUncheckedCreateWithoutContinentInput>
  }

  export type LightUpdateWithWhereUniqueWithoutContinentInput = {
    where: LightWhereUniqueInput
    data: XOR<LightUpdateWithoutContinentInput, LightUncheckedUpdateWithoutContinentInput>
  }

  export type LightUpdateManyWithWhereWithoutContinentInput = {
    where: LightScalarWhereInput
    data: XOR<LightUpdateManyMutationInput, LightUncheckedUpdateManyWithoutLightInput>
  }

  export type LightScalarWhereInput = {
    AND?: Enumerable<LightScalarWhereInput>
    OR?: Enumerable<LightScalarWhereInput>
    NOT?: Enumerable<LightScalarWhereInput>
    id?: IntFilter | number
    continentId?: IntFilter | number
    x?: FloatFilter | number
    y?: FloatFilter | number
    z?: FloatFilter | number
    falloffStart?: FloatFilter | number
    falloffEnd?: FloatFilter | number
    paramStandardId?: IntFilter | number
    paramUnderwaterId?: IntFilter | number
    paramSunsetId?: IntFilter | number
    paramOtherId?: IntFilter | number
    paramDeathId?: IntFilter | number
  }

  export type ContinentCreateWithoutAreaPOIInput = {
    id: number
    name: string
    AreaTable?: AreaTableCreateNestedManyWithoutContinentInput
    WorldMapArea?: WorldMapAreaCreateNestedManyWithoutContinentInput
    WorldMapContinent?: WorldMapContinentCreateNestedManyWithoutContinentInput
    AreaTrigger?: AreaTriggerCreateNestedManyWithoutContinentInput
    Light?: LightCreateNestedManyWithoutContinentInput
  }

  export type ContinentUncheckedCreateWithoutAreaPOIInput = {
    id: number
    name: string
    AreaTable?: AreaTableUncheckedCreateNestedManyWithoutContinentInput
    WorldMapArea?: WorldMapAreaUncheckedCreateNestedManyWithoutContinentInput
    WorldMapContinent?: WorldMapContinentUncheckedCreateNestedManyWithoutContinentInput
    AreaTrigger?: AreaTriggerUncheckedCreateNestedManyWithoutContinentInput
    Light?: LightUncheckedCreateNestedManyWithoutContinentInput
  }

  export type ContinentCreateOrConnectWithoutAreaPOIInput = {
    where: ContinentWhereUniqueInput
    create: XOR<ContinentCreateWithoutAreaPOIInput, ContinentUncheckedCreateWithoutAreaPOIInput>
  }

  export type AreaTableCreateWithoutAreaPOIInput = {
    id: number
    continent: ContinentCreateNestedOneWithoutAreaTableInput
    parentArea: AreaTableCreateNestedOneWithoutChildAreasInput
    areaBit: number
    flags: number
    soundPreferenceId: number
    underwaterSoundPreferenceId: number
    soundAmbienceId: number
    zoneMusicId: number
    zoneIntroMusicId: number
    explorationLevel: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
    factionGroupMask: number
    liquidTypeId: number
    minElevation: number
    ambientMultiplier: number
    light: LightCreateNestedOneWithoutAreaTableInput
    ChildAreas?: AreaTableCreateNestedManyWithoutParentAreaInput
    WMOAreaTable?: WMOAreaTableCreateNestedManyWithoutAreaTableInput
    WorldMapArea?: WorldMapAreaCreateNestedManyWithoutAreaTableInput
    WorldMapOverlay1?: WorldMapOverlayCreateNestedManyWithoutArea_1Input
    WorldMapOverlay2?: WorldMapOverlayCreateNestedManyWithoutArea_2Input
    WorldMapOverlay3?: WorldMapOverlayCreateNestedManyWithoutArea_3Input
    WorldMapOverlay4?: WorldMapOverlayCreateNestedManyWithoutArea_4Input
  }

  export type AreaTableUncheckedCreateWithoutAreaPOIInput = {
    id: number
    continentId: number
    parentAreaId: number
    areaBit: number
    flags: number
    soundPreferenceId: number
    underwaterSoundPreferenceId: number
    soundAmbienceId: number
    zoneMusicId: number
    zoneIntroMusicId: number
    explorationLevel: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
    factionGroupMask: number
    liquidTypeId: number
    minElevation: number
    ambientMultiplier: number
    lightId: number
    ChildAreas?: AreaTableUncheckedCreateNestedManyWithoutParentAreaInput
    WMOAreaTable?: WMOAreaTableUncheckedCreateNestedManyWithoutAreaTableInput
    WorldMapArea?: WorldMapAreaUncheckedCreateNestedManyWithoutAreaTableInput
    WorldMapOverlay1?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_1Input
    WorldMapOverlay2?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_2Input
    WorldMapOverlay3?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_3Input
    WorldMapOverlay4?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_4Input
  }

  export type AreaTableCreateOrConnectWithoutAreaPOIInput = {
    where: AreaTableWhereUniqueInput
    create: XOR<AreaTableCreateWithoutAreaPOIInput, AreaTableUncheckedCreateWithoutAreaPOIInput>
  }

  export type ContinentUpsertWithoutAreaPOIInput = {
    update: XOR<ContinentUpdateWithoutAreaPOIInput, ContinentUncheckedUpdateWithoutAreaPOIInput>
    create: XOR<ContinentCreateWithoutAreaPOIInput, ContinentUncheckedCreateWithoutAreaPOIInput>
  }

  export type ContinentUpdateWithoutAreaPOIInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    AreaTable?: AreaTableUpdateManyWithoutContinentNestedInput
    WorldMapArea?: WorldMapAreaUpdateManyWithoutContinentNestedInput
    WorldMapContinent?: WorldMapContinentUpdateManyWithoutContinentNestedInput
    AreaTrigger?: AreaTriggerUpdateManyWithoutContinentNestedInput
    Light?: LightUpdateManyWithoutContinentNestedInput
  }

  export type ContinentUncheckedUpdateWithoutAreaPOIInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    AreaTable?: AreaTableUncheckedUpdateManyWithoutContinentNestedInput
    WorldMapArea?: WorldMapAreaUncheckedUpdateManyWithoutContinentNestedInput
    WorldMapContinent?: WorldMapContinentUncheckedUpdateManyWithoutContinentNestedInput
    AreaTrigger?: AreaTriggerUncheckedUpdateManyWithoutContinentNestedInput
    Light?: LightUncheckedUpdateManyWithoutContinentNestedInput
  }

  export type AreaTableUpsertWithoutAreaPOIInput = {
    update: XOR<AreaTableUpdateWithoutAreaPOIInput, AreaTableUncheckedUpdateWithoutAreaPOIInput>
    create: XOR<AreaTableCreateWithoutAreaPOIInput, AreaTableUncheckedCreateWithoutAreaPOIInput>
  }

  export type AreaTableUpdateWithoutAreaPOIInput = {
    id?: IntFieldUpdateOperationsInput | number
    continent?: ContinentUpdateOneRequiredWithoutAreaTableNestedInput
    parentArea?: AreaTableUpdateOneRequiredWithoutChildAreasNestedInput
    areaBit?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    soundPreferenceId?: IntFieldUpdateOperationsInput | number
    underwaterSoundPreferenceId?: IntFieldUpdateOperationsInput | number
    soundAmbienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    zoneIntroMusicId?: IntFieldUpdateOperationsInput | number
    explorationLevel?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    factionGroupMask?: IntFieldUpdateOperationsInput | number
    liquidTypeId?: IntFieldUpdateOperationsInput | number
    minElevation?: FloatFieldUpdateOperationsInput | number
    ambientMultiplier?: FloatFieldUpdateOperationsInput | number
    light?: LightUpdateOneRequiredWithoutAreaTableNestedInput
    ChildAreas?: AreaTableUpdateManyWithoutParentAreaNestedInput
    WMOAreaTable?: WMOAreaTableUpdateManyWithoutAreaTableNestedInput
    WorldMapArea?: WorldMapAreaUpdateManyWithoutAreaTableNestedInput
    WorldMapOverlay1?: WorldMapOverlayUpdateManyWithoutArea_1NestedInput
    WorldMapOverlay2?: WorldMapOverlayUpdateManyWithoutArea_2NestedInput
    WorldMapOverlay3?: WorldMapOverlayUpdateManyWithoutArea_3NestedInput
    WorldMapOverlay4?: WorldMapOverlayUpdateManyWithoutArea_4NestedInput
  }

  export type AreaTableUncheckedUpdateWithoutAreaPOIInput = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    parentAreaId?: IntFieldUpdateOperationsInput | number
    areaBit?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    soundPreferenceId?: IntFieldUpdateOperationsInput | number
    underwaterSoundPreferenceId?: IntFieldUpdateOperationsInput | number
    soundAmbienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    zoneIntroMusicId?: IntFieldUpdateOperationsInput | number
    explorationLevel?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    factionGroupMask?: IntFieldUpdateOperationsInput | number
    liquidTypeId?: IntFieldUpdateOperationsInput | number
    minElevation?: FloatFieldUpdateOperationsInput | number
    ambientMultiplier?: FloatFieldUpdateOperationsInput | number
    lightId?: IntFieldUpdateOperationsInput | number
    ChildAreas?: AreaTableUncheckedUpdateManyWithoutParentAreaNestedInput
    WMOAreaTable?: WMOAreaTableUncheckedUpdateManyWithoutAreaTableNestedInput
    WorldMapArea?: WorldMapAreaUncheckedUpdateManyWithoutAreaTableNestedInput
    WorldMapOverlay1?: WorldMapOverlayUncheckedUpdateManyWithoutArea_1NestedInput
    WorldMapOverlay2?: WorldMapOverlayUncheckedUpdateManyWithoutArea_2NestedInput
    WorldMapOverlay3?: WorldMapOverlayUncheckedUpdateManyWithoutArea_3NestedInput
    WorldMapOverlay4?: WorldMapOverlayUncheckedUpdateManyWithoutArea_4NestedInput
  }

  export type ContinentCreateWithoutAreaTableInput = {
    id: number
    name: string
    AreaPOI?: AreaPOICreateNestedManyWithoutContinentInput
    WorldMapArea?: WorldMapAreaCreateNestedManyWithoutContinentInput
    WorldMapContinent?: WorldMapContinentCreateNestedManyWithoutContinentInput
    AreaTrigger?: AreaTriggerCreateNestedManyWithoutContinentInput
    Light?: LightCreateNestedManyWithoutContinentInput
  }

  export type ContinentUncheckedCreateWithoutAreaTableInput = {
    id: number
    name: string
    AreaPOI?: AreaPOIUncheckedCreateNestedManyWithoutContinentInput
    WorldMapArea?: WorldMapAreaUncheckedCreateNestedManyWithoutContinentInput
    WorldMapContinent?: WorldMapContinentUncheckedCreateNestedManyWithoutContinentInput
    AreaTrigger?: AreaTriggerUncheckedCreateNestedManyWithoutContinentInput
    Light?: LightUncheckedCreateNestedManyWithoutContinentInput
  }

  export type ContinentCreateOrConnectWithoutAreaTableInput = {
    where: ContinentWhereUniqueInput
    create: XOR<ContinentCreateWithoutAreaTableInput, ContinentUncheckedCreateWithoutAreaTableInput>
  }

  export type AreaTableCreateWithoutChildAreasInput = {
    id: number
    continent: ContinentCreateNestedOneWithoutAreaTableInput
    parentArea: AreaTableCreateNestedOneWithoutChildAreasInput
    areaBit: number
    flags: number
    soundPreferenceId: number
    underwaterSoundPreferenceId: number
    soundAmbienceId: number
    zoneMusicId: number
    zoneIntroMusicId: number
    explorationLevel: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
    factionGroupMask: number
    liquidTypeId: number
    minElevation: number
    ambientMultiplier: number
    light: LightCreateNestedOneWithoutAreaTableInput
    AreaPOI?: AreaPOICreateNestedManyWithoutAreaInput
    WMOAreaTable?: WMOAreaTableCreateNestedManyWithoutAreaTableInput
    WorldMapArea?: WorldMapAreaCreateNestedManyWithoutAreaTableInput
    WorldMapOverlay1?: WorldMapOverlayCreateNestedManyWithoutArea_1Input
    WorldMapOverlay2?: WorldMapOverlayCreateNestedManyWithoutArea_2Input
    WorldMapOverlay3?: WorldMapOverlayCreateNestedManyWithoutArea_3Input
    WorldMapOverlay4?: WorldMapOverlayCreateNestedManyWithoutArea_4Input
  }

  export type AreaTableUncheckedCreateWithoutChildAreasInput = {
    id: number
    continentId: number
    parentAreaId: number
    areaBit: number
    flags: number
    soundPreferenceId: number
    underwaterSoundPreferenceId: number
    soundAmbienceId: number
    zoneMusicId: number
    zoneIntroMusicId: number
    explorationLevel: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
    factionGroupMask: number
    liquidTypeId: number
    minElevation: number
    ambientMultiplier: number
    lightId: number
    AreaPOI?: AreaPOIUncheckedCreateNestedManyWithoutAreaInput
    WMOAreaTable?: WMOAreaTableUncheckedCreateNestedManyWithoutAreaTableInput
    WorldMapArea?: WorldMapAreaUncheckedCreateNestedManyWithoutAreaTableInput
    WorldMapOverlay1?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_1Input
    WorldMapOverlay2?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_2Input
    WorldMapOverlay3?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_3Input
    WorldMapOverlay4?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_4Input
  }

  export type AreaTableCreateOrConnectWithoutChildAreasInput = {
    where: AreaTableWhereUniqueInput
    create: XOR<AreaTableCreateWithoutChildAreasInput, AreaTableUncheckedCreateWithoutChildAreasInput>
  }

  export type LightCreateWithoutAreaTableInput = {
    id: number
    continent: ContinentCreateNestedOneWithoutLightInput
    x: number
    y: number
    z: number
    falloffStart: number
    falloffEnd: number
    paramStandard: LightParamsCreateNestedOneWithoutStandatrdLightInput
    paramUnderwater: LightParamsCreateNestedOneWithoutUnderwaterLightInput
    paramSunset: LightParamsCreateNestedOneWithoutSunsetLightInput
    paramOther: LightParamsCreateNestedOneWithoutOtherLightInput
    paramDeath: LightParamsCreateNestedOneWithoutDeathLightInput
  }

  export type LightUncheckedCreateWithoutAreaTableInput = {
    id: number
    continentId: number
    x: number
    y: number
    z: number
    falloffStart: number
    falloffEnd: number
    paramStandardId: number
    paramUnderwaterId: number
    paramSunsetId: number
    paramOtherId: number
    paramDeathId: number
  }

  export type LightCreateOrConnectWithoutAreaTableInput = {
    where: LightWhereUniqueInput
    create: XOR<LightCreateWithoutAreaTableInput, LightUncheckedCreateWithoutAreaTableInput>
  }

  export type AreaTableCreateWithoutParentAreaInput = {
    id: number
    continent: ContinentCreateNestedOneWithoutAreaTableInput
    areaBit: number
    flags: number
    soundPreferenceId: number
    underwaterSoundPreferenceId: number
    soundAmbienceId: number
    zoneMusicId: number
    zoneIntroMusicId: number
    explorationLevel: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
    factionGroupMask: number
    liquidTypeId: number
    minElevation: number
    ambientMultiplier: number
    light: LightCreateNestedOneWithoutAreaTableInput
    ChildAreas?: AreaTableCreateNestedManyWithoutParentAreaInput
    AreaPOI?: AreaPOICreateNestedManyWithoutAreaInput
    WMOAreaTable?: WMOAreaTableCreateNestedManyWithoutAreaTableInput
    WorldMapArea?: WorldMapAreaCreateNestedManyWithoutAreaTableInput
    WorldMapOverlay1?: WorldMapOverlayCreateNestedManyWithoutArea_1Input
    WorldMapOverlay2?: WorldMapOverlayCreateNestedManyWithoutArea_2Input
    WorldMapOverlay3?: WorldMapOverlayCreateNestedManyWithoutArea_3Input
    WorldMapOverlay4?: WorldMapOverlayCreateNestedManyWithoutArea_4Input
  }

  export type AreaTableUncheckedCreateWithoutParentAreaInput = {
    id: number
    continentId: number
    areaBit: number
    flags: number
    soundPreferenceId: number
    underwaterSoundPreferenceId: number
    soundAmbienceId: number
    zoneMusicId: number
    zoneIntroMusicId: number
    explorationLevel: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
    factionGroupMask: number
    liquidTypeId: number
    minElevation: number
    ambientMultiplier: number
    lightId: number
    ChildAreas?: AreaTableUncheckedCreateNestedManyWithoutParentAreaInput
    AreaPOI?: AreaPOIUncheckedCreateNestedManyWithoutAreaInput
    WMOAreaTable?: WMOAreaTableUncheckedCreateNestedManyWithoutAreaTableInput
    WorldMapArea?: WorldMapAreaUncheckedCreateNestedManyWithoutAreaTableInput
    WorldMapOverlay1?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_1Input
    WorldMapOverlay2?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_2Input
    WorldMapOverlay3?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_3Input
    WorldMapOverlay4?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_4Input
  }

  export type AreaTableCreateOrConnectWithoutParentAreaInput = {
    where: AreaTableWhereUniqueInput
    create: XOR<AreaTableCreateWithoutParentAreaInput, AreaTableUncheckedCreateWithoutParentAreaInput>
  }

  export type AreaPOICreateWithoutAreaInput = {
    id: number
    importance: number
    icon: number
    factionId: number
    x: number
    y: number
    z: number
    continent: ContinentCreateNestedOneWithoutAreaPOIInput
    flags: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
    description_enUS: string
    description_enGB: string
    description_koKR: string
    description_frFR: string
    description_deDE: string
    description_enCN: string
    description_zhCN: string
    description_enTW: string
    descriptionMask: number
    worldStateId: number
  }

  export type AreaPOIUncheckedCreateWithoutAreaInput = {
    id: number
    importance: number
    icon: number
    factionId: number
    x: number
    y: number
    z: number
    continentId: number
    flags: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
    description_enUS: string
    description_enGB: string
    description_koKR: string
    description_frFR: string
    description_deDE: string
    description_enCN: string
    description_zhCN: string
    description_enTW: string
    descriptionMask: number
    worldStateId: number
  }

  export type AreaPOICreateOrConnectWithoutAreaInput = {
    where: AreaPOIWhereUniqueInput
    create: XOR<AreaPOICreateWithoutAreaInput, AreaPOIUncheckedCreateWithoutAreaInput>
  }

  export type WMOAreaTableCreateWithoutAreaTableInput = {
    id: number
    wmoId: number
    nameSetId: number
    wmoGroupId: number
    soundProviderId: number
    underwaterSoundProviderId: number
    ambienceId: number
    zoneMusicId: number
    introSoundId: number
    flags: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
  }

  export type WMOAreaTableUncheckedCreateWithoutAreaTableInput = {
    id: number
    wmoId: number
    nameSetId: number
    wmoGroupId: number
    soundProviderId: number
    underwaterSoundProviderId: number
    ambienceId: number
    zoneMusicId: number
    introSoundId: number
    flags: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
  }

  export type WMOAreaTableCreateOrConnectWithoutAreaTableInput = {
    where: WMOAreaTableWhereUniqueInput
    create: XOR<WMOAreaTableCreateWithoutAreaTableInput, WMOAreaTableUncheckedCreateWithoutAreaTableInput>
  }

  export type WorldMapAreaCreateWithoutAreaTableInput = {
    continent: ContinentCreateNestedOneWithoutWorldMapAreaInput
    name: string
    locLeft: number
    locRight: number
    locTop: number
    locBottom: number
    WorldMapOverlay?: WorldMapOverlayCreateNestedManyWithoutMapAreaInput
  }

  export type WorldMapAreaUncheckedCreateWithoutAreaTableInput = {
    id?: number
    continentId: number
    name: string
    locLeft: number
    locRight: number
    locTop: number
    locBottom: number
    WorldMapOverlay?: WorldMapOverlayUncheckedCreateNestedManyWithoutMapAreaInput
  }

  export type WorldMapAreaCreateOrConnectWithoutAreaTableInput = {
    where: WorldMapAreaWhereUniqueInput
    create: XOR<WorldMapAreaCreateWithoutAreaTableInput, WorldMapAreaUncheckedCreateWithoutAreaTableInput>
  }

  export type WorldMapOverlayCreateWithoutArea_1Input = {
    id: number
    mapArea: WorldMapAreaCreateNestedOneWithoutWorldMapOverlayInput
    area_2: AreaTableCreateNestedOneWithoutWorldMapOverlay2Input
    area_3: AreaTableCreateNestedOneWithoutWorldMapOverlay3Input
    area_4: AreaTableCreateNestedOneWithoutWorldMapOverlay4Input
    mapPointX: number
    mapPointY: number
    texture: string
    textureWidth: number
    textureHeight: number
    offsetX: number
    offsetY: number
    hitRectTop: number
    hitRectLeft: number
    hitRectBottom: number
    hitRectRight: number
  }

  export type WorldMapOverlayUncheckedCreateWithoutArea_1Input = {
    id: number
    worldMapAreaId: number
    areaId_2: number
    areaId_3: number
    areaId_4: number
    mapPointX: number
    mapPointY: number
    texture: string
    textureWidth: number
    textureHeight: number
    offsetX: number
    offsetY: number
    hitRectTop: number
    hitRectLeft: number
    hitRectBottom: number
    hitRectRight: number
  }

  export type WorldMapOverlayCreateOrConnectWithoutArea_1Input = {
    where: WorldMapOverlayWhereUniqueInput
    create: XOR<WorldMapOverlayCreateWithoutArea_1Input, WorldMapOverlayUncheckedCreateWithoutArea_1Input>
  }

  export type WorldMapOverlayCreateWithoutArea_2Input = {
    id: number
    mapArea: WorldMapAreaCreateNestedOneWithoutWorldMapOverlayInput
    area_1: AreaTableCreateNestedOneWithoutWorldMapOverlay1Input
    area_3: AreaTableCreateNestedOneWithoutWorldMapOverlay3Input
    area_4: AreaTableCreateNestedOneWithoutWorldMapOverlay4Input
    mapPointX: number
    mapPointY: number
    texture: string
    textureWidth: number
    textureHeight: number
    offsetX: number
    offsetY: number
    hitRectTop: number
    hitRectLeft: number
    hitRectBottom: number
    hitRectRight: number
  }

  export type WorldMapOverlayUncheckedCreateWithoutArea_2Input = {
    id: number
    worldMapAreaId: number
    areaId_1: number
    areaId_3: number
    areaId_4: number
    mapPointX: number
    mapPointY: number
    texture: string
    textureWidth: number
    textureHeight: number
    offsetX: number
    offsetY: number
    hitRectTop: number
    hitRectLeft: number
    hitRectBottom: number
    hitRectRight: number
  }

  export type WorldMapOverlayCreateOrConnectWithoutArea_2Input = {
    where: WorldMapOverlayWhereUniqueInput
    create: XOR<WorldMapOverlayCreateWithoutArea_2Input, WorldMapOverlayUncheckedCreateWithoutArea_2Input>
  }

  export type WorldMapOverlayCreateWithoutArea_3Input = {
    id: number
    mapArea: WorldMapAreaCreateNestedOneWithoutWorldMapOverlayInput
    area_1: AreaTableCreateNestedOneWithoutWorldMapOverlay1Input
    area_2: AreaTableCreateNestedOneWithoutWorldMapOverlay2Input
    area_4: AreaTableCreateNestedOneWithoutWorldMapOverlay4Input
    mapPointX: number
    mapPointY: number
    texture: string
    textureWidth: number
    textureHeight: number
    offsetX: number
    offsetY: number
    hitRectTop: number
    hitRectLeft: number
    hitRectBottom: number
    hitRectRight: number
  }

  export type WorldMapOverlayUncheckedCreateWithoutArea_3Input = {
    id: number
    worldMapAreaId: number
    areaId_1: number
    areaId_2: number
    areaId_4: number
    mapPointX: number
    mapPointY: number
    texture: string
    textureWidth: number
    textureHeight: number
    offsetX: number
    offsetY: number
    hitRectTop: number
    hitRectLeft: number
    hitRectBottom: number
    hitRectRight: number
  }

  export type WorldMapOverlayCreateOrConnectWithoutArea_3Input = {
    where: WorldMapOverlayWhereUniqueInput
    create: XOR<WorldMapOverlayCreateWithoutArea_3Input, WorldMapOverlayUncheckedCreateWithoutArea_3Input>
  }

  export type WorldMapOverlayCreateWithoutArea_4Input = {
    id: number
    mapArea: WorldMapAreaCreateNestedOneWithoutWorldMapOverlayInput
    area_1: AreaTableCreateNestedOneWithoutWorldMapOverlay1Input
    area_2: AreaTableCreateNestedOneWithoutWorldMapOverlay2Input
    area_3: AreaTableCreateNestedOneWithoutWorldMapOverlay3Input
    mapPointX: number
    mapPointY: number
    texture: string
    textureWidth: number
    textureHeight: number
    offsetX: number
    offsetY: number
    hitRectTop: number
    hitRectLeft: number
    hitRectBottom: number
    hitRectRight: number
  }

  export type WorldMapOverlayUncheckedCreateWithoutArea_4Input = {
    id: number
    worldMapAreaId: number
    areaId_1: number
    areaId_2: number
    areaId_3: number
    mapPointX: number
    mapPointY: number
    texture: string
    textureWidth: number
    textureHeight: number
    offsetX: number
    offsetY: number
    hitRectTop: number
    hitRectLeft: number
    hitRectBottom: number
    hitRectRight: number
  }

  export type WorldMapOverlayCreateOrConnectWithoutArea_4Input = {
    where: WorldMapOverlayWhereUniqueInput
    create: XOR<WorldMapOverlayCreateWithoutArea_4Input, WorldMapOverlayUncheckedCreateWithoutArea_4Input>
  }

  export type ContinentUpsertWithoutAreaTableInput = {
    update: XOR<ContinentUpdateWithoutAreaTableInput, ContinentUncheckedUpdateWithoutAreaTableInput>
    create: XOR<ContinentCreateWithoutAreaTableInput, ContinentUncheckedCreateWithoutAreaTableInput>
  }

  export type ContinentUpdateWithoutAreaTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    AreaPOI?: AreaPOIUpdateManyWithoutContinentNestedInput
    WorldMapArea?: WorldMapAreaUpdateManyWithoutContinentNestedInput
    WorldMapContinent?: WorldMapContinentUpdateManyWithoutContinentNestedInput
    AreaTrigger?: AreaTriggerUpdateManyWithoutContinentNestedInput
    Light?: LightUpdateManyWithoutContinentNestedInput
  }

  export type ContinentUncheckedUpdateWithoutAreaTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    AreaPOI?: AreaPOIUncheckedUpdateManyWithoutContinentNestedInput
    WorldMapArea?: WorldMapAreaUncheckedUpdateManyWithoutContinentNestedInput
    WorldMapContinent?: WorldMapContinentUncheckedUpdateManyWithoutContinentNestedInput
    AreaTrigger?: AreaTriggerUncheckedUpdateManyWithoutContinentNestedInput
    Light?: LightUncheckedUpdateManyWithoutContinentNestedInput
  }

  export type AreaTableUpsertWithoutChildAreasInput = {
    update: XOR<AreaTableUpdateWithoutChildAreasInput, AreaTableUncheckedUpdateWithoutChildAreasInput>
    create: XOR<AreaTableCreateWithoutChildAreasInput, AreaTableUncheckedCreateWithoutChildAreasInput>
  }

  export type AreaTableUpdateWithoutChildAreasInput = {
    id?: IntFieldUpdateOperationsInput | number
    continent?: ContinentUpdateOneRequiredWithoutAreaTableNestedInput
    parentArea?: AreaTableUpdateOneRequiredWithoutChildAreasNestedInput
    areaBit?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    soundPreferenceId?: IntFieldUpdateOperationsInput | number
    underwaterSoundPreferenceId?: IntFieldUpdateOperationsInput | number
    soundAmbienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    zoneIntroMusicId?: IntFieldUpdateOperationsInput | number
    explorationLevel?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    factionGroupMask?: IntFieldUpdateOperationsInput | number
    liquidTypeId?: IntFieldUpdateOperationsInput | number
    minElevation?: FloatFieldUpdateOperationsInput | number
    ambientMultiplier?: FloatFieldUpdateOperationsInput | number
    light?: LightUpdateOneRequiredWithoutAreaTableNestedInput
    AreaPOI?: AreaPOIUpdateManyWithoutAreaNestedInput
    WMOAreaTable?: WMOAreaTableUpdateManyWithoutAreaTableNestedInput
    WorldMapArea?: WorldMapAreaUpdateManyWithoutAreaTableNestedInput
    WorldMapOverlay1?: WorldMapOverlayUpdateManyWithoutArea_1NestedInput
    WorldMapOverlay2?: WorldMapOverlayUpdateManyWithoutArea_2NestedInput
    WorldMapOverlay3?: WorldMapOverlayUpdateManyWithoutArea_3NestedInput
    WorldMapOverlay4?: WorldMapOverlayUpdateManyWithoutArea_4NestedInput
  }

  export type AreaTableUncheckedUpdateWithoutChildAreasInput = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    parentAreaId?: IntFieldUpdateOperationsInput | number
    areaBit?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    soundPreferenceId?: IntFieldUpdateOperationsInput | number
    underwaterSoundPreferenceId?: IntFieldUpdateOperationsInput | number
    soundAmbienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    zoneIntroMusicId?: IntFieldUpdateOperationsInput | number
    explorationLevel?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    factionGroupMask?: IntFieldUpdateOperationsInput | number
    liquidTypeId?: IntFieldUpdateOperationsInput | number
    minElevation?: FloatFieldUpdateOperationsInput | number
    ambientMultiplier?: FloatFieldUpdateOperationsInput | number
    lightId?: IntFieldUpdateOperationsInput | number
    AreaPOI?: AreaPOIUncheckedUpdateManyWithoutAreaNestedInput
    WMOAreaTable?: WMOAreaTableUncheckedUpdateManyWithoutAreaTableNestedInput
    WorldMapArea?: WorldMapAreaUncheckedUpdateManyWithoutAreaTableNestedInput
    WorldMapOverlay1?: WorldMapOverlayUncheckedUpdateManyWithoutArea_1NestedInput
    WorldMapOverlay2?: WorldMapOverlayUncheckedUpdateManyWithoutArea_2NestedInput
    WorldMapOverlay3?: WorldMapOverlayUncheckedUpdateManyWithoutArea_3NestedInput
    WorldMapOverlay4?: WorldMapOverlayUncheckedUpdateManyWithoutArea_4NestedInput
  }

  export type LightUpsertWithoutAreaTableInput = {
    update: XOR<LightUpdateWithoutAreaTableInput, LightUncheckedUpdateWithoutAreaTableInput>
    create: XOR<LightCreateWithoutAreaTableInput, LightUncheckedCreateWithoutAreaTableInput>
  }

  export type LightUpdateWithoutAreaTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    continent?: ContinentUpdateOneRequiredWithoutLightNestedInput
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    falloffStart?: FloatFieldUpdateOperationsInput | number
    falloffEnd?: FloatFieldUpdateOperationsInput | number
    paramStandard?: LightParamsUpdateOneRequiredWithoutStandatrdLightNestedInput
    paramUnderwater?: LightParamsUpdateOneRequiredWithoutUnderwaterLightNestedInput
    paramSunset?: LightParamsUpdateOneRequiredWithoutSunsetLightNestedInput
    paramOther?: LightParamsUpdateOneRequiredWithoutOtherLightNestedInput
    paramDeath?: LightParamsUpdateOneRequiredWithoutDeathLightNestedInput
  }

  export type LightUncheckedUpdateWithoutAreaTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    falloffStart?: FloatFieldUpdateOperationsInput | number
    falloffEnd?: FloatFieldUpdateOperationsInput | number
    paramStandardId?: IntFieldUpdateOperationsInput | number
    paramUnderwaterId?: IntFieldUpdateOperationsInput | number
    paramSunsetId?: IntFieldUpdateOperationsInput | number
    paramOtherId?: IntFieldUpdateOperationsInput | number
    paramDeathId?: IntFieldUpdateOperationsInput | number
  }

  export type AreaTableUpsertWithWhereUniqueWithoutParentAreaInput = {
    where: AreaTableWhereUniqueInput
    update: XOR<AreaTableUpdateWithoutParentAreaInput, AreaTableUncheckedUpdateWithoutParentAreaInput>
    create: XOR<AreaTableCreateWithoutParentAreaInput, AreaTableUncheckedCreateWithoutParentAreaInput>
  }

  export type AreaTableUpdateWithWhereUniqueWithoutParentAreaInput = {
    where: AreaTableWhereUniqueInput
    data: XOR<AreaTableUpdateWithoutParentAreaInput, AreaTableUncheckedUpdateWithoutParentAreaInput>
  }

  export type AreaTableUpdateManyWithWhereWithoutParentAreaInput = {
    where: AreaTableScalarWhereInput
    data: XOR<AreaTableUpdateManyMutationInput, AreaTableUncheckedUpdateManyWithoutChildAreasInput>
  }

  export type AreaPOIUpsertWithWhereUniqueWithoutAreaInput = {
    where: AreaPOIWhereUniqueInput
    update: XOR<AreaPOIUpdateWithoutAreaInput, AreaPOIUncheckedUpdateWithoutAreaInput>
    create: XOR<AreaPOICreateWithoutAreaInput, AreaPOIUncheckedCreateWithoutAreaInput>
  }

  export type AreaPOIUpdateWithWhereUniqueWithoutAreaInput = {
    where: AreaPOIWhereUniqueInput
    data: XOR<AreaPOIUpdateWithoutAreaInput, AreaPOIUncheckedUpdateWithoutAreaInput>
  }

  export type AreaPOIUpdateManyWithWhereWithoutAreaInput = {
    where: AreaPOIScalarWhereInput
    data: XOR<AreaPOIUpdateManyMutationInput, AreaPOIUncheckedUpdateManyWithoutAreaPOIInput>
  }

  export type WMOAreaTableUpsertWithWhereUniqueWithoutAreaTableInput = {
    where: WMOAreaTableWhereUniqueInput
    update: XOR<WMOAreaTableUpdateWithoutAreaTableInput, WMOAreaTableUncheckedUpdateWithoutAreaTableInput>
    create: XOR<WMOAreaTableCreateWithoutAreaTableInput, WMOAreaTableUncheckedCreateWithoutAreaTableInput>
  }

  export type WMOAreaTableUpdateWithWhereUniqueWithoutAreaTableInput = {
    where: WMOAreaTableWhereUniqueInput
    data: XOR<WMOAreaTableUpdateWithoutAreaTableInput, WMOAreaTableUncheckedUpdateWithoutAreaTableInput>
  }

  export type WMOAreaTableUpdateManyWithWhereWithoutAreaTableInput = {
    where: WMOAreaTableScalarWhereInput
    data: XOR<WMOAreaTableUpdateManyMutationInput, WMOAreaTableUncheckedUpdateManyWithoutWMOAreaTableInput>
  }

  export type WMOAreaTableScalarWhereInput = {
    AND?: Enumerable<WMOAreaTableScalarWhereInput>
    OR?: Enumerable<WMOAreaTableScalarWhereInput>
    NOT?: Enumerable<WMOAreaTableScalarWhereInput>
    id?: IntFilter | number
    wmoId?: IntFilter | number
    nameSetId?: IntFilter | number
    wmoGroupId?: IntFilter | number
    soundProviderId?: IntFilter | number
    underwaterSoundProviderId?: IntFilter | number
    ambienceId?: IntFilter | number
    zoneMusicId?: IntFilter | number
    introSoundId?: IntFilter | number
    flags?: IntFilter | number
    areaTableId?: IntFilter | number
    name_enUS?: StringFilter | string
    name_enGB?: StringFilter | string
    name_koKR?: StringFilter | string
    name_frFR?: StringFilter | string
    name_deDE?: StringFilter | string
    name_enCN?: StringFilter | string
    name_zhCN?: StringFilter | string
    name_enTW?: StringFilter | string
    nameMask?: IntFilter | number
  }

  export type WorldMapAreaUpsertWithWhereUniqueWithoutAreaTableInput = {
    where: WorldMapAreaWhereUniqueInput
    update: XOR<WorldMapAreaUpdateWithoutAreaTableInput, WorldMapAreaUncheckedUpdateWithoutAreaTableInput>
    create: XOR<WorldMapAreaCreateWithoutAreaTableInput, WorldMapAreaUncheckedCreateWithoutAreaTableInput>
  }

  export type WorldMapAreaUpdateWithWhereUniqueWithoutAreaTableInput = {
    where: WorldMapAreaWhereUniqueInput
    data: XOR<WorldMapAreaUpdateWithoutAreaTableInput, WorldMapAreaUncheckedUpdateWithoutAreaTableInput>
  }

  export type WorldMapAreaUpdateManyWithWhereWithoutAreaTableInput = {
    where: WorldMapAreaScalarWhereInput
    data: XOR<WorldMapAreaUpdateManyMutationInput, WorldMapAreaUncheckedUpdateManyWithoutWorldMapAreaInput>
  }

  export type WorldMapOverlayUpsertWithWhereUniqueWithoutArea_1Input = {
    where: WorldMapOverlayWhereUniqueInput
    update: XOR<WorldMapOverlayUpdateWithoutArea_1Input, WorldMapOverlayUncheckedUpdateWithoutArea_1Input>
    create: XOR<WorldMapOverlayCreateWithoutArea_1Input, WorldMapOverlayUncheckedCreateWithoutArea_1Input>
  }

  export type WorldMapOverlayUpdateWithWhereUniqueWithoutArea_1Input = {
    where: WorldMapOverlayWhereUniqueInput
    data: XOR<WorldMapOverlayUpdateWithoutArea_1Input, WorldMapOverlayUncheckedUpdateWithoutArea_1Input>
  }

  export type WorldMapOverlayUpdateManyWithWhereWithoutArea_1Input = {
    where: WorldMapOverlayScalarWhereInput
    data: XOR<WorldMapOverlayUpdateManyMutationInput, WorldMapOverlayUncheckedUpdateManyWithoutWorldMapOverlay1Input>
  }

  export type WorldMapOverlayScalarWhereInput = {
    AND?: Enumerable<WorldMapOverlayScalarWhereInput>
    OR?: Enumerable<WorldMapOverlayScalarWhereInput>
    NOT?: Enumerable<WorldMapOverlayScalarWhereInput>
    id?: IntFilter | number
    worldMapAreaId?: IntFilter | number
    areaId_1?: IntFilter | number
    areaId_2?: IntFilter | number
    areaId_3?: IntFilter | number
    areaId_4?: IntFilter | number
    mapPointX?: IntFilter | number
    mapPointY?: IntFilter | number
    texture?: StringFilter | string
    textureWidth?: IntFilter | number
    textureHeight?: IntFilter | number
    offsetX?: IntFilter | number
    offsetY?: IntFilter | number
    hitRectTop?: IntFilter | number
    hitRectLeft?: IntFilter | number
    hitRectBottom?: IntFilter | number
    hitRectRight?: IntFilter | number
  }

  export type WorldMapOverlayUpsertWithWhereUniqueWithoutArea_2Input = {
    where: WorldMapOverlayWhereUniqueInput
    update: XOR<WorldMapOverlayUpdateWithoutArea_2Input, WorldMapOverlayUncheckedUpdateWithoutArea_2Input>
    create: XOR<WorldMapOverlayCreateWithoutArea_2Input, WorldMapOverlayUncheckedCreateWithoutArea_2Input>
  }

  export type WorldMapOverlayUpdateWithWhereUniqueWithoutArea_2Input = {
    where: WorldMapOverlayWhereUniqueInput
    data: XOR<WorldMapOverlayUpdateWithoutArea_2Input, WorldMapOverlayUncheckedUpdateWithoutArea_2Input>
  }

  export type WorldMapOverlayUpdateManyWithWhereWithoutArea_2Input = {
    where: WorldMapOverlayScalarWhereInput
    data: XOR<WorldMapOverlayUpdateManyMutationInput, WorldMapOverlayUncheckedUpdateManyWithoutWorldMapOverlay2Input>
  }

  export type WorldMapOverlayUpsertWithWhereUniqueWithoutArea_3Input = {
    where: WorldMapOverlayWhereUniqueInput
    update: XOR<WorldMapOverlayUpdateWithoutArea_3Input, WorldMapOverlayUncheckedUpdateWithoutArea_3Input>
    create: XOR<WorldMapOverlayCreateWithoutArea_3Input, WorldMapOverlayUncheckedCreateWithoutArea_3Input>
  }

  export type WorldMapOverlayUpdateWithWhereUniqueWithoutArea_3Input = {
    where: WorldMapOverlayWhereUniqueInput
    data: XOR<WorldMapOverlayUpdateWithoutArea_3Input, WorldMapOverlayUncheckedUpdateWithoutArea_3Input>
  }

  export type WorldMapOverlayUpdateManyWithWhereWithoutArea_3Input = {
    where: WorldMapOverlayScalarWhereInput
    data: XOR<WorldMapOverlayUpdateManyMutationInput, WorldMapOverlayUncheckedUpdateManyWithoutWorldMapOverlay3Input>
  }

  export type WorldMapOverlayUpsertWithWhereUniqueWithoutArea_4Input = {
    where: WorldMapOverlayWhereUniqueInput
    update: XOR<WorldMapOverlayUpdateWithoutArea_4Input, WorldMapOverlayUncheckedUpdateWithoutArea_4Input>
    create: XOR<WorldMapOverlayCreateWithoutArea_4Input, WorldMapOverlayUncheckedCreateWithoutArea_4Input>
  }

  export type WorldMapOverlayUpdateWithWhereUniqueWithoutArea_4Input = {
    where: WorldMapOverlayWhereUniqueInput
    data: XOR<WorldMapOverlayUpdateWithoutArea_4Input, WorldMapOverlayUncheckedUpdateWithoutArea_4Input>
  }

  export type WorldMapOverlayUpdateManyWithWhereWithoutArea_4Input = {
    where: WorldMapOverlayScalarWhereInput
    data: XOR<WorldMapOverlayUpdateManyMutationInput, WorldMapOverlayUncheckedUpdateManyWithoutWorldMapOverlay4Input>
  }

  export type ContinentCreateWithoutAreaTriggerInput = {
    id: number
    name: string
    AreaPOI?: AreaPOICreateNestedManyWithoutContinentInput
    AreaTable?: AreaTableCreateNestedManyWithoutContinentInput
    WorldMapArea?: WorldMapAreaCreateNestedManyWithoutContinentInput
    WorldMapContinent?: WorldMapContinentCreateNestedManyWithoutContinentInput
    Light?: LightCreateNestedManyWithoutContinentInput
  }

  export type ContinentUncheckedCreateWithoutAreaTriggerInput = {
    id: number
    name: string
    AreaPOI?: AreaPOIUncheckedCreateNestedManyWithoutContinentInput
    AreaTable?: AreaTableUncheckedCreateNestedManyWithoutContinentInput
    WorldMapArea?: WorldMapAreaUncheckedCreateNestedManyWithoutContinentInput
    WorldMapContinent?: WorldMapContinentUncheckedCreateNestedManyWithoutContinentInput
    Light?: LightUncheckedCreateNestedManyWithoutContinentInput
  }

  export type ContinentCreateOrConnectWithoutAreaTriggerInput = {
    where: ContinentWhereUniqueInput
    create: XOR<ContinentCreateWithoutAreaTriggerInput, ContinentUncheckedCreateWithoutAreaTriggerInput>
  }

  export type ContinentUpsertWithoutAreaTriggerInput = {
    update: XOR<ContinentUpdateWithoutAreaTriggerInput, ContinentUncheckedUpdateWithoutAreaTriggerInput>
    create: XOR<ContinentCreateWithoutAreaTriggerInput, ContinentUncheckedCreateWithoutAreaTriggerInput>
  }

  export type ContinentUpdateWithoutAreaTriggerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    AreaPOI?: AreaPOIUpdateManyWithoutContinentNestedInput
    AreaTable?: AreaTableUpdateManyWithoutContinentNestedInput
    WorldMapArea?: WorldMapAreaUpdateManyWithoutContinentNestedInput
    WorldMapContinent?: WorldMapContinentUpdateManyWithoutContinentNestedInput
    Light?: LightUpdateManyWithoutContinentNestedInput
  }

  export type ContinentUncheckedUpdateWithoutAreaTriggerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    AreaPOI?: AreaPOIUncheckedUpdateManyWithoutContinentNestedInput
    AreaTable?: AreaTableUncheckedUpdateManyWithoutContinentNestedInput
    WorldMapArea?: WorldMapAreaUncheckedUpdateManyWithoutContinentNestedInput
    WorldMapContinent?: WorldMapContinentUncheckedUpdateManyWithoutContinentNestedInput
    Light?: LightUncheckedUpdateManyWithoutContinentNestedInput
  }

  export type ContinentCreateWithoutLightInput = {
    id: number
    name: string
    AreaPOI?: AreaPOICreateNestedManyWithoutContinentInput
    AreaTable?: AreaTableCreateNestedManyWithoutContinentInput
    WorldMapArea?: WorldMapAreaCreateNestedManyWithoutContinentInput
    WorldMapContinent?: WorldMapContinentCreateNestedManyWithoutContinentInput
    AreaTrigger?: AreaTriggerCreateNestedManyWithoutContinentInput
  }

  export type ContinentUncheckedCreateWithoutLightInput = {
    id: number
    name: string
    AreaPOI?: AreaPOIUncheckedCreateNestedManyWithoutContinentInput
    AreaTable?: AreaTableUncheckedCreateNestedManyWithoutContinentInput
    WorldMapArea?: WorldMapAreaUncheckedCreateNestedManyWithoutContinentInput
    WorldMapContinent?: WorldMapContinentUncheckedCreateNestedManyWithoutContinentInput
    AreaTrigger?: AreaTriggerUncheckedCreateNestedManyWithoutContinentInput
  }

  export type ContinentCreateOrConnectWithoutLightInput = {
    where: ContinentWhereUniqueInput
    create: XOR<ContinentCreateWithoutLightInput, ContinentUncheckedCreateWithoutLightInput>
  }

  export type LightParamsCreateWithoutStandatrdLightInput = {
    id: number
    highlightSky: number
    lightSkybox: LightSkyboxCreateNestedOneWithoutLightParamsInput
    glow: number
    waterShallowAlpha: number
    waterDeepAlpha: number
    oceanShallowAlpha: number
    oceanDeepAlpha: number
    flags: number
    underwaterLight?: LightCreateNestedManyWithoutParamUnderwaterInput
    sunsetLight?: LightCreateNestedManyWithoutParamSunsetInput
    otherLight?: LightCreateNestedManyWithoutParamOtherInput
    deathLight?: LightCreateNestedManyWithoutParamDeathInput
  }

  export type LightParamsUncheckedCreateWithoutStandatrdLightInput = {
    id: number
    highlightSky: number
    lightSkyboxId: number
    glow: number
    waterShallowAlpha: number
    waterDeepAlpha: number
    oceanShallowAlpha: number
    oceanDeepAlpha: number
    flags: number
    underwaterLight?: LightUncheckedCreateNestedManyWithoutParamUnderwaterInput
    sunsetLight?: LightUncheckedCreateNestedManyWithoutParamSunsetInput
    otherLight?: LightUncheckedCreateNestedManyWithoutParamOtherInput
    deathLight?: LightUncheckedCreateNestedManyWithoutParamDeathInput
  }

  export type LightParamsCreateOrConnectWithoutStandatrdLightInput = {
    where: LightParamsWhereUniqueInput
    create: XOR<LightParamsCreateWithoutStandatrdLightInput, LightParamsUncheckedCreateWithoutStandatrdLightInput>
  }

  export type LightParamsCreateWithoutUnderwaterLightInput = {
    id: number
    highlightSky: number
    lightSkybox: LightSkyboxCreateNestedOneWithoutLightParamsInput
    glow: number
    waterShallowAlpha: number
    waterDeepAlpha: number
    oceanShallowAlpha: number
    oceanDeepAlpha: number
    flags: number
    standatrdLight?: LightCreateNestedManyWithoutParamStandardInput
    sunsetLight?: LightCreateNestedManyWithoutParamSunsetInput
    otherLight?: LightCreateNestedManyWithoutParamOtherInput
    deathLight?: LightCreateNestedManyWithoutParamDeathInput
  }

  export type LightParamsUncheckedCreateWithoutUnderwaterLightInput = {
    id: number
    highlightSky: number
    lightSkyboxId: number
    glow: number
    waterShallowAlpha: number
    waterDeepAlpha: number
    oceanShallowAlpha: number
    oceanDeepAlpha: number
    flags: number
    standatrdLight?: LightUncheckedCreateNestedManyWithoutParamStandardInput
    sunsetLight?: LightUncheckedCreateNestedManyWithoutParamSunsetInput
    otherLight?: LightUncheckedCreateNestedManyWithoutParamOtherInput
    deathLight?: LightUncheckedCreateNestedManyWithoutParamDeathInput
  }

  export type LightParamsCreateOrConnectWithoutUnderwaterLightInput = {
    where: LightParamsWhereUniqueInput
    create: XOR<LightParamsCreateWithoutUnderwaterLightInput, LightParamsUncheckedCreateWithoutUnderwaterLightInput>
  }

  export type LightParamsCreateWithoutSunsetLightInput = {
    id: number
    highlightSky: number
    lightSkybox: LightSkyboxCreateNestedOneWithoutLightParamsInput
    glow: number
    waterShallowAlpha: number
    waterDeepAlpha: number
    oceanShallowAlpha: number
    oceanDeepAlpha: number
    flags: number
    standatrdLight?: LightCreateNestedManyWithoutParamStandardInput
    underwaterLight?: LightCreateNestedManyWithoutParamUnderwaterInput
    otherLight?: LightCreateNestedManyWithoutParamOtherInput
    deathLight?: LightCreateNestedManyWithoutParamDeathInput
  }

  export type LightParamsUncheckedCreateWithoutSunsetLightInput = {
    id: number
    highlightSky: number
    lightSkyboxId: number
    glow: number
    waterShallowAlpha: number
    waterDeepAlpha: number
    oceanShallowAlpha: number
    oceanDeepAlpha: number
    flags: number
    standatrdLight?: LightUncheckedCreateNestedManyWithoutParamStandardInput
    underwaterLight?: LightUncheckedCreateNestedManyWithoutParamUnderwaterInput
    otherLight?: LightUncheckedCreateNestedManyWithoutParamOtherInput
    deathLight?: LightUncheckedCreateNestedManyWithoutParamDeathInput
  }

  export type LightParamsCreateOrConnectWithoutSunsetLightInput = {
    where: LightParamsWhereUniqueInput
    create: XOR<LightParamsCreateWithoutSunsetLightInput, LightParamsUncheckedCreateWithoutSunsetLightInput>
  }

  export type LightParamsCreateWithoutOtherLightInput = {
    id: number
    highlightSky: number
    lightSkybox: LightSkyboxCreateNestedOneWithoutLightParamsInput
    glow: number
    waterShallowAlpha: number
    waterDeepAlpha: number
    oceanShallowAlpha: number
    oceanDeepAlpha: number
    flags: number
    standatrdLight?: LightCreateNestedManyWithoutParamStandardInput
    underwaterLight?: LightCreateNestedManyWithoutParamUnderwaterInput
    sunsetLight?: LightCreateNestedManyWithoutParamSunsetInput
    deathLight?: LightCreateNestedManyWithoutParamDeathInput
  }

  export type LightParamsUncheckedCreateWithoutOtherLightInput = {
    id: number
    highlightSky: number
    lightSkyboxId: number
    glow: number
    waterShallowAlpha: number
    waterDeepAlpha: number
    oceanShallowAlpha: number
    oceanDeepAlpha: number
    flags: number
    standatrdLight?: LightUncheckedCreateNestedManyWithoutParamStandardInput
    underwaterLight?: LightUncheckedCreateNestedManyWithoutParamUnderwaterInput
    sunsetLight?: LightUncheckedCreateNestedManyWithoutParamSunsetInput
    deathLight?: LightUncheckedCreateNestedManyWithoutParamDeathInput
  }

  export type LightParamsCreateOrConnectWithoutOtherLightInput = {
    where: LightParamsWhereUniqueInput
    create: XOR<LightParamsCreateWithoutOtherLightInput, LightParamsUncheckedCreateWithoutOtherLightInput>
  }

  export type LightParamsCreateWithoutDeathLightInput = {
    id: number
    highlightSky: number
    lightSkybox: LightSkyboxCreateNestedOneWithoutLightParamsInput
    glow: number
    waterShallowAlpha: number
    waterDeepAlpha: number
    oceanShallowAlpha: number
    oceanDeepAlpha: number
    flags: number
    standatrdLight?: LightCreateNestedManyWithoutParamStandardInput
    underwaterLight?: LightCreateNestedManyWithoutParamUnderwaterInput
    sunsetLight?: LightCreateNestedManyWithoutParamSunsetInput
    otherLight?: LightCreateNestedManyWithoutParamOtherInput
  }

  export type LightParamsUncheckedCreateWithoutDeathLightInput = {
    id: number
    highlightSky: number
    lightSkyboxId: number
    glow: number
    waterShallowAlpha: number
    waterDeepAlpha: number
    oceanShallowAlpha: number
    oceanDeepAlpha: number
    flags: number
    standatrdLight?: LightUncheckedCreateNestedManyWithoutParamStandardInput
    underwaterLight?: LightUncheckedCreateNestedManyWithoutParamUnderwaterInput
    sunsetLight?: LightUncheckedCreateNestedManyWithoutParamSunsetInput
    otherLight?: LightUncheckedCreateNestedManyWithoutParamOtherInput
  }

  export type LightParamsCreateOrConnectWithoutDeathLightInput = {
    where: LightParamsWhereUniqueInput
    create: XOR<LightParamsCreateWithoutDeathLightInput, LightParamsUncheckedCreateWithoutDeathLightInput>
  }

  export type AreaTableCreateWithoutLightInput = {
    id: number
    continent: ContinentCreateNestedOneWithoutAreaTableInput
    parentArea: AreaTableCreateNestedOneWithoutChildAreasInput
    areaBit: number
    flags: number
    soundPreferenceId: number
    underwaterSoundPreferenceId: number
    soundAmbienceId: number
    zoneMusicId: number
    zoneIntroMusicId: number
    explorationLevel: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
    factionGroupMask: number
    liquidTypeId: number
    minElevation: number
    ambientMultiplier: number
    ChildAreas?: AreaTableCreateNestedManyWithoutParentAreaInput
    AreaPOI?: AreaPOICreateNestedManyWithoutAreaInput
    WMOAreaTable?: WMOAreaTableCreateNestedManyWithoutAreaTableInput
    WorldMapArea?: WorldMapAreaCreateNestedManyWithoutAreaTableInput
    WorldMapOverlay1?: WorldMapOverlayCreateNestedManyWithoutArea_1Input
    WorldMapOverlay2?: WorldMapOverlayCreateNestedManyWithoutArea_2Input
    WorldMapOverlay3?: WorldMapOverlayCreateNestedManyWithoutArea_3Input
    WorldMapOverlay4?: WorldMapOverlayCreateNestedManyWithoutArea_4Input
  }

  export type AreaTableUncheckedCreateWithoutLightInput = {
    id: number
    continentId: number
    parentAreaId: number
    areaBit: number
    flags: number
    soundPreferenceId: number
    underwaterSoundPreferenceId: number
    soundAmbienceId: number
    zoneMusicId: number
    zoneIntroMusicId: number
    explorationLevel: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
    factionGroupMask: number
    liquidTypeId: number
    minElevation: number
    ambientMultiplier: number
    ChildAreas?: AreaTableUncheckedCreateNestedManyWithoutParentAreaInput
    AreaPOI?: AreaPOIUncheckedCreateNestedManyWithoutAreaInput
    WMOAreaTable?: WMOAreaTableUncheckedCreateNestedManyWithoutAreaTableInput
    WorldMapArea?: WorldMapAreaUncheckedCreateNestedManyWithoutAreaTableInput
    WorldMapOverlay1?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_1Input
    WorldMapOverlay2?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_2Input
    WorldMapOverlay3?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_3Input
    WorldMapOverlay4?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_4Input
  }

  export type AreaTableCreateOrConnectWithoutLightInput = {
    where: AreaTableWhereUniqueInput
    create: XOR<AreaTableCreateWithoutLightInput, AreaTableUncheckedCreateWithoutLightInput>
  }

  export type ContinentUpsertWithoutLightInput = {
    update: XOR<ContinentUpdateWithoutLightInput, ContinentUncheckedUpdateWithoutLightInput>
    create: XOR<ContinentCreateWithoutLightInput, ContinentUncheckedCreateWithoutLightInput>
  }

  export type ContinentUpdateWithoutLightInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    AreaPOI?: AreaPOIUpdateManyWithoutContinentNestedInput
    AreaTable?: AreaTableUpdateManyWithoutContinentNestedInput
    WorldMapArea?: WorldMapAreaUpdateManyWithoutContinentNestedInput
    WorldMapContinent?: WorldMapContinentUpdateManyWithoutContinentNestedInput
    AreaTrigger?: AreaTriggerUpdateManyWithoutContinentNestedInput
  }

  export type ContinentUncheckedUpdateWithoutLightInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    AreaPOI?: AreaPOIUncheckedUpdateManyWithoutContinentNestedInput
    AreaTable?: AreaTableUncheckedUpdateManyWithoutContinentNestedInput
    WorldMapArea?: WorldMapAreaUncheckedUpdateManyWithoutContinentNestedInput
    WorldMapContinent?: WorldMapContinentUncheckedUpdateManyWithoutContinentNestedInput
    AreaTrigger?: AreaTriggerUncheckedUpdateManyWithoutContinentNestedInput
  }

  export type LightParamsUpsertWithoutStandatrdLightInput = {
    update: XOR<LightParamsUpdateWithoutStandatrdLightInput, LightParamsUncheckedUpdateWithoutStandatrdLightInput>
    create: XOR<LightParamsCreateWithoutStandatrdLightInput, LightParamsUncheckedCreateWithoutStandatrdLightInput>
  }

  export type LightParamsUpdateWithoutStandatrdLightInput = {
    id?: IntFieldUpdateOperationsInput | number
    highlightSky?: IntFieldUpdateOperationsInput | number
    lightSkybox?: LightSkyboxUpdateOneRequiredWithoutLightParamsNestedInput
    glow?: FloatFieldUpdateOperationsInput | number
    waterShallowAlpha?: FloatFieldUpdateOperationsInput | number
    waterDeepAlpha?: FloatFieldUpdateOperationsInput | number
    oceanShallowAlpha?: FloatFieldUpdateOperationsInput | number
    oceanDeepAlpha?: FloatFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    underwaterLight?: LightUpdateManyWithoutParamUnderwaterNestedInput
    sunsetLight?: LightUpdateManyWithoutParamSunsetNestedInput
    otherLight?: LightUpdateManyWithoutParamOtherNestedInput
    deathLight?: LightUpdateManyWithoutParamDeathNestedInput
  }

  export type LightParamsUncheckedUpdateWithoutStandatrdLightInput = {
    id?: IntFieldUpdateOperationsInput | number
    highlightSky?: IntFieldUpdateOperationsInput | number
    lightSkyboxId?: IntFieldUpdateOperationsInput | number
    glow?: FloatFieldUpdateOperationsInput | number
    waterShallowAlpha?: FloatFieldUpdateOperationsInput | number
    waterDeepAlpha?: FloatFieldUpdateOperationsInput | number
    oceanShallowAlpha?: FloatFieldUpdateOperationsInput | number
    oceanDeepAlpha?: FloatFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    underwaterLight?: LightUncheckedUpdateManyWithoutParamUnderwaterNestedInput
    sunsetLight?: LightUncheckedUpdateManyWithoutParamSunsetNestedInput
    otherLight?: LightUncheckedUpdateManyWithoutParamOtherNestedInput
    deathLight?: LightUncheckedUpdateManyWithoutParamDeathNestedInput
  }

  export type LightParamsUpsertWithoutUnderwaterLightInput = {
    update: XOR<LightParamsUpdateWithoutUnderwaterLightInput, LightParamsUncheckedUpdateWithoutUnderwaterLightInput>
    create: XOR<LightParamsCreateWithoutUnderwaterLightInput, LightParamsUncheckedCreateWithoutUnderwaterLightInput>
  }

  export type LightParamsUpdateWithoutUnderwaterLightInput = {
    id?: IntFieldUpdateOperationsInput | number
    highlightSky?: IntFieldUpdateOperationsInput | number
    lightSkybox?: LightSkyboxUpdateOneRequiredWithoutLightParamsNestedInput
    glow?: FloatFieldUpdateOperationsInput | number
    waterShallowAlpha?: FloatFieldUpdateOperationsInput | number
    waterDeepAlpha?: FloatFieldUpdateOperationsInput | number
    oceanShallowAlpha?: FloatFieldUpdateOperationsInput | number
    oceanDeepAlpha?: FloatFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    standatrdLight?: LightUpdateManyWithoutParamStandardNestedInput
    sunsetLight?: LightUpdateManyWithoutParamSunsetNestedInput
    otherLight?: LightUpdateManyWithoutParamOtherNestedInput
    deathLight?: LightUpdateManyWithoutParamDeathNestedInput
  }

  export type LightParamsUncheckedUpdateWithoutUnderwaterLightInput = {
    id?: IntFieldUpdateOperationsInput | number
    highlightSky?: IntFieldUpdateOperationsInput | number
    lightSkyboxId?: IntFieldUpdateOperationsInput | number
    glow?: FloatFieldUpdateOperationsInput | number
    waterShallowAlpha?: FloatFieldUpdateOperationsInput | number
    waterDeepAlpha?: FloatFieldUpdateOperationsInput | number
    oceanShallowAlpha?: FloatFieldUpdateOperationsInput | number
    oceanDeepAlpha?: FloatFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    standatrdLight?: LightUncheckedUpdateManyWithoutParamStandardNestedInput
    sunsetLight?: LightUncheckedUpdateManyWithoutParamSunsetNestedInput
    otherLight?: LightUncheckedUpdateManyWithoutParamOtherNestedInput
    deathLight?: LightUncheckedUpdateManyWithoutParamDeathNestedInput
  }

  export type LightParamsUpsertWithoutSunsetLightInput = {
    update: XOR<LightParamsUpdateWithoutSunsetLightInput, LightParamsUncheckedUpdateWithoutSunsetLightInput>
    create: XOR<LightParamsCreateWithoutSunsetLightInput, LightParamsUncheckedCreateWithoutSunsetLightInput>
  }

  export type LightParamsUpdateWithoutSunsetLightInput = {
    id?: IntFieldUpdateOperationsInput | number
    highlightSky?: IntFieldUpdateOperationsInput | number
    lightSkybox?: LightSkyboxUpdateOneRequiredWithoutLightParamsNestedInput
    glow?: FloatFieldUpdateOperationsInput | number
    waterShallowAlpha?: FloatFieldUpdateOperationsInput | number
    waterDeepAlpha?: FloatFieldUpdateOperationsInput | number
    oceanShallowAlpha?: FloatFieldUpdateOperationsInput | number
    oceanDeepAlpha?: FloatFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    standatrdLight?: LightUpdateManyWithoutParamStandardNestedInput
    underwaterLight?: LightUpdateManyWithoutParamUnderwaterNestedInput
    otherLight?: LightUpdateManyWithoutParamOtherNestedInput
    deathLight?: LightUpdateManyWithoutParamDeathNestedInput
  }

  export type LightParamsUncheckedUpdateWithoutSunsetLightInput = {
    id?: IntFieldUpdateOperationsInput | number
    highlightSky?: IntFieldUpdateOperationsInput | number
    lightSkyboxId?: IntFieldUpdateOperationsInput | number
    glow?: FloatFieldUpdateOperationsInput | number
    waterShallowAlpha?: FloatFieldUpdateOperationsInput | number
    waterDeepAlpha?: FloatFieldUpdateOperationsInput | number
    oceanShallowAlpha?: FloatFieldUpdateOperationsInput | number
    oceanDeepAlpha?: FloatFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    standatrdLight?: LightUncheckedUpdateManyWithoutParamStandardNestedInput
    underwaterLight?: LightUncheckedUpdateManyWithoutParamUnderwaterNestedInput
    otherLight?: LightUncheckedUpdateManyWithoutParamOtherNestedInput
    deathLight?: LightUncheckedUpdateManyWithoutParamDeathNestedInput
  }

  export type LightParamsUpsertWithoutOtherLightInput = {
    update: XOR<LightParamsUpdateWithoutOtherLightInput, LightParamsUncheckedUpdateWithoutOtherLightInput>
    create: XOR<LightParamsCreateWithoutOtherLightInput, LightParamsUncheckedCreateWithoutOtherLightInput>
  }

  export type LightParamsUpdateWithoutOtherLightInput = {
    id?: IntFieldUpdateOperationsInput | number
    highlightSky?: IntFieldUpdateOperationsInput | number
    lightSkybox?: LightSkyboxUpdateOneRequiredWithoutLightParamsNestedInput
    glow?: FloatFieldUpdateOperationsInput | number
    waterShallowAlpha?: FloatFieldUpdateOperationsInput | number
    waterDeepAlpha?: FloatFieldUpdateOperationsInput | number
    oceanShallowAlpha?: FloatFieldUpdateOperationsInput | number
    oceanDeepAlpha?: FloatFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    standatrdLight?: LightUpdateManyWithoutParamStandardNestedInput
    underwaterLight?: LightUpdateManyWithoutParamUnderwaterNestedInput
    sunsetLight?: LightUpdateManyWithoutParamSunsetNestedInput
    deathLight?: LightUpdateManyWithoutParamDeathNestedInput
  }

  export type LightParamsUncheckedUpdateWithoutOtherLightInput = {
    id?: IntFieldUpdateOperationsInput | number
    highlightSky?: IntFieldUpdateOperationsInput | number
    lightSkyboxId?: IntFieldUpdateOperationsInput | number
    glow?: FloatFieldUpdateOperationsInput | number
    waterShallowAlpha?: FloatFieldUpdateOperationsInput | number
    waterDeepAlpha?: FloatFieldUpdateOperationsInput | number
    oceanShallowAlpha?: FloatFieldUpdateOperationsInput | number
    oceanDeepAlpha?: FloatFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    standatrdLight?: LightUncheckedUpdateManyWithoutParamStandardNestedInput
    underwaterLight?: LightUncheckedUpdateManyWithoutParamUnderwaterNestedInput
    sunsetLight?: LightUncheckedUpdateManyWithoutParamSunsetNestedInput
    deathLight?: LightUncheckedUpdateManyWithoutParamDeathNestedInput
  }

  export type LightParamsUpsertWithoutDeathLightInput = {
    update: XOR<LightParamsUpdateWithoutDeathLightInput, LightParamsUncheckedUpdateWithoutDeathLightInput>
    create: XOR<LightParamsCreateWithoutDeathLightInput, LightParamsUncheckedCreateWithoutDeathLightInput>
  }

  export type LightParamsUpdateWithoutDeathLightInput = {
    id?: IntFieldUpdateOperationsInput | number
    highlightSky?: IntFieldUpdateOperationsInput | number
    lightSkybox?: LightSkyboxUpdateOneRequiredWithoutLightParamsNestedInput
    glow?: FloatFieldUpdateOperationsInput | number
    waterShallowAlpha?: FloatFieldUpdateOperationsInput | number
    waterDeepAlpha?: FloatFieldUpdateOperationsInput | number
    oceanShallowAlpha?: FloatFieldUpdateOperationsInput | number
    oceanDeepAlpha?: FloatFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    standatrdLight?: LightUpdateManyWithoutParamStandardNestedInput
    underwaterLight?: LightUpdateManyWithoutParamUnderwaterNestedInput
    sunsetLight?: LightUpdateManyWithoutParamSunsetNestedInput
    otherLight?: LightUpdateManyWithoutParamOtherNestedInput
  }

  export type LightParamsUncheckedUpdateWithoutDeathLightInput = {
    id?: IntFieldUpdateOperationsInput | number
    highlightSky?: IntFieldUpdateOperationsInput | number
    lightSkyboxId?: IntFieldUpdateOperationsInput | number
    glow?: FloatFieldUpdateOperationsInput | number
    waterShallowAlpha?: FloatFieldUpdateOperationsInput | number
    waterDeepAlpha?: FloatFieldUpdateOperationsInput | number
    oceanShallowAlpha?: FloatFieldUpdateOperationsInput | number
    oceanDeepAlpha?: FloatFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    standatrdLight?: LightUncheckedUpdateManyWithoutParamStandardNestedInput
    underwaterLight?: LightUncheckedUpdateManyWithoutParamUnderwaterNestedInput
    sunsetLight?: LightUncheckedUpdateManyWithoutParamSunsetNestedInput
    otherLight?: LightUncheckedUpdateManyWithoutParamOtherNestedInput
  }

  export type AreaTableUpsertWithWhereUniqueWithoutLightInput = {
    where: AreaTableWhereUniqueInput
    update: XOR<AreaTableUpdateWithoutLightInput, AreaTableUncheckedUpdateWithoutLightInput>
    create: XOR<AreaTableCreateWithoutLightInput, AreaTableUncheckedCreateWithoutLightInput>
  }

  export type AreaTableUpdateWithWhereUniqueWithoutLightInput = {
    where: AreaTableWhereUniqueInput
    data: XOR<AreaTableUpdateWithoutLightInput, AreaTableUncheckedUpdateWithoutLightInput>
  }

  export type AreaTableUpdateManyWithWhereWithoutLightInput = {
    where: AreaTableScalarWhereInput
    data: XOR<AreaTableUpdateManyMutationInput, AreaTableUncheckedUpdateManyWithoutAreaTableInput>
  }

  export type LightSkyboxCreateWithoutLightParamsInput = {
    id: number
    name: string
  }

  export type LightSkyboxUncheckedCreateWithoutLightParamsInput = {
    id: number
    name: string
  }

  export type LightSkyboxCreateOrConnectWithoutLightParamsInput = {
    where: LightSkyboxWhereUniqueInput
    create: XOR<LightSkyboxCreateWithoutLightParamsInput, LightSkyboxUncheckedCreateWithoutLightParamsInput>
  }

  export type LightCreateWithoutParamStandardInput = {
    id: number
    continent: ContinentCreateNestedOneWithoutLightInput
    x: number
    y: number
    z: number
    falloffStart: number
    falloffEnd: number
    paramUnderwater: LightParamsCreateNestedOneWithoutUnderwaterLightInput
    paramSunset: LightParamsCreateNestedOneWithoutSunsetLightInput
    paramOther: LightParamsCreateNestedOneWithoutOtherLightInput
    paramDeath: LightParamsCreateNestedOneWithoutDeathLightInput
    AreaTable?: AreaTableCreateNestedManyWithoutLightInput
  }

  export type LightUncheckedCreateWithoutParamStandardInput = {
    id: number
    continentId: number
    x: number
    y: number
    z: number
    falloffStart: number
    falloffEnd: number
    paramUnderwaterId: number
    paramSunsetId: number
    paramOtherId: number
    paramDeathId: number
    AreaTable?: AreaTableUncheckedCreateNestedManyWithoutLightInput
  }

  export type LightCreateOrConnectWithoutParamStandardInput = {
    where: LightWhereUniqueInput
    create: XOR<LightCreateWithoutParamStandardInput, LightUncheckedCreateWithoutParamStandardInput>
  }

  export type LightCreateWithoutParamUnderwaterInput = {
    id: number
    continent: ContinentCreateNestedOneWithoutLightInput
    x: number
    y: number
    z: number
    falloffStart: number
    falloffEnd: number
    paramStandard: LightParamsCreateNestedOneWithoutStandatrdLightInput
    paramSunset: LightParamsCreateNestedOneWithoutSunsetLightInput
    paramOther: LightParamsCreateNestedOneWithoutOtherLightInput
    paramDeath: LightParamsCreateNestedOneWithoutDeathLightInput
    AreaTable?: AreaTableCreateNestedManyWithoutLightInput
  }

  export type LightUncheckedCreateWithoutParamUnderwaterInput = {
    id: number
    continentId: number
    x: number
    y: number
    z: number
    falloffStart: number
    falloffEnd: number
    paramStandardId: number
    paramSunsetId: number
    paramOtherId: number
    paramDeathId: number
    AreaTable?: AreaTableUncheckedCreateNestedManyWithoutLightInput
  }

  export type LightCreateOrConnectWithoutParamUnderwaterInput = {
    where: LightWhereUniqueInput
    create: XOR<LightCreateWithoutParamUnderwaterInput, LightUncheckedCreateWithoutParamUnderwaterInput>
  }

  export type LightCreateWithoutParamSunsetInput = {
    id: number
    continent: ContinentCreateNestedOneWithoutLightInput
    x: number
    y: number
    z: number
    falloffStart: number
    falloffEnd: number
    paramStandard: LightParamsCreateNestedOneWithoutStandatrdLightInput
    paramUnderwater: LightParamsCreateNestedOneWithoutUnderwaterLightInput
    paramOther: LightParamsCreateNestedOneWithoutOtherLightInput
    paramDeath: LightParamsCreateNestedOneWithoutDeathLightInput
    AreaTable?: AreaTableCreateNestedManyWithoutLightInput
  }

  export type LightUncheckedCreateWithoutParamSunsetInput = {
    id: number
    continentId: number
    x: number
    y: number
    z: number
    falloffStart: number
    falloffEnd: number
    paramStandardId: number
    paramUnderwaterId: number
    paramOtherId: number
    paramDeathId: number
    AreaTable?: AreaTableUncheckedCreateNestedManyWithoutLightInput
  }

  export type LightCreateOrConnectWithoutParamSunsetInput = {
    where: LightWhereUniqueInput
    create: XOR<LightCreateWithoutParamSunsetInput, LightUncheckedCreateWithoutParamSunsetInput>
  }

  export type LightCreateWithoutParamOtherInput = {
    id: number
    continent: ContinentCreateNestedOneWithoutLightInput
    x: number
    y: number
    z: number
    falloffStart: number
    falloffEnd: number
    paramStandard: LightParamsCreateNestedOneWithoutStandatrdLightInput
    paramUnderwater: LightParamsCreateNestedOneWithoutUnderwaterLightInput
    paramSunset: LightParamsCreateNestedOneWithoutSunsetLightInput
    paramDeath: LightParamsCreateNestedOneWithoutDeathLightInput
    AreaTable?: AreaTableCreateNestedManyWithoutLightInput
  }

  export type LightUncheckedCreateWithoutParamOtherInput = {
    id: number
    continentId: number
    x: number
    y: number
    z: number
    falloffStart: number
    falloffEnd: number
    paramStandardId: number
    paramUnderwaterId: number
    paramSunsetId: number
    paramDeathId: number
    AreaTable?: AreaTableUncheckedCreateNestedManyWithoutLightInput
  }

  export type LightCreateOrConnectWithoutParamOtherInput = {
    where: LightWhereUniqueInput
    create: XOR<LightCreateWithoutParamOtherInput, LightUncheckedCreateWithoutParamOtherInput>
  }

  export type LightCreateWithoutParamDeathInput = {
    id: number
    continent: ContinentCreateNestedOneWithoutLightInput
    x: number
    y: number
    z: number
    falloffStart: number
    falloffEnd: number
    paramStandard: LightParamsCreateNestedOneWithoutStandatrdLightInput
    paramUnderwater: LightParamsCreateNestedOneWithoutUnderwaterLightInput
    paramSunset: LightParamsCreateNestedOneWithoutSunsetLightInput
    paramOther: LightParamsCreateNestedOneWithoutOtherLightInput
    AreaTable?: AreaTableCreateNestedManyWithoutLightInput
  }

  export type LightUncheckedCreateWithoutParamDeathInput = {
    id: number
    continentId: number
    x: number
    y: number
    z: number
    falloffStart: number
    falloffEnd: number
    paramStandardId: number
    paramUnderwaterId: number
    paramSunsetId: number
    paramOtherId: number
    AreaTable?: AreaTableUncheckedCreateNestedManyWithoutLightInput
  }

  export type LightCreateOrConnectWithoutParamDeathInput = {
    where: LightWhereUniqueInput
    create: XOR<LightCreateWithoutParamDeathInput, LightUncheckedCreateWithoutParamDeathInput>
  }

  export type LightSkyboxUpsertWithoutLightParamsInput = {
    update: XOR<LightSkyboxUpdateWithoutLightParamsInput, LightSkyboxUncheckedUpdateWithoutLightParamsInput>
    create: XOR<LightSkyboxCreateWithoutLightParamsInput, LightSkyboxUncheckedCreateWithoutLightParamsInput>
  }

  export type LightSkyboxUpdateWithoutLightParamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LightSkyboxUncheckedUpdateWithoutLightParamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LightUpsertWithWhereUniqueWithoutParamStandardInput = {
    where: LightWhereUniqueInput
    update: XOR<LightUpdateWithoutParamStandardInput, LightUncheckedUpdateWithoutParamStandardInput>
    create: XOR<LightCreateWithoutParamStandardInput, LightUncheckedCreateWithoutParamStandardInput>
  }

  export type LightUpdateWithWhereUniqueWithoutParamStandardInput = {
    where: LightWhereUniqueInput
    data: XOR<LightUpdateWithoutParamStandardInput, LightUncheckedUpdateWithoutParamStandardInput>
  }

  export type LightUpdateManyWithWhereWithoutParamStandardInput = {
    where: LightScalarWhereInput
    data: XOR<LightUpdateManyMutationInput, LightUncheckedUpdateManyWithoutStandatrdLightInput>
  }

  export type LightUpsertWithWhereUniqueWithoutParamUnderwaterInput = {
    where: LightWhereUniqueInput
    update: XOR<LightUpdateWithoutParamUnderwaterInput, LightUncheckedUpdateWithoutParamUnderwaterInput>
    create: XOR<LightCreateWithoutParamUnderwaterInput, LightUncheckedCreateWithoutParamUnderwaterInput>
  }

  export type LightUpdateWithWhereUniqueWithoutParamUnderwaterInput = {
    where: LightWhereUniqueInput
    data: XOR<LightUpdateWithoutParamUnderwaterInput, LightUncheckedUpdateWithoutParamUnderwaterInput>
  }

  export type LightUpdateManyWithWhereWithoutParamUnderwaterInput = {
    where: LightScalarWhereInput
    data: XOR<LightUpdateManyMutationInput, LightUncheckedUpdateManyWithoutUnderwaterLightInput>
  }

  export type LightUpsertWithWhereUniqueWithoutParamSunsetInput = {
    where: LightWhereUniqueInput
    update: XOR<LightUpdateWithoutParamSunsetInput, LightUncheckedUpdateWithoutParamSunsetInput>
    create: XOR<LightCreateWithoutParamSunsetInput, LightUncheckedCreateWithoutParamSunsetInput>
  }

  export type LightUpdateWithWhereUniqueWithoutParamSunsetInput = {
    where: LightWhereUniqueInput
    data: XOR<LightUpdateWithoutParamSunsetInput, LightUncheckedUpdateWithoutParamSunsetInput>
  }

  export type LightUpdateManyWithWhereWithoutParamSunsetInput = {
    where: LightScalarWhereInput
    data: XOR<LightUpdateManyMutationInput, LightUncheckedUpdateManyWithoutSunsetLightInput>
  }

  export type LightUpsertWithWhereUniqueWithoutParamOtherInput = {
    where: LightWhereUniqueInput
    update: XOR<LightUpdateWithoutParamOtherInput, LightUncheckedUpdateWithoutParamOtherInput>
    create: XOR<LightCreateWithoutParamOtherInput, LightUncheckedCreateWithoutParamOtherInput>
  }

  export type LightUpdateWithWhereUniqueWithoutParamOtherInput = {
    where: LightWhereUniqueInput
    data: XOR<LightUpdateWithoutParamOtherInput, LightUncheckedUpdateWithoutParamOtherInput>
  }

  export type LightUpdateManyWithWhereWithoutParamOtherInput = {
    where: LightScalarWhereInput
    data: XOR<LightUpdateManyMutationInput, LightUncheckedUpdateManyWithoutOtherLightInput>
  }

  export type LightUpsertWithWhereUniqueWithoutParamDeathInput = {
    where: LightWhereUniqueInput
    update: XOR<LightUpdateWithoutParamDeathInput, LightUncheckedUpdateWithoutParamDeathInput>
    create: XOR<LightCreateWithoutParamDeathInput, LightUncheckedCreateWithoutParamDeathInput>
  }

  export type LightUpdateWithWhereUniqueWithoutParamDeathInput = {
    where: LightWhereUniqueInput
    data: XOR<LightUpdateWithoutParamDeathInput, LightUncheckedUpdateWithoutParamDeathInput>
  }

  export type LightUpdateManyWithWhereWithoutParamDeathInput = {
    where: LightScalarWhereInput
    data: XOR<LightUpdateManyMutationInput, LightUncheckedUpdateManyWithoutDeathLightInput>
  }

  export type LightParamsCreateWithoutLightSkyboxInput = {
    id: number
    highlightSky: number
    glow: number
    waterShallowAlpha: number
    waterDeepAlpha: number
    oceanShallowAlpha: number
    oceanDeepAlpha: number
    flags: number
    standatrdLight?: LightCreateNestedManyWithoutParamStandardInput
    underwaterLight?: LightCreateNestedManyWithoutParamUnderwaterInput
    sunsetLight?: LightCreateNestedManyWithoutParamSunsetInput
    otherLight?: LightCreateNestedManyWithoutParamOtherInput
    deathLight?: LightCreateNestedManyWithoutParamDeathInput
  }

  export type LightParamsUncheckedCreateWithoutLightSkyboxInput = {
    id: number
    highlightSky: number
    glow: number
    waterShallowAlpha: number
    waterDeepAlpha: number
    oceanShallowAlpha: number
    oceanDeepAlpha: number
    flags: number
    standatrdLight?: LightUncheckedCreateNestedManyWithoutParamStandardInput
    underwaterLight?: LightUncheckedCreateNestedManyWithoutParamUnderwaterInput
    sunsetLight?: LightUncheckedCreateNestedManyWithoutParamSunsetInput
    otherLight?: LightUncheckedCreateNestedManyWithoutParamOtherInput
    deathLight?: LightUncheckedCreateNestedManyWithoutParamDeathInput
  }

  export type LightParamsCreateOrConnectWithoutLightSkyboxInput = {
    where: LightParamsWhereUniqueInput
    create: XOR<LightParamsCreateWithoutLightSkyboxInput, LightParamsUncheckedCreateWithoutLightSkyboxInput>
  }

  export type LightParamsUpsertWithWhereUniqueWithoutLightSkyboxInput = {
    where: LightParamsWhereUniqueInput
    update: XOR<LightParamsUpdateWithoutLightSkyboxInput, LightParamsUncheckedUpdateWithoutLightSkyboxInput>
    create: XOR<LightParamsCreateWithoutLightSkyboxInput, LightParamsUncheckedCreateWithoutLightSkyboxInput>
  }

  export type LightParamsUpdateWithWhereUniqueWithoutLightSkyboxInput = {
    where: LightParamsWhereUniqueInput
    data: XOR<LightParamsUpdateWithoutLightSkyboxInput, LightParamsUncheckedUpdateWithoutLightSkyboxInput>
  }

  export type LightParamsUpdateManyWithWhereWithoutLightSkyboxInput = {
    where: LightParamsScalarWhereInput
    data: XOR<LightParamsUpdateManyMutationInput, LightParamsUncheckedUpdateManyWithoutLightParamsInput>
  }

  export type LightParamsScalarWhereInput = {
    AND?: Enumerable<LightParamsScalarWhereInput>
    OR?: Enumerable<LightParamsScalarWhereInput>
    NOT?: Enumerable<LightParamsScalarWhereInput>
    id?: IntFilter | number
    highlightSky?: IntFilter | number
    lightSkyboxId?: IntFilter | number
    glow?: FloatFilter | number
    waterShallowAlpha?: FloatFilter | number
    waterDeepAlpha?: FloatFilter | number
    oceanShallowAlpha?: FloatFilter | number
    oceanDeepAlpha?: FloatFilter | number
    flags?: IntFilter | number
  }

  export type AreaTableCreateWithoutWMOAreaTableInput = {
    id: number
    continent: ContinentCreateNestedOneWithoutAreaTableInput
    parentArea: AreaTableCreateNestedOneWithoutChildAreasInput
    areaBit: number
    flags: number
    soundPreferenceId: number
    underwaterSoundPreferenceId: number
    soundAmbienceId: number
    zoneMusicId: number
    zoneIntroMusicId: number
    explorationLevel: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
    factionGroupMask: number
    liquidTypeId: number
    minElevation: number
    ambientMultiplier: number
    light: LightCreateNestedOneWithoutAreaTableInput
    ChildAreas?: AreaTableCreateNestedManyWithoutParentAreaInput
    AreaPOI?: AreaPOICreateNestedManyWithoutAreaInput
    WorldMapArea?: WorldMapAreaCreateNestedManyWithoutAreaTableInput
    WorldMapOverlay1?: WorldMapOverlayCreateNestedManyWithoutArea_1Input
    WorldMapOverlay2?: WorldMapOverlayCreateNestedManyWithoutArea_2Input
    WorldMapOverlay3?: WorldMapOverlayCreateNestedManyWithoutArea_3Input
    WorldMapOverlay4?: WorldMapOverlayCreateNestedManyWithoutArea_4Input
  }

  export type AreaTableUncheckedCreateWithoutWMOAreaTableInput = {
    id: number
    continentId: number
    parentAreaId: number
    areaBit: number
    flags: number
    soundPreferenceId: number
    underwaterSoundPreferenceId: number
    soundAmbienceId: number
    zoneMusicId: number
    zoneIntroMusicId: number
    explorationLevel: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
    factionGroupMask: number
    liquidTypeId: number
    minElevation: number
    ambientMultiplier: number
    lightId: number
    ChildAreas?: AreaTableUncheckedCreateNestedManyWithoutParentAreaInput
    AreaPOI?: AreaPOIUncheckedCreateNestedManyWithoutAreaInput
    WorldMapArea?: WorldMapAreaUncheckedCreateNestedManyWithoutAreaTableInput
    WorldMapOverlay1?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_1Input
    WorldMapOverlay2?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_2Input
    WorldMapOverlay3?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_3Input
    WorldMapOverlay4?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_4Input
  }

  export type AreaTableCreateOrConnectWithoutWMOAreaTableInput = {
    where: AreaTableWhereUniqueInput
    create: XOR<AreaTableCreateWithoutWMOAreaTableInput, AreaTableUncheckedCreateWithoutWMOAreaTableInput>
  }

  export type AreaTableUpsertWithoutWMOAreaTableInput = {
    update: XOR<AreaTableUpdateWithoutWMOAreaTableInput, AreaTableUncheckedUpdateWithoutWMOAreaTableInput>
    create: XOR<AreaTableCreateWithoutWMOAreaTableInput, AreaTableUncheckedCreateWithoutWMOAreaTableInput>
  }

  export type AreaTableUpdateWithoutWMOAreaTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    continent?: ContinentUpdateOneRequiredWithoutAreaTableNestedInput
    parentArea?: AreaTableUpdateOneRequiredWithoutChildAreasNestedInput
    areaBit?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    soundPreferenceId?: IntFieldUpdateOperationsInput | number
    underwaterSoundPreferenceId?: IntFieldUpdateOperationsInput | number
    soundAmbienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    zoneIntroMusicId?: IntFieldUpdateOperationsInput | number
    explorationLevel?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    factionGroupMask?: IntFieldUpdateOperationsInput | number
    liquidTypeId?: IntFieldUpdateOperationsInput | number
    minElevation?: FloatFieldUpdateOperationsInput | number
    ambientMultiplier?: FloatFieldUpdateOperationsInput | number
    light?: LightUpdateOneRequiredWithoutAreaTableNestedInput
    ChildAreas?: AreaTableUpdateManyWithoutParentAreaNestedInput
    AreaPOI?: AreaPOIUpdateManyWithoutAreaNestedInput
    WorldMapArea?: WorldMapAreaUpdateManyWithoutAreaTableNestedInput
    WorldMapOverlay1?: WorldMapOverlayUpdateManyWithoutArea_1NestedInput
    WorldMapOverlay2?: WorldMapOverlayUpdateManyWithoutArea_2NestedInput
    WorldMapOverlay3?: WorldMapOverlayUpdateManyWithoutArea_3NestedInput
    WorldMapOverlay4?: WorldMapOverlayUpdateManyWithoutArea_4NestedInput
  }

  export type AreaTableUncheckedUpdateWithoutWMOAreaTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    parentAreaId?: IntFieldUpdateOperationsInput | number
    areaBit?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    soundPreferenceId?: IntFieldUpdateOperationsInput | number
    underwaterSoundPreferenceId?: IntFieldUpdateOperationsInput | number
    soundAmbienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    zoneIntroMusicId?: IntFieldUpdateOperationsInput | number
    explorationLevel?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    factionGroupMask?: IntFieldUpdateOperationsInput | number
    liquidTypeId?: IntFieldUpdateOperationsInput | number
    minElevation?: FloatFieldUpdateOperationsInput | number
    ambientMultiplier?: FloatFieldUpdateOperationsInput | number
    lightId?: IntFieldUpdateOperationsInput | number
    ChildAreas?: AreaTableUncheckedUpdateManyWithoutParentAreaNestedInput
    AreaPOI?: AreaPOIUncheckedUpdateManyWithoutAreaNestedInput
    WorldMapArea?: WorldMapAreaUncheckedUpdateManyWithoutAreaTableNestedInput
    WorldMapOverlay1?: WorldMapOverlayUncheckedUpdateManyWithoutArea_1NestedInput
    WorldMapOverlay2?: WorldMapOverlayUncheckedUpdateManyWithoutArea_2NestedInput
    WorldMapOverlay3?: WorldMapOverlayUncheckedUpdateManyWithoutArea_3NestedInput
    WorldMapOverlay4?: WorldMapOverlayUncheckedUpdateManyWithoutArea_4NestedInput
  }

  export type ContinentCreateWithoutWorldMapAreaInput = {
    id: number
    name: string
    AreaPOI?: AreaPOICreateNestedManyWithoutContinentInput
    AreaTable?: AreaTableCreateNestedManyWithoutContinentInput
    WorldMapContinent?: WorldMapContinentCreateNestedManyWithoutContinentInput
    AreaTrigger?: AreaTriggerCreateNestedManyWithoutContinentInput
    Light?: LightCreateNestedManyWithoutContinentInput
  }

  export type ContinentUncheckedCreateWithoutWorldMapAreaInput = {
    id: number
    name: string
    AreaPOI?: AreaPOIUncheckedCreateNestedManyWithoutContinentInput
    AreaTable?: AreaTableUncheckedCreateNestedManyWithoutContinentInput
    WorldMapContinent?: WorldMapContinentUncheckedCreateNestedManyWithoutContinentInput
    AreaTrigger?: AreaTriggerUncheckedCreateNestedManyWithoutContinentInput
    Light?: LightUncheckedCreateNestedManyWithoutContinentInput
  }

  export type ContinentCreateOrConnectWithoutWorldMapAreaInput = {
    where: ContinentWhereUniqueInput
    create: XOR<ContinentCreateWithoutWorldMapAreaInput, ContinentUncheckedCreateWithoutWorldMapAreaInput>
  }

  export type AreaTableCreateWithoutWorldMapAreaInput = {
    id: number
    continent: ContinentCreateNestedOneWithoutAreaTableInput
    parentArea: AreaTableCreateNestedOneWithoutChildAreasInput
    areaBit: number
    flags: number
    soundPreferenceId: number
    underwaterSoundPreferenceId: number
    soundAmbienceId: number
    zoneMusicId: number
    zoneIntroMusicId: number
    explorationLevel: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
    factionGroupMask: number
    liquidTypeId: number
    minElevation: number
    ambientMultiplier: number
    light: LightCreateNestedOneWithoutAreaTableInput
    ChildAreas?: AreaTableCreateNestedManyWithoutParentAreaInput
    AreaPOI?: AreaPOICreateNestedManyWithoutAreaInput
    WMOAreaTable?: WMOAreaTableCreateNestedManyWithoutAreaTableInput
    WorldMapOverlay1?: WorldMapOverlayCreateNestedManyWithoutArea_1Input
    WorldMapOverlay2?: WorldMapOverlayCreateNestedManyWithoutArea_2Input
    WorldMapOverlay3?: WorldMapOverlayCreateNestedManyWithoutArea_3Input
    WorldMapOverlay4?: WorldMapOverlayCreateNestedManyWithoutArea_4Input
  }

  export type AreaTableUncheckedCreateWithoutWorldMapAreaInput = {
    id: number
    continentId: number
    parentAreaId: number
    areaBit: number
    flags: number
    soundPreferenceId: number
    underwaterSoundPreferenceId: number
    soundAmbienceId: number
    zoneMusicId: number
    zoneIntroMusicId: number
    explorationLevel: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
    factionGroupMask: number
    liquidTypeId: number
    minElevation: number
    ambientMultiplier: number
    lightId: number
    ChildAreas?: AreaTableUncheckedCreateNestedManyWithoutParentAreaInput
    AreaPOI?: AreaPOIUncheckedCreateNestedManyWithoutAreaInput
    WMOAreaTable?: WMOAreaTableUncheckedCreateNestedManyWithoutAreaTableInput
    WorldMapOverlay1?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_1Input
    WorldMapOverlay2?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_2Input
    WorldMapOverlay3?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_3Input
    WorldMapOverlay4?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_4Input
  }

  export type AreaTableCreateOrConnectWithoutWorldMapAreaInput = {
    where: AreaTableWhereUniqueInput
    create: XOR<AreaTableCreateWithoutWorldMapAreaInput, AreaTableUncheckedCreateWithoutWorldMapAreaInput>
  }

  export type WorldMapOverlayCreateWithoutMapAreaInput = {
    id: number
    area_1: AreaTableCreateNestedOneWithoutWorldMapOverlay1Input
    area_2: AreaTableCreateNestedOneWithoutWorldMapOverlay2Input
    area_3: AreaTableCreateNestedOneWithoutWorldMapOverlay3Input
    area_4: AreaTableCreateNestedOneWithoutWorldMapOverlay4Input
    mapPointX: number
    mapPointY: number
    texture: string
    textureWidth: number
    textureHeight: number
    offsetX: number
    offsetY: number
    hitRectTop: number
    hitRectLeft: number
    hitRectBottom: number
    hitRectRight: number
  }

  export type WorldMapOverlayUncheckedCreateWithoutMapAreaInput = {
    id: number
    areaId_1: number
    areaId_2: number
    areaId_3: number
    areaId_4: number
    mapPointX: number
    mapPointY: number
    texture: string
    textureWidth: number
    textureHeight: number
    offsetX: number
    offsetY: number
    hitRectTop: number
    hitRectLeft: number
    hitRectBottom: number
    hitRectRight: number
  }

  export type WorldMapOverlayCreateOrConnectWithoutMapAreaInput = {
    where: WorldMapOverlayWhereUniqueInput
    create: XOR<WorldMapOverlayCreateWithoutMapAreaInput, WorldMapOverlayUncheckedCreateWithoutMapAreaInput>
  }

  export type ContinentUpsertWithoutWorldMapAreaInput = {
    update: XOR<ContinentUpdateWithoutWorldMapAreaInput, ContinentUncheckedUpdateWithoutWorldMapAreaInput>
    create: XOR<ContinentCreateWithoutWorldMapAreaInput, ContinentUncheckedCreateWithoutWorldMapAreaInput>
  }

  export type ContinentUpdateWithoutWorldMapAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    AreaPOI?: AreaPOIUpdateManyWithoutContinentNestedInput
    AreaTable?: AreaTableUpdateManyWithoutContinentNestedInput
    WorldMapContinent?: WorldMapContinentUpdateManyWithoutContinentNestedInput
    AreaTrigger?: AreaTriggerUpdateManyWithoutContinentNestedInput
    Light?: LightUpdateManyWithoutContinentNestedInput
  }

  export type ContinentUncheckedUpdateWithoutWorldMapAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    AreaPOI?: AreaPOIUncheckedUpdateManyWithoutContinentNestedInput
    AreaTable?: AreaTableUncheckedUpdateManyWithoutContinentNestedInput
    WorldMapContinent?: WorldMapContinentUncheckedUpdateManyWithoutContinentNestedInput
    AreaTrigger?: AreaTriggerUncheckedUpdateManyWithoutContinentNestedInput
    Light?: LightUncheckedUpdateManyWithoutContinentNestedInput
  }

  export type AreaTableUpsertWithoutWorldMapAreaInput = {
    update: XOR<AreaTableUpdateWithoutWorldMapAreaInput, AreaTableUncheckedUpdateWithoutWorldMapAreaInput>
    create: XOR<AreaTableCreateWithoutWorldMapAreaInput, AreaTableUncheckedCreateWithoutWorldMapAreaInput>
  }

  export type AreaTableUpdateWithoutWorldMapAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    continent?: ContinentUpdateOneRequiredWithoutAreaTableNestedInput
    parentArea?: AreaTableUpdateOneRequiredWithoutChildAreasNestedInput
    areaBit?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    soundPreferenceId?: IntFieldUpdateOperationsInput | number
    underwaterSoundPreferenceId?: IntFieldUpdateOperationsInput | number
    soundAmbienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    zoneIntroMusicId?: IntFieldUpdateOperationsInput | number
    explorationLevel?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    factionGroupMask?: IntFieldUpdateOperationsInput | number
    liquidTypeId?: IntFieldUpdateOperationsInput | number
    minElevation?: FloatFieldUpdateOperationsInput | number
    ambientMultiplier?: FloatFieldUpdateOperationsInput | number
    light?: LightUpdateOneRequiredWithoutAreaTableNestedInput
    ChildAreas?: AreaTableUpdateManyWithoutParentAreaNestedInput
    AreaPOI?: AreaPOIUpdateManyWithoutAreaNestedInput
    WMOAreaTable?: WMOAreaTableUpdateManyWithoutAreaTableNestedInput
    WorldMapOverlay1?: WorldMapOverlayUpdateManyWithoutArea_1NestedInput
    WorldMapOverlay2?: WorldMapOverlayUpdateManyWithoutArea_2NestedInput
    WorldMapOverlay3?: WorldMapOverlayUpdateManyWithoutArea_3NestedInput
    WorldMapOverlay4?: WorldMapOverlayUpdateManyWithoutArea_4NestedInput
  }

  export type AreaTableUncheckedUpdateWithoutWorldMapAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    parentAreaId?: IntFieldUpdateOperationsInput | number
    areaBit?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    soundPreferenceId?: IntFieldUpdateOperationsInput | number
    underwaterSoundPreferenceId?: IntFieldUpdateOperationsInput | number
    soundAmbienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    zoneIntroMusicId?: IntFieldUpdateOperationsInput | number
    explorationLevel?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    factionGroupMask?: IntFieldUpdateOperationsInput | number
    liquidTypeId?: IntFieldUpdateOperationsInput | number
    minElevation?: FloatFieldUpdateOperationsInput | number
    ambientMultiplier?: FloatFieldUpdateOperationsInput | number
    lightId?: IntFieldUpdateOperationsInput | number
    ChildAreas?: AreaTableUncheckedUpdateManyWithoutParentAreaNestedInput
    AreaPOI?: AreaPOIUncheckedUpdateManyWithoutAreaNestedInput
    WMOAreaTable?: WMOAreaTableUncheckedUpdateManyWithoutAreaTableNestedInput
    WorldMapOverlay1?: WorldMapOverlayUncheckedUpdateManyWithoutArea_1NestedInput
    WorldMapOverlay2?: WorldMapOverlayUncheckedUpdateManyWithoutArea_2NestedInput
    WorldMapOverlay3?: WorldMapOverlayUncheckedUpdateManyWithoutArea_3NestedInput
    WorldMapOverlay4?: WorldMapOverlayUncheckedUpdateManyWithoutArea_4NestedInput
  }

  export type WorldMapOverlayUpsertWithWhereUniqueWithoutMapAreaInput = {
    where: WorldMapOverlayWhereUniqueInput
    update: XOR<WorldMapOverlayUpdateWithoutMapAreaInput, WorldMapOverlayUncheckedUpdateWithoutMapAreaInput>
    create: XOR<WorldMapOverlayCreateWithoutMapAreaInput, WorldMapOverlayUncheckedCreateWithoutMapAreaInput>
  }

  export type WorldMapOverlayUpdateWithWhereUniqueWithoutMapAreaInput = {
    where: WorldMapOverlayWhereUniqueInput
    data: XOR<WorldMapOverlayUpdateWithoutMapAreaInput, WorldMapOverlayUncheckedUpdateWithoutMapAreaInput>
  }

  export type WorldMapOverlayUpdateManyWithWhereWithoutMapAreaInput = {
    where: WorldMapOverlayScalarWhereInput
    data: XOR<WorldMapOverlayUpdateManyMutationInput, WorldMapOverlayUncheckedUpdateManyWithoutWorldMapOverlayInput>
  }

  export type ContinentCreateWithoutWorldMapContinentInput = {
    id: number
    name: string
    AreaPOI?: AreaPOICreateNestedManyWithoutContinentInput
    AreaTable?: AreaTableCreateNestedManyWithoutContinentInput
    WorldMapArea?: WorldMapAreaCreateNestedManyWithoutContinentInput
    AreaTrigger?: AreaTriggerCreateNestedManyWithoutContinentInput
    Light?: LightCreateNestedManyWithoutContinentInput
  }

  export type ContinentUncheckedCreateWithoutWorldMapContinentInput = {
    id: number
    name: string
    AreaPOI?: AreaPOIUncheckedCreateNestedManyWithoutContinentInput
    AreaTable?: AreaTableUncheckedCreateNestedManyWithoutContinentInput
    WorldMapArea?: WorldMapAreaUncheckedCreateNestedManyWithoutContinentInput
    AreaTrigger?: AreaTriggerUncheckedCreateNestedManyWithoutContinentInput
    Light?: LightUncheckedCreateNestedManyWithoutContinentInput
  }

  export type ContinentCreateOrConnectWithoutWorldMapContinentInput = {
    where: ContinentWhereUniqueInput
    create: XOR<ContinentCreateWithoutWorldMapContinentInput, ContinentUncheckedCreateWithoutWorldMapContinentInput>
  }

  export type ContinentUpsertWithoutWorldMapContinentInput = {
    update: XOR<ContinentUpdateWithoutWorldMapContinentInput, ContinentUncheckedUpdateWithoutWorldMapContinentInput>
    create: XOR<ContinentCreateWithoutWorldMapContinentInput, ContinentUncheckedCreateWithoutWorldMapContinentInput>
  }

  export type ContinentUpdateWithoutWorldMapContinentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    AreaPOI?: AreaPOIUpdateManyWithoutContinentNestedInput
    AreaTable?: AreaTableUpdateManyWithoutContinentNestedInput
    WorldMapArea?: WorldMapAreaUpdateManyWithoutContinentNestedInput
    AreaTrigger?: AreaTriggerUpdateManyWithoutContinentNestedInput
    Light?: LightUpdateManyWithoutContinentNestedInput
  }

  export type ContinentUncheckedUpdateWithoutWorldMapContinentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    AreaPOI?: AreaPOIUncheckedUpdateManyWithoutContinentNestedInput
    AreaTable?: AreaTableUncheckedUpdateManyWithoutContinentNestedInput
    WorldMapArea?: WorldMapAreaUncheckedUpdateManyWithoutContinentNestedInput
    AreaTrigger?: AreaTriggerUncheckedUpdateManyWithoutContinentNestedInput
    Light?: LightUncheckedUpdateManyWithoutContinentNestedInput
  }

  export type WorldMapAreaCreateWithoutWorldMapOverlayInput = {
    continent: ContinentCreateNestedOneWithoutWorldMapAreaInput
    areaTable: AreaTableCreateNestedOneWithoutWorldMapAreaInput
    name: string
    locLeft: number
    locRight: number
    locTop: number
    locBottom: number
  }

  export type WorldMapAreaUncheckedCreateWithoutWorldMapOverlayInput = {
    id?: number
    continentId: number
    areaId: number
    name: string
    locLeft: number
    locRight: number
    locTop: number
    locBottom: number
  }

  export type WorldMapAreaCreateOrConnectWithoutWorldMapOverlayInput = {
    where: WorldMapAreaWhereUniqueInput
    create: XOR<WorldMapAreaCreateWithoutWorldMapOverlayInput, WorldMapAreaUncheckedCreateWithoutWorldMapOverlayInput>
  }

  export type AreaTableCreateWithoutWorldMapOverlay1Input = {
    id: number
    continent: ContinentCreateNestedOneWithoutAreaTableInput
    parentArea: AreaTableCreateNestedOneWithoutChildAreasInput
    areaBit: number
    flags: number
    soundPreferenceId: number
    underwaterSoundPreferenceId: number
    soundAmbienceId: number
    zoneMusicId: number
    zoneIntroMusicId: number
    explorationLevel: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
    factionGroupMask: number
    liquidTypeId: number
    minElevation: number
    ambientMultiplier: number
    light: LightCreateNestedOneWithoutAreaTableInput
    ChildAreas?: AreaTableCreateNestedManyWithoutParentAreaInput
    AreaPOI?: AreaPOICreateNestedManyWithoutAreaInput
    WMOAreaTable?: WMOAreaTableCreateNestedManyWithoutAreaTableInput
    WorldMapArea?: WorldMapAreaCreateNestedManyWithoutAreaTableInput
    WorldMapOverlay2?: WorldMapOverlayCreateNestedManyWithoutArea_2Input
    WorldMapOverlay3?: WorldMapOverlayCreateNestedManyWithoutArea_3Input
    WorldMapOverlay4?: WorldMapOverlayCreateNestedManyWithoutArea_4Input
  }

  export type AreaTableUncheckedCreateWithoutWorldMapOverlay1Input = {
    id: number
    continentId: number
    parentAreaId: number
    areaBit: number
    flags: number
    soundPreferenceId: number
    underwaterSoundPreferenceId: number
    soundAmbienceId: number
    zoneMusicId: number
    zoneIntroMusicId: number
    explorationLevel: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
    factionGroupMask: number
    liquidTypeId: number
    minElevation: number
    ambientMultiplier: number
    lightId: number
    ChildAreas?: AreaTableUncheckedCreateNestedManyWithoutParentAreaInput
    AreaPOI?: AreaPOIUncheckedCreateNestedManyWithoutAreaInput
    WMOAreaTable?: WMOAreaTableUncheckedCreateNestedManyWithoutAreaTableInput
    WorldMapArea?: WorldMapAreaUncheckedCreateNestedManyWithoutAreaTableInput
    WorldMapOverlay2?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_2Input
    WorldMapOverlay3?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_3Input
    WorldMapOverlay4?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_4Input
  }

  export type AreaTableCreateOrConnectWithoutWorldMapOverlay1Input = {
    where: AreaTableWhereUniqueInput
    create: XOR<AreaTableCreateWithoutWorldMapOverlay1Input, AreaTableUncheckedCreateWithoutWorldMapOverlay1Input>
  }

  export type AreaTableCreateWithoutWorldMapOverlay2Input = {
    id: number
    continent: ContinentCreateNestedOneWithoutAreaTableInput
    parentArea: AreaTableCreateNestedOneWithoutChildAreasInput
    areaBit: number
    flags: number
    soundPreferenceId: number
    underwaterSoundPreferenceId: number
    soundAmbienceId: number
    zoneMusicId: number
    zoneIntroMusicId: number
    explorationLevel: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
    factionGroupMask: number
    liquidTypeId: number
    minElevation: number
    ambientMultiplier: number
    light: LightCreateNestedOneWithoutAreaTableInput
    ChildAreas?: AreaTableCreateNestedManyWithoutParentAreaInput
    AreaPOI?: AreaPOICreateNestedManyWithoutAreaInput
    WMOAreaTable?: WMOAreaTableCreateNestedManyWithoutAreaTableInput
    WorldMapArea?: WorldMapAreaCreateNestedManyWithoutAreaTableInput
    WorldMapOverlay1?: WorldMapOverlayCreateNestedManyWithoutArea_1Input
    WorldMapOverlay3?: WorldMapOverlayCreateNestedManyWithoutArea_3Input
    WorldMapOverlay4?: WorldMapOverlayCreateNestedManyWithoutArea_4Input
  }

  export type AreaTableUncheckedCreateWithoutWorldMapOverlay2Input = {
    id: number
    continentId: number
    parentAreaId: number
    areaBit: number
    flags: number
    soundPreferenceId: number
    underwaterSoundPreferenceId: number
    soundAmbienceId: number
    zoneMusicId: number
    zoneIntroMusicId: number
    explorationLevel: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
    factionGroupMask: number
    liquidTypeId: number
    minElevation: number
    ambientMultiplier: number
    lightId: number
    ChildAreas?: AreaTableUncheckedCreateNestedManyWithoutParentAreaInput
    AreaPOI?: AreaPOIUncheckedCreateNestedManyWithoutAreaInput
    WMOAreaTable?: WMOAreaTableUncheckedCreateNestedManyWithoutAreaTableInput
    WorldMapArea?: WorldMapAreaUncheckedCreateNestedManyWithoutAreaTableInput
    WorldMapOverlay1?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_1Input
    WorldMapOverlay3?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_3Input
    WorldMapOverlay4?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_4Input
  }

  export type AreaTableCreateOrConnectWithoutWorldMapOverlay2Input = {
    where: AreaTableWhereUniqueInput
    create: XOR<AreaTableCreateWithoutWorldMapOverlay2Input, AreaTableUncheckedCreateWithoutWorldMapOverlay2Input>
  }

  export type AreaTableCreateWithoutWorldMapOverlay3Input = {
    id: number
    continent: ContinentCreateNestedOneWithoutAreaTableInput
    parentArea: AreaTableCreateNestedOneWithoutChildAreasInput
    areaBit: number
    flags: number
    soundPreferenceId: number
    underwaterSoundPreferenceId: number
    soundAmbienceId: number
    zoneMusicId: number
    zoneIntroMusicId: number
    explorationLevel: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
    factionGroupMask: number
    liquidTypeId: number
    minElevation: number
    ambientMultiplier: number
    light: LightCreateNestedOneWithoutAreaTableInput
    ChildAreas?: AreaTableCreateNestedManyWithoutParentAreaInput
    AreaPOI?: AreaPOICreateNestedManyWithoutAreaInput
    WMOAreaTable?: WMOAreaTableCreateNestedManyWithoutAreaTableInput
    WorldMapArea?: WorldMapAreaCreateNestedManyWithoutAreaTableInput
    WorldMapOverlay1?: WorldMapOverlayCreateNestedManyWithoutArea_1Input
    WorldMapOverlay2?: WorldMapOverlayCreateNestedManyWithoutArea_2Input
    WorldMapOverlay4?: WorldMapOverlayCreateNestedManyWithoutArea_4Input
  }

  export type AreaTableUncheckedCreateWithoutWorldMapOverlay3Input = {
    id: number
    continentId: number
    parentAreaId: number
    areaBit: number
    flags: number
    soundPreferenceId: number
    underwaterSoundPreferenceId: number
    soundAmbienceId: number
    zoneMusicId: number
    zoneIntroMusicId: number
    explorationLevel: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
    factionGroupMask: number
    liquidTypeId: number
    minElevation: number
    ambientMultiplier: number
    lightId: number
    ChildAreas?: AreaTableUncheckedCreateNestedManyWithoutParentAreaInput
    AreaPOI?: AreaPOIUncheckedCreateNestedManyWithoutAreaInput
    WMOAreaTable?: WMOAreaTableUncheckedCreateNestedManyWithoutAreaTableInput
    WorldMapArea?: WorldMapAreaUncheckedCreateNestedManyWithoutAreaTableInput
    WorldMapOverlay1?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_1Input
    WorldMapOverlay2?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_2Input
    WorldMapOverlay4?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_4Input
  }

  export type AreaTableCreateOrConnectWithoutWorldMapOverlay3Input = {
    where: AreaTableWhereUniqueInput
    create: XOR<AreaTableCreateWithoutWorldMapOverlay3Input, AreaTableUncheckedCreateWithoutWorldMapOverlay3Input>
  }

  export type AreaTableCreateWithoutWorldMapOverlay4Input = {
    id: number
    continent: ContinentCreateNestedOneWithoutAreaTableInput
    parentArea: AreaTableCreateNestedOneWithoutChildAreasInput
    areaBit: number
    flags: number
    soundPreferenceId: number
    underwaterSoundPreferenceId: number
    soundAmbienceId: number
    zoneMusicId: number
    zoneIntroMusicId: number
    explorationLevel: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
    factionGroupMask: number
    liquidTypeId: number
    minElevation: number
    ambientMultiplier: number
    light: LightCreateNestedOneWithoutAreaTableInput
    ChildAreas?: AreaTableCreateNestedManyWithoutParentAreaInput
    AreaPOI?: AreaPOICreateNestedManyWithoutAreaInput
    WMOAreaTable?: WMOAreaTableCreateNestedManyWithoutAreaTableInput
    WorldMapArea?: WorldMapAreaCreateNestedManyWithoutAreaTableInput
    WorldMapOverlay1?: WorldMapOverlayCreateNestedManyWithoutArea_1Input
    WorldMapOverlay2?: WorldMapOverlayCreateNestedManyWithoutArea_2Input
    WorldMapOverlay3?: WorldMapOverlayCreateNestedManyWithoutArea_3Input
  }

  export type AreaTableUncheckedCreateWithoutWorldMapOverlay4Input = {
    id: number
    continentId: number
    parentAreaId: number
    areaBit: number
    flags: number
    soundPreferenceId: number
    underwaterSoundPreferenceId: number
    soundAmbienceId: number
    zoneMusicId: number
    zoneIntroMusicId: number
    explorationLevel: number
    name_enUS: string
    name_enGB: string
    name_koKR: string
    name_frFR: string
    name_deDE: string
    name_enCN: string
    name_zhCN: string
    name_enTW: string
    nameMask: number
    factionGroupMask: number
    liquidTypeId: number
    minElevation: number
    ambientMultiplier: number
    lightId: number
    ChildAreas?: AreaTableUncheckedCreateNestedManyWithoutParentAreaInput
    AreaPOI?: AreaPOIUncheckedCreateNestedManyWithoutAreaInput
    WMOAreaTable?: WMOAreaTableUncheckedCreateNestedManyWithoutAreaTableInput
    WorldMapArea?: WorldMapAreaUncheckedCreateNestedManyWithoutAreaTableInput
    WorldMapOverlay1?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_1Input
    WorldMapOverlay2?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_2Input
    WorldMapOverlay3?: WorldMapOverlayUncheckedCreateNestedManyWithoutArea_3Input
  }

  export type AreaTableCreateOrConnectWithoutWorldMapOverlay4Input = {
    where: AreaTableWhereUniqueInput
    create: XOR<AreaTableCreateWithoutWorldMapOverlay4Input, AreaTableUncheckedCreateWithoutWorldMapOverlay4Input>
  }

  export type WorldMapAreaUpsertWithoutWorldMapOverlayInput = {
    update: XOR<WorldMapAreaUpdateWithoutWorldMapOverlayInput, WorldMapAreaUncheckedUpdateWithoutWorldMapOverlayInput>
    create: XOR<WorldMapAreaCreateWithoutWorldMapOverlayInput, WorldMapAreaUncheckedCreateWithoutWorldMapOverlayInput>
  }

  export type WorldMapAreaUpdateWithoutWorldMapOverlayInput = {
    continent?: ContinentUpdateOneRequiredWithoutWorldMapAreaNestedInput
    areaTable?: AreaTableUpdateOneRequiredWithoutWorldMapAreaNestedInput
    name?: StringFieldUpdateOperationsInput | string
    locLeft?: FloatFieldUpdateOperationsInput | number
    locRight?: FloatFieldUpdateOperationsInput | number
    locTop?: FloatFieldUpdateOperationsInput | number
    locBottom?: FloatFieldUpdateOperationsInput | number
  }

  export type WorldMapAreaUncheckedUpdateWithoutWorldMapOverlayInput = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    areaId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    locLeft?: FloatFieldUpdateOperationsInput | number
    locRight?: FloatFieldUpdateOperationsInput | number
    locTop?: FloatFieldUpdateOperationsInput | number
    locBottom?: FloatFieldUpdateOperationsInput | number
  }

  export type AreaTableUpsertWithoutWorldMapOverlay1Input = {
    update: XOR<AreaTableUpdateWithoutWorldMapOverlay1Input, AreaTableUncheckedUpdateWithoutWorldMapOverlay1Input>
    create: XOR<AreaTableCreateWithoutWorldMapOverlay1Input, AreaTableUncheckedCreateWithoutWorldMapOverlay1Input>
  }

  export type AreaTableUpdateWithoutWorldMapOverlay1Input = {
    id?: IntFieldUpdateOperationsInput | number
    continent?: ContinentUpdateOneRequiredWithoutAreaTableNestedInput
    parentArea?: AreaTableUpdateOneRequiredWithoutChildAreasNestedInput
    areaBit?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    soundPreferenceId?: IntFieldUpdateOperationsInput | number
    underwaterSoundPreferenceId?: IntFieldUpdateOperationsInput | number
    soundAmbienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    zoneIntroMusicId?: IntFieldUpdateOperationsInput | number
    explorationLevel?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    factionGroupMask?: IntFieldUpdateOperationsInput | number
    liquidTypeId?: IntFieldUpdateOperationsInput | number
    minElevation?: FloatFieldUpdateOperationsInput | number
    ambientMultiplier?: FloatFieldUpdateOperationsInput | number
    light?: LightUpdateOneRequiredWithoutAreaTableNestedInput
    ChildAreas?: AreaTableUpdateManyWithoutParentAreaNestedInput
    AreaPOI?: AreaPOIUpdateManyWithoutAreaNestedInput
    WMOAreaTable?: WMOAreaTableUpdateManyWithoutAreaTableNestedInput
    WorldMapArea?: WorldMapAreaUpdateManyWithoutAreaTableNestedInput
    WorldMapOverlay2?: WorldMapOverlayUpdateManyWithoutArea_2NestedInput
    WorldMapOverlay3?: WorldMapOverlayUpdateManyWithoutArea_3NestedInput
    WorldMapOverlay4?: WorldMapOverlayUpdateManyWithoutArea_4NestedInput
  }

  export type AreaTableUncheckedUpdateWithoutWorldMapOverlay1Input = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    parentAreaId?: IntFieldUpdateOperationsInput | number
    areaBit?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    soundPreferenceId?: IntFieldUpdateOperationsInput | number
    underwaterSoundPreferenceId?: IntFieldUpdateOperationsInput | number
    soundAmbienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    zoneIntroMusicId?: IntFieldUpdateOperationsInput | number
    explorationLevel?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    factionGroupMask?: IntFieldUpdateOperationsInput | number
    liquidTypeId?: IntFieldUpdateOperationsInput | number
    minElevation?: FloatFieldUpdateOperationsInput | number
    ambientMultiplier?: FloatFieldUpdateOperationsInput | number
    lightId?: IntFieldUpdateOperationsInput | number
    ChildAreas?: AreaTableUncheckedUpdateManyWithoutParentAreaNestedInput
    AreaPOI?: AreaPOIUncheckedUpdateManyWithoutAreaNestedInput
    WMOAreaTable?: WMOAreaTableUncheckedUpdateManyWithoutAreaTableNestedInput
    WorldMapArea?: WorldMapAreaUncheckedUpdateManyWithoutAreaTableNestedInput
    WorldMapOverlay2?: WorldMapOverlayUncheckedUpdateManyWithoutArea_2NestedInput
    WorldMapOverlay3?: WorldMapOverlayUncheckedUpdateManyWithoutArea_3NestedInput
    WorldMapOverlay4?: WorldMapOverlayUncheckedUpdateManyWithoutArea_4NestedInput
  }

  export type AreaTableUpsertWithoutWorldMapOverlay2Input = {
    update: XOR<AreaTableUpdateWithoutWorldMapOverlay2Input, AreaTableUncheckedUpdateWithoutWorldMapOverlay2Input>
    create: XOR<AreaTableCreateWithoutWorldMapOverlay2Input, AreaTableUncheckedCreateWithoutWorldMapOverlay2Input>
  }

  export type AreaTableUpdateWithoutWorldMapOverlay2Input = {
    id?: IntFieldUpdateOperationsInput | number
    continent?: ContinentUpdateOneRequiredWithoutAreaTableNestedInput
    parentArea?: AreaTableUpdateOneRequiredWithoutChildAreasNestedInput
    areaBit?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    soundPreferenceId?: IntFieldUpdateOperationsInput | number
    underwaterSoundPreferenceId?: IntFieldUpdateOperationsInput | number
    soundAmbienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    zoneIntroMusicId?: IntFieldUpdateOperationsInput | number
    explorationLevel?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    factionGroupMask?: IntFieldUpdateOperationsInput | number
    liquidTypeId?: IntFieldUpdateOperationsInput | number
    minElevation?: FloatFieldUpdateOperationsInput | number
    ambientMultiplier?: FloatFieldUpdateOperationsInput | number
    light?: LightUpdateOneRequiredWithoutAreaTableNestedInput
    ChildAreas?: AreaTableUpdateManyWithoutParentAreaNestedInput
    AreaPOI?: AreaPOIUpdateManyWithoutAreaNestedInput
    WMOAreaTable?: WMOAreaTableUpdateManyWithoutAreaTableNestedInput
    WorldMapArea?: WorldMapAreaUpdateManyWithoutAreaTableNestedInput
    WorldMapOverlay1?: WorldMapOverlayUpdateManyWithoutArea_1NestedInput
    WorldMapOverlay3?: WorldMapOverlayUpdateManyWithoutArea_3NestedInput
    WorldMapOverlay4?: WorldMapOverlayUpdateManyWithoutArea_4NestedInput
  }

  export type AreaTableUncheckedUpdateWithoutWorldMapOverlay2Input = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    parentAreaId?: IntFieldUpdateOperationsInput | number
    areaBit?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    soundPreferenceId?: IntFieldUpdateOperationsInput | number
    underwaterSoundPreferenceId?: IntFieldUpdateOperationsInput | number
    soundAmbienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    zoneIntroMusicId?: IntFieldUpdateOperationsInput | number
    explorationLevel?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    factionGroupMask?: IntFieldUpdateOperationsInput | number
    liquidTypeId?: IntFieldUpdateOperationsInput | number
    minElevation?: FloatFieldUpdateOperationsInput | number
    ambientMultiplier?: FloatFieldUpdateOperationsInput | number
    lightId?: IntFieldUpdateOperationsInput | number
    ChildAreas?: AreaTableUncheckedUpdateManyWithoutParentAreaNestedInput
    AreaPOI?: AreaPOIUncheckedUpdateManyWithoutAreaNestedInput
    WMOAreaTable?: WMOAreaTableUncheckedUpdateManyWithoutAreaTableNestedInput
    WorldMapArea?: WorldMapAreaUncheckedUpdateManyWithoutAreaTableNestedInput
    WorldMapOverlay1?: WorldMapOverlayUncheckedUpdateManyWithoutArea_1NestedInput
    WorldMapOverlay3?: WorldMapOverlayUncheckedUpdateManyWithoutArea_3NestedInput
    WorldMapOverlay4?: WorldMapOverlayUncheckedUpdateManyWithoutArea_4NestedInput
  }

  export type AreaTableUpsertWithoutWorldMapOverlay3Input = {
    update: XOR<AreaTableUpdateWithoutWorldMapOverlay3Input, AreaTableUncheckedUpdateWithoutWorldMapOverlay3Input>
    create: XOR<AreaTableCreateWithoutWorldMapOverlay3Input, AreaTableUncheckedCreateWithoutWorldMapOverlay3Input>
  }

  export type AreaTableUpdateWithoutWorldMapOverlay3Input = {
    id?: IntFieldUpdateOperationsInput | number
    continent?: ContinentUpdateOneRequiredWithoutAreaTableNestedInput
    parentArea?: AreaTableUpdateOneRequiredWithoutChildAreasNestedInput
    areaBit?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    soundPreferenceId?: IntFieldUpdateOperationsInput | number
    underwaterSoundPreferenceId?: IntFieldUpdateOperationsInput | number
    soundAmbienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    zoneIntroMusicId?: IntFieldUpdateOperationsInput | number
    explorationLevel?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    factionGroupMask?: IntFieldUpdateOperationsInput | number
    liquidTypeId?: IntFieldUpdateOperationsInput | number
    minElevation?: FloatFieldUpdateOperationsInput | number
    ambientMultiplier?: FloatFieldUpdateOperationsInput | number
    light?: LightUpdateOneRequiredWithoutAreaTableNestedInput
    ChildAreas?: AreaTableUpdateManyWithoutParentAreaNestedInput
    AreaPOI?: AreaPOIUpdateManyWithoutAreaNestedInput
    WMOAreaTable?: WMOAreaTableUpdateManyWithoutAreaTableNestedInput
    WorldMapArea?: WorldMapAreaUpdateManyWithoutAreaTableNestedInput
    WorldMapOverlay1?: WorldMapOverlayUpdateManyWithoutArea_1NestedInput
    WorldMapOverlay2?: WorldMapOverlayUpdateManyWithoutArea_2NestedInput
    WorldMapOverlay4?: WorldMapOverlayUpdateManyWithoutArea_4NestedInput
  }

  export type AreaTableUncheckedUpdateWithoutWorldMapOverlay3Input = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    parentAreaId?: IntFieldUpdateOperationsInput | number
    areaBit?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    soundPreferenceId?: IntFieldUpdateOperationsInput | number
    underwaterSoundPreferenceId?: IntFieldUpdateOperationsInput | number
    soundAmbienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    zoneIntroMusicId?: IntFieldUpdateOperationsInput | number
    explorationLevel?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    factionGroupMask?: IntFieldUpdateOperationsInput | number
    liquidTypeId?: IntFieldUpdateOperationsInput | number
    minElevation?: FloatFieldUpdateOperationsInput | number
    ambientMultiplier?: FloatFieldUpdateOperationsInput | number
    lightId?: IntFieldUpdateOperationsInput | number
    ChildAreas?: AreaTableUncheckedUpdateManyWithoutParentAreaNestedInput
    AreaPOI?: AreaPOIUncheckedUpdateManyWithoutAreaNestedInput
    WMOAreaTable?: WMOAreaTableUncheckedUpdateManyWithoutAreaTableNestedInput
    WorldMapArea?: WorldMapAreaUncheckedUpdateManyWithoutAreaTableNestedInput
    WorldMapOverlay1?: WorldMapOverlayUncheckedUpdateManyWithoutArea_1NestedInput
    WorldMapOverlay2?: WorldMapOverlayUncheckedUpdateManyWithoutArea_2NestedInput
    WorldMapOverlay4?: WorldMapOverlayUncheckedUpdateManyWithoutArea_4NestedInput
  }

  export type AreaTableUpsertWithoutWorldMapOverlay4Input = {
    update: XOR<AreaTableUpdateWithoutWorldMapOverlay4Input, AreaTableUncheckedUpdateWithoutWorldMapOverlay4Input>
    create: XOR<AreaTableCreateWithoutWorldMapOverlay4Input, AreaTableUncheckedCreateWithoutWorldMapOverlay4Input>
  }

  export type AreaTableUpdateWithoutWorldMapOverlay4Input = {
    id?: IntFieldUpdateOperationsInput | number
    continent?: ContinentUpdateOneRequiredWithoutAreaTableNestedInput
    parentArea?: AreaTableUpdateOneRequiredWithoutChildAreasNestedInput
    areaBit?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    soundPreferenceId?: IntFieldUpdateOperationsInput | number
    underwaterSoundPreferenceId?: IntFieldUpdateOperationsInput | number
    soundAmbienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    zoneIntroMusicId?: IntFieldUpdateOperationsInput | number
    explorationLevel?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    factionGroupMask?: IntFieldUpdateOperationsInput | number
    liquidTypeId?: IntFieldUpdateOperationsInput | number
    minElevation?: FloatFieldUpdateOperationsInput | number
    ambientMultiplier?: FloatFieldUpdateOperationsInput | number
    light?: LightUpdateOneRequiredWithoutAreaTableNestedInput
    ChildAreas?: AreaTableUpdateManyWithoutParentAreaNestedInput
    AreaPOI?: AreaPOIUpdateManyWithoutAreaNestedInput
    WMOAreaTable?: WMOAreaTableUpdateManyWithoutAreaTableNestedInput
    WorldMapArea?: WorldMapAreaUpdateManyWithoutAreaTableNestedInput
    WorldMapOverlay1?: WorldMapOverlayUpdateManyWithoutArea_1NestedInput
    WorldMapOverlay2?: WorldMapOverlayUpdateManyWithoutArea_2NestedInput
    WorldMapOverlay3?: WorldMapOverlayUpdateManyWithoutArea_3NestedInput
  }

  export type AreaTableUncheckedUpdateWithoutWorldMapOverlay4Input = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    parentAreaId?: IntFieldUpdateOperationsInput | number
    areaBit?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    soundPreferenceId?: IntFieldUpdateOperationsInput | number
    underwaterSoundPreferenceId?: IntFieldUpdateOperationsInput | number
    soundAmbienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    zoneIntroMusicId?: IntFieldUpdateOperationsInput | number
    explorationLevel?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    factionGroupMask?: IntFieldUpdateOperationsInput | number
    liquidTypeId?: IntFieldUpdateOperationsInput | number
    minElevation?: FloatFieldUpdateOperationsInput | number
    ambientMultiplier?: FloatFieldUpdateOperationsInput | number
    lightId?: IntFieldUpdateOperationsInput | number
    ChildAreas?: AreaTableUncheckedUpdateManyWithoutParentAreaNestedInput
    AreaPOI?: AreaPOIUncheckedUpdateManyWithoutAreaNestedInput
    WMOAreaTable?: WMOAreaTableUncheckedUpdateManyWithoutAreaTableNestedInput
    WorldMapArea?: WorldMapAreaUncheckedUpdateManyWithoutAreaTableNestedInput
    WorldMapOverlay1?: WorldMapOverlayUncheckedUpdateManyWithoutArea_1NestedInput
    WorldMapOverlay2?: WorldMapOverlayUncheckedUpdateManyWithoutArea_2NestedInput
    WorldMapOverlay3?: WorldMapOverlayUncheckedUpdateManyWithoutArea_3NestedInput
  }

  export type AreaPOIUpdateWithoutContinentInput = {
    id?: IntFieldUpdateOperationsInput | number
    importance?: IntFieldUpdateOperationsInput | number
    icon?: IntFieldUpdateOperationsInput | number
    factionId?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    area?: AreaTableUpdateOneRequiredWithoutAreaPOINestedInput
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    description_enUS?: StringFieldUpdateOperationsInput | string
    description_enGB?: StringFieldUpdateOperationsInput | string
    description_koKR?: StringFieldUpdateOperationsInput | string
    description_frFR?: StringFieldUpdateOperationsInput | string
    description_deDE?: StringFieldUpdateOperationsInput | string
    description_enCN?: StringFieldUpdateOperationsInput | string
    description_zhCN?: StringFieldUpdateOperationsInput | string
    description_enTW?: StringFieldUpdateOperationsInput | string
    descriptionMask?: IntFieldUpdateOperationsInput | number
    worldStateId?: IntFieldUpdateOperationsInput | number
  }

  export type AreaPOIUncheckedUpdateWithoutContinentInput = {
    id?: IntFieldUpdateOperationsInput | number
    importance?: IntFieldUpdateOperationsInput | number
    icon?: IntFieldUpdateOperationsInput | number
    factionId?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    areaId?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    description_enUS?: StringFieldUpdateOperationsInput | string
    description_enGB?: StringFieldUpdateOperationsInput | string
    description_koKR?: StringFieldUpdateOperationsInput | string
    description_frFR?: StringFieldUpdateOperationsInput | string
    description_deDE?: StringFieldUpdateOperationsInput | string
    description_enCN?: StringFieldUpdateOperationsInput | string
    description_zhCN?: StringFieldUpdateOperationsInput | string
    description_enTW?: StringFieldUpdateOperationsInput | string
    descriptionMask?: IntFieldUpdateOperationsInput | number
    worldStateId?: IntFieldUpdateOperationsInput | number
  }

  export type AreaPOIUncheckedUpdateManyWithoutAreaPOIInput = {
    id?: IntFieldUpdateOperationsInput | number
    importance?: IntFieldUpdateOperationsInput | number
    icon?: IntFieldUpdateOperationsInput | number
    factionId?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    areaId?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    description_enUS?: StringFieldUpdateOperationsInput | string
    description_enGB?: StringFieldUpdateOperationsInput | string
    description_koKR?: StringFieldUpdateOperationsInput | string
    description_frFR?: StringFieldUpdateOperationsInput | string
    description_deDE?: StringFieldUpdateOperationsInput | string
    description_enCN?: StringFieldUpdateOperationsInput | string
    description_zhCN?: StringFieldUpdateOperationsInput | string
    description_enTW?: StringFieldUpdateOperationsInput | string
    descriptionMask?: IntFieldUpdateOperationsInput | number
    worldStateId?: IntFieldUpdateOperationsInput | number
  }

  export type AreaTableUpdateWithoutContinentInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentArea?: AreaTableUpdateOneRequiredWithoutChildAreasNestedInput
    areaBit?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    soundPreferenceId?: IntFieldUpdateOperationsInput | number
    underwaterSoundPreferenceId?: IntFieldUpdateOperationsInput | number
    soundAmbienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    zoneIntroMusicId?: IntFieldUpdateOperationsInput | number
    explorationLevel?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    factionGroupMask?: IntFieldUpdateOperationsInput | number
    liquidTypeId?: IntFieldUpdateOperationsInput | number
    minElevation?: FloatFieldUpdateOperationsInput | number
    ambientMultiplier?: FloatFieldUpdateOperationsInput | number
    light?: LightUpdateOneRequiredWithoutAreaTableNestedInput
    ChildAreas?: AreaTableUpdateManyWithoutParentAreaNestedInput
    AreaPOI?: AreaPOIUpdateManyWithoutAreaNestedInput
    WMOAreaTable?: WMOAreaTableUpdateManyWithoutAreaTableNestedInput
    WorldMapArea?: WorldMapAreaUpdateManyWithoutAreaTableNestedInput
    WorldMapOverlay1?: WorldMapOverlayUpdateManyWithoutArea_1NestedInput
    WorldMapOverlay2?: WorldMapOverlayUpdateManyWithoutArea_2NestedInput
    WorldMapOverlay3?: WorldMapOverlayUpdateManyWithoutArea_3NestedInput
    WorldMapOverlay4?: WorldMapOverlayUpdateManyWithoutArea_4NestedInput
  }

  export type AreaTableUncheckedUpdateWithoutContinentInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentAreaId?: IntFieldUpdateOperationsInput | number
    areaBit?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    soundPreferenceId?: IntFieldUpdateOperationsInput | number
    underwaterSoundPreferenceId?: IntFieldUpdateOperationsInput | number
    soundAmbienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    zoneIntroMusicId?: IntFieldUpdateOperationsInput | number
    explorationLevel?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    factionGroupMask?: IntFieldUpdateOperationsInput | number
    liquidTypeId?: IntFieldUpdateOperationsInput | number
    minElevation?: FloatFieldUpdateOperationsInput | number
    ambientMultiplier?: FloatFieldUpdateOperationsInput | number
    lightId?: IntFieldUpdateOperationsInput | number
    ChildAreas?: AreaTableUncheckedUpdateManyWithoutParentAreaNestedInput
    AreaPOI?: AreaPOIUncheckedUpdateManyWithoutAreaNestedInput
    WMOAreaTable?: WMOAreaTableUncheckedUpdateManyWithoutAreaTableNestedInput
    WorldMapArea?: WorldMapAreaUncheckedUpdateManyWithoutAreaTableNestedInput
    WorldMapOverlay1?: WorldMapOverlayUncheckedUpdateManyWithoutArea_1NestedInput
    WorldMapOverlay2?: WorldMapOverlayUncheckedUpdateManyWithoutArea_2NestedInput
    WorldMapOverlay3?: WorldMapOverlayUncheckedUpdateManyWithoutArea_3NestedInput
    WorldMapOverlay4?: WorldMapOverlayUncheckedUpdateManyWithoutArea_4NestedInput
  }

  export type AreaTableUncheckedUpdateManyWithoutAreaTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentAreaId?: IntFieldUpdateOperationsInput | number
    areaBit?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    soundPreferenceId?: IntFieldUpdateOperationsInput | number
    underwaterSoundPreferenceId?: IntFieldUpdateOperationsInput | number
    soundAmbienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    zoneIntroMusicId?: IntFieldUpdateOperationsInput | number
    explorationLevel?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    factionGroupMask?: IntFieldUpdateOperationsInput | number
    liquidTypeId?: IntFieldUpdateOperationsInput | number
    minElevation?: FloatFieldUpdateOperationsInput | number
    ambientMultiplier?: FloatFieldUpdateOperationsInput | number
    lightId?: IntFieldUpdateOperationsInput | number
  }

  export type WorldMapAreaUpdateWithoutContinentInput = {
    areaTable?: AreaTableUpdateOneRequiredWithoutWorldMapAreaNestedInput
    name?: StringFieldUpdateOperationsInput | string
    locLeft?: FloatFieldUpdateOperationsInput | number
    locRight?: FloatFieldUpdateOperationsInput | number
    locTop?: FloatFieldUpdateOperationsInput | number
    locBottom?: FloatFieldUpdateOperationsInput | number
    WorldMapOverlay?: WorldMapOverlayUpdateManyWithoutMapAreaNestedInput
  }

  export type WorldMapAreaUncheckedUpdateWithoutContinentInput = {
    id?: IntFieldUpdateOperationsInput | number
    areaId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    locLeft?: FloatFieldUpdateOperationsInput | number
    locRight?: FloatFieldUpdateOperationsInput | number
    locTop?: FloatFieldUpdateOperationsInput | number
    locBottom?: FloatFieldUpdateOperationsInput | number
    WorldMapOverlay?: WorldMapOverlayUncheckedUpdateManyWithoutMapAreaNestedInput
  }

  export type WorldMapAreaUncheckedUpdateManyWithoutWorldMapAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    areaId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    locLeft?: FloatFieldUpdateOperationsInput | number
    locRight?: FloatFieldUpdateOperationsInput | number
    locTop?: FloatFieldUpdateOperationsInput | number
    locBottom?: FloatFieldUpdateOperationsInput | number
  }

  export type WorldMapContinentUpdateWithoutContinentInput = {
    id?: IntFieldUpdateOperationsInput | number
    left?: IntFieldUpdateOperationsInput | number
    right?: IntFieldUpdateOperationsInput | number
    top?: IntFieldUpdateOperationsInput | number
    bottom?: IntFieldUpdateOperationsInput | number
    offsetX?: FloatFieldUpdateOperationsInput | number
    offsetY?: FloatFieldUpdateOperationsInput | number
    scale?: FloatFieldUpdateOperationsInput | number
    taxiMinX?: IntFieldUpdateOperationsInput | number
    taxiMinY?: IntFieldUpdateOperationsInput | number
    taxiMaxX?: IntFieldUpdateOperationsInput | number
    taxiMaxY?: IntFieldUpdateOperationsInput | number
  }

  export type WorldMapContinentUncheckedUpdateWithoutContinentInput = {
    id?: IntFieldUpdateOperationsInput | number
    left?: IntFieldUpdateOperationsInput | number
    right?: IntFieldUpdateOperationsInput | number
    top?: IntFieldUpdateOperationsInput | number
    bottom?: IntFieldUpdateOperationsInput | number
    offsetX?: FloatFieldUpdateOperationsInput | number
    offsetY?: FloatFieldUpdateOperationsInput | number
    scale?: FloatFieldUpdateOperationsInput | number
    taxiMinX?: IntFieldUpdateOperationsInput | number
    taxiMinY?: IntFieldUpdateOperationsInput | number
    taxiMaxX?: IntFieldUpdateOperationsInput | number
    taxiMaxY?: IntFieldUpdateOperationsInput | number
  }

  export type WorldMapContinentUncheckedUpdateManyWithoutWorldMapContinentInput = {
    id?: IntFieldUpdateOperationsInput | number
    left?: IntFieldUpdateOperationsInput | number
    right?: IntFieldUpdateOperationsInput | number
    top?: IntFieldUpdateOperationsInput | number
    bottom?: IntFieldUpdateOperationsInput | number
    offsetX?: FloatFieldUpdateOperationsInput | number
    offsetY?: FloatFieldUpdateOperationsInput | number
    scale?: FloatFieldUpdateOperationsInput | number
    taxiMinX?: IntFieldUpdateOperationsInput | number
    taxiMinY?: IntFieldUpdateOperationsInput | number
    taxiMaxX?: IntFieldUpdateOperationsInput | number
    taxiMaxY?: IntFieldUpdateOperationsInput | number
  }

  export type AreaTriggerUpdateWithoutContinentInput = {
    id?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    radius?: FloatFieldUpdateOperationsInput | number
    boxLength?: FloatFieldUpdateOperationsInput | number
    boxWidth?: FloatFieldUpdateOperationsInput | number
    boxHeight?: FloatFieldUpdateOperationsInput | number
    boxYaw?: FloatFieldUpdateOperationsInput | number
  }

  export type AreaTriggerUncheckedUpdateWithoutContinentInput = {
    id?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    radius?: FloatFieldUpdateOperationsInput | number
    boxLength?: FloatFieldUpdateOperationsInput | number
    boxWidth?: FloatFieldUpdateOperationsInput | number
    boxHeight?: FloatFieldUpdateOperationsInput | number
    boxYaw?: FloatFieldUpdateOperationsInput | number
  }

  export type AreaTriggerUncheckedUpdateManyWithoutAreaTriggerInput = {
    id?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    radius?: FloatFieldUpdateOperationsInput | number
    boxLength?: FloatFieldUpdateOperationsInput | number
    boxWidth?: FloatFieldUpdateOperationsInput | number
    boxHeight?: FloatFieldUpdateOperationsInput | number
    boxYaw?: FloatFieldUpdateOperationsInput | number
  }

  export type LightUpdateWithoutContinentInput = {
    id?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    falloffStart?: FloatFieldUpdateOperationsInput | number
    falloffEnd?: FloatFieldUpdateOperationsInput | number
    paramStandard?: LightParamsUpdateOneRequiredWithoutStandatrdLightNestedInput
    paramUnderwater?: LightParamsUpdateOneRequiredWithoutUnderwaterLightNestedInput
    paramSunset?: LightParamsUpdateOneRequiredWithoutSunsetLightNestedInput
    paramOther?: LightParamsUpdateOneRequiredWithoutOtherLightNestedInput
    paramDeath?: LightParamsUpdateOneRequiredWithoutDeathLightNestedInput
    AreaTable?: AreaTableUpdateManyWithoutLightNestedInput
  }

  export type LightUncheckedUpdateWithoutContinentInput = {
    id?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    falloffStart?: FloatFieldUpdateOperationsInput | number
    falloffEnd?: FloatFieldUpdateOperationsInput | number
    paramStandardId?: IntFieldUpdateOperationsInput | number
    paramUnderwaterId?: IntFieldUpdateOperationsInput | number
    paramSunsetId?: IntFieldUpdateOperationsInput | number
    paramOtherId?: IntFieldUpdateOperationsInput | number
    paramDeathId?: IntFieldUpdateOperationsInput | number
    AreaTable?: AreaTableUncheckedUpdateManyWithoutLightNestedInput
  }

  export type LightUncheckedUpdateManyWithoutLightInput = {
    id?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    falloffStart?: FloatFieldUpdateOperationsInput | number
    falloffEnd?: FloatFieldUpdateOperationsInput | number
    paramStandardId?: IntFieldUpdateOperationsInput | number
    paramUnderwaterId?: IntFieldUpdateOperationsInput | number
    paramSunsetId?: IntFieldUpdateOperationsInput | number
    paramOtherId?: IntFieldUpdateOperationsInput | number
    paramDeathId?: IntFieldUpdateOperationsInput | number
  }

  export type AreaTableUpdateWithoutParentAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    continent?: ContinentUpdateOneRequiredWithoutAreaTableNestedInput
    areaBit?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    soundPreferenceId?: IntFieldUpdateOperationsInput | number
    underwaterSoundPreferenceId?: IntFieldUpdateOperationsInput | number
    soundAmbienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    zoneIntroMusicId?: IntFieldUpdateOperationsInput | number
    explorationLevel?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    factionGroupMask?: IntFieldUpdateOperationsInput | number
    liquidTypeId?: IntFieldUpdateOperationsInput | number
    minElevation?: FloatFieldUpdateOperationsInput | number
    ambientMultiplier?: FloatFieldUpdateOperationsInput | number
    light?: LightUpdateOneRequiredWithoutAreaTableNestedInput
    ChildAreas?: AreaTableUpdateManyWithoutParentAreaNestedInput
    AreaPOI?: AreaPOIUpdateManyWithoutAreaNestedInput
    WMOAreaTable?: WMOAreaTableUpdateManyWithoutAreaTableNestedInput
    WorldMapArea?: WorldMapAreaUpdateManyWithoutAreaTableNestedInput
    WorldMapOverlay1?: WorldMapOverlayUpdateManyWithoutArea_1NestedInput
    WorldMapOverlay2?: WorldMapOverlayUpdateManyWithoutArea_2NestedInput
    WorldMapOverlay3?: WorldMapOverlayUpdateManyWithoutArea_3NestedInput
    WorldMapOverlay4?: WorldMapOverlayUpdateManyWithoutArea_4NestedInput
  }

  export type AreaTableUncheckedUpdateWithoutParentAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    areaBit?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    soundPreferenceId?: IntFieldUpdateOperationsInput | number
    underwaterSoundPreferenceId?: IntFieldUpdateOperationsInput | number
    soundAmbienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    zoneIntroMusicId?: IntFieldUpdateOperationsInput | number
    explorationLevel?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    factionGroupMask?: IntFieldUpdateOperationsInput | number
    liquidTypeId?: IntFieldUpdateOperationsInput | number
    minElevation?: FloatFieldUpdateOperationsInput | number
    ambientMultiplier?: FloatFieldUpdateOperationsInput | number
    lightId?: IntFieldUpdateOperationsInput | number
    ChildAreas?: AreaTableUncheckedUpdateManyWithoutParentAreaNestedInput
    AreaPOI?: AreaPOIUncheckedUpdateManyWithoutAreaNestedInput
    WMOAreaTable?: WMOAreaTableUncheckedUpdateManyWithoutAreaTableNestedInput
    WorldMapArea?: WorldMapAreaUncheckedUpdateManyWithoutAreaTableNestedInput
    WorldMapOverlay1?: WorldMapOverlayUncheckedUpdateManyWithoutArea_1NestedInput
    WorldMapOverlay2?: WorldMapOverlayUncheckedUpdateManyWithoutArea_2NestedInput
    WorldMapOverlay3?: WorldMapOverlayUncheckedUpdateManyWithoutArea_3NestedInput
    WorldMapOverlay4?: WorldMapOverlayUncheckedUpdateManyWithoutArea_4NestedInput
  }

  export type AreaTableUncheckedUpdateManyWithoutChildAreasInput = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    areaBit?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    soundPreferenceId?: IntFieldUpdateOperationsInput | number
    underwaterSoundPreferenceId?: IntFieldUpdateOperationsInput | number
    soundAmbienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    zoneIntroMusicId?: IntFieldUpdateOperationsInput | number
    explorationLevel?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    factionGroupMask?: IntFieldUpdateOperationsInput | number
    liquidTypeId?: IntFieldUpdateOperationsInput | number
    minElevation?: FloatFieldUpdateOperationsInput | number
    ambientMultiplier?: FloatFieldUpdateOperationsInput | number
    lightId?: IntFieldUpdateOperationsInput | number
  }

  export type AreaPOIUpdateWithoutAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    importance?: IntFieldUpdateOperationsInput | number
    icon?: IntFieldUpdateOperationsInput | number
    factionId?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    continent?: ContinentUpdateOneRequiredWithoutAreaPOINestedInput
    flags?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    description_enUS?: StringFieldUpdateOperationsInput | string
    description_enGB?: StringFieldUpdateOperationsInput | string
    description_koKR?: StringFieldUpdateOperationsInput | string
    description_frFR?: StringFieldUpdateOperationsInput | string
    description_deDE?: StringFieldUpdateOperationsInput | string
    description_enCN?: StringFieldUpdateOperationsInput | string
    description_zhCN?: StringFieldUpdateOperationsInput | string
    description_enTW?: StringFieldUpdateOperationsInput | string
    descriptionMask?: IntFieldUpdateOperationsInput | number
    worldStateId?: IntFieldUpdateOperationsInput | number
  }

  export type AreaPOIUncheckedUpdateWithoutAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    importance?: IntFieldUpdateOperationsInput | number
    icon?: IntFieldUpdateOperationsInput | number
    factionId?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    description_enUS?: StringFieldUpdateOperationsInput | string
    description_enGB?: StringFieldUpdateOperationsInput | string
    description_koKR?: StringFieldUpdateOperationsInput | string
    description_frFR?: StringFieldUpdateOperationsInput | string
    description_deDE?: StringFieldUpdateOperationsInput | string
    description_enCN?: StringFieldUpdateOperationsInput | string
    description_zhCN?: StringFieldUpdateOperationsInput | string
    description_enTW?: StringFieldUpdateOperationsInput | string
    descriptionMask?: IntFieldUpdateOperationsInput | number
    worldStateId?: IntFieldUpdateOperationsInput | number
  }

  export type WMOAreaTableUpdateWithoutAreaTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    wmoId?: IntFieldUpdateOperationsInput | number
    nameSetId?: IntFieldUpdateOperationsInput | number
    wmoGroupId?: IntFieldUpdateOperationsInput | number
    soundProviderId?: IntFieldUpdateOperationsInput | number
    underwaterSoundProviderId?: IntFieldUpdateOperationsInput | number
    ambienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    introSoundId?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
  }

  export type WMOAreaTableUncheckedUpdateWithoutAreaTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    wmoId?: IntFieldUpdateOperationsInput | number
    nameSetId?: IntFieldUpdateOperationsInput | number
    wmoGroupId?: IntFieldUpdateOperationsInput | number
    soundProviderId?: IntFieldUpdateOperationsInput | number
    underwaterSoundProviderId?: IntFieldUpdateOperationsInput | number
    ambienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    introSoundId?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
  }

  export type WMOAreaTableUncheckedUpdateManyWithoutWMOAreaTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    wmoId?: IntFieldUpdateOperationsInput | number
    nameSetId?: IntFieldUpdateOperationsInput | number
    wmoGroupId?: IntFieldUpdateOperationsInput | number
    soundProviderId?: IntFieldUpdateOperationsInput | number
    underwaterSoundProviderId?: IntFieldUpdateOperationsInput | number
    ambienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    introSoundId?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
  }

  export type WorldMapAreaUpdateWithoutAreaTableInput = {
    continent?: ContinentUpdateOneRequiredWithoutWorldMapAreaNestedInput
    name?: StringFieldUpdateOperationsInput | string
    locLeft?: FloatFieldUpdateOperationsInput | number
    locRight?: FloatFieldUpdateOperationsInput | number
    locTop?: FloatFieldUpdateOperationsInput | number
    locBottom?: FloatFieldUpdateOperationsInput | number
    WorldMapOverlay?: WorldMapOverlayUpdateManyWithoutMapAreaNestedInput
  }

  export type WorldMapAreaUncheckedUpdateWithoutAreaTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    locLeft?: FloatFieldUpdateOperationsInput | number
    locRight?: FloatFieldUpdateOperationsInput | number
    locTop?: FloatFieldUpdateOperationsInput | number
    locBottom?: FloatFieldUpdateOperationsInput | number
    WorldMapOverlay?: WorldMapOverlayUncheckedUpdateManyWithoutMapAreaNestedInput
  }

  export type WorldMapOverlayUpdateWithoutArea_1Input = {
    id?: IntFieldUpdateOperationsInput | number
    mapArea?: WorldMapAreaUpdateOneRequiredWithoutWorldMapOverlayNestedInput
    area_2?: AreaTableUpdateOneRequiredWithoutWorldMapOverlay2NestedInput
    area_3?: AreaTableUpdateOneRequiredWithoutWorldMapOverlay3NestedInput
    area_4?: AreaTableUpdateOneRequiredWithoutWorldMapOverlay4NestedInput
    mapPointX?: IntFieldUpdateOperationsInput | number
    mapPointY?: IntFieldUpdateOperationsInput | number
    texture?: StringFieldUpdateOperationsInput | string
    textureWidth?: IntFieldUpdateOperationsInput | number
    textureHeight?: IntFieldUpdateOperationsInput | number
    offsetX?: IntFieldUpdateOperationsInput | number
    offsetY?: IntFieldUpdateOperationsInput | number
    hitRectTop?: IntFieldUpdateOperationsInput | number
    hitRectLeft?: IntFieldUpdateOperationsInput | number
    hitRectBottom?: IntFieldUpdateOperationsInput | number
    hitRectRight?: IntFieldUpdateOperationsInput | number
  }

  export type WorldMapOverlayUncheckedUpdateWithoutArea_1Input = {
    id?: IntFieldUpdateOperationsInput | number
    worldMapAreaId?: IntFieldUpdateOperationsInput | number
    areaId_2?: IntFieldUpdateOperationsInput | number
    areaId_3?: IntFieldUpdateOperationsInput | number
    areaId_4?: IntFieldUpdateOperationsInput | number
    mapPointX?: IntFieldUpdateOperationsInput | number
    mapPointY?: IntFieldUpdateOperationsInput | number
    texture?: StringFieldUpdateOperationsInput | string
    textureWidth?: IntFieldUpdateOperationsInput | number
    textureHeight?: IntFieldUpdateOperationsInput | number
    offsetX?: IntFieldUpdateOperationsInput | number
    offsetY?: IntFieldUpdateOperationsInput | number
    hitRectTop?: IntFieldUpdateOperationsInput | number
    hitRectLeft?: IntFieldUpdateOperationsInput | number
    hitRectBottom?: IntFieldUpdateOperationsInput | number
    hitRectRight?: IntFieldUpdateOperationsInput | number
  }

  export type WorldMapOverlayUncheckedUpdateManyWithoutWorldMapOverlay1Input = {
    id?: IntFieldUpdateOperationsInput | number
    worldMapAreaId?: IntFieldUpdateOperationsInput | number
    areaId_2?: IntFieldUpdateOperationsInput | number
    areaId_3?: IntFieldUpdateOperationsInput | number
    areaId_4?: IntFieldUpdateOperationsInput | number
    mapPointX?: IntFieldUpdateOperationsInput | number
    mapPointY?: IntFieldUpdateOperationsInput | number
    texture?: StringFieldUpdateOperationsInput | string
    textureWidth?: IntFieldUpdateOperationsInput | number
    textureHeight?: IntFieldUpdateOperationsInput | number
    offsetX?: IntFieldUpdateOperationsInput | number
    offsetY?: IntFieldUpdateOperationsInput | number
    hitRectTop?: IntFieldUpdateOperationsInput | number
    hitRectLeft?: IntFieldUpdateOperationsInput | number
    hitRectBottom?: IntFieldUpdateOperationsInput | number
    hitRectRight?: IntFieldUpdateOperationsInput | number
  }

  export type WorldMapOverlayUpdateWithoutArea_2Input = {
    id?: IntFieldUpdateOperationsInput | number
    mapArea?: WorldMapAreaUpdateOneRequiredWithoutWorldMapOverlayNestedInput
    area_1?: AreaTableUpdateOneRequiredWithoutWorldMapOverlay1NestedInput
    area_3?: AreaTableUpdateOneRequiredWithoutWorldMapOverlay3NestedInput
    area_4?: AreaTableUpdateOneRequiredWithoutWorldMapOverlay4NestedInput
    mapPointX?: IntFieldUpdateOperationsInput | number
    mapPointY?: IntFieldUpdateOperationsInput | number
    texture?: StringFieldUpdateOperationsInput | string
    textureWidth?: IntFieldUpdateOperationsInput | number
    textureHeight?: IntFieldUpdateOperationsInput | number
    offsetX?: IntFieldUpdateOperationsInput | number
    offsetY?: IntFieldUpdateOperationsInput | number
    hitRectTop?: IntFieldUpdateOperationsInput | number
    hitRectLeft?: IntFieldUpdateOperationsInput | number
    hitRectBottom?: IntFieldUpdateOperationsInput | number
    hitRectRight?: IntFieldUpdateOperationsInput | number
  }

  export type WorldMapOverlayUncheckedUpdateWithoutArea_2Input = {
    id?: IntFieldUpdateOperationsInput | number
    worldMapAreaId?: IntFieldUpdateOperationsInput | number
    areaId_1?: IntFieldUpdateOperationsInput | number
    areaId_3?: IntFieldUpdateOperationsInput | number
    areaId_4?: IntFieldUpdateOperationsInput | number
    mapPointX?: IntFieldUpdateOperationsInput | number
    mapPointY?: IntFieldUpdateOperationsInput | number
    texture?: StringFieldUpdateOperationsInput | string
    textureWidth?: IntFieldUpdateOperationsInput | number
    textureHeight?: IntFieldUpdateOperationsInput | number
    offsetX?: IntFieldUpdateOperationsInput | number
    offsetY?: IntFieldUpdateOperationsInput | number
    hitRectTop?: IntFieldUpdateOperationsInput | number
    hitRectLeft?: IntFieldUpdateOperationsInput | number
    hitRectBottom?: IntFieldUpdateOperationsInput | number
    hitRectRight?: IntFieldUpdateOperationsInput | number
  }

  export type WorldMapOverlayUncheckedUpdateManyWithoutWorldMapOverlay2Input = {
    id?: IntFieldUpdateOperationsInput | number
    worldMapAreaId?: IntFieldUpdateOperationsInput | number
    areaId_1?: IntFieldUpdateOperationsInput | number
    areaId_3?: IntFieldUpdateOperationsInput | number
    areaId_4?: IntFieldUpdateOperationsInput | number
    mapPointX?: IntFieldUpdateOperationsInput | number
    mapPointY?: IntFieldUpdateOperationsInput | number
    texture?: StringFieldUpdateOperationsInput | string
    textureWidth?: IntFieldUpdateOperationsInput | number
    textureHeight?: IntFieldUpdateOperationsInput | number
    offsetX?: IntFieldUpdateOperationsInput | number
    offsetY?: IntFieldUpdateOperationsInput | number
    hitRectTop?: IntFieldUpdateOperationsInput | number
    hitRectLeft?: IntFieldUpdateOperationsInput | number
    hitRectBottom?: IntFieldUpdateOperationsInput | number
    hitRectRight?: IntFieldUpdateOperationsInput | number
  }

  export type WorldMapOverlayUpdateWithoutArea_3Input = {
    id?: IntFieldUpdateOperationsInput | number
    mapArea?: WorldMapAreaUpdateOneRequiredWithoutWorldMapOverlayNestedInput
    area_1?: AreaTableUpdateOneRequiredWithoutWorldMapOverlay1NestedInput
    area_2?: AreaTableUpdateOneRequiredWithoutWorldMapOverlay2NestedInput
    area_4?: AreaTableUpdateOneRequiredWithoutWorldMapOverlay4NestedInput
    mapPointX?: IntFieldUpdateOperationsInput | number
    mapPointY?: IntFieldUpdateOperationsInput | number
    texture?: StringFieldUpdateOperationsInput | string
    textureWidth?: IntFieldUpdateOperationsInput | number
    textureHeight?: IntFieldUpdateOperationsInput | number
    offsetX?: IntFieldUpdateOperationsInput | number
    offsetY?: IntFieldUpdateOperationsInput | number
    hitRectTop?: IntFieldUpdateOperationsInput | number
    hitRectLeft?: IntFieldUpdateOperationsInput | number
    hitRectBottom?: IntFieldUpdateOperationsInput | number
    hitRectRight?: IntFieldUpdateOperationsInput | number
  }

  export type WorldMapOverlayUncheckedUpdateWithoutArea_3Input = {
    id?: IntFieldUpdateOperationsInput | number
    worldMapAreaId?: IntFieldUpdateOperationsInput | number
    areaId_1?: IntFieldUpdateOperationsInput | number
    areaId_2?: IntFieldUpdateOperationsInput | number
    areaId_4?: IntFieldUpdateOperationsInput | number
    mapPointX?: IntFieldUpdateOperationsInput | number
    mapPointY?: IntFieldUpdateOperationsInput | number
    texture?: StringFieldUpdateOperationsInput | string
    textureWidth?: IntFieldUpdateOperationsInput | number
    textureHeight?: IntFieldUpdateOperationsInput | number
    offsetX?: IntFieldUpdateOperationsInput | number
    offsetY?: IntFieldUpdateOperationsInput | number
    hitRectTop?: IntFieldUpdateOperationsInput | number
    hitRectLeft?: IntFieldUpdateOperationsInput | number
    hitRectBottom?: IntFieldUpdateOperationsInput | number
    hitRectRight?: IntFieldUpdateOperationsInput | number
  }

  export type WorldMapOverlayUncheckedUpdateManyWithoutWorldMapOverlay3Input = {
    id?: IntFieldUpdateOperationsInput | number
    worldMapAreaId?: IntFieldUpdateOperationsInput | number
    areaId_1?: IntFieldUpdateOperationsInput | number
    areaId_2?: IntFieldUpdateOperationsInput | number
    areaId_4?: IntFieldUpdateOperationsInput | number
    mapPointX?: IntFieldUpdateOperationsInput | number
    mapPointY?: IntFieldUpdateOperationsInput | number
    texture?: StringFieldUpdateOperationsInput | string
    textureWidth?: IntFieldUpdateOperationsInput | number
    textureHeight?: IntFieldUpdateOperationsInput | number
    offsetX?: IntFieldUpdateOperationsInput | number
    offsetY?: IntFieldUpdateOperationsInput | number
    hitRectTop?: IntFieldUpdateOperationsInput | number
    hitRectLeft?: IntFieldUpdateOperationsInput | number
    hitRectBottom?: IntFieldUpdateOperationsInput | number
    hitRectRight?: IntFieldUpdateOperationsInput | number
  }

  export type WorldMapOverlayUpdateWithoutArea_4Input = {
    id?: IntFieldUpdateOperationsInput | number
    mapArea?: WorldMapAreaUpdateOneRequiredWithoutWorldMapOverlayNestedInput
    area_1?: AreaTableUpdateOneRequiredWithoutWorldMapOverlay1NestedInput
    area_2?: AreaTableUpdateOneRequiredWithoutWorldMapOverlay2NestedInput
    area_3?: AreaTableUpdateOneRequiredWithoutWorldMapOverlay3NestedInput
    mapPointX?: IntFieldUpdateOperationsInput | number
    mapPointY?: IntFieldUpdateOperationsInput | number
    texture?: StringFieldUpdateOperationsInput | string
    textureWidth?: IntFieldUpdateOperationsInput | number
    textureHeight?: IntFieldUpdateOperationsInput | number
    offsetX?: IntFieldUpdateOperationsInput | number
    offsetY?: IntFieldUpdateOperationsInput | number
    hitRectTop?: IntFieldUpdateOperationsInput | number
    hitRectLeft?: IntFieldUpdateOperationsInput | number
    hitRectBottom?: IntFieldUpdateOperationsInput | number
    hitRectRight?: IntFieldUpdateOperationsInput | number
  }

  export type WorldMapOverlayUncheckedUpdateWithoutArea_4Input = {
    id?: IntFieldUpdateOperationsInput | number
    worldMapAreaId?: IntFieldUpdateOperationsInput | number
    areaId_1?: IntFieldUpdateOperationsInput | number
    areaId_2?: IntFieldUpdateOperationsInput | number
    areaId_3?: IntFieldUpdateOperationsInput | number
    mapPointX?: IntFieldUpdateOperationsInput | number
    mapPointY?: IntFieldUpdateOperationsInput | number
    texture?: StringFieldUpdateOperationsInput | string
    textureWidth?: IntFieldUpdateOperationsInput | number
    textureHeight?: IntFieldUpdateOperationsInput | number
    offsetX?: IntFieldUpdateOperationsInput | number
    offsetY?: IntFieldUpdateOperationsInput | number
    hitRectTop?: IntFieldUpdateOperationsInput | number
    hitRectLeft?: IntFieldUpdateOperationsInput | number
    hitRectBottom?: IntFieldUpdateOperationsInput | number
    hitRectRight?: IntFieldUpdateOperationsInput | number
  }

  export type WorldMapOverlayUncheckedUpdateManyWithoutWorldMapOverlay4Input = {
    id?: IntFieldUpdateOperationsInput | number
    worldMapAreaId?: IntFieldUpdateOperationsInput | number
    areaId_1?: IntFieldUpdateOperationsInput | number
    areaId_2?: IntFieldUpdateOperationsInput | number
    areaId_3?: IntFieldUpdateOperationsInput | number
    mapPointX?: IntFieldUpdateOperationsInput | number
    mapPointY?: IntFieldUpdateOperationsInput | number
    texture?: StringFieldUpdateOperationsInput | string
    textureWidth?: IntFieldUpdateOperationsInput | number
    textureHeight?: IntFieldUpdateOperationsInput | number
    offsetX?: IntFieldUpdateOperationsInput | number
    offsetY?: IntFieldUpdateOperationsInput | number
    hitRectTop?: IntFieldUpdateOperationsInput | number
    hitRectLeft?: IntFieldUpdateOperationsInput | number
    hitRectBottom?: IntFieldUpdateOperationsInput | number
    hitRectRight?: IntFieldUpdateOperationsInput | number
  }

  export type AreaTableUpdateWithoutLightInput = {
    id?: IntFieldUpdateOperationsInput | number
    continent?: ContinentUpdateOneRequiredWithoutAreaTableNestedInput
    parentArea?: AreaTableUpdateOneRequiredWithoutChildAreasNestedInput
    areaBit?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    soundPreferenceId?: IntFieldUpdateOperationsInput | number
    underwaterSoundPreferenceId?: IntFieldUpdateOperationsInput | number
    soundAmbienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    zoneIntroMusicId?: IntFieldUpdateOperationsInput | number
    explorationLevel?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    factionGroupMask?: IntFieldUpdateOperationsInput | number
    liquidTypeId?: IntFieldUpdateOperationsInput | number
    minElevation?: FloatFieldUpdateOperationsInput | number
    ambientMultiplier?: FloatFieldUpdateOperationsInput | number
    ChildAreas?: AreaTableUpdateManyWithoutParentAreaNestedInput
    AreaPOI?: AreaPOIUpdateManyWithoutAreaNestedInput
    WMOAreaTable?: WMOAreaTableUpdateManyWithoutAreaTableNestedInput
    WorldMapArea?: WorldMapAreaUpdateManyWithoutAreaTableNestedInput
    WorldMapOverlay1?: WorldMapOverlayUpdateManyWithoutArea_1NestedInput
    WorldMapOverlay2?: WorldMapOverlayUpdateManyWithoutArea_2NestedInput
    WorldMapOverlay3?: WorldMapOverlayUpdateManyWithoutArea_3NestedInput
    WorldMapOverlay4?: WorldMapOverlayUpdateManyWithoutArea_4NestedInput
  }

  export type AreaTableUncheckedUpdateWithoutLightInput = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    parentAreaId?: IntFieldUpdateOperationsInput | number
    areaBit?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    soundPreferenceId?: IntFieldUpdateOperationsInput | number
    underwaterSoundPreferenceId?: IntFieldUpdateOperationsInput | number
    soundAmbienceId?: IntFieldUpdateOperationsInput | number
    zoneMusicId?: IntFieldUpdateOperationsInput | number
    zoneIntroMusicId?: IntFieldUpdateOperationsInput | number
    explorationLevel?: IntFieldUpdateOperationsInput | number
    name_enUS?: StringFieldUpdateOperationsInput | string
    name_enGB?: StringFieldUpdateOperationsInput | string
    name_koKR?: StringFieldUpdateOperationsInput | string
    name_frFR?: StringFieldUpdateOperationsInput | string
    name_deDE?: StringFieldUpdateOperationsInput | string
    name_enCN?: StringFieldUpdateOperationsInput | string
    name_zhCN?: StringFieldUpdateOperationsInput | string
    name_enTW?: StringFieldUpdateOperationsInput | string
    nameMask?: IntFieldUpdateOperationsInput | number
    factionGroupMask?: IntFieldUpdateOperationsInput | number
    liquidTypeId?: IntFieldUpdateOperationsInput | number
    minElevation?: FloatFieldUpdateOperationsInput | number
    ambientMultiplier?: FloatFieldUpdateOperationsInput | number
    ChildAreas?: AreaTableUncheckedUpdateManyWithoutParentAreaNestedInput
    AreaPOI?: AreaPOIUncheckedUpdateManyWithoutAreaNestedInput
    WMOAreaTable?: WMOAreaTableUncheckedUpdateManyWithoutAreaTableNestedInput
    WorldMapArea?: WorldMapAreaUncheckedUpdateManyWithoutAreaTableNestedInput
    WorldMapOverlay1?: WorldMapOverlayUncheckedUpdateManyWithoutArea_1NestedInput
    WorldMapOverlay2?: WorldMapOverlayUncheckedUpdateManyWithoutArea_2NestedInput
    WorldMapOverlay3?: WorldMapOverlayUncheckedUpdateManyWithoutArea_3NestedInput
    WorldMapOverlay4?: WorldMapOverlayUncheckedUpdateManyWithoutArea_4NestedInput
  }

  export type LightUpdateWithoutParamStandardInput = {
    id?: IntFieldUpdateOperationsInput | number
    continent?: ContinentUpdateOneRequiredWithoutLightNestedInput
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    falloffStart?: FloatFieldUpdateOperationsInput | number
    falloffEnd?: FloatFieldUpdateOperationsInput | number
    paramUnderwater?: LightParamsUpdateOneRequiredWithoutUnderwaterLightNestedInput
    paramSunset?: LightParamsUpdateOneRequiredWithoutSunsetLightNestedInput
    paramOther?: LightParamsUpdateOneRequiredWithoutOtherLightNestedInput
    paramDeath?: LightParamsUpdateOneRequiredWithoutDeathLightNestedInput
    AreaTable?: AreaTableUpdateManyWithoutLightNestedInput
  }

  export type LightUncheckedUpdateWithoutParamStandardInput = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    falloffStart?: FloatFieldUpdateOperationsInput | number
    falloffEnd?: FloatFieldUpdateOperationsInput | number
    paramUnderwaterId?: IntFieldUpdateOperationsInput | number
    paramSunsetId?: IntFieldUpdateOperationsInput | number
    paramOtherId?: IntFieldUpdateOperationsInput | number
    paramDeathId?: IntFieldUpdateOperationsInput | number
    AreaTable?: AreaTableUncheckedUpdateManyWithoutLightNestedInput
  }

  export type LightUncheckedUpdateManyWithoutStandatrdLightInput = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    falloffStart?: FloatFieldUpdateOperationsInput | number
    falloffEnd?: FloatFieldUpdateOperationsInput | number
    paramUnderwaterId?: IntFieldUpdateOperationsInput | number
    paramSunsetId?: IntFieldUpdateOperationsInput | number
    paramOtherId?: IntFieldUpdateOperationsInput | number
    paramDeathId?: IntFieldUpdateOperationsInput | number
  }

  export type LightUpdateWithoutParamUnderwaterInput = {
    id?: IntFieldUpdateOperationsInput | number
    continent?: ContinentUpdateOneRequiredWithoutLightNestedInput
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    falloffStart?: FloatFieldUpdateOperationsInput | number
    falloffEnd?: FloatFieldUpdateOperationsInput | number
    paramStandard?: LightParamsUpdateOneRequiredWithoutStandatrdLightNestedInput
    paramSunset?: LightParamsUpdateOneRequiredWithoutSunsetLightNestedInput
    paramOther?: LightParamsUpdateOneRequiredWithoutOtherLightNestedInput
    paramDeath?: LightParamsUpdateOneRequiredWithoutDeathLightNestedInput
    AreaTable?: AreaTableUpdateManyWithoutLightNestedInput
  }

  export type LightUncheckedUpdateWithoutParamUnderwaterInput = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    falloffStart?: FloatFieldUpdateOperationsInput | number
    falloffEnd?: FloatFieldUpdateOperationsInput | number
    paramStandardId?: IntFieldUpdateOperationsInput | number
    paramSunsetId?: IntFieldUpdateOperationsInput | number
    paramOtherId?: IntFieldUpdateOperationsInput | number
    paramDeathId?: IntFieldUpdateOperationsInput | number
    AreaTable?: AreaTableUncheckedUpdateManyWithoutLightNestedInput
  }

  export type LightUncheckedUpdateManyWithoutUnderwaterLightInput = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    falloffStart?: FloatFieldUpdateOperationsInput | number
    falloffEnd?: FloatFieldUpdateOperationsInput | number
    paramStandardId?: IntFieldUpdateOperationsInput | number
    paramSunsetId?: IntFieldUpdateOperationsInput | number
    paramOtherId?: IntFieldUpdateOperationsInput | number
    paramDeathId?: IntFieldUpdateOperationsInput | number
  }

  export type LightUpdateWithoutParamSunsetInput = {
    id?: IntFieldUpdateOperationsInput | number
    continent?: ContinentUpdateOneRequiredWithoutLightNestedInput
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    falloffStart?: FloatFieldUpdateOperationsInput | number
    falloffEnd?: FloatFieldUpdateOperationsInput | number
    paramStandard?: LightParamsUpdateOneRequiredWithoutStandatrdLightNestedInput
    paramUnderwater?: LightParamsUpdateOneRequiredWithoutUnderwaterLightNestedInput
    paramOther?: LightParamsUpdateOneRequiredWithoutOtherLightNestedInput
    paramDeath?: LightParamsUpdateOneRequiredWithoutDeathLightNestedInput
    AreaTable?: AreaTableUpdateManyWithoutLightNestedInput
  }

  export type LightUncheckedUpdateWithoutParamSunsetInput = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    falloffStart?: FloatFieldUpdateOperationsInput | number
    falloffEnd?: FloatFieldUpdateOperationsInput | number
    paramStandardId?: IntFieldUpdateOperationsInput | number
    paramUnderwaterId?: IntFieldUpdateOperationsInput | number
    paramOtherId?: IntFieldUpdateOperationsInput | number
    paramDeathId?: IntFieldUpdateOperationsInput | number
    AreaTable?: AreaTableUncheckedUpdateManyWithoutLightNestedInput
  }

  export type LightUncheckedUpdateManyWithoutSunsetLightInput = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    falloffStart?: FloatFieldUpdateOperationsInput | number
    falloffEnd?: FloatFieldUpdateOperationsInput | number
    paramStandardId?: IntFieldUpdateOperationsInput | number
    paramUnderwaterId?: IntFieldUpdateOperationsInput | number
    paramOtherId?: IntFieldUpdateOperationsInput | number
    paramDeathId?: IntFieldUpdateOperationsInput | number
  }

  export type LightUpdateWithoutParamOtherInput = {
    id?: IntFieldUpdateOperationsInput | number
    continent?: ContinentUpdateOneRequiredWithoutLightNestedInput
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    falloffStart?: FloatFieldUpdateOperationsInput | number
    falloffEnd?: FloatFieldUpdateOperationsInput | number
    paramStandard?: LightParamsUpdateOneRequiredWithoutStandatrdLightNestedInput
    paramUnderwater?: LightParamsUpdateOneRequiredWithoutUnderwaterLightNestedInput
    paramSunset?: LightParamsUpdateOneRequiredWithoutSunsetLightNestedInput
    paramDeath?: LightParamsUpdateOneRequiredWithoutDeathLightNestedInput
    AreaTable?: AreaTableUpdateManyWithoutLightNestedInput
  }

  export type LightUncheckedUpdateWithoutParamOtherInput = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    falloffStart?: FloatFieldUpdateOperationsInput | number
    falloffEnd?: FloatFieldUpdateOperationsInput | number
    paramStandardId?: IntFieldUpdateOperationsInput | number
    paramUnderwaterId?: IntFieldUpdateOperationsInput | number
    paramSunsetId?: IntFieldUpdateOperationsInput | number
    paramDeathId?: IntFieldUpdateOperationsInput | number
    AreaTable?: AreaTableUncheckedUpdateManyWithoutLightNestedInput
  }

  export type LightUncheckedUpdateManyWithoutOtherLightInput = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    falloffStart?: FloatFieldUpdateOperationsInput | number
    falloffEnd?: FloatFieldUpdateOperationsInput | number
    paramStandardId?: IntFieldUpdateOperationsInput | number
    paramUnderwaterId?: IntFieldUpdateOperationsInput | number
    paramSunsetId?: IntFieldUpdateOperationsInput | number
    paramDeathId?: IntFieldUpdateOperationsInput | number
  }

  export type LightUpdateWithoutParamDeathInput = {
    id?: IntFieldUpdateOperationsInput | number
    continent?: ContinentUpdateOneRequiredWithoutLightNestedInput
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    falloffStart?: FloatFieldUpdateOperationsInput | number
    falloffEnd?: FloatFieldUpdateOperationsInput | number
    paramStandard?: LightParamsUpdateOneRequiredWithoutStandatrdLightNestedInput
    paramUnderwater?: LightParamsUpdateOneRequiredWithoutUnderwaterLightNestedInput
    paramSunset?: LightParamsUpdateOneRequiredWithoutSunsetLightNestedInput
    paramOther?: LightParamsUpdateOneRequiredWithoutOtherLightNestedInput
    AreaTable?: AreaTableUpdateManyWithoutLightNestedInput
  }

  export type LightUncheckedUpdateWithoutParamDeathInput = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    falloffStart?: FloatFieldUpdateOperationsInput | number
    falloffEnd?: FloatFieldUpdateOperationsInput | number
    paramStandardId?: IntFieldUpdateOperationsInput | number
    paramUnderwaterId?: IntFieldUpdateOperationsInput | number
    paramSunsetId?: IntFieldUpdateOperationsInput | number
    paramOtherId?: IntFieldUpdateOperationsInput | number
    AreaTable?: AreaTableUncheckedUpdateManyWithoutLightNestedInput
  }

  export type LightUncheckedUpdateManyWithoutDeathLightInput = {
    id?: IntFieldUpdateOperationsInput | number
    continentId?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    falloffStart?: FloatFieldUpdateOperationsInput | number
    falloffEnd?: FloatFieldUpdateOperationsInput | number
    paramStandardId?: IntFieldUpdateOperationsInput | number
    paramUnderwaterId?: IntFieldUpdateOperationsInput | number
    paramSunsetId?: IntFieldUpdateOperationsInput | number
    paramOtherId?: IntFieldUpdateOperationsInput | number
  }

  export type LightParamsUpdateWithoutLightSkyboxInput = {
    id?: IntFieldUpdateOperationsInput | number
    highlightSky?: IntFieldUpdateOperationsInput | number
    glow?: FloatFieldUpdateOperationsInput | number
    waterShallowAlpha?: FloatFieldUpdateOperationsInput | number
    waterDeepAlpha?: FloatFieldUpdateOperationsInput | number
    oceanShallowAlpha?: FloatFieldUpdateOperationsInput | number
    oceanDeepAlpha?: FloatFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    standatrdLight?: LightUpdateManyWithoutParamStandardNestedInput
    underwaterLight?: LightUpdateManyWithoutParamUnderwaterNestedInput
    sunsetLight?: LightUpdateManyWithoutParamSunsetNestedInput
    otherLight?: LightUpdateManyWithoutParamOtherNestedInput
    deathLight?: LightUpdateManyWithoutParamDeathNestedInput
  }

  export type LightParamsUncheckedUpdateWithoutLightSkyboxInput = {
    id?: IntFieldUpdateOperationsInput | number
    highlightSky?: IntFieldUpdateOperationsInput | number
    glow?: FloatFieldUpdateOperationsInput | number
    waterShallowAlpha?: FloatFieldUpdateOperationsInput | number
    waterDeepAlpha?: FloatFieldUpdateOperationsInput | number
    oceanShallowAlpha?: FloatFieldUpdateOperationsInput | number
    oceanDeepAlpha?: FloatFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    standatrdLight?: LightUncheckedUpdateManyWithoutParamStandardNestedInput
    underwaterLight?: LightUncheckedUpdateManyWithoutParamUnderwaterNestedInput
    sunsetLight?: LightUncheckedUpdateManyWithoutParamSunsetNestedInput
    otherLight?: LightUncheckedUpdateManyWithoutParamOtherNestedInput
    deathLight?: LightUncheckedUpdateManyWithoutParamDeathNestedInput
  }

  export type LightParamsUncheckedUpdateManyWithoutLightParamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    highlightSky?: IntFieldUpdateOperationsInput | number
    glow?: FloatFieldUpdateOperationsInput | number
    waterShallowAlpha?: FloatFieldUpdateOperationsInput | number
    waterDeepAlpha?: FloatFieldUpdateOperationsInput | number
    oceanShallowAlpha?: FloatFieldUpdateOperationsInput | number
    oceanDeepAlpha?: FloatFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
  }

  export type WorldMapOverlayUpdateWithoutMapAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    area_1?: AreaTableUpdateOneRequiredWithoutWorldMapOverlay1NestedInput
    area_2?: AreaTableUpdateOneRequiredWithoutWorldMapOverlay2NestedInput
    area_3?: AreaTableUpdateOneRequiredWithoutWorldMapOverlay3NestedInput
    area_4?: AreaTableUpdateOneRequiredWithoutWorldMapOverlay4NestedInput
    mapPointX?: IntFieldUpdateOperationsInput | number
    mapPointY?: IntFieldUpdateOperationsInput | number
    texture?: StringFieldUpdateOperationsInput | string
    textureWidth?: IntFieldUpdateOperationsInput | number
    textureHeight?: IntFieldUpdateOperationsInput | number
    offsetX?: IntFieldUpdateOperationsInput | number
    offsetY?: IntFieldUpdateOperationsInput | number
    hitRectTop?: IntFieldUpdateOperationsInput | number
    hitRectLeft?: IntFieldUpdateOperationsInput | number
    hitRectBottom?: IntFieldUpdateOperationsInput | number
    hitRectRight?: IntFieldUpdateOperationsInput | number
  }

  export type WorldMapOverlayUncheckedUpdateWithoutMapAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    areaId_1?: IntFieldUpdateOperationsInput | number
    areaId_2?: IntFieldUpdateOperationsInput | number
    areaId_3?: IntFieldUpdateOperationsInput | number
    areaId_4?: IntFieldUpdateOperationsInput | number
    mapPointX?: IntFieldUpdateOperationsInput | number
    mapPointY?: IntFieldUpdateOperationsInput | number
    texture?: StringFieldUpdateOperationsInput | string
    textureWidth?: IntFieldUpdateOperationsInput | number
    textureHeight?: IntFieldUpdateOperationsInput | number
    offsetX?: IntFieldUpdateOperationsInput | number
    offsetY?: IntFieldUpdateOperationsInput | number
    hitRectTop?: IntFieldUpdateOperationsInput | number
    hitRectLeft?: IntFieldUpdateOperationsInput | number
    hitRectBottom?: IntFieldUpdateOperationsInput | number
    hitRectRight?: IntFieldUpdateOperationsInput | number
  }

  export type WorldMapOverlayUncheckedUpdateManyWithoutWorldMapOverlayInput = {
    id?: IntFieldUpdateOperationsInput | number
    areaId_1?: IntFieldUpdateOperationsInput | number
    areaId_2?: IntFieldUpdateOperationsInput | number
    areaId_3?: IntFieldUpdateOperationsInput | number
    areaId_4?: IntFieldUpdateOperationsInput | number
    mapPointX?: IntFieldUpdateOperationsInput | number
    mapPointY?: IntFieldUpdateOperationsInput | number
    texture?: StringFieldUpdateOperationsInput | string
    textureWidth?: IntFieldUpdateOperationsInput | number
    textureHeight?: IntFieldUpdateOperationsInput | number
    offsetX?: IntFieldUpdateOperationsInput | number
    offsetY?: IntFieldUpdateOperationsInput | number
    hitRectTop?: IntFieldUpdateOperationsInput | number
    hitRectLeft?: IntFieldUpdateOperationsInput | number
    hitRectBottom?: IntFieldUpdateOperationsInput | number
    hitRectRight?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
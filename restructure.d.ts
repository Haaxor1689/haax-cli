declare module 'restructure' {
	class Base {
		constructor(...args: any);
		fromBuffer(buffer: any): any;
		toBuffer(value: any): any;

		decode(stream: any): any;
		encode(stream: any, val: any): any;
		size(): number;
	}

	export class Array extends Base {}
	export class Bitfield extends Base {}
	export class Boolean extends Base {}
	export class Buffer extends Base {}
	export class Enum extends Base {}
	export class LazyArray extends Base {}
	export class Number extends Base {}
	export class Fixed extends Number {}
	export class Optional extends Base {}
	export class Pointer extends Base {}
	export class VoidPointer {
		constructor(type: any, value: any);
	}
	export class Reserved extends Base {}
	export class String extends Base {}
	export class Struct extends Base {}
	export class VersionedStruct extends Base {}

	// TODO: DecodeStream, EncodeStream

	export const uint8: number;
	export const uint16be: number;
	export const uint16 = uint16be;
	export const uint16le: number;
	export const uint24be: number;
	export const uint24 = uint24be;
	export const uint24le: number;
	export const uint32be: number;
	export const uint32 = uint32be;
	export const uint32le: number;
	export const int8: number;
	export const int16be: number;
	export const int16 = int16be;
	export const int16le: number;
	export const int24be: number;
	export const int24 = int24be;
	export const int24le: number;
	export const int32be: number;
	export const int32 = int32be;
	export const int32le: number;
	export const floatbe: number;
	export const float = floatbe;
	export const floatle: number;
	export const doublebe: number;
	export const double = doublebe;
	export const doublele: number;
}

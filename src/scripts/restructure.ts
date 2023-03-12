import * as r from 'restructure';

export class StringRef extends r.Number {
	constructor() {
		super('UInt32', 'LE');
	}
}

export class EmptyVal extends (r.Number as r.BaseType<never>) {
	constructor() {
		super(0);
	}

	size() {
		return 0;
	}
	decode() {
		return undefined as never;
	}
	encode() {
		// ...
	}
}

export class ReverseString extends (r.String as r.BaseType<string>) {
	decode(stream: r.DecodeStream) {
		return [...super.decode(stream)].reverse().join('');
	}

	encode(stream: r.EncodeStream, val: string) {
		super.encode(stream, [...val].reverse().join(''));
	}
}

export class Enum extends (r.Number as r.BaseType<number | string>) {
	options: string[];

	constructor(options: string[]) {
		super('UInt32', 'LE');
		this.options = options;
	}

	decode(stream: r.DecodeStream) {
		const d = (super.decode as r.Number['decode'])(stream);
		return this.options[d] ?? d;
	}
}

export class CompactArray extends (r.Array as r.BaseType<number[]>) {
	bits: number;
	length: number;

	mask: number;

	constructor(bits: number, length: number) {
		super();
		this.bits = bits;
		this.length = length;

		this.mask = 0xff >> (8 - this.bits);
	}

	decode(stream: r.DecodeStream) {
		const arr: number[] = [];

		const buffer = stream.readBuffer(this.size());

		let i = 0;
		while (i < this.size() * 8) {
			const bit = i % 8;
			const byte = Math.floor(i / 8);

			const b = buffer[byte] ?? 0;
			const val = (b >> bit) & this.mask;

			arr.push(val);
			i += this.bits;
		}
		return arr;
	}

	size() {
		return (this.bits * this.length) / 8;
	}

	encode(stream: r.EncodeStream, val: number[]) {
		const buffer = Buffer.alloc(this.size(), 0);
		let i = 0;
		while (i < this.size() * 8) {
			const bit = i % 8;
			const byte = Math.floor(i / 8);

			buffer[byte] |= (val[i / this.bits] ?? 0) << bit;

			i += this.bits;
		}
		stream.writeBuffer(buffer);
	}
}

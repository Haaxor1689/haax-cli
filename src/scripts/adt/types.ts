import * as r from 'restructure';

import { CompactArray, EmptyVal, ReverseString } from '../restructure.js';

const RangeF = new r.Struct({ min: r.floatle, max: r.floatle });
const VectorF = new r.Struct({ x: r.floatle, y: r.floatle, z: r.floatle });
const BoundingBox = new r.Struct({ min: VectorF, max: VectorF });

// const Chunk = (items: (type: string, )) => new r.Struct({
//   magic: new r.String(4),
//   type() {
//     return [...this.magic].reverse().join('');
//   },

//   size: r.uint32le,
//   data: new r.Buffer('size'),

//   items() {
//     const shape = ChunkTypes[this.type as keyof typeof ChunkTypes];
//     if (!shape) return null;
//     return new r.Array(
//       shape,
//       (this.type as keyof typeof ChunkTypes) === 'MCNK' ? 2 : undefined
//     ).fromBuffer(this.data);
//   }
// })

export const getLiquidType = (flags: number) => {
	if ((flags >> 3) & 1) return 'Water';
	if ((flags >> 4) & 1) return 'Ocean';
	if ((flags >> 5) & 1) return 'Magma';
	if ((flags >> 6) & 1) return 'Slime';
	return 'Unknown';
};

const MCNKHeader = new r.Struct({
	flags: r.uint32le,
	x: r.uint32le,
	y: r.uint32le,
	layers: r.uint32le,
	doodadRefs: r.uint32le,

	ofsHeight: r.uint32le,
	ofsNormal: r.uint32le,
	ofsLayer: r.uint32le,
	ofsRefs: r.uint32le,
	ofsAlpha: r.uint32le,
	sizeAlpha: r.uint32le,
	ofsShadow: r.uint32le,
	sizeShadow: r.uint32le,
	areaId: r.uint32le,
	nMapObjRefs: r.uint32le,
	holes: new CompactArray(1, 16),
	unknown: r.uint16le,

	doodadLayers: new CompactArray(2, 64),
	doodadMask: new CompactArray(1, 64),

	ofsSndEmitters: r.uint32le,
	nSndEmitters: r.uint32le,
	ofsLiquid: r.uint32le,
	sizeLiquid: r.uint32le,

	position: VectorF,
	ofsMCCV: r.uint32le,
	ofsMCLV: r.uint32le,
	unused: r.uint32le
});

const SubChunkTypes = {
	MCVT: new r.Array(r.floatle, 9 * 9 + 8 * 8),
	MCNR: new r.Struct({
		normals: new r.Array(new r.Array(r.int8, 3), 9 * 9 + 8 * 8),
		padding: new r.Array(r.uint8, 13)
	}),
	MCLY: new r.Array(
		new r.Struct({
			textureId: r.uint32le,
			flags: r.uint32le,
			offset: r.uint32le,
			effectId: r.uint32le
		})
	),
	MCRF: new r.Array(r.uint32le),
	MCSH: new CompactArray(1, 64 * 64),
	// MCAL: new r.Struct({

	// })
	MCLQ: (flags: number) =>
		new r.Array(
			new r.Struct({
				height: RangeF,
				vertices: new r.Array(
					// Water
					getLiquidType(flags) === 'Water'
						? new r.Struct({
								depth: r.uint8,
								flow0Pct: r.uint8,
								flow1Pct: r.uint8,
								filler: r.uint8,
								height: r.floatle
						  })
						: // Ocean
						getLiquidType(flags) === 'Ocean'
						? new r.Struct({
								depth: r.uint8,
								foam: r.uint8,
								wet: r.uint8,
								filler: r.uint8
						  })
						: // Magma
						getLiquidType(flags) === 'Magma'
						? new r.Struct({
								s: r.uint16le,
								t: r.uint16le,
								height: r.floatle
						  })
						: new EmptyVal(),
					9 * 9
				),
				tiles: new r.Array(r.uint8, 8 * 8),
				nFlowvs: r.uint32le,
				flowvs: new r.Array(
					new r.Struct({
						position: VectorF,
						radius: r.floatle,
						direction: VectorF,
						velocity: r.floatle,
						amplitude: r.floatle,
						frequency: r.floatle
					}),
					2
				)
			})
		)
	// MCSE: new r.Struct({})
} as const;

const isMCNKChunk = (obj: unknown): obj is { header: { flags: number } } =>
	typeof (obj as { header: { flags: unknown } })?.header?.flags === 'number';

const ChunkTypes = {
	MVER: new r.Struct({
		version: r.uint32le
	}),
	MHDR: new r.Struct({
		flags: r.uint32le,
		mcin: r.uint32le,
		mtex: r.uint32le,
		mmdx: r.uint32le,
		mmid: r.uint32le,
		mwmo: r.uint32le,
		mwid: r.uint32le,
		mddf: r.uint32le,
		modf: r.uint32le,
		mfbo: r.uint32le,
		mh2o: r.uint32le,
		mtxf: r.uint32le,
		mamp_value: r.uint8,
		padding: new r.Array(r.uint8, 3),
		unused: new r.Array(r.uint32le, 3)
	}),
	MCIN: new r.Array(
		new r.Struct({
			offset: r.uint32le,
			size: r.uint32le,
			flags: r.uint32le,
			asyncId: r.uint32le
		})
	),
	MTEX: new r.Array(new r.String()),
	MMDX: new r.Array(new r.String()),
	MMID: new r.Array(r.uint32le),
	MWMO: new r.Array(new r.String()),
	MWID: new r.Array(r.uint32le),
	MDDF: new r.Array(
		new r.Struct({
			nameId: r.uint32le,
			uniqueId: r.uint32le,
			position: VectorF,
			rotation: VectorF,
			scale: r.uint16le,
			flags: r.uint16le
		})
	),
	MODF: new r.Array(
		new r.Struct({
			nameId: r.uint32le,
			uniqueId: r.uint32le,
			position: VectorF,
			rotation: VectorF,
			extents: BoundingBox,
			flags: r.uint16le,
			doodadSet: r.uint16le,
			nameSet: r.uint16le,
			scale: r.uint16le
		})
	),
	MCNK: ({ size }: { size: number }) =>
		new r.Struct({
			header: MCNKHeader,
			chunks: new r.Array(
				new r.Struct({
					type: new ReverseString(4),

					size: r.uint32le,
					trueSize(_: unknown, parent: unknown) {
						if (this.type === 'MCNR') return SubChunkTypes.MCNR.size();
						if (
							this.type === 'MCLQ' // &&
							// isMCNKChunk(parent) &&
							// (parent.header.flags >> 3) & 7
						) {
							return 0;
							// return SubChunkTypes.MCLQ(parent.header.flags).size();
						}
						return this.size;
					},
					buffer: new r.Buffer('trueSize'),

					data(_: unknown, parent: unknown) {
						const shape =
							SubChunkTypes[this.type as keyof typeof SubChunkTypes];
						if (!shape || !this.trueSize) return undefined;
						return (
							typeof shape === 'function'
								? shape(isMCNKChunk(parent) ? parent.header.flags : 0)
								: shape
						).fromBuffer(this.buffer);
					}
				}),
				size - MCNKHeader.size(),
				'bytes'
			)
		})
} as const;

export const Adt = new r.Array(
	new r.Struct({
		type: new ReverseString(4),

		size: r.uint32le,
		buffer: new r.Buffer('size'),

		data() {
			const shape = ChunkTypes[this.type as keyof typeof ChunkTypes];
			if (!shape) return undefined;
			return (typeof shape === 'function' ? shape(this) : shape).fromBuffer(
				this.buffer
			);
		}
	})
);

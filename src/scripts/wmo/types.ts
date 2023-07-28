import * as r from 'restructure';

import { ReverseString } from '../restructure.js';

// const RangeF = new r.Struct({ min: r.floatle, max: r.floatle });
const VectorF = new r.Struct({ x: r.floatle, y: r.floatle, z: r.floatle });
const BoundingBox = new r.Struct({ min: VectorF, max: VectorF });

const ChunkTypes = {
	MVER: new r.Struct({
		version: r.uint32le
	}),
	MOHD: new r.Struct({
		nTextures: r.uint32le,
		nGroups: r.uint32le,
		nPortals: r.uint32le,
		nLights: r.uint32le,
		nDoodadNames: r.uint32le,
		nDoodadDefs: r.uint32le,
		nDoodadSets: r.uint32le,
		ambColor: r.uint32le,
		wmoId: r.uint32le,
		boundingBox: BoundingBox
	}),
	MOTX: new r.Struct({
		textures: new r.Array(new r.String())
	}),
	MOSB: new r.Struct({
		skyboxModel: new r.String()
	})
} as const;

export const Wmo = new r.Array(
	new r.Struct({
		type: new ReverseString(4),

		size: r.uint32le,
		buffer: new r.Buffer('size'),

		data() {
			const shape = ChunkTypes[this.type as keyof typeof ChunkTypes];
			if (!shape) return undefined;
			return shape.fromBuffer(this.buffer);
		}
	})
);

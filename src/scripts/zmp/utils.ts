import * as r from 'restructure';

export const PngData = new r.Array(new r.Array(r.uint8, 4), 128 * 128);

export const ZmpData = new r.Array(r.uint32le, 128 * 128);

declare module 'dxt-js' {
	enum DxtFlags {
		DXT1,
		DXT3,
		DXT5,
		ColourIterativeClusterFit,
		ColourClusterFit,
		ColourRangeFit,
		ColourMetricPerceptual,
		ColourMetricUniform,
		WeightColourByAlpha
	}

	const compress: (
		imageDate: Uint8Array,
		width: number,
		height: number,
		compression: DxtFlags
	) => Uint8Array;

	const decompress: (
		imageDate: Uint8Array,
		width: number,
		height: number,
		compression: DxtFlags
	) => Uint8Array;

	export default {
		flags: DxtFlags,
		compress,
		decompress
	};
}

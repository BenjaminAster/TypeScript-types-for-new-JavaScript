
// EyeDropper API
// Specification: https://wicg.github.io/eyedropper-api/
// Repository: https://github.com/wicg/eyedropper-api

interface ColorSelectionResult {
	sRGBHex?: string;
}

interface ColorSelectionOptions {
	signal?: AbortSignal;
}

interface EyeDropper {
	open(options?: ColorSelectionOptions): Promise<ColorSelectionResult>;
}

declare var EyeDropper: {
	prototype: EyeDropper;
	new(): EyeDropper;
};

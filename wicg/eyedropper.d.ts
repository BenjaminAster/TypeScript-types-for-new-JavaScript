
// EyeDropper API
// Specification: https://wicg.github.io/eyedropper-api/
// Repository: https://github.com/wicg/eyedropper-api

interface ColorSelectionResult {
	sRGBHex?: string;
}

interface ColorSelectionOptions {
	signal?: AbortSignal;
}

declare class EyeDropper {
	constructor();
	open(options?: ColorSelectionOptions): Promise<ColorSelectionResult>;
}


// HTML
// Specification: https://html.spec.whatwg.org/multipage/
// Repository: https://github.com/whatwg/html

// The elements of HTML >> Scripting >> The canvas element
// https://html.spec.whatwg.org/multipage/canvas.html

interface ImageEncodeOptions {
	type?: string;
	quality?: number;
}

interface OffscreenCanvas extends EventTarget {
	convertToBlob(options?: ImageEncodeOptions): Promise<Blob>;
}

// User Interaction
// https://html.spec.whatwg.org/multipage/interaction.html

interface FocusOptions {
	focusVisible?: boolean;
}

// Web application APIs
// https://html.spec.whatwg.org/multipage/webappapis.html

interface ImportMeta {
	resolve(url: string): string;
}


// HTML
// Specification: https://html.spec.whatwg.org/multipage/
// Repository: https://github.com/whatwg/html

// The elements of HTML >> Scripting >> The canvas element
// https://html.spec.whatwg.org/multipage/canvas.html

interface ImageEncodeOptions {
	type?: string;
	quality?: number;
}

interface OffscreenCanvasRenderingContext2DSettings {
	alpha?: boolean;
	colorSpace?: PredefinedColorSpace;
	desynchronized?: boolean;
	willReadFrequently?: boolean;
}

interface OffscreenImageBitmapRenderingContextSettings {
	alpha?: boolean;
}

interface OffscreenWebGLContextAttributes {
	alpha?: boolean;
	antialias?: boolean;
	depth?: boolean;
	desynchronized?: boolean;
	failIfMajorPerformanceCaveat?: boolean;
	powerPreference?: WebGLPowerPreference;
	premultipliedAlpha?: boolean;
	preserveDrawingBuffer?: boolean;
	stencil?: boolean;
}

interface OffscreenCanvas extends EventTarget {
	getContext(contextId: "2d", options?: OffscreenCanvasRenderingContext2DSettings): OffscreenCanvasRenderingContext2D | null;
	getContext(contextId: "bitmaprenderer", options?: OffscreenImageBitmapRenderingContextSettings): ImageBitmapRenderingContext | null;
	getContext(contextId: "webgl", options?: OffscreenWebGLContextAttributes): WebGLRenderingContext | null;
	getContext(contextId: "webgl2", options?: OffscreenWebGLContextAttributes): WebGL2RenderingContext | null;
	convertToBlob(options?: ImageEncodeOptions): Promise<Blob>;
}

// User Interaction
// https://html.spec.whatwg.org/multipage/interaction.html

interface FocusOptions {
	focusVisible?: boolean;
}

// Worklets
// https://html.spec.whatwg.org/multipage/worklets.html

interface WorkletGlobalScope { }

// Web application APIs
// https://html.spec.whatwg.org/multipage/webappapis.html

interface ImportMeta {
	resolve(url: string): string;
}

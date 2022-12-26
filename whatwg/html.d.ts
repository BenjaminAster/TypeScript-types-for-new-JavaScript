
// HTML
// Specification: https://html.spec.whatwg.org/multipage/
// Repository: https://github.com/whatwg/html

// The elements of HTML >> Scripting >> The canvas element >> The OffscreenCanvas interface
// https://html.spec.whatwg.org/multipage/canvas.html#the-offscreencanvas-interface

interface ImageEncodeOptions {
	type?: string;
	quality?: number;
}

interface OffscreenCanvas extends EventTarget {
	getContext(contextId: "2d", options?: CanvasRenderingContext2DSettings): OffscreenCanvasRenderingContext2D | null;
	getContext(contextId: "bitmaprenderer", options?: ImageBitmapRenderingContextSettings): ImageBitmapRenderingContext | null;
	getContext(contextId: "webgl", options?: WebGLContextAttributes): WebGLRenderingContext | null;
	getContext(contextId: "webgl2", options?: WebGLContextAttributes): WebGL2RenderingContext | null;
	convertToBlob(options?: ImageEncodeOptions): Promise<Blob>;
}

// User Interaction >> Focus >> Focus Management APIs
// https://html.spec.whatwg.org/multipage/interaction.html#focus-management-apis

interface FocusOptions {
	focusVisible?: boolean;
}

// Worklets >> Infrastructure >> The global scope
// https://html.spec.whatwg.org/multipage/worklets.html#worklets-global

interface WorkletGlobalScope { }

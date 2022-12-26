
// HTML
// Specification: https://html.spec.whatwg.org/multipage/
// Repository: https://github.com/whatwg/html

/// <reference types="@webgpu/types" />

// The elements of HTML >> Scripting >> The canvas element >> The OffscreenCanvas interface (https://html.spec.whatwg.org/multipage/canvas.html#the-offscreencanvas-interface)

interface ImageEncodeOptions {
	type?: string;
	quality?: number;
}

interface OffscreenCanvas extends EventTarget {
	getContext(contextId: "2d", options?: CanvasRenderingContext2DSettings): OffscreenCanvasRenderingContext2D | null;
	getContext(contextId: "bitmaprenderer", options?: ImageBitmapRenderingContextSettings): ImageBitmapRenderingContext | null;
	getContext(contextId: "webgl", options?: WebGLContextAttributes): WebGLRenderingContext | null;
	getContext(contextId: "webgl2", options?: WebGLContextAttributes): WebGL2RenderingContext | null;
	getContext(contextId: "webgpu", options?: any): GPUCanvasContext | null;
	convertToBlob(options?: ImageEncodeOptions): Promise<Blob>;
}

interface OffscreenCanvasEventMap {
	"contextlost": Event;
	"contextrestored": Event;
}
interface OffscreenCanvasRenderingContext2D extends CanvasState { }

interface OffscreenCanvasRenderingContext2D extends CanvasTransform { }

interface OffscreenCanvasRenderingContext2D extends CanvasCompositing { }

interface OffscreenCanvasRenderingContext2D extends CanvasImageSmoothing { }

interface OffscreenCanvasRenderingContext2D extends CanvasFillStrokeStyles { }

interface OffscreenCanvasRenderingContext2D extends CanvasShadowStyles { }

interface OffscreenCanvasRenderingContext2D extends CanvasFilters { }

interface OffscreenCanvasRenderingContext2D extends CanvasRect { }

interface OffscreenCanvasRenderingContext2D extends CanvasDrawPath { }

interface OffscreenCanvasRenderingContext2D extends CanvasText { }

interface OffscreenCanvasRenderingContext2D extends CanvasDrawImage { }

interface OffscreenCanvasRenderingContext2D extends CanvasImageData { }

interface OffscreenCanvasRenderingContext2D extends CanvasPathDrawingStyles { }

interface OffscreenCanvasRenderingContext2D extends CanvasTextDrawingStyles { }

interface OffscreenCanvasRenderingContext2D extends CanvasPath { }


// User Interaction >> Focus >> Focus Management APIs (https://html.spec.whatwg.org/multipage/interaction.html#focus-management-apis)
interface FocusOptions {
	focusVisible?: boolean;
}

// Worklets >> Infrastructure >> The global scope (https://html.spec.whatwg.org/multipage/worklets.html#worklets-global)
interface WorkletGlobalScope { }



// CSS Painting API
// Specification: https://drafts.css-houdini.org/css-paint-api-1/
// Repository: https://github.com/w3c/css-houdini-drafts/tree/main/css-paint-api

declare namespace CSS {
	var paintWorklet: Worklet;
}

declare class PaintWorkletGlobalScope implements WorkletGlobalScope {
	registerPaint(name: string, paintCtor: VoidFunction): void;
	readonly devicePixelRatio: number;
}

interface PaintRenderingContext2DSettings {
	alpha?: boolean;
}

declare class PaintRenderingContext2D { }

interface PaintRenderingContext2D extends CanvasState { }

interface PaintRenderingContext2D extends CanvasTransform { }

interface PaintRenderingContext2D extends CanvasCompositing { }

interface PaintRenderingContext2D extends CanvasImageSmoothing { }

interface PaintRenderingContext2D extends CanvasFillStrokeStyles { }

interface PaintRenderingContext2D extends CanvasShadowStyles { }

interface PaintRenderingContext2D extends CanvasRect { }

interface PaintRenderingContext2D extends CanvasDrawPath { }

interface PaintRenderingContext2D extends CanvasDrawImage { }

interface PaintRenderingContext2D extends CanvasPathDrawingStyles { }

interface PaintRenderingContext2D extends CanvasPath { }

declare class PaintSize {
	readonly width: number;
	readonly height: number;
}

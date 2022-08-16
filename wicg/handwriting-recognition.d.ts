
// Handwriting Recognition API
// Specification: https://wicg.github.io/handwriting-recognition/
// Repository: https://github.com/WICG/handwriting-recognition

interface Navigator {
	queryHandwritingRecognizer(constraint: HandwritingModelConstraint): Promise<HandwritingRecognizerQueryResult | null>;
}

interface HandwritingModelConstraint {
	languages: string[];
}

interface HandwritingRecognizerQueryResult {
	textAlternatives?: boolean;
	textSegmentation?: boolean;
	hints?: HandwritingHintsQueryResult;
}

interface HandwritingHintsQueryResult {
	recognitionType?: HandwritingRecognitionType[];
	inputType?: HandwritingInputType[];
	textContext?: boolean;
	alternatives?: boolean;
}

type HandwritingRecognitionType = (
	| "text"
	| "per-character"
);

type HandwritingInputType = (
	| "mouse"
	| "stylus"
	| "touch"
);

interface Navigator {
	createHandwritingRecognizer(constraint: HandwritingModelConstraint): Promise<HandwritingRecognizer>;
}

interface HandwritingRecognizer {
	startDrawing(hints?: HandwritingHints): HandwritingDrawing;
	finish(): void;
}

interface HandwritingHints {
	recognitionType?: string;
	inputType?: string;
	textContext?: string;
	alternatives?: number;
}

interface HandwritingDrawing {
	addStroke(stroke: HandwritingStroke): void;
	removeStroke(stroke: HandwritingStroke): void;
	clear(): void;
	getStrokes(): HandwritingStroke[];
	getPrediction(): Promise<HandwritingPrediction[]>;
}

interface HandwritingStroke {
	addPoint(point: HandwritingPoint): void;
	getPoints(): HandwritingPoint[];
	clear(): void;
}

declare var HandwritingStroke: {
	prototype: HandwritingStroke;
	new(): HandwritingStroke;
};

interface HandwritingPoint {
	x: number;
	y: number;
	t?: DOMHighResTimeStamp;
}

interface HandwritingPrediction {
	text: string;
	segmentationResult?: HandwritingSegment[];
}

interface HandwritingSegment {
	grapheme: string;
	beginIndex: number;
	endIndex: number;
	drawingSegments: HandwritingDrawingSegment[];
}

interface HandwritingDrawingSegment {
	strokeIndex: number;
	beginPointIndex: number;
	endPointIndex: number;
}

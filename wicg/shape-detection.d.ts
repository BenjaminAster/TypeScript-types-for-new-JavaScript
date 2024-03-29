
// Accelerated Shape Detection in Images
// Specification: https://wicg.github.io/shape-detection-api/
// Repository: https://github.com/WICG/shape-detection-api

/// <reference path="../w3c/mediastream-image-capture-global.d.ts" />

interface FaceDetector {
	detect(image: ImageBitmapSource): Promise<DetectedFace[]>;
}

declare var FaceDetector: {
	prototype: FaceDetector;
	new(faceDetectorOptions?: FaceDetectorOptions): FaceDetector;
}

interface FaceDetectorOptions {
	maxDetectedFaces?: number;
	fastMode?: boolean;
}

interface DetectedFace {
	boundingBox: DOMRectReadOnly;
	landmarks: ReadonlyArray<Landmark>;
}

interface Landmark {
	locations: ReadonlyArray<Point2D>;
	type?: LandmarkType;
}

type LandmarkType = (
	| "mouth"
	| "eye"
	| "nose"
);

interface BarcodeDetector {
	detect(image: ImageBitmapSource): Promise<DetectedBarcode[]>;
}

declare var BarcodeDetector: {
	prototype: BarcodeDetector;
	new(barcodeDetectorOptions?: BarcodeDetectorOptions): BarcodeDetector;
	getSupportedFormats(): Promise<BarcodeFormat[]>;
};

interface BarcodeDetectorOptions {
	formats?: BarcodeFormat[];
}

interface DetectedBarcode {
	boundingBox: DOMRectReadOnly;
	rawValue: string;
	format: BarcodeFormat;
	cornerPoints: ReadonlyArray<Point2D>;
}

type BarcodeFormat = (
	| "aztec"
	| "code_128"
	| "code_39"
	| "code_93"
	| "codabar"
	| "data_matrix"
	| "ean_13"
	| "ean_8"
	| "itf"
	| "pdf417"
	| "qr_code"
	| "unknown"
	| "upc_a"
	| "upc_e"
);


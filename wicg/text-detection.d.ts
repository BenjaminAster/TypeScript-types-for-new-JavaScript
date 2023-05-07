
// Accelerated Text Detection in Images
// Specification: https://wicg.github.io/shape-detection-api/text
// Repository: https://github.com/WICG/shape-detection-api

/// <reference path="../w3c/mediastream-image-capture-global.d.ts" />

interface TextDetector {
	detect(image: ImageBitmapSource): Promise<DetectedText[]>;
}

declare var TextDetector: {
	prototype: TextDetector;
	new(): TextDetector;
};

interface DetectedText {
	boundingBox: DOMRectReadOnly;
	rawValue: string;
	cornerPoints: ReadonlyArray<Point2D>;
}

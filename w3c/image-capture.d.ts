
// MediaStream Image Capture
// Specification: https://w3c.github.io/mediacapture-image/
// Repository: https://github.com/w3c/mediacapture-image

declare class ImageCapture {
	constructor(videoTrack: MediaStreamTrack);
	takePhoto(photoSettings?: PhotoSettings): Promise<Blob>;
	getPhotoCapabilities(): Promise<PhotoCapabilities>;
	getPhotoSettings(): Promise<PhotoSettings>;
	grabFrame(): Promise<ImageBitmap>;
	readonly track: MediaStreamTrack;
}

interface PhotoCapabilities {
	redEyeReduction?: RedEyeReduction;
	imageHeight?: MediaSettingsRange;
	imageWidth?: MediaSettingsRange;
	fillLightMode?: FillLightMode[];
}

interface PhotoSettings {
	fillLightMode?: FillLightMode;
	imageHeight?: number;
	imageWidth?: number;
	redEyeReduction?: boolean;
}

interface MediaSettingsRange {
	max?: number;
	min?: number;
	step?: number;
}

type RedEyeReduction = (
	| "never"
	| "always"
	| "controllable"
);

type FillLightMode = (
	| "auto"
	| "off"
	| "flash"
);

interface MediaTrackSupportedConstraints {
	whiteBalanceMode?: boolean;
	exposureMode?: boolean;
	focusMode?: boolean;
	pointsOfInterest?: boolean;
	exposureCompensation?: boolean;
	exposureTime?: boolean;
	colorTemperature?: boolean;
	iso?: boolean;
	brightness?: boolean;
	contrast?: boolean;
	pan?: boolean;
	saturation?: boolean;
	sharpness?: boolean;
	focusDistance?: boolean;
	tilt?: boolean;
	zoom?: boolean;
	torch?: boolean;
}

interface MediaTrackCapabilities {
	whiteBalanceMode?: string[];
	exposureMode?: string[];
	focusMode?: string[];
	exposureCompensation?: MediaSettingsRange;
	exposureTime?: MediaSettingsRange;
	colorTemperature?: MediaSettingsRange;
	iso?: MediaSettingsRange;
	brightness?: MediaSettingsRange;
	contrast?: MediaSettingsRange;
	saturation?: MediaSettingsRange;
	sharpness?: MediaSettingsRange;
	focusDistance?: MediaSettingsRange;
	pan?: MediaSettingsRange;
	tilt?: MediaSettingsRange;
	zoom?: MediaSettingsRange;
	torch?: boolean;
}

interface MediaTrackConstraintSet {
	whiteBalanceMode?: ConstrainDOMString;
	exposureMode?: ConstrainDOMString;
	focusMode?: ConstrainDOMString;
	pointsOfInterest?: ConstrainPoint2D;
	exposureCompensation?: ConstrainDouble;
	exposureTime?: ConstrainDouble;
	colorTemperature?: ConstrainDouble;
	iso?: ConstrainDouble;
	brightness?: ConstrainDouble;
	contrast?: ConstrainDouble;
	saturation?: ConstrainDouble;
	sharpness?: ConstrainDouble;
	focusDistance?: ConstrainDouble;
	pan?: boolean | ConstrainDouble;
	tilt?: boolean | ConstrainDouble;
	zoom?: boolean | ConstrainDouble;
	torch?: ConstrainBoolean;
}

interface MediaTrackSettings {
	whiteBalanceMode?: string;
	exposureMode?: string;
	focusMode?: string;
	pointsOfInterest?: Point2D[];
	exposureCompensation?: number;
	exposureTime?: number;
	colorTemperature?: number;
	iso?: number;
	brightness?: number;
	contrast?: number;
	saturation?: number;
	sharpness?: number;
	focusDistance?: number;
	pan?: number;
	tilt?: number;
	zoom?: number;
	torch?: boolean;
}

interface ConstrainPoint2DParameters {
	exact?: Point2D[];
	ideal?: Point2D[];
}

type ConstrainPoint2D = Point2D[] | ConstrainPoint2DParameters;

type MeteringMode = (
	| "none"
	| "manual"
	| "single-shot"
	| "continuous"
);

interface Point2D {
	x?: number;
	y?: number;
}

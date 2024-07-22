
// Screen Capture
// Specification: https://w3c.github.io/mediacapture-screen-share/
// Repository: https://github.com/w3c/mediacapture-screen-share

interface DisplayMediaStreamOptions {
	controller?: CaptureController;
	selfBrowserSurface?: SelfCapturePreferenceEnum;
	systemAudio?: SystemAudioPreferenceEnum;
	surfaceSwitching?: SurfaceSwitchingPreferenceEnum;
	monitorTypeSurfaces?: MonitorTypeSurfacesEnum;
}

interface MediaTrackSupportedConstraints {
	logicalSurface?: boolean;
	cursor?: boolean;
	restrictOwnAudio?: boolean;
	suppressLocalAudioPlayback?: boolean;
}

interface MediaTrackConstraintSet {
	logicalSurface?: ConstrainBoolean;
	cursor?: ConstrainDOMString;
	restrictOwnAudio?: ConstrainBoolean;
	suppressLocalAudioPlayback?: ConstrainBoolean;
}

interface MediaTrackSettings {
	logicalSurface?: boolean;
	cursor?: boolean;
	restrictOwnAudio?: boolean;
	suppressLocalAudioPlayback?: boolean;
}

interface MediaTrackCapabilities {
	logicalSurface?: boolean;
	cursor?: string[],
}

interface CaptureController {
	setFocusBehavior(focusBehavior: CaptureStartFocusBehavior): void;
}

type CaptureStartFocusBehavior = (
	| "focus-capturing-application"
	| "focus-captured-surface"
	| "no-focus-change"
);

declare var CaptureController: {
	prototype: CaptureController;
	new(): CaptureController;
}

type SelfCapturePreferenceEnum = (
	| "include"
	| "exclude"
);

type SystemAudioPreferenceEnum = (
	| "include"
	| "exclude"
);

type SurfaceSwitchingPreferenceEnum = (
	| "include"
	| "exclude"
);

type MonitorTypeSurfacesEnum = (
	| "include"
	| "exclude"
);


// MediaStream Recording
// Specification: https://w3c.github.io/mediacapture-record/
// Repository: https://github.com/w3c/mediacapture-record

interface MediaRecorder extends EventTarget {
	readonly audioBitrateMode: BitrateMode;
}

interface MediaRecorderOptions {
	audioBitrateMode: BitrateMode;
}

type BitrateMode = (
	| "constant"
	| "variable"
);


// Compute Pressure
// Specification: https://wicg.github.io/compute-pressure/
// Repository: https://github.com/wicg/compute-pressure

type PressureState = (
	| "nominal"
	| "fair"
	| "serious"
	| "critical"
);

type PressureFactor = (
	| "thermal"
	| "power-supply"
);

type PressureUpdateCallback = (changes: PressureRecord[], observer: PressureObserver) => void;

type PressureSource = (
	| "cpu"
);

declare class PressureObserver {
	constructor(callback: PressureUpdateCallback, options?: PressureObserverOptions);
	observe(source: PressureSource): void;
	unobserve(source: PressureSource): void;
	disconnect(): void;
	takeRecords(): PressureRecord[];
	static readonly supportedSources: ReadonlyArray<PressureSource>;
	static requestPermission(): Promise<PermissionState>;
}

interface PressureRecord {
	source?: PressureSource;
	state?: PressureState;
	factors?: PressureFactor[];
	time?: DOMHighResTimeStamp;
}

interface PressureObserverOptions {
	samplerate?: number;
}

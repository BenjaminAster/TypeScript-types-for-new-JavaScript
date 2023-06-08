
// Compute Pressure
// Specification: https://w3c.github.io/compute-pressure/
// Repository: https://github.com/w3c/compute-pressure

type PressureSource = (
	| "thermals"
	| "cpu"
);

type PressureState = (
	| "nominal"
	| "fair"
	| "serious"
	| "critical"
);

interface PressureUpdateCallback {
	(changes: PressureRecord[], observer: PressureObserver): void;
}

interface PressureObserver {
	observe(source: PressureSource): Promise<void>;
	unobserve(source: PressureSource): void;
	disconnect(): void;
	takeRecords(): PressureRecord[];
}

declare var PressureObserver: {
	prototype: PressureObserver;
	new(callback: PressureUpdateCallback, options?: PressureObserverOptions): PressureObserver;
	readonly supportedSources: ReadonlyArray<PressureSource>;
}

interface PressureRecord {
	readonly source: PressureSource | null;
	readonly state: PressureState | null;
	readonly time: DOMHighResTimeStamp | null;
	toJSON(): any;
}

interface PressureObserverOptions {
	sampleRate?: number;
}

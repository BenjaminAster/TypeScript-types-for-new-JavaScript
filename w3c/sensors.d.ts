
// Generic Sensor API
// Specification: https://w3c.github.io/sensors/
// Repository: https://github.com/w3c/sensors

interface SensorEventMap {
	"reading": Event;
	"activate": Event;
	"error": SensorErrorEvent;
}

interface Sensor extends EventTarget {
	readonly activated: boolean;
	readonly hasReading: boolean;
	readonly timestamp: DOMHighResTimeStamp;
	start(): void;
	stop(): void;
	onreading: ((this: Sensor, ev: Event) => any) | null;
	onactivate: ((this: Sensor, ev: Event) => any) | null;
	onerror: ((this: Sensor, ev: SensorErrorEvent) => any) | null;
	addEventListener<K extends keyof SensorEventMap>(type: K, listener: (this: Sensor, ev: SensorEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof SensorEventMap>(type: K, listener: (this: Sensor, ev: SensorEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var Sensor: {
	prototype: Sensor;
}

interface SensorOptions {
	frequency?: number;
}

interface SensorErrorEvent extends Event {
	readonly error: DOMException;
}

declare var SensorErrorEvent: {
	prototype: SensorErrorEvent;
	new(type: string, errorEventInitDict: SensorErrorEventInit): SensorErrorEvent;
}

interface SensorErrorEventInit {
	error: DOMException;
}

interface MockSensorConfiguration {
	mockSensorType: MockSensorType;
	connected?: boolean;
	maxSamplingFrequency?: number;
	minSamplingFrequency?: number;
}

interface MockSensor {
	maxSamplingFrequency?: number;
	minSamplingFrequency?: number;
	requestedSamplingFrequency?: number;
}

type MockSensorType = (
	| "ambient-light"
	| "accelerometer"
	| "linear-acceleration"
	| "gravity"
	| "gyroscope"
	| "magnetometer"
	| "uncalibrated-magnetometer"
	| "absolute-orientation"
	| "relative-orientation"
	| "geolocation"
	| "proximity"
);

interface MockSensorReadingValues { }

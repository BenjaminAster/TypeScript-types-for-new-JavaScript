
// Ambient Light Sensor
// Specification: https://w3c.github.io/ambient-light/
// Repository: https://github.com/w3c/ambient-light

/// <reference path="./sensors.d.ts" />

interface AmbientLightSensor extends Sensor {
	readonly illuminance: number | null;
}

declare var AmbientLightSensor: {
	prototype: AmbientLightSensor;
	new(sensorOptions?: SensorOptions): AmbientLightSensor;
};

interface AmbientLightReadingValues {
	illuminance: number;
}

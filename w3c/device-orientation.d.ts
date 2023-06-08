
// DeviceoOrientation Event
// Specification: https://w3c.github.io/deviceorientation/
// Repository: https://github.com/w3c/deviceorientation

declare var ondeviceorientationabsolute: ((this: Window, ev: DeviceOrientationEvent) => any) | null;

interface WindowEventMap {
	"deviceorientationabsolute": DeviceOrientationEvent;
}

interface Window {
	DeviceMotionEvent: {
		requestPermission(): Promise<PermissionState>;
	};
	DeviceOrientationEvent: {
		requestPermission(): Promise<PermissionState>;
	};
}

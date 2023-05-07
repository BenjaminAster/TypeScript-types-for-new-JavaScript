
// Permissions
// Specification: https://w3c.github.io/permissions/
// Repository: https://github.com/w3c/permissions

declare namespace NewJavaScript {
	type PermissionName = (
		// https://github.com/chromium/chromium/blob/main/third_party/blink/renderer/modules/permissions/permission_descriptor.idl
		| "geolocation" // already in lib.dom.d.ts
		| "notifications" // already in lib.dom.d.ts
		| "push" // already in lib.dom.d.ts
		| "midi"
		| "camera"
		| "microphone"
		| "background-fetch"
		| "background-sync"
		| "persistent-storage" // already in lib.dom.d.ts
		| "ambient-light-sensor"
		| "accelerometer"
		| "gyroscope"
		| "magnetometer"
		| "screen-wake-lock" // already in lib.dom.d.ts
		| "nfc"
		| "display-capture"
		| "accessibility-events"
		| "clipboard-read"
		| "clipboard-write"
		| "payment-handler"
		| "idle-detection"
		| "periodic-background-sync"
		| "system-wake-lock"
		| "storage-access"
		| "window-management"
		| "window-placement"
		| "local-fonts"
		| "top-level-storage-access"
	);

	interface PermissionDescriptor {
		name: NewJavaScript.PermissionName;
	}
}

interface Permissions {
	query(permissionDesc: NewJavaScript.PermissionDescriptor): Promise<PermissionStatus>;
}

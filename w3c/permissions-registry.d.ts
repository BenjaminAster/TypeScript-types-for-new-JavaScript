
// Permissions Registry
// Specification: https://w3c.github.io/permissions-registry/
// Repository: https://github.com/w3c/permissions-registry

declare namespace NewJavaScript {
	type PermissionName = (
		// in lib.dom.d.ts: "geolocation", "notifications", "push", "persistent-storage", "screen-wake-lock", "xr-spatial-tracking"

		// https://w3c.github.io/permissions-registry/#registry-table-of-standardized-permissions
		| "web-share"

		// https://w3c.github.io/permissions-registry/#registry-table-of-provisional-permissions
		| "accelerometer"
		| "window-management"
		| "local-fonts"

		// https://github.com/chromium/chromium/blob/main/third_party/blink/renderer/modules/permissions/permission_descriptor.idl
		| "midi"
		| "camera"
		| "microphone"
		| "background-fetch"
		| "background-sync"
		| "ambient-light-sensor"
		| "gyroscope"
		| "magnetometer"
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
		| "window-placement"
		| "top-level-storage-access"
	);

	interface PermissionDescriptor {
		name: NewJavaScript.PermissionName;
	}
}

interface Permissions {
	query(permissionDesc: NewJavaScript.PermissionDescriptor): Promise<PermissionStatus>;
}

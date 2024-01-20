
// Requesting Permissions
// Specification: https://wicg.github.io/permissions-request/
// Repository: https://github.com/WICG/permissions-request

/// <reference path="../w3c/permissions-registry.d.ts" />

interface Permissions {
	request(permissionDesc: PermissionDescriptor | NewJavaScript.PermissionDescriptor): Promise<PermissionStatus>;

	// non-standard requestAll() function (https://crbug.com/516626):
	requestAll(permissionsDesc: (PermissionDescriptor | NewJavaScript.PermissionDescriptor)[]): Promise<PermissionStatus>;
}

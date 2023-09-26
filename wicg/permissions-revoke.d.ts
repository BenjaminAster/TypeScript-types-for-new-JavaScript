
// Relinquishing Permissions
// Specification: https://wicg.github.io/permissions-revoke/
// Repository: https://github.com/WICG/permissions-revoke

/// <reference path="../w3c/permissions-registry.d.ts" />

interface Permissions {
	revoke(permissionDesc: NewJavaScript.PermissionDescriptor): Promise<PermissionStatus>;
}

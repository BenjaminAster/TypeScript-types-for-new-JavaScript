
// Poiter Lock
// Specification: https://w3c.github.io/pointerlock/
// Repository: https://github.com/w3c/pointerlock

// Lock options
// https://github.com/w3c/pointerlock/pull/49/

interface PointerLockOptions {
	unadjustedMovement: boolean;
}

interface Element {
	requestPointerLock(options: PointerLockOptions): void;
}

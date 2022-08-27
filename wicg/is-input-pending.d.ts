
// Early detection of input events
// Specification: https://wicg.github.io/is-input-pending/
// Repository: https://github.com/WICG/is-input-pending

interface IsInputPendingOptions {
	includeContinuous?: boolean;
}

declare class Scheduling {
	isInputPending(isInputPendingOptions?: IsInputPendingOptions): boolean;
}

interface Navigator {
	readonly scheduling: Scheduling;
}

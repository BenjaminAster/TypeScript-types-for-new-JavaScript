
// Pending Beacon
// Specification: https://wicg.github.io/pending-beacon/
// Repository: https://github.com/WICG/pending-beacon


type BeaconMethod = (
	| "POST"
	| "GET"
);

interface PendingBeaconOptions {
	timeout: number;
	backgroundTimeout: number;
}

declare class PendingBeacon {
	url: string;
	method: BeaconMethod;
	timeout: number;
	backgroundTimeout: number;
	pending: boolean;
	deactivate(): void;
	sendNow(): void;
}

declare class PendingGetBeacon extends PendingBeacon {
	constructor(url: string, options?: PendingBeaconOptions);
	setURL(url: string): void;
}

declare class PendingPostBeacon extends PendingBeacon {
	constructor(url: string, options?: PendingBeaconOptions);
	setData(data: any): void;
}

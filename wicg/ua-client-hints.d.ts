
// User Agent Client Hints
// Specification: https://wicg.github.io/ua-client-hints/
// Repository: https://github.com/WICG/ua-client-hints

interface NavigatorUABrandVersion {
	brand?: string;
	version?: string;
}

interface UADataValues {
	brands?: NavigatorUABrandVersion[];
	mobile?: boolean;
	architecture?: string;
	bitness?: string;
	model?: string;
	platform?: string;
	platformVersion?: string;
	uaFullVersion?: string;
	wow64?: boolean;
	fullVersionList?: NavigatorUABrandVersion[];
}

interface UALowEntropyJSON {
	brands?: NavigatorUABrandVersion[];
	mobile?: boolean;
	platform?: string;
}

interface NavigatorUAData {
	readonly brands: NavigatorUABrandVersion[];
	readonly mobile: boolean;
	readonly platform: string;
	getHighEntropyValues(hints: string[]): Promise<UADataValues>;
	toJSON(): UALowEntropyJSON;
}

declare var NavigatorUAData: {
	prototype: NavigatorUAData;
	new(): never;
};

interface NavigatorUA {
	readonly userAgentData: NavigatorUAData;
}

interface Navigator extends NavigatorUA {}
interface WorkerNavigator extends NavigatorUA {}


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
	/** @deprecated */
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
	readonly brands: ReadonlyArray<NavigatorUABrandVersion>;
	readonly mobile: boolean;
	readonly platform: string;
	getHighEntropyValues(hints: ("architecture" | "bitness" | "model" | "platformVersioin" | "uaFullVersion" | "wow64" | "fullVersionList")[]): Promise<UADataValues>;
	toJSON(): UALowEntropyJSON;
}

declare var NavigatorUAData: {
	prototype: NavigatorUAData;
};

interface NavigatorUA {
	readonly userAgentData: NavigatorUAData;
}

interface Navigator extends NavigatorUA {}
interface WorkerNavigator extends NavigatorUA {}

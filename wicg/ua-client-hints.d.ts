
// User Agent Client Hints
// specification: https://wicg.github.io/ua-client-hints/
// repository: https://github.com/WICG/ua-client-hints
// MDN documentation: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgentData

interface NavigatorUAData {
	readonly brands: {
		readonly brand: string;
		readonly version: string;
	}[];
	readonly mobile: boolean;
	readonly platform: string;
	getHighEntropyValues(hints: ("architecture" | "bitness" | "model" | "platformVersion" | "uaFullVersion" | "fullVersionList" | "wow64")[]): Promise<Record<string, any>>;
	toJSON(): Record<string, any>;
}

declare var NavigatorUAData: {
	prototype: NavigatorUAData;
	new(): never;
}

interface Navigator {
	userAgentData: NavigatorUAData;
}

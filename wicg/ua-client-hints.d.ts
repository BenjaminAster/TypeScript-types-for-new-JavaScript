
// User Agent Client Hints
// Specification: https://wicg.github.io/ua-client-hints/
// Repository: https://github.com/WICG/ua-client-hints

interface NavigatorUABrandVersion {
	brand?: string;
	version?: string;
}

interface UADataValues {
	architecture?: string;
	bitness?: string;
	brands?: NavigatorUABrandVersion[];
	formFactor?: string;
	fullVersionList?: NavigatorUABrandVersion[];
	model?: string;
	mobile?: boolean;
	platform?: string;
	platformVersion?: string;
	/** @deprecated The `uaFullVersion` high entropy value is deprecated. Use `fullVersionList` instead. */
	uaFullVersion?: string;
	wow64?: boolean;
}

interface UALowEntropyJSON {
	brands?: NavigatorUABrandVersion[];
	mobile?: boolean;
	platform?: string;
}

type UAHighEntropyValueHint = (
	| "architecture"
	| "bitness"
	| "formFactor"
	| "fullVersionList"
	| "model"
	| "platformVersion"
	| "wow64"
);

/** @deprecated */
type DeprecatedUAFullVersion = "uaFullVersion";

declare class NavigatorUAData {
	readonly brands: ReadonlyArray<NavigatorUABrandVersion>;
	readonly mobile: boolean;
	readonly platform: string;
	getHighEntropyValues(hints: UAHighEntropyValueHint[]): Promise<UADataValues>;
	/** @deprecated The `"uaFullVersion"` high entropy value hint is deprecated. Use `"fullVersionList"` instead. */
	getHighEntropyValues(hints: (UAHighEntropyValueHint | DeprecatedUAFullVersion)[]): Promise<UADataValues>;
	toJSON(): UALowEntropyJSON;
}

interface NavigatorUA {
	readonly userAgentData: NavigatorUAData;
}

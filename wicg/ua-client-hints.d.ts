
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

type UAHighEntropyValueHint = (
	| "architecture"
	| "bitness"
	| "model"
	| "platformVersion"
	| "wow64"
	| "fullVersionList"
);

/** @deprecated */
type DeprecatedUAFullVersion = "uaFullVersion";

declare class NavigatorUAData {
	readonly brands: ReadonlyArray<NavigatorUABrandVersion>;
	readonly mobile: boolean;
	readonly platform: string;
	getHighEntropyValues(hints: (UAHighEntropyValueHint)[]): Promise<UADataValues>;
	/** @deprecated The `"uaFullVersion"` high entropy value hint is deprecated. Use `"fullVersionList"` instead. */
	getHighEntropyValues(hints: (UAHighEntropyValueHint | DeprecatedUAFullVersion)[]): Promise<UADataValues>;
	toJSON(): UALowEntropyJSON;
}

interface NavigatorUA {
	readonly userAgentData: NavigatorUAData;
}


// Local Font Access API
// Specification: https://wicg.github.io/local-font-access/
// Repository: https://github.com/WICG/local-font-access

declare function queryLocalFonts(options?: QueryOptions): Promise<FontData[]>;

interface QueryOptions {
	postscriptNames: string[];
}

interface FontData {
	blob(): Promise<Blob>;
	readonly postscriptName: string;
	readonly fullName: string;
	readonly family: string;
	readonly style: string;
}

declare var FontData: {
	prototype: FontData;
	new(): never;
}

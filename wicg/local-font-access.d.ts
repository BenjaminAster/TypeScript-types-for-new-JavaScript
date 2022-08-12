
// Local Font Access API
// specification: https://wicg.github.io/local-font-access/
// repository: https://github.com/WICG/local-font-access

interface LocalFontsQueryOptions {
	postscriptNames: string[];
}

interface FontData {
	blob(): Promise<Blob>;
	readonly postscriptNames: string[];
	readonly fullName: string;
	readonly family: string;
	readonly style: string;
}

declare var FontData: {
	prototype: FontData;
	new(): never;
}

declare function queryLocalFonts(options?: LocalFontsQueryOptions): Promise<FontData[]>;

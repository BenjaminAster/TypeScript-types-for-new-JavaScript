
// Import Attributes
// Specification: https://tc39.es/proposal-import-attributes/
// Repository: https://github.com/tc39/proposal-import-attributes

interface ImportCallOptions {
	with?: ImportAttributes;
}

type ImportType = (
	| "json"
	| "css"
);

interface ImportAttributes {
	type?: ImportType;
}

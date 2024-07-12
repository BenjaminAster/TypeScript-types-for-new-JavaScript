
// ECMAScript
// Specification: https://tc39.es/ecma262/multipage/
// Repository: https://github.com/tc39/ecma262

// Structured Data
// https://tc39.es/ecma262/multipage/structured-data.html

interface ArrayBuffer {
	readonly maxByteLength: number;
	readonly resizable: boolean;
	resize(newLength: number): void;
}

interface SharedArrayBuffer {
	grow(newLength: number): void;
	readonly growable: boolean;
	readonly maxByteLength: number;
}

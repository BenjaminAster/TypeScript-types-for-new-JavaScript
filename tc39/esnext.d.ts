
// ECMAScript Language Specification
// Specification: https://tc39.es/ecma262/multipage/
// Repository: https://github.com/tc39/ecma262

// Fundamental Objects
// https://tc39.es/ecma262/multipage/fundamental-objects.html

interface ObjectConstructor {
	groupBy<T>(array: T[], callback: (item: T, index?: number) => string): Record<string, T[]>;
}

// Text Processing
// https://tc39.es/ecma262/multipage/text-processing.html

interface String {
	isWellFormed(): boolean;
	toWellFormed(): string;
}

interface RegExp {
	readonly unicodeSets: boolean;
}

// Keyed Collections
// https://tc39.es/ecma262/multipage/keyed-collections.html

interface MapConstructor {
	groupBy<T, K>(array: T[], callback: (item: T, index?: number) => K): Map<K, T[]>;
}

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

// Control Abstraction Objects
// https://tc39.es/ecma262/multipage/control-abstraction-objects.html

interface PromiseConstructor {
	withResolvers<T = any>(): {
		promise: Promise<T>;
		resolve: (value?: T | PromiseLike<T>) => void;
		reject: (reason?: any) => void;
	};
}

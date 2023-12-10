
// ECMAScript Language Specification
// Specification: https://tc39.es/ecma262/
// Repository: https://github.com/tc39/ecma262

// Fundamental Objects
// https://tc39.es/ecma262/multipage/fundamental-objects.html

interface ObjectConstructor {
	groupBy<T>(array: T[], callback: (item: T, index?: number) => string): Record<string, T[]>;
}

interface MapConstructor {
	groupBy<T, K>(array: T[], callback: (item: T, index?: number) => K): Map<K, T[]>;
}


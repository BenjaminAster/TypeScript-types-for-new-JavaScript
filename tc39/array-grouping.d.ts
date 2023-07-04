
// Array Grouping
// Specification: https://tc39.es/proposal-array-grouping/
// Repository: https://github.com/tc39/proposal-array-grouping

interface ObjectConstructor {
	groupBy<T>(array: T[], callback: (item: T, index?: number) => string): Record<string, T[]>;
}

interface MapConstructor {
	groupBy<T, K>(array: T[], callback: (item: T, index?: number) => K): Map<K, T[]>;
}

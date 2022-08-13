
// Array Grouping
// Specification: https://tc39.es/proposal-array-grouping/
// Repository: https://github.com/tc39/proposal-array-grouping

interface Array<T> {
	groupBy(callback: (item: T, index?: number, array?: T[]) => string, thisArg?: any): Record<string, T[]>;
	groupByToMap(callback: (item: T, index?: number, array?: T[]) => string, thisArg?: any): Map<string, T[]>;
}


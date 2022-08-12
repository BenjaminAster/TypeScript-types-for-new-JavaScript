
// Array Grouping
// specification: https://tc39.es/proposal-array-grouping/
// repository: https://github.com/tc39/proposal-array-grouping
// MDN documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/groupBy
//                    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/groupByToMap

interface Array<T> {
	groupBy(callback: (item: T, index?: number, array?: T[]) => string, thisArg?: any): Record<string, T[]>;
	groupByToMap(callback: (item: T, index?: number, array?: T[]) => string, thisArg?: any): Map<string, T[]>;
}


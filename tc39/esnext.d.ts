
// ECMAScript Language Specification
// Specification: https://tc39.es/ecma262/
// Repository: https://github.com/tc39/ecma262


interface Array<T> {
	toReversed(): T[];
	toSorted(compareFn?: (a: T, b: T) => number): T[];
	with(target: number, start: number, end?: number): T[];
	toSpliced(start: number, deleteCount?: number): T[];
	toSpliced(start: number, deleteCount: number, ...items: T[]): T[];
}

interface ReadonlyArray<T> {
	toReversed(): T[];
	toSorted(compareFn?: (a: T, b: T) => number): T[];
	with(target: number, start: number, end?: number): T[];
	toSpliced(start: number, deleteCount?: number): T[];
	toSpliced(start: number, deleteCount: number, ...items: T[]): T[];
}


interface Int8Array {
	toReversed(): Int8Array;
	toSorted(compareFn?: (a: number, b: number) => number): Int8Array;
	with(target: number, start: number, end?: number): Int8Array;
}

interface Uint8Array {
	toReversed(): Uint8Array;
	toSorted(compareFn?: (a: number, b: number) => number): Uint8Array;
	with(target: number, start: number, end?: number): Uint8Array;
}

interface Uint8ClampedArray {
	toReversed(): Uint8ClampedArray;
	toSorted(compareFn?: (a: number, b: number) => number): Uint8ClampedArray;
	with(target: number, start: number, end?: number): Uint8ClampedArray;
}

interface Int16Array {
	toReversed(): Int16Array;
	toSorted(compareFn?: (a: number, b: number) => number): Int16Array;
	with(target: number, start: number, end?: number): Int16Array;
}

interface Uint16Array {
	toReversed(): Uint16Array;
	toSorted(compareFn?: (a: number, b: number) => number): Uint16Array;
	with(target: number, start: number, end?: number): Uint16Array;
}

interface Int32Array {
	toReversed(): Int32Array;
	toSorted(compareFn?: (a: number, b: number) => number): Int32Array;
	with(target: number, start: number, end?: number): Int32Array;
}

interface Uint32Array {
	toReversed(): Uint32Array;
	toSorted(compareFn?: (a: number, b: number) => number): Uint32Array;
	with(target: number, start: number, end?: number): Uint32Array;
}

interface BigInt64Array {
	toReversed(): BigInt64Array;
	toSorted(compareFn?: (a: number, b: number) => number): BigInt64Array;
	with(target: number, start: number, end?: number): BigInt64Array;
}

interface BigUint64Array {
	toReversed(): BigUint64Array;
	toSorted(compareFn?: (a: number, b: number) => number): BigUint64Array;
	with(target: number, start: number, end?: number): BigUint64Array;
}

interface Float32Array {
	toReversed(): Float32Array;
	toSorted(compareFn?: (a: number, b: number) => number): Float32Array;
	with(target: number, start: number, end?: number): Float32Array;
}

interface Float64Array {
	toReversed(): Float64Array;
	toSorted(compareFn?: (a: number, b: number) => number): Float64Array;
	with(target: number, start: number, end?: number): Float64Array;
}


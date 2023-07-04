
// Array.fromAsync
// Specification: https://tc39.es/proposal-array-from-async/
// Repository: https://github.com/tc39/proposal-array-from-async

interface ArrayConstructor {
	fromAsync<T>(asyncIterable: AsyncIterable<T>): Promise<T[]>;
}

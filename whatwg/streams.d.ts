
// Streams
// Specification: https://streams.spec.whatwg.org/
// Repository: https://github.com/whatwg/streams

interface ReadableStream<R = any> {
	[Symbol.asyncIterator](): AsyncIterableIterator<R>;
}

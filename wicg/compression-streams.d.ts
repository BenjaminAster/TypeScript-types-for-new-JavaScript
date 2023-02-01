
// Compression Streams
// Specification: https://wicg.github.io/compression/
// Repository: https://github.com/WICG/compression

type CompressionStreamFormat = (
	| "deflate"
	| "deflate-raw"
	| "gzip"
);

interface CompressionStream extends GenericTransformStream {}

declare var CompressionStream: {
	prototype: CompressionStream;
	new(format: CompressionStreamFormat): CompressionStream;
	new(format: string): CompressionStream;
};

interface DecompressionStream extends GenericTransformStream {}

declare var DecompressionStream: {
	prototype: DecompressionStream;
	new(format: CompressionStreamFormat): DecompressionStream;
	new(format: string): DecompressionStream;
};


// File System
// Specification: https://fs.spec.whatwg.org
// Repository: https://github.com/whatwg/fs

interface FileSystemCreateWritableOptions {
	keepExistingData?: boolean;
}

interface FileSystemFileHandle extends FileSystemHandle {
	createWritable(options?: FileSystemCreateWritableOptions): Promise<FileSystemWritableFileStream>;
}

declare enum WriteCommandType {
	"write",
	"seek",
	"truncate",
}

interface WriteParams {
	type: WriteCommandType;
	size?: number;
	position?: number;
	data?: BufferSource | Blob | string;
}

type FileSystemWriteChunkType = BufferSource | Blob | string | WriteParams;

interface FileSystemWritableFileStream extends WritableStream {
	write(data: FileSystemWriteChunkType): Promise<void>;
	seek(position: number): Promise<void>;
	truncate(size: number): Promise<void>;
}

declare var FileSystemWritableFileStream: {
	prototype: FileSystemWritableFileStream;
	new(): never;
}

interface StorageManager {
	getDirectory(): Promise<FileSystemDirectoryHandle>;
}

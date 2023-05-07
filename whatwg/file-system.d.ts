
// File System
// Specification: https://fs.spec.whatwg.org
// Repository: https://github.com/whatwg/fs

// TODO: remove writables for TypeScript 5.1.0

interface FileSystemCreateWritableOptions {
	keepExistingData?: boolean;
}

interface FileSystemHandle {
	// non-standard getUniqueId() function (Chromium only, see https://github.com/whatwg/fs/blob/97bcadc/UniqueID.md):
	getUniqueId(): Promise<string>;
}

interface FileSystemFileHandle extends FileSystemHandle {
	createWritable(options?: FileSystemCreateWritableOptions): Promise<FileSystemWritableFileStream>;

	// non-standard move() function (Chromium only, see https://whatpr.org/fs/10.html#dom-filesystemhandle-move):
	move(name: string): Promise<void>;
	move(parent: FileSystemDirectoryHandle): Promise<void>;
	move(parent: FileSystemDirectoryHandle, name: string): Promise<void>;
}

interface FileSystemDirectoryHandle extends FileSystemHandle {
	[Symbol.asyncIterator](): AsyncIterableIterator<[string, FileSystemHandle]>;
	entries(): AsyncIterableIterator<[string, FileSystemHandle]>;
	keys(): AsyncIterableIterator<string>;
	values(): AsyncIterableIterator<FileSystemHandle>;
}

type WriteCommandType = (
	| "write"
	| "seek"
	| "truncate"
);

interface WriteParams {
	type: WriteCommandType;
	size?: number;
	position?: number;
	data?: BufferSource | Blob | string;
}

type FileSystemWriteChunkType = BufferSource | Blob | string | WriteParams;

declare class FileSystemWritableFileStream extends WritableStream {
	write(data: FileSystemWriteChunkType): Promise<void>;
	seek(position: number): Promise<void>;
	truncate(size: number): Promise<void>;
}

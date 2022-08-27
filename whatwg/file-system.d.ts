
// File System
// Specification: https://fs.spec.whatwg.org
// Repository: https://github.com/whatwg/fs

interface FileSystemCreateWritableOptions {
	keepExistingData?: boolean;
}

interface FileSystemFileHandle extends FileSystemHandle {
	createWritable(options?: FileSystemCreateWritableOptions): Promise<FileSystemWritableFileStream>;

	// non-standard move() function (Chromium only, see https://whatpr.org/fs/10.html#dom-filesystemhandle-move):
	move(name: string): Promise<void>;
	move(parent: FileSystemDirectoryHandle): Promise<void>;
	move(parent: FileSystemDirectoryHandle, name: string): Promise<void>;
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

interface StorageManager {
	getDirectory(): Promise<FileSystemDirectoryHandle>;
}

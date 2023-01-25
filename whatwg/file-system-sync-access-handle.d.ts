
// File System: FileSystemSyncAccessHandle (Workers only)
// Specification: https://fs.spec.whatwg.org
// Repository: https://github.com/whatwg/fs

/// <reference no-default-lib="true" />
/// <reference lib="ESNext" />
/// <reference lib="WebWorker" />
/// <reference lib="WebWorker.Iterable" />

/// <reference path="./file-system.d.ts" />

interface FileSystemFileHandle extends FileSystemHandle {
	createSyncAccessHandle(): Promise<FileSystemSyncAccessHandle>;
}

interface FileSystemReadWriteOptions {
	at?: number;
}

declare class FileSystemSyncAccessHandle {
	read(buffer: BufferSource, options?: FileSystemReadWriteOptions): number;
	write(buffer: BufferSource, options?: FileSystemReadWriteOptions): number;
	truncate(newSize: number): void;
	getSize(): number;
	flush(): void;
	close(): void;
}

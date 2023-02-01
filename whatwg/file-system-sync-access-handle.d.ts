
// File System: FileSystemSyncAccessHandle (Workers only)
// Specification: https://fs.spec.whatwg.org
// Repository: https://github.com/whatwg/fs

/// <reference no-default-lib="true" />
/// <reference lib="ESNext" />
/// <reference lib="WebWorker" />
/// <reference lib="WebWorker.Iterable" />

/// <reference path="./file-system.d.ts" />

// file system sync access handles are included in TypeScript 5.0 and will be removed from here on March 14

interface FileSystemFileHandle extends FileSystemHandle {
	createSyncAccessHandle(): Promise<FileSystemSyncAccessHandle>;
}

interface FileSystemReadWriteOptions {
	at?: number;
}

interface FileSystemSyncAccessHandle {
	read(buffer: BufferSource, options?: FileSystemReadWriteOptions): number;
	write(buffer: BufferSource, options?: FileSystemReadWriteOptions): number;
	truncate(newSize: number): void;
	getSize(): number;
	flush(): void;
	close(): void;
}

declare var FileSystemSyncAccessHandle: {
	prototype: FileSystemSyncAccessHandle;
	new(): FileSystemSyncAccessHandle;
}

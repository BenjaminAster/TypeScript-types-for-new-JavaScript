
// File System
// Specification: https://fs.spec.whatwg.org
// Repository: https://github.com/whatwg/fs

interface FileSystemHandle {
	// non-standard getUniqueId() function (Chromium only, see https://github.com/whatwg/fs/blob/97bcadc/UniqueID.md):
	getUniqueId(): Promise<string>;
}

interface FileSystemFileHandle extends FileSystemHandle {
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

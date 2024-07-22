
// File System
// Specification: https://fs.spec.whatwg.org
// Repository: https://github.com/whatwg/fs

interface FileSystemHandle {
	// non-standard getUniqueId() function (Chromium only, see https://github.com/whatwg/fs/blob/9063e17/UniqueID.md):
	getUniqueId(): Promise<string>;
}

interface FileSystemFileHandle extends FileSystemHandle {
	// non-standard move() function (Chromium only, see https://whatpr.org/fs/10.html#dom-filesystemhandle-move):
	move(newEntryName: string): Promise<void>;
	move(destinationDirectory: FileSystemDirectoryHandle): Promise<void>;
	move(destinationDirectory: FileSystemDirectoryHandle, newEntryName: string): Promise<void>;
}

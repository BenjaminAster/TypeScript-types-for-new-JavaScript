
// File System Observer
// Explainer: https://github.com/whatwg/fs/blob/main/proposals/FileSystemObserver.md

interface FileSystemObserver {
	observe(handle: FileSystemHandle, options?: FileSystemObserverObserveOptions): Promise<void>;
	unobserve(handle: FileSystemHandle): void;
	disconnect(): void;
}

declare var FileSystemObserver: {
	prototype: FileSystemObserver;
	new(callback: FileSystemObserverCallback): FileSystemObserver;
};

type FileSystemObserverCallback = (records: FileSystemChangeRecord[], observer: FileSystemObserver) => void;

type FileSystemChangeType = (
	| "created"
	| "deleted"
	| "modified"
	| "moved"
	| "unsupported"
	| "errored"
);

interface FileSystemObserverObserveOptions {
	recursive?: boolean;
}

interface FileSystemChangeRecord {
	readonly root: FileSystemHandle;
	readonly changedHandle: FileSystemHandle;
	readonly relativePathComponents: ReadonlyArray<string>;
	readonly type: FileSystemChangeType;
	readonly relativePathMovedFrom: FileSystemHandle | null;
}

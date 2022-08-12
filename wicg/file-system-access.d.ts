
// File System Access API
// specification: https://wicg.github.io/file-system-access/
// repository: https://github.com/WICG/file-system-access
// MDN documentation: https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API

// CREDIT: Ingvar Stepanyan <https://github.com/RReverser> (Twitter: https://twitter.com/RReverser)
// see https://www.npmjs.com/package/@types/wicg-file-system-access (https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/wicg-file-system-access)

// Note: some parts of this specification have already been integrated into Visual Studio Code's type definitions, so I removed them.

interface FileSystemHandle {
	readonly kind: 'file' | 'directory';
	readonly name: string;

	isSameEntry(other: FileSystemHandle): Promise<boolean>;
	queryPermission(descriptor?: FileSystemHandlePermissionDescriptor): Promise<PermissionState>;
	requestPermission(descriptor?: FileSystemHandlePermissionDescriptor): Promise<PermissionState>;
}

declare var FileSystemHandle: {
	prototype: FileSystemHandle;
	new(): FileSystemHandle;
};
type FileSystemHandleUnion = FileSystemFileHandle | FileSystemDirectoryHandle;

interface FilePickerAcceptType {
	description?: string | undefined;
	accept: Record<string, string | string[]>;
}

interface FilePickerOptions {
	types?: FilePickerAcceptType[] | undefined;
	excludeAcceptAllOption?: boolean | undefined;
}

interface OpenFilePickerOptions extends FilePickerOptions {
	multiple?: boolean | undefined;
}

interface SaveFilePickerOptions extends FilePickerOptions {
	suggestedName?: string;
}

// tslint:disable-next-line:no-empty-interface
interface DirectoryPickerOptions { }

type FileSystemPermissionMode = 'read' | 'readwrite';

interface FileSystemPermissionDescriptor extends PermissionDescriptor {
	handle: FileSystemHandle;
	mode?: FileSystemPermissionMode | undefined;
}

interface FileSystemHandlePermissionDescriptor {
	mode?: FileSystemPermissionMode | undefined;
}

interface FileSystemCreateWritableOptions {
	keepExistingData?: boolean | undefined;
}

interface FileSystemGetFileOptions {
	create?: boolean | undefined;
}

interface FileSystemGetDirectoryOptions {
	create?: boolean | undefined;
}

interface FileSystemRemoveOptions {
	recursive?: boolean | undefined;
}

type WriteParams =
	| { type: 'write'; position?: number | undefined; data: BufferSource | Blob | string }
	| { type: 'seek'; position: number }
	| { type: 'truncate'; size: number };

type FileSystemWriteChunkType = BufferSource | Blob | string | WriteParams;

// TODO: remove this once https://github.com/microsoft/TSJS-lib-generator/issues/881 is fixed.
// Native File System API especially needs this method.
interface WritableStream {
	close(): Promise<void>;
}

declare class FileSystemWritableFileStream extends WritableStream {
	write(data: FileSystemWriteChunkType): Promise<void>;
	seek(position: number): Promise<void>;
	truncate(size: number): Promise<void>;
}

interface FileSystemFileHandle extends FileSystemHandle {
	readonly kind: 'file';
	getFile(): Promise<File>;
	move(newEntryName: string): Promise<void>;
	createWritable(options?: FileSystemCreateWritableOptions): Promise<FileSystemWritableFileStream>;
}

declare var FileSystemFileHandle: {
	prototype: FileSystemFileHandle;
	new(): FileSystemFileHandle;
};

interface FileSystemDirectoryHandle extends FileSystemHandle {
	readonly kind: 'directory';
	getDirectoryHandle(name: string, options?: FileSystemGetDirectoryOptions): Promise<FileSystemDirectoryHandle>;
	getFileHandle(name: string, options?: FileSystemGetFileOptions): Promise<FileSystemFileHandle>;
	removeEntry(name: string, options?: FileSystemRemoveOptions): Promise<void>;
	resolve(possibleDescendant: FileSystemHandle): Promise<string[] | null>;
	keys(): AsyncIterableIterator<string>;
	values(): AsyncIterableIterator<FileSystemDirectoryHandle | FileSystemFileHandle>;
	entries(): AsyncIterableIterator<[string, FileSystemDirectoryHandle | FileSystemFileHandle]>;
	[Symbol.asyncIterator]: FileSystemDirectoryHandle['entries'];
}

declare var FileSystemDirectoryHandle: {
	prototype: FileSystemDirectoryHandle;
	new(): FileSystemDirectoryHandle;
};

interface DataTransferItem {
	getAsFileSystemHandle(): Promise<FileSystemHandle | null>;
}

interface StorageManager {
	getDirectory(): Promise<FileSystemDirectoryHandle>;
}

declare function showOpenFilePicker(
	options?: OpenFilePickerOptions & { multiple?: false | undefined },
): Promise<[FileSystemFileHandle]>;
declare function showOpenFilePicker(options?: OpenFilePickerOptions): Promise<FileSystemFileHandle[]>;
declare function showSaveFilePicker(options?: SaveFilePickerOptions): Promise<FileSystemFileHandle>;
declare function showDirectoryPicker(options?: DirectoryPickerOptions): Promise<FileSystemDirectoryHandle>;


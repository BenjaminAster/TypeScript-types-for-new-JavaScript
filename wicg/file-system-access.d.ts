
// File System Access API
// Specification: https://wicg.github.io/file-system-access/
// Repository: https://github.com/WICG/file-system-access

type FileSystemPermissionMode = (
	| "read"
	| "readwrite"
);

interface FileSystemPermissionDescriptor extends PermissionDescriptor {
	handle: FileSystemHandle;
	mode?: FileSystemPermissionMode;
}

interface FileSystemHandlePermissionDescriptor {
	mode?: FileSystemPermissionMode;
}

interface FileSystemHandle {
	queryPermission(descriptor?: FileSystemHandlePermissionDescriptor): Promise<PermissionState>;
	requestPermission(descriptor?: FileSystemHandlePermissionDescriptor): Promise<PermissionState>;
}

type WellKnownDirectory = (
	| "desktop"
	| "documents"
	| "downloads"
	| "music"
	| "pictures"
	| "videos"
);

type StartInDirectory = WellKnownDirectory | FileSystemHandle;

interface FilePickerAcceptType {
	description?: string;
	accept?: Record<string, string | string[]>;
}

interface FilePickerOptions {
	types?: FilePickerAcceptType[];
	excludeAcceptAllOption?: boolean;
	id?: string;
	startIn?: StartInDirectory;
}

interface OpenFilePickerOptions extends FilePickerOptions {
	multiple?: boolean;
}

interface SaveFilePickerOptions extends FilePickerOptions {
	suggestedName?: string;
}

interface DirectoryPickerOptions {
	id?: string;
	startIn?: StartInDirectory;
	mode?: FileSystemPermissionMode;
}

declare function showOpenFilePicker(options?: OpenFilePickerOptions): Promise<FileSystemFileHandle[]>;
declare function showSaveFilePicker(options?: SaveFilePickerOptions): Promise<FileSystemFileHandle>;
declare function showDirectoryPicker(options?: DirectoryPickerOptions): Promise<FileSystemDirectoryHandle>;

interface DataTransferItem {
	getAsFileSystemHandle(): Promise<FileSystemHandle | null>;
}

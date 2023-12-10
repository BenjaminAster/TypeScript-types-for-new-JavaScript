
type WorkerLocation = Location;
declare var WorkerLocation: typeof Location;

type WorkerNavigator = Navigator;
declare var WorkerNavigator: typeof Navigator;

interface WorkerGlobalScopeEventMap {
	"error": ErrorEvent;
	"languagechange": Event;
	"offline": Event;
	"online": Event;
	"rejectionhandled": PromiseRejectionEvent;
	"unhandledrejection": PromiseRejectionEvent;
}

interface DedicatedWorkerGlobalScopeEventMap extends WorkerGlobalScopeEventMap {
	"message": MessageEvent;
	"messageerror": MessageEvent;
}

interface WindowEventMap extends DedicatedWorkerGlobalScopeEventMap { }

/**
 * This Web Workers API interface is an interface representing the scope of any worker. Workers have no browsing context; this scope contains the information usually conveyed by Window objects — in this case event handlers, the console or the associated WorkerNavigator object. Each WorkerGlobalScope has its own event loop.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope)
 */
interface WorkerGlobalScope extends EventTarget, FontFaceSource, WindowOrWorkerGlobalScope {
	/**
	 * Returns workerGlobal's WorkerLocation object.
	 *
	 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/location)
	 */
	readonly location: WorkerLocation;
	/**
	 * Returns workerGlobal's WorkerNavigator object.
	 *
	 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/navigator)
	 */
	readonly navigator: WorkerNavigator;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/error_event) */
	onerror: ((this: WorkerGlobalScope, ev: ErrorEvent) => any) | null;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/languagechange_event) */
	onlanguagechange: ((this: WorkerGlobalScope, ev: Event) => any) | null;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/offline_event) */
	onoffline: ((this: WorkerGlobalScope, ev: Event) => any) | null;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/online_event) */
	ononline: ((this: WorkerGlobalScope, ev: Event) => any) | null;
	onrejectionhandled: ((this: WorkerGlobalScope, ev: PromiseRejectionEvent) => any) | null;
	onunhandledrejection: ((this: WorkerGlobalScope, ev: PromiseRejectionEvent) => any) | null;
	/**
	 * Returns workerGlobal.
	 *
	 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/self)
	 */
	readonly self: WorkerGlobalScope & typeof globalThis;
	/**
	 * Fetches each URL in urls, executes them one-by-one in the order they are passed, and then returns (or throws if something went amiss).
	 *
	 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/importScripts)
	 */
	importScripts(...urls: (string | URL)[]): void;
	addEventListener<K extends keyof WorkerGlobalScopeEventMap>(type: K, listener: (this: WorkerGlobalScope, ev: WorkerGlobalScopeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof WorkerGlobalScopeEventMap>(type: K, listener: (this: WorkerGlobalScope, ev: WorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var WorkerGlobalScope: {
	prototype: WorkerGlobalScope;
	new(): WorkerGlobalScope;
};

/**
 * (the Worker global scope) is accessible through the self keyword. Some additional global functions, namespaces objects, and constructors, not typically associated with the worker global scope, but available on it, are listed in the JavaScript Reference. See also: Functions available to workers.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope)
 */
interface DedicatedWorkerGlobalScope extends WorkerGlobalScope, AnimationFrameProvider {
	/**
	 * Returns dedicatedWorkerGlobal's name, i.e. the value given to the Worker constructor. Primarily useful for debugging.
	 *
	 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/name)
	 */
	readonly name: string;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/message_event) */
	onmessage: ((this: DedicatedWorkerGlobalScope, ev: MessageEvent) => any) | null;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event) */
	onmessageerror: ((this: DedicatedWorkerGlobalScope, ev: MessageEvent) => any) | null;
	/**
	 * Aborts dedicatedWorkerGlobal.
	 *
	 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/close)
	 */
	close(): void;
	/**
	 * Clones message and transmits it to the Worker object associated with dedicatedWorkerGlobal. transfer can be passed as a list of objects that are to be transferred rather than cloned.
	 *
	 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)
	 */
	postMessage(message: any, transfer: Transferable[]): void;
	postMessage(message: any, options?: StructuredSerializeOptions): void;
	addEventListener<K extends keyof DedicatedWorkerGlobalScopeEventMap>(type: K, listener: (this: DedicatedWorkerGlobalScope, ev: DedicatedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof DedicatedWorkerGlobalScopeEventMap>(type: K, listener: (this: DedicatedWorkerGlobalScope, ev: DedicatedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var DedicatedWorkerGlobalScope: {
	prototype: DedicatedWorkerGlobalScope;
	new(): DedicatedWorkerGlobalScope;
};

interface ExtendableEventInit extends EventInit { }

/**
 * Extends the lifetime of the install and activate events dispatched on the global scope as part of the service worker lifecycle. This ensures that any functional events (like FetchEvent) are not dispatched until it upgrades database schemas and deletes the outdated cache entries.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableEvent)
 */
interface ExtendableEvent extends Event {
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableEvent/waitUntil) */
	waitUntil(f: Promise<any>): void;
}

declare var ExtendableEvent: {
	prototype: ExtendableEvent;
	new(type: string, eventInitDict?: ExtendableEventInit): ExtendableEvent;
};

declare function importScripts(...urls: string[]): void;

/**
 * Allows to read File or Blob objects in a synchronous way.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReaderSync)
 */
interface FileReaderSync {
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReaderSync/readAsArrayBuffer) */
	readAsArrayBuffer(blob: Blob): ArrayBuffer;
	/**
	 * @deprecated
	 *
	 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReaderSync/readAsBinaryString)
	 */
	readAsBinaryString(blob: Blob): string;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReaderSync/readAsDataURL) */
	readAsDataURL(blob: Blob): string;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReaderSync/readAsText) */
	readAsText(blob: Blob, encoding?: string): string;
}

declare var FileReaderSync: {
	prototype: FileReaderSync;
	new(): FileReaderSync;
};

/**
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemFileHandle)
 */
interface FileSystemFileHandle {
	createSyncAccessHandle(): Promise<FileSystemSyncAccessHandle>;
}

interface FileSystemReadWriteOptions {
	at?: number;
}

/**
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemSyncAccessHandle)
 */
interface FileSystemSyncAccessHandle {
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemSyncAccessHandle/close) */
	close(): void;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemSyncAccessHandle/flush) */
	flush(): void;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemSyncAccessHandle/getSize) */
	getSize(): number;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemSyncAccessHandle/read) */
	read(buffer: AllowSharedBufferSource, options?: FileSystemReadWriteOptions): number;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemSyncAccessHandle/truncate) */
	truncate(newSize: number): void;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemSyncAccessHandle/write) */
	write(buffer: AllowSharedBufferSource, options?: FileSystemReadWriteOptions): number;
}

declare var FileSystemSyncAccessHandle: {
	prototype: FileSystemSyncAccessHandle;
	new(): FileSystemSyncAccessHandle;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/fonts) */
declare var fonts: FontFaceSet;

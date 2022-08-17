
// Background Fetch
// Specification: https://wicg.github.io/background-fetch/
// Repository: https://github.com/WICG/background-fetch/

/// <reference lib="WebWorker" />
/// <reference path="../w3c/image-resource.d.ts" />

interface ServiceWorkerGlobalScope {
	onbackgroundfetchsuccess: ((this: ServiceWorkerGlobalScope, ev: BackgroundFetchEvent) => any) | null;
	onbackgroundfetchfail: ((this: ServiceWorkerGlobalScope, ev: BackgroundFetchEvent) => any) | null;
	onbackgroundfetchabort: ((this: ServiceWorkerGlobalScope, ev: BackgroundFetchEvent) => any) | null;
	onbackgroundfetchclick: ((this: ServiceWorkerGlobalScope, ev: BackgroundFetchEvent) => any) | null;
}

interface ServiceWorkerGlobalScopeEventMap {
	"backgroundfetchsuccess": BackgroundFetchEvent;
	"backgroundfetchfail": BackgroundFetchEvent;
	"backgroundfetchabort": BackgroundFetchEvent;
	"backgroundfetchclick": BackgroundFetchEvent;
}

interface ServiceWorkerRegistration {
	readonly backgroundFetch: BackgroundFetchManager;
}

interface BackgroundFetchManager {
	fetch(id: string, requests: RequestInfo | RequestInfo[], options?: BackgroundFetchOptions): Promise<BackgroundFetchRegistration>;
	get(id: string): Promise<BackgroundFetchRegistration>;
	getIds(): Promise<string[]>;
}

interface BackgroundFetchUIOptions {
	icons?: ImageResource[];
	title?: string;
}

interface BackgroundFetchOptions extends BackgroundFetchUIOptions {
	downloadTotal?: number;
}

interface BackgroundFetchRegistration extends EventTarget {
	readonly id: string;
	readonly uploadTotal: number;
	readonly uploaded: number;
	readonly downloadTotal: number;
	readonly downloaded: number;
	readonly result: BackgroundFetchResult;
	readonly failureReason: BackgroundFetchFailureReason;
	readonly recordsAvailable: boolean;
	onprogress: ((this: ServiceWorkerGlobalScope, ev: BackgroundFetchEvent) => any) | null;
	addEventListener<K extends keyof BackgroundFetchRegistrationEventMap>(type: K, listener: (this: BackgroundFetchRegistration, ev: BackgroundFetchRegistrationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof BackgroundFetchRegistrationEventMap>(type: K, listener: (this: BackgroundFetchRegistration, ev: BackgroundFetchRegistrationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
	abort(): Promise<boolean>;
	match(request: RequestInfo, options?: CacheQueryOptions): Promise<BackgroundFetchRecord>;
	matchAll(request?: RequestInfo, options?: CacheQueryOptions): Promise<BackgroundFetchRecord[]>;
}

interface BackgroundFetchRegistrationEventMap {
	"progress": BackgroundFetchEvent;
}

declare var BackgroundFetchRegistration: {
	prototype: BackgroundFetchRegistration;
};

type BackgroundFetchResult = (
	| ""
	| "success"
	| "failure"
);

type BackgroundFetchFailureReason = (
	| ""
	| "aborted"
	| "bad-status"
	| "fetch-error"
	| "quota-exceeded"
	| "download-total-exceeded"
);

interface BackgroundFetchRecord {
	readonly request: Request;
	readonly responseReady: Promise<Response>;
}

declare var BackgroundFetchRecord: {
	prototype: BackgroundFetchRecord;
};

interface BackgroundFetchEvent extends ExtendableEvent {
	readonly registration: BackgroundFetchRegistration;
}

declare var BackgroundFetchEvent: {
	prototype: BackgroundFetchEvent;
	new(type: string, init: BackgroundFetchEventInit);
};

interface BackgroundFetchEventInit extends ExtendableEventInit {
	registration: BackgroundFetchRegistration;
}

interface BackgroundFetchUpdateUIEvent extends BackgroundFetchEvent {
	updateUI(options?: BackgroundFetchUIOptions): Promise<void>;
}

declare var BackgroundFetchUpdateUIEvent: {
	prototype: BackgroundFetchUpdateUIEvent;
	new(type: string, init: BackgroundFetchEventInit);
};

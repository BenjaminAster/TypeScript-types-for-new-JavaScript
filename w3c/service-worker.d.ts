
// Service Workers
// Specification: https://w3c.github.io/ServiceWorker/
// Repository: https://github.com/w3c/ServiceWorker

declare var clients: Clients;
declare var onactivate: ((this: ServiceWorkerGlobalScope, ev: ExtendableEvent) => any) | null;
declare var onfetch: ((this: ServiceWorkerGlobalScope, ev: FetchEvent) => any) | null;
declare var oninstall: ((this: ServiceWorkerGlobalScope, ev: ExtendableEvent) => any) | null;
declare var onnotificationclick: ((this: ServiceWorkerGlobalScope, ev: NotificationEvent) => any) | null;
declare var onnotificationclose: ((this: ServiceWorkerGlobalScope, ev: NotificationEvent) => any) | null;
declare var onpush: ((this: ServiceWorkerGlobalScope, ev: PushEvent) => any) | null;
declare var onpushsubscriptionchange: ((this: ServiceWorkerGlobalScope, ev: Event) => any) | null;
declare var registration: ServiceWorkerRegistration;
declare var serviceWorker: ServiceWorker;
declare function skipWaiting(): Promise<void>;
declare function addEventListener<K extends keyof ServiceWorkerGlobalScopeEventMap>(type: K, listener: (this: ServiceWorkerGlobalScope, ev: ServiceWorkerGlobalScopeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
declare function addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
declare function removeEventListener<K extends keyof ServiceWorkerGlobalScopeEventMap>(type: K, listener: (this: ServiceWorkerGlobalScope, ev: ServiceWorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
declare function removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;

interface WorkerGlobalScope {
	readonly clients: Clients;
	onactivate: ((this: ServiceWorkerGlobalScope, ev: ExtendableEvent) => any) | null;
	onfetch: ((this: ServiceWorkerGlobalScope, ev: FetchEvent) => any) | null;
	oninstall: ((this: ServiceWorkerGlobalScope, ev: ExtendableEvent) => any) | null;
	onnotificationclick: ((this: ServiceWorkerGlobalScope, ev: NotificationEvent) => any) | null;
	onnotificationclose: ((this: ServiceWorkerGlobalScope, ev: NotificationEvent) => any) | null;
	onpush: ((this: ServiceWorkerGlobalScope, ev: PushEvent) => any) | null;
	onpushsubscriptionchange: ((this: ServiceWorkerGlobalScope, ev: Event) => any) | null;
	readonly registration: ServiceWorkerRegistration;
	readonly serviceWorker: ServiceWorker;
	skipWaiting(): Promise<void>;
	addEventListener<K extends keyof ServiceWorkerGlobalScopeEventMap>(type: K, listener: (this: ServiceWorkerGlobalScope, ev: ServiceWorkerGlobalScopeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof ServiceWorkerGlobalScopeEventMap>(type: K, listener: (this: ServiceWorkerGlobalScope, ev: ServiceWorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

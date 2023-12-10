
// Cookie Store API
// Specification: https://wicg.github.io/cookie-store/
// Repository: https://github.com/WICG/cookie-store

interface CookieStore extends EventTarget {
	get(name: string): Promise<CookieListItem | null>;
	get(options: CookieStoreGetOptions): Promise<CookieListItem | null>;
	getAll(name: string): Promise<CookieList>;
	getAll(options: CookieStoreGetOptions): Promise<CookieList>;
	set(name: string, value: string): Promise<void>;
	set(options: CookieInit): Promise<void>;
	delete(name: string): Promise<void>;
	delete(options: CookieStoreDeleteOptions): Promise<void>;
	onchange: ((this: CookieStore, ev: CookieChangeEvent) => any) | null;
	addEventListener<K extends keyof CookieStoreEventMap>(type: K, listener: (this: CookieStore, ev: CookieStoreEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof CookieStoreEventMap>(type: K, listener: (this: CookieStore, ev: CookieStoreEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var CookieStore: {
	prototype: CookieStore;
};

interface CookieStoreEventMap {
	"change": CookieChangeEvent;
}

interface CookieStoreGetOptions {
	name: string;
	url: string;
}

type CookieSameSite = (
	| "strict"
	| "lax"
	| "none"
);

interface CookieInit {
	name: string;
	value: string;
	expires?: EpochTimeStamp;
	domain?: string;
	path?: string;
	sameSite?: CookieSameSite;
}

interface CookieStoreDeleteOptions {
	name: string;
	domain?: string;
	path?: string;
}

interface CookieListItem {
	name: string;
	value: string;
	domain: string | null;
	path: string;
	expires: EpochTimeStamp | null;
	secure: boolean;
	sameSite: CookieSameSite;
}

type CookieList = CookieListItem[];

interface CookieStoreManager {
	subscribe(subscriptions: CookieStoreGetOptions[]): Promise<void>;
	getSubscriptions(): Promise<CookieStoreGetOptions[]>;
	unsubscribe(subscriptions: CookieStoreGetOptions[]): Promise<void>;
}

declare var CookieStoreManager: {
	prototype: CookieStoreManager;
};

interface ServiceWorkerRegistration {
	readonly cookies: CookieStoreManager;
}

interface CookieChangeEvent extends Event {
	readonly changed: ReadonlyArray<CookieListItem>;
	readonly deleted: ReadonlyArray<CookieListItem>;
}

declare var CookieChangeEvent: {
	prototype: CookieChangeEvent;
	new(type: string, eventInitDict?: CookieChangeEventInit): CookieChangeEvent;
};

interface CookieChangeEventInit extends EventInit {
	changed: CookieList;
	deleted: CookieList;
}

declare var cookieStore: CookieStore;

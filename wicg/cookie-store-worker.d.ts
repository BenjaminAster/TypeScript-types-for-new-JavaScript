
// Cookie Store API, Worker-only parts
// Specification: https://wicg.github.io/cookie-store/
// Repository: https://github.com/WICG/cookie-store

/// <reference no-default-lib="true" />
/// <reference lib="ESNext" />
/// <reference lib="WebWorker" />
/// <reference lib="WebWorker.Iterable" />

/// <reference path="./cookie-store.d.ts" />

interface ExtendableCookieChangeEvent extends ExtendableEvent {
	readonly changed: ReadonlyArray<CookieListItem>;
	readonly deleted: ReadonlyArray<CookieListItem>;
}

declare var ExtendableCookieChangeEvent: {
	prototype: ExtendableCookieChangeEvent;
	new(type: string, eventInitDict?: CookieChangeEventInit): ExtendableCookieChangeEvent;
}

interface ExtendableCookieChangeEventInit extends ExtendableEventInit {
	changed: CookieList;
	deleted: CookieList;
}

declare var ExtendableCookieChangeEventInit: {
	prototype: ExtendableCookieChangeEventInit;
}

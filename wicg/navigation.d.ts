
// Navigation API
// specification: https://wicg.github.io/navigation-api/
// repository: https://github.com/WICG/navigation-api

interface NavigationHistoryEntryEventMap {
	"dispose": Event;
}

interface NavigationHistoryEntry extends EventTarget {
	readonly url: string | null;
	readonly key: string;
	readonly id: string;
	readonly index: number;
	readonly sameDocument: boolean;
	getState(): any;
	ondispose: (event: Event) => void;
	addEventListener<K extends keyof NavigationHistoryEntryEventMap>(type: K, listener: (this: NavigationHistoryEntry, ev: NavigationHistoryEntryEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface NavigationUpdateCurrentEntryOptions {
	state?: any;
}

interface NavigationTransition {
	readonly navigationType: NavigationType;
	readonly from: NavigationHistoryEntry;
	readonly finished: Promise<undefined>;
}

declare var NavigationTransition: {
	prototype: NavigationTransition;
	new(): never;
}

interface NavigationOptions {
	info?: any;
}

interface NavigationNavigateOptions extends NavigationOptions {
	state?: any;
	history?: NavigationHistoryBehavior;
}

interface NavigationReloadOptions extends NavigationOptions {
	state?: any;
}

interface NavigationResult {
	committed: Promise<NavigationHistoryEntry>;
	finished: Promise<NavigationHistoryEntry>;
}

declare enum NavigationHistoryBehavior {
	"auto",
	"push",
	"replace",
}

interface NavigationCurrentEntryChangeEvent extends Event {
	readonly navigationType: NavigationType | null;
	readonly from: NavigationHistoryEntry;
}

interface NavigationCurrentEntryChangeEventInit extends EventInit {
	navigationType?: NavigationType;
	destination: NavigationHistoryEntry;
}

declare var NavigationCurrentEntryChangeEvent: {
	prototype: NavigationCurrentEntryChangeEvent;
	new(type: "navigationcurrententrychange", options: NavigationCurrentEntryChangeEventInit);
};

interface NavigateEvent extends Event {
	readonly navigationType: NavigationType;
	readonly destination: NavigationDestination;
	readonly canIntercept: boolean;
	readonly userInitiated: boolean;
	readonly hashChange: boolean;
	readonly signal: AbortSignal;
	readonly formData: FormData | null;
	readonly downloadRequest: string | null;
	readonly info: any;
	intercept(options?: NavigationInterceptOptions): void;
	restoreScroll(): void;
}

interface NavigateEventInit extends EventInit {
	navigationType?: NavigationType;
	destination: NavigationDestination;
	canIntercept?: boolean;
	userInitiated?: boolean;
	hashChange?: boolean;
	signal: AbortSignal;
	formData?: FormData;
	downloadRequest?: string;
	info?: any;
}

declare var NavigateEvent: {
	prototype: NavigateEvent;
	new(type: "navigateevent", options: NavigateEventInit);
}

interface NavigationInterceptOptions {
	handler: NavigationInterceptHandler;
	focusReset: NavigationFocusReset;
	scrollRestoration: NavigationScrollRestoration;
}

declare enum NavigationFocusReset {
	"after-transition",
	"manual",
}

declare enum NavigationScrollRestoration {
	"after-transition",
	"manual",
}

type NavigationInterceptHandler = () => Promise<undefined>;

declare enum NavigationType {
	"reload",
	"push",
	"replace",
	"traverse",
}

interface NavigationDestination {
	readonly url: string;
	readonly key: string | null;
	readonly id: string | null;
	readonly index: number;
	readonly sameDocument: boolean;
	getState(): any;
}

declare var NavigationDestination: {
	prototype: NavigationDestination;
	new(): never;
}

interface NavigationEventMap {
	"navigate": NavigateEvent;
	"navigatesuccess": NavigateEvent;
	"navigateerror": NavigateEvent;
	"navigatecurrententrychange": NavigateEvent;
}

interface Navigation extends EventTarget {
	entries(): NavigationHistoryEntry[];
	readonly currentEntry?: NavigationHistoryEntry;
	updateCurrentEntry(options: NavigationUpdateCurrentEntryOptions): void;
	readonly transition: NavigationTransition | null;
	readonly canGoBack: boolean;
	readonly canGoForward: boolean;
	navigate(url: string, options?: NavigationNavigateOptions): NavigationResult;
	reload(options?: NavigationReloadOptions): NavigationResult;
	traverseTo(key: string, options?: NavigationOptions): NavigationResult;
	back(options?: NavigationOptions): NavigationResult;
	forward(options?: NavigationOptions): NavigationResult;
	onnavigate: ((this: Navigation, ev: NavigateEvent) => void) | null;
	onnavigatesuccess: ((this: Navigation, ev: NavigateEvent) => void) | null;
	onnavigateerror: ((this: Navigation, ev: NavigateEvent) => void) | null;
	oncurrententrychange: ((this: Navigation, ev: NavigateEvent) => void) | null;
	addEventListener<K extends keyof NavigationEventMap>(type: K, listener: (this: Navigation, ev: NavigationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

declare var navigation: Navigation;

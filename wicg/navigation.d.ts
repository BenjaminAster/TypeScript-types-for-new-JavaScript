
// Navigation API
// Specification: https://whatpr.org/html/8502/nav-history-apis.html#navigation-api
//                future link: https://html.spec.whatwg.org/multipage/nav-history-apis.html#navigation-api
// Repository: https://github.com/WICG/navigation-api

declare var navigation: Navigation;

declare class Navigation extends EventTarget {
	entries(): NavigationHistoryEntry[];
	readonly currentEntry: NavigationHistoryEntry | null;
	updateCurrentEntry(options: NavigationUpdateCurrentEntryOptions): void;
	readonly transition: NavigationTransition | null;
	readonly canGoBack: boolean;
	readonly canGoForward: boolean;
	navigate(url: string, options?: NavigationNavigateOptions): NavigationResult;
	reload(options?: NavigationReloadOptions): NavigationResult;
	traverseTo(key: string, options?: NavigationOptions): NavigationResult;
	back(options?: NavigationOptions): NavigationResult;
	forward(options?: NavigationOptions): NavigationResult;
	onnavigate: ((this: Navigation, ev: NavigateEvent) => any) | null;
	onnavigatesuccess: ((this: Navigation, ev: NavigateEvent) => any) | null;
	onnavigateerror: ((this: Navigation, ev: NavigateEvent) => any) | null;
	oncurrententrychange: ((this: Navigation, ev: NavigateEvent) => any) | null;
	addEventListener<K extends keyof NavigationEventMap>(type: K, listener: (this: Navigation, ev: NavigationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof NavigationEventMap>(type: K, listener: (this: Navigation, ev: NavigationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface NavigationEventMap {
	"navigate": NavigateEvent;
	"navigatesuccess": Event;
	"navigateerror": ErrorEvent;
	"navigatecurrententrychange": NavigationCurrentEntryChangeEvent;
}

interface NavigationUpdateCurrentEntryOptions {
	state: unknown;
}

interface NavigationOptions {
	info?: unknown;
}

interface NavigationNavigateOptions extends NavigationOptions {
	state?: unknown;
	history?: NavigationHistoryBehavior;
}

interface NavigationReloadOptions extends NavigationOptions {
	state?: unknown;
}

interface NavigationResult {
	committed: Promise<NavigationHistoryEntry>;
	finished: Promise<NavigationHistoryEntry>;
}

type NavigationHistoryBehavior = (
	| "auto"
	| "push"
	| "replace"
);

declare class NavigationCurrentEntryChangeEvent extends Event {
	constructor(type: string, options: NavigationCurrentEntryChangeEventInit);
	readonly navigationType: NavigationType | null;
	readonly from: NavigationHistoryEntry;
}

interface NavigationCurrentEntryChangeEventInit extends EventInit {
	navigationType?: NavigationType | null;
	destination: NavigationHistoryEntry;
}

declare class NavigationTransition {
	readonly navigationType: NavigationType;
	readonly from: NavigationHistoryEntry;
	readonly finished: Promise<void>;
}

declare class NavigateEvent extends Event {
	constructor(type: string, eventInit: NavigateEventInit);
	readonly navigationType: NavigationType;
	readonly destination: NavigationDestination;
	readonly canIntercept: boolean;
	readonly userInitiated: boolean;
	readonly hashChange: boolean;
	readonly signal: AbortSignal;
	readonly formData: FormData | null;
	readonly downloadRequest: string | null;
	readonly info: unknown;
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
	formData?: FormData | null;
	downloadRequest?: string | null;
	info?: unknown;
}

interface NavigationInterceptOptions {
	handler: NavigationInterceptHandler;
	focusReset: NavigationFocusReset;
	scroll: NavigationScrollBehavior;
}

type NavigationFocusReset = (
	| "after-transition"
	| "manual"
);

type NavigationScrollBehavior = (
	| "after-transition"
	| "manual"
);

type NavigationInterceptHandler = () => Promise<void>;

type NavigationType = (
	| "reload"
	| "push"
	| "replace"
	| "traverse"
);

declare class NavigationDestination {
	readonly url: string;
	readonly key: string | null;
	readonly id: string | null;
	readonly index: number;
	readonly sameDocument: boolean;
	getState(): unknown;
}

interface NavigationHistoryEntry extends EventTarget {
	readonly url: string | null;
	readonly key: string;
	readonly id: string;
	readonly index: number;
	readonly sameDocument: boolean;
	getState(): unknown;
	ondispose: ((this: NavigationHistoryEntry, ev: Event) => any) | null;
	addEventListener<K extends keyof NavigationHistoryEntryEventMap>(type: K, listener: (this: NavigationHistoryEntry, ev: NavigationHistoryEntryEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface NavigationHistoryEntryEventMap {
	"dispose": Event;
}

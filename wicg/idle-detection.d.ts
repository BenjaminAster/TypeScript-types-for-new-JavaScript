
// Idle Detection API
// Specification: https://wicg.github.io/idle-detection/
// Repository: https://github.com/WICG/idle-detection

type UserIdleState = (
	| "active"
	| "idle"
);

type ScreenIdleState = (
	| "locked"
	| "unlocked"
);

interface IdleOptions {
	threshold: number;
	signal: AbortSignal;
}

interface IdleDetectorEventMap {
	"change": Event;
}

interface IdleDetector extends EventTarget {
	readonly userState: UserIdleState;
	readonly screenState: ScreenIdleState;
	onchange: ((this: IdleDetector, ev: Event) => any) | null;
	addEventListener<K extends keyof IdleDetectorEventMap>(type: K, listener: (this: IdleDetector, ev: IdleDetectorEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof IdleDetectorEventMap>(type: K, listener: (this: IdleDetector, ev: IdleDetectorEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var IdleDetector: {
	prototype: IdleDetector;
	new(): IdleDetector;
}

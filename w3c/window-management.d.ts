
// Window Management
// Specification: https://w3c.github.io/window-management/
// Repository: https://github.com/w3c/window-management

interface ScreenEventMap {
	"change": Event;
}

interface Screen extends EventTarget {
	readonly isExtended: boolean;
	onchange: ((this: Screen, ev: Event) => any) | null;
	addEventListener<K extends keyof ScreenEventMap>(type: K, listener: (this: Screen, ev: ScreenEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof ScreenEventMap>(type: K, listener: (this: Screen, ev: ScreenEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare function getScreenDetails(): Promise<ScreenDetails>;

interface ScreenDetailsEventMap {
	"screenchange": Event;
	"currentscreenchange": Event;
}

interface ScreenDetails extends EventTarget {
	readonly screens: ReadonlyArray<ScreenDetailed>;
	readonly currentScreen: ScreenDetailed;
	onscreenchange: ((this: ScreenDetails, ev: Event) => any) | null;
	oncurrentscreenchange: ((this: ScreenDetails, ev: Event) => any) | null;
	addEventListener<K extends keyof ScreenDetailsEventMap>(type: K, listener: (this: ScreenDetails, ev: ScreenDetailsEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof ScreenDetailsEventMap>(type: K, listener: (this: ScreenDetails, ev: ScreenDetailsEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var ScreenDetails: {
	prototype: ScreenDetails;
};

interface ScreenDetailed extends Screen {
	readonly availLeft: number;
	readonly availTop: number;
	readonly left: number;
	readonly top: number;
	readonly isPrimary: boolean;
	readonly isInternal: boolean;
	readonly devicePixelRatio: number;
	readonly label: string;
}

declare var ScreenDetailed: {
	prototype: ScreenDetailed;
};

interface FullscreenOptions {
	screen?: ScreenDetailed;
}

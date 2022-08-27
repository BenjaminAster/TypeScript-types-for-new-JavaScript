
// Keyboard Lock
// Specification: https://wicg.github.io/keyboard-lock/
// Repository: https://github.com/wicg/keyboard-lock

interface Navigator {
	readonly keyboard: Keyboard;
}

declare class Keyboard extends EventTarget {
	lock(keyCodes?: string[]): Promise<void>;
	unlock(): void;
	addEventListener<K extends keyof KeyboardEventMap>(type: K, listener: (this: Keyboard, ev: KeyboardEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof KeyboardEventMap>(type: K, listener: (this: Keyboard, ev: KeyboardEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface KeyboardEventMap { }


interface Navigator {
	readonly preferences: PreferenceManager;
}

interface PreferenceManager {
	readonly colorScheme: PreferenceObject;
	readonly contrast: PreferenceObject;
	readonly reducedMotion: PreferenceObject;
	readonly reducedTransparency: PreferenceObject;
	readonly reducedData: PreferenceObject;
}

declare var PreferenceManager: {
	prototype: PreferenceManager;
};

interface PreferenceObjectEventMap {
	"change": Event;
}

interface PreferenceObject extends EventTarget {
	readonly override: string | null;
	readonly value: string;
	readonly validValues: ReadonlyArray<string>;
	clearOverride(): void;
	requestOverride(value?: string): Promise<void>;
	onchange: ((this: PreferenceObject, ev: Event) => any) | null;
	addEventListener<K extends keyof PreferenceObjectEventMap>(type: K, listener: (this: PreferenceObject, ev: PreferenceObjectEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof PreferenceObjectEventMap>(type: K, listener: (this: PreferenceObject, ev: PreferenceObjectEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var PreferenceObject: {
	prototype: PreferenceObject;
};

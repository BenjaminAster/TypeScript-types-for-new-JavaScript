
// Window Controls Overlay
// Specification: https://wicg.github.io/window-controls-overlay/
// Repository: https://github.com/WICG/window-controls-overlay

interface Navigator {
	windowControlsOverlay: WindowControlsOverlay;
}

interface WindowControlsOverlay extends EventTarget {
	readonly visible: boolean;
	getTitlebarAreaRect(): DOMRect;
	ongemometrychange: ((this: WindowControlsOverlay, ev: WindowControlsOverlayGeometryChangeEvent) => any) | null;
	addEventListener<K extends keyof WindowControlsOverlayEventMap>(type: K, listener: (this: WindowControlsOverlay, ev: WindowControlsOverlayEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof WindowControlsOverlayEventMap>(type: K, listener: (this: WindowControlsOverlay, ev: WindowControlsOverlayEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface WindowControlsOverlayEventMap {
	"geometrychange": WindowControlsOverlayGeometryChangeEvent;
}

interface WindowControlsOverlayGeometryChangeEvent extends Event {
	readonly titlebarAreaRect: DOMRect;
	readonly visible: boolean;
}

declare var WindowControlsOverlayGeometryChangeEvent: {
	prototype: WindowControlsOverlayGeometryChangeEvent;
	new(type: string, eventInitTict: WindowControlsOverlayGeometryChangeEventInit);
};

interface WindowControlsOverlayGeometryChangeEventInit extends EventInit {
	titlebarAreaRect: DOMRect;
	visible?: boolean;
}


// Window Controls Overlay
// specification: https://wicg.github.io/window-controls-overlay/
// repository: https://github.com/WICG/window-controls-overlay
// MDN documentation: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/windowControlsOverlay

interface WindowControlsOverlayGeometryChangeEvent extends Event {
	readonly titlebarAreaRect: DOMRect;
	readonly visible: boolean;
}

declare var WindowControlsOverlayGeometryChangeEvent: {
	prototype: WindowControlsOverlayGeometryChangeEvent;
	new(type: "geometrychange", options: {
		titlebarAreaRect: DOMRect;
		visible: boolean;
	});
};

interface WindowControlsOverlayEventMap {
	"geometrychange": WindowControlsOverlayGeometryChangeEvent;
}

interface WindowControlsOverlay extends EventTarget {
	readonly visible: boolean;
	getTitlebarAreaRect(): DOMRect;
	addEventListener<K extends keyof WindowControlsOverlayEventMap>(type: K, listener: (this: WindowControlsOverlay, ev: WindowControlsOverlayEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}

interface Navigator {
	windowControlsOverlay: WindowControlsOverlay;
}

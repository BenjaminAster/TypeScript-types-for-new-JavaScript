
// Keyboard Map
// Specification: https://wicg.github.io/keyboard-map/
// Repository: https://github.com/wicg/keyboard-map

interface KeyboardLayoutMap extends Map<string, string> { }

declare var KeyboardLayoutMap: {
	prototype: KeyboardLayoutMap;
};

interface Keyboard {
	getLayoutMap(): Promise<KeyboardLayoutMap>;
	onlayoutchange: ((this: Keyboard, ev: Event) => any) | null;
}

interface KeyboardEventMap {
	"layoutchange": Event;
}

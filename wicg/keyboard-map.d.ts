
// Keyboard Map
// Specification: https://wicg.github.io/keyboard-map/
// Repository: https://github.com/wicg/keyboard-map

declare class KeyboardLayoutMap extends Map<string, string> { }

interface Keyboard {
	getLayoutMap(): Promise<KeyboardLayoutMap>;
	onlayoutchange: ((this: Keyboard, ev: Event) => any) | null;
}

interface KeyboardEventMap {
	"layoutchange": Event;
}

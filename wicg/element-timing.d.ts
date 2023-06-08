
// Element Timing API
// Specification: https://wicg.github.io/element-timing/
// Repository: https://github.com/WICG/element-timing

interface PerformanceElementTiming extends PerformanceEntry {
	readonly renderTime: DOMHighResTimeStamp;
	readonly loadTime: DOMHighResTimeStamp;
	readonly intersectionRect: DOMRectReadOnly;
	readonly identifier: string;
	readonly naturalWidth: number;
	readonly naturalHeight: number;
	readonly id: string;
	readonly element: Element;
	readonly url: string;
	toJSON(): any;
}

declare var PerformanceElementTiming: {
	prototype: PerformanceElementTiming;
}

interface Element {
	elementTiming: string;
}


// Layout Instability API
// Specificaton: https://wicg.github.io/layout-instability/
// Repository: https://github.com/WICG/layout-instability

interface LayoutShift extends PerformanceEntry {
	readonly value: number;
	readonly hadRecentInput: boolean;
	readonly lastInputTime: DOMHighResTimeStamp;
	readonly sources: ReadonlyArray<LayoutShiftAttribution>;
	toJSON(): any;
}

declare var LayoutShift: {
	prototype: LayoutShift;
}

interface LayoutShiftAttribution {
	readonly node: Node | null;
	readonly previousRect: DOMRectReadOnly;
	readonly currentRect: DOMRectReadOnly;
}

declare var LayoutShiftAttribution: {
	prototype: LayoutShiftAttribution;
}

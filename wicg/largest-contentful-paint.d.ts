
// Largest Contentful Paint
// Specification: https://wicg.github.io/largest-contentful-paint/
// Repository: https://github.com/WICG/largest-contentful-paint

interface LargestContentfulPaint extends PerformanceEntry {
	readonly renderTime: DOMHighResTimeStamp;
	readonly loadTime: DOMHighResTimeStamp;
	readonly size: number;
	readonly id: string;
	readonly url: string;
	readonly element: Element;
	toJSON(): any;
}

declare var LargestContentfulPaint: {
	prototype: LargestContentfulPaint;
}

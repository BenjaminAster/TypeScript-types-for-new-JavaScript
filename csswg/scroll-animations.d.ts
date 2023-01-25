
// Scroll-linked Animations
// Specification: https://w3c.github.io/csswg-drafts/scroll-animations-1/
// Repository: https://github.com/w3c/csswg-drafts/blob/main/scroll-animations-1

/// <reference path="../css-houdini/typed-om.d.ts" />

type ScrollAxis = (
	| "block"
	| "inline"
	| "horizontal"
	| "vertical"
);

interface ScrollTimelineOptions {
	source?: Element;
	axis?: ScrollAxis;
}

declare class ScrollTimeline extends AnimationTimeline {
	constructor(options?: ScrollTimelineOptions);
	readonly source?: Element | null;
	readonly axis: ScrollAxis;
}

interface ViewTimelineOptions {
	subject?: Element;
	axis?: ScrollAxis;
}

declare class ViewTimeline extends ScrollTimeline {
	constructor(options?: ViewTimelineOptions);
	readonly subject: Element;
	readonly startOffset: CSSNumericValue;
	readonly endOffset: CSSNumericValue;
}

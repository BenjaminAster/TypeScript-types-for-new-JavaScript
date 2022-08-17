
// Scroll-linked Animations
// Specification: https://drafts.csswg.org/scroll-animations-1/
// Repository: https://github.com/w3c/csswg-drafts/blob/main/scroll-animations-1

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

interface ScrollTimeline extends AnimationTimeline {
	readonly source?: Element | null;
	readonly axis: ScrollAxis;
}

declare var ScrollTimeline: {
	prototype: ScrollTimeline;
	new(options?: ScrollTimelineOptions): ScrollTimeline;
};

interface ViewTimelineOptions {
	subject?: Element;
	axis?: ScrollAxis;
}

interface ViewTimeline extends ScrollTimeline {
	readonly subject: Element;
	readonly startOffset: CSSNumericValue;
	readonly endOffset: CSSNumericValue;
}

declare var ViewTimeline: {
	prototype: ViewTimeline;
	new(options?: ViewTimelineOptions): ViewTimeline;
};


// CSS Custom Highlight API
// Specification: https://w3c.github.io/csswg-drafts/css-highlight-api-1/
// Repository: https://github.com/w3c/csswg-drafts/tree/main/css-highlight-api-1

type HighlightType = (
	| "highlight"
	| "spelling-error"
	| "grammar-error"
);

declare class Highlight extends Set<AbstractRange> {
	constructor(initialRanges: AbstractRange);
	priority: number;
	type: HighlightType;
}

declare namespace CSS {
	var highlights: HighlightRegistry;
}

declare class HighlightRegistry extends Map<string, Highlight> { }

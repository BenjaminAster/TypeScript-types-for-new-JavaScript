
// CSS Custom Highlight API
// Specification: https://drafts.csswg.org/css-highlight-api-1/
// Repository: https://github.com/w3c/csswg-drafts/tree/main/css-highlight-api-1

type HighlightType = (
	| "highlight"
	| "spelling-error"
	| "grammar-error"
);

interface Highlight extends Set<AbstractRange> {
	priority: number;
	type: HighlightType;
}

declare var Highlight: {
	prototype: Highlight;
	new(initialRanges: AbstractRange): Highlight;
};

declare namespace CSS {
	var highlights: HighlightRegistry;
}

interface HighlightRegistry extends Map<string, Highlight> { }

declare var HighlightRegistry: {
	prototype: HighlightRegistry;
};

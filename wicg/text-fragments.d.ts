
// Text Fragments
// Main Specification: https://wicg.github.io/scroll-to-text-fragment/
// Explainer with added functionality: https://github.com/WICG/scroll-to-text-fragment/blob/main/fragment-directive-api.md
// Repository: https://github.com/WICG/scroll-to-text-fragment

declare class FragmentDirective {
	readonly items: ReadonlyArray<Directive>;
	createSelectorDirective(selection: Range | Selection): Promise<SelectorDirective>;
}

interface Document extends Node, DocumentOrShadowRoot, FontFaceSource, GlobalEventHandlers, NonElementParentNode, ParentNode, XPathEvaluatorBase {
	fragmentDirective: FragmentDirective;
}

type DirectiveType = (
	| "text"
);

declare class Directive {
	type: DirectiveType;
	toString(): string;
}

declare class SelectorDirective extends Directive {
	getMatchingRange(): Promise<Range>;
}

interface TextDirectiveOptions {
	prefix: string;
	textStart: string;
	textEnd: string;
	suffix: string;
}

declare class TextDirective extends SelectorDirective {
	constructor(options: TextDirectiveOptions);
	prefix: string;
	textStart: string;
	textEnd: string;
	suffix: string;
}

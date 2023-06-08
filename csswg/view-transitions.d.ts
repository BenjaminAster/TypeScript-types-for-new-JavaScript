
// CSS View Transitions (formerly called "Shared Element Transitions")
// Specification: https://drafts.csswg.org/css-view-transitions-1/
// Repositories: https://github.com/w3c/csswg-drafts/tree/main/css-view-transitions-1, https://github.com/WICG/view-transitions
// Explainer: https://github.com/WICG/view-transitions/blob/main/explainer.md

interface Document {
	startViewTransition(updateCallback?: UpdateCallback): ViewTransition;
}

interface UpdateCallback {
	(): Promise<any>;
}

declare class ViewTransition {
	skipTranstion(): void;
	readonly finished: Promise<undefined>;
	readonly ready: Promise<undefined>;
	readonly updateCallbackDone: Promise<undefined>;
}

interface CSSStyleDeclaration {
	viewTransitionName: string;
}

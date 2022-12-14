
// CSS View Transitions (formerly called "Shared Element Transitions")
// Specification: https://w3c.github.io/csswg-drafts/css-view-transitions-1/
// Repositories: https://github.com/w3c/csswg-drafts/tree/main/css-view-transitions-1, https://github.com/WICG/view-transitions
// Explainer: https://github.com/WICG/view-transitions/blob/main/explainer.md

interface Document {
	startViewTransition(callback?: () => Promise<any>): ViewTransition;
}

declare class ViewTransition {
	skipTranstion(): void;
	readonly finished: Promise<undefined>;
	readonly ready: Promise<undefined>;
	readonly domUpdated: Promise<undefined>;
}

interface CSSStyleDeclaration {
	viewTransitionName: string;
}

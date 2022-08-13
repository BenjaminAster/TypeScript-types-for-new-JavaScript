
// Shared Element Transitions
// Specification: Not yet existing (will be at https://wicg.github.io/shared-element-transitions)
// Explainer: https://github.com/WICG/shared-element-transitions/blob/main/explainer.md
// Repository: https://github.com/WICG/shared-element-transitions

interface Document {
	createDocumentTransition(): DocumentTransition;
}

interface DocumentTransition {
	readonly finished: Promise<undefined> | undefined;
	abandon(): void;
	start(callback: () => any): Promise<void>;
	prepare(callback: () => any): Promise<void>;
}

declare var DocumentTransition: {
	prototype: DocumentTransition;
	new(): never;
};

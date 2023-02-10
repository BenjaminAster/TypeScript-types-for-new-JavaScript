
// CSSOM View
// Specification: https://w3c.github.io/csswg-drafts/cssom-view/
// Repository: https://github.com/w3c/csswg-drafts/tree/main/cssom-view-1

interface Document {
	caretPositionFromPoint(x: number, y: number): CaretPosition | null;
}

declare class CaretPosition {
	readonly offsetNode: Node;
	readonly offset: number;
	getClientRect(): DOMRect | null;
}

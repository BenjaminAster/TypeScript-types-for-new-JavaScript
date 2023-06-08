
// CSSOM View
// Specification: https://drafts.csswg.org/cssom-view-1/
// Repository: https://github.com/w3c/csswg-drafts/tree/main/cssom-view-1

interface Document {
	caretPositionFromPoint(x: number, y: number): CaretPosition | null;
}

declare class CaretPosition {
	readonly offsetNode: Node;
	readonly offset: number;
	getClientRect(): DOMRect | null;
}

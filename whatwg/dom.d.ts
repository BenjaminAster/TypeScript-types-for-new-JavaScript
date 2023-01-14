
// DOM
// Specification: https://dom.spec.whatwg.org/
// Repository: https://github.com/whatwg/dom

// Nodes
// https://dom.spec.whatwg.org/#nodes

interface Node extends EventTarget {
	cloneNode(deep?: boolean): this;
}

interface Document extends Node, DocumentAndElementEventHandlers, DocumentOrShadowRoot, FontFaceSource, GlobalEventHandlers, NonElementParentNode, ParentNode, XPathEvaluatorBase {
	createElementNS(namespaceURI: "http://www.w3.org/1998/Math/MathML", qualifiedName: string): MathMLElement;
}

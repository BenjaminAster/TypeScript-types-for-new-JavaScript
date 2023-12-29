
// CSS Typed OM Level 1
// Specification: https://drafts.css-houdini.org/css-typed-om-1/
// Repository: https://github.com/w3c/css-houdini-drafts/tree/main/css-typed-om

// This file only defines the CSS.in() function for completeness, which is left out in the lib.dom.d.ts definitions
// https://drafts.css-houdini.org/css-typed-om/#dom-css-in

declare namespace CSS {
	function _in(value: number): CSSUnitValue;
	export { _in as in };
}


// CSS Properties and Values API
// Specification: https://drafts.css-houdini.org/css-properties-values-api-1/
// Repository: https://github.com/w3c/css-houdini-drafts/tree/main/css-properties-values-api

interface PropertyDefinition {
	name: string;
	syntax?: string;
	inherits: boolean;
	initialValue?: string;
}

declare namespace CSS {
	function registerProperty(definition: PropertyDefinition): void;
}

interface CSSPropertyRule extends CSSRule {
	readonly name: string;
	readonly syntax: string;
	readonly inherits: boolean;
	readonly initialValue?: string | null;
}

declare var CSSPropertyRule: {
	prototype: CSSPropertyRule;
};

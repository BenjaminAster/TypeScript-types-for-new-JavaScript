
// CSS Cascading and Inheritance
// Specification: https://drafts.csswg.org/css-cascade-5/
// Repository: https://github.com/w3c/csswg-drafts/blob/main/css-cascade-5

interface CSSLayerBlockRule extends CSSGroupingRule {
	readonly name: string;
}

declare var CSSLayerBlockRule: {
	prototype: CSSLayerBlockRule;
};

interface CSSLayerStatementRule extends CSSRule {
	readonly nameList: ReadonlyArray<string>;
}

declare var CSSLayerStatementRule: {
	prototype: CSSLayerStatementRule;
};

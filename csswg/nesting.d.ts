
// CSS Nesting Module
// Specification: https://drafts.csswg.org/css-nesting-1/
// Repository: https://github.com/w3c/csswg-drafts/tree/main/css-nesting-1

interface CSSStyleRule {
	readonly cssRules: CSSRuleList;
	insertRule(rule: string, index?: number): number;
	deleteRule(index: number): void;
}

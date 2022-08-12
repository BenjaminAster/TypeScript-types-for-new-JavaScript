
// Sanitizer API
// specification: https://wicg.github.io/sanitizer-api/
// repository: https://github.com/WICG/sanitizer-api
// MDN documentation: https://developer.mozilla.org/en-US/docs/Web/API/HTML_Sanitizer_API

declare type AttributeMatchList = Record<string, string[]>;

interface SanitizerConfig {
	allowElements?: string[];
	blockElements?: string[];
	dropElements?: string[];
	allowAttributes?: AttributeMatchList;
	dropAttributes?: AttributeMatchList;
	allowCustomElements?: boolean;
	allowComments?: boolean;
}

interface Sanitizer {
	sanitize(input: DocumentFragment | Document): DocumentFragment;
	sanitizeFor(element: string, input: string): Element;
	getConfiguration(): SanitizerConfig;
	getDefaultConfiguration(): SanitizerConfig;
}

declare var Sanitizer: {
	prototype: Sanitizer;
	new(config?: SanitizerConfig): Sanitizer;
};

interface Element {
	setHTML(input: string, options?: {
		sanitizer: Sanitizer;
	}): void;
}


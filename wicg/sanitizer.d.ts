
// Sanitizer API
// Specification: https://wicg.github.io/sanitizer-api/
// Repository: https://github.com/WICG/sanitizer-api

interface Sanitizer {
	sanitize(input: DocumentFragment | Document): DocumentFragment;
	sanitizeFor(element: string, input: string): Element | null;
	getConfiguration(): SanitizerConfig;
	getDefaultConfiguration(): SanitizerConfig;
}

declare var Sanitizer: {
	prototype: Sanitizer;
	new(config?: SanitizerConfig): Sanitizer;
};

interface SetHTMLOptions {
	sanitizer: Sanitizer;
}

interface Element {
	setHTML(input: string, options?: SetHTMLOptions): void;
}

interface SanitizerConfig {
	allowElements?: string[];
	blockElements?: string[];
	dropElements?: string[];
	allowAttributes?: AttributeMatchList;
	dropAttributes?: AttributeMatchList;
	allowCustomElements?: boolean;
	allowComments?: boolean;
}

declare type AttributeMatchList = Record<string, string[]>;


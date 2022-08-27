
// Sanitizer API
// Specification: https://wicg.github.io/sanitizer-api/
// Repository: https://github.com/WICG/sanitizer-api

declare class Sanitizer {
	constructor(config?: SanitizerConfig);
	sanitize(input: DocumentFragment | Document): DocumentFragment;
	sanitizeFor(element: string, input: string): Element | null;
	getConfiguration(): SanitizerConfig;
	getDefaultConfiguration(): SanitizerConfig;
}

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



// HTML
// Specification: https://html.spec.whatwg.org/multipage/
// Repository: https://github.com/whatwg/html

// User Interaction
// https://html.spec.whatwg.org/multipage/interaction.html

interface FocusOptions {
	focusVisible?: boolean;
}

// Web application APIs
// https://html.spec.whatwg.org/multipage/webappapis.html

interface ImportMeta {
	resolve(url: string): string;
}

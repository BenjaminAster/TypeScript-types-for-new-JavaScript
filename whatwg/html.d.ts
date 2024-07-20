
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
	resolve(specifier: string): string;
}

// Not yet standardized timezonechange event
// https://github.com/whatwg/html/pull/3047, https://docs.google.com/document/d/1gu-HAVIjVxfPQEE0uQg9Y4tJwYl33Y54DKTA9hfDyic/preview

interface WindowEventHandlersEventMap {
	"timezonechange": Event;
}

interface WindowEventHandlers {
	ontimezonechange: ((this: WindowEventHandlers, ev: Event) => any) | null;
}

declare var ontimezonechange: ((this: typeof globalThis, ev: Event) => any) | null;

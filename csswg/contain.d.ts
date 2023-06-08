
// CSS Containment
// Specification: https://drafts.csswg.org/css-contain-2/
// Repository: https://github.com/w3c/csswg-drafts/tree/main/css-contain-2

declare class ContentVisibilityAutoStateChangedEvent extends Event {
	constructor(type: string, eventInitDict?: ContentVisibilityAutoStateChangedEventInit);
	readonly skipped: boolean;
}

declare var oncontentvisibilityautostatechanged: ContentVisibilityAutoStateChangedEvent | null;

interface GlobalEventHandlersEventMap {
	"contentvisibilityautostatechanged": ContentVisibilityAutoStateChangedEvent;
}

interface ContentVisibilityAutoStateChangedEventInit extends EventInit {
	skipped?: boolean;
}


// CSS Containment
// Specification (Level 2): https://drafts.csswg.org/css-contain-2/
// Specification (Level 3): https://drafts.csswg.org/css-contain-3/
// Repository (Level 2): https://github.com/w3c/csswg-drafts/tree/main/css-contain-2
// Repository (Level 3): https://github.com/w3c/csswg-drafts/tree/main/css-contain-2

// Level 2:
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

// Level 3:
declare class CSSContainerRule extends CSSConditionRule { }

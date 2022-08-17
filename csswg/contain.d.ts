
// CSS Containment
// Specification (Level 2): https://drafts.csswg.org/css-contain-2/
// Specification (Level 3): https://drafts.csswg.org/css-contain-3/
// Repository (Level 2): https://github.com/w3c/csswg-drafts/tree/main/css-contain-2
// Repository (Level 3): https://github.com/w3c/csswg-drafts/tree/main/css-contain-2

// Level 2:
interface ContentVisibilityAutoStateChangedEvent extends Event {
	readonly skipped: boolean;
}

declare var ContentVisibilityAutoStateChangedEvent: {
	prototype: ContentVisibilityAutoStateChangedEvent;
	new(type: string, eventInitDict?: ContentVisibilityAutoStateChangedEventInit);
};

declare var oncontentvisibilityautostatechanged: ContentVisibilityAutoStateChangedEvent | null;

interface GlobalEventHandlersEventMap {
	"contentvisibilityautostatechanged": ContentVisibilityAutoStateChangedEvent;
}

interface ContentVisibilityAutoStateChangedEventInit extends EventInit {
	skipped?: boolean;
}

// Level 3:
interface CSSContainerRule extends CSSConditionRule { }

declare var CSSContainerRule: {
	prototype: CSSContainerRule;
};

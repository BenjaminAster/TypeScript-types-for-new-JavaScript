
// Fenced frame
// Specification: https://wicg.github.io/fenced-frame/
// Repository: https://github.com/WICG/fenced-frame

declare class HTMLFencedFrameElement extends HTMLElement {
	constructor();
	config: FencedFrameConfig;
	width: string;
	height: string;
}

type OpaqueProperty = (
	| "opaque"
);

type FencedFrameConfigSize = number | OpaqueProperty;
type FencedFrameConfigURL = string | OpaqueProperty;

declare class FencedFrameConfig {
	constructor(url: string);
	url: FencedFrameConfigURL | null;
	width: FencedFrameConfigSize | null;
	height: FencedFrameConfigSize | null;
}

type FenceReportingDestination = (
	| "buyer"
	| "seller"
	| "component-seller"
	| "shared-storage-select-url"
);

interface FenceEvent {
	eventType: string;
	eventData: string;
	destination: string[];
}

declare class Fence {
	reportEvent(event: FenceEvent): void;
}

declare var fence: Fence | null;

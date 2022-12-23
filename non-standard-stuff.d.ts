
// Various non-standard features that are not part of any specification

// Chromium:

declare var chrome: {
	app: any,
	csi(): {
		onloadT: DOMHighResTimeStamp,
		pageT: DOMHighResTimeStamp,
		startE: DOMHighResTimeStamp,
		tran: number,
	},
	loadTimes(): {
		commitLoadTime: DOMHighResTimeStamp,
		connectionInfo: string,
		finishDocumentLoadTime: DOMHighResTimeStamp,
		finishLoadTime: DOMHighResTimeStamp,
		firstPaintAfterLoadTime: DOMHighResTimeStamp,
		firstPaintTime: DOMHighResTimeStamp,
		navigationType: string,
		npnNegotiatedProtocol: string,
		requestTime: DOMHighResTimeStamp,
		startLoadTime: DOMHighResTimeStamp,
		wasAlternateProtocolAvailable: boolean,
		wasFetchedViaSpdy: boolean,
		wasNpnNegotiated: boolean,
	},
	appPinningPrivate: { // Edge only
		getPins(): any,
		pinPage(attestation: string, url?: string, title?: string, callback?: Function): any,
	},
};

// Brave:

declare class Brave {
	isBrave(): Promise<true>;
}

interface Navigator {
	readonly brave: Brave;
}

// Firefox:

declare class CSSMozDocumentRule {}

// Chromium & WebKit:

interface HTMLElement {
	scrollIntoViewIfNeeded(centerIfNeeded: boolean): void;
}

declare function webkitRequestAnimationFrame(callback: FrameRequestCallback): number;
declare function webkitCancelAnimationFrame(handle: number): void;

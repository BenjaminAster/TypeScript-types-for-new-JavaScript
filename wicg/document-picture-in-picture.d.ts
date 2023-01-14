
// Document Picture-in-Picture
// Specification: https://wicg.github.io/document-picture-in-picture/
// Repository: https://github.com/WICG/document-picture-in-picture

declare var documentPictureInPicture: DocumentPictureInPicture;

declare class DocumentPictureInPicture extends EventTarget {
	requestWindow(options?: DocumentPictureInPictureOptions): Promise<Window>;
	readonly window: Window;
	onenter: ((this: DocumentPictureInPicture, ev: DocumentPictureInPictureEvent) => any) | null;
	addEventListener<K extends keyof DocumentPictureInPictureEventMap>(type: K, listener: (this: DocumentPictureInPicture, ev: DocumentPictureInPictureEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof DocumentPictureInPictureEventMap>(type: K, listener: (this: DocumentPictureInPicture, ev: DocumentPictureInPictureEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface DocumentPictureInPictureEventMap {
	"center": DocumentPictureInPictureEvent;
}

interface DocumentPictureInPictureOptions {
	width?: number;
	height?: number;
	initialAspectRatio?: number;
	lockAspectRatio?: boolean;
	copyStyleSheets?: boolean;
}

declare class DocumentPictureInPictureEvent {
	constructor(type: string, eventInitDict: DocumentPictureInPictureEventInit);
	readonly window: Window;
}

interface DocumentPictureInPictureEventInit {
	window: Window;
}

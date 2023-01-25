
// Portals
// Specification: https://wicg.github.io/portals/
// Repository: https://github.com/WICG/portals

declare class HTMLPortalElement extends HTMLElement {
	constructor();
	src: string;
	referrerPolicy: string;
	activate(options?: PortalActivateOptions): Promise<undefined>;
	postMessage(message: any, options?: StructuredSerializeOptions): undefined;
	onmessage: ((this: HTMLPortalElement, ev: MessageEvent) => any) | null;
	onmessageerror: ((this: HTMLPortalElement, ev: MessageEvent) => any) | null;
	addEventListener<K extends keyof HTMLPortalElementEventMap>(type: K, listener: (this: HTMLPortalElement, ev: HTMLPortalElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof HTMLPortalElementEventMap>(type: K, listener: (this: HTMLPortalElement, ev: HTMLPortalElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLPortalElementEventMap {
	"message": MessageEvent;
	"messageerror": MessageEvent
}

interface PortalActivateOptions extends StructuredSerializeOptions {
	data?: any;
}

interface Window {
	readonly portalHost: PortalHost;
}

declare class PortalHost extends EventTarget {
	postMessage(message: any, options?: StructuredSerializeOptions): void;
	onmessage: ((this: PortalHost, ev: MessageEvent) => any) | null;
	onmessageerror: ((this: PortalHost, ev: MessageEvent) => any) | null;
	addEventListener<K extends keyof PortalHostEventMap>(type: K, listener: (this: PortalHost, ev: PortalHostEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof PortalHostEventMap>(type: K, listener: (this: PortalHost, ev: PortalHostEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface PortalHostEventMap {
	"message": MessageEvent;
	"messageerror": MessageEvent;
}

declare class PortalActivateEvent extends Event {
	constructor(type: string, eventInitDict?: PortalActivateEventInit);
	readonly data: any;
	adoptPredecessor(): HTMLPortalElement;
}

interface PortalActivateEventInit extends EventInit {
	data?: any;
}

interface WindowEventHandlers {
	onportalactivate: ((this: WindowEventHandlers, ev: PortalActivateEvent) => any) | null;
}

interface WindowEventMap {
	"portalactivate": PortalActivateEvent
}

interface HTMLElementTagNameMap {
	"portal": HTMLPortalElement;
}


// Selectmenu Element
// Explainer: https://open-ui.org/components/selectmenu/
// Repository: https://github.com/openui/open-ui/blob/main/site/src/pages/components/selectmenu.mdx

// See also: https://github.com/chromium/chromium/blob/main/third_party/blink/renderer/core/html/forms/html_select_menu_element.idl

interface HTMLSelectMenuElement extends HTMLElement {
	readonly open: boolean;
	readonly selectedOption: HTMLOptionElement | null;
	value: string;
	disabled: boolean;
	form: HTMLFormElement | null;
	name: string;
	readonly type: string;
	required: boolean;
	readonly willValidate: boolean;
	readonly validity: ValidityState;
	readonly validationMessage: string;
	checkValidity(): boolean;
	reportValidity(): boolean;
	setCustomValidity(error: string): void;
	readonly labels: NodeList;
	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSelectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSelectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

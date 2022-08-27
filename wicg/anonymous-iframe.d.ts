
// Anonymous iframe
// Specification: https://wicg.github.io/anonymous-iframe/
// Repository: https://github.com/WICG/anonymous-iframe

interface HTMLIFrameElement extends HTMLElement {
	anonymous: boolean;
}

declare var anonymouslyFramed: boolean;

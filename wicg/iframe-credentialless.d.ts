
// Iframe credentialless
// Specification: https://wicg.github.io/anonymous-iframe/
// Repository: https://github.com/WICG/anonymous-iframe

interface HTMLIFrameElement extends HTMLElement {
	credentialless: boolean;
}

declare var credentialless: boolean;

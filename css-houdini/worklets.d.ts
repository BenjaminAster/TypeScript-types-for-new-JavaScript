
declare namespace CSS {
	// CSS Animation Worklet API
	// Specification: https://drafts.css-houdini.org/css-animation-worklet-1/
	// Repository: https://github.com/w3c/css-houdini-drafts/tree/main/css-animation-worklet-1
	// see ./animation-worklet.d.ts
	var animationWorklet: Worklet;
	
	// CSS Layout API
	// Specification: https://drafts.css-houdini.org/css-layout-api-1/
	// Repository: https://github.com/w3c/css-houdini-drafts/tree/main/css-layout-api
	// see ./layout-worklet.d.ts
	var layoutWorklet: Worklet;

	// CSS Painting API
	// Specification: https://drafts.css-houdini.org/css-paint-api-1/
	// Repository: https://github.com/w3c/css-houdini-drafts/tree/main/css-paint-api
	// see ./paint-worklet.d.ts
	var paintWorklet: Worklet;
}


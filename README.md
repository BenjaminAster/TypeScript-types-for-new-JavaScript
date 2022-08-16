
# TypeScript Types for new JavaScript

This repository contains TypeScript type definitions for new JavaScript stuff that isn't yet in TypeScript's standard type definitions. Some specifications have only partially been integrated into TypeScript's standard type definitions, in which case this repository contains only the parts of the specifications that aren't there (yet).

NPM: [new-javascript](https://www.npmjs.com/package/new-javascript)

GitHub: [BenjaminAster/TypeScript-types-for-new-JavaScript](https://github.com/BenjaminAster/TypeScript-types-for-new-JavaScript)

---

Install using npm:
```shell
npm i -D new-javscript
```
Reference the type definitions directly in your TypeScript/JavaScript files...
```javascript
/// <reference types="new-javascript" />
```
...or include them in your `tsconfig.json` or `jsconfig.json`:
```jsonc
{
	"compilerOptions": {
		"types": ["new-javascript"],
	},
}
```

----

These type definitions include the following specifications (grouped by venue):

 -  [WICG](https://wicg.io):
	 - [File System Access API](https://wicg.github.io/file-system-access/)
	 - [Local Font Access API](https://wicg.github.io/local-font-access/)
	 - [Manifest Incubations](https://wicg.github.io/manifest-incubations) (this includes BeforeInstallPromptEvent and File Handling)
	 - [Navigation API](https://wicg.github.io/navigation-api/)
	 - [Sanitizer API](https://wicg.github.io/sanitizer-api/)
	 - [Shape Detection API](https://wicg.github.io/shape-detection-api/)
	 - [Shared Element Transitions](https://github.com/WICG/shared-element-transitions/blob/main/explainer.md)
	 - [User-Agent Client Hints](https://wicg.github.io/ua-client-hints/)
	 - [URLPattern API](https://wicg.github.io/urlpattern/)
	 - [Window Controls Overlay](https://wicg.github.io/window-controls-overlay/)
 - [W3C](https://www.w3.org/TR/):
	 - [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
 - [WHATWG](https://spec.whatwg.org):
	 - [File System](https://fs.spec.whatwg.org)
 - [TC39](https://tc39.es):
	 - [Array Grouping](https://tc39.es/proposal-array-grouping)

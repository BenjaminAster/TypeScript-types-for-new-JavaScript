
# TypeScript Types for new JavaScript

This repository contains TypeScript type definitions for a lot of new JavaScript stuff that isn't yet in TypeScript's standard type definitions (see below for [the complete list](#specifications-in-this-repository)). The ranges from the [File System Access API](https://wicg.github.io/file-system-access/) over [Array Grouping](https://tc39.es/proposal-array-grouping) to [Shape Detection](https://wicg.github.io/shape-detection-api/) or [Shared Element Transitions](https://github.com/WICG/shared-element-transitions/blob/main/explainer.md). Some specifications have only partially been integrated into TypeScript's standard type definitions, in which case this repository contains only the parts of the specifications that aren't there (yet). For some specifications I have used [WebIDL2TS](https://github.com/giniedp/webidl2ts), a tool that automatically converts [WebIDL](https://webidl.spec.whatwg.org/) to TypeScript type definitions, and manually edited the stuff where it didn't generate the desired result.

---

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

## Specifications in this repository

The type definitions in this repository include the following specifications (grouped by venue):

 -  [WICG](https://wicg.io):
	 - [Background Fetch](https://wicg.github.io/background-fetch/)
	 - [Background Sync](https://wicg.github.io/background-sync/spec/)
	 - [File System Access API](https://wicg.github.io/file-system-access/)
	 - [Handwriting Recognition API](https://wicg.github.io/handwriting-recognition/)
	 - [Local Font Access API](https://wicg.github.io/local-font-access/)
	 - [Manifest Incubations](https://wicg.github.io/manifest-incubations) (this includes the [BeforeInstallPromptEvent](https://wicg.github.io/manifest-incubations/#beforeinstallpromptevent-interface) and [File Handling](https://github.com/WICG/file-handling/blob/main/explainer.md))
	 - [Navigation API](https://wicg.github.io/navigation-api/)
	 - [Periodic Background Sync](https://wicg.github.io/periodic-background-sync/)
	 - [Sanitizer API](https://wicg.github.io/sanitizer-api/)
	 - [Shape Detection API](https://wicg.github.io/shape-detection-api/)
	 - [Shared Element Transitions](https://github.com/WICG/shared-element-transitions/blob/main/explainer.md)
	 - [User-Agent Client Hints](https://wicg.github.io/ua-client-hints/)
	 - [URLPattern API](https://wicg.github.io/urlpattern/)
	 - [Window Controls Overlay](https://wicg.github.io/window-controls-overlay/)
 - [W3C](https://www.w3.org/TR/):
	 - [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
	 - [Image Resource](https://w3c.github.io/image-resource/)
 - [WHATWG](https://spec.whatwg.org):
	 - [File System](https://fs.spec.whatwg.org)
 - [TC39](https://tc39.es):
	 - [Array Grouping](https://tc39.es/proposal-array-grouping)

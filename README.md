
# TypeScript types for new JavaScript

This repository contains TypeScript type declarations for a lot of new JavaScript stuff that isn't yet in TypeScript's standard type declarations (see below for [the complete list](#specifications-in-this-repository)). These range from the [File System Access API](https://wicg.github.io/file-system-access/) over [Shared Element Transitions](https://github.com/WICG/shared-element-transitions/blob/main/explainer.md) to [Houdini CSS Typed OM](https://drafts.css-houdini.org/css-typed-om/) or [Handwriting Recognition](https://wicg.github.io/handwriting-recognition/). Some specifications have only partially been integrated into TypeScript's standard type declarations, in which case this repository contains only the parts of the specifications that aren't there (yet). For most specifications I have used [WebIDL2TS](https://github.com/giniedp/webidl2ts), a tool that automatically converts [WebIDL](https://webidl.spec.whatwg.org/) to TypeScript type declarations, and manually edited the stuff where it didn't generate the desired result.

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

---

## Specifications in this repository

The type declarations in this repository include the following specifications (grouped by venue):

 -  [WICG](https://wicg.io):
	 - [Anonymous iframe](https://wicg.github.io/anonymous-iframe/)
	 - [Background Fetch](https://wicg.github.io/background-fetch/)
	 - [Background Sync](https://wicg.github.io/background-sync/spec/)
	 - [Compression Streams](https://wicg.github.io/compression-streams/)
	 - [Compute Pressure](https://wicg.github.io/compute-pressure/)
	 - [EyeDropper API](https://wicg.github.io/eyedropper-api/)
	 - [Fenced frame](https://wicg.github.io/fenced-frame/)
	 - [File System Access API](https://wicg.github.io/file-system-access/)
	 - [Handwriting Recognition API](https://wicg.github.io/handwriting-recognition/)
	 - [isInputPending](https://wicg.github.io/is-input-pending/)
	 - [Keyboard Lock](https://wicg.github.io/keyboard-lock/)
	 - [Keyboard Map](https://wicg.github.io/keyboard-map/)
	 - [Local Font Access API](https://wicg.github.io/local-font-access/)
	 - [Manifest Incubations](https://wicg.github.io/manifest-incubations/) (this includes the [BeforeInstallPromptEvent](https://wicg.github.io/manifest-incubations/#beforeinstallpromptevent-interface) and [File Handling](https://github.com/WICG/file-handling/blob/main/explainer.md))
	 - [Navigation API](https://wicg.github.io/navigation-api/)
	 - [Network Information API](https://wicg.github.io/netinfo/)
	 - [Periodic Background Sync](https://wicg.github.io/periodic-background-sync/)
	 - [Portals](https://wicg.github.io/portals/)
	 - [Sanitizer API](https://wicg.github.io/sanitizer-api/)
	 - [Shape Detection API](https://wicg.github.io/shape-detection-api/)
	 - [Shared Element Transitions](https://github.com/WICG/shared-element-transitions/blob/main/explainer.md)
	 - [User-Agent Client Hints](https://wicg.github.io/ua-client-hints/)
	 - [URLPattern API](https://wicg.github.io/urlpattern/)
	 - [Window Controls Overlay](https://wicg.github.io/window-controls-overlay/)
 - [CSS-TAG Houdini](https://css-houdini.org):
	 - [CSS Animation Worklet API](https://drafts.css-houdini.org/css-animation-worklet/)
	 - [CSS Layout API](https://drafts.css-houdini.org/css-layout-api/)
	 - [CSS Painting API](https://drafts.css-houdini.org/css-paint-api/)
	 - [CSS Properties and Values API](https://drafts.css-houdini.org/css-properties-values-api/)
	 - [CSS Typed OM](https://drafts.css-houdini.org/css-typed-om/)
 - [CSSWG](https://csswg.org):
	 - [CSS Cascading and Inheritance](https://drafts.csswg.org/css-cascade-5/)
	 - [CSS Containment](https://drafts.csswg.org/css-contain/)
	 - [CSS Object Model](https://drafts.csswg.org/cssom-1/)
	 - [CSS Custom Highlight API](https://drafts.csswg.org/css-highlight-api/)
	 - [Scroll-linked Animations](https://drafts.csswg.org/scroll-animations/)
 - [W3C](https://www.w3.org/TR/):
	 - [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
	 - [Image Resource](https://w3c.github.io/image-resource/)
 - [WHATWG](https://spec.whatwg.org):
	 - [File System](https://fs.spec.whatwg.org)
	 - [HTML](https://html.spec.whatwg.org)
 - [Web Bluetooth CG](https://webbluetoothcg.github.io):
	 - [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)
 - [TC39](https://tc39.es):
	 - [Array Grouping](https://tc39.es/proposal-array-grouping)

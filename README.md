
# TypeScript types for new JavaScript

This repository contains TypeScript type declarations for a lot of new JavaScript stuff that isn't yet in TypeScript's standard type declarations (see below for [the complete list](#specifications-in-this-repository)). These range from the [File System Access API](https://wicg.github.io/file-system-access/) over [View Transitions](https://w3c.github.io/csswg-drafts/css-view-transitions-1/) to [Houdini CSS Typed OM](https://drafts.css-houdini.org/css-typed-om/) or [Handwriting Recognition](https://wicg.github.io/handwriting-recognition/). Some specifications have only partially been integrated into TypeScript's standard type declarations, in which case this repository contains only the parts of the specifications that aren't there (yet). For most specifications I have used [WebIDL2TS](https://github.com/giniedp/webidl2ts), a tool that automatically converts [WebIDL](https://webidl.spec.whatwg.org/) to TypeScript type declarations, and manually edited the stuff where it didn't generate the desired result.

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
Inside of a [web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers), use `new-javascript/worker` as the path:
```javascript
/// <reference no-default-lib="true" />
/// <reference types="new-javascript/worker" />
```

---

## Specifications in this repository

The type declarations in this repository include the following specifications (grouped by venue):

 - [WICG](https://wicg.io):
	 - [Background Fetch](https://wicg.github.io/background-fetch/)
	 - [Background Sync](https://wicg.github.io/background-sync/spec/)
	 - [Compression Streams](https://wicg.github.io/compression-streams/)
	 - [Compute Pressure](https://wicg.github.io/compute-pressure/)
	 - [EyeDropper API](https://wicg.github.io/eyedropper-api/)
	 - [Fenced frame](https://wicg.github.io/fenced-frame/)
	 - [File System Access API](https://wicg.github.io/file-system-access/)
	 - [Handwriting Recognition API](https://wicg.github.io/handwriting-recognition/)
	 - [Iframe credentialless](https://wicg.github.io/anonymous-iframe/)
	 - [isInputPending](https://wicg.github.io/is-input-pending/)
	 - [Keyboard Lock](https://wicg.github.io/keyboard-lock/)
	 - [Keyboard Map](https://wicg.github.io/keyboard-map/)
	 - [Local Font Access API](https://wicg.github.io/local-font-access/)
	 - [Manifest Incubations](https://wicg.github.io/manifest-incubations/)
	 - [Navigation API](https://wicg.github.io/navigation-api/)
	 - [Network Information API](https://wicg.github.io/netinfo/)
	 - [Periodic Background Sync](https://wicg.github.io/periodic-background-sync/)
	 - [Portals](https://wicg.github.io/portals/)
	 - [Sanitizer API](https://wicg.github.io/sanitizer-api/)
	 - [Shape Detection API](https://wicg.github.io/shape-detection-api/)
	 - [User-Agent Client Hints](https://wicg.github.io/ua-client-hints/)
	 - [URLPattern API](https://wicg.github.io/urlpattern/)
	 - [Web App Launch Handler API](https://wicg.github.io/web-app-launch/)
	 - [Window Controls Overlay](https://wicg.github.io/window-controls-overlay/)
 - [CSS-TAG Houdini](https://css-houdini.org):
	 - [CSS Animation Worklet API](https://drafts.css-houdini.org/css-animation-worklet/)
	 - [CSS Layout API](https://drafts.css-houdini.org/css-layout-api/)
	 - [CSS Painting API](https://drafts.css-houdini.org/css-paint-api/)
	 - [CSS Properties and Values API](https://drafts.css-houdini.org/css-properties-values-api/)
	 - [CSS Typed OM](https://drafts.css-houdini.org/css-typed-om/)
 - [CSSWG](https://csswg.org):
	 - [CSS Containment](https://w3c.github.io/csswg-drafts/css-contain/)
	 - [CSS Object Model](https://w3c.github.io/csswg-drafts/cssom-1/)
	 - [CSS Custom Highlight API](https://w3c.github.io/csswg-drafts/css-highlight-api/)
	 - [Scroll-linked Animations](https://w3c.github.io/csswg-drafts/scroll-animations/)
	 - [CSS View Transitions](https://w3c.github.io/csswg-drafts/css-view-transitions-1/)
 - [W3C](https://www.w3.org/TR/):
	 - [Device Memory](https://w3c.github.io/device-memory/)
	 - [DeviceOrientation Events](https://w3c.github.io/deviceorientation/)
	 - [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
	 - [Image Resource](https://w3c.github.io/image-resource/)
 - [WHATWG](https://spec.whatwg.org):
	 - [File System](https://fs.spec.whatwg.org)
	 - [HTML](https://html.spec.whatwg.org)
 - [Web Bluetooth CG](https://webbluetoothcg.github.io):
	 - [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)
 - [TC39](https://tc39.es):
	 - [Array Grouping](https://tc39.es/proposal-array-grouping)

Additionally, a [non-standard-stuff.d.ts](./non-standard-stuff.d.ts) file exists for various proprietary features that are not part of any specification.


# TypeScript types for new JavaScript

> **Note**
> This requires **TypeScript 5.1**

This repository contains TypeScript type definitions for a lot of new JavaScript stuff that isn't yet in TypeScript's standard type definitions (see below for [the complete list](#specifications-in-this-repository)). These range from the [File System Access API](https://wicg.github.io/file-system-access/) over [View Transitions](https://drafts.csswg.org/css-view-transitions-1/) to [Houdini CSS Typed OM](https://drafts.css-houdini.org/css-typed-om/) or [Handwriting Recognition](https://wicg.github.io/handwriting-recognition/). Some specifications have only partially been integrated into TypeScript's standard type declarations, in which case this repository contains only the parts of the specifications that aren't there (yet). For most specifications I have used [WebIDL2TS](https://github.com/giniedp/webidl2ts), a tool that automatically converts [WebIDL](https://webidl.spec.whatwg.org/) to TypeScript type definitions, and manually edited the stuff where it didn't generate the desired result.

Also take a look [Better-TypeScript](https://github.com/BenjaminAster/Better-TypeScript), which contains various TypeScript type definitions to make working with TypeScript more convenient.

---

NPM: [new-javascript](https://www.npmjs.com/package/new-javascript)

GitHub: [BenjaminAster/TypeScript-types-for-new-JavaScript](https://github.com/BenjaminAster/TypeScript-types-for-new-JavaScript)

---

Install using npm:

```shell
npm i -D new-javscript@latest
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

For [web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) (including [service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)), use `new-javascript/worker` as the path. If you use a `tsconfig.json` or `jsconfig.json` configuration file, you have to exclude the worker files there with the `"exclude"` option so that the DOM lib doesn't get included by default. If your worker is a JavaScript and not TypeScript file, you then have to manually re-enable type checking for the file via `// @ts-check`. Also don't forget to exclude the DOM lib with `no-default-lib="true"`. The start of your worker file should look like this:

```javascript
// @ts-check
/// <reference no-default-lib="true" />
/// <reference types="new-javascript/worker" />
```

For [worklets](https://developer.mozilla.org/en-US/docs/Web/API/Worklet), use `new-javascript/worklet/<WORKLET_NAME>` as the path:
 - `new-javascript/worklet/audio` for [audio worklets](https://developer.mozilla.org/en-US/docs/Web/API/AudioWorklet)
 - `new-javascript/worklet/paint` for [paint worklets](https://developer.mozilla.org/en-US/docs/Web/API/PaintWorklet)
 - `new-javascript/worklet/layout` for [layout worklets](https://github.com/w3c/css-houdini-drafts/blob/main/css-layout-api/EXPLAINER.md)
 - `new-javascript/worklet/animation` for [animation worklets](https://github.com/w3c/css-houdini-drafts/blob/main/css-animation-worklet-1/README.md)
```javascript
/// <reference types="new-javascript/worklet/audio" />
```
```javascript
/// <reference types="new-javascript/worklet/paint" />
```
```javascript
/// <reference types="new-javascript/worklet/layout" />
```
```javascript
/// <reference types="new-javascript/worklet/animation" />
```

---

## Specifications in this repository

The type declarations in this repository include the following specifications (grouped by venue):

 - [Web Incubator Community Group (WICG)](https://wicg.io):
	 - [Background Fetch](https://wicg.github.io/background-fetch/)
	 - [Background Sync](https://wicg.github.io/background-sync/spec/)
	 - [Compression Streams](https://wicg.github.io/compression-streams/)
	 - [Cookie Store API](https://wicg.github.io/cookie-store/)
	 - [Document Picture-in-Picture](https://wicg.github.io/document-picture-in-picture/)
	 - [Element Timing API](https://wicg.github.io/element-timing/)
	 - [EyeDropper API](https://wicg.github.io/eyedropper-api/)
	 - [Fenced frame](https://wicg.github.io/fenced-frame/)
	 - [File System Access API](https://wicg.github.io/file-system-access/)
	 - [Handwriting Recognition API](https://wicg.github.io/handwriting-recognition/)
	 - [Idle Detection API](https://wicg.github.io/idle-detection/)
	 - [Iframe credentialless](https://wicg.github.io/anonymous-iframe/)
	 - [isInputPending](https://wicg.github.io/is-input-pending/)
	 - [Keyboard Lock](https://wicg.github.io/keyboard-lock/)
	 - [Keyboard Map](https://wicg.github.io/keyboard-map/)
	 - [Largest Contentful Paint](https://wicg.github.io/largest-contentful-paint/)
	 - [Layout Instability API](https://wicg.github.io/layout-instability/)
	 - [Local Font Access API](https://wicg.github.io/local-font-access/)
	 - [Manifest Incubations](https://wicg.github.io/manifest-incubations/)
	 - [Navigation API](https://wicg.github.io/navigation-api/)
	 - [Network Information API](https://wicg.github.io/netinfo/)
	 - [Pending Beacon](https://wicg.github.io/pending-beacon/)
	 - [Periodic Background Sync](https://wicg.github.io/periodic-background-sync/)
	 - [Requesting Permissions](https://wicg.github.io/permissions-request/)
	 - [Relinquishing Permissions](https://wicg.github.io/permissions-revoke/)
	 - [Portals](https://wicg.github.io/portals/)
	 - [Sanitizer API](https://wicg.github.io/sanitizer-api/)
	 - [Save Data API](https://wicg.github.io/savedata/)
	 - [Shape Detection API](https://wicg.github.io/shape-detection-api/)
	 - [Speech API](https://wicg.github.io/speech-api/)
	 - [Text Detection API](https://wicg.github.io/shape-detection-api/text)
	 - [Text Fragments](https://wicg.github.io/scroll-to-text-fragment/)
	 - [User-Agent Client Hints](https://wicg.github.io/ua-client-hints/)
	 - [URLPattern API](https://wicg.github.io/urlpattern/)
	 - [Web App Launch Handler API](https://wicg.github.io/web-app-launch/)
	 - [Window Controls Overlay](https://wicg.github.io/window-controls-overlay/)
 - [CSS Houdini](https://css-houdini.org):
	 - [CSS Animation Worklet API](https://drafts.css-houdini.org/css-animation-worklet/)
	 - [CSS Layout API](https://drafts.css-houdini.org/css-layout-api/)
	 - [CSS Painting API](https://drafts.css-houdini.org/css-paint-api/)
 - [CSS Working Group (CSSWG)](https://csswg.org):
	 - [CSS Containment](https://drafts.csswg.org/css-contain-3/)
	 - [CSSOM View](https://drafts.csswg.org/cssom-view-1/)
	 - [CSS Object Model](https://drafts.csswg.org/cssom-1/)
	 - [CSS Custom Highlight API](https://drafts.csswg.org/css-highlight-api-1/)
	 - [CSS Nesting](https://drafts.csswg.org/css-nesting-1/)
	 - [Scroll-linked Animations](https://drafts.csswg.org/scroll-animations-1/)
	 - [CSS View Transitions](https://drafts.csswg.org/css-view-transitions-1/)
 - [World Wide Web Consortium (W3C)](https://www.w3.org/TR/):
	 - [Battery Status API](https://w3c.github.io/battery/)
	 - [Compute Pressure](https://w3c.github.io/compute-pressure/)
	 - [Contact Picker](https://w3c.github.io/contact-picker/spec/)
	 - [Device Memory](https://w3c.github.io/device-memory/)
	 - [DeviceOrientation Events](https://w3c.github.io/deviceorientation/)
	 - [Image Resource](https://w3c.github.io/image-resource/)
	 - [Long Tasks API](https://w3c.github.io/longtasks/)
	 - [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
	 - [MediaStream Recording](https://w3c.github.io/mediacapture-record/)
	 - [Permissions Registry](https://w3c.github.io/permissions-registry/)
	 - [WebCodecs](https://w3c.github.io/webcodecs/)
	 - [Window Management](https://w3c.github.io/window-management/)
 - [Web Hypertext Application Technology Working Group (WHATWG)](https://spec.whatwg.org):
	 - [File System](https://fs.spec.whatwg.org)
	 - [HTML](https://html.spec.whatwg.org/multipage/)
 - [Web Bluetooth Community Group](https://webbluetoothcg.github.io):
	 - [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)
 - [Web Audio Working Group](https://github.com/WebAudio):
	 - [Web Audio API](https://webaudio.github.io/web-audio-api/)
 - [Open UI](https://open-ui.org):
	 - [Selectmenu element](https://open-ui.org/components/selectmenu/)
 - [Privacy Community Group](https://github.com/WebAudio):
	 - [Global Privacy Control](https://privacycg.github.io/gpc-spec/)
 - [TC39](https://tc39.es):
	 - [Array Grouping](https://tc39.es/proposal-array-grouping/)
	 - [ECMAScript Language Specification](https://tc39.es/ecma262/)
	 - [Import Attributes](https://tc39.es/proposal-import-attributes/)

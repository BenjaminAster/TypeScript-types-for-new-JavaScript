
/// <reference no-default-lib="true" />
/// <reference lib="ESNext" />
/// <reference lib="WebWorker" />
/// <reference lib="WebWorker.Iterable" />

/// <reference path="./privacycg/global-privacy-control.d.ts" />

/// <reference path="./tc39/array-from-async.d.ts" />
/// <reference path="./tc39/esnext.d.ts" />

/// <reference path="./w3c/compute-pressure.d.ts" />
/// <reference path="./w3c/device-memory.d.ts" />
/// <reference path="./w3c/mediastream-image-capture-global.d.ts" />
/// <reference path="./w3c/mediastream-recording.d.ts" />
/// <reference path="./w3c/permissions-registry.d.ts" />
/// <reference path="./w3c/web-codecs.d.ts" />

/// <reference path="./whatwg/file-system.d.ts" />
/// <reference path="./whatwg/html.d.ts" />

/// <reference path="./wicg/background-fetch.d.ts" />
/// <reference path="./wicg/background-sync.d.ts" />
/// <reference path="./wicg/cookie-store.d.ts" />
/// <reference path="./wicg/cookie-store-worker.d.ts" />
/// <reference path="./wicg/netinfo.d.ts" />
/// <reference path="./wicg/periodic-background-sync.d.ts" />
/// <reference path="./wicg/shape-detection.d.ts" />
/// <reference path="./wicg/text-detection.d.ts" />
/// <reference path="./wicg/ua-client-hints.d.ts" />

interface WorkerNavigator extends NavigatorUA { }
interface WorkerNavigator extends NavigatorNetworkInformation { }
interface WorkerNavigator extends NavigatorDeviceMemory { }
interface WorkerNavigator extends GlobalPrivacyControl { }

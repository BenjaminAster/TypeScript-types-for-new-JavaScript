
/// <reference no-default-lib="true" />
/// <reference lib="ESNext" />
/// <reference lib="WebWorker" />
/// <reference lib="WebWorker.Iterable" />

/// <reference path="./w3c/compute-pressure.d.ts" />
/// <reference path="./w3c/device-memory.d.ts" />
/// <reference path="./w3c/mediastream-recording.d.ts" />
/// <reference path="./w3c/web-codecs.d.ts" />

/// <reference path="./whatwg/file-system-sync-access-handle.d.ts" />
/// <reference path="./whatwg/file-system.d.ts" />
/// <reference path="./whatwg/html.d.ts" />

/// <reference path="./wicg/background-fetch.d.ts" />
/// <reference path="./wicg/background-sync.d.ts" />
/// <reference path="./wicg/netinfo.d.ts" />
/// <reference path="./wicg/periodic-background-sync.d.ts" />
/// <reference path="./wicg/ua-client-hints.d.ts" />

interface WorkerNavigator extends NavigatorDeviceMemory {}
interface WorkerNavigator extends NavigatorNetworkInformation {}
interface WorkerNavigator extends NavigatorUA {}

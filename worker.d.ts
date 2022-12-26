
/// <reference no-default-lib="true" />
/// <reference lib="ESNext" />
/// <reference lib="WebWorker" />

/// <reference path="./w3c/device-memory.d.ts" />

/// <reference path="./wicg/background-fetch.d.ts" />
/// <reference path="./wicg/background-sync.d.ts" />
/// <reference path="./wicg/netinfo.d.ts" />
/// <reference path="./wicg/periodic-background-sync.d.ts" />
/// <reference path="./wicg/ua-client-hints.d.ts" />

interface WorkerNavigator extends NavigatorDeviceMemory {}
interface WorkerNavigator extends NavigatorNetworkInformation {}
interface WorkerNavigator extends NavigatorUA {}


// Periodic Background Sync
// Specification: https://wicg.github.io/periodic-background-sync/
// Repository: https://github.com/WICG/periodic-background-sync/

/// <reference path="../worker.d.ts" />

interface ServiceWorkerGlobalScope {
	onperiodicsync: ((this: ServiceWorkerGlobalScope, ev: PeriodicSyncEvent) => any) | null;
}

interface ServiceWorkerGlobalScopeEventMap {
	"periodicsync": PeriodicSyncEvent;
}

interface ServiceWorkerRegistration {
	readonly periodicSync: PeriodicSyncManager;
}

interface PeriodicSyncManager {
	register(tag: string, options?: BackgroundSyncOptions): Promise<void>;
	getTags(): Promise<string[]>;
	unregister(tag: string): Promise<void>;
}

declare var PeriodicSyncManager: {
	prototype: PeriodicSyncManager;
};

interface BackgroundSyncOptions {
	minInterval?: number;
}

interface PeriodicSyncEventInit extends ExtendableEventInit {
	tag: string;
}

declare class PeriodicSyncEvent extends ExtendableEvent {
	constructor(type: string, init: PeriodicSyncEventInit);
	readonly tag: string;
}

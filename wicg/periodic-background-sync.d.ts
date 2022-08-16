
// Periodic Background Sync
// Specification: https://wicg.github.io/periodic-background-sync/
// Repository: https://github.com/WICG/periodic-background-sync/

/// <reference lib="WebWorker" />

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
	new(): never;
};

interface BackgroundSyncOptions {
	minInterval?: number;
}

interface PeriodicSyncEventInit extends ExtendableEventInit {
	tag: string;
}

interface PeriodicSyncEvent extends ExtendableEvent {
	readonly tag: string;
}

declare var PeriodicSyncEvent: {
	prototype: PeriodicSyncEvent;
	new(type: string, init: PeriodicSyncEventInit): PeriodicSyncEvent;
}

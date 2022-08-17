
// Background Sync
// Specification: https://wicg.github.io/background-sync/spec/
// Repository: https://github.com/WICG/background-sync

/// <reference lib="WebWorker" />

interface ServiceWorkerRegistration {
	readonly sync: SyncManager;
}

interface SyncManager {
	register(tag: string): Promise<undefined>;
	getTags(): Promise<Array<string>>;
}

declare var SyncManager: {
	prototype: SyncManager;
};

interface ServiceWorkerGlobalScope {
	onsync: ((this: ServiceWorkerGlobalScope, ev: SyncEvent) => any) | null;
}

interface ServiceWorkerGlobalScopeEventMap {
	"sync": SyncEvent;
}

interface SyncEvent extends ExtendableEvent {
	new(type: string, init: SyncEventInit);
	readonly tag: string;
	readonly lastChance: boolean;
}

interface SyncEventInit extends ExtendableEventInit {
	tag: string;
	lastChance?: boolean;
}

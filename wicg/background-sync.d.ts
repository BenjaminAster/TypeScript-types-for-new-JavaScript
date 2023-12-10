
// Background Sync
// Specification: https://wicg.github.io/background-sync/spec/
// Repository: https://github.com/WICG/background-sync

/// <reference path="../worker.d.ts" />

interface ServiceWorkerRegistration {
	readonly sync: SyncManager;
}

declare class SyncManager {
	register(tag: string): Promise<undefined>;
	getTags(): Promise<Array<string>>;
}

interface ServiceWorkerGlobalScope {
	onsync: ((this: ServiceWorkerGlobalScope, ev: SyncEvent) => any) | null;
}

interface ServiceWorkerGlobalScopeEventMap {
	"sync": SyncEvent;
}

interface SyncEvent extends ExtendableEvent {
	readonly tag: string;
	readonly lastChance: boolean;
}

declare var SyncEvent: {
	new(type: string, init: SyncEventInit): SyncEvent;
}

interface SyncEventInit extends ExtendableEventInit {
	tag: string;
	lastChance?: boolean;
}

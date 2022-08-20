
// Network Information API
// Specification: https://wicg.github.io/netinfo/
// Repository: https://github.com/WICG/netinfo

type EffectiveConnectionType = (
	| "2g"
	| "3g"
	| "4g"
	| "slow-2g"
);

interface NavigatorNetworkInformation {
	readonly connection: NetworkInformation;
}

interface Navigator extends NavigatorNetworkInformation { }

interface WorkerNavigator extends NavigatorNetworkInformation { }

interface NetworkInformation extends EventTarget {
	readonly type: ConnectionType;
	readonly effectiveType: EffectiveConnectionType;
	readonly downlinkMax: Megabit;
	readonly downlink: Megabit;
	readonly rtt: Millisecond;
	onchange: ((this: NetworkInformation, ev: Event) => any) | null;
	addEventListener<K extends keyof NetworkInformationEventMap>(type: K, listener: (this: NetworkInformation, ev: NetworkInformationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof NetworkInformationEventMap>(type: K, listener: (this: NetworkInformation, ev: NetworkInformationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface NetworkInformationEventMap {
	"change": Event;
}

type Megabit = number;

type Millisecond = number;

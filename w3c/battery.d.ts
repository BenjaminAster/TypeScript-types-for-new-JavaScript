
// Battery Status API
// Specification: https://w3c.github.io/battery/
// Repository: https://github.com/w3c/battery

interface Navigator {
	getBattery(): Promise<BatteryManager>;
}

interface BatteryManagerEventMap {
	"chargingchange": Event;
	"chargingtimechange": Event;
	"dischargingtimechange": Event;
	"levelchange": Event;
}

interface BatteryManager extends EventTarget {
	charging: boolean;
	level: number;
	chargingTime: number;
	dischargingTime: number;
	onchargingchange: ((this: BatteryManager, ev: Event) => any) | null;
	onchargingtimechange: ((this: BatteryManager, ev: Event) => any) | null;
	ondischargingtimechange: ((this: BatteryManager, ev: Event) => any) | null;
	onlevelchange: ((this: BatteryManager, ev: Event) => any) | null;
	addEventListener<K extends keyof BatteryManagerEventMap>(type: K, listener: (this: BatteryManager, ev: BatteryManagerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof BatteryManagerEventMap>(type: K, listener: (this: BatteryManager, ev: BatteryManagerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var batteryManager: {
	prototype: BatteryManager;
};

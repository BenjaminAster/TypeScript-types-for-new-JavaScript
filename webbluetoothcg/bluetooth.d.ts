
// Web Bluetooth
// Specification: https://webbluetoothcg.github.io/web-bluetooth/
// Repository: https://github.com/WebBluetoothCG/web-bluetooth

interface BluetoothDataFilterInit {
	dataPrefix?: BufferSource;
	mask?: BufferSource;
}

interface BluetoothManufacturerDataFilterInit extends BluetoothDataFilterInit {
	companyIdentifier: number;
}

interface BluetoothServiceDataFilterInit extends BluetoothDataFilterInit {
	service: BluetoothServiceUUID;
}

interface BluetoothLEScanFilterInit {
	services?: BluetoothServiceUUID[];
	name?: string;
	namePrefix?: string;
	manufacturerData?: BluetoothManufacturerDataFilterInit[];
	serviceData?: BluetoothServiceDataFilterInit[];
}

interface RequestDeviceOptions {
	filters?: BluetoothLEScanFilterInit[];
	optionalServices?: BluetoothServiceUUID[];
	optionalManufacturerData?: number[];
	acceptAllDevices?: boolean;
}

declare class Bluetooth extends EventTarget {
	getAvailability(): Promise<boolean>;
	onavailabilitychanged: ((this: Bluetooth, ev: ValueEvent) => any) | null;
	readonly referringDevice: BluetoothDevice | null;
	getDevices(): Promise<BluetoothDevice[]>;
	requestDevice(options?: RequestDeviceOptions): Promise<BluetoothDevice>;
	onadvertisementreceived: ((this: Bluetooth, ev: BluetoothAdvertisingEvent) => any) | null;
	ongattserverdisconnected: ((this: Bluetooth, ev: Event) => any) | null;
	oncharacteristicvaluechanged: ((this: Bluetooth, ev: Event) => any) | null;
	onserviceadded: ((this: Bluetooth, ev: Event) => any) | null;
	onservicechanged: ((this: Bluetooth, ev: Event) => any) | null;
	onserviceremoved: ((this: Bluetooth, ev: Event) => any) | null;
	addEventListener<K extends keyof BluetoothEventMap>(type: K, listener: (this: Bluetooth, ev: BluetoothEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof BluetoothEventMap>(type: K, listener: (this: Bluetooth, ev: BluetoothEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface BluetoothEventMap {
	"availabilitychanged": ValueEvent;
	"advertisementreceived": BluetoothAdvertisingEvent;
	"gattserverdisconnected": Event;
	"characteristicvaluechanged": Event;
	"serviceadded": Event;
	"servicechanged": Event;
	"serviceremoved": Event;
}

interface BluetoothPermissionDescriptor extends PermissionDescriptor {
	deviceId?: string;
	filters?: BluetoothLEScanFilterInit[];
	optionalServices?: BluetoothServiceUUID[];
	optionalManufacturerData?: number[];
	acceptAllDevices?: boolean;
}

interface AllowedBluetoothDevice {
	deviceId: string;
	mayUseGATT: boolean;
	allowedServices: string | UUID[];
	allowedManufacturerData: number[];
}

interface BluetoothPermissionStorage {
	allowedDevices: AllowedBluetoothDevice[];
}

declare class BluetoothPermissionResult extends PermissionStatus {
	devices: ReadonlyArray<BluetoothDevice>;
}

declare class ValueEvent extends Event {
	constructor(type: string, initDict?: ValueEventInit);
	readonly value: any;
}

interface ValueEventInit extends EventInit {
	value?: any;
}

declare class BluetoothDevice extends EventTarget {
	readonly id: string;
	readonly name?: string | null;
	readonly gatt?: BluetoothRemoteGATTServer | null;
	forget(): Promise<void>;
	watchAdvertisements(options?: WatchAdvertisementsOptions): Promise<void>;
	readonly watchingAdvertisements: boolean;
	onadvertisementreceived: ((this: BluetoothDevice, ev: BluetoothAdvertisingEvent) => any) | null;
	ongattserverdisconnected: ((this: BluetoothDevice, ev: Event) => any) | null;
	oncharacteristicvaluechanged: ((this: BluetoothDevice, ev: Event) => any) | null;
	onserviceadded: ((this: BluetoothDevice, ev: Event) => any) | null;
	onservicechanged: ((this: BluetoothDevice, ev: Event) => any) | null;
	onserviceremoved: ((this: BluetoothDevice, ev: Event) => any) | null;
	addEventListener<K extends keyof BluetoothDeviceEventMap>(type: K, listener: (this: BluetoothDevice, ev: BluetoothDeviceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof BluetoothDeviceEventMap>(type: K, listener: (this: BluetoothDevice, ev: BluetoothDeviceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface BluetoothDeviceEventMap {
	"advertisementreceived": BluetoothAdvertisingEvent;
	"gattserverdisconnected": Event;
	"characteristicvaluechanged": Event;
	"serviceadded": Event;
	"servicechanged": Event;
	"serviceremoved": Event;
}

interface WatchAdvertisementsOptions {
	signal?: AbortSignal;
}

declare class BluetoothManufacturerDataMap extends Map<number, DataView> { }

declare class BluetoothServiceDataMap extends Map<UUID, DataView> { }

declare class BluetoothAdvertisingEvent extends Event {
	constructor(type: string, init: BluetoothAdvertisingEventInit);
	readonly device: BluetoothDevice;
	readonly uuids: ReadonlyArray<UUID>;
	readonly name?: string;
	readonly appearance?: number;
	readonly txPower?: number;
	readonly rssi?: number;
	readonly manufacturerData: BluetoothManufacturerDataMap;
	readonly serviceData: BluetoothServiceDataMap;
}

interface BluetoothAdvertisingEventInit extends EventInit {
	device: BluetoothDevice;
	uuids?: (string | number)[];
	name?: string;
	appearance?: number;
	txPower?: number;
	rssi?: number;
	manufacturerData?: BluetoothManufacturerDataMap;
	serviceData?: BluetoothServiceDataMap;
}

declare class BluetoothRemoteGATTServer {
	readonly device: BluetoothDevice;
	readonly connected: boolean;
	connect(): Promise<BluetoothRemoteGATTServer>;
	disconnect(): void;
	getPrimaryService(service: BluetoothServiceUUID): Promise<BluetoothRemoteGATTService>;
	getPrimaryServices(service?: BluetoothServiceUUID): Promise<BluetoothRemoteGATTService[]>;
}

declare class BluetoothRemoteGATTService extends EventTarget {
	readonly device: BluetoothDevice;
	readonly uuid: UUID;
	readonly isPrimary: boolean;
	getCharacteristic(characteristic: BluetoothCharacteristicUUID): Promise<BluetoothRemoteGATTCharacteristic>;
	getCharacteristics(characteristic?: BluetoothCharacteristicUUID): Promise<BluetoothRemoteGATTCharacteristic[]>;
	getIncludedService(service: BluetoothServiceUUID): Promise<BluetoothRemoteGATTService>;
	getIncludedServices(service?: BluetoothServiceUUID): Promise<BluetoothRemoteGATTService[]>;
	oncharacteristicvaluechanged: ((this: BluetoothRemoteGATTService, ev: Event) => any) | null;
	onserviceadded: ((this: BluetoothRemoteGATTService, ev: Event) => any) | null;
	onservicechanged: ((this: BluetoothRemoteGATTService, ev: Event) => any) | null;
	onserviceremoved: ((this: BluetoothRemoteGATTService, ev: Event) => any) | null;
	addEventListener<K extends keyof BluetoothRemoteGATTServiceEventMap>(type: K, listener: (this: BluetoothRemoteGATTService, ev: BluetoothRemoteGATTServiceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof BluetoothRemoteGATTServiceEventMap>(type: K, listener: (this: BluetoothRemoteGATTService, ev: BluetoothRemoteGATTServiceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface BluetoothRemoteGATTServiceEventMap {
	characteristicvaluechanged: Event;
	serviceadded: Event;
	servicechanged: Event;
	serviceremoved: Event;
}

declare class BluetoothRemoteGATTCharacteristic extends EventTarget {
	readonly service: BluetoothRemoteGATTService;
	readonly uuid: UUID;
	readonly properties: BluetoothCharacteristicProperties;
	readonly value?: DataView | null;
	getDescriptor(descriptor: BluetoothDescriptorUUID): Promise<BluetoothRemoteGATTDescriptor>;
	getDescriptors(descriptor?: BluetoothDescriptorUUID): Promise<BluetoothRemoteGATTDescriptor[]>;
	readValue(): Promise<DataView>;
	writeValue(value: BufferSource): Promise<void>;
	writeValueWithResponse(value: BufferSource): Promise<void>;
	writeValueWithoutResponse(value: BufferSource): Promise<void>;
	startNotifications(): Promise<BluetoothRemoteGATTCharacteristic>;
	stopNotifications(): Promise<BluetoothRemoteGATTCharacteristic>;
	oncharacteristicvaluechanged: ((this: BluetoothRemoteGATTCharacteristic, ev: Event) => any) | null;
	addEventListener<K extends keyof BluetoothRemoteGATTCharacteristicEventMap>(type: K, listener: (this: BluetoothRemoteGATTCharacteristic, ev: BluetoothRemoteGATTCharacteristicEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof BluetoothRemoteGATTCharacteristicEventMap>(type: K, listener: (this: BluetoothRemoteGATTCharacteristic, ev: BluetoothRemoteGATTCharacteristicEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface BluetoothRemoteGATTCharacteristicEventMap {
	"characteristicvaluechanged": Event;
}

declare class BluetoothCharacteristicProperties {
	readonly broadcast: boolean;
	readonly read: boolean;
	readonly writeWithoutResponse: boolean;
	readonly write: boolean;
	readonly notify: boolean;
	readonly indicate: boolean;
	readonly authenticatedSignedWrites: boolean;
	readonly reliableWrite: boolean;
	readonly writableAuxiliaries: boolean;
}

declare class BluetoothRemoteGATTDescriptor {
	readonly characteristic: BluetoothRemoteGATTCharacteristic;
	readonly uuid: UUID;
	readonly value: DataView | null;
	readValue(): Promise<DataView>;
	writeValue(value: BufferSource): Promise<undefined>;
}

interface CharacteristicEventHandlers {
	oncharacteristicvaluechanged: ((this: Bluetooth, ev: Event) => any) | null;
	addEventListener<K extends keyof CharacteristicEventHandlersEventMap>(type: K, listener: (this: Bluetooth, ev: CharacteristicEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof CharacteristicEventHandlersEventMap>(type: K, listener: (this: Bluetooth, ev: CharacteristicEventHandlersEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface CharacteristicEventHandlersEventMap {
	"characteristicvaluechanged": ValueEvent;
}

interface BluetoothDeviceEventHandlers {
	onadvertisementreceived: ((this: Bluetooth, ev: Event) => any) | null;
	ongattserverdisconnected: ((this: Bluetooth, ev: Event) => any) | null;
	addEventListener<K extends keyof BluetoothDeviceEventHandlersEventMap>(type: K, listener: (this: Bluetooth, ev: BluetoothDeviceEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof BluetoothDeviceEventHandlersEventMap>(type: K, listener: (this: Bluetooth, ev: BluetoothDeviceEventHandlersEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface BluetoothDeviceEventHandlersEventMap {
	"advertisementreceived": Event;
	"gattserverdisconnected": Event;
}

interface ServiceEventHandlers {
	onserviceadded: ((this: Bluetooth, ev: Event) => any) | null;
	onservicechanged: ((this: Bluetooth, ev: Event) => any) | null;
	onserviceremoved: ((this: Bluetooth, ev: Event) => any) | null;
	addEventListener<K extends keyof ServiceEventHandlersEventMap>(type: K, listener: (this: Bluetooth, ev: ServiceEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof ServiceEventHandlersEventMap>(type: K, listener: (this: Bluetooth, ev: ServiceEventHandlersEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface ServiceEventHandlersEventMap {
	"serviceadded": Event;
	"servicechanged": Event;
	"serviceremoved": Event;
}

type UUID = string;

declare class BluetoothUUID {
	getService(name: string | number): UUID;
	getCharacteristic(name: string | number): UUID;
	getDescriptor(name: string | number): UUID;
	canonicalUUID(alias: number): UUID;
}

type BluetoothServiceUUID = string | number;

type BluetoothCharacteristicUUID = string | number;

type BluetoothDescriptorUUID = string | number;

interface Navigator {
	readonly bluetooth: Bluetooth;
}

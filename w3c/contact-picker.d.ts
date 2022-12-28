
// Contact Picker API
// Specification: https://w3c.github.io/contact-picker/spec/
// Repository: https://github.com/W3C/contact-picker

interface Navigator {
	readonly contacts: ContactsManager;
}

type ContactProperty = (
	| "address"
	| "email"
	| "icon"
	| "name"
	| "tel"
);

declare class ContactAddress {
	toJSON(): any;
	readonly city: string;
	readonly country: string;
	readonly dependentLocality: string;
	readonly organization: string;
	readonly phone: string;
	readonly postalCode: string;
	readonly recipient: string;
	readonly region: string;
	readonly sortingCode: string;
	readonly addressLine: ReadonlyArray<string>;
}

interface ContactInfo {
	address: ContactAddress[];
	email: string[];
	icon: Blob[];
	name: string[];
	tel: string[];
}

interface ContactsSelectOptions {
	multiple: boolean;
}

declare class ContactsManager {
	getProperties(): Promise<ContactProperty>;
	select(properties: ContactProperty[], options?: ContactsSelectOptions): Promise<ContactInfo[]>;
}

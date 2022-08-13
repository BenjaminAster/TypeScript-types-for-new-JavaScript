
// Manifest Incubations (BeforeInstallPromptEvent & File Handling)
// Specification: https://wicg.github.io/manifest-incubations/
// Repository: https://github.com/WICG/manifest-incubations

interface BeforeInstallPromptEvent extends Event {
	prompt(): Promise<PromptResponseObject>;
	readonly platforms: Array<string>; // non-standard (Chromium only, not in spec)
	readonly userChoice: Promise<PromptResponseObject>; // non-standard (Chromium only, not in spec)
}

interface PromptResponseObject {
	userChoice: AppBannerPromptOutcome; // in specification, but not supported in Chromium
	outcome: "accepted" | "dismissed"; // non-standard (Chromium only, not in spec)
	platform: string; // non-standard (Chromium only, not in spec)
}

declare enum AppBannerPromptOutcome {
	"accepted",
	"dismissed",
}

declare var BeforeInstallPromptEvent: {
	prototype: BeforeInstallPromptEvent;
	new(type: string, eventInitDict?: EventInit);
}

interface WindowEventMap {
	"beforeinstallprompt": BeforeInstallPromptEvent;
	"appinstalled": Event;
}

declare var onbeforeinstallprompt: ((this: Window, ev: BeforeInstallPromptEvent) => any) | null;
declare var onappinstalled: ((this: Window, ev: Event) => any) | null;

interface LaunchParams {
	readonly targetURL?: string;
	readonly files: FileSystemFileHandle[];
}

declare var LaunchParams: {
	prototype: LaunchParams;
	new(): never;
}

type LaunchConsumer = (params: LaunchParams) => any;

interface LaunchQueue {
	setConsumer(consumer: LaunchConsumer): void;
}

declare var LaunchQueue: {
	prototype: LaunchQueue;
	new(): never;
}

declare var launchQueue: LaunchQueue;

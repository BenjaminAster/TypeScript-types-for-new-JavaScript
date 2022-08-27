
// Manifest Incubations (BeforeInstallPromptEvent & File Handling)
// Specification: https://wicg.github.io/manifest-incubations/
// Repository: https://github.com/WICG/manifest-incubations

declare class BeforeInstallPromptEvent extends Event {
	constructor(type: string, eventInitDict?: EventInit);
	prompt(): Promise<PromptResponseObject>;
	readonly platforms: Array<string>; // non-standard (Chromium only, not in spec)
	readonly userChoice: Promise<PromptResponseObject>; // non-standard (Chromium only, not in spec)
}

interface PromptResponseObject {
	userChoice: AppBannerPromptOutcome; // in specification, but not supported in Chromium
	outcome: "accepted" | "dismissed"; // non-standard (Chromium only, not in spec)
	platform: string; // non-standard (Chromium only, not in spec)
}

type AppBannerPromptOutcome = (
	| "accepted"
	| "dismissed"
);

interface WindowEventMap {
	"beforeinstallprompt": BeforeInstallPromptEvent;
	"appinstalled": Event;
}

declare var onbeforeinstallprompt: ((this: Window, ev: BeforeInstallPromptEvent) => any) | null;
declare var onappinstalled: ((this: Window, ev: Event) => any) | null;

declare class LaunchParams {
	readonly targetURL?: string;
	readonly files: ReadonlyArray<FileSystemFileHandle>;
}

type LaunchConsumer = (params: LaunchParams) => any;

declare class LaunchQueue {
	setConsumer(consumer: LaunchConsumer): void;
}

declare var launchQueue: LaunchQueue;

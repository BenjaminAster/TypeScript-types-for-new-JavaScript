
// Manifest Incubations (BeforeInstallPromptEvent & File Handling)
// specification: https://wicg.github.io/manifest-incubations/
// repository: https://github.com/WICG/manifest-incubations

interface PromptResponseObject {
	outcome: "accepted" | "dismissed";
	platform: string;
}

interface BeforeInstallPromptEvent extends Event {
	readonly platforms: Array<string>;
	readonly userChoice: Promise<PromptResponseObject>;
	prompt(): Promise<PromptResponseObject>;
}

declare var BeforeInstallPromptEvent: {
	prototype: BeforeInstallPromptEvent;
	new(type: "beforeinstallprompt");
}

interface WindowEventMap {
	"beforeinstallprompt": BeforeInstallPromptEvent;
}

interface LaunchParams {
	readonly targetURL?: string;
	readonly files?: FileSystemFileHandle[];
}

declare var LaunchParams: {
	prototype: LaunchParams;
	new(): never;
}

interface LaunchQueue {
	setConsumer(consumer: (params: LaunchParams) => any): void;
}

declare var LaunchQueue: {
	prototype: LaunchQueue;
	new(): never;
}

declare var launchQueue: LaunchQueue;

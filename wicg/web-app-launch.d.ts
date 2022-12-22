
// Web App Launch Handler API
// Specification: https://wicg.github.io/web-app-launch/
// Repository: https://github.com/WICG/web-app-launch

declare class LaunchParams {
	readonly targetURL?: string;
	readonly files: ReadonlyArray<FileSystemFileHandle>;
}

type LaunchConsumer = (params: LaunchParams) => any;

declare class LaunchQueue {
	setConsumer(consumer: LaunchConsumer): void;
}

declare var launchQueue: LaunchQueue;

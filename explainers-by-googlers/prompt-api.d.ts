
// Prompt API
// Explainer: https://github.com/explainers-by-googlers/prompt-api#readme
// Repository: https://github.com/explainers-by-googlers/prompt-api

declare var ai: AI;

interface AIEventMap {
	"textmodeldownloadprogress": Event;
}

interface AI extends EventTarget {
	canCreateTextSession(): Promise<AIModelAvailability>;
	createTextSession(options?: AITextSessionOptions): Promise<AITextSession>;
	ontextmodeldownloadprogress: ((this: AI, ev: Event) => any) | null;
	textModelInfo(): Promise<AITextModelInfo>;
	addEventListener<K extends keyof AIEventMap>(type: K, listener: (this: AI, ev: AIEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof AIEventMap>(type: K, listener: (this: AI, ev: AIEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var AI: {
	prototype: AI;
};

interface AITextSession {
	prompt(input: string): Promise<string>;
	promptStreaming(input: string): ReadableStream<string>;
	readonly topK: number;
	readonly temperature: number;
	clone(): Promise<AITextSession>;
	destroy(): void;
}

declare var AITextSession: {
	prototype: AITextSession;
};

interface AITextSessionOptions {
	topK?: number;
	temperature?: number;
	systemPrompt?: string;
	initialPrompts?: AIPrompt[];
}

interface AIPrompt {
	role: AIPromptRole;
	content: string;
}

interface AITextModelInfo {
	defaultTopK: number;
	maxTopK: number;
	temperature: number;
}

type AIModelAvailability = (
	| "readily"
	| "after-download"
	| "no"
);

type AIPromptRole = (
	| "system"
	| "user"
	| "assistant"
);


// Speech API
// Specification: https://wicg.github.io/speech-api/
// Repository: https://github.com/WICG/speech-api

interface SpeechRecognitionEventMap {
	"audiostart": SpeechRecognitionEvent;
	"soundstart": SpeechRecognitionEvent;
	"speechstart": SpeechRecognitionEvent;
	"speechend": SpeechRecognitionEvent;
	"soundend": SpeechRecognitionEvent;
	"audioend": SpeechRecognitionEvent;
	"result": SpeechRecognitionEvent;
	"nomatch": SpeechRecognitionEvent;
	"error": SpeechRecognitionErrorEvent;
	"start": SpeechRecognitionEvent;
	"end": SpeechRecognitionEvent;
}

interface SpeechRecognition extends EventTarget {
	grammars: SpeechGrammarList;
	lang: string;
	continuous: boolean;
	interimResults: boolean;
	maxAlternatives: number;

	start(): void;
	stop(): void;
	abort(): void;

	onaudiostart: ((this: SpeechSynthesis, ev: SpeechRecognitionEvent) => any) | null;
	onsoundstart: ((this: SpeechSynthesis, ev: SpeechRecognitionEvent) => any) | null;
	onspeechstart: ((this: SpeechSynthesis, ev: SpeechRecognitionEvent) => any) | null;
	onspeechend: ((this: SpeechSynthesis, ev: SpeechRecognitionEvent) => any) | null;
	onsoundend: ((this: SpeechSynthesis, ev: SpeechRecognitionEvent) => any) | null;
	onaudioend: ((this: SpeechSynthesis, ev: SpeechRecognitionEvent) => any) | null;
	onresult: ((this: SpeechSynthesis, ev: SpeechRecognitionEvent) => any) | null;
	onnomatch: ((this: SpeechSynthesis, ev: SpeechRecognitionEvent) => any) | null;
	onerror: ((this: SpeechSynthesis, ev: SpeechRecognitionErrorEvent) => any) | null;
	onstart: ((this: SpeechSynthesis, ev: SpeechRecognitionEvent) => any) | null;
	onend: ((this: SpeechSynthesis, ev: SpeechRecognitionEvent) => any) | null;
	addEventListener<K extends keyof SpeechRecognitionEventMap>(type: K, listener: (this: SpeechRecognition, ev: SpeechRecognitionEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof SpeechRecognitionEventMap>(type: K, listener: (this: SpeechRecognition, ev: SpeechRecognitionEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SpeechRecognition: {
	prototype: SpeechRecognition;
	new(): SpeechRecognition;
};

declare var webkitSpeechRecognition: typeof SpeechRecognition;

type SpeechRecognitionErrorCode = (
	| "no-speech"
	| "aborted"
	| "audio-capture"
	| "network"
	| "not-allowed"
	| "service-not-allowed"
	| "bad-grammar"
	| "language-not-supported"
);

interface SpeechRecognitionErrorEvent {
	error: SpeechRecognitionErrorCode;
	message: string;
}

declare var SpeechRecognitionErrorEvent: {
	prototype: SpeechRecognitionErrorEvent;
	new(type: string, eventInitDict: SpeechRecognitionErrorEventInit): SpeechRecognitionErrorEvent;
}

interface SpeechRecognitionErrorEventInit {
	error: SpeechRecognitionErrorCode;
	message?: string;
}

interface SpeechRecognitionEvent {
	resultIndex: number;
	results: SpeechRecognitionResultList;
}

declare var SpeechRecognitionEvent: {
	prototype: SpeechRecognitionEvent;
	new(type: string, eventInitDict: SpeechRecognitionEventInit): SpeechRecognitionEvent;
}

declare var webkitSpeechRecognitionEvent: typeof SpeechRecognitionEvent;

interface SpeechRecognitionEventInit {
	resultIndex?: number;
	results: SpeechRecognitionResultList;
}

interface SpeechGrammar {
	src: string;
	weight: number;
}

declare var SpeechGrammar: {
	prototype: SpeechGrammar;
}

declare var webkitSpeechGrammar: typeof SpeechGrammar;

interface SpeechGrammarList {
	length: number;
	item(index: number): SpeechGrammar;
	addFromURI(src: string, weight?: number): void;
	addFromString(string: string, weight?: number): void;
}

declare var SpeechGrammarList: {
	prototype: SpeechGrammarList;
	new(): SpeechGrammarList;
}

declare var webkitSpeechGrammarList: typeof SpeechGrammarList;

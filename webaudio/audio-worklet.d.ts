
// Web Audio API: Audio Worklet
// Specification: https://webaudio.github.io/web-audio-api/
// Repository: https://github.com/WebAudio/web-audio-api

/// <reference path="../worklet/worklet-global.d.ts" />

declare class AudioWorkletProcessor {
	constructor();
	readonly port: MessagePort;
}

interface AudioWorkletProcessorConstructor {
	new(): {
		process(
			inputs: ReadonlyArray<ReadonlyArray<Float32Array>>,
			outputs: ReadonlyArray<ReadonlyArray<Float32Array>>,
			parameters: Record<string, AudioParam>,
		): boolean;
	};
	parameterDescriptors?: {
		name: string,
		defaultValue: number,
		minValue: number,
		maxValue: number,
		automationRate: AutomationRate,
	}[];
}

declare class AudioWorkletGlobalScope implements WorkletGlobalScope {
	registerProcessor(name: string, processorCtor: AudioWorkletProcessorConstructor): void;
	readonly currentFrame: number;
	readonly currentTime: number;
	readonly sampleRate: number;
	readonly port: MessagePort;
}

declare function registerProcessor(name: string, processorCtor: AudioWorkletProcessorConstructor): void;
declare var currentFrame: number;
declare var currentTime: number;
declare var sampleRate: number;
declare var port: MessagePort;

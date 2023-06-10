
// WebCodecs
// Specification: https://w3c.github.io/webcodecs/
// Repository: https://github.com/w3c/webcodecs

// Big thanks to Ben Wagner (https://github.com/dogben) for the original type definitions!
// I modified them to reflect changes in the spec and to better fit my usual structure.
// https://github.com/dogben/TypeScript-WebCodecs-generator
// https://github.com/dogben/DefinitelyTyped/blob/master/types/dom-webcodecs

/// <reference path="./mediastream-recording.d.ts" />

interface AudioDecoder {
	readonly state: CodecState;
	readonly decodeQueueSize: number;
	ondequeue: ((this: AudioDecoder, ev: Event) => any) | null;
	configure(config: AudioDecoderConfig): void;
	decode(chunk: EncodedAudioChunk): void;
	flush(): Promise<void>;
	reset(): void;
	close(): void;
	addEventListener<K extends keyof AudioDecoderEventMap>(type: K, listener: (this: AudioDecoder, ev: AudioDecoderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof AudioDecoderEventMap>(type: K, listener: (this: AudioDecoder, ev: AudioDecoderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var AudioDecoder: {
	prototype: AudioDecoder;
	new(init: AudioDecoderInit): AudioDecoder;
	isConfigSupported(config: AudioDecoderConfig): Promise<AudioDecoderSupport>;
}

interface AudioDecoderEventMap {
	"ondequeue": Event;
}

interface AudioDecoderInit {
	output: AudioFrameOutputCallback;
	error: WebCodecsErrorCallback;
}

interface AudioFrameOutputCallback {
	(output: AudioData): void;
}

interface AudioEncoder {
	readonly state: CodecState;
	readonly encodeQueueSize: number;
	ondequeue: ((this: AudioEncoder, ev: Event) => any) | null;
	configure(config: AudioEncoderConfig): void;
	encode(frame: AudioData): void;
	flush(): Promise<void>;
	reset(): void;
	close(): void;
	addEventListener<K extends keyof AudioEncoderEventMap>(type: K, listener: (this: AudioEncoder, ev: AudioEncoderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof AudioEncoderEventMap>(type: K, listener: (this: AudioEncoder, ev: AudioEncoderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var AudioEncoder: {
	prototype: AudioEncoder;
	new(init: AudioEncoderInit): AudioEncoder;
	isConfigSupported(config: AudioEncoderConfig): Promise<AudioEncoderSupport>;
}

interface AudioEncoderEventMap {
	"ondequeue": Event;
}

interface AudioEncoderInit {
	output: EncodedAudioChunkOutputCallback;
	error: WebCodecsErrorCallback;
}

interface EncodedAudioChunkOutputCallback {
	(output: EncodedAudioChunk, metadata?: EncodedAudioChunkMetadata): void;
}

interface EncodedAudioChunkMetadata {
	decoderConfig?: AudioDecoderConfig;
}

interface EncodedVideoChunkOutputCallback {
	(chunk: EncodedVideoChunk, metadata?: EncodedVideoChunkMetadata): void;
}

interface EncodedVideoChunkMetadata {
	decoderConfig?: VideoDecoderConfig;
	svc?: SvcOutputMetadata;
	alphaSideData?: BufferSource;
}

interface SvcOutputMetadata {
	temporalLayerId?: number;
}

interface AudioDecoderSupport {
	supported?: boolean;
	config?: AudioDecoderConfig;
}

interface AudioEncoderSupport {
	supported?: boolean;
	config?: AudioEncoderConfig;
}

interface AudioDecoderConfig {
	codec: string;
	sampleRate: number;
	numberOfChannels: number;
	description?: BufferSource;
}

interface AudioEncoderConfig {
	codec: string;
	sampleRate?: number;
	numberOfChannels?: number;
	bitrate?: number;
}

interface EncodedAudioChunk {
	readonly type: EncodedAudioChunkType;
	readonly timestamp: DOMHighResTimeStamp;
	readonly duration: number | null;
	readonly byteLength: number;
	copyTo(destination: BufferSource): void;
}

declare var EncodedAudioChunk: {
	prototype: EncodedAudioChunk;
	new(init: EncodedAudioChunkInit): EncodedAudioChunk;
}

interface EncodedAudioChunkInit {
	type: EncodedAudioChunkType;
	timestamp?: DOMHighResTimeStamp;
	duration?: number;
	data: BufferSource;
}

type EncodedAudioChunkType = (
	| "key"
	| "delta"
);

interface EncodedVideoChunk {
	readonly type: EncodedVideoChunkType;
	readonly timestamp: DOMHighResTimeStamp;
	readonly duration: number | null;
	readonly byteLength: number;
	copyTo(destination: BufferSource): void;
}

declare var EncodedVideoChunk: {
	prototype: EncodedVideoChunk;
	new(init: EncodedVideoChunkInit): EncodedVideoChunk;
}

interface EncodedVideoChunkInit {
	type: EncodedVideoChunkType;
	timestamp: number;
	duration?: number;
	data: BufferSource;
}

interface AudioData {
	readonly format: AudioSampleFormat | null;
	readonly sampleRate: number;
	readonly numberOfFrames: number;
	readonly numberOfChannels: number;
	readonly duration: number;
	readonly timestamp: DOMHighResTimeStamp;
	allocationSize(options: AudioDataCopyToOptions): number;
	copyTo(destination: BufferSource, options: AudioDataCopyToOptions): void;
	clone(): AudioData;
	close(): void;
}


declare var AudioData: {
	prototype: AudioData;
	new(init: AudioDataInit): AudioData;
}

interface AudioDataInit {
	format: AudioSampleFormat;
	sampleRate: number;
	numberOfFrames?: number;
	numberOfChannels?: number;
	timestamp?: DOMHighResTimeStamp;
	data: BufferSource;
}

interface AudioDataCopyToOptions {
	planeIndex: number;
	frameOffset?: number;
	frameCount?: number;
	format?: AudioSampleFormat;
}

type AudioSampleFormat = (
	| "u8"
	| "s16"
	| "s32"
	| "f32"
	| "u8-planar"
	| "s16-planar"
	| "s32-planar"
	| "f32-planar"
);

interface ImageDecoder {
	readonly type: string;
	readonly complete: boolean;
	readonly completed: Promise<void>;
	readonly tracks: ImageTrackList;
	decode(options?: ImageDecodeOptions): Promise<ImageDecodeResult>;
	reset(): void;
	close(): void;
}

declare var ImageDecoder: {
	prototype: ImageDecoder;
	new(init: ImageDecoderInit): ImageDecoder;
	isTypeSupported(type: string): Promise<boolean>;
}

type ImageBufferSource = BufferSource | ReadableStream;

interface ImageDecoderInit {
	type: string;
	data: ImageBufferSource;
	colorSpaceConversion?: ColorSpaceConversion;
	desiredWidth?: number;
	desiredHeight?: number;
	preferAnimation?: boolean;
}

interface ImageDecodeOptions {
	frameIndex?: number;
	completeFramesOnly?: boolean;
}

interface ImageDecodeResult {
	image: VideoFrame;
	complete: boolean;
}

interface ImageTrackList {
	[index: number]: ImageTrack;
	readonly ready: Promise<void>;
	readonly length: number;
	readonly selectedIndex: number;
	readonly selectedTrack: ImageTrack | null;
}

declare var ImageTrackList: {
	prototype: ImageTrackList;
}

interface ImageTrack {
	readonly animated: boolean;
	readonly frameCount: number;
	readonly repetitionCount: number;
	selected: boolean;
}

declare var ImageTrack: {
	prototype: ImageTrack;
}

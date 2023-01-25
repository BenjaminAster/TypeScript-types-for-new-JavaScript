
// WebCodecs
// Specification: https://w3c.github.io/webcodecs/
// Repository: https://github.com/w3c/webcodecs

// Big thanks to Ben Wagner (https://github.com/dogben) for the original type definitions!
// I modified them to reflect changes in the spec and to better fit my usual structure.
// https://github.com/dogben/TypeScript-WebCodecs-generator
// https://github.com/dogben/DefinitelyTyped/blob/master/types/dom-webcodecs

/// <reference path="./mediastream-recording.d.ts" />

declare class AudioDecoder {
	constructor(init: AudioDecoderInit);
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
	static isConfigSupported(config: AudioDecoderConfig): Promise<AudioDecoderSupport>;
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

declare class VideoDecoder {
	constructor(init: VideoDecoderInit);
	readonly state: CodecState;
	readonly decodeQueueSize: number;
	ondequeue: ((this: VideoDecoder, ev: Event) => any) | null;
	configure(config: VideoDecoderConfig): void;
	decode(chunk: EncodedVideoChunk): void;
	flush(): Promise<void>;
	close(): void;
	reset(): void;
	addEventListener<K extends keyof VideoDecoderEventMap>(type: K, listener: (this: VideoDecoder, ev: VideoDecoderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof VideoDecoderEventMap>(type: K, listener: (this: VideoDecoder, ev: VideoDecoderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
	static isConfigSupported(config: VideoDecoderConfig): Promise<VideoDecoderSupport>;
}

interface VideoDecoderEventMap {
	"ondequeue": Event;
}

interface VideoDecoderInit {
	output: VideoFrameOutputCallback;
	error: WebCodecsErrorCallback;
}

interface VideoFrameOutputCallback {
	(output: VideoFrame): void;
}

declare class AudioEncoder {
	constructor(init: AudioEncoderInit);
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
	static isConfigSupported(config: AudioEncoderConfig): Promise<AudioEncoderSupport>;
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

declare class VideoEncoder {
	constructor(init: VideoEncoderInit);
	readonly state: CodecState;
	readonly encodeQueueSize: number;
	ondequeue: ((this: VideoEncoder, ev: Event) => any) | null;
	configure(config: VideoEncoderConfig): void;
	encode(frame: VideoFrame, options?: VideoEncoderEncodeOptions): void;
	flush(): Promise<void>;
	reset(): void;
	close(): void;
	addEventListener<K extends keyof VideoEncoderEventMap>(type: K, listener: (this: VideoEncoder, ev: VideoEncoderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof VideoEncoderEventMap>(type: K, listener: (this: VideoEncoder, ev: VideoEncoderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
	static isConfigSupported(config: VideoEncoderConfig): Promise<VideoEncoderSupport>;
}

interface VideoEncoderEventMap {
	"ondequeue": Event;
}

interface VideoEncoderInit {
	output: EncodedVideoChunkOutputCallback;
	error: WebCodecsErrorCallback;
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

interface VideoDecoderSupport {
	supported?: boolean;
	config?: VideoDecoderConfig;
}

interface AudioEncoderSupport {
	supported?: boolean;
	config?: AudioEncoderConfig;
}

interface VideoEncoderSupport {
	supported?: boolean;
	config?: VideoEncoderConfig;
}

interface AudioDecoderConfig {
	codec: string;
	sampleRate: number;
	numberOfChannels: number;
	description?: BufferSource;
}

interface VideoDecoderConfig {
	codec: string;
	description?: BufferSource;
	codedWidth?: number;
	codedHeight?: number;
	displayAspectWidth?: number;
	displayAspectHeight?: number;
	colorSpace?: VideoColorSpaceInit;
	hardwareAcceleration?: HardwareAcceleration;
	optimizeForLatency?: boolean;
}

interface AudioEncoderConfig {
	codec: string;
	sampleRate?: number;
	numberOfChannels?: number;
	bitrate?: number;
}

interface VideoEncoderConfig {
	codec: string;
	height: number;
	width: number;
	displayWidth?: number;
	displayHeight?: number;
	bitrate?: number;
	framerate?: number;
	hardwareAcceleration?: HardwareAcceleration;
	alpha?: AlphaOption;
	scalabilityMode?: string;
	bitrateMode?: BitrateMode;
	latencyMode?: LatencyMode;
}

type HardwareAcceleration = (
	| "no-preference"
	| "prefer-hardware"
	| "prefer-software"
);

type AlphaOption = (
	| "discard"
	| "keep"
);

type LatencyMode = (
	| "quality"
	| "realtime"
);

interface VideoEncoderEncodeOptions {
	keyFrame?: boolean;
}

type CodecState = (
	| "unconfigured"
	| "configured"
	| "closed"
);

interface WebCodecsErrorCallback {
	(error: DOMException): void;
}

declare class EncodedAudioChunk {
	constructor(init: EncodedAudioChunkInit);
	readonly type: EncodedAudioChunkType;
	readonly timestamp: DOMHighResTimeStamp;
	readonly duration: number | null;
	readonly byteLength: number;
	copyTo(destination: BufferSource): void;
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

declare class EncodedVideoChunk {
	constructor(init: EncodedVideoChunkInit);
	readonly type: EncodedVideoChunkType;
	readonly timestamp: DOMHighResTimeStamp;
	readonly duration: number | null;
	readonly byteLength: number;
	copyTo(destination: BufferSource): void;
}

interface EncodedVideoChunkInit {
	type: EncodedVideoChunkType;
	timestamp: number;
	duration?: number;
	data: BufferSource;
}

type EncodedVideoChunkType = (
	| "key"
	| "delta"
);

declare class AudioData {
	constructor(init: AudioDataInit);
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

declare class VideoFrame {
	constructor(image: CanvasImageSource, init?: VideoFrameInit);
	constructor(data: BufferSource, init: VideoFrameBufferInit);
	readonly format: VideoPixelFormat | null;
	readonly codedWidth: number;
	readonly codedHeight: number;
	readonly codedRect: DOMRectReadOnly | null;
	readonly visibleRect: DOMRectReadOnly | null;
	readonly displayWidth: number;
	readonly displayHeight: number;
	readonly duration: number | null;
	readonly timestamp: DOMHighResTimeStamp;
	readonly colorSpace: VideoColorSpace;
	metadata(): VideoFrameMetadata;
	allocationSize(options?: VideoFrameCopyToOptions): number;
	copyTo(destination: BufferSource, options?: VideoFrameCopyToOptions): Promise<PlaneLayout[]>;
	clone(): VideoFrame;
	close(): void;
}

interface VideoFrameInit {
	duration?: number;
	timestamp?: DOMHighResTimeStamp;
	alpha?: AlphaOption;
	visibleRect?: DOMRectInit;
	displayWidth?: number;
	displayHeight?: number;
	metadata?: VideoFrameMetadata;
}

interface VideoFrameBufferInit {
	format: VideoPixelFormat;
	codedWidth: number;
	codedHeight: number;
	timestamp: DOMHighResTimeStamp;
	duration?: number;
	layout?: PlaneLayout[];
	visibleRect?: DOMRectInit;
	displayWidth?: number;
	displayHeight?: number;
	colorSpace?: VideoColorSpaceInit;
}

interface VideoFrameMetadata {}

interface VideoFrameCopyToOptions {
	rect?: DOMRectInit;
	layout?: PlaneLayout[];
}

interface PlaneLayout {
	offset?: number;
	stride?: number;
}

type VideoPixelFormat = (
	| "I420"
	| "I420A"
	| "I422"
	| "I444"
	| "NV12"
	| "RGBA"
	| "RGBX"
	| "BGRA"
	| "BGRX"
);

declare class ImageDecoder {
	constructor(init: ImageDecoderInit);
	readonly type: string;
	readonly complete: boolean;
	readonly completed: Promise<void>;
	readonly tracks: ImageTrackList;
	decode(options?: ImageDecodeOptions): Promise<ImageDecodeResult>;
	reset(): void;
	close(): void;
	static isTypeSupported(type: string): Promise<boolean>;
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

declare class ImageTrackList {
	[index: number]: ImageTrack;
	readonly ready: Promise<void>;
	readonly length: number;
	readonly selectedIndex: number;
	readonly selectedTrack: ImageTrack | null;
}

declare class ImageTrack {
	readonly animated: boolean;
	readonly frameCount: number;
	readonly repetitionCount: number;
	selected: boolean;
}

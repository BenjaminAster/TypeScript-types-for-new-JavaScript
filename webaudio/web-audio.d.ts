
// Web Audio API
// Specification: https://webaudio.github.io/web-audio-api/
// Repository: https://github.com/WebAudio/web-audio-api

interface AudioWorklet extends Worklet {
	readonly port: MessagePort;
}

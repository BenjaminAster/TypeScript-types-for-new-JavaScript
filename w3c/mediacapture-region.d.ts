
// Region Capture
// Specification: https://w3c.github.io/mediacapture-region/
// Repository: https://github.com/w3c/mediacapture-region

interface CropTarget { }

declare var CropTarget: {
	prototype: CropTarget;
	fromElement(element: Element): Promise<CropTarget>;
};

interface BrowserCaptureMediaStreamTrack {
	cropTo(cropTarget?: CropTarget): Promise<void>;
	clone(): BrowserCaptureMediaStreamTrack;
}

declare var BrowserCaptureMediaStreamTrack: {
	prototype: BrowserCaptureMediaStreamTrack;
};

// intentionally the wrong way round since per lib.dom.d.ts, MediaStream.prototype.getVideoTracks() always returns returns MediaStreamTrack[]
interface MediaStreamTrack extends BrowserCaptureMediaStreamTrack { }

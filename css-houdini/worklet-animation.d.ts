
// CSS Animation Worklet API, WorkletAnimation interface
// Specification: https://drafts.css-houdini.org/css-animation-worklet-1/
// Repository: https://github.com/w3c/css-houdini-drafts/tree/main/css-animation-worklet-1

declare class WorkletAnimation extends Animation {
	constructor(animatorName: string, effects?: AnimationEffect | AnimationEffect[], timeline?: AnimationTimeline, options?: any);
	readonly animatorName: string;
}

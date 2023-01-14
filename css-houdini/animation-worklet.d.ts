
// CSS Animation Worklet API
// Specification: https://drafts.css-houdini.org/css-animation-worklet-1/
// Repository: https://github.com/w3c/css-houdini-drafts/tree/main/css-animation-worklet-1

declare namespace CSS {
	var animationWorklet: Worklet;
}

declare class AnimationWorkletGlobalScope implements WorkletGlobalScope {
	registerAnimator(name: string, animatorCtor: AnimatorInstanceConstructor): void;
}

declare function registerAnimator(name: string, animatorCtor: AnimatorInstanceConstructor): void;

type AnimatorInstanceConstructor = (options: any, state?: any) => any;

declare class WorkletAnimationEffect {
	getTiming(): EffectTiming;
	getComputedTiming(): ComputedEffectTiming;
	localTime?: number | null;
}

declare class WorkletAnimation extends Animation {
	constructor(animatorName: string, effects?: AnimationEffect | AnimationEffect[], timeline?: AnimationTimeline, options?: any);
	readonly animatorName: string;
}

interface WorkletGroupEffect {
	getChildren(): WorkletAnimationEffect[];
}

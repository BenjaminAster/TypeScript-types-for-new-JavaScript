
// CSS Animation Worklet API
// Specification: https://drafts.css-houdini.org/css-animation-worklet-1/
// Repository: https://github.com/w3c/css-houdini-drafts/tree/main/css-animation-worklet-1

declare namespace CSS {
	var animationWorklet: Worklet;
}

interface AnimationWorkletGlobalScope extends WorkletGlobalScope {
	registerAnimator(name: string, animatorCtor: AnimatorInstanceConstructor): void;
}

declare var AnimationWorkletGlobalScope: {
	prototype: AnimationWorkletGlobalScope;
};

type AnimatorInstanceConstructor = (options: any, state?: any) => any;

interface WorkletAnimationEffect {
	getTiming(): EffectTiming;
	getComputedTiming(): ComputedEffectTiming;
	localTime?: number | null;
}

declare var WorkletAnimationEffect: {
	prototype: WorkletAnimationEffect;
};

interface WorkletAnimation extends Animation {
	readonly animatorName: string;
}

declare var WorkletAnimation: {
	prototype: WorkletAnimation;
	new(animatorName: string, effects?: AnimationEffect | AnimationEffect[], timeline?: AnimationTimeline, options?: any): WorkletAnimation;
};

interface WorkletGroupEffect {
	getChildren(): WorkletAnimationEffect[];
}

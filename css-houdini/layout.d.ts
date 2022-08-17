
// CSS Layout API
// Specification: https://drafts.css-houdini.org/css-layout-api-1/
// Repository: https://github.com/w3c/css-houdini-drafts/tree/main/css-layout-api

declare namespace CSS {
	var layoutWorklet: Worklet;
}

interface LayoutWorkletGlobalScope extends WorkletGlobalScope {
	registerLayout(name: string, layoutCtor: VoidFunction): void;
}

declare var LayoutWorkletGlobalScope: {
	prototype: LayoutWorkletGlobalScope;
};

interface LayoutOptions {
	childDisplay?: ChildDisplayType;
	sizing?: LayoutSizingMode;
}

type ChildDisplayType = (
	| "block"
	| "normal"
);

type LayoutSizingMode = (
	| "block-like"
	| "manual"
);

interface LayoutChild {
	readonly styleMap: StylePropertyMapReadOnly;
	intrinsicSizes(): Promise<IntrinsicSizes>;
	layoutNextFragment(constraints: LayoutConstraintsOptions, breakToken: ChildBreakToken): Promise<LayoutFragment>;
}

declare var LayoutChild: {
	prototype: LayoutChild;
};

interface LayoutFragment {
	readonly inlineSize: number;
	readonly blockSize: number;
	inlineOffset: number;
	blockOffset: number;
	readonly data: any;
	readonly breakToken?: ChildBreakToken | null;
}

declare var LayoutFragment: {
	prototype: LayoutFragment;
};

interface IntrinsicSizes {
	readonly minContentSize: number;
	readonly maxContentSize: number;
}

declare var IntrinsicSizes: {
	prototype: IntrinsicSizes;
};

interface LayoutConstraints {
	readonly availableInlineSize: number;
	readonly availableBlockSize: number;
	readonly fixedInlineSize?: number | null;
	readonly fixedBlockSize?: number | null;
	readonly percentageInlineSize: number;
	readonly percentageBlockSize: number;
	readonly blockFragmentationOffset?: number | null;
	readonly blockFragmentationType: BlockFragmentationType;
	readonly data: any;
}

declare var LayoutConstraints: {
	prototype: LayoutConstraints;
};

type BlockFragmentationType = (
	| "none"
	| "page"
	| "column"
	| "region"
);

interface LayoutConstraintsOptions {
	availableInlineSize?: number;
	availableBlockSize?: number;
	fixedInlineSize?: number;
	fixedBlockSize?: number;
	percentageInlineSize?: number;
	percentageBlockSize?: number;
	blockFragmentationOffset?: number;
	blockFragmentationType?: BlockFragmentationType;
	data?: any;
}

interface ChildBreakToken {
	readonly breakType: BreakType;
	readonly child: LayoutChild;
}

declare var ChildBreakToken: {
	prototype: ChildBreakToken;
};

interface BreakToken {
	readonly childBreakTokens: ReadonlyArray<ChildBreakToken>;
	readonly data: any;
}

declare var BreakToken: {
	prototype: BreakToken;
};

interface BreakTokenOptions {
	childBreakTokens?: ChildBreakToken[];
	data?: any;
}

type BreakType = (
	| "none"
	| "line"
	| "column"
	| "page"
	| "region"
);

interface LayoutEdges {
	readonly inlineStart: number;
	readonly inlineEnd: number;
	readonly blockStart: number;
	readonly blockEnd: number;
	readonly inline: number;
	readonly block: number;
}

declare var LayoutEdges: {
	prototype: LayoutEdges;
};

interface FragmentResultOptions {
	inlineSize?: number;
	blockSize?: number;
	autoBlockSize?: number;
	childFragments?: LayoutFragment[];
	data?: any;
	breakToken?: BreakTokenOptions;
}

interface FragmentResult {
	readonly inlineSize: number;
	readonly blockSize: number;
}

declare var FragmentResult: {
	prototype: FragmentResult;
	new(options?: FragmentResultOptions): FragmentResult;
};

interface IntrinsicSizesResultOptions {
	maxContentSize?: number;
	minContentSize?: number;
}

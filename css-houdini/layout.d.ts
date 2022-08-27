
// CSS Layout API
// Specification: https://drafts.css-houdini.org/css-layout-api-1/
// Repository: https://github.com/w3c/css-houdini-drafts/tree/main/css-layout-api

declare namespace CSS {
	var layoutWorklet: Worklet;
}

declare class LayoutWorkletGlobalScope implements WorkletGlobalScope {
	registerLayout(name: string, layoutCtor: VoidFunction): void;
}

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

declare class LayoutChild {
	readonly styleMap: StylePropertyMapReadOnly;
	intrinsicSizes(): Promise<IntrinsicSizes>;
	layoutNextFragment(constraints: LayoutConstraintsOptions, breakToken: ChildBreakToken): Promise<LayoutFragment>;
}

declare class LayoutFragment {
	readonly inlineSize: number;
	readonly blockSize: number;
	inlineOffset: number;
	blockOffset: number;
	readonly data: any;
	readonly breakToken?: ChildBreakToken | null;
}

declare class IntrinsicSizes {
	readonly minContentSize: number;
	readonly maxContentSize: number;
}

declare class LayoutConstraints {
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

declare class ChildBreakToken {
	readonly breakType: BreakType;
	readonly child: LayoutChild;
}

declare class BreakToken {
	readonly childBreakTokens: ReadonlyArray<ChildBreakToken>;
	readonly data: any;
}

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

declare class LayoutEdges {
	readonly inlineStart: number;
	readonly inlineEnd: number;
	readonly blockStart: number;
	readonly blockEnd: number;
	readonly inline: number;
	readonly block: number;
}

interface FragmentResultOptions {
	inlineSize?: number;
	blockSize?: number;
	autoBlockSize?: number;
	childFragments?: LayoutFragment[];
	data?: any;
	breakToken?: BreakTokenOptions;
}

declare class FragmentResult {
	readonly inlineSize: number;
	readonly blockSize: number;
}

interface IntrinsicSizesResultOptions {
	maxContentSize?: number;
	minContentSize?: number;
}

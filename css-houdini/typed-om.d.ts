
// CSS Typed OM
// Specification: https://drafts.css-houdini.org/css-typed-om-1/
// Repository: https://github.com/w3c/css-houdini-drafts/tree/main/css-typed-om

interface CSSStyleValue { }

declare var CSSStyleValue: {
	prototype: CSSStyleValue;
	parse(property: string, cssText: string): CSSStyleValue;
	parseAll(property: string, cssText: string): CSSStyleValue[];
};

interface StylePropertyMapReadOnly {
	[Symbol.iterator](): IterableIterator<[string, CSSStyleValue[]]>;
	entries(): IterableIterator<[string, CSSStyleValue[]]>;
	keys(): IterableIterator<string>;
	values(): IterableIterator<CSSStyleValue[]>;
	forEach(callbackfn: (value: CSSStyleValue[], key: string, iterable: StylePropertyMapReadOnly) => void, thisArg?: any): void;
	get(property: string): any;
	getAll(property: string): CSSStyleValue[];
	has(property: string): boolean;
	readonly size: number;
}

declare var StylePropertyMapReadOnly: {
	prototype: StylePropertyMapReadOnly;
};

interface StylePropertyMap extends StylePropertyMapReadOnly {
	set(property: string, values: CSSStyleValue | string): void;
	append(property: string, values: CSSStyleValue | string): void;
	delete(property: string): void;
	clear(): void;
}

declare var StylePropertyMap: {
	prototype: StylePropertyMap;
};

interface Element {
	computedStyleMap(): StylePropertyMapReadOnly;
}

interface CSSStyleRule {
	readonly styleMap: StylePropertyMap;
}

interface ElementCSSInlineStyle {
	readonly attributeStyleMap: StylePropertyMap;
}

interface CSSUnparsedValue extends CSSStyleValue {
	[Symbol.iterator](): IterableIterator<CSSUnparsedSegment>;
	entries(): IterableIterator<[number, CSSUnparsedSegment]>;
	keys(): IterableIterator<number>;
	values(): IterableIterator<CSSUnparsedSegment>;
	forEach(callbackfn: (value: CSSUnparsedSegment, index: number, array: CSSUnparsedSegment[]) => void, thisArg?: any): void;
	readonly length: number;
	[index: number]: CSSUnparsedSegment;
}

declare var CSSUnparsedValue: {
	prototype: CSSUnparsedValue;
	new(members: CSSUnparsedSegment[]): CSSUnparsedValue;
};

type CSSUnparsedSegment = string | CSSVariableReferenceValue;

interface CSSVariableReferenceValue {
	variable: string;
	readonly fallback?: CSSUnparsedValue | null;
}

declare var CSSVariableReferenceValue: {
	prototype: CSSVariableReferenceValue;
	new(variable: string, fallback?: CSSUnparsedValue);
};

interface CSSKeywordValue extends CSSStyleValue {
	value: string;
}

declare var CSSKeywordValue: {
	prototype: CSSKeywordValue;
	new(value: string);
};

type CSSKeywordish = string | CSSKeywordValue;

type CSSNumericBaseType = (
	| "length"
	| "angle"
	| "time"
	| "frequency"
	| "resolution"
	| "flex"
	| "percent"
);

interface CSSNumericType {
	length?: number;
	angle?: number;
	time?: number;
	frequency?: number;
	resolution?: number;
	flex?: number;
	percent?: number;
	percentHint?: CSSNumericBaseType;
}

interface CSSNumericValue extends CSSStyleValue {
	add(values: CSSNumberish): CSSNumericValue;
	sub(values: CSSNumberish): CSSNumericValue;
	mul(values: CSSNumberish): CSSNumericValue;
	div(values: CSSNumberish): CSSNumericValue;
	min(values: CSSNumberish): CSSNumericValue;
	max(values: CSSNumberish): CSSNumericValue;
	equals(value: CSSNumberish): boolean;
	to(unit: string): CSSUnitValue;
	toSum(units: string): CSSMathSum;
	type(): CSSNumericType;
}

declare var CSSNumericValue: {
	prototype: CSSNumericValue;
	parse(cssText: string): CSSNumericValue;
};

interface CSSUnitValue extends CSSNumericValue {
	value: number;
	readonly unit: string;
}

declare var CSSUnitValue: {
	prototype: CSSUnitValue;
	new(value: number, unit: string): CSSUnitValue;
};

interface CSSMathValue extends CSSNumericValue {
	readonly operator: CSSMathOperator;
}

declare var CSSMathValue: {
	prototype: CSSMathValue;
};

interface CSSMathSum extends CSSMathValue {
	readonly values: CSSNumericArray;
}

declare var CSSMathSum: {
	prototype: CSSMathSum;
	new(...args: CSSNumberish[]): CSSMathSum;
};

interface CSSMathProduct extends CSSMathValue {
	readonly values: CSSNumericArray;
}

declare var CSSMathProduct: {
	prototype: CSSMathProduct;
	new(...args: CSSNumberish[]): CSSMathProduct;
};

interface CSSMathNegate extends CSSMathValue {
	readonly value: CSSNumericValue;
}

declare var CSSMathNegate: {
	prototype: CSSMathNegate;
	new(arg: CSSNumberish): CSSMathNegate;
};

interface CSSMathInvert extends CSSMathValue {
	readonly value: CSSNumericValue;
}

declare var CSSMathInvert: {
	prototype: CSSMathInvert;
	new(arg: CSSNumberish): CSSMathInvert;
};

interface CSSMathMin extends CSSMathValue {
	readonly values: CSSNumericArray;
}

declare var CSSMathMin: {
	prototype: CSSMathMin;
	new(...args: CSSNumberish[]): CSSMathMin;
};

interface CSSMathMax extends CSSMathValue {
	readonly values: CSSNumericArray;
}

declare var CSSMathMax: {
	prototype: CSSMathMax;
	new(...args: CSSNumberish[]): CSSMathMax;
};

interface CSSMathClamp extends CSSMathValue {
	readonly lower: CSSNumericValue;
	readonly value: CSSNumericValue;
	readonly upper: CSSNumericValue;
}

declare var CSSMathClamp: {
	prototype: CSSMathClamp;
	new(lower: CSSNumberish, value: CSSNumberish, upper: CSSNumberish): CSSMathClamp;
};

interface CSSNumericArray {
	[Symbol.iterator](): IterableIterator<CSSNumericValue>;
	entries(): IterableIterator<[number, CSSNumericValue]>;
	keys(): IterableIterator<number>;
	values(): IterableIterator<CSSNumericValue>;
	forEach(callbackfn: (value: CSSNumericValue, index: number, array: CSSNumericValue[]) => void, thisArg?: any): void;
	readonly length: number;
	readonly [index: number]: CSSNumericValue;
}

declare var CSSNumericArray: {
	prototype: CSSNumericArray;
};

type CSSMathOperator = (
	| "sum"
	| "product"
	| "negate"
	| "invert"
	| "min"
	| "max"
	| "clamp"
);

declare namespace CSS {
	function number(value: number): CSSUnitValue;
	function percent(value: number): CSSUnitValue;

	// <length>
	function em(value: number): CSSUnitValue;
	function ex(value: number): CSSUnitValue;
	function ch(value: number): CSSUnitValue;
	function ic(value: number): CSSUnitValue;
	function rem(value: number): CSSUnitValue;
	function lh(value: number): CSSUnitValue;
	function rlh(value: number): CSSUnitValue;
	function vw(value: number): CSSUnitValue;
	function vh(value: number): CSSUnitValue;
	function vi(value: number): CSSUnitValue;
	function vb(value: number): CSSUnitValue;
	function vmin(value: number): CSSUnitValue;
	function vmax(value: number): CSSUnitValue;
	function svw(value: number): CSSUnitValue;
	function svh(value: number): CSSUnitValue;
	function svi(value: number): CSSUnitValue;
	function svb(value: number): CSSUnitValue;
	function svmin(value: number): CSSUnitValue;
	function svmax(value: number): CSSUnitValue;
	function lvw(value: number): CSSUnitValue;
	function lvh(value: number): CSSUnitValue;
	function lvi(value: number): CSSUnitValue;
	function lvb(value: number): CSSUnitValue;
	function lvmin(value: number): CSSUnitValue;
	function lvmax(value: number): CSSUnitValue;
	function dvw(value: number): CSSUnitValue;
	function dvh(value: number): CSSUnitValue;
	function dvi(value: number): CSSUnitValue;
	function dvb(value: number): CSSUnitValue;
	function dvmin(value: number): CSSUnitValue;
	function dvmax(value: number): CSSUnitValue;
	function cqw(value: number): CSSUnitValue;
	function cqh(value: number): CSSUnitValue;
	function cqi(value: number): CSSUnitValue;
	function cqb(value: number): CSSUnitValue;
	function cqmin(value: number): CSSUnitValue;
	function cqmax(value: number): CSSUnitValue;
	function cm(value: number): CSSUnitValue;
	function mm(value: number): CSSUnitValue;
	function Q(value: number): CSSUnitValue;
	// function in(value: number): CSSUnitValue; // "in" is a keyword in JavaScript; TypeScript won't let me declare this function
	function pt(value: number): CSSUnitValue;
	function pc(value: number): CSSUnitValue;
	function px(value: number): CSSUnitValue;

	// <angle>
	function deg(value: number): CSSUnitValue;
	function grad(value: number): CSSUnitValue;
	function rad(value: number): CSSUnitValue;
	function turn(value: number): CSSUnitValue;

	// <time>
	function s(value: number): CSSUnitValue;
	function ms(value: number): CSSUnitValue;

	// <frequency>
	function Hz(value: number): CSSUnitValue;
	function kHz(value: number): CSSUnitValue;

	// <resolution>
	function dpi(value: number): CSSUnitValue;
	function dpcm(value: number): CSSUnitValue;
	function dppx(value: number): CSSUnitValue;

	// <flex>
	function fr(value: number): CSSUnitValue;
}

interface CSSTransformValue extends CSSStyleValue {
	[Symbol.iterator](): IterableIterator<CSSTransformComponent>;
	entries(): IterableIterator<[number, CSSTransformComponent]>;
	keys(): IterableIterator<number>;
	values(): IterableIterator<CSSTransformComponent>;
	forEach(callbackfn: (value: CSSTransformComponent, index: number, array: CSSTransformComponent[]) => void, thisArg?: any): void;
	readonly length: number;
	[index: number]: CSSTransformComponent;
	readonly is2D: boolean;
	toMatrix(): DOMMatrix;
}

declare var CSSTransformValue: {
	prototype: CSSTransformValue;
	new(transforms: Array<CSSTransformComponent>): CSSTransformValue;
};

type CSSPerspectiveValue = CSSNumericValue | CSSKeywordish;

interface CSSTransformComponent {
	is2D: boolean;
	toMatrix(): DOMMatrix;
}

declare var CSSTransformComponent: {
	prototype: CSSTransformComponent;
};

interface CSSTranslate extends CSSTransformComponent {
	x: CSSNumericValue;
	y: CSSNumericValue;
	z: CSSNumericValue;
}

declare var CSSTranslate: {
	prototype: CSSTranslate;
	new(x: CSSNumericValue, y: CSSNumericValue, z?: CSSNumericValue): CSSTranslate;
};

interface CSSRotate extends CSSTransformComponent {
	x: CSSNumberish;
	y: CSSNumberish;
	z: CSSNumberish;
	angle: CSSNumericValue;
}

declare var CSSRotate: {
	prototype: CSSRotate;
	new(angle: CSSNumericValue): CSSRotate;
	new(x: CSSNumberish, y: CSSNumberish, z: CSSNumberish, angle: CSSNumericValue): CSSRotate;
};

interface CSSScale extends CSSTransformComponent {
	x: CSSNumberish;
	y: CSSNumberish;
	z: CSSNumberish;
}

declare var CSSScale: {
	prototype: CSSScale;
	new(x: CSSNumberish, y: CSSNumberish, z?: CSSNumberish): CSSScale;
};

interface CSSSkew extends CSSTransformComponent {
	ax: CSSNumericValue;
	ay: CSSNumericValue;
}

declare var CSSSkew: {
	prototype: CSSSkew;
	new(ax: CSSNumericValue, ay: CSSNumericValue): CSSSkew;
};

interface CSSSkewX extends CSSTransformComponent {
	ax: CSSNumericValue;
}

declare var CSSSkewX: {
	prototype: CSSSkewX;
	new(ax: CSSNumericValue): CSSSkewX;
};

interface CSSSkewY extends CSSTransformComponent {
	ay: CSSNumericValue;
}

declare var CSSSkewY: {
	prototype: CSSSkewY;
	new(ay: CSSNumericValue): CSSSkewY;
};

interface CSSPerspective extends CSSTransformComponent {
	length: CSSPerspectiveValue;
}

declare var CSSPerspective: {
	prototype: CSSPerspective;
	new(length: CSSPerspectiveValue): CSSPerspective;
};

interface CSSMatrixComponent extends CSSTransformComponent {
	matrix: DOMMatrix;
}

declare var CSSMatrixComponent: {
	prototype: CSSMatrixComponent;
	new(matrix: DOMMatrixReadOnly, options?: CSSMatrixComponentOptions): CSSMatrixComponent;
};

interface CSSMatrixComponentOptions {
	is2D?: boolean;
}

interface CSSImageValue extends CSSStyleValue { }

declare var CSSImageValue: {
	prototype: CSSImageValue;
};

interface CSSColorValue extends CSSStyleValue { }

declare var CSSColorValue: {
	prototype: CSSColorValue;
	parse(cssText: string): CSSColorValue | CSSStyleValue;
};

type CSSColorRGBComp = CSSNumberish | CSSKeywordish;

type CSSColorPercent = CSSNumberish | CSSKeywordish;

type CSSColorNumber = CSSNumberish | CSSKeywordish;

type CSSColorAngle = CSSNumberish | CSSKeywordish;

interface CSSRGB extends CSSColorValue {
	r: CSSColorRGBComp;
	g: CSSColorRGBComp;
	b: CSSColorRGBComp;
	alpha: CSSColorPercent;
}

declare var CSSRGB: {
	prototype: CSSRGB;
	new(r: CSSColorRGBComp, g: CSSColorRGBComp, b: CSSColorRGBComp, alpha?: CSSColorPercent): CSSRGB;
};

interface CSSHSL extends CSSColorValue {
	h: CSSColorAngle;
	s: CSSColorPercent;
	l: CSSColorPercent;
	alpha: CSSColorPercent;
}

declare var CSSHSL: {
	prototype: CSSHSL;
	new(h: CSSColorAngle, s: CSSColorPercent, l: CSSColorPercent, alpha?: CSSColorPercent): CSSHSL;
};

interface CSSHWB extends CSSColorValue {
	h: CSSNumericValue;
	w: CSSNumberish;
	b: CSSNumberish;
	alpha: CSSNumberish;
}

declare var CSSHWB: {
	prototype: CSSHWB;
	new(h: CSSNumericValue, w: CSSNumberish, b: CSSNumberish, alpha?: CSSNumberish): CSSHWB;
};

interface CSSLab extends CSSColorValue {
	l: CSSColorPercent;
	a: CSSColorNumber;
	b: CSSColorNumber;
	alpha: CSSColorPercent;
}

declare var CSSLab: {
	prototype: CSSLab;
	new(l: CSSColorPercent, a: CSSColorNumber, b: CSSColorNumber, alpha?: CSSColorPercent): CSSLab;
};

interface CSSLCH extends CSSColorValue {
	l: CSSColorPercent;
	c: CSSColorPercent;
	h: CSSColorAngle;
	alpha: CSSColorPercent;
}

declare var CSSLCH: {
	prototype: CSSLCH;
	new(l: CSSColorPercent, c: CSSColorPercent, h: CSSColorAngle, alpha?: CSSColorPercent): CSSLCH;
};

interface CSSOKLab extends CSSColorValue {
	l: CSSColorPercent;
	a: CSSColorNumber;
	b: CSSColorNumber;
	alpha: CSSColorPercent;
}

declare var CSSOKLab: {
	prototype: CSSOKLab;
	new(l: CSSColorPercent, a: CSSColorNumber, b: CSSColorNumber, alpha?: CSSColorPercent): CSSOKLab;
};

interface CSSOKLCH extends CSSColorValue {
	l: CSSColorPercent;
	c: CSSColorPercent;
	h: CSSColorAngle;
	alpha: CSSColorPercent;
}

declare var CSSOKLCH: {
	prototype: CSSOKLCH;
	new(l: CSSColorPercent, c: CSSColorPercent, h: CSSColorAngle, alpha?: CSSColorPercent): CSSOKLCH;
};

interface CSSColor extends CSSColorValue {
	colorSpace: CSSKeywordish;
	channels: CSSColorPercent[];
	alpha: CSSNumberish;
}

declare var CSSColor: {
	prototype: CSSColor;
	new(colorSpace: CSSKeywordish, channels: Array<CSSColorPercent>, alpha?: CSSNumberish): CSSColor;
};

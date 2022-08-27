
// CSS Typed OM
// Specification: https://drafts.css-houdini.org/css-typed-om-1/
// Repository: https://github.com/w3c/css-houdini-drafts/tree/main/css-typed-om

declare class CSSStyleValue {
	static parse(property: string, cssText: string): CSSStyleValue;
	static parseAll(property: string, cssText: string): CSSStyleValue[];
}

declare class StylePropertyMapReadOnly {
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

declare class StylePropertyMap extends StylePropertyMapReadOnly {
	set(property: string, values: CSSStyleValue | string): void;
	append(property: string, values: CSSStyleValue | string): void;
	delete(property: string): void;
	clear(): void;
}

interface Element {
	computedStyleMap(): StylePropertyMapReadOnly;
}

interface CSSStyleRule {
	readonly styleMap: StylePropertyMap;
}

interface ElementCSSInlineStyle {
	readonly attributeStyleMap: StylePropertyMap;
}

declare class CSSUnparsedValue extends CSSStyleValue {
	constructor(members: CSSUnparsedSegment[]);
	[Symbol.iterator](): IterableIterator<CSSUnparsedSegment>;
	entries(): IterableIterator<[number, CSSUnparsedSegment]>;
	keys(): IterableIterator<number>;
	values(): IterableIterator<CSSUnparsedSegment>;
	forEach(callbackfn: (value: CSSUnparsedSegment, index: number, array: CSSUnparsedSegment[]) => void, thisArg?: any): void;
	readonly length: number;
	[index: number]: CSSUnparsedSegment;
}

type CSSUnparsedSegment = string | CSSVariableReferenceValue;

declare class CSSVariableReferenceValue {
	constructor(variable: string, fallback?: CSSUnparsedValue);
	variable: string;
	readonly fallback?: CSSUnparsedValue | null;
}

declare class CSSKeywordValue extends CSSStyleValue {
	constructor(value: string);
	value: string;
}

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

declare class CSSNumericValue extends CSSStyleValue {
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
	static parse(cssText: string): CSSNumericValue;
}

declare class CSSUnitValue extends CSSNumericValue {
	constructor(value: number, unit: string);
	value: number;
	readonly unit: string;
}

declare class CSSMathValue extends CSSNumericValue {
	readonly operator: CSSMathOperator;
}

declare class CSSMathSum extends CSSMathValue {
	constructor(...args: CSSNumberish[]);
	readonly values: CSSNumericArray;
}

declare class CSSMathProduct extends CSSMathValue {
	constructor(...args: CSSNumberish[]);
	readonly values: CSSNumericArray;
}

declare class CSSMathNegate extends CSSMathValue {
	constructor(arg: CSSNumberish);
	readonly value: CSSNumericValue;
}

declare class CSSMathInvert extends CSSMathValue {
	constructor(arg: CSSNumberish);
	readonly value: CSSNumericValue;
}

declare class CSSMathMin extends CSSMathValue {
	constructor(...args: CSSNumberish[]);
	readonly values: CSSNumericArray;
}

declare class CSSMathMax extends CSSMathValue {
	constructor(...args: CSSNumberish[]);
	readonly values: CSSNumericArray;
}

declare class CSSMathClamp extends CSSMathValue {
	constructor(lower: CSSNumberish, value: CSSNumberish, upper: CSSNumberish);
	readonly lower: CSSNumericValue;
	readonly value: CSSNumericValue;
	readonly upper: CSSNumericValue;
}

declare class CSSNumericArray {
	[Symbol.iterator](): IterableIterator<CSSNumericValue>;
	entries(): IterableIterator<[number, CSSNumericValue]>;
	keys(): IterableIterator<number>;
	values(): IterableIterator<CSSNumericValue>;
	forEach(callbackfn: (value: CSSNumericValue, index: number, array: CSSNumericValue[]) => void, thisArg?: any): void;
	readonly length: number;
	readonly [index: number]: CSSNumericValue;
}

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

declare namespace CSS {
	function _in(value: number): CSSUnitValue;
	export { _in as in };
}

declare class CSSTransformValue extends CSSStyleValue {
	constructor(transforms: Array<CSSTransformComponent>);
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

type CSSPerspectiveValue = CSSNumericValue | CSSKeywordish;

declare class CSSTransformComponent {
	is2D: boolean;
	toMatrix(): DOMMatrix;
}

declare class CSSTranslate extends CSSTransformComponent {
	constructor(x: CSSNumericValue, y: CSSNumericValue, z?: CSSNumericValue);
	x: CSSNumericValue;
	y: CSSNumericValue;
	z: CSSNumericValue;
}

declare class CSSRotate extends CSSTransformComponent {
	constructor(angle: CSSNumericValue);
	constructor(x: CSSNumberish, y: CSSNumberish, z: CSSNumberish, angle: CSSNumericValue);
	x: CSSNumberish;
	y: CSSNumberish;
	z: CSSNumberish;
	angle: CSSNumericValue;
}

declare class CSSScale extends CSSTransformComponent {
	constructor(x: CSSNumberish, y: CSSNumberish, z?: CSSNumberish);
	x: CSSNumberish;
	y: CSSNumberish;
	z: CSSNumberish;
}

declare class CSSSkew extends CSSTransformComponent {
	constructor(ax: CSSNumericValue, ay: CSSNumericValue);
	ax: CSSNumericValue;
	ay: CSSNumericValue;
}

declare class CSSSkewX extends CSSTransformComponent {
	constructor(ax: CSSNumericValue);
	ax: CSSNumericValue;
}

declare class CSSSkewY extends CSSTransformComponent {
	constructor(ay: CSSNumericValue);
	ay: CSSNumericValue;
}

declare class CSSPerspective extends CSSTransformComponent {
	constructor(length: CSSPerspectiveValue);
	length: CSSPerspectiveValue;
}

declare class CSSMatrixComponent extends CSSTransformComponent {
	constructor(matrix: DOMMatrixReadOnly, options?: CSSMatrixComponentOptions);
	matrix: DOMMatrix;
}

interface CSSMatrixComponentOptions {
	is2D?: boolean;
}

declare class CSSImageValue extends CSSStyleValue { }

declare class CSSColorValue extends CSSStyleValue {
	static parse(cssText: string): CSSColorValue | CSSStyleValue;
}

type CSSColorRGBComp = CSSNumberish | CSSKeywordish;

type CSSColorPercent = CSSNumberish | CSSKeywordish;

type CSSColorNumber = CSSNumberish | CSSKeywordish;

type CSSColorAngle = CSSNumberish | CSSKeywordish;

declare class CSSRGB extends CSSColorValue {
	constructor(r: CSSColorRGBComp, g: CSSColorRGBComp, b: CSSColorRGBComp, alpha?: CSSColorPercent);
	r: CSSColorRGBComp;
	g: CSSColorRGBComp;
	b: CSSColorRGBComp;
	alpha: CSSColorPercent;
}

declare class CSSHSL extends CSSColorValue {
	constructor(h: CSSColorAngle, s: CSSColorPercent, l: CSSColorPercent, alpha?: CSSColorPercent);
	h: CSSColorAngle;
	s: CSSColorPercent;
	l: CSSColorPercent;
	alpha: CSSColorPercent;
}

declare class CSSHWB extends CSSColorValue {
	constructor(h: CSSNumericValue, w: CSSNumberish, b: CSSNumberish, alpha?: CSSNumberish);
	h: CSSNumericValue;
	w: CSSNumberish;
	b: CSSNumberish;
	alpha: CSSNumberish;
}

declare class CSSLab extends CSSColorValue {
	constructor(l: CSSColorPercent, a: CSSColorNumber, b: CSSColorNumber, alpha?: CSSColorPercent);
	l: CSSColorPercent;
	a: CSSColorNumber;
	b: CSSColorNumber;
	alpha: CSSColorPercent;
}

declare class CSSLCH extends CSSColorValue {
	constructor(l: CSSColorPercent, c: CSSColorPercent, h: CSSColorAngle, alpha?: CSSColorPercent);
	l: CSSColorPercent;
	c: CSSColorPercent;
	h: CSSColorAngle;
	alpha: CSSColorPercent;
}

declare class CSSOKLab extends CSSColorValue {
	constructor(l: CSSColorPercent, a: CSSColorNumber, b: CSSColorNumber, alpha?: CSSColorPercent);
	l: CSSColorPercent;
	a: CSSColorNumber;
	b: CSSColorNumber;
	alpha: CSSColorPercent;
}

declare class CSSOKLCH extends CSSColorValue {
	constructor(l: CSSColorPercent, c: CSSColorPercent, h: CSSColorAngle, alpha?: CSSColorPercent);
	l: CSSColorPercent;
	c: CSSColorPercent;
	h: CSSColorAngle;
	alpha: CSSColorPercent;
}

declare class CSSColor extends CSSColorValue {
	constructor(colorSpace: CSSKeywordish, channels: Array<CSSColorPercent>, alpha?: CSSNumberish);
	colorSpace: CSSKeywordish;
	channels: CSSColorPercent[];
	alpha: CSSNumberish;
}

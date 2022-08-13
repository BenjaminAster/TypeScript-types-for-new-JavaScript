
// URLPattern API
// Specification: https://wicg.github.io/urlpattern/
// Repository: https://github.com/WICG/urlpattern

type URLPatternInput = URLPatternInit | string;

interface URLPattern {
	test(input?: URLPatternInput, baseURL?: string): boolean;
	exec(input?: URLPatternInput, baseURL?: string): URLPatternResult | null;
	readonly protocol: string;
	readonly username: string;
	readonly password: string;
	readonly hostname: string;
	readonly port: string;
	readonly pathname: string;
	readonly search: string;
	readonly hash: string;
}

declare var URLPattern: {
	prototype: URLPattern;
	new(input?: URLPatternInput, baseURL?: string);
};

interface URLPatternInit {
	protocol: string;
	username: string;
	password: string;
	hostname: string;
	port: string;
	pathname: string;
	search: string;
	hash: string;
	baseURL: string;
}

interface URLPatternResult {
	inputs: URLPatternInput[];
	protocol: URLPatternComponentResult;
	username: URLPatternComponentResult;
	password: URLPatternComponentResult;
	hostname: URLPatternComponentResult;
	port: URLPatternComponentResult;
	pathname: URLPatternComponentResult;
	search: URLPatternComponentResult;
	hash: URLPatternComponentResult;
}

interface URLPatternComponentResult {
	input: string;
	groups: Record<string, string | undefined>;
}

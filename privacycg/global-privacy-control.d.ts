
// Global Privacy Control (GPC)
// Specification: https://privacycg.github.io/gpc-spec/
// Repository: https://github.com/privacycg/gpc-spec

interface GlobalPrivacyControl {
	globalPrivacyControl: boolean;
}

interface Navigator extends GlobalPrivacyControl { }

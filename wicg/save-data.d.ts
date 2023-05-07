
// Save Data API
// Specification: https://wicg.github.io/savedata/
// Repository: https://github.com/WICG/savedata

/// <reference path="./netinfo.d.ts" />

interface NetworkInformationSaveData {
	readonly saveData: boolean;
}

interface NetworkInformation extends NetworkInformationSaveData { }

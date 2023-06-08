
// Long Tasks API
// Specification: https://w3c.github.io/longtasks/
// Repository: https://github.com/w3c/longtasks

interface PerformanceLongTaskTiming extends PerformanceEntry {
	readonly attribution: ReadonlyArray<TaskAttributionTiming>;
	toJSON(): any;
}

declare var PerformanceLongTaskTiming: {
	prototype: PerformanceLongTaskTiming;
}


interface TaskAttributionTiming extends PerformanceEntry {
	readonly containerType: string;
	readonly containerSrc: string;
	readonly containerId: string;
	readonly containerName: string;
	toJSON(): any;
}

declare var TaskAttributionTiming: {
	prototype: TaskAttributionTiming;
}

declare namespace sun {
    namespace management {
        class VMManagementImpl implements sun.management.VMManagement {
            public isCompilationTimeMonitoringSupported(): boolean
            public isThreadContentionMonitoringSupported(): boolean
            public isCurrentThreadCpuTimeSupported(): boolean
            public isOtherThreadCpuTimeSupported(): boolean
            public isBootClassPathSupported(): boolean
            public isObjectMonitorUsageSupported(): boolean
            public isSynchronizerUsageSupported(): boolean
            public isThreadAllocatedMemorySupported(): boolean
            public isGcNotificationSupported(): boolean
            public isRemoteDiagnosticCommandsSupported(): boolean
            public isThreadContentionMonitoringEnabled(): boolean
            public isThreadCpuTimeEnabled(): boolean
            public isThreadAllocatedMemoryEnabled(): boolean
            public getLoadedClassCount(): int
            public getTotalClassCount(): long
            public getUnloadedClassCount(): long
            public getVerboseClass(): boolean
            public getVerboseGC(): boolean
            public getManagementVersion(): string
            public getVmId(): string
            public getVmName(): string
            public getVmVendor(): string
            public getVmVersion(): string
            public getVmSpecName(): string
            public getVmSpecVendor(): string
            public getVmSpecVersion(): string
            public getClassPath(): string
            public getLibraryPath(): string
            public getBootClassPath(): string
            public getUptime(): long
            public getVmArguments(): java.util.List<java.lang.String>
            public getVmArguments0(): java.lang.String[]
            public getStartupTime(): long
            public getAvailableProcessors(): int
            public getCompilerName(): string
            public getTotalCompileTime(): long
            public getTotalThreadCount(): long
            public getLiveThreadCount(): int
            public getPeakThreadCount(): int
            public getDaemonThreadCount(): int
            public getOsName(): string
            public getOsArch(): string
            public getOsVersion(): string
            public getSafepointCount(): long
            public getTotalSafepointTime(): long
            public getSafepointSyncTime(): long
            public getTotalApplicationNonStoppedTime(): long
            public getLoadedClassSize(): long
            public getUnloadedClassSize(): long
            public getClassLoadingTime(): long
            public getMethodDataSize(): long
            public getInitializedClassCount(): long
            public getClassInitializationTime(): long
            public getClassVerificationTime(): long
            public getInternalCounters(arg0: java.lang.String | string): java.util.List<sun.management.counter.Counter>
            public static class: java.lang.Class<any>
        }
    }
}
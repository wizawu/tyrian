declare namespace sun {
    namespace management {
        interface VMManagement {
            isCompilationTimeMonitoringSupported(): boolean
            isThreadContentionMonitoringSupported(): boolean
            isThreadContentionMonitoringEnabled(): boolean
            isCurrentThreadCpuTimeSupported(): boolean
            isOtherThreadCpuTimeSupported(): boolean
            isThreadCpuTimeEnabled(): boolean
            isBootClassPathSupported(): boolean
            isObjectMonitorUsageSupported(): boolean
            isSynchronizerUsageSupported(): boolean
            isThreadAllocatedMemorySupported(): boolean
            isThreadAllocatedMemoryEnabled(): boolean
            isGcNotificationSupported(): boolean
            isRemoteDiagnosticCommandsSupported(): boolean
            getTotalClassCount(): long
            getLoadedClassCount(): int
            getUnloadedClassCount(): long
            getVerboseClass(): boolean
            getVerboseGC(): boolean
            getManagementVersion(): string
            getVmId(): string
            getVmName(): string
            getVmVendor(): string
            getVmVersion(): string
            getVmSpecName(): string
            getVmSpecVendor(): string
            getVmSpecVersion(): string
            getClassPath(): string
            getLibraryPath(): string
            getBootClassPath(): string
            getVmArguments(): java.util.List<java.lang.String>
            getStartupTime(): long
            getUptime(): long
            getAvailableProcessors(): int
            getCompilerName(): string
            getTotalCompileTime(): long
            getTotalThreadCount(): long
            getLiveThreadCount(): int
            getPeakThreadCount(): int
            getDaemonThreadCount(): int
            getOsName(): string
            getOsArch(): string
            getOsVersion(): string
            getSafepointCount(): long
            getTotalSafepointTime(): long
            getSafepointSyncTime(): long
            getTotalApplicationNonStoppedTime(): long
            getLoadedClassSize(): long
            getUnloadedClassSize(): long
            getClassLoadingTime(): long
            getMethodDataSize(): long
            getInitializedClassCount(): long
            getClassInitializationTime(): long
            getClassVerificationTime(): long
            getInternalCounters(arg0: java.lang.String | string): java.util.List<sun.management.counter.Counter>
        }
    }
}
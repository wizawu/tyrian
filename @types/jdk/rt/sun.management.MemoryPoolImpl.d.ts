declare namespace sun {
    namespace management {
        class MemoryPoolImpl implements java.lang.management.MemoryPoolMXBean {
            public getName(): string
            public isValid(): boolean
            public getType(): java.lang.management.MemoryType
            public getUsage(): java.lang.management.MemoryUsage
            public getPeakUsage(): java.lang.management.MemoryUsage
            public getUsageThreshold(): long
            public setUsageThreshold(arg0: long): void
            public getMemoryManagerNames(): java.lang.String[]
            public resetPeakUsage(): void
            public isUsageThresholdExceeded(): boolean
            public getUsageThresholdCount(): long
            public isUsageThresholdSupported(): boolean
            public getCollectionUsageThreshold(): long
            public setCollectionUsageThreshold(arg0: long): void
            public isCollectionUsageThresholdExceeded(): boolean
            public getCollectionUsageThresholdCount(): long
            public getCollectionUsage(): java.lang.management.MemoryUsage
            public isCollectionUsageThresholdSupported(): boolean
            public getObjectName(): javax.management.ObjectName
            public static class: java.lang.Class<any>
        }
    }
}
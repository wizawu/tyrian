declare namespace com {
    namespace ibm {
        namespace java {
            namespace lang {
                namespace management {
                    namespace internal {
                        class MemoryPoolMXBeanImpl implements java.lang.management.MemoryPoolMXBean {
                            protected constructor(arg0: java.lang.String | string, arg1: java.lang.management.MemoryType, arg2: int, arg3: com.ibm.java.lang.management.internal.MemoryMXBeanImpl)
                            public getCollectionUsage(): java.lang.management.MemoryUsage
                            public getPreCollectionUsage(): java.lang.management.MemoryUsage
                            public getCollectionUsageThreshold(): long
                            public getCollectionUsageThresholdCount(): long
                            public getMemoryManagerNames(): java.lang.String[]
                            public getName(): string
                            public getPeakUsage(): java.lang.management.MemoryUsage
                            public getType(): java.lang.management.MemoryType
                            public getUsage(): java.lang.management.MemoryUsage
                            public getUsageThreshold(): long
                            public getUsageThresholdCount(): long
                            public isCollectionUsageThresholdExceeded(): boolean
                            public isCollectionUsageThresholdSupported(): boolean
                            public isUsageThresholdExceeded(): boolean
                            public isUsageThresholdSupported(): boolean
                            public isValid(): boolean
                            public resetPeakUsage(): void
                            public setCollectionUsageThreshold(arg0: long): void
                            public setUsageThreshold(arg0: long): void
                            public getObjectName(): javax.management.ObjectName
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}
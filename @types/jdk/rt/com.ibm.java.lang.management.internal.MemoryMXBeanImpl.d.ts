declare namespace com {
    namespace ibm {
        namespace java {
            namespace lang {
                namespace management {
                    namespace internal {
                        class MemoryMXBeanImpl implements java.lang.management.MemoryMXBean , javax.management.NotificationEmitter {
                            protected constructor()
                            public static getInstance(): com.ibm.java.lang.management.internal.MemoryMXBeanImpl
                            protected makeGCBean(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: int): java.lang.management.GarbageCollectorMXBean
                            public getMemoryManagerMXBeans(arg0: boolean): java.util.List<java.lang.management.MemoryManagerMXBean>
                            public getGarbageCollectorMXBeans(): java.util.List<java.lang.management.GarbageCollectorMXBean>
                            protected makeMemoryPoolBean(arg0: java.lang.String | string, arg1: java.lang.management.MemoryType, arg2: int): java.lang.management.MemoryPoolMXBean
                            public getMemoryPoolMXBeans(arg0: boolean): java.util.List<java.lang.management.MemoryPoolMXBean>
                            public gc(): void
                            public getHeapMemoryUsage(): java.lang.management.MemoryUsage
                            public getNonHeapMemoryUsage(): java.lang.management.MemoryUsage
                            public getObjectPendingFinalizationCount(): int
                            public isVerbose(): boolean
                            public setVerbose(arg0: boolean): void
                            public getMaxHeapSizeLimit(): long
                            public getMaxHeapSize(): long
                            public getMinHeapSize(): long
                            public setMaxHeapSize(arg0: long): void
                            public isSetMaxHeapSizeSupported(): boolean
                            public removeNotificationListener(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
                            public addNotificationListener(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
                            public removeNotificationListener(arg0: javax.management.NotificationListener): void
                            public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
                            public sendNotification(arg0: javax.management.Notification): void
                            public getSharedClassCacheSize(): long
                            public getSharedClassCacheSoftmxBytes(): long
                            public getSharedClassCacheMinAotBytes(): long
                            public getSharedClassCacheMaxAotBytes(): long
                            public getSharedClassCacheMinJitDataBytes(): long
                            public getSharedClassCacheMaxJitDataBytes(): long
                            public setSharedClassCacheSoftmxBytes(arg0: long): boolean
                            public setSharedClassCacheMinAotBytes(arg0: long): boolean
                            public setSharedClassCacheMaxAotBytes(arg0: long): boolean
                            public setSharedClassCacheMinJitDataBytes(arg0: long): boolean
                            public setSharedClassCacheMaxJitDataBytes(arg0: long): boolean
                            public getSharedClassCacheSoftmxUnstoredBytes(): long
                            public getSharedClassCacheMaxAotUnstoredBytes(): long
                            public getSharedClassCacheMaxJitDataUnstoredBytes(): long
                            public getSharedClassCacheFreeSpace(): long
                            public getGCMode(): string
                            public getGCMasterThreadCpuUsed(): long
                            public getGCSlaveThreadsCpuUsed(): long
                            public getMaximumGCThreads(): int
                            public getCurrentGCThreads(): int
                            public getObjectName(): javax.management.ObjectName
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}
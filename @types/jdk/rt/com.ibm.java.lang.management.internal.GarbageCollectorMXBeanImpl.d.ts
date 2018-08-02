declare namespace com {
    namespace ibm {
        namespace java {
            namespace lang {
                namespace management {
                    namespace internal {
                        class GarbageCollectorMXBeanImpl extends com.ibm.java.lang.management.internal.MemoryManagerMXBeanImpl implements java.lang.management.GarbageCollectorMXBean , javax.management.NotificationEmitter {
                            protected constructor(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: int, arg3: com.ibm.java.lang.management.internal.MemoryMXBeanImpl)
                            public getCollectionCount(): long
                            public getCollectionTime(): long
                            public getLastCollectionStartTime(): long
                            public getLastCollectionEndTime(): long
                            public getMemoryUsed(): long
                            public getTotalMemoryFreed(): long
                            public getTotalCompacts(): long
                            public getAllocatedHeapSizeTarget(): long
                            public setAllocatedHeapSizeTarget(arg0: long): void
                            public getStrategy(): string
                            public removeNotificationListener(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
                            public addNotificationListener(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
                            public removeNotificationListener(arg0: javax.management.NotificationListener): void
                            public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
                            public sendNotification(arg0: javax.management.Notification): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}
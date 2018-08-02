declare namespace sun {
    namespace management {
        class MemoryImpl extends sun.management.NotificationEmitterSupport implements java.lang.management.MemoryMXBean {
            public getObjectPendingFinalizationCount(): int
            public gc(): void
            public getHeapMemoryUsage(): java.lang.management.MemoryUsage
            public getNonHeapMemoryUsage(): java.lang.management.MemoryUsage
            public isVerbose(): boolean
            public setVerbose(arg0: boolean): void
            public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
            public getObjectName(): javax.management.ObjectName
            public static class: java.lang.Class<any>
        }
    }
}
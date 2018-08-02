declare namespace sun {
    namespace management {
        class MemoryManagerImpl extends sun.management.NotificationEmitterSupport implements java.lang.management.MemoryManagerMXBean {
            public getName(): string
            public isValid(): boolean
            public getMemoryPoolNames(): java.lang.String[]
            public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
            public getObjectName(): javax.management.ObjectName
            public static class: java.lang.Class<any>
        }
    }
}
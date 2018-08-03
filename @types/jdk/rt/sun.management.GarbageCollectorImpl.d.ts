declare namespace sun {
    namespace management {
        class GarbageCollectorImpl extends sun.management.MemoryManagerImpl implements com.sun.management.GarbageCollectorMXBean {
            public getCollectionCount(): long
            public getCollectionTime(): long
            public getLastGcInfo(): com.sun.management.GcInfo
            public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
            public addNotificationListener(arg0: javax.management.NotificationListener | javax.management.NotificationListener$$Lambda, arg1: javax.management.NotificationFilter | javax.management.NotificationFilter$$Lambda, arg2: java.lang.Object): void
            public removeNotificationListener(arg0: javax.management.NotificationListener | javax.management.NotificationListener$$Lambda): void
            public removeNotificationListener(arg0: javax.management.NotificationListener | javax.management.NotificationListener$$Lambda, arg1: javax.management.NotificationFilter | javax.management.NotificationFilter$$Lambda, arg2: java.lang.Object): void
            public getObjectName(): javax.management.ObjectName
            public static class: java.lang.Class<any>
        }
    }
}
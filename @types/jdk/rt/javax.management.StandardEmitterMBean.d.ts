declare namespace javax {
    namespace management {
        class StandardEmitterMBean extends javax.management.StandardMBean implements javax.management.NotificationEmitter {
            public constructor(arg0: T, arg1: java.lang.Class<T>, arg2: javax.management.NotificationEmitter)
            public constructor(arg0: T, arg1: java.lang.Class<T>, arg2: boolean, arg3: javax.management.NotificationEmitter)
            protected constructor(arg0: java.lang.Class<any>, arg1: javax.management.NotificationEmitter)
            protected constructor(arg0: java.lang.Class<any>, arg1: boolean, arg2: javax.management.NotificationEmitter)
            public removeNotificationListener<T>(arg0: javax.management.NotificationListener): void
            public removeNotificationListener<T>(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
            public addNotificationListener<T>(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
            public getNotificationInfo<T>(): javax.management.MBeanNotificationInfo[]
            public sendNotification<T>(arg0: javax.management.Notification): void
            public static class: java.lang.Class<any>
        }
    }
}
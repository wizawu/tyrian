declare namespace javax {
    namespace management {
        class StandardEmitterMBean extends javax.management.StandardMBean implements javax.management.NotificationEmitter {
            public constructor(arg0: T, arg1: java.lang.Class<T>, arg2: javax.management.NotificationEmitter | javax.management.NotificationEmitter$$Lambda)
            public constructor(arg0: T, arg1: java.lang.Class<T>, arg2: boolean, arg3: javax.management.NotificationEmitter | javax.management.NotificationEmitter$$Lambda)
            protected constructor(arg0: java.lang.Class<any>, arg1: javax.management.NotificationEmitter | javax.management.NotificationEmitter$$Lambda)
            protected constructor(arg0: java.lang.Class<any>, arg1: boolean, arg2: javax.management.NotificationEmitter | javax.management.NotificationEmitter$$Lambda)
            public removeNotificationListener<T>(arg0: javax.management.NotificationListener | javax.management.NotificationListener$$Lambda): void
            public removeNotificationListener<T>(arg0: javax.management.NotificationListener | javax.management.NotificationListener$$Lambda, arg1: javax.management.NotificationFilter | javax.management.NotificationFilter$$Lambda, arg2: java.lang.Object): void
            public addNotificationListener<T>(arg0: javax.management.NotificationListener | javax.management.NotificationListener$$Lambda, arg1: javax.management.NotificationFilter | javax.management.NotificationFilter$$Lambda, arg2: java.lang.Object): void
            public getNotificationInfo<T>(): javax.management.MBeanNotificationInfo[]
            public sendNotification<T>(arg0: javax.management.Notification): void
            public static class: java.lang.Class<any>
        }
    }
}
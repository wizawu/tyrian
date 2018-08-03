declare namespace javax {
    namespace management {
        class NotificationBroadcasterSupport implements javax.management.NotificationEmitter {
            public constructor()
            public constructor(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda)
            public constructor(...arg0: javax.management.MBeanNotificationInfo[])
            public constructor(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda, ...arg1: javax.management.MBeanNotificationInfo[])
            public addNotificationListener(arg0: javax.management.NotificationListener | javax.management.NotificationListener$$Lambda, arg1: javax.management.NotificationFilter | javax.management.NotificationFilter$$Lambda, arg2: java.lang.Object): void
            public removeNotificationListener(arg0: javax.management.NotificationListener | javax.management.NotificationListener$$Lambda): void
            public removeNotificationListener(arg0: javax.management.NotificationListener | javax.management.NotificationListener$$Lambda, arg1: javax.management.NotificationFilter | javax.management.NotificationFilter$$Lambda, arg2: java.lang.Object): void
            public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
            public sendNotification(arg0: javax.management.Notification): void
            protected handleNotification(arg0: javax.management.NotificationListener | javax.management.NotificationListener$$Lambda, arg1: javax.management.Notification, arg2: java.lang.Object): void
            public static class: java.lang.Class<any>
        }
    }
}
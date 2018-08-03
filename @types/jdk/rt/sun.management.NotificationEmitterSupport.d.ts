declare namespace sun {
    namespace management {
        abstract class NotificationEmitterSupport implements javax.management.NotificationEmitter {
            protected constructor()
            public addNotificationListener(arg0: javax.management.NotificationListener | javax.management.NotificationListener$$Lambda, arg1: javax.management.NotificationFilter | javax.management.NotificationFilter$$Lambda, arg2: java.lang.Object): void
            public removeNotificationListener(arg0: javax.management.NotificationListener | javax.management.NotificationListener$$Lambda): void
            public removeNotificationListener(arg0: javax.management.NotificationListener | javax.management.NotificationListener$$Lambda, arg1: javax.management.NotificationFilter | javax.management.NotificationFilter$$Lambda, arg2: java.lang.Object): void
            public abstract getNotificationInfo(): javax.management.MBeanNotificationInfo[]
            public static class: java.lang.Class<any>
        }
        interface NotificationEmitterSupport$$Lambda implements javax.management.NotificationEmitter {
            (): javax.management.MBeanNotificationInfo[]
        }
    }
}
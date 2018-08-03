declare namespace javax {
    namespace management {
        interface NotificationBroadcaster {
            addNotificationListener(arg0: javax.management.NotificationListener | javax.management.NotificationListener$$Lambda, arg1: javax.management.NotificationFilter | javax.management.NotificationFilter$$Lambda, arg2: java.lang.Object): void
            removeNotificationListener(arg0: javax.management.NotificationListener | javax.management.NotificationListener$$Lambda): void
            getNotificationInfo(): javax.management.MBeanNotificationInfo[]
        }
    }
}
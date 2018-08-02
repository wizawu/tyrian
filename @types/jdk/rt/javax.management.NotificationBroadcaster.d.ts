declare namespace javax {
    namespace management {
interface NotificationBroadcaster {
    addNotificationListener(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
    removeNotificationListener(arg0: javax.management.NotificationListener): void
    getNotificationInfo(): javax.management.MBeanNotificationInfo[]
}

    }
}
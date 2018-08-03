declare namespace javax {
    namespace management {
        interface NotificationEmitter extends javax.management.NotificationBroadcaster {
            removeNotificationListener(arg0: javax.management.NotificationListener | javax.management.NotificationListener$$Lambda, arg1: javax.management.NotificationFilter | javax.management.NotificationFilter$$Lambda, arg2: java.lang.Object): void
        }
        interface NotificationEmitter$$Lambda extends javax.management.NotificationBroadcaster {
            (arg0: javax.management.NotificationListener | javax.management.NotificationListener$$Lambda, arg1: javax.management.NotificationFilter | javax.management.NotificationFilter$$Lambda, arg2: java.lang.Object): void
        }
    }
}
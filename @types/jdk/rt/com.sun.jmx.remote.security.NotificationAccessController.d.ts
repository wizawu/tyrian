declare namespace com {
    namespace sun {
        namespace jmx {
            namespace remote {
                namespace security {
                    interface NotificationAccessController {
                        addNotificationListener(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.security.auth.Subject): void
                        removeNotificationListener(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.security.auth.Subject): void
                        fetchNotification(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.management.Notification, arg3: javax.security.auth.Subject): void
                    }
                }
            }
        }
    }
}
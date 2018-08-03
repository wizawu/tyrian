declare namespace javax {
    namespace management {
        namespace remote {
            interface JMXConnector extends java.io.Closeable {
                CREDENTIALS: string
                connect(): void
                connect(arg0: java.util.Map<java.lang.String, any>): void
                getMBeanServerConnection(): javax.management.MBeanServerConnection
                getMBeanServerConnection(arg0: javax.security.auth.Subject): javax.management.MBeanServerConnection
                close(): void
                addConnectionNotificationListener(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
                removeConnectionNotificationListener(arg0: javax.management.NotificationListener): void
                removeConnectionNotificationListener(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
                getConnectionId(): string
            }
        }
    }
}
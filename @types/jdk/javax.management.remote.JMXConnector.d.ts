declare namespace javax {
  namespace management {
    namespace remote {
      interface JMXConnector extends java.io.Closeable {
        readonly CREDENTIALS: java.lang.String
        connect(): void
        connect(arg0: java.util.Map<java.lang.String, unknown>): void
        getMBeanServerConnection(): javax.management.MBeanServerConnection
        getMBeanServerConnection(arg0: javax.security.auth.Subject): javax.management.MBeanServerConnection
        close(): void
        addConnectionNotificationListener(
          arg0: javax.management.NotificationListener | javax.management.NotificationListener$$lambda,
          arg1: javax.management.NotificationFilter | javax.management.NotificationFilter$$lambda,
          arg2: java.lang.Object | any
        ): void
        removeConnectionNotificationListener(
          arg0: javax.management.NotificationListener | javax.management.NotificationListener$$lambda
        ): void
        removeConnectionNotificationListener(
          arg0: javax.management.NotificationListener | javax.management.NotificationListener$$lambda,
          arg1: javax.management.NotificationFilter | javax.management.NotificationFilter$$lambda,
          arg2: java.lang.Object | any
        ): void
        getConnectionId(): java.lang.String
      }
    }
  }
}

declare namespace javax {
    namespace management {
        namespace remote {
            namespace rmi {
                class RMIConnector implements javax.management.remote.JMXConnector , java.io.Serializable , javax.management.remote.JMXAddressable {
                    public constructor(arg0: javax.management.remote.JMXServiceURL, arg1: java.util.Map<java.lang.String, any>)
                    public constructor(arg0: javax.management.remote.rmi.RMIServer, arg1: java.util.Map<java.lang.String, any>)
                    public toString(): string
                    public getAddress(): javax.management.remote.JMXServiceURL
                    public connect(): void
                    public connect(arg0: java.util.Map<java.lang.String, any>): void
                    public getConnectionId(): string
                    public getMBeanServerConnection(): javax.management.MBeanServerConnection
                    public getMBeanServerConnection(arg0: javax.security.auth.Subject): javax.management.MBeanServerConnection
                    public addConnectionNotificationListener(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
                    public removeConnectionNotificationListener(arg0: javax.management.NotificationListener): void
                    public removeConnectionNotificationListener(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
                    public close(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}
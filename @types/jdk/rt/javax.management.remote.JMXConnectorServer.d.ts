declare namespace javax {
    namespace management {
        namespace remote {
abstract class JMXConnectorServer extends javax.management.NotificationBroadcasterSupport implements javax.management.remote.JMXConnectorServerMBean , javax.management.MBeanRegistration , javax.management.remote.JMXAddressable {
    public static AUTHENTICATOR: string
    public constructor()
    public constructor(arg0: javax.management.MBeanServer)
    public getMBeanServer(): javax.management.MBeanServer
    public setMBeanServerForwarder(arg0: javax.management.remote.MBeanServerForwarder): void
    public getConnectionIds(): java.lang.String[]
    public toJMXConnector(arg0: java.util.Map<java.lang.String, any>): javax.management.remote.JMXConnector
    public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
    protected connectionOpened(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object): void
    protected connectionClosed(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object): void
    protected connectionFailed(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object): void
    public preRegister(arg0: javax.management.MBeanServer, arg1: javax.management.ObjectName): javax.management.ObjectName
    public postRegister(arg0: java.lang.Boolean | boolean): void
    public preDeregister(): void
    public postDeregister(): void
    public static class: java.lang.Class<any>
}

abstract class JMXConnectorServer$$Lambda extends javax.management.NotificationBroadcasterSupport implements javax.management.remote.JMXConnectorServerMBean , javax.management.MBeanRegistration , javax.management.remote.JMXAddressable {
    public static AUTHENTICATOR: string
}

        }
    }
}
declare namespace com {
    namespace sun {
        namespace jmx {
            namespace remote {
                namespace internal {
class ServerNotifForwarder {
    public constructor(arg0: javax.management.MBeanServer, arg1: java.util.Map<java.lang.String, any>, arg2: com.sun.jmx.remote.internal.NotificationBuffer, arg3: java.lang.String | string)
    public addNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationFilter): java.lang.Integer
    public removeNotificationListener(arg0: javax.management.ObjectName, arg1: java.lang.Integer[]): void
    public removeNotificationListener(arg0: javax.management.ObjectName, arg1: java.lang.Integer): void
    public fetchNotifs(arg0: long, arg1: long, arg2: int): javax.management.remote.NotificationResult
    public terminate(): void
    public checkMBeanPermission(arg0: javax.management.ObjectName, arg1: java.lang.String | string): void
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}
declare namespace com {
    namespace sun {
        namespace org {
            namespace glassfish {
                namespace external {
                    namespace amx {
class MBeanListener<T extends com.sun.org.glassfish.external.amx.MBeanListener$Callback> implements javax.management.NotificationListener {
    public toString(): string
    public getType(): string
    public getName(): string
    public getMBeanServer(): javax.management.MBeanServerConnection
    public getCallback(): T
    public constructor(arg0: javax.management.MBeanServerConnection, arg1: javax.management.ObjectName, arg2: T)
    public constructor(arg0: javax.management.MBeanServerConnection, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: T)
    public constructor(arg0: javax.management.MBeanServerConnection, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: T)
    public startListening(): void
    public stopListening(): void
    public handleNotification(arg0: javax.management.Notification, arg1: java.lang.Object): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}
declare namespace javax {
    namespace management {
        namespace remote {
            namespace rmi {
                interface RMIConnection extends java.io.Closeable , java.rmi.Remote {
                    getConnectionId(): string
                    close(): void
                    createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.security.auth.Subject): javax.management.ObjectInstance
                    createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.management.ObjectName, arg3: javax.security.auth.Subject): javax.management.ObjectInstance
                    createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: java.rmi.MarshalledObject, arg3: java.lang.String[], arg4: javax.security.auth.Subject): javax.management.ObjectInstance
                    createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.management.ObjectName, arg3: java.rmi.MarshalledObject, arg4: java.lang.String[], arg5: javax.security.auth.Subject): javax.management.ObjectInstance
                    unregisterMBean(arg0: javax.management.ObjectName, arg1: javax.security.auth.Subject): void
                    getObjectInstance(arg0: javax.management.ObjectName, arg1: javax.security.auth.Subject): javax.management.ObjectInstance
                    queryMBeans(arg0: javax.management.ObjectName, arg1: java.rmi.MarshalledObject, arg2: javax.security.auth.Subject): java.util.Set<javax.management.ObjectInstance>
                    queryNames(arg0: javax.management.ObjectName, arg1: java.rmi.MarshalledObject, arg2: javax.security.auth.Subject): java.util.Set<javax.management.ObjectName>
                    isRegistered(arg0: javax.management.ObjectName, arg1: javax.security.auth.Subject): boolean
                    getMBeanCount(arg0: javax.security.auth.Subject): java.lang.Integer
                    getAttribute(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: javax.security.auth.Subject): java.lang.Object
                    getAttributes(arg0: javax.management.ObjectName, arg1: java.lang.String[], arg2: javax.security.auth.Subject): javax.management.AttributeList
                    setAttribute(arg0: javax.management.ObjectName, arg1: java.rmi.MarshalledObject, arg2: javax.security.auth.Subject): void
                    setAttributes(arg0: javax.management.ObjectName, arg1: java.rmi.MarshalledObject, arg2: javax.security.auth.Subject): javax.management.AttributeList
                    invoke(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: java.rmi.MarshalledObject, arg3: java.lang.String[], arg4: javax.security.auth.Subject): java.lang.Object
                    getDefaultDomain(arg0: javax.security.auth.Subject): string
                    getDomains(arg0: javax.security.auth.Subject): java.lang.String[]
                    getMBeanInfo(arg0: javax.management.ObjectName, arg1: javax.security.auth.Subject): javax.management.MBeanInfo
                    isInstanceOf(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: javax.security.auth.Subject): boolean
                    addNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: java.rmi.MarshalledObject, arg3: java.rmi.MarshalledObject, arg4: javax.security.auth.Subject): void
                    removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: javax.security.auth.Subject): void
                    removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: java.rmi.MarshalledObject, arg3: java.rmi.MarshalledObject, arg4: javax.security.auth.Subject): void
                    addNotificationListeners(arg0: javax.management.ObjectName[], arg1: java.rmi.MarshalledObject[], arg2: javax.security.auth.Subject[]): java.lang.Integer[]
                    removeNotificationListeners(arg0: javax.management.ObjectName, arg1: java.lang.Integer[], arg2: javax.security.auth.Subject): void
                    fetchNotifications(arg0: long, arg1: int, arg2: long): javax.management.remote.NotificationResult
                }
            }
        }
    }
}
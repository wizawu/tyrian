declare namespace javax {
    namespace management {
        namespace remote {
            namespace rmi {
                class RMIConnector$RemoteMBeanServerConnection implements javax.management.MBeanServerConnection {
                    public constructor(arg0: javax.management.remote.rmi.RMIConnector)
                    public constructor(arg0: javax.management.remote.rmi.RMIConnector, arg1: javax.security.auth.Subject)
                    public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName): javax.management.ObjectInstance
                    public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.management.ObjectName): javax.management.ObjectInstance
                    public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: java.lang.Object[], arg3: java.lang.String[]): javax.management.ObjectInstance
                    public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.management.ObjectName, arg3: java.lang.Object[], arg4: java.lang.String[]): javax.management.ObjectInstance
                    public unregisterMBean(arg0: javax.management.ObjectName): void
                    public getObjectInstance(arg0: javax.management.ObjectName): javax.management.ObjectInstance
                    public queryMBeans(arg0: javax.management.ObjectName, arg1: javax.management.QueryExp): java.util.Set<javax.management.ObjectInstance>
                    public queryNames(arg0: javax.management.ObjectName, arg1: javax.management.QueryExp): java.util.Set<javax.management.ObjectName>
                    public isRegistered(arg0: javax.management.ObjectName): boolean
                    public getMBeanCount(): java.lang.Integer
                    public getAttribute(arg0: javax.management.ObjectName, arg1: java.lang.String | string): java.lang.Object
                    public getAttributes(arg0: javax.management.ObjectName, arg1: java.lang.String[]): javax.management.AttributeList
                    public setAttribute(arg0: javax.management.ObjectName, arg1: javax.management.Attribute): void
                    public setAttributes(arg0: javax.management.ObjectName, arg1: javax.management.AttributeList): javax.management.AttributeList
                    public invoke(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: java.lang.String[]): java.lang.Object
                    public getDefaultDomain(): string
                    public getDomains(): java.lang.String[]
                    public getMBeanInfo(arg0: javax.management.ObjectName): javax.management.MBeanInfo
                    public isInstanceOf(arg0: javax.management.ObjectName, arg1: java.lang.String | string): boolean
                    public addNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
                    public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName): void
                    public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
                    public addNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
                    public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener): void
                    public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}
declare namespace com {
    namespace sun {
        namespace jmx {
            namespace interceptor {
                class DefaultMBeanServerInterceptor implements com.sun.jmx.interceptor.MBeanServerInterceptor {
                    public constructor(arg0: javax.management.MBeanServer, arg1: javax.management.MBeanServerDelegate, arg2: com.sun.jmx.mbeanserver.MBeanInstantiator, arg3: com.sun.jmx.mbeanserver.Repository)
                    public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName): javax.management.ObjectInstance
                    public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.management.ObjectName): javax.management.ObjectInstance
                    public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: java.lang.Object[], arg3: java.lang.String[]): javax.management.ObjectInstance
                    public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.management.ObjectName, arg3: java.lang.Object[], arg4: java.lang.String[]): javax.management.ObjectInstance
                    public registerMBean(arg0: java.lang.Object, arg1: javax.management.ObjectName): javax.management.ObjectInstance
                    public unregisterMBean(arg0: javax.management.ObjectName): void
                    public getObjectInstance(arg0: javax.management.ObjectName): javax.management.ObjectInstance
                    public queryMBeans(arg0: javax.management.ObjectName, arg1: javax.management.QueryExp): java.util.Set<javax.management.ObjectInstance>
                    public queryNames(arg0: javax.management.ObjectName, arg1: javax.management.QueryExp): java.util.Set<javax.management.ObjectName>
                    public isRegistered(arg0: javax.management.ObjectName): boolean
                    public getDomains(): java.lang.String[]
                    public getMBeanCount(): java.lang.Integer
                    public getAttribute(arg0: javax.management.ObjectName, arg1: java.lang.String | string): java.lang.Object
                    public getAttributes(arg0: javax.management.ObjectName, arg1: java.lang.String[]): javax.management.AttributeList
                    public setAttribute(arg0: javax.management.ObjectName, arg1: javax.management.Attribute): void
                    public setAttributes(arg0: javax.management.ObjectName, arg1: javax.management.AttributeList): javax.management.AttributeList
                    public invoke(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: java.lang.String[]): java.lang.Object
                    public getDefaultDomain(): string
                    public addNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
                    public addNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
                    public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener): void
                    public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
                    public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName): void
                    public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
                    public getMBeanInfo(arg0: javax.management.ObjectName): javax.management.MBeanInfo
                    public isInstanceOf(arg0: javax.management.ObjectName, arg1: java.lang.String | string): boolean
                    public getClassLoaderFor(arg0: javax.management.ObjectName): java.lang.ClassLoader
                    public getClassLoader(arg0: javax.management.ObjectName): java.lang.ClassLoader
                    public instantiate(arg0: java.lang.String | string): java.lang.Object
                    public instantiate(arg0: java.lang.String | string, arg1: javax.management.ObjectName): java.lang.Object
                    public instantiate(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.String[]): java.lang.Object
                    public instantiate(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: java.lang.Object[], arg3: java.lang.String[]): java.lang.Object
                    public deserialize(arg0: javax.management.ObjectName, arg1: byte[]): java.io.ObjectInputStream
                    public deserialize(arg0: java.lang.String | string, arg1: byte[]): java.io.ObjectInputStream
                    public deserialize(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: byte[]): java.io.ObjectInputStream
                    public getClassLoaderRepository(): javax.management.loading.ClassLoaderRepository
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}
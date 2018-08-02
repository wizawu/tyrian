declare namespace com {
    namespace sun {
        namespace jmx {
            namespace mbeanserver {
class JmxMBeanServer implements com.sun.jmx.mbeanserver.SunJmxMBeanServer {
    public static DEFAULT_FAIR_LOCK_POLICY: boolean
    public interceptorsEnabled(): boolean
    public getMBeanInstantiator(): com.sun.jmx.mbeanserver.MBeanInstantiator
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
    public getMBeanCount(): java.lang.Integer
    public getAttribute(arg0: javax.management.ObjectName, arg1: java.lang.String | string): java.lang.Object
    public getAttributes(arg0: javax.management.ObjectName, arg1: java.lang.String[]): javax.management.AttributeList
    public setAttribute(arg0: javax.management.ObjectName, arg1: javax.management.Attribute): void
    public setAttributes(arg0: javax.management.ObjectName, arg1: javax.management.AttributeList): javax.management.AttributeList
    public invoke(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: java.lang.String[]): java.lang.Object
    public getDefaultDomain(): string
    public getDomains(): java.lang.String[]
    public addNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
    public addNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
    public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener): void
    public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
    public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName): void
    public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
    public getMBeanInfo(arg0: javax.management.ObjectName): javax.management.MBeanInfo
    public instantiate(arg0: java.lang.String | string): java.lang.Object
    public instantiate(arg0: java.lang.String | string, arg1: javax.management.ObjectName): java.lang.Object
    public instantiate(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.String[]): java.lang.Object
    public instantiate(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: java.lang.Object[], arg3: java.lang.String[]): java.lang.Object
    public isInstanceOf(arg0: javax.management.ObjectName, arg1: java.lang.String | string): boolean
    public deserialize(arg0: javax.management.ObjectName, arg1: byte[]): java.io.ObjectInputStream
    public deserialize(arg0: java.lang.String | string, arg1: byte[]): java.io.ObjectInputStream
    public deserialize(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: byte[]): java.io.ObjectInputStream
    public getMBeanServerInterceptor(): javax.management.MBeanServer
    public setMBeanServerInterceptor(arg0: javax.management.MBeanServer): void
    public getClassLoaderFor(arg0: javax.management.ObjectName): java.lang.ClassLoader
    public getClassLoader(arg0: javax.management.ObjectName): java.lang.ClassLoader
    public getClassLoaderRepository(): javax.management.loading.ClassLoaderRepository
    public getMBeanServerDelegate(): javax.management.MBeanServerDelegate
    public static newMBeanServerDelegate(): javax.management.MBeanServerDelegate
    public static newMBeanServer(arg0: java.lang.String | string, arg1: javax.management.MBeanServer, arg2: javax.management.MBeanServerDelegate, arg3: boolean): javax.management.MBeanServer
    public static class: java.lang.Class<any>
}

            }
        }
    }
}
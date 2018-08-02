declare namespace javax {
    namespace management {
interface MBeanServer extends javax.management.MBeanServerConnection {
    createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName): javax.management.ObjectInstance
    createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.management.ObjectName): javax.management.ObjectInstance
    createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: java.lang.Object[], arg3: java.lang.String[]): javax.management.ObjectInstance
    createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.management.ObjectName, arg3: java.lang.Object[], arg4: java.lang.String[]): javax.management.ObjectInstance
    registerMBean(arg0: java.lang.Object, arg1: javax.management.ObjectName): javax.management.ObjectInstance
    unregisterMBean(arg0: javax.management.ObjectName): void
    getObjectInstance(arg0: javax.management.ObjectName): javax.management.ObjectInstance
    queryMBeans(arg0: javax.management.ObjectName, arg1: javax.management.QueryExp): java.util.Set<javax.management.ObjectInstance>
    queryNames(arg0: javax.management.ObjectName, arg1: javax.management.QueryExp): java.util.Set<javax.management.ObjectName>
    isRegistered(arg0: javax.management.ObjectName): boolean
    getMBeanCount(): java.lang.Integer
    getAttribute(arg0: javax.management.ObjectName, arg1: java.lang.String | string): java.lang.Object
    getAttributes(arg0: javax.management.ObjectName, arg1: java.lang.String[]): javax.management.AttributeList
    setAttribute(arg0: javax.management.ObjectName, arg1: javax.management.Attribute): void
    setAttributes(arg0: javax.management.ObjectName, arg1: javax.management.AttributeList): javax.management.AttributeList
    invoke(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: java.lang.String[]): java.lang.Object
    getDefaultDomain(): string
    getDomains(): java.lang.String[]
    addNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
    addNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
    removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName): void
    removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
    removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener): void
    removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
    getMBeanInfo(arg0: javax.management.ObjectName): javax.management.MBeanInfo
    isInstanceOf(arg0: javax.management.ObjectName, arg1: java.lang.String | string): boolean
    instantiate(arg0: java.lang.String | string): java.lang.Object
    instantiate(arg0: java.lang.String | string, arg1: javax.management.ObjectName): java.lang.Object
    instantiate(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.String[]): java.lang.Object
    instantiate(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: java.lang.Object[], arg3: java.lang.String[]): java.lang.Object
    deserialize(arg0: javax.management.ObjectName, arg1: byte[]): java.io.ObjectInputStream
    deserialize(arg0: java.lang.String | string, arg1: byte[]): java.io.ObjectInputStream
    deserialize(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: byte[]): java.io.ObjectInputStream
    getClassLoaderFor(arg0: javax.management.ObjectName): java.lang.ClassLoader
    getClassLoader(arg0: javax.management.ObjectName): java.lang.ClassLoader
    getClassLoaderRepository(): javax.management.loading.ClassLoaderRepository
}

    }
}
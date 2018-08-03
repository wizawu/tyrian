declare namespace com {
    namespace sun {
        namespace jmx {
            namespace remote {
                namespace security {
                    abstract class MBeanServerAccessController implements javax.management.remote.MBeanServerForwarder {
                        public constructor()
                        public getMBeanServer(): javax.management.MBeanServer
                        public setMBeanServer(arg0: javax.management.MBeanServer): void
                        protected checkRead(): void
                        protected checkWrite(): void
                        protected checkCreate(arg0: java.lang.String | string): void
                        protected checkUnregister(arg0: javax.management.ObjectName): void
                        public addNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener | javax.management.NotificationListener$$Lambda, arg2: javax.management.NotificationFilter | javax.management.NotificationFilter$$Lambda, arg3: java.lang.Object): void
                        public addNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: javax.management.NotificationFilter | javax.management.NotificationFilter$$Lambda, arg3: java.lang.Object): void
                        public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName): javax.management.ObjectInstance
                        public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: java.lang.Object[], arg3: java.lang.String[]): javax.management.ObjectInstance
                        public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.management.ObjectName): javax.management.ObjectInstance
                        public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.management.ObjectName, arg3: java.lang.Object[], arg4: java.lang.String[]): javax.management.ObjectInstance
                        public deserialize(arg0: javax.management.ObjectName, arg1: byte[]): java.io.ObjectInputStream
                        public deserialize(arg0: java.lang.String | string, arg1: byte[]): java.io.ObjectInputStream
                        public deserialize(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: byte[]): java.io.ObjectInputStream
                        public getAttribute(arg0: javax.management.ObjectName, arg1: java.lang.String | string): java.lang.Object
                        public getAttributes(arg0: javax.management.ObjectName, arg1: java.lang.String[]): javax.management.AttributeList
                        public getClassLoader(arg0: javax.management.ObjectName): java.lang.ClassLoader
                        public getClassLoaderFor(arg0: javax.management.ObjectName): java.lang.ClassLoader
                        public getClassLoaderRepository(): javax.management.loading.ClassLoaderRepository
                        public getDefaultDomain(): string
                        public getDomains(): java.lang.String[]
                        public getMBeanCount(): java.lang.Integer
                        public getMBeanInfo(arg0: javax.management.ObjectName): javax.management.MBeanInfo
                        public getObjectInstance(arg0: javax.management.ObjectName): javax.management.ObjectInstance
                        public instantiate(arg0: java.lang.String | string): java.lang.Object
                        public instantiate(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.String[]): java.lang.Object
                        public instantiate(arg0: java.lang.String | string, arg1: javax.management.ObjectName): java.lang.Object
                        public instantiate(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: java.lang.Object[], arg3: java.lang.String[]): java.lang.Object
                        public invoke(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: java.lang.String[]): java.lang.Object
                        public isInstanceOf(arg0: javax.management.ObjectName, arg1: java.lang.String | string): boolean
                        public isRegistered(arg0: javax.management.ObjectName): boolean
                        public queryMBeans(arg0: javax.management.ObjectName, arg1: javax.management.QueryExp): java.util.Set<javax.management.ObjectInstance>
                        public queryNames(arg0: javax.management.ObjectName, arg1: javax.management.QueryExp): java.util.Set<javax.management.ObjectName>
                        public registerMBean(arg0: java.lang.Object, arg1: javax.management.ObjectName): javax.management.ObjectInstance
                        public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener | javax.management.NotificationListener$$Lambda): void
                        public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener | javax.management.NotificationListener$$Lambda, arg2: javax.management.NotificationFilter | javax.management.NotificationFilter$$Lambda, arg3: java.lang.Object): void
                        public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName): void
                        public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: javax.management.NotificationFilter | javax.management.NotificationFilter$$Lambda, arg3: java.lang.Object): void
                        public setAttribute(arg0: javax.management.ObjectName, arg1: javax.management.Attribute): void
                        public setAttributes(arg0: javax.management.ObjectName, arg1: javax.management.AttributeList): javax.management.AttributeList
                        public unregisterMBean(arg0: javax.management.ObjectName): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}
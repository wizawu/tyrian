declare namespace com {
    namespace sun {
        namespace org {
            namespace glassfish {
                namespace gmbal {
                    class ManagedObjectManagerNOPImpl implements com.sun.org.glassfish.gmbal.ManagedObjectManager {
                        public suspendJMXRegistration(): void
                        public resumeJMXRegistration(): void
                        public isManagedObject(arg0: java.lang.Object): boolean
                        public createRoot(): com.sun.org.glassfish.gmbal.GmbalMBean
                        public createRoot(arg0: java.lang.Object): com.sun.org.glassfish.gmbal.GmbalMBean
                        public createRoot(arg0: java.lang.Object, arg1: java.lang.String | string): com.sun.org.glassfish.gmbal.GmbalMBean
                        public getRoot(): java.lang.Object
                        public register(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.String | string): com.sun.org.glassfish.gmbal.GmbalMBean
                        public register(arg0: java.lang.Object, arg1: java.lang.Object): com.sun.org.glassfish.gmbal.GmbalMBean
                        public registerAtRoot(arg0: java.lang.Object, arg1: java.lang.String | string): com.sun.org.glassfish.gmbal.GmbalMBean
                        public registerAtRoot(arg0: java.lang.Object): com.sun.org.glassfish.gmbal.GmbalMBean
                        public unregister(arg0: java.lang.Object): void
                        public getObjectName(arg0: java.lang.Object): javax.management.ObjectName
                        public getObject(arg0: javax.management.ObjectName): java.lang.Object
                        public stripPrefix(...arg0: java.lang.String[]): void
                        public getDomain(): string
                        public setMBeanServer(arg0: javax.management.MBeanServer): void
                        public getMBeanServer(): javax.management.MBeanServer
                        public setResourceBundle(arg0: java.util.ResourceBundle): void
                        public getResourceBundle(): java.util.ResourceBundle
                        public addAnnotation(arg0: java.lang.reflect.AnnotatedElement, arg1: java.lang.annotation.Annotation): void
                        public setRegistrationDebug(arg0: com.sun.org.glassfish.gmbal.ManagedObjectManager$RegistrationDebugLevel): void
                        public setRuntimeDebug(arg0: boolean): void
                        public dumpSkeleton(arg0: java.lang.Object): string
                        public close(): void
                        public setTypelibDebug(arg0: int): void
                        public stripPackagePrefix(): void
                        public suppressDuplicateRootReport(arg0: boolean): void
                        public getAMXClient(arg0: java.lang.Object): com.sun.org.glassfish.gmbal.AMXClient
                        public setJMXRegistrationDebug(arg0: boolean): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}
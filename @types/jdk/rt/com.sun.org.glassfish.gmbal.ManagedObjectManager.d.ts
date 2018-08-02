declare namespace com {
    namespace sun {
        namespace org {
            namespace glassfish {
                namespace gmbal {
                    interface ManagedObjectManager extends java.io.Closeable {
                        suspendJMXRegistration(): void
                        resumeJMXRegistration(): void
                        isManagedObject(arg0: java.lang.Object): boolean
                        createRoot(): com.sun.org.glassfish.gmbal.GmbalMBean
                        createRoot(arg0: java.lang.Object): com.sun.org.glassfish.gmbal.GmbalMBean
                        createRoot(arg0: java.lang.Object, arg1: java.lang.String | string): com.sun.org.glassfish.gmbal.GmbalMBean
                        getRoot(): java.lang.Object
                        register(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.String | string): com.sun.org.glassfish.gmbal.GmbalMBean
                        register(arg0: java.lang.Object, arg1: java.lang.Object): com.sun.org.glassfish.gmbal.GmbalMBean
                        registerAtRoot(arg0: java.lang.Object, arg1: java.lang.String | string): com.sun.org.glassfish.gmbal.GmbalMBean
                        registerAtRoot(arg0: java.lang.Object): com.sun.org.glassfish.gmbal.GmbalMBean
                        unregister(arg0: java.lang.Object): void
                        getObjectName(arg0: java.lang.Object): javax.management.ObjectName
                        getAMXClient(arg0: java.lang.Object): com.sun.org.glassfish.gmbal.AMXClient
                        getObject(arg0: javax.management.ObjectName): java.lang.Object
                        stripPrefix(...arg0: java.lang.String[]): void
                        stripPackagePrefix(): void
                        getDomain(): string
                        setMBeanServer(arg0: javax.management.MBeanServer): void
                        getMBeanServer(): javax.management.MBeanServer
                        setResourceBundle(arg0: java.util.ResourceBundle): void
                        getResourceBundle(): java.util.ResourceBundle
                        addAnnotation(arg0: java.lang.reflect.AnnotatedElement, arg1: java.lang.annotation.Annotation): void
                        setRegistrationDebug(arg0: com.sun.org.glassfish.gmbal.ManagedObjectManager$RegistrationDebugLevel): void
                        setRuntimeDebug(arg0: boolean): void
                        setTypelibDebug(arg0: int): void
                        setJMXRegistrationDebug(arg0: boolean): void
                        dumpSkeleton(arg0: java.lang.Object): string
                        suppressDuplicateRootReport(arg0: boolean): void
                    }
                }
            }
        }
    }
}
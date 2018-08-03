declare namespace com {
    namespace sun {
        namespace org {
            namespace glassfish {
                namespace external {
                    namespace amx {
                        class MBeanListener$CallbackImpl implements com.sun.org.glassfish.external.amx.MBeanListener$Callback {
                            protected readonly mLatch: java.util.concurrent.CountDownLatch
                            public constructor()
                            public constructor(arg0: boolean)
                            public getRegistered(): javax.management.ObjectName
                            public getUnregistered(): javax.management.ObjectName
                            public await(): void
                            public mbeanRegistered(arg0: javax.management.ObjectName, arg1: com.sun.org.glassfish.external.amx.MBeanListener): void
                            public mbeanUnregistered(arg0: javax.management.ObjectName, arg1: com.sun.org.glassfish.external.amx.MBeanListener): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}
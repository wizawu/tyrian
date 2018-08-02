declare namespace com {
    namespace sun {
        namespace org {
            namespace glassfish {
                namespace gmbal {
                    interface AMXMBeanInterface {
                        getMeta(): java.util.Map<java.lang.String, any>
                        getName(): string
                        getParent(): com.sun.org.glassfish.gmbal.AMXMBeanInterface
                        getChildren(): com.sun.org.glassfish.gmbal.AMXMBeanInterface[]
                    }
                }
            }
        }
    }
}
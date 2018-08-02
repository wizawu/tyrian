declare namespace com {
    namespace sun {
        namespace org {
            namespace glassfish {
                namespace gmbal {
                    interface AMXMetadata extends java.lang.annotation.Annotation {
                        isSingleton(): boolean
                        group(): string
                        subTypes(): java.lang.String[]
                        genericInterfaceName(): string
                        immutableInfo(): boolean
                        interfaceClassName(): string
                        type(): string
                    }
                }
            }
        }
    }
}
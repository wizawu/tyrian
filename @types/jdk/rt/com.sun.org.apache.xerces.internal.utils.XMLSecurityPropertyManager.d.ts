declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace utils {
                            class XMLSecurityPropertyManager {
                                public constructor()
                                public setValue(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.utils.XMLSecurityPropertyManager$State, arg2: java.lang.Object): boolean
                                public setValue(arg0: com.sun.org.apache.xerces.internal.utils.XMLSecurityPropertyManager$Property, arg1: com.sun.org.apache.xerces.internal.utils.XMLSecurityPropertyManager$State, arg2: java.lang.String | string): void
                                public setValue(arg0: int, arg1: com.sun.org.apache.xerces.internal.utils.XMLSecurityPropertyManager$State, arg2: java.lang.String | string): void
                                public getValue(arg0: java.lang.String | string): string
                                public getValue(arg0: com.sun.org.apache.xerces.internal.utils.XMLSecurityPropertyManager$Property): string
                                public getValueByIndex(arg0: int): string
                                public getIndex(arg0: java.lang.String | string): int
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}
declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
                                class XMLSchemaValidator$XSIErrorReporter {
                                    protected constructor(arg0: com.sun.org.apache.xerces.internal.impl.xs.XMLSchemaValidator)
                                    public reset(arg0: com.sun.org.apache.xerces.internal.impl.XMLErrorReporter): void
                                    public pushContext(): void
                                    public popContext(): java.lang.String[]
                                    public mergeContext(): java.lang.String[]
                                    public reportError(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: short): void
                                    public reportError(arg0: com.sun.org.apache.xerces.internal.xni.XMLLocator, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.Object[], arg4: short): void
                                    public static class: java.lang.Class<any>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
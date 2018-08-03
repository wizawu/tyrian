declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace util {
                            class PropertyState {
                                public readonly status: com.sun.org.apache.xerces.internal.util.Status
                                public readonly state: java.lang.Object
                                public static readonly UNKNOWN: com.sun.org.apache.xerces.internal.util.PropertyState
                                public static readonly RECOGNIZED: com.sun.org.apache.xerces.internal.util.PropertyState
                                public static readonly NOT_SUPPORTED: com.sun.org.apache.xerces.internal.util.PropertyState
                                public static readonly NOT_RECOGNIZED: com.sun.org.apache.xerces.internal.util.PropertyState
                                public static readonly NOT_ALLOWED: com.sun.org.apache.xerces.internal.util.PropertyState
                                public constructor(arg0: com.sun.org.apache.xerces.internal.util.Status, arg1: java.lang.Object)
                                public static of(arg0: com.sun.org.apache.xerces.internal.util.Status): com.sun.org.apache.xerces.internal.util.PropertyState
                                public static is(arg0: java.lang.Object): com.sun.org.apache.xerces.internal.util.PropertyState
                                public isExceptional(): boolean
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}
declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace utils {
                            abstract class FeaturePropertyBase {
                                public constructor()
                                public setValue(arg0: java.lang.Enum, arg1: com.sun.org.apache.xalan.internal.utils.FeaturePropertyBase$State, arg2: java.lang.String | string): void
                                public setValue(arg0: int, arg1: com.sun.org.apache.xalan.internal.utils.FeaturePropertyBase$State, arg2: java.lang.String | string): void
                                public setValue(arg0: java.lang.String | string, arg1: com.sun.org.apache.xalan.internal.utils.FeaturePropertyBase$State, arg2: java.lang.Object): boolean
                                public setValue(arg0: java.lang.String | string, arg1: com.sun.org.apache.xalan.internal.utils.FeaturePropertyBase$State, arg2: boolean): boolean
                                public getValue(arg0: java.lang.Enum): string
                                public getValue(arg0: java.lang.String | string): string
                                public getValueAsString(arg0: java.lang.String | string): string
                                public getValueByIndex(arg0: int): string
                                public abstract getIndex(arg0: java.lang.String | string): int
                                public getIndex<E extends java.lang.Enum<E>>(arg0: java.lang.Class<E>, arg1: java.lang.String | string): int
                                public static class: java.lang.Class<any>
                            }
                            interface FeaturePropertyBase$$Lambda {
                                (arg0: java.lang.String | string): int
                            }
                        }
                    }
                }
            }
        }
    }
}
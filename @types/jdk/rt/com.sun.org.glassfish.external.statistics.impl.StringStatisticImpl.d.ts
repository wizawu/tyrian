declare namespace com {
    namespace sun {
        namespace org {
            namespace glassfish {
                namespace external {
                    namespace statistics {
                        namespace impl {
                            class StringStatisticImpl extends com.sun.org.glassfish.external.statistics.impl.StatisticImpl implements com.sun.org.glassfish.external.statistics.StringStatistic , java.lang.reflect.InvocationHandler {
                                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: long, arg5: long)
                                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string)
                                public getStatistic(): com.sun.org.glassfish.external.statistics.StringStatistic
                                public getStaticAsMap(): java.util.Map
                                public toString(): string
                                public getCurrent(): string
                                public setCurrent(arg0: java.lang.String | string): void
                                public reset(): void
                                public invoke(arg0: java.lang.Object, arg1: java.lang.reflect.Method, arg2: java.lang.Object[]): java.lang.Object
                                public static class: java.lang.Class<any>
                            }
                            class StringStatisticImpl$$Lambda extends com.sun.org.glassfish.external.statistics.impl.StatisticImpl implements com.sun.org.glassfish.external.statistics.StringStatistic , java.lang.reflect.InvocationHandler {
                                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: long, arg5: long)
                            }
                        }
                    }
                }
            }
        }
    }
}
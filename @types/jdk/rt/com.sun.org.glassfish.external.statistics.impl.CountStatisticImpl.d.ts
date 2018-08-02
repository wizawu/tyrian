declare namespace com {
    namespace sun {
        namespace org {
            namespace glassfish {
                namespace external {
                    namespace statistics {
                        namespace impl {
                            class CountStatisticImpl extends com.sun.org.glassfish.external.statistics.impl.StatisticImpl implements com.sun.org.glassfish.external.statistics.CountStatistic , java.lang.reflect.InvocationHandler {
                                public constructor(arg0: long, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: long, arg5: long)
                                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string)
                                public getStatistic(): com.sun.org.glassfish.external.statistics.CountStatistic
                                public getStaticAsMap(): java.util.Map
                                public toString(): string
                                public getCount(): long
                                public setCount(arg0: long): void
                                public increment(): void
                                public increment(arg0: long): void
                                public decrement(): void
                                public reset(): void
                                public invoke(arg0: java.lang.Object, arg1: java.lang.reflect.Method, arg2: java.lang.Object[]): java.lang.Object
                                public static class: java.lang.Class<any>
                            }
                            class CountStatisticImpl$$Lambda extends com.sun.org.glassfish.external.statistics.impl.StatisticImpl implements com.sun.org.glassfish.external.statistics.CountStatistic , java.lang.reflect.InvocationHandler {
                                public constructor(arg0: long, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: long, arg5: long)
                            }
                        }
                    }
                }
            }
        }
    }
}
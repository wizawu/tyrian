declare namespace com {
    namespace sun {
        namespace org {
            namespace glassfish {
                namespace external {
                    namespace statistics {
                        namespace impl {
                            class AverageRangeStatisticImpl extends com.sun.org.glassfish.external.statistics.impl.StatisticImpl implements com.sun.org.glassfish.external.statistics.AverageRangeStatistic , java.lang.reflect.InvocationHandler {
                                public constructor(arg0: long, arg1: long, arg2: long, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String | string, arg6: long, arg7: long)
                                public getStatistic(): com.sun.org.glassfish.external.statistics.AverageRangeStatistic
                                public toString(): string
                                public getStaticAsMap(): java.util.Map
                                public reset(): void
                                public getAverage(): long
                                public getCurrent(): long
                                public setCurrent(arg0: long): void
                                public getHighWaterMark(): long
                                public getLowWaterMark(): long
                                public invoke(arg0: java.lang.Object, arg1: java.lang.reflect.Method, arg2: java.lang.Object[]): java.lang.Object
                                public static class: java.lang.Class<any>
                            }
                            class AverageRangeStatisticImpl$$Lambda extends com.sun.org.glassfish.external.statistics.impl.StatisticImpl implements com.sun.org.glassfish.external.statistics.AverageRangeStatistic , java.lang.reflect.InvocationHandler {
                                public constructor(arg0: long, arg1: long, arg2: long, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String | string, arg6: long, arg7: long)
                            }
                        }
                    }
                }
            }
        }
    }
}
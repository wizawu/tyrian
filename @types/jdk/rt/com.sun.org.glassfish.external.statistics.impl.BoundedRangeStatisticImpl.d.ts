declare namespace com {
    namespace sun {
        namespace org {
            namespace glassfish {
                namespace external {
                    namespace statistics {
                        namespace impl {
                            class BoundedRangeStatisticImpl extends com.sun.org.glassfish.external.statistics.impl.StatisticImpl implements com.sun.org.glassfish.external.statistics.BoundedRangeStatistic , java.lang.reflect.InvocationHandler {
                                public toString(): string
                                public constructor(arg0: long, arg1: long, arg2: long, arg3: long, arg4: long, arg5: java.lang.String | string, arg6: java.lang.String | string, arg7: java.lang.String | string, arg8: long, arg9: long)
                                public getStatistic(): com.sun.org.glassfish.external.statistics.BoundedRangeStatistic
                                public getStaticAsMap(): java.util.Map
                                public getCurrent(): long
                                public setCurrent(arg0: long): void
                                public getHighWaterMark(): long
                                public setHighWaterMark(arg0: long): void
                                public getLowWaterMark(): long
                                public setLowWaterMark(arg0: long): void
                                public getLowerBound(): long
                                public getUpperBound(): long
                                public reset(): void
                                public invoke(arg0: java.lang.Object, arg1: java.lang.reflect.Method, arg2: java.lang.Object[]): java.lang.Object
                                public static class: java.lang.Class<any>
                            }
                            class BoundedRangeStatisticImpl$$Lambda extends com.sun.org.glassfish.external.statistics.impl.StatisticImpl implements com.sun.org.glassfish.external.statistics.BoundedRangeStatistic , java.lang.reflect.InvocationHandler {
                                public (): string
                            }
                        }
                    }
                }
            }
        }
    }
}
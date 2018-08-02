declare namespace com {
    namespace sun {
        namespace org {
            namespace glassfish {
                namespace external {
                    namespace statistics {
                        namespace impl {
                            class TimeStatisticImpl extends com.sun.org.glassfish.external.statistics.impl.StatisticImpl implements com.sun.org.glassfish.external.statistics.TimeStatistic , java.lang.reflect.InvocationHandler {
                                public toString(): string
                                public constructor(arg0: long, arg1: long, arg2: long, arg3: long, arg4: java.lang.String | string, arg5: java.lang.String | string, arg6: java.lang.String | string, arg7: long, arg8: long)
                                public getStatistic(): com.sun.org.glassfish.external.statistics.TimeStatistic
                                public getStaticAsMap(): java.util.Map
                                public incrementCount(arg0: long): void
                                public getCount(): long
                                public getMaxTime(): long
                                public getMinTime(): long
                                public getTotalTime(): long
                                public reset(): void
                                public invoke(arg0: java.lang.Object, arg1: java.lang.reflect.Method, arg2: java.lang.Object[]): java.lang.Object
                                public static class: java.lang.Class<any>
                            }
                            class TimeStatisticImpl$$Lambda extends com.sun.org.glassfish.external.statistics.impl.StatisticImpl implements com.sun.org.glassfish.external.statistics.TimeStatistic , java.lang.reflect.InvocationHandler {
                                public (): string
                            }
                        }
                    }
                }
            }
        }
    }
}
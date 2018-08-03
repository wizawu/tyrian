declare namespace com {
    namespace sun {
        namespace org {
            namespace glassfish {
                namespace external {
                    namespace statistics {
                        namespace impl {
                            abstract class StatisticImpl implements com.sun.org.glassfish.external.statistics.Statistic {
                                protected sampleTime: long
                                public static readonly UNIT_COUNT: string
                                public static readonly UNIT_SECOND: string
                                public static readonly UNIT_MILLISECOND: string
                                public static readonly UNIT_MICROSECOND: string
                                public static readonly UNIT_NANOSECOND: string
                                public static readonly START_TIME: string
                                public static readonly LAST_SAMPLE_TIME: string
                                protected readonly statMap: java.util.Map<java.lang.String, java.lang.Object>
                                protected static readonly NEWLINE: string
                                protected constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: long, arg4: long)
                                protected constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string)
                                public getStaticAsMap(): java.util.Map
                                public getName(): string
                                public getDescription(): string
                                public getUnit(): string
                                public getLastSampleTime(): long
                                public getStartTime(): long
                                public reset(): void
                                public toString(): string
                                protected static isValidString(arg0: java.lang.String | string): boolean
                                protected checkMethod(arg0: java.lang.reflect.Method): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}
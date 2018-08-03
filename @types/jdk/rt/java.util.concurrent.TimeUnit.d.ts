declare namespace java {
    namespace util {
        namespace concurrent {
            abstract class TimeUnit extends java.lang.Enum<java.util.concurrent.TimeUnit> {
                public static NANOSECONDS: java.util.concurrent.TimeUnit
                public static MICROSECONDS: java.util.concurrent.TimeUnit
                public static MILLISECONDS: java.util.concurrent.TimeUnit
                public static SECONDS: java.util.concurrent.TimeUnit
                public static MINUTES: java.util.concurrent.TimeUnit
                public static HOURS: java.util.concurrent.TimeUnit
                public static DAYS: java.util.concurrent.TimeUnit
                public static values(): java.util.concurrent.TimeUnit[]
                public static valueOf(arg0: java.lang.String | string): java.util.concurrent.TimeUnit
                public convert(arg0: long, arg1: java.util.concurrent.TimeUnit): long
                public toNanos(arg0: long): long
                public toMicros(arg0: long): long
                public toMillis(arg0: long): long
                public toSeconds(arg0: long): long
                public toMinutes(arg0: long): long
                public toHours(arg0: long): long
                public toDays(arg0: long): long
                public timedWait(arg0: java.lang.Object, arg1: long): void
                public timedJoin(arg0: java.lang.Thread, arg1: long): void
                public sleep(arg0: long): void
                public static class: java.lang.Class<any>
            }
        }
    }
}
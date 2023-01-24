declare namespace java {
  namespace util {
    namespace concurrent {
      class TimeUnit extends java.lang.Enum<java.util.concurrent.TimeUnit> {
        public static readonly NANOSECONDS: java.util.concurrent.TimeUnit
        public static readonly MICROSECONDS: java.util.concurrent.TimeUnit
        public static readonly MILLISECONDS: java.util.concurrent.TimeUnit
        public static readonly SECONDS: java.util.concurrent.TimeUnit
        public static readonly MINUTES: java.util.concurrent.TimeUnit
        public static readonly HOURS: java.util.concurrent.TimeUnit
        public static readonly DAYS: java.util.concurrent.TimeUnit
        public static values(): java.util.concurrent.TimeUnit[]
        public static valueOf(arg0: java.lang.String | string): java.util.concurrent.TimeUnit
        public convert(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): number
        public convert(arg0: java.time.Duration): number
        public toNanos(arg0: number | java.lang.Long): number
        public toMicros(arg0: number | java.lang.Long): number
        public toMillis(arg0: number | java.lang.Long): number
        public toSeconds(arg0: number | java.lang.Long): number
        public toMinutes(arg0: number | java.lang.Long): number
        public toHours(arg0: number | java.lang.Long): number
        public toDays(arg0: number | java.lang.Long): number
        public timedWait(arg0: java.lang.Object | any, arg1: number | java.lang.Long): void
        public timedJoin(arg0: java.lang.Thread, arg1: number | java.lang.Long): void
        public sleep(arg0: number | java.lang.Long): void
        public toChronoUnit(): java.time.temporal.ChronoUnit
        public static of(arg0: java.time.temporal.ChronoUnit): java.util.concurrent.TimeUnit
      }
    }
  }
}

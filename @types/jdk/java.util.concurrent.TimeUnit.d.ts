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
        public static valueOf(arg0: java.lang.String): java.util.concurrent.TimeUnit
        public convert(arg0: long, arg1: java.util.concurrent.TimeUnit): long
        public convert(arg0: java.time.Duration): long
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
        public toChronoUnit(): java.time.temporal.ChronoUnit
        public static of(arg0: java.time.temporal.ChronoUnit): java.util.concurrent.TimeUnit
      }

    }
  }
}

declare namespace java {
  namespace time {

    abstract class Clock {
      public static systemUTC(): java.time.Clock
      public static systemDefaultZone(): java.time.Clock
      public static system(arg0: java.time.ZoneId): java.time.Clock
      public static tickMillis(arg0: java.time.ZoneId): java.time.Clock
      public static tickSeconds(arg0: java.time.ZoneId): java.time.Clock
      public static tickMinutes(arg0: java.time.ZoneId): java.time.Clock
      public static tick(arg0: java.time.Clock, arg1: java.time.Duration): java.time.Clock
      public static fixed(arg0: java.time.Instant, arg1: java.time.ZoneId): java.time.Clock
      public static offset(arg0: java.time.Clock, arg1: java.time.Duration): java.time.Clock
      protected constructor()
      public abstract getZone(): java.time.ZoneId
      public abstract withZone(arg0: java.time.ZoneId): java.time.Clock
      public millis(): long
      public abstract instant(): java.time.Instant
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
    }

  }
}

declare namespace java {
    namespace time {
        namespace chrono {
            abstract class AbstractChronology implements java.time.chrono.Chronology {
                protected constructor()
                public resolveDate(arg0: java.util.Map<java.time.temporal.TemporalField, java.lang.Long>, arg1: java.time.format.ResolverStyle): java.time.chrono.ChronoLocalDate
                public compareTo(arg0: java.time.chrono.Chronology): int
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public compareTo(arg0: java.lang.Object): int
                public static class: java.lang.Class<any>
            }
        }
    }
}
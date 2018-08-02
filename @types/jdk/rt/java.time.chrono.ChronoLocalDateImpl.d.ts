declare namespace java {
    namespace time {
        namespace chrono {
            abstract class ChronoLocalDateImpl<D extends java.time.chrono.ChronoLocalDate> implements java.time.chrono.ChronoLocalDate , java.time.temporal.Temporal , java.time.temporal.TemporalAdjuster , java.io.Serializable {
                public with(arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$Lambda): D
                public with(arg0: java.time.temporal.TemporalField, arg1: long): D
                public plus(arg0: java.time.temporal.TemporalAmount): D
                public plus(arg0: long, arg1: java.time.temporal.TemporalUnit): D
                public minus(arg0: java.time.temporal.TemporalAmount): D
                public minus(arg0: long, arg1: java.time.temporal.TemporalUnit): D
                public until(arg0: java.time.temporal.Temporal, arg1: java.time.temporal.TemporalUnit): long
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public minus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
                public minus(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
                public plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
                public plus(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
                public with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.temporal.Temporal
                public with(arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$Lambda): java.time.temporal.Temporal
                public static class: java.lang.Class<any>
            }
        }
    }
}
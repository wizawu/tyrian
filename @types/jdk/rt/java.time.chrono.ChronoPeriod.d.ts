declare namespace java {
    namespace time {
        namespace chrono {
            interface ChronoPeriod extends java.time.temporal.TemporalAmount {
                between(arg0: java.time.chrono.ChronoLocalDate, arg1: java.time.chrono.ChronoLocalDate): java.time.chrono.ChronoPeriod
                get(arg0: java.time.temporal.TemporalUnit): long
                getUnits(): java.util.List<java.time.temporal.TemporalUnit>
                getChronology(): java.time.chrono.Chronology
                isZero(): boolean
                isNegative(): boolean
                plus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoPeriod
                minus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoPeriod
                multipliedBy(arg0: int): java.time.chrono.ChronoPeriod
                negated(): java.time.chrono.ChronoPeriod
                normalized(): java.time.chrono.ChronoPeriod
                addTo(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
                subtractFrom(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
                equals(arg0: java.lang.Object): boolean
                hashCode(): int
                toString(): string
            }
        }
    }
}
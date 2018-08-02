declare namespace java {
    namespace time {
        namespace chrono {
            class ChronoPeriodImpl implements java.time.chrono.ChronoPeriod , java.io.Serializable {
                public get(arg0: java.time.temporal.TemporalUnit): long
                public getUnits(): java.util.List<java.time.temporal.TemporalUnit>
                public getChronology(): java.time.chrono.Chronology
                public isZero(): boolean
                public isNegative(): boolean
                public plus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoPeriod
                public minus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoPeriod
                public multipliedBy(arg0: int): java.time.chrono.ChronoPeriod
                public normalized(): java.time.chrono.ChronoPeriod
                public addTo(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
                public subtractFrom(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                protected writeReplace(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}
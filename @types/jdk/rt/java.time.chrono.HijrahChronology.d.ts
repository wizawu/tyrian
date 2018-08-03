declare namespace java {
    namespace time {
        namespace chrono {
            class HijrahChronology extends java.time.chrono.AbstractChronology implements java.io.Serializable {
                public static readonly INSTANCE: java.time.chrono.HijrahChronology
                public getId(): string
                public getCalendarType(): string
                public date(arg0: java.time.chrono.Era, arg1: int, arg2: int, arg3: int): java.time.chrono.HijrahDate
                public date(arg0: int, arg1: int, arg2: int): java.time.chrono.HijrahDate
                public dateYearDay(arg0: java.time.chrono.Era, arg1: int, arg2: int): java.time.chrono.HijrahDate
                public dateYearDay(arg0: int, arg1: int): java.time.chrono.HijrahDate
                public dateEpochDay(arg0: long): java.time.chrono.HijrahDate
                public dateNow(): java.time.chrono.HijrahDate
                public dateNow(arg0: java.time.ZoneId): java.time.chrono.HijrahDate
                public dateNow(arg0: java.time.Clock): java.time.chrono.HijrahDate
                public date(arg0: java.time.temporal.TemporalAccessor): java.time.chrono.HijrahDate
                public localDateTime(arg0: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoLocalDateTime<java.time.chrono.HijrahDate>
                public zonedDateTime(arg0: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoZonedDateTime<java.time.chrono.HijrahDate>
                public zonedDateTime(arg0: java.time.Instant, arg1: java.time.ZoneId): java.time.chrono.ChronoZonedDateTime<java.time.chrono.HijrahDate>
                public isLeapYear(arg0: long): boolean
                public prolepticYear(arg0: java.time.chrono.Era, arg1: int): int
                public eraOf(arg0: int): java.time.chrono.HijrahEra
                public eras(): java.util.List<java.time.chrono.Era>
                public range(arg0: java.time.temporal.ChronoField): java.time.temporal.ValueRange
                public resolveDate(arg0: java.util.Map<java.time.temporal.TemporalField, java.lang.Long>, arg1: java.time.format.ResolverStyle): java.time.chrono.HijrahDate
                public resolveDate(arg0: java.util.Map, arg1: java.time.format.ResolverStyle): java.time.chrono.ChronoLocalDate
                public eraOf(arg0: int): java.time.chrono.Era
                public date(arg0: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoLocalDate
                public dateNow(arg0: java.time.Clock): java.time.chrono.ChronoLocalDate
                public dateNow(arg0: java.time.ZoneId): java.time.chrono.ChronoLocalDate
                public dateNow(): java.time.chrono.ChronoLocalDate
                public dateEpochDay(arg0: long): java.time.chrono.ChronoLocalDate
                public dateYearDay(arg0: int, arg1: int): java.time.chrono.ChronoLocalDate
                public dateYearDay(arg0: java.time.chrono.Era, arg1: int, arg2: int): java.time.chrono.ChronoLocalDate
                public date(arg0: int, arg1: int, arg2: int): java.time.chrono.ChronoLocalDate
                public date(arg0: java.time.chrono.Era, arg1: int, arg2: int, arg3: int): java.time.chrono.ChronoLocalDate
                public static class: java.lang.Class<any>
            }
        }
    }
}
declare namespace java {
    namespace time {
        namespace chrono {
            interface Era extends java.time.temporal.TemporalAccessor , java.time.temporal.TemporalAdjuster {
                getValue(): int
                isSupported(arg0: java.time.temporal.TemporalField): boolean
                range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
                get(arg0: java.time.temporal.TemporalField): int
                getLong(arg0: java.time.temporal.TemporalField): long
                query<R>(arg0: java.time.temporal.TemporalQuery<R> | java.time.temporal.TemporalQuery$$Lambda<R>): R
                adjustInto<R>(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
                getDisplayName<R>(arg0: java.time.format.TextStyle, arg1: java.util.Locale): string
            }
        }
    }
}
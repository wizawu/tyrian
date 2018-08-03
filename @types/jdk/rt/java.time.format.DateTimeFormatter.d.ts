declare namespace java {
    namespace time {
        namespace format {
            class DateTimeFormatter {
                public static readonly ISO_LOCAL_DATE: java.time.format.DateTimeFormatter
                public static readonly ISO_OFFSET_DATE: java.time.format.DateTimeFormatter
                public static readonly ISO_DATE: java.time.format.DateTimeFormatter
                public static readonly ISO_LOCAL_TIME: java.time.format.DateTimeFormatter
                public static readonly ISO_OFFSET_TIME: java.time.format.DateTimeFormatter
                public static readonly ISO_TIME: java.time.format.DateTimeFormatter
                public static readonly ISO_LOCAL_DATE_TIME: java.time.format.DateTimeFormatter
                public static readonly ISO_OFFSET_DATE_TIME: java.time.format.DateTimeFormatter
                public static readonly ISO_ZONED_DATE_TIME: java.time.format.DateTimeFormatter
                public static readonly ISO_DATE_TIME: java.time.format.DateTimeFormatter
                public static readonly ISO_ORDINAL_DATE: java.time.format.DateTimeFormatter
                public static readonly ISO_WEEK_DATE: java.time.format.DateTimeFormatter
                public static readonly ISO_INSTANT: java.time.format.DateTimeFormatter
                public static readonly BASIC_ISO_DATE: java.time.format.DateTimeFormatter
                public static readonly RFC_1123_DATE_TIME: java.time.format.DateTimeFormatter
                public static ofPattern(arg0: java.lang.String | string): java.time.format.DateTimeFormatter
                public static ofPattern(arg0: java.lang.String | string, arg1: java.util.Locale): java.time.format.DateTimeFormatter
                public static ofLocalizedDate(arg0: java.time.format.FormatStyle): java.time.format.DateTimeFormatter
                public static ofLocalizedTime(arg0: java.time.format.FormatStyle): java.time.format.DateTimeFormatter
                public static ofLocalizedDateTime(arg0: java.time.format.FormatStyle): java.time.format.DateTimeFormatter
                public static ofLocalizedDateTime(arg0: java.time.format.FormatStyle, arg1: java.time.format.FormatStyle): java.time.format.DateTimeFormatter
                public static parsedExcessDays(): java.time.temporal.TemporalQuery<java.time.Period>
                public static parsedLeapSecond(): java.time.temporal.TemporalQuery<java.lang.Boolean>
                public getLocale(): java.util.Locale
                public withLocale(arg0: java.util.Locale): java.time.format.DateTimeFormatter
                public getDecimalStyle(): java.time.format.DecimalStyle
                public withDecimalStyle(arg0: java.time.format.DecimalStyle): java.time.format.DateTimeFormatter
                public getChronology(): java.time.chrono.Chronology
                public withChronology(arg0: java.time.chrono.Chronology): java.time.format.DateTimeFormatter
                public getZone(): java.time.ZoneId
                public withZone(arg0: java.time.ZoneId): java.time.format.DateTimeFormatter
                public getResolverStyle(): java.time.format.ResolverStyle
                public withResolverStyle(arg0: java.time.format.ResolverStyle): java.time.format.DateTimeFormatter
                public getResolverFields(): java.util.Set<java.time.temporal.TemporalField>
                public withResolverFields(...arg0: java.time.temporal.TemporalField[]): java.time.format.DateTimeFormatter
                public withResolverFields(arg0: java.util.Set<java.time.temporal.TemporalField>): java.time.format.DateTimeFormatter
                public format(arg0: java.time.temporal.TemporalAccessor): string
                public formatTo(arg0: java.time.temporal.TemporalAccessor, arg1: java.lang.Appendable): void
                public parse(arg0: java.lang.CharSequence): java.time.temporal.TemporalAccessor
                public parse(arg0: java.lang.CharSequence, arg1: java.text.ParsePosition): java.time.temporal.TemporalAccessor
                public parse<T>(arg0: java.lang.CharSequence, arg1: java.time.temporal.TemporalQuery<T> | java.time.temporal.TemporalQuery$$Lambda<T>): T
                public parseBest<T>(arg0: java.lang.CharSequence, ...arg1: java.time.temporal.TemporalQuery<any>[]): java.time.temporal.TemporalAccessor
                public parseUnresolved<T>(arg0: java.lang.CharSequence, arg1: java.text.ParsePosition): java.time.temporal.TemporalAccessor
                public toFormat<T>(): java.text.Format
                public toFormat<T>(arg0: java.time.temporal.TemporalQuery<any> | java.time.temporal.TemporalQuery$$Lambda<any>): java.text.Format
                public toString<T>(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}
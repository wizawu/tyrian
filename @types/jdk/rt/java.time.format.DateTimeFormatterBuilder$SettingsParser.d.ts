declare namespace java {
    namespace time {
        namespace format {
            class DateTimeFormatterBuilder$SettingsParser extends java.lang.Enum<java.time.format.DateTimeFormatterBuilder$SettingsParser> implements java.time.format.DateTimeFormatterBuilder$DateTimePrinterParser {
                public static SENSITIVE: java.time.format.DateTimeFormatterBuilder$SettingsParser
                public static INSENSITIVE: java.time.format.DateTimeFormatterBuilder$SettingsParser
                public static STRICT: java.time.format.DateTimeFormatterBuilder$SettingsParser
                public static LENIENT: java.time.format.DateTimeFormatterBuilder$SettingsParser
                public static values(): java.time.format.DateTimeFormatterBuilder$SettingsParser[]
                public static valueOf(arg0: java.lang.String | string): java.time.format.DateTimeFormatterBuilder$SettingsParser
                public format(arg0: java.time.format.DateTimePrintContext, arg1: java.lang.StringBuilder): boolean
                public parse(arg0: java.time.format.DateTimeParseContext, arg1: java.lang.CharSequence, arg2: int): int
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}
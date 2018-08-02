declare namespace java {
    namespace text {
        abstract class DateFormat extends java.text.Format {
            protected calendar: java.util.Calendar
            protected numberFormat: java.text.NumberFormat
            public static ERA_FIELD: int
            public static YEAR_FIELD: int
            public static MONTH_FIELD: int
            public static DATE_FIELD: int
            public static HOUR_OF_DAY1_FIELD: int
            public static HOUR_OF_DAY0_FIELD: int
            public static MINUTE_FIELD: int
            public static SECOND_FIELD: int
            public static MILLISECOND_FIELD: int
            public static DAY_OF_WEEK_FIELD: int
            public static DAY_OF_YEAR_FIELD: int
            public static DAY_OF_WEEK_IN_MONTH_FIELD: int
            public static WEEK_OF_YEAR_FIELD: int
            public static WEEK_OF_MONTH_FIELD: int
            public static AM_PM_FIELD: int
            public static HOUR1_FIELD: int
            public static HOUR0_FIELD: int
            public static TIMEZONE_FIELD: int
            public static FULL: int
            public static LONG: int
            public static MEDIUM: int
            public static SHORT: int
            public static DEFAULT: int
            public format(arg0: java.lang.Object, arg1: java.lang.StringBuffer, arg2: java.text.FieldPosition): java.lang.StringBuffer
            public format(arg0: java.util.Date, arg1: java.lang.StringBuffer, arg2: java.text.FieldPosition): java.lang.StringBuffer
            public format(arg0: java.util.Date): string
            public parse(arg0: java.lang.String | string): java.util.Date
            public parse(arg0: java.lang.String | string, arg1: java.text.ParsePosition): java.util.Date
            public parseObject(arg0: java.lang.String | string, arg1: java.text.ParsePosition): java.lang.Object
            public static getTimeInstance(): java.text.DateFormat
            public static getTimeInstance(arg0: int): java.text.DateFormat
            public static getTimeInstance(arg0: int, arg1: java.util.Locale): java.text.DateFormat
            public static getDateInstance(): java.text.DateFormat
            public static getDateInstance(arg0: int): java.text.DateFormat
            public static getDateInstance(arg0: int, arg1: java.util.Locale): java.text.DateFormat
            public static getDateTimeInstance(): java.text.DateFormat
            public static getDateTimeInstance(arg0: int, arg1: int): java.text.DateFormat
            public static getDateTimeInstance(arg0: int, arg1: int, arg2: java.util.Locale): java.text.DateFormat
            public static getInstance(): java.text.DateFormat
            public static getAvailableLocales(): java.util.Locale[]
            public setCalendar(arg0: java.util.Calendar): void
            public getCalendar(): java.util.Calendar
            public setNumberFormat(arg0: java.text.NumberFormat): void
            public getNumberFormat(): java.text.NumberFormat
            public setTimeZone(arg0: java.util.TimeZone): void
            public getTimeZone(): java.util.TimeZone
            public setLenient(arg0: boolean): void
            public isLenient(): boolean
            public hashCode(): int
            public equals(arg0: java.lang.Object): boolean
            public clone(): java.lang.Object
            protected constructor()
            public static class: java.lang.Class<any>
        }
    }
}
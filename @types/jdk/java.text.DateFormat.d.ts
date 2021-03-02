declare namespace java {
  namespace text {

    abstract class DateFormat extends java.text.Format {
      protected calendar: java.util.Calendar
      protected numberFormat: java.text.NumberFormat
      public static readonly ERA_FIELD: int
      public static readonly YEAR_FIELD: int
      public static readonly MONTH_FIELD: int
      public static readonly DATE_FIELD: int
      public static readonly HOUR_OF_DAY1_FIELD: int
      public static readonly HOUR_OF_DAY0_FIELD: int
      public static readonly MINUTE_FIELD: int
      public static readonly SECOND_FIELD: int
      public static readonly MILLISECOND_FIELD: int
      public static readonly DAY_OF_WEEK_FIELD: int
      public static readonly DAY_OF_YEAR_FIELD: int
      public static readonly DAY_OF_WEEK_IN_MONTH_FIELD: int
      public static readonly WEEK_OF_YEAR_FIELD: int
      public static readonly WEEK_OF_MONTH_FIELD: int
      public static readonly AM_PM_FIELD: int
      public static readonly HOUR1_FIELD: int
      public static readonly HOUR0_FIELD: int
      public static readonly TIMEZONE_FIELD: int
      public static readonly FULL: int
      public static readonly LONG: int
      public static readonly MEDIUM: int
      public static readonly SHORT: int
      public static readonly DEFAULT: int
      public format(arg0: java.lang.Object | any, arg1: java.lang.StringBuffer, arg2: java.text.FieldPosition): java.lang.StringBuffer
      public abstract format(arg0: java.util.Date, arg1: java.lang.StringBuffer, arg2: java.text.FieldPosition): java.lang.StringBuffer
      public format(arg0: java.util.Date): java.lang.String
      public parse(arg0: java.lang.String | string): java.util.Date
      public abstract parse(arg0: java.lang.String | string, arg1: java.text.ParsePosition): java.util.Date
      public parseObject(arg0: java.lang.String | string, arg1: java.text.ParsePosition): java.lang.Object
      public static getTimeInstance(): java.text.DateFormat
      public static getTimeInstance(arg0: number | java.lang.Integer): java.text.DateFormat
      public static getTimeInstance(arg0: number | java.lang.Integer, arg1: java.util.Locale): java.text.DateFormat
      public static getDateInstance(): java.text.DateFormat
      public static getDateInstance(arg0: number | java.lang.Integer): java.text.DateFormat
      public static getDateInstance(arg0: number | java.lang.Integer, arg1: java.util.Locale): java.text.DateFormat
      public static getDateTimeInstance(): java.text.DateFormat
      public static getDateTimeInstance(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.text.DateFormat
      public static getDateTimeInstance(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.util.Locale): java.text.DateFormat
      public static getInstance(): java.text.DateFormat
      public static getAvailableLocales(): java.util.Locale[]
      public setCalendar(arg0: java.util.Calendar): void
      public getCalendar(): java.util.Calendar
      public setNumberFormat(arg0: java.text.NumberFormat): void
      public getNumberFormat(): java.text.NumberFormat
      public setTimeZone(arg0: java.util.TimeZone): void
      public getTimeZone(): java.util.TimeZone
      public setLenient(arg0: boolean | java.lang.Boolean): void
      public isLenient(): boolean
      public hashCode(): number
      public equals(arg0: java.lang.Object | any): boolean
      public clone(): java.lang.Object
      protected constructor()
    }

  }
}

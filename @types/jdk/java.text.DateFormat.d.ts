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
      public readonly format(arg0: java.lang.Object, arg1: java.lang.StringBuffer, arg2: java.text.FieldPosition): java.lang.StringBuffer
      public abstract format(arg0: java.util.Date, arg1: java.lang.StringBuffer, arg2: java.text.FieldPosition): java.lang.StringBuffer
      public readonly format(arg0: java.util.Date): java.lang.String
      public parse(arg0: java.lang.String): java.util.Date
      public abstract parse(arg0: java.lang.String, arg1: java.text.ParsePosition): java.util.Date
      public parseObject(arg0: java.lang.String, arg1: java.text.ParsePosition): java.lang.Object
      public static readonly getTimeInstance(): java.text.DateFormat
      public static readonly getTimeInstance(arg0: int): java.text.DateFormat
      public static readonly getTimeInstance(arg0: int, arg1: java.util.Locale): java.text.DateFormat
      public static readonly getDateInstance(): java.text.DateFormat
      public static readonly getDateInstance(arg0: int): java.text.DateFormat
      public static readonly getDateInstance(arg0: int, arg1: java.util.Locale): java.text.DateFormat
      public static readonly getDateTimeInstance(): java.text.DateFormat
      public static readonly getDateTimeInstance(arg0: int, arg1: int): java.text.DateFormat
      public static readonly getDateTimeInstance(arg0: int, arg1: int, arg2: java.util.Locale): java.text.DateFormat
      public static readonly getInstance(): java.text.DateFormat
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
    }

  }
}

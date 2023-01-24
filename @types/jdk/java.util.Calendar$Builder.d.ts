declare namespace java {
  namespace util {
    class Calendar$Builder {
      public constructor()
      public setInstant(arg0: number | java.lang.Long): java.util.Calendar$Builder
      public setInstant(arg0: java.util.Date): java.util.Calendar$Builder
      public set(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.util.Calendar$Builder
      public setFields(...vargs: (number | java.lang.Integer)[]): java.util.Calendar$Builder
      public setDate(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.util.Calendar$Builder
      public setTimeOfDay(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.util.Calendar$Builder
      public setTimeOfDay(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer
      ): java.util.Calendar$Builder
      public setWeekDate(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.util.Calendar$Builder
      public setTimeZone(arg0: java.util.TimeZone): java.util.Calendar$Builder
      public setLenient(arg0: boolean | java.lang.Boolean): java.util.Calendar$Builder
      public setCalendarType(arg0: java.lang.String | string): java.util.Calendar$Builder
      public setLocale(arg0: java.util.Locale): java.util.Calendar$Builder
      public setWeekDefinition(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer
      ): java.util.Calendar$Builder
      public build(): java.util.Calendar
    }
  }
}

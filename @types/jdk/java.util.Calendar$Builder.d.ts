declare namespace java {
  namespace util {

    class Calendar$Builder {
      public constructor()
      public setInstant(arg0: long): java.util.Calendar$Builder
      public setInstant(arg0: java.util.Date): java.util.Calendar$Builder
      public set(arg0: int, arg1: int): java.util.Calendar$Builder
      public setFields(...arg0: int[]): java.util.Calendar$Builder
      public setDate(arg0: int, arg1: int, arg2: int): java.util.Calendar$Builder
      public setTimeOfDay(arg0: int, arg1: int, arg2: int): java.util.Calendar$Builder
      public setTimeOfDay(arg0: int, arg1: int, arg2: int, arg3: int): java.util.Calendar$Builder
      public setWeekDate(arg0: int, arg1: int, arg2: int): java.util.Calendar$Builder
      public setTimeZone(arg0: java.util.TimeZone): java.util.Calendar$Builder
      public setLenient(arg0: boolean): java.util.Calendar$Builder
      public setCalendarType(arg0: java.lang.String): java.util.Calendar$Builder
      public setLocale(arg0: java.util.Locale): java.util.Calendar$Builder
      public setWeekDefinition(arg0: int, arg1: int): java.util.Calendar$Builder
      public build(): java.util.Calendar
    }

  }
}

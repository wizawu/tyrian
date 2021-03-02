declare namespace java {
  namespace text {

    class DateFormatSymbols implements java.io.Serializable, java.lang.Cloneable {
      eras: java.lang.String[]
      months: java.lang.String[]
      shortMonths: java.lang.String[]
      weekdays: java.lang.String[]
      shortWeekdays: java.lang.String[]
      ampms: java.lang.String[]
      zoneStrings: java.lang.String[][]
      isZoneStringsSet: boolean
      static readonly patternChars: java.lang.String
      static readonly PATTERN_ERA: int
      static readonly PATTERN_YEAR: int
      static readonly PATTERN_MONTH: int
      static readonly PATTERN_DAY_OF_MONTH: int
      static readonly PATTERN_HOUR_OF_DAY1: int
      static readonly PATTERN_HOUR_OF_DAY0: int
      static readonly PATTERN_MINUTE: int
      static readonly PATTERN_SECOND: int
      static readonly PATTERN_MILLISECOND: int
      static readonly PATTERN_DAY_OF_WEEK: int
      static readonly PATTERN_DAY_OF_YEAR: int
      static readonly PATTERN_DAY_OF_WEEK_IN_MONTH: int
      static readonly PATTERN_WEEK_OF_YEAR: int
      static readonly PATTERN_WEEK_OF_MONTH: int
      static readonly PATTERN_AM_PM: int
      static readonly PATTERN_HOUR1: int
      static readonly PATTERN_HOUR0: int
      static readonly PATTERN_ZONE_NAME: int
      static readonly PATTERN_ZONE_VALUE: int
      static readonly PATTERN_WEEK_YEAR: int
      static readonly PATTERN_ISO_DAY_OF_WEEK: int
      static readonly PATTERN_ISO_ZONE: int
      static readonly PATTERN_MONTH_STANDALONE: int
      localPatternChars: java.lang.String
      locale: java.util.Locale
      static readonly serialVersionUID: long
      static readonly millisPerHour: int
      cachedHashCode: int
      public constructor()
      public constructor(arg0: java.util.Locale)
      public static getAvailableLocales(): java.util.Locale[]
      public static getInstance(): java.text.DateFormatSymbols
      public static getInstance(arg0: java.util.Locale): java.text.DateFormatSymbols
      static getInstanceRef(arg0: java.util.Locale): java.text.DateFormatSymbols
      public getEras(): java.lang.String[]
      public setEras(arg0: java.lang.String[]): void
      public getMonths(): java.lang.String[]
      public setMonths(arg0: java.lang.String[]): void
      public getShortMonths(): java.lang.String[]
      public setShortMonths(arg0: java.lang.String[]): void
      public getWeekdays(): java.lang.String[]
      public setWeekdays(arg0: java.lang.String[]): void
      public getShortWeekdays(): java.lang.String[]
      public setShortWeekdays(arg0: java.lang.String[]): void
      public getAmPmStrings(): java.lang.String[]
      public setAmPmStrings(arg0: java.lang.String[]): void
      public getZoneStrings(): java.lang.String[][]
      public setZoneStrings(arg0: java.lang.String[][]): void
      public getLocalPatternChars(): java.lang.String
      public setLocalPatternChars(arg0: java.lang.String | string): void
      public clone(): java.lang.Object
      public hashCode(): number
      public equals(arg0: java.lang.Object | any): boolean
      getZoneIndex(arg0: java.lang.String | string): number
      getZoneStringsWrapper(): java.lang.String[][]
    }

  }
}

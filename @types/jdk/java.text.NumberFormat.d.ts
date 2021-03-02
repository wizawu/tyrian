declare namespace java {
  namespace text {

    abstract class NumberFormat extends java.text.Format {
      public static readonly INTEGER_FIELD: int
      public static readonly FRACTION_FIELD: int
      static readonly currentSerialVersion: int
      static readonly serialVersionUID: long
      protected constructor()
      public format(arg0: java.lang.Object | any, arg1: java.lang.StringBuffer, arg2: java.text.FieldPosition): java.lang.StringBuffer
      public parseObject(arg0: java.lang.String | string, arg1: java.text.ParsePosition): java.lang.Object
      public format(arg0: number | java.lang.Double): java.lang.String
      fastFormat(arg0: number | java.lang.Double): java.lang.String
      public format(arg0: number | java.lang.Long): java.lang.String
      public abstract format(arg0: number | java.lang.Double, arg1: java.lang.StringBuffer, arg2: java.text.FieldPosition): java.lang.StringBuffer
      public abstract format(arg0: number | java.lang.Long, arg1: java.lang.StringBuffer, arg2: java.text.FieldPosition): java.lang.StringBuffer
      public abstract parse(arg0: java.lang.String | string, arg1: java.text.ParsePosition): java.lang.Number
      public parse(arg0: java.lang.String | string): java.lang.Number
      public isParseIntegerOnly(): boolean
      public setParseIntegerOnly(arg0: boolean | java.lang.Boolean): void
      public static getInstance(): java.text.NumberFormat
      public static getInstance(arg0: java.util.Locale): java.text.NumberFormat
      public static getNumberInstance(): java.text.NumberFormat
      public static getNumberInstance(arg0: java.util.Locale): java.text.NumberFormat
      public static getIntegerInstance(): java.text.NumberFormat
      public static getIntegerInstance(arg0: java.util.Locale): java.text.NumberFormat
      public static getCurrencyInstance(): java.text.NumberFormat
      public static getCurrencyInstance(arg0: java.util.Locale): java.text.NumberFormat
      public static getPercentInstance(): java.text.NumberFormat
      public static getPercentInstance(arg0: java.util.Locale): java.text.NumberFormat
      static getScientificInstance(): java.text.NumberFormat
      static getScientificInstance(arg0: java.util.Locale): java.text.NumberFormat
      public static getAvailableLocales(): java.util.Locale[]
      public hashCode(): number
      public equals(arg0: java.lang.Object | any): boolean
      public clone(): java.lang.Object
      public isGroupingUsed(): boolean
      public setGroupingUsed(arg0: boolean | java.lang.Boolean): void
      public getMaximumIntegerDigits(): number
      public setMaximumIntegerDigits(arg0: number | java.lang.Integer): void
      public getMinimumIntegerDigits(): number
      public setMinimumIntegerDigits(arg0: number | java.lang.Integer): void
      public getMaximumFractionDigits(): number
      public setMaximumFractionDigits(arg0: number | java.lang.Integer): void
      public getMinimumFractionDigits(): number
      public setMinimumFractionDigits(arg0: number | java.lang.Integer): void
      public getCurrency(): java.util.Currency
      public setCurrency(arg0: java.util.Currency): void
      public getRoundingMode(): java.math.RoundingMode
      public setRoundingMode(arg0: java.math.RoundingMode): void
    }

  }
}

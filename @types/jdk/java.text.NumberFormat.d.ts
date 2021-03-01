declare namespace java {
  namespace text {

    abstract class NumberFormat extends java.text.Format {

      public static readonly INTEGER_FIELD: int
      public static readonly FRACTION_FIELD: int
      static readonly currentSerialVersion: int
      static readonly serialVersionUID: long
      protected constructor()
      public format(arg0: java.lang.Object, arg1: java.lang.StringBuffer, arg2: java.text.FieldPosition): java.lang.StringBuffer
      public readonly parseObject(arg0: java.lang.String, arg1: java.text.ParsePosition): java.lang.Object
      public readonly format(arg0: double): java.lang.String
      fastFormat(arg0: double): java.lang.String
      public readonly format(arg0: long): java.lang.String
      public abstract format(arg0: double, arg1: java.lang.StringBuffer, arg2: java.text.FieldPosition): java.lang.StringBuffer
      public abstract format(arg0: long, arg1: java.lang.StringBuffer, arg2: java.text.FieldPosition): java.lang.StringBuffer
      public abstract parse(arg0: java.lang.String, arg1: java.text.ParsePosition): java.lang.Number
      public parse(arg0: java.lang.String): java.lang.Number
      public isParseIntegerOnly(): boolean
      public setParseIntegerOnly(arg0: boolean): void
      public static readonly getInstance(): java.text.NumberFormat
      public static getInstance(arg0: java.util.Locale): java.text.NumberFormat
      public static readonly getNumberInstance(): java.text.NumberFormat
      public static getNumberInstance(arg0: java.util.Locale): java.text.NumberFormat
      public static readonly getIntegerInstance(): java.text.NumberFormat
      public static getIntegerInstance(arg0: java.util.Locale): java.text.NumberFormat
      public static readonly getCurrencyInstance(): java.text.NumberFormat
      public static getCurrencyInstance(arg0: java.util.Locale): java.text.NumberFormat
      public static readonly getPercentInstance(): java.text.NumberFormat
      public static getPercentInstance(arg0: java.util.Locale): java.text.NumberFormat
      static readonly getScientificInstance(): java.text.NumberFormat
      static getScientificInstance(arg0: java.util.Locale): java.text.NumberFormat
      public static getAvailableLocales(): java.util.Locale[]
      public hashCode(): int
      public equals(arg0: java.lang.Object): boolean
      public clone(): java.lang.Object
      public isGroupingUsed(): boolean
      public setGroupingUsed(arg0: boolean): void
      public getMaximumIntegerDigits(): int
      public setMaximumIntegerDigits(arg0: int): void
      public getMinimumIntegerDigits(): int
      public setMinimumIntegerDigits(arg0: int): void
      public getMaximumFractionDigits(): int
      public setMaximumFractionDigits(arg0: int): void
      public getMinimumFractionDigits(): int
      public setMinimumFractionDigits(arg0: int): void
      public getCurrency(): java.util.Currency
      public setCurrency(arg0: java.util.Currency): void
      public getRoundingMode(): java.math.RoundingMode
      public setRoundingMode(arg0: java.math.RoundingMode): void
    }

  }
}

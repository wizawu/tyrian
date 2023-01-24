declare namespace java {
  namespace text {
    class DecimalFormat extends java.text.NumberFormat {
      static readonly currentSerialVersion: int
      static readonly DOUBLE_INTEGER_DIGITS: int
      static readonly DOUBLE_FRACTION_DIGITS: int
      static readonly MAXIMUM_INTEGER_DIGITS: int
      static readonly MAXIMUM_FRACTION_DIGITS: int
      static readonly serialVersionUID: long
      static readonly $assertionsDisabled: boolean
      public constructor()
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: java.lang.String | string, arg1: java.text.DecimalFormatSymbols)
      public format(
        arg0: java.lang.Object | any,
        arg1: java.lang.StringBuffer,
        arg2: java.text.FieldPosition
      ): java.lang.StringBuffer
      public format(
        arg0: number | java.lang.Double,
        arg1: java.lang.StringBuffer,
        arg2: java.text.FieldPosition
      ): java.lang.StringBuffer
      public format(
        arg0: number | java.lang.Long,
        arg1: java.lang.StringBuffer,
        arg2: java.text.FieldPosition
      ): java.lang.StringBuffer
      public formatToCharacterIterator(arg0: java.lang.Object | any): java.text.AttributedCharacterIterator
      fastFormat(arg0: number | java.lang.Double): java.lang.String
      public parse(arg0: java.lang.String | string, arg1: java.text.ParsePosition): java.lang.Number
      public getDecimalFormatSymbols(): java.text.DecimalFormatSymbols
      public setDecimalFormatSymbols(arg0: java.text.DecimalFormatSymbols): void
      public getPositivePrefix(): java.lang.String
      public setPositivePrefix(arg0: java.lang.String | string): void
      public getNegativePrefix(): java.lang.String
      public setNegativePrefix(arg0: java.lang.String | string): void
      public getPositiveSuffix(): java.lang.String
      public setPositiveSuffix(arg0: java.lang.String | string): void
      public getNegativeSuffix(): java.lang.String
      public setNegativeSuffix(arg0: java.lang.String | string): void
      public getMultiplier(): number
      public setMultiplier(arg0: number | java.lang.Integer): void
      public setGroupingUsed(arg0: boolean | java.lang.Boolean): void
      public getGroupingSize(): number
      public setGroupingSize(arg0: number | java.lang.Integer): void
      public isDecimalSeparatorAlwaysShown(): boolean
      public setDecimalSeparatorAlwaysShown(arg0: boolean | java.lang.Boolean): void
      public isParseBigDecimal(): boolean
      public setParseBigDecimal(arg0: boolean | java.lang.Boolean): void
      public clone(): java.lang.Object
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public toPattern(): java.lang.String
      public toLocalizedPattern(): java.lang.String
      public applyPattern(arg0: java.lang.String | string): void
      public applyLocalizedPattern(arg0: java.lang.String | string): void
      public setMaximumIntegerDigits(arg0: number | java.lang.Integer): void
      public setMinimumIntegerDigits(arg0: number | java.lang.Integer): void
      public setMaximumFractionDigits(arg0: number | java.lang.Integer): void
      public setMinimumFractionDigits(arg0: number | java.lang.Integer): void
      public getMaximumIntegerDigits(): number
      public getMinimumIntegerDigits(): number
      public getMaximumFractionDigits(): number
      public getMinimumFractionDigits(): number
      public getCurrency(): java.util.Currency
      public setCurrency(arg0: java.util.Currency): void
      public getRoundingMode(): java.math.RoundingMode
      public setRoundingMode(arg0: java.math.RoundingMode): void
    }
  }
}

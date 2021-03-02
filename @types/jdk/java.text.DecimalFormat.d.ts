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
      public constructor(arg0: java.lang.String)
      public constructor(arg0: java.lang.String, arg1: java.text.DecimalFormatSymbols)
      public format(arg0: java.lang.Object, arg1: java.lang.StringBuffer, arg2: java.text.FieldPosition): java.lang.StringBuffer
      public format(arg0: double, arg1: java.lang.StringBuffer, arg2: java.text.FieldPosition): java.lang.StringBuffer
      public format(arg0: long, arg1: java.lang.StringBuffer, arg2: java.text.FieldPosition): java.lang.StringBuffer
      public formatToCharacterIterator(arg0: java.lang.Object): java.text.AttributedCharacterIterator
      fastFormat(arg0: double): java.lang.String
      public parse(arg0: java.lang.String, arg1: java.text.ParsePosition): java.lang.Number
      public getDecimalFormatSymbols(): java.text.DecimalFormatSymbols
      public setDecimalFormatSymbols(arg0: java.text.DecimalFormatSymbols): void
      public getPositivePrefix(): java.lang.String
      public setPositivePrefix(arg0: java.lang.String): void
      public getNegativePrefix(): java.lang.String
      public setNegativePrefix(arg0: java.lang.String): void
      public getPositiveSuffix(): java.lang.String
      public setPositiveSuffix(arg0: java.lang.String): void
      public getNegativeSuffix(): java.lang.String
      public setNegativeSuffix(arg0: java.lang.String): void
      public getMultiplier(): int
      public setMultiplier(arg0: int): void
      public setGroupingUsed(arg0: boolean): void
      public getGroupingSize(): int
      public setGroupingSize(arg0: int): void
      public isDecimalSeparatorAlwaysShown(): boolean
      public setDecimalSeparatorAlwaysShown(arg0: boolean): void
      public isParseBigDecimal(): boolean
      public setParseBigDecimal(arg0: boolean): void
      public clone(): java.lang.Object
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      public toPattern(): java.lang.String
      public toLocalizedPattern(): java.lang.String
      public applyPattern(arg0: java.lang.String): void
      public applyLocalizedPattern(arg0: java.lang.String): void
      public setMaximumIntegerDigits(arg0: int): void
      public setMinimumIntegerDigits(arg0: int): void
      public setMaximumFractionDigits(arg0: int): void
      public setMinimumFractionDigits(arg0: int): void
      public getMaximumIntegerDigits(): int
      public getMinimumIntegerDigits(): int
      public getMaximumFractionDigits(): int
      public getMinimumFractionDigits(): int
      public getCurrency(): java.util.Currency
      public setCurrency(arg0: java.util.Currency): void
      public getRoundingMode(): java.math.RoundingMode
      public setRoundingMode(arg0: java.math.RoundingMode): void
    }

  }
}

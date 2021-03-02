declare namespace java {
  namespace text {

    class DecimalFormatSymbols implements java.lang.Cloneable, java.io.Serializable {
      static readonly serialVersionUID: long
      public constructor()
      public constructor(arg0: java.util.Locale)
      public static getAvailableLocales(): java.util.Locale[]
      public static getInstance(): java.text.DecimalFormatSymbols
      public static getInstance(arg0: java.util.Locale): java.text.DecimalFormatSymbols
      public getZeroDigit(): char
      public setZeroDigit(arg0: char): void
      public getGroupingSeparator(): char
      public setGroupingSeparator(arg0: char): void
      public getDecimalSeparator(): char
      public setDecimalSeparator(arg0: char): void
      public getPerMill(): char
      public setPerMill(arg0: char): void
      public getPercent(): char
      public setPercent(arg0: char): void
      public getDigit(): char
      public setDigit(arg0: char): void
      public getPatternSeparator(): char
      public setPatternSeparator(arg0: char): void
      public getInfinity(): java.lang.String
      public setInfinity(arg0: java.lang.String): void
      public getNaN(): java.lang.String
      public setNaN(arg0: java.lang.String): void
      public getMinusSign(): char
      public setMinusSign(arg0: char): void
      public getCurrencySymbol(): java.lang.String
      public setCurrencySymbol(arg0: java.lang.String): void
      public getInternationalCurrencySymbol(): java.lang.String
      public setInternationalCurrencySymbol(arg0: java.lang.String): void
      public getCurrency(): java.util.Currency
      public setCurrency(arg0: java.util.Currency): void
      public getMonetaryDecimalSeparator(): char
      public setMonetaryDecimalSeparator(arg0: char): void
      getExponentialSymbol(): char
      public getExponentSeparator(): java.lang.String
      setExponentialSymbol(arg0: char): void
      public setExponentSeparator(arg0: java.lang.String): void
      public clone(): java.lang.Object
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
    }

  }
}

declare namespace java {
  namespace text {
    class DecimalFormatSymbols implements java.lang.Cloneable, java.io.Serializable {
      static readonly serialVersionUID: long
      public constructor()
      public constructor(arg0: java.util.Locale)
      public static getAvailableLocales(): java.util.Locale[]
      public static getInstance(): java.text.DecimalFormatSymbols
      public static getInstance(arg0: java.util.Locale): java.text.DecimalFormatSymbols
      public getZeroDigit(): string
      public setZeroDigit(arg0: string | java.lang.Character): void
      public getGroupingSeparator(): string
      public setGroupingSeparator(arg0: string | java.lang.Character): void
      public getDecimalSeparator(): string
      public setDecimalSeparator(arg0: string | java.lang.Character): void
      public getPerMill(): string
      public setPerMill(arg0: string | java.lang.Character): void
      public getPercent(): string
      public setPercent(arg0: string | java.lang.Character): void
      public getDigit(): string
      public setDigit(arg0: string | java.lang.Character): void
      public getPatternSeparator(): string
      public setPatternSeparator(arg0: string | java.lang.Character): void
      public getInfinity(): java.lang.String
      public setInfinity(arg0: java.lang.String | string): void
      public getNaN(): java.lang.String
      public setNaN(arg0: java.lang.String | string): void
      public getMinusSign(): string
      public setMinusSign(arg0: string | java.lang.Character): void
      public getCurrencySymbol(): java.lang.String
      public setCurrencySymbol(arg0: java.lang.String | string): void
      public getInternationalCurrencySymbol(): java.lang.String
      public setInternationalCurrencySymbol(arg0: java.lang.String | string): void
      public getCurrency(): java.util.Currency
      public setCurrency(arg0: java.util.Currency): void
      public getMonetaryDecimalSeparator(): string
      public setMonetaryDecimalSeparator(arg0: string | java.lang.Character): void
      getExponentialSymbol(): string
      public getExponentSeparator(): java.lang.String
      setExponentialSymbol(arg0: string | java.lang.Character): void
      public setExponentSeparator(arg0: java.lang.String | string): void
      public clone(): java.lang.Object
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
    }
  }
}

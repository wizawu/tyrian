declare namespace java {
  namespace util {

    class Currency implements java.io.Serializable {
      static formatVersion: int
      static dataVersion: int
      static mainTable: int[]
      static specialCasesList: java.util.List<java.util.Currency$SpecialCaseEntry>
      static otherCurrenciesList: java.util.List<java.util.Currency$OtherCurrencyEntry>
      public static getInstance(arg0: java.lang.String | string): java.util.Currency
      public static getInstance(arg0: java.util.Locale): java.util.Currency
      public static getAvailableCurrencies(): java.util.Set<java.util.Currency>
      public getCurrencyCode(): java.lang.String
      public getSymbol(): java.lang.String
      public getSymbol(arg0: java.util.Locale): java.lang.String
      public getDefaultFractionDigits(): number
      public getNumericCode(): number
      public getNumericCodeAsString(): java.lang.String
      public getDisplayName(): java.lang.String
      public getDisplayName(arg0: java.util.Locale): java.lang.String
      public toString(): java.lang.String
    }

  }
}

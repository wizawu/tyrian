declare namespace java {
  namespace time {
    namespace format {

      class DecimalStyle {
        public static readonly STANDARD: java.time.format.DecimalStyle
        public static getAvailableLocales(): java.util.Set<java.util.Locale>
        public static ofDefaultLocale(): java.time.format.DecimalStyle
        public static of(arg0: java.util.Locale): java.time.format.DecimalStyle
        public getZeroDigit(): string
        public withZeroDigit(arg0: string | java.lang.Character): java.time.format.DecimalStyle
        public getPositiveSign(): string
        public withPositiveSign(arg0: string | java.lang.Character): java.time.format.DecimalStyle
        public getNegativeSign(): string
        public withNegativeSign(arg0: string | java.lang.Character): java.time.format.DecimalStyle
        public getDecimalSeparator(): string
        public withDecimalSeparator(arg0: string | java.lang.Character): java.time.format.DecimalStyle
        convertToDigit(arg0: string | java.lang.Character): number
        convertNumberToI18N(arg0: java.lang.String | string): java.lang.String
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public toString(): java.lang.String
      }

    }
  }
}

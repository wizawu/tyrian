declare namespace java {
  namespace time {
    namespace format {

      class DecimalStyle {

        public static readonly STANDARD: java.time.format.DecimalStyle
        public static getAvailableLocales(): java.util.Set<java.util.Locale>
        public static ofDefaultLocale(): java.time.format.DecimalStyle
        public static of(arg0: java.util.Locale): java.time.format.DecimalStyle
        public getZeroDigit(): char
        public withZeroDigit(arg0: char): java.time.format.DecimalStyle
        public getPositiveSign(): char
        public withPositiveSign(arg0: char): java.time.format.DecimalStyle
        public getNegativeSign(): char
        public withNegativeSign(arg0: char): java.time.format.DecimalStyle
        public getDecimalSeparator(): char
        public withDecimalSeparator(arg0: char): java.time.format.DecimalStyle
        convertToDigit(arg0: char): int
        convertNumberToI18N(arg0: java.lang.String): java.lang.String
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
        public toString(): java.lang.String
      }

    }
  }
}

declare namespace java {
    namespace time {
        namespace format {
class DecimalStyle {
    public static STANDARD: java.time.format.DecimalStyle
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
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}
declare namespace java {
    namespace util {
class Currency implements java.io.Serializable {
    public static getInstance(arg0: java.lang.String | string): java.util.Currency
    public static getInstance(arg0: java.util.Locale): java.util.Currency
    public static getAvailableCurrencies(): java.util.Set<java.util.Currency>
    public getCurrencyCode(): string
    public getSymbol(): string
    public getSymbol(arg0: java.util.Locale): string
    public getDefaultFractionDigits(): int
    public getNumericCode(): int
    public getDisplayName(): string
    public getDisplayName(arg0: java.util.Locale): string
    public toString(): string
    public static class: java.lang.Class<any>
}

    }
}
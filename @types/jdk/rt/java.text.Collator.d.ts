declare namespace java {
    namespace text {
abstract class Collator implements java.util.Comparator<java.lang.Object> , java.lang.Cloneable {
    public static PRIMARY: int
    public static SECONDARY: int
    public static TERTIARY: int
    public static IDENTICAL: int
    public static NO_DECOMPOSITION: int
    public static CANONICAL_DECOMPOSITION: int
    public static FULL_DECOMPOSITION: int
    public static getInstance(): java.text.Collator
    public static getInstance(arg0: java.util.Locale): java.text.Collator
    public compare(arg0: java.lang.String | string, arg1: java.lang.String | string): int
    public compare(arg0: java.lang.Object, arg1: java.lang.Object): int
    public getCollationKey(arg0: java.lang.String | string): java.text.CollationKey
    public equals(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
    public getStrength(): int
    public setStrength(arg0: int): void
    public getDecomposition(): int
    public setDecomposition(arg0: int): void
    public static getAvailableLocales(): java.util.Locale[]
    public clone(): java.lang.Object
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    protected constructor()
    public static class: java.lang.Class<any>
}

    }
}
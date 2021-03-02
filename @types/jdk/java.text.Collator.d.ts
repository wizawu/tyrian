declare namespace java {
  namespace text {

    abstract class Collator implements java.util.Comparator<java.lang.Object>, java.lang.Cloneable {
      public static readonly PRIMARY: int
      public static readonly SECONDARY: int
      public static readonly TERTIARY: int
      public static readonly IDENTICAL: int
      public static readonly NO_DECOMPOSITION: int
      public static readonly CANONICAL_DECOMPOSITION: int
      public static readonly FULL_DECOMPOSITION: int
      static readonly LESS: int
      static readonly EQUAL: int
      static readonly GREATER: int
      public static getInstance(): java.text.Collator
      public static getInstance(arg0: java.util.Locale): java.text.Collator
      public abstract compare(arg0: java.lang.String | string, arg1: java.lang.String | string): number
      public compare(arg0: java.lang.Object | any, arg1: java.lang.Object | any): number
      public abstract getCollationKey(arg0: java.lang.String | string): java.text.CollationKey
      public equals(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
      public getStrength(): number
      public setStrength(arg0: number | java.lang.Integer): void
      public getDecomposition(): number
      public setDecomposition(arg0: number | java.lang.Integer): void
      public static getAvailableLocales(): java.util.Locale[]
      public clone(): java.lang.Object
      public equals(arg0: java.lang.Object | any): boolean
      public abstract hashCode(): number
      protected constructor()
    }

  }
}

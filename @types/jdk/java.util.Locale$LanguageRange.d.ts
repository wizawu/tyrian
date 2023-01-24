declare namespace java {
  namespace util {
    class Locale$LanguageRange {
      public static readonly MAX_WEIGHT: double
      public static readonly MIN_WEIGHT: double
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: java.lang.String | string, arg1: number | java.lang.Double)
      public getRange(): java.lang.String
      public getWeight(): number
      public static parse(arg0: java.lang.String | string): java.util.List<java.util.Locale$LanguageRange>
      public static parse(
        arg0: java.lang.String | string,
        arg1: java.util.Map<java.lang.String, java.util.List<java.lang.String>>
      ): java.util.List<java.util.Locale$LanguageRange>
      public static mapEquivalents(
        arg0: java.util.List<java.util.Locale$LanguageRange>,
        arg1: java.util.Map<java.lang.String, java.util.List<java.lang.String>>
      ): java.util.List<java.util.Locale$LanguageRange>
      public hashCode(): number
      public equals(arg0: java.lang.Object | any): boolean
      public toString(): java.lang.String
    }
  }
}

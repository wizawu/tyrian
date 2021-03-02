declare namespace java {
  namespace util {

    class Locale$LanguageRange {
      public static readonly MAX_WEIGHT: double
      public static readonly MIN_WEIGHT: double
      public constructor(arg0: java.lang.String)
      public constructor(arg0: java.lang.String, arg1: double)
      public getRange(): java.lang.String
      public getWeight(): double
      public static parse(arg0: java.lang.String): java.util.List<java.util.Locale$LanguageRange>
      public static parse(arg0: java.lang.String, arg1: java.util.Map<java.lang.String,java.util.List<java.lang.String>>): java.util.List<java.util.Locale$LanguageRange>
      public static mapEquivalents(arg0: java.util.List<java.util.Locale$LanguageRange>, arg1: java.util.Map<java.lang.String,java.util.List<java.lang.String>>): java.util.List<java.util.Locale$LanguageRange>
      public hashCode(): int
      public equals(arg0: java.lang.Object): boolean
      public toString(): java.lang.String
    }

  }
}

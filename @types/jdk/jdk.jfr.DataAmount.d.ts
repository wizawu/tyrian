declare namespace jdk {
  namespace jfr {

    interface DataAmount extends java.lang.annotation.Annotation {
      public static readonly BITS: java.lang.String
      public static readonly BYTES: java.lang.String
      value(): java.lang.String
    }

  }
}

declare namespace jdk {
  namespace jfr {
    interface DataAmount extends java.lang.annotation.Annotation {
      readonly BITS: java.lang.String
      readonly BYTES: java.lang.String
      value(): java.lang.String
    }
  }
}

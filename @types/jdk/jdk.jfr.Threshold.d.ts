declare namespace jdk {
  namespace jfr {
    interface Threshold extends java.lang.annotation.Annotation {
      readonly NAME: java.lang.String
      value(): java.lang.String
    }
  }
}

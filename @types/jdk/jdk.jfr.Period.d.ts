declare namespace jdk {
  namespace jfr {
    interface Period extends java.lang.annotation.Annotation {
      readonly NAME: java.lang.String
      value(): java.lang.String
    }
  }
}

declare namespace jdk {
  namespace jfr {
    interface StackTrace extends java.lang.annotation.Annotation {
      readonly NAME: java.lang.String
      value(): boolean
    }
  }
}

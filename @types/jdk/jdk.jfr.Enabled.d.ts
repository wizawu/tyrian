declare namespace jdk {
  namespace jfr {

    interface Enabled extends java.lang.annotation.Annotation {
      public static readonly NAME: java.lang.String
      value(): boolean
    }

  }
}

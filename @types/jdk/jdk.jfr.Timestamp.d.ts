declare namespace jdk {
  namespace jfr {

    interface Timestamp extends java.lang.annotation.Annotation {
      public static readonly MILLISECONDS_SINCE_EPOCH: java.lang.String
      public static readonly TICKS: java.lang.String
      value(): java.lang.String
    }

  }
}

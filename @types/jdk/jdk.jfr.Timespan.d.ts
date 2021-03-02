declare namespace jdk {
  namespace jfr {

    interface Timespan extends java.lang.annotation.Annotation {
      public static readonly TICKS: java.lang.String
      public static readonly SECONDS: java.lang.String
      public static readonly MILLISECONDS: java.lang.String
      public static readonly NANOSECONDS: java.lang.String
      public static readonly MICROSECONDS: java.lang.String
      value(): java.lang.String
    }

  }
}

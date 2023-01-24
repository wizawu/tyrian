declare namespace jdk {
  namespace jfr {
    interface Timespan extends java.lang.annotation.Annotation {
      readonly TICKS: java.lang.String
      readonly SECONDS: java.lang.String
      readonly MILLISECONDS: java.lang.String
      readonly NANOSECONDS: java.lang.String
      readonly MICROSECONDS: java.lang.String
      value(): java.lang.String
    }
  }
}

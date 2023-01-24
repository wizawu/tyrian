declare namespace jdk {
  namespace jfr {
    interface Timestamp extends java.lang.annotation.Annotation {
      readonly MILLISECONDS_SINCE_EPOCH: java.lang.String
      readonly TICKS: java.lang.String
      value(): java.lang.String
    }
  }
}

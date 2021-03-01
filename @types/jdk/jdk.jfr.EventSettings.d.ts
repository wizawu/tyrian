declare namespace jdk {
  namespace jfr {

    abstract class EventSettings {

      constructor()
      public readonly withStackTrace(): jdk.jfr.EventSettings
      public readonly withoutStackTrace(): jdk.jfr.EventSettings
      public readonly withoutThreshold(): jdk.jfr.EventSettings
      public readonly withPeriod(arg0: java.time.Duration): jdk.jfr.EventSettings
      public readonly withThreshold(arg0: java.time.Duration): jdk.jfr.EventSettings
      public abstract with(arg0: java.lang.String, arg1: java.lang.String): jdk.jfr.EventSettings
      abstract toMap(): java.util.Map<java.lang.String,java.lang.String>
    }

  }
}

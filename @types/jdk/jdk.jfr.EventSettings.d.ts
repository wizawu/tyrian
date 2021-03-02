declare namespace jdk {
  namespace jfr {

    abstract class EventSettings {
      constructor()
      public withStackTrace(): jdk.jfr.EventSettings
      public withoutStackTrace(): jdk.jfr.EventSettings
      public withoutThreshold(): jdk.jfr.EventSettings
      public withPeriod(arg0: java.time.Duration): jdk.jfr.EventSettings
      public withThreshold(arg0: java.time.Duration): jdk.jfr.EventSettings
      public abstract with(arg0: java.lang.String, arg1: java.lang.String): jdk.jfr.EventSettings
      abstract toMap(): java.util.Map<java.lang.String,java.lang.String>
    }

  }
}

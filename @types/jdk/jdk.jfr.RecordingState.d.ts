declare namespace jdk {
  namespace jfr {

    class RecordingState extends java.lang.Enum<jdk.jfr.RecordingState> {
      public static readonly NEW: jdk.jfr.RecordingState
      public static readonly DELAYED: jdk.jfr.RecordingState
      public static readonly RUNNING: jdk.jfr.RecordingState
      public static readonly STOPPED: jdk.jfr.RecordingState
      public static readonly CLOSED: jdk.jfr.RecordingState
      public static values(): jdk.jfr.RecordingState[]
      public static valueOf(arg0: java.lang.String): jdk.jfr.RecordingState
    }

  }
}

declare namespace jdk {
  namespace jfr {

    class FlightRecorder {
      public getRecordings(): java.util.List<jdk.jfr.Recording>
      public takeSnapshot(): jdk.jfr.Recording
      public static register(arg0: java.lang.Class<jdk.jfr.Event>): void
      public static unregister(arg0: java.lang.Class<jdk.jfr.Event>): void
      public static getFlightRecorder(): jdk.jfr.FlightRecorder
      public static addPeriodicEvent(arg0: java.lang.Class<jdk.jfr.Event>, arg1: java.lang.Runnable | java.lang.Runnable$$lambda): void
      public static removePeriodicEvent(arg0: java.lang.Runnable | java.lang.Runnable$$lambda): boolean
      public getEventTypes(): java.util.List<jdk.jfr.EventType>
      public static addListener(arg0: jdk.jfr.FlightRecorderListener): void
      public static removeListener(arg0: jdk.jfr.FlightRecorderListener): boolean
      public static isAvailable(): boolean
      public static isInitialized(): boolean
      getInternal(): jdk.jfr.internal.PlatformRecorder
    }

  }
}

declare namespace jdk {
  namespace jfr {

    class EventFactory {
      public static create(arg0: java.util.List<jdk.jfr.AnnotationElement>, arg1: java.util.List<jdk.jfr.ValueDescriptor>): jdk.jfr.EventFactory
      public newEvent(): jdk.jfr.Event
      public getEventType(): jdk.jfr.EventType
      public register(): void
      public unregister(): void
    }

  }
}

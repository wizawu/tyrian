declare namespace jdk {
  namespace jfr {
    namespace consumer {

      class RecordingFile implements java.io.Closeable {

        public constructor(arg0: java.nio.file.Path)
        public readEvent(): jdk.jfr.consumer.RecordedEvent
        public hasMoreEvents(): boolean
        public readEventTypes(): java.util.List<jdk.jfr.EventType>
        readTypes(): java.util.List<jdk.jfr.internal.Type>
        public close(): void
        public static readAllEvents(arg0: java.nio.file.Path): java.util.List<jdk.jfr.consumer.RecordedEvent>
      }

    }
  }
}

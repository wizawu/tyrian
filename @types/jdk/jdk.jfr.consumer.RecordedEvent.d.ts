declare namespace jdk {
  namespace jfr {
    namespace consumer {
      class RecordedEvent extends jdk.jfr.consumer.RecordedObject {
        readonly endTime: long
        constructor(
          arg0: jdk.jfr.EventType,
          arg1: java.util.List<jdk.jfr.ValueDescriptor>,
          arg2: java.lang.Object[] | any[],
          arg3: number | java.lang.Long,
          arg4: number | java.lang.Long,
          arg5: jdk.jfr.consumer.TimeConverter
        )
        public getStackTrace(): jdk.jfr.consumer.RecordedStackTrace
        public getThread(): jdk.jfr.consumer.RecordedThread
        public getEventType(): jdk.jfr.EventType
        public getStartTime(): java.time.Instant
        public getEndTime(): java.time.Instant
        public getDuration(): java.time.Duration
        public getFields(): java.util.List<jdk.jfr.ValueDescriptor>
      }
    }
  }
}

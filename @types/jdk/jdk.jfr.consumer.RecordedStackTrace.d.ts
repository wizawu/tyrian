declare namespace jdk {
  namespace jfr {
    namespace consumer {
      class RecordedStackTrace extends jdk.jfr.consumer.RecordedObject {
        static createFactory(
          arg0: jdk.jfr.internal.Type,
          arg1: jdk.jfr.consumer.TimeConverter
        ): jdk.jfr.consumer.ObjectFactory<jdk.jfr.consumer.RecordedStackTrace>
        public getFrames(): java.util.List<jdk.jfr.consumer.RecordedFrame>
        public isTruncated(): boolean
      }
    }
  }
}

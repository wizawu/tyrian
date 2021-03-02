declare namespace jdk {
  namespace jfr {
    namespace consumer {

      class RecordedThread extends jdk.jfr.consumer.RecordedObject {
        static createFactory(arg0: jdk.jfr.internal.Type, arg1: jdk.jfr.consumer.TimeConverter): jdk.jfr.consumer.ObjectFactory<jdk.jfr.consumer.RecordedThread>
        public getOSName(): java.lang.String
        public getOSThreadId(): number
        public getThreadGroup(): jdk.jfr.consumer.RecordedThreadGroup
        public getJavaName(): java.lang.String
        public getJavaThreadId(): number
        public getId(): number
      }

    }
  }
}

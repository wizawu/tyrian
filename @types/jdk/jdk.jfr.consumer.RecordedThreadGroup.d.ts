declare namespace jdk {
  namespace jfr {
    namespace consumer {

      class RecordedThreadGroup extends jdk.jfr.consumer.RecordedObject {
        static createFactory(arg0: jdk.jfr.internal.Type, arg1: jdk.jfr.consumer.TimeConverter): jdk.jfr.consumer.ObjectFactory<jdk.jfr.consumer.RecordedThreadGroup>
        public getName(): java.lang.String
        public getParent(): jdk.jfr.consumer.RecordedThreadGroup
      }

    }
  }
}

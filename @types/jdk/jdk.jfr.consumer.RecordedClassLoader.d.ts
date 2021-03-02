declare namespace jdk {
  namespace jfr {
    namespace consumer {

      class RecordedClassLoader extends jdk.jfr.consumer.RecordedObject {
        static createFactory(arg0: jdk.jfr.internal.Type, arg1: jdk.jfr.consumer.TimeConverter): jdk.jfr.consumer.ObjectFactory<jdk.jfr.consumer.RecordedClassLoader>
        public getType(): jdk.jfr.consumer.RecordedClass
        public getName(): java.lang.String
        public getId(): long
      }

    }
  }
}

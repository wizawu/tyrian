declare namespace jdk {
  namespace jfr {
    namespace consumer {

      class RecordedClass extends jdk.jfr.consumer.RecordedObject {
        static createFactory(arg0: jdk.jfr.internal.Type, arg1: jdk.jfr.consumer.TimeConverter): jdk.jfr.consumer.ObjectFactory<jdk.jfr.consumer.RecordedClass>
        public getModifiers(): number
        public getClassLoader(): jdk.jfr.consumer.RecordedClassLoader
        public getName(): java.lang.String
        public getId(): number
      }

    }
  }
}

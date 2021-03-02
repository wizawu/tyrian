declare namespace jdk {
  namespace jfr {
    namespace consumer {

      class RecordedMethod extends jdk.jfr.consumer.RecordedObject {
        static createFactory(arg0: jdk.jfr.internal.Type, arg1: jdk.jfr.consumer.TimeConverter): jdk.jfr.consumer.ObjectFactory<jdk.jfr.consumer.RecordedMethod>
        public getType(): jdk.jfr.consumer.RecordedClass
        public getName(): java.lang.String
        public getDescriptor(): java.lang.String
        public getModifiers(): int
        public isHidden(): boolean
      }

    }
  }
}

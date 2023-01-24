declare namespace jdk {
  namespace jfr {
    namespace consumer {
      class RecordedFrame extends jdk.jfr.consumer.RecordedObject {
        static createFactory(
          arg0: jdk.jfr.internal.Type,
          arg1: jdk.jfr.consumer.TimeConverter
        ): jdk.jfr.consumer.ObjectFactory<jdk.jfr.consumer.RecordedFrame>
        constructor(
          arg0: java.util.List<jdk.jfr.ValueDescriptor>,
          arg1: java.lang.Object[] | any[],
          arg2: jdk.jfr.consumer.TimeConverter
        )
        public isJavaFrame(): boolean
        public getBytecodeIndex(): number
        public getLineNumber(): number
        public getType(): java.lang.String
        public getMethod(): jdk.jfr.consumer.RecordedMethod
      }
    }
  }
}

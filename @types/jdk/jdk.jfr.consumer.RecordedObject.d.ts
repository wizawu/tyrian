declare namespace jdk {
  namespace jfr {
    namespace consumer {

      class RecordedObject {
        constructor(arg0: java.util.List<jdk.jfr.ValueDescriptor>, arg1: java.lang.Object[] | any[], arg2: jdk.jfr.consumer.TimeConverter)
        getTyped<T>(arg0: java.lang.String | string, arg1: java.lang.Class<T>, arg2: T): T
        public hasField(arg0: java.lang.String | string): boolean
        public getValue<T>(arg0: java.lang.String | string): T
        public getFields(): java.util.List<jdk.jfr.ValueDescriptor>
        public getBoolean(arg0: java.lang.String | string): boolean
        public getByte(arg0: java.lang.String | string): number
        public getChar(arg0: java.lang.String | string): string
        public getShort(arg0: java.lang.String | string): number
        public getInt(arg0: java.lang.String | string): number
        public getFloat(arg0: java.lang.String | string): number
        public getLong(arg0: java.lang.String | string): number
        public getDouble(arg0: java.lang.String | string): number
        public getString(arg0: java.lang.String | string): java.lang.String
        public getDuration(arg0: java.lang.String | string): java.time.Duration
        public getInstant(arg0: java.lang.String | string): java.time.Instant
        public getClass(arg0: java.lang.String | string): jdk.jfr.consumer.RecordedClass
        public getThread(arg0: java.lang.String | string): jdk.jfr.consumer.RecordedThread
        public toString(): java.lang.String
        getOffsetDateTime(arg0: java.lang.String | string): java.time.OffsetDateTime
      }

    }
  }
}

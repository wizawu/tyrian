declare namespace jdk {
  namespace jfr {
    namespace consumer {

      class RecordedObject {
        constructor(arg0: java.util.List<jdk.jfr.ValueDescriptor>, arg1: java.lang.Object[], arg2: jdk.jfr.consumer.TimeConverter)
        getTyped<T>(arg0: java.lang.String, arg1: java.lang.Class<T>, arg2: T): T
        public hasField(arg0: java.lang.String): boolean
        public getValue<T>(arg0: java.lang.String): T
        public getFields(): java.util.List<jdk.jfr.ValueDescriptor>
        public getBoolean(arg0: java.lang.String): boolean
        public getByte(arg0: java.lang.String): byte
        public getChar(arg0: java.lang.String): char
        public getShort(arg0: java.lang.String): short
        public getInt(arg0: java.lang.String): int
        public getFloat(arg0: java.lang.String): float
        public getLong(arg0: java.lang.String): long
        public getDouble(arg0: java.lang.String): double
        public getString(arg0: java.lang.String): java.lang.String
        public getDuration(arg0: java.lang.String): java.time.Duration
        public getInstant(arg0: java.lang.String): java.time.Instant
        public getClass(arg0: java.lang.String): jdk.jfr.consumer.RecordedClass
        public getThread(arg0: java.lang.String): jdk.jfr.consumer.RecordedThread
        public toString(): java.lang.String
        getOffsetDateTime(arg0: java.lang.String): java.time.OffsetDateTime
      }

    }
  }
}

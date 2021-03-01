declare namespace jdk {
  namespace jfr {
    namespace consumer {

      class RecordedObject {

        constructor(arg0: java.util.List<jdk.jfr.ValueDescriptor>, arg1: java.lang.Object[], arg2: jdk.jfr.consumer.TimeConverter)
        readonly getTyped<T>(arg0: java.lang.String, arg1: java.lang.Class<T>, arg2: T): T
        public hasField(arg0: java.lang.String): boolean
        public readonly getValue<T>(arg0: java.lang.String): T
        public getFields(): java.util.List<jdk.jfr.ValueDescriptor>
        public readonly getBoolean(arg0: java.lang.String): boolean
        public readonly getByte(arg0: java.lang.String): byte
        public readonly getChar(arg0: java.lang.String): char
        public readonly getShort(arg0: java.lang.String): short
        public readonly getInt(arg0: java.lang.String): int
        public readonly getFloat(arg0: java.lang.String): float
        public readonly getLong(arg0: java.lang.String): long
        public readonly getDouble(arg0: java.lang.String): double
        public readonly getString(arg0: java.lang.String): java.lang.String
        public readonly getDuration(arg0: java.lang.String): java.time.Duration
        public readonly getInstant(arg0: java.lang.String): java.time.Instant
        public readonly getClass(arg0: java.lang.String): jdk.jfr.consumer.RecordedClass
        public readonly getThread(arg0: java.lang.String): jdk.jfr.consumer.RecordedThread
        public readonly toString(): java.lang.String
        getOffsetDateTime(arg0: java.lang.String): java.time.OffsetDateTime
      }

    }
  }
}

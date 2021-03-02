declare namespace java {
  namespace util {
    namespace stream {

      class StreamSupport {
        public static stream<T>(arg0: java.util.Spliterator<T>, arg1: boolean | java.lang.Boolean): java.util.stream.Stream<T>
        public static stream<T>(arg0: java.util.function$.Supplier<java.util.Spliterator<T>> | java.util.function$.Supplier$$lambda<java.util.Spliterator<T>>, arg1: number | java.lang.Integer, arg2: boolean | java.lang.Boolean): java.util.stream.Stream<T>
        public static intStream(arg0: java.util.Spliterator$OfInt, arg1: boolean | java.lang.Boolean): java.util.stream.IntStream
        public static intStream(arg0: java.util.function$.Supplier<java.util.Spliterator$OfInt> | java.util.function$.Supplier$$lambda<java.util.Spliterator$OfInt>, arg1: number | java.lang.Integer, arg2: boolean | java.lang.Boolean): java.util.stream.IntStream
        public static longStream(arg0: java.util.Spliterator$OfLong, arg1: boolean | java.lang.Boolean): java.util.stream.LongStream
        public static longStream(arg0: java.util.function$.Supplier<java.util.Spliterator$OfLong> | java.util.function$.Supplier$$lambda<java.util.Spliterator$OfLong>, arg1: number | java.lang.Integer, arg2: boolean | java.lang.Boolean): java.util.stream.LongStream
        public static doubleStream(arg0: java.util.Spliterator$OfDouble, arg1: boolean | java.lang.Boolean): java.util.stream.DoubleStream
        public static doubleStream(arg0: java.util.function$.Supplier<java.util.Spliterator$OfDouble> | java.util.function$.Supplier$$lambda<java.util.Spliterator$OfDouble>, arg1: number | java.lang.Integer, arg2: boolean | java.lang.Boolean): java.util.stream.DoubleStream
      }

    }
  }
}

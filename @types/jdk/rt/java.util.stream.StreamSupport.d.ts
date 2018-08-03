declare namespace java {
    namespace util {
        namespace stream {
            class StreamSupport {
                public static stream<T>(arg0: java.util.Spliterator<T>, arg1: boolean): java.util.stream.Stream<T>
                public static stream<T>(arg0: java.util.function$.Supplier<java.util.Spliterator<T>> | java.util.function$.Supplier$$Lambda<java.util.Spliterator<T>>, arg1: int, arg2: boolean): java.util.stream.Stream<T>
                public static intStream<T>(arg0: java.util.Spliterator$OfInt, arg1: boolean): java.util.stream.IntStream
                public static intStream<T>(arg0: java.util.function$.Supplier<java.util.Spliterator$OfInt> | java.util.function$.Supplier$$Lambda<java.util.Spliterator$OfInt>, arg1: int, arg2: boolean): java.util.stream.IntStream
                public static longStream<T>(arg0: java.util.Spliterator$OfLong, arg1: boolean): java.util.stream.LongStream
                public static longStream<T>(arg0: java.util.function$.Supplier<java.util.Spliterator$OfLong> | java.util.function$.Supplier$$Lambda<java.util.Spliterator$OfLong>, arg1: int, arg2: boolean): java.util.stream.LongStream
                public static doubleStream<T>(arg0: java.util.Spliterator$OfDouble, arg1: boolean): java.util.stream.DoubleStream
                public static doubleStream<T>(arg0: java.util.function$.Supplier<java.util.Spliterator$OfDouble> | java.util.function$.Supplier$$Lambda<java.util.Spliterator$OfDouble>, arg1: int, arg2: boolean): java.util.stream.DoubleStream
                public static class: java.lang.Class<any>
            }
        }
    }
}
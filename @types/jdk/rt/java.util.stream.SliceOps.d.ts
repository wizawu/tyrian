declare namespace java {
    namespace util {
        namespace stream {
            class SliceOps {
                public static makeRef<T>(arg0: java.util.stream.AbstractPipeline<any, T, any>, arg1: long, arg2: long): java.util.stream.Stream<T>
                public static makeInt<T>(arg0: java.util.stream.AbstractPipeline<any, java.lang.Integer, any>, arg1: long, arg2: long): java.util.stream.IntStream
                public static makeLong<T>(arg0: java.util.stream.AbstractPipeline<any, java.lang.Long, any>, arg1: long, arg2: long): java.util.stream.LongStream
                public static makeDouble<T>(arg0: java.util.stream.AbstractPipeline<any, java.lang.Double, any>, arg1: long, arg2: long): java.util.stream.DoubleStream
                public static class: java.lang.Class<any>
            }
        }
    }
}
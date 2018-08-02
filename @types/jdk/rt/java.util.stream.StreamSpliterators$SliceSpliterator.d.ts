declare namespace java {
    namespace util {
        namespace stream {
            abstract class StreamSpliterators$SliceSpliterator<T, T_SPLITR extends java.util.Spliterator<T>> {
                protected makeSpliterator(arg0: T_SPLITR, arg1: long, arg2: long, arg3: long, arg4: long): T_SPLITR
                public trySplit(): T_SPLITR
                public estimateSize(): long
                public characteristics(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}
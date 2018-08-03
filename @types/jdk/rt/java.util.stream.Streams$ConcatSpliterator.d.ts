declare namespace java {
    namespace util {
        namespace stream {
            abstract class Streams$ConcatSpliterator<T, T_SPLITR extends java.util.Spliterator<T>> implements java.util.Spliterator<T> {
                protected aSpliterator: T_SPLITR
                protected bSpliterator: T_SPLITR
                public constructor(arg0: T_SPLITR, arg1: T_SPLITR)
                public trySplit(): T_SPLITR
                public tryAdvance(arg0: java.util.function$.Consumer$$Lambda<T>): boolean
                public forEachRemaining(arg0: java.util.function$.Consumer$$Lambda<T>): void
                public estimateSize(): long
                public characteristics(): int
                public getComparator(): java.util.Comparator<T>
                public static class: java.lang.Class<any>
            }
        }
    }
}
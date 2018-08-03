declare namespace java {
    namespace util {
        namespace stream {
            class StreamSpliterators$DistinctSpliterator<T> implements java.util.Spliterator<T> , java.util.function$.Consumer<T> {
                public accept(arg0: T): void
                public tryAdvance(arg0: java.util.function$.Consumer$$Lambda<T>): boolean
                public forEachRemaining(arg0: java.util.function$.Consumer$$Lambda<T>): void
                public trySplit(): java.util.Spliterator<T>
                public estimateSize(): long
                public characteristics(): int
                public getComparator(): java.util.Comparator<T>
                public static class: java.lang.Class<any>
            }
        }
    }
}
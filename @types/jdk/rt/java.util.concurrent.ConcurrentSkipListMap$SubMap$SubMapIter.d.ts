declare namespace java {
    namespace util {
        namespace concurrent {
            abstract class ConcurrentSkipListMap$SubMap$SubMapIter<T> implements java.util.Iterator<T> , java.util.Spliterator<T> {
                public hasNext(): boolean
                public remove(): void
                public trySplit(): java.util.Spliterator<T>
                public tryAdvance(arg0: java.util.function$.Consumer$$Lambda<T>): boolean
                public forEachRemaining(arg0: java.util.function$.Consumer$$Lambda<T>): void
                public estimateSize(): long
                public static class: java.lang.Class<any>
            }
        }
    }
}
declare namespace java {
    namespace util {
        class LinkedList$LLSpliterator<E> implements java.util.Spliterator<E> {
            public estimateSize(): long
            public trySplit(): java.util.Spliterator<E>
            public forEachRemaining(arg0: java.util.function$.Consumer$$Lambda<E>): void
            public tryAdvance(arg0: java.util.function$.Consumer$$Lambda<E>): boolean
            public characteristics(): int
            public static class: java.lang.Class<any>
        }
    }
}
declare namespace java {
    namespace util {
        namespace concurrent {
            class ConcurrentHashMap$ValueSpliterator<K, V> extends java.util.concurrent.ConcurrentHashMap$Traverser<K, V> implements java.util.Spliterator<V> {
                public trySplit(): java.util.Spliterator<V>
                public forEachRemaining(arg0: java.util.function$.Consumer$$TypeScript<V>): void
                public tryAdvance(arg0: java.util.function$.Consumer$$TypeScript<V>): boolean
                public estimateSize(): long
                public characteristics(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}
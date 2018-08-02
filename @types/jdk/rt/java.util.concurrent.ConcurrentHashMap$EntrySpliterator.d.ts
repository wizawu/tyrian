declare namespace java {
    namespace util {
        namespace concurrent {
            class ConcurrentHashMap$EntrySpliterator<K, V> extends java.util.concurrent.ConcurrentHashMap$Traverser<K, V> implements java.util.Spliterator<java.util.Map$Entry<K, V>> {
                public trySplit(): java.util.Spliterator<java.util.Map$Entry<K, V>>
                public forEachRemaining(arg0: java.util.function$.Consumer<java.util.Map$Entry<K, V>>): void
                public tryAdvance(arg0: java.util.function$.Consumer<java.util.Map$Entry<K, V>>): boolean
                public estimateSize(): long
                public characteristics(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}
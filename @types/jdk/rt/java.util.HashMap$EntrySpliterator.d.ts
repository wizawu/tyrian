declare namespace java {
    namespace util {
        class HashMap$EntrySpliterator<K, V> extends java.util.HashMap$HashMapSpliterator<K, V> implements java.util.Spliterator<java.util.Map$Entry<K, V>> {
            public trySplit(): java.util.HashMap$EntrySpliterator<K, V>
            public forEachRemaining(arg0: java.util.function$.Consumer<java.util.Map$Entry<K, V>>): void
            public tryAdvance(arg0: java.util.function$.Consumer<java.util.Map$Entry<K, V>>): boolean
            public characteristics(): int
            public trySplit(): java.util.Spliterator
            public static class: java.lang.Class<any>
        }
    }
}
declare namespace java {
    namespace util {
        class HashMap$KeySpliterator<K, V> extends java.util.HashMap$HashMapSpliterator<K, V> implements java.util.Spliterator<K> {
            public trySplit(): java.util.HashMap$KeySpliterator<K, V>
            public forEachRemaining(arg0: java.util.function$.Consumer$$Lambda<K>): void
            public tryAdvance(arg0: java.util.function$.Consumer$$Lambda<K>): boolean
            public characteristics(): int
            public trySplit(): java.util.Spliterator
            public static class: java.lang.Class<any>
        }
    }
}
declare namespace java {
    namespace util {
        class WeakHashMap$ValueSpliterator<K, V> extends java.util.WeakHashMap$WeakHashMapSpliterator<K, V> implements java.util.Spliterator<V> {
            public trySplit(): java.util.WeakHashMap$ValueSpliterator<K, V>
            public forEachRemaining(arg0: java.util.function$.Consumer$$Lambda<V>): void
            public tryAdvance(arg0: java.util.function$.Consumer$$Lambda<V>): boolean
            public characteristics(): int
            public trySplit(): java.util.Spliterator
            public static class: java.lang.Class<any>
        }
    }
}
declare namespace java {
    namespace util {
        class TreeMap$ValueSpliterator<K, V> extends java.util.TreeMap$TreeMapSpliterator<K, V> implements java.util.Spliterator<V> {
            public trySplit(): java.util.TreeMap$ValueSpliterator<K, V>
            public forEachRemaining(arg0: java.util.function$.Consumer$$TypeScript<V>): void
            public tryAdvance(arg0: java.util.function$.Consumer$$TypeScript<V>): boolean
            public characteristics(): int
            public trySplit(): java.util.Spliterator
            public static class: java.lang.Class<any>
        }
    }
}
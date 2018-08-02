declare namespace java {
    namespace util {
        class TreeMap$KeySpliterator<K, V> extends java.util.TreeMap$TreeMapSpliterator<K, V> implements java.util.Spliterator<K> {
            public trySplit(): java.util.TreeMap$KeySpliterator<K, V>
            public forEachRemaining(arg0: java.util.function$.Consumer$$TypeScript<K>): void
            public tryAdvance(arg0: java.util.function$.Consumer$$TypeScript<K>): boolean
            public characteristics(): int
            public getComparator(): java.util.Comparator<K>
            public trySplit(): java.util.Spliterator
            public static class: java.lang.Class<any>
        }
    }
}
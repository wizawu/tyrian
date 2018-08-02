declare namespace java {
    namespace util {
        namespace concurrent {
            class ConcurrentSkipListMap$KeySpliterator<K, V> extends java.util.concurrent.ConcurrentSkipListMap$CSLMSpliterator<K, V> implements java.util.Spliterator<K> {
                public trySplit(): java.util.Spliterator<K>
                public forEachRemaining(arg0: java.util.function$.Consumer$$TypeScript<K>): void
                public tryAdvance(arg0: java.util.function$.Consumer$$TypeScript<K>): boolean
                public characteristics(): int
                public getComparator(): java.util.Comparator<K>
                public static class: java.lang.Class<any>
            }
        }
    }
}
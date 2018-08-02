declare namespace java {
    namespace util {
        namespace concurrent {
            class ConcurrentSkipListMap$ValueSpliterator<K, V> extends java.util.concurrent.ConcurrentSkipListMap$CSLMSpliterator<K, V> implements java.util.Spliterator<V> {
                public trySplit(): java.util.Spliterator<V>
                public forEachRemaining(arg0: java.util.function$.Consumer$$TypeScript<V>): void
                public tryAdvance(arg0: java.util.function$.Consumer$$TypeScript<V>): boolean
                public characteristics(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}
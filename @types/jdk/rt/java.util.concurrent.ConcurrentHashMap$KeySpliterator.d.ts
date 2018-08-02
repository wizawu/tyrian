declare namespace java {
    namespace util {
        namespace concurrent {
class ConcurrentHashMap$KeySpliterator<K, V> extends java.util.concurrent.ConcurrentHashMap$Traverser<K, V> implements java.util.Spliterator<K> {
    public trySplit(): java.util.Spliterator<K>
    public forEachRemaining(arg0: java.util.function$.Consumer$$TypeScript<K>): void
    public tryAdvance(arg0: java.util.function$.Consumer$$TypeScript<K>): boolean
    public estimateSize(): long
    public characteristics(): int
    public static class: java.lang.Class<any>
}

        }
    }
}
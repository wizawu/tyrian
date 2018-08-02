declare namespace java {
    namespace util {
class Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntrySetSpliterator<K, V> implements java.util.Spliterator<java.util.Map$Entry<K, V>> {
    public tryAdvance(arg0: java.util.function$.Consumer<java.util.Map$Entry<K, V>>): boolean
    public forEachRemaining(arg0: java.util.function$.Consumer<java.util.Map$Entry<K, V>>): void
    public trySplit(): java.util.Spliterator<java.util.Map$Entry<K, V>>
    public estimateSize(): long
    public getExactSizeIfKnown(): long
    public characteristics(): int
    public hasCharacteristics(arg0: int): boolean
    public getComparator(): java.util.Comparator<java.util.Map$Entry<K, V>>
    public static class: java.lang.Class<any>
}

    }
}
declare namespace java {
    namespace util {
        interface Spliterator<T> {
            ORDERED: int
            DISTINCT: int
            SORTED: int
            SIZED: int
            NONNULL: int
            IMMUTABLE: int
            CONCURRENT: int
            SUBSIZED: int
            tryAdvance(arg0: java.util.function$.Consumer$$TypeScript<T>): boolean
            forEachRemaining(arg0: java.util.function$.Consumer$$TypeScript<T>): void
            trySplit(): java.util.Spliterator<T>
            estimateSize(): long
            getExactSizeIfKnown(): long
            characteristics(): int
            hasCharacteristics(arg0: int): boolean
            getComparator(): java.util.Comparator<T>
        }
    }
}
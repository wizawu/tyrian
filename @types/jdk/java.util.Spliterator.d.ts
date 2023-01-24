declare namespace java {
  namespace util {
    interface Spliterator<T> {
      readonly ORDERED: int
      readonly DISTINCT: int
      readonly SORTED: int
      readonly SIZED: int
      readonly NONNULL: int
      readonly IMMUTABLE: int
      readonly CONCURRENT: int
      readonly SUBSIZED: int
      tryAdvance(arg0: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>): boolean
      forEachRemaining(
        arg0: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>
      ): void
      trySplit(): java.util.Spliterator<T>
      estimateSize(): number
      getExactSizeIfKnown(): number
      characteristics(): number
      hasCharacteristics(arg0: number | java.lang.Integer): boolean
      getComparator(): java.util.Comparator<unknown>
    }
  }
}

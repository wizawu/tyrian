declare namespace java {
  namespace util {

    interface Spliterator<T> {
      public static readonly ORDERED: int
      public static readonly DISTINCT: int
      public static readonly SORTED: int
      public static readonly SIZED: int
      public static readonly NONNULL: int
      public static readonly IMMUTABLE: int
      public static readonly CONCURRENT: int
      public static readonly SUBSIZED: int
      tryAdvance(arg0: java.util.function$.Consumer<unknown>): boolean
      forEachRemaining(arg0: java.util.function$.Consumer<unknown>): void
      trySplit(): java.util.Spliterator<T>
      estimateSize(): long
      getExactSizeIfKnown(): long
      characteristics(): int
      hasCharacteristics(arg0: int): boolean
      getComparator(): java.util.Comparator<unknown>
    }

  }
}

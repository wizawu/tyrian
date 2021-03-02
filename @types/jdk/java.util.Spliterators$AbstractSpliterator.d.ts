declare namespace java {
  namespace util {

    abstract class Spliterators$AbstractSpliterator<T> implements java.util.Spliterator<T> {
      static readonly BATCH_UNIT: int
      static readonly MAX_BATCH: int
      protected constructor(arg0: long, arg1: int)
      public trySplit(): java.util.Spliterator<T>
      public estimateSize(): long
      public characteristics(): int
    }

  }
}

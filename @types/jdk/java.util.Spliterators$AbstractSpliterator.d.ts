declare namespace java {
  namespace util {
    abstract class Spliterators$AbstractSpliterator<T> implements java.util.Spliterator<T> {
      static readonly BATCH_UNIT: int
      static readonly MAX_BATCH: int
      protected constructor(arg0: number | java.lang.Long, arg1: number | java.lang.Integer)
      public trySplit(): java.util.Spliterator<T>
      public estimateSize(): number
      public characteristics(): number
    }
  }
}

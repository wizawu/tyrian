declare namespace java {
  namespace util {
    abstract class Spliterators$AbstractIntSpliterator implements java.util.Spliterator$OfInt {
      static readonly MAX_BATCH: int
      static readonly BATCH_UNIT: int
      protected constructor(arg0: number | java.lang.Long, arg1: number | java.lang.Integer)
      public trySplit(): java.util.Spliterator$OfInt
      public estimateSize(): number
      public characteristics(): number
      public trySplit(): java.util.Spliterator$OfPrimitive
      public trySplit(): java.util.Spliterator
    }
  }
}

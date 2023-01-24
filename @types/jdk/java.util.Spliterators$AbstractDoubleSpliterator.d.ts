declare namespace java {
  namespace util {
    abstract class Spliterators$AbstractDoubleSpliterator implements java.util.Spliterator$OfDouble {
      static readonly MAX_BATCH: int
      static readonly BATCH_UNIT: int
      protected constructor(arg0: number | java.lang.Long, arg1: number | java.lang.Integer)
      public trySplit(): java.util.Spliterator$OfDouble
      public estimateSize(): number
      public characteristics(): number
      public trySplit(): java.util.Spliterator$OfPrimitive
      public trySplit(): java.util.Spliterator
    }
  }
}

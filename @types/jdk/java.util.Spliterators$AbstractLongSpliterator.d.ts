declare namespace java {
  namespace util {

    abstract class Spliterators$AbstractLongSpliterator implements java.util.Spliterator$OfLong {
      static readonly MAX_BATCH: int
      static readonly BATCH_UNIT: int
      protected constructor(arg0: long, arg1: int)
      public trySplit(): java.util.Spliterator$OfLong
      public estimateSize(): long
      public characteristics(): int
      public trySplit(): java.util.Spliterator$OfPrimitive
      public trySplit(): java.util.Spliterator
    }

  }
}

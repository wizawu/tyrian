declare namespace java {
  namespace util {

    interface Spliterator$OfLong extends java.util.Spliterator$OfPrimitive<java.lang.Long,java.util.function$.LongConsumer,java.util.Spliterator$OfLong> {
      trySplit(): java.util.Spliterator$OfLong
      tryAdvance(arg0: java.util.function$.LongConsumer): boolean
      forEachRemaining(arg0: java.util.function$.LongConsumer): void
      tryAdvance(arg0: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>): boolean
      forEachRemaining(arg0: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>): void
      forEachRemaining(arg0: java.lang.Object | any): void
      tryAdvance(arg0: java.lang.Object | any): boolean
      trySplit(): java.util.Spliterator$OfPrimitive
      trySplit(): java.util.Spliterator
    }

  }
}

declare namespace java {
  namespace util {
    interface Spliterator$OfInt
      extends java.util.Spliterator$OfPrimitive<
        java.lang.Integer,
        java.util.function$.IntConsumer,
        java.util.Spliterator$OfInt
      > {
      trySplit(): java.util.Spliterator$OfInt
      tryAdvance(arg0: java.util.function$.IntConsumer): boolean
      forEachRemaining(arg0: java.util.function$.IntConsumer): void
      tryAdvance(arg0: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>): boolean
      forEachRemaining(
        arg0: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>
      ): void
      forEachRemaining(arg0: java.lang.Object | any): void
      tryAdvance(arg0: java.lang.Object | any): boolean
      trySplit(): java.util.Spliterator$OfPrimitive
      trySplit(): java.util.Spliterator
    }
  }
}

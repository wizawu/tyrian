declare namespace java {
  namespace util {
    interface PrimitiveIterator$OfLong
      extends java.util.PrimitiveIterator<java.lang.Long, java.util.function$.LongConsumer> {
      nextLong(): number
      forEachRemaining(arg0: java.util.function$.LongConsumer): void
      next(): number
      forEachRemaining(
        arg0: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>
      ): void
      forEachRemaining(arg0: java.lang.Object | any): void
      next(): java.lang.Object
    }
  }
}

declare namespace java {
  namespace util {

    interface PrimitiveIterator$OfDouble extends java.util.PrimitiveIterator<java.lang.Double,java.util.function$.DoubleConsumer> {
      nextDouble(): number
      forEachRemaining(arg0: java.util.function$.DoubleConsumer): void
      next(): number
      forEachRemaining(arg0: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>): void
      forEachRemaining(arg0: java.lang.Object | any): void
      next(): java.lang.Object
    }

  }
}

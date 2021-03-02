declare namespace java {
  namespace util {

    interface Spliterator$OfDouble extends java.util.Spliterator$OfPrimitive<java.lang.Double,java.util.function$.DoubleConsumer,java.util.Spliterator$OfDouble> {
      trySplit(): java.util.Spliterator$OfDouble
      tryAdvance(arg0: java.util.function$.DoubleConsumer): boolean
      forEachRemaining(arg0: java.util.function$.DoubleConsumer): void
      tryAdvance(arg0: java.util.function$.Consumer<unknown>): boolean
      forEachRemaining(arg0: java.util.function$.Consumer<unknown>): void
      forEachRemaining(arg0: java.lang.Object): void
      tryAdvance(arg0: java.lang.Object): boolean
      trySplit(): java.util.Spliterator$OfPrimitive
      trySplit(): java.util.Spliterator
    }

  }
}

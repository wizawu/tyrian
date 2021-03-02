declare namespace java {
  namespace util {

    interface PrimitiveIterator$OfInt extends java.util.PrimitiveIterator<java.lang.Integer,java.util.function$.IntConsumer> {
      nextInt(): number
      forEachRemaining(arg0: java.util.function$.IntConsumer): void
      next(): number
      forEachRemaining(arg0: java.util.function$.Consumer<unknown>): void
      forEachRemaining(arg0: java.lang.Object | any): void
      next(): java.lang.Object
    }

  }
}

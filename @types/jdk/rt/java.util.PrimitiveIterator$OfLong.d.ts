declare namespace java {
    namespace util {
        interface PrimitiveIterator$OfLong extends java.util.PrimitiveIterator<java.lang.Long, java.util.function$.LongConsumer> {
            nextLong(): long
            forEachRemaining(arg0: java.util.function$.LongConsumer): void
            next(): java.lang.Long
            forEachRemaining(arg0: java.util.function$.Consumer<java.lang.Long>): void
            forEachRemaining(arg0: java.lang.Object): void
            next(): java.lang.Object
        }
    }
}
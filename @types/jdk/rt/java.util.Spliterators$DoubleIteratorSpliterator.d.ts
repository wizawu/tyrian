declare namespace java {
    namespace util {
        class Spliterators$DoubleIteratorSpliterator implements java.util.Spliterator$OfDouble {
            public constructor(arg0: java.util.PrimitiveIterator$OfDouble, arg1: long, arg2: int)
            public constructor(arg0: java.util.PrimitiveIterator$OfDouble, arg1: int)
            public trySplit(): java.util.Spliterator$OfDouble
            public forEachRemaining(arg0: java.util.function$.DoubleConsumer): void
            public tryAdvance(arg0: java.util.function$.DoubleConsumer): boolean
            public estimateSize(): long
            public characteristics(): int
            public getComparator(): java.util.Comparator<java.lang.Double>
            public forEachRemaining(arg0: java.lang.Object): void
            public tryAdvance(arg0: java.lang.Object): boolean
            public trySplit(): java.util.Spliterator$OfPrimitive
            public trySplit(): java.util.Spliterator
            public static class: java.lang.Class<any>
        }
    }
}
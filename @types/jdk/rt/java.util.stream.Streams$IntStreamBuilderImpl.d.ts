declare namespace java {
    namespace util {
        namespace stream {
            class Streams$IntStreamBuilderImpl extends java.util.stream.Streams$AbstractStreamBuilderImpl<java.lang.Integer, java.util.Spliterator$OfInt> implements java.util.stream.IntStream$Builder , java.util.Spliterator$OfInt {
                public accept(arg0: int): void
                public build(): java.util.stream.IntStream
                public tryAdvance(arg0: java.util.function$.IntConsumer): boolean
                public forEachRemaining(arg0: java.util.function$.IntConsumer): void
                public trySplit(): java.util.Spliterator$OfInt
                public forEachRemaining(arg0: java.lang.Object): void
                public tryAdvance(arg0: java.lang.Object): boolean
                public trySplit(): java.util.Spliterator$OfPrimitive
                public static class: java.lang.Class<any>
            }
        }
    }
}
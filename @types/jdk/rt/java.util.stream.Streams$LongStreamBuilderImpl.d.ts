declare namespace java {
    namespace util {
        namespace stream {
            class Streams$LongStreamBuilderImpl extends java.util.stream.Streams$AbstractStreamBuilderImpl<java.lang.Long, java.util.Spliterator$OfLong> implements java.util.stream.LongStream$Builder , java.util.Spliterator$OfLong {
                public accept(arg0: long): void
                public build(): java.util.stream.LongStream
                public tryAdvance(arg0: java.util.function$.LongConsumer): boolean
                public forEachRemaining(arg0: java.util.function$.LongConsumer): void
                public trySplit(): java.util.Spliterator$OfLong
                public forEachRemaining(arg0: java.lang.Object): void
                public tryAdvance(arg0: java.lang.Object): boolean
                public trySplit(): java.util.Spliterator$OfPrimitive
                public static class: java.lang.Class<any>
            }
        }
    }
}
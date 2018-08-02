declare namespace java {
    namespace util {
        namespace stream {
class StreamSpliterators$UnorderedSliceSpliterator$OfDouble extends java.util.stream.StreamSpliterators$UnorderedSliceSpliterator$OfPrimitive<java.lang.Double, java.util.function$.DoubleConsumer, java.util.stream.StreamSpliterators$ArrayBuffer$OfDouble, java.util.Spliterator$OfDouble> implements java.util.Spliterator$OfDouble , java.util.function$.DoubleConsumer {
    public accept(arg0: double): void
    protected acceptConsumed(arg0: java.util.function$.DoubleConsumer): void
    protected bufferCreate(arg0: int): java.util.stream.StreamSpliterators$ArrayBuffer$OfDouble
    protected makeSpliterator(arg0: java.util.Spliterator$OfDouble): java.util.Spliterator$OfDouble
    protected bufferCreate(arg0: int): java.util.stream.StreamSpliterators$ArrayBuffer$OfPrimitive
    protected acceptConsumed(arg0: java.lang.Object): void
    protected makeSpliterator(arg0: java.util.Spliterator): java.util.Spliterator
    public forEachRemaining(arg0: java.util.function$.DoubleConsumer): void
    public tryAdvance(arg0: java.util.function$.DoubleConsumer): boolean
    public trySplit(): java.util.Spliterator$OfDouble
    public static class: java.lang.Class<any>
}

        }
    }
}
declare namespace java {
    namespace util {
        namespace stream {
class StreamSpliterators$UnorderedSliceSpliterator$OfInt extends java.util.stream.StreamSpliterators$UnorderedSliceSpliterator$OfPrimitive<java.lang.Integer, java.util.function$.IntConsumer, java.util.stream.StreamSpliterators$ArrayBuffer$OfInt, java.util.Spliterator$OfInt> implements java.util.Spliterator$OfInt , java.util.function$.IntConsumer {
    public accept(arg0: int): void
    protected acceptConsumed(arg0: java.util.function$.IntConsumer): void
    protected bufferCreate(arg0: int): java.util.stream.StreamSpliterators$ArrayBuffer$OfInt
    protected makeSpliterator(arg0: java.util.Spliterator$OfInt): java.util.Spliterator$OfInt
    protected bufferCreate(arg0: int): java.util.stream.StreamSpliterators$ArrayBuffer$OfPrimitive
    protected acceptConsumed(arg0: java.lang.Object): void
    protected makeSpliterator(arg0: java.util.Spliterator): java.util.Spliterator
    public forEachRemaining(arg0: java.util.function$.IntConsumer): void
    public tryAdvance(arg0: java.util.function$.IntConsumer): boolean
    public trySplit(): java.util.Spliterator$OfInt
    public static class: java.lang.Class<any>
}

        }
    }
}
declare namespace java {
    namespace util {
        namespace stream {
class StreamSpliterators$UnorderedSliceSpliterator$OfLong extends java.util.stream.StreamSpliterators$UnorderedSliceSpliterator$OfPrimitive<java.lang.Long, java.util.function$.LongConsumer, java.util.stream.StreamSpliterators$ArrayBuffer$OfLong, java.util.Spliterator$OfLong> implements java.util.Spliterator$OfLong , java.util.function$.LongConsumer {
    public accept(arg0: long): void
    protected acceptConsumed(arg0: java.util.function$.LongConsumer): void
    protected bufferCreate(arg0: int): java.util.stream.StreamSpliterators$ArrayBuffer$OfLong
    protected makeSpliterator(arg0: java.util.Spliterator$OfLong): java.util.Spliterator$OfLong
    protected bufferCreate(arg0: int): java.util.stream.StreamSpliterators$ArrayBuffer$OfPrimitive
    protected acceptConsumed(arg0: java.lang.Object): void
    protected makeSpliterator(arg0: java.util.Spliterator): java.util.Spliterator
    public forEachRemaining(arg0: java.util.function$.LongConsumer): void
    public tryAdvance(arg0: java.util.function$.LongConsumer): boolean
    public trySplit(): java.util.Spliterator$OfLong
    public static class: java.lang.Class<any>
}

        }
    }
}
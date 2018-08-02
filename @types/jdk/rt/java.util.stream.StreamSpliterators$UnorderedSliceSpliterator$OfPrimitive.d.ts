declare namespace java {
    namespace util {
        namespace stream {
abstract class StreamSpliterators$UnorderedSliceSpliterator$OfPrimitive<T, T_CONS, T_BUFF extends java.util.stream.StreamSpliterators$ArrayBuffer$OfPrimitive<T_CONS>, T_SPLITR extends java.util.Spliterator$OfPrimitive<T, T_CONS, T_SPLITR>> extends java.util.stream.StreamSpliterators$UnorderedSliceSpliterator<T, T_SPLITR> implements java.util.Spliterator$OfPrimitive<T, T_CONS, T_SPLITR> {
    public tryAdvance(arg0: T_CONS): boolean
    protected acceptConsumed(arg0: T_CONS): void
    public forEachRemaining(arg0: T_CONS): void
    protected bufferCreate(arg0: int): T_BUFF
    public trySplit(): java.util.Spliterator$OfPrimitive
    public static class: java.lang.Class<any>
}

        }
    }
}
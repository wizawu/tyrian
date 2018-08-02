declare namespace java {
    namespace util {
        namespace stream {
            abstract class StreamSpliterators$SliceSpliterator$OfPrimitive<T, T_SPLITR extends java.util.Spliterator$OfPrimitive<T, T_CONS, T_SPLITR>, T_CONS> extends java.util.stream.StreamSpliterators$SliceSpliterator<T, T_SPLITR> implements java.util.Spliterator$OfPrimitive<T, T_CONS, T_SPLITR> {
                public tryAdvance(arg0: T_CONS): boolean
                public forEachRemaining(arg0: T_CONS): void
                protected emptyConsumer(): T_CONS
                public trySplit(): java.util.Spliterator$OfPrimitive
                public static class: java.lang.Class<any>
            }
        }
    }
}
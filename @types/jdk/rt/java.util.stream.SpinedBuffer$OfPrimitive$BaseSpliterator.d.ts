declare namespace java {
    namespace util {
        namespace stream {
            abstract class SpinedBuffer$OfPrimitive$BaseSpliterator<T_SPLITR extends java.util.Spliterator$OfPrimitive<E, T_CONS, T_SPLITR>> implements java.util.Spliterator$OfPrimitive<E, T_CONS, T_SPLITR> {
                public estimateSize(): long
                public characteristics(): int
                public tryAdvance(arg0: T_CONS): boolean
                public forEachRemaining(arg0: T_CONS): void
                public trySplit(): T_SPLITR
                public trySplit(): java.util.Spliterator
                public static class: java.lang.Class<any>
            }
        }
    }
}
declare namespace java {
    namespace util {
        namespace stream {
            abstract class StreamSpliterators$UnorderedSliceSpliterator<T, T_SPLITR extends java.util.Spliterator<T>> {
                protected readonly s: T_SPLITR
                protected readonly unlimited: boolean
                protected readonly chunkSize: int
                protected acquirePermits(arg0: long): long
                protected permitStatus(): java.util.stream.StreamSpliterators$UnorderedSliceSpliterator$PermitStatus
                public trySplit(): T_SPLITR
                protected abstract makeSpliterator(arg0: T_SPLITR): T_SPLITR
                public estimateSize(): long
                public characteristics(): int
                public static class: java.lang.Class<any>
            }
            interface StreamSpliterators$UnorderedSliceSpliterator$$Lambda<T, T_SPLITR extends java.util.Spliterator<T>> {
                (arg0: T_SPLITR): T_SPLITR
            }
        }
    }
}
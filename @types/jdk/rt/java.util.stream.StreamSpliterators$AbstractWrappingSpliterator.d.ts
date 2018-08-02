declare namespace java {
    namespace util {
        namespace stream {
            abstract class StreamSpliterators$AbstractWrappingSpliterator<P_IN, P_OUT, T_BUFFER extends java.util.stream.AbstractSpinedBuffer> implements java.util.Spliterator<P_OUT> {
                public trySplit(): java.util.Spliterator<P_OUT>
                public estimateSize(): long
                public getExactSizeIfKnown(): long
                public characteristics(): int
                public getComparator(): java.util.Comparator<P_OUT>
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}
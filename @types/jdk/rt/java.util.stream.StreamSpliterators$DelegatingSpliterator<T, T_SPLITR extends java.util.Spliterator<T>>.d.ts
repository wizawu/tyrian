declare namespace java {
    namespace util {
        namespace stream {
class StreamSpliterators$DelegatingSpliterator<T, T_SPLITR extends java.util.Spliterator<T>> implements java.util.Spliterator<T> {
    public trySplit(): T_SPLITR
    public tryAdvance(arg0: java.util.function$.Consumer$$TypeScript<T>): boolean
    public forEachRemaining(arg0: java.util.function$.Consumer$$TypeScript<T>): void
    public estimateSize(): long
    public characteristics(): int
    public getComparator(): java.util.Comparator<T>
    public getExactSizeIfKnown(): long
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}
declare namespace java {
    namespace util {
class Spliterators$ArraySpliterator<T> implements java.util.Spliterator<T> {
    public constructor(arg0: java.lang.Object[], arg1: int)
    public constructor(arg0: java.lang.Object[], arg1: int, arg2: int, arg3: int)
    public trySplit(): java.util.Spliterator<T>
    public forEachRemaining(arg0: java.util.function$.Consumer$$TypeScript<T>): void
    public tryAdvance(arg0: java.util.function$.Consumer$$TypeScript<T>): boolean
    public estimateSize(): long
    public characteristics(): int
    public getComparator(): java.util.Comparator<T>
    public static class: java.lang.Class<any>
}

    }
}
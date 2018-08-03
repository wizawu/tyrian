declare namespace java {
    namespace util {
        class Spliterators$IteratorSpliterator<T> implements java.util.Spliterator<T> {
            public constructor(arg0: java.util.Collection<T>, arg1: int)
            public constructor(arg0: java.util.Iterator<T>, arg1: long, arg2: int)
            public constructor(arg0: java.util.Iterator<T>, arg1: int)
            public trySplit(): java.util.Spliterator<T>
            public forEachRemaining(arg0: java.util.function$.Consumer$$Lambda<T>): void
            public tryAdvance(arg0: java.util.function$.Consumer$$Lambda<T>): boolean
            public estimateSize(): long
            public characteristics(): int
            public getComparator(): java.util.Comparator<T>
            public static class: java.lang.Class<any>
        }
    }
}
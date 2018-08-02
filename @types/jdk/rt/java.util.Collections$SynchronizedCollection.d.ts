declare namespace java {
    namespace util {
        class Collections$SynchronizedCollection<E> implements java.util.Collection<E> , java.io.Serializable {
            public size(): int
            public isEmpty(): boolean
            public contains(arg0: java.lang.Object): boolean
            public toArray(): java.lang.Object[]
            public toArray<T>(arg0: T[]): T[]
            public iterator<T>(): java.util.Iterator<E>
            public add<T>(arg0: E): boolean
            public remove<T>(arg0: java.lang.Object): boolean
            public containsAll<T>(arg0: java.util.Collection<any>): boolean
            public addAll<T>(arg0: java.util.Collection<E>): boolean
            public removeAll<T>(arg0: java.util.Collection<any>): boolean
            public retainAll<T>(arg0: java.util.Collection<any>): boolean
            public clear<T>(): void
            public toString<T>(): string
            public forEach<T>(arg0: java.util.function$.Consumer$$TypeScript<E>): void
            public removeIf<T>(arg0: java.util.function$.Predicate<E>): boolean
            public spliterator<T>(): java.util.Spliterator<E>
            public stream<T>(): java.util.stream.Stream<E>
            public parallelStream<T>(): java.util.stream.Stream<E>
            public static class: java.lang.Class<any>
        }
    }
}
declare namespace java {
    namespace util {
        class Collections$EmptyList<E> extends java.util.AbstractList<E> implements java.util.RandomAccess , java.io.Serializable {
            public iterator(): java.util.Iterator<E>
            public listIterator(): java.util.ListIterator<E>
            public size(): int
            public isEmpty(): boolean
            public contains(arg0: java.lang.Object): boolean
            public containsAll(arg0: java.util.Collection<any>): boolean
            public toArray(): java.lang.Object[]
            public toArray<T>(arg0: T[]): T[]
            public get<T>(arg0: int): E
            public equals<T>(arg0: java.lang.Object): boolean
            public hashCode<T>(): int
            public removeIf<T>(arg0: java.util.function$.Predicate<E>): boolean
            public replaceAll<T>(arg0: java.util.function$.UnaryOperator<E> | java.util.function$.UnaryOperator$$Lambda<E>): void
            public sort<T>(arg0: java.util.Comparator<E>): void
            public forEach<T>(arg0: java.util.function$.Consumer$$Lambda<E>): void
            public spliterator<T>(): java.util.Spliterator<E>
            public static class: java.lang.Class<any>
        }
    }
}
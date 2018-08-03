declare namespace java {
    namespace util {
        interface List<E> extends java.util.Collection<E> {
            size(): int
            isEmpty(): boolean
            contains(arg0: java.lang.Object): boolean
            iterator(): java.util.Iterator<E>
            toArray(): java.lang.Object[]
            toArray<T>(arg0: T[]): T[]
            add<T>(arg0: E): boolean
            remove<T>(arg0: java.lang.Object): boolean
            containsAll<T>(arg0: java.util.Collection<any>): boolean
            addAll<T>(arg0: java.util.Collection<E>): boolean
            addAll<T>(arg0: int, arg1: java.util.Collection<E>): boolean
            removeAll<T>(arg0: java.util.Collection<any>): boolean
            retainAll<T>(arg0: java.util.Collection<any>): boolean
            replaceAll<T>(arg0: java.util.function$.UnaryOperator<E>): void
            sort<T>(arg0: java.util.Comparator<E>): void
            clear<T>(): void
            equals<T>(arg0: java.lang.Object): boolean
            hashCode<T>(): int
            get<T>(arg0: int): E
            set<T>(arg0: int, arg1: E): E
            add<T>(arg0: int, arg1: E): void
            remove<T>(arg0: int): E
            indexOf<T>(arg0: java.lang.Object): int
            lastIndexOf<T>(arg0: java.lang.Object): int
            listIterator<T>(): java.util.ListIterator<E>
            listIterator<T>(arg0: int): java.util.ListIterator<E>
            subList<T>(arg0: int, arg1: int): java.util.List<E>
            spliterator<T>(): java.util.Spliterator<E>
        }
    }
}
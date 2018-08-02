declare namespace java {
    namespace util {
        interface List<E> extends java.util.Collection<E> {
            size(): int
            isEmpty(): boolean
            contains(arg0: java.lang.Object): boolean
            iterator(): java.util.Iterator<E>
            toArray(): java.lang.Object[]
            toArray<T>(arg0: T[]): T[]
            add(arg0: E): boolean
            remove(arg0: java.lang.Object): boolean
            containsAll(arg0: java.util.Collection<any>): boolean
            addAll(arg0: java.util.Collection<E>): boolean
            addAll(arg0: int, arg1: java.util.Collection<E>): boolean
            removeAll(arg0: java.util.Collection<any>): boolean
            retainAll(arg0: java.util.Collection<any>): boolean
            replaceAll(arg0: java.util.function$.UnaryOperator<E>): void
            sort(arg0: java.util.Comparator<E>): void
            clear(): void
            equals(arg0: java.lang.Object): boolean
            hashCode(): int
            get(arg0: int): E
            set(arg0: int, arg1: E): E
            add(arg0: int, arg1: E): void
            remove(arg0: int): E
            indexOf(arg0: java.lang.Object): int
            lastIndexOf(arg0: java.lang.Object): int
            listIterator(): java.util.ListIterator<E>
            listIterator(arg0: int): java.util.ListIterator<E>
            subList(arg0: int, arg1: int): java.util.List<E>
            spliterator(): java.util.Spliterator<E>
        }
    }
}
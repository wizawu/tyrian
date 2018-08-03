declare namespace java {
    namespace util {
        interface Set<E> extends java.util.Collection<E> {
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
            retainAll<T>(arg0: java.util.Collection<any>): boolean
            removeAll<T>(arg0: java.util.Collection<any>): boolean
            clear<T>(): void
            equals<T>(arg0: java.lang.Object): boolean
            hashCode<T>(): int
            spliterator<T>(): java.util.Spliterator<E>
        }
    }
}
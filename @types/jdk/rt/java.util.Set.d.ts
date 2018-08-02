declare namespace java {
    namespace util {
        interface Set<E> extends java.util.Collection<E> {
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
            retainAll(arg0: java.util.Collection<any>): boolean
            removeAll(arg0: java.util.Collection<any>): boolean
            clear(): void
            equals(arg0: java.lang.Object): boolean
            hashCode(): int
            spliterator(): java.util.Spliterator<E>
        }
    }
}
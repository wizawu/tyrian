declare namespace java {
    namespace util {
class Collections$EmptySet<E> extends java.util.AbstractSet<E> implements java.io.Serializable {
    public iterator(): java.util.Iterator<E>
    public size(): int
    public isEmpty(): boolean
    public contains(arg0: java.lang.Object): boolean
    public containsAll(arg0: java.util.Collection<any>): boolean
    public toArray(): java.lang.Object[]
    public toArray<T>(arg0: T[]): T[]
    public forEach<T>(arg0: java.util.function$.Consumer$$TypeScript<E>): void
    public removeIf<T>(arg0: java.util.function$.Predicate<E>): boolean
    public spliterator<T>(): java.util.Spliterator<E>
    public static class: java.lang.Class<any>
}

    }
}
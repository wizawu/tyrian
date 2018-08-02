declare namespace java {
    namespace util {
class Collections$AsLIFOQueue<E> extends java.util.AbstractQueue<E> implements java.util.Queue<E> , java.io.Serializable {
    public add(arg0: E): boolean
    public offer(arg0: E): boolean
    public poll(): E
    public remove(): E
    public peek(): E
    public element(): E
    public clear(): void
    public size(): int
    public isEmpty(): boolean
    public contains(arg0: java.lang.Object): boolean
    public remove(arg0: java.lang.Object): boolean
    public iterator(): java.util.Iterator<E>
    public toArray(): java.lang.Object[]
    public toArray<T>(arg0: T[]): T[]
    public toString<T>(): string
    public containsAll<T>(arg0: java.util.Collection<any>): boolean
    public removeAll<T>(arg0: java.util.Collection<any>): boolean
    public retainAll<T>(arg0: java.util.Collection<any>): boolean
    public forEach<T>(arg0: java.util.function$.Consumer$$TypeScript<E>): void
    public removeIf<T>(arg0: java.util.function$.Predicate<E>): boolean
    public spliterator<T>(): java.util.Spliterator<E>
    public stream<T>(): java.util.stream.Stream<E>
    public parallelStream<T>(): java.util.stream.Stream<E>
    public static class: java.lang.Class<any>
}

    }
}
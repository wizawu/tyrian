declare namespace java {
    namespace util {
        namespace concurrent {
class LinkedBlockingQueue<E> extends java.util.AbstractQueue<E> implements java.util.concurrent.BlockingQueue<E> , java.io.Serializable {
    public constructor()
    public constructor(arg0: int)
    public constructor(arg0: java.util.Collection<E>)
    public size(): int
    public remainingCapacity(): int
    public put(arg0: E): void
    public offer(arg0: E, arg1: long, arg2: java.util.concurrent.TimeUnit): boolean
    public offer(arg0: E): boolean
    public take(): E
    public poll(arg0: long, arg1: java.util.concurrent.TimeUnit): E
    public poll(): E
    public peek(): E
    public remove(arg0: java.lang.Object): boolean
    public contains(arg0: java.lang.Object): boolean
    public toArray(): java.lang.Object[]
    public toArray<T>(arg0: T[]): T[]
    public toString<T>(): string
    public clear<T>(): void
    public drainTo<T>(arg0: java.util.Collection<E>): int
    public drainTo<T>(arg0: java.util.Collection<E>, arg1: int): int
    public iterator<T>(): java.util.Iterator<E>
    public spliterator<T>(): java.util.Spliterator<E>
    public static class: java.lang.Class<any>
}

        }
    }
}
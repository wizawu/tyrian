declare namespace java {
    namespace util {
        namespace concurrent {
class DelayQueue<E extends java.util.concurrent.Delayed> extends java.util.AbstractQueue<E> implements java.util.concurrent.BlockingQueue<E> {
    public constructor()
    public constructor(arg0: java.util.Collection<E>)
    public add(arg0: E): boolean
    public offer(arg0: E): boolean
    public put(arg0: E): void
    public offer(arg0: E, arg1: long, arg2: java.util.concurrent.TimeUnit): boolean
    public poll(): E
    public take(): E
    public poll(arg0: long, arg1: java.util.concurrent.TimeUnit): E
    public peek(): E
    public size(): int
    public drainTo(arg0: java.util.Collection<E>): int
    public drainTo(arg0: java.util.Collection<E>, arg1: int): int
    public clear(): void
    public remainingCapacity(): int
    public toArray(): java.lang.Object[]
    public toArray<T>(arg0: T[]): T[]
    public remove<T>(arg0: java.lang.Object): boolean
    public iterator<T>(): java.util.Iterator<E>
    public add<T>(arg0: java.lang.Object): boolean
    public peek<T>(): java.lang.Object
    public poll<T>(): java.lang.Object
    public offer<T>(arg0: java.lang.Object): boolean
    public poll<T>(arg0: long, arg1: java.util.concurrent.TimeUnit): java.lang.Object
    public take<T>(): java.lang.Object
    public offer<T>(arg0: java.lang.Object, arg1: long, arg2: java.util.concurrent.TimeUnit): boolean
    public put<T>(arg0: java.lang.Object): void
    public static class: java.lang.Class<any>
}

        }
    }
}
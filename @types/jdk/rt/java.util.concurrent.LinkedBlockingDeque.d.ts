declare namespace java {
    namespace util {
        namespace concurrent {
            class LinkedBlockingDeque<E> extends java.util.AbstractQueue<E> implements java.util.concurrent.BlockingDeque<E> , java.io.Serializable {
                public constructor()
                public constructor(arg0: int)
                public constructor(arg0: java.util.Collection<E>)
                public addFirst(arg0: E): void
                public addLast(arg0: E): void
                public offerFirst(arg0: E): boolean
                public offerLast(arg0: E): boolean
                public putFirst(arg0: E): void
                public putLast(arg0: E): void
                public offerFirst(arg0: E, arg1: long, arg2: java.util.concurrent.TimeUnit): boolean
                public offerLast(arg0: E, arg1: long, arg2: java.util.concurrent.TimeUnit): boolean
                public removeFirst(): E
                public removeLast(): E
                public pollFirst(): E
                public pollLast(): E
                public takeFirst(): E
                public takeLast(): E
                public pollFirst(arg0: long, arg1: java.util.concurrent.TimeUnit): E
                public pollLast(arg0: long, arg1: java.util.concurrent.TimeUnit): E
                public getFirst(): E
                public getLast(): E
                public peekFirst(): E
                public peekLast(): E
                public removeFirstOccurrence(arg0: java.lang.Object): boolean
                public removeLastOccurrence(arg0: java.lang.Object): boolean
                public add(arg0: E): boolean
                public offer(arg0: E): boolean
                public put(arg0: E): void
                public offer(arg0: E, arg1: long, arg2: java.util.concurrent.TimeUnit): boolean
                public remove(): E
                public poll(): E
                public take(): E
                public poll(arg0: long, arg1: java.util.concurrent.TimeUnit): E
                public element(): E
                public peek(): E
                public remainingCapacity(): int
                public drainTo(arg0: java.util.Collection<E>): int
                public drainTo(arg0: java.util.Collection<E>, arg1: int): int
                public push(arg0: E): void
                public pop(): E
                public remove(arg0: java.lang.Object): boolean
                public size(): int
                public contains(arg0: java.lang.Object): boolean
                public toArray(): java.lang.Object[]
                public toArray<T>(arg0: T[]): T[]
                public toString<T>(): string
                public clear<T>(): void
                public iterator<T>(): java.util.Iterator<E>
                public descendingIterator<T>(): java.util.Iterator<E>
                public spliterator<T>(): java.util.Spliterator<E>
                public static class: java.lang.Class<any>
            }
        }
    }
}
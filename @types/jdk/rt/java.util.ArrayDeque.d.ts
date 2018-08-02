declare namespace java {
    namespace util {
        class ArrayDeque<E> extends java.util.AbstractCollection<E> implements java.util.Deque<E> , java.lang.Cloneable , java.io.Serializable {
            public constructor()
            public constructor(arg0: int)
            public constructor(arg0: java.util.Collection<E>)
            public addFirst(arg0: E): void
            public addLast(arg0: E): void
            public offerFirst(arg0: E): boolean
            public offerLast(arg0: E): boolean
            public removeFirst(): E
            public removeLast(): E
            public pollFirst(): E
            public pollLast(): E
            public getFirst(): E
            public getLast(): E
            public peekFirst(): E
            public peekLast(): E
            public removeFirstOccurrence(arg0: java.lang.Object): boolean
            public removeLastOccurrence(arg0: java.lang.Object): boolean
            public add(arg0: E): boolean
            public offer(arg0: E): boolean
            public remove(): E
            public poll(): E
            public element(): E
            public peek(): E
            public push(arg0: E): void
            public pop(): E
            public size(): int
            public isEmpty(): boolean
            public iterator(): java.util.Iterator<E>
            public descendingIterator(): java.util.Iterator<E>
            public contains(arg0: java.lang.Object): boolean
            public remove(arg0: java.lang.Object): boolean
            public clear(): void
            public toArray(): java.lang.Object[]
            public toArray<T>(arg0: T[]): T[]
            public clone<T>(): java.util.ArrayDeque<E>
            public spliterator<T>(): java.util.Spliterator<E>
            public clone<T>(): java.lang.Object
            public static class: java.lang.Class<any>
        }
    }
}
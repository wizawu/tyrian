declare namespace java {
    namespace util {
        class PriorityQueue<E> extends java.util.AbstractQueue<E> implements java.io.Serializable {
            public constructor()
            public constructor(arg0: int)
            public constructor(arg0: java.util.Comparator<E>)
            public constructor(arg0: int, arg1: java.util.Comparator<E>)
            public constructor(arg0: java.util.Collection<E>)
            public constructor(arg0: java.util.PriorityQueue<E>)
            public constructor(arg0: java.util.SortedSet<E>)
            public add(arg0: E): boolean
            public offer(arg0: E): boolean
            public peek(): E
            public remove(arg0: java.lang.Object): boolean
            public contains(arg0: java.lang.Object): boolean
            public toArray(): java.lang.Object[]
            public toArray<T>(arg0: T[]): T[]
            public iterator<T>(): java.util.Iterator<E>
            public size<T>(): int
            public clear<T>(): void
            public poll<T>(): E
            public comparator<T>(): java.util.Comparator<E>
            public spliterator<T>(): java.util.Spliterator<E>
            public static class: java.lang.Class<any>
        }
    }
}
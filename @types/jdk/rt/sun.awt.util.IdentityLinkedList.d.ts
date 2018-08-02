declare namespace sun {
    namespace awt {
        namespace util {
            class IdentityLinkedList<E> extends java.util.AbstractSequentialList<E> implements java.util.List<E> , java.util.Deque<E> {
                public constructor()
                public constructor(arg0: java.util.Collection<E>)
                public getFirst(): E
                public getLast(): E
                public removeFirst(): E
                public removeLast(): E
                public addFirst(arg0: E): void
                public addLast(arg0: E): void
                public contains(arg0: java.lang.Object): boolean
                public size(): int
                public add(arg0: E): boolean
                public remove(arg0: java.lang.Object): boolean
                public addAll(arg0: java.util.Collection<E>): boolean
                public addAll(arg0: int, arg1: java.util.Collection<E>): boolean
                public clear(): void
                public get(arg0: int): E
                public set(arg0: int, arg1: E): E
                public add(arg0: int, arg1: E): void
                public remove(arg0: int): E
                public indexOf(arg0: java.lang.Object): int
                public lastIndexOf(arg0: java.lang.Object): int
                public peek(): E
                public element(): E
                public poll(): E
                public remove(): E
                public offer(arg0: E): boolean
                public offerFirst(arg0: E): boolean
                public offerLast(arg0: E): boolean
                public peekFirst(): E
                public peekLast(): E
                public pollFirst(): E
                public pollLast(): E
                public push(arg0: E): void
                public pop(): E
                public removeFirstOccurrence(arg0: java.lang.Object): boolean
                public removeLastOccurrence(arg0: java.lang.Object): boolean
                public listIterator(arg0: int): java.util.ListIterator<E>
                public descendingIterator(): java.util.Iterator<E>
                public toArray(): java.lang.Object[]
                public toArray<T>(arg0: T[]): T[]
                public static class: java.lang.Class<any>
            }
        }
    }
}
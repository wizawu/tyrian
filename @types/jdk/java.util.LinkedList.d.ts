declare namespace java {
  namespace util {
    class LinkedList<E>
      extends java.util.AbstractSequentialList<E>
      implements java.util.List<E>, java.util.Deque<E>, java.lang.Cloneable, java.io.Serializable
    {
      size: int
      first: java.util.LinkedList$Node<E>
      last: java.util.LinkedList$Node<E>
      public constructor()
      public constructor(arg0: java.util.Collection<E>)
      linkLast(arg0: E): void
      linkBefore(arg0: E, arg1: java.util.LinkedList$Node<E>): void
      unlink(arg0: java.util.LinkedList$Node<E>): E
      public getFirst(): E
      public getLast(): E
      public removeFirst(): E
      public removeLast(): E
      public addFirst(arg0: E): void
      public addLast(arg0: E): void
      public contains(arg0: java.lang.Object | any): boolean
      public size(): number
      public add(arg0: E): boolean
      public remove(arg0: java.lang.Object | any): boolean
      public addAll(arg0: java.util.Collection<E>): boolean
      public addAll(arg0: number | java.lang.Integer, arg1: java.util.Collection<E>): boolean
      public clear(): void
      public get(arg0: number | java.lang.Integer): E
      public set(arg0: number | java.lang.Integer, arg1: E): E
      public add(arg0: number | java.lang.Integer, arg1: E): void
      public remove(arg0: number | java.lang.Integer): E
      node(arg0: number | java.lang.Integer): java.util.LinkedList$Node<E>
      public indexOf(arg0: java.lang.Object | any): number
      public lastIndexOf(arg0: java.lang.Object | any): number
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
      public removeFirstOccurrence(arg0: java.lang.Object | any): boolean
      public removeLastOccurrence(arg0: java.lang.Object | any): boolean
      public listIterator(arg0: number | java.lang.Integer): java.util.ListIterator<E>
      public descendingIterator(): java.util.Iterator<E>
      public clone(): java.lang.Object
      public toArray(): java.lang.Object[]
      public toArray<T>(arg0: T[]): T[]
      public spliterator(): java.util.Spliterator<E>
    }
  }
}

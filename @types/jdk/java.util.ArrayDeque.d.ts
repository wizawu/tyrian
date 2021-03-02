declare namespace java {
  namespace util {

    class ArrayDeque<E> extends java.util.AbstractCollection<E> implements java.util.Deque<E>, java.lang.Cloneable, java.io.Serializable {
      elements: java.lang.Object[]
      head: int
      tail: int
      public constructor()
      public constructor(arg0: int)
      public constructor(arg0: java.util.Collection<E>)
      static inc(arg0: int, arg1: int): int
      static dec(arg0: int, arg1: int): int
      static inc(arg0: int, arg1: int, arg2: int): int
      static sub(arg0: int, arg1: int, arg2: int): int
      static elementAt<E>(arg0: java.lang.Object[], arg1: int): E
      static nonNullElementAt<E>(arg0: java.lang.Object[], arg1: int): E
      public addFirst(arg0: E): void
      public addLast(arg0: E): void
      public addAll(arg0: java.util.Collection<E>): boolean
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
      delete(arg0: int): boolean
      public size(): int
      public isEmpty(): boolean
      public iterator(): java.util.Iterator<E>
      public descendingIterator(): java.util.Iterator<E>
      public spliterator(): java.util.Spliterator<E>
      public forEach(arg0: java.util.function$.Consumer<unknown>): void
      public removeIf(arg0: java.util.function$.Predicate<unknown>): boolean
      public removeAll(arg0: java.util.Collection<unknown>): boolean
      public retainAll(arg0: java.util.Collection<unknown>): boolean
      public contains(arg0: java.lang.Object): boolean
      public remove(arg0: java.lang.Object): boolean
      public clear(): void
      public toArray(): java.lang.Object[]
      public toArray<T>(arg0: T[]): T[]
      public clone(): java.util.ArrayDeque<E>
      checkInvariants(): void
      public clone(): java.lang.Object
    }

  }
}

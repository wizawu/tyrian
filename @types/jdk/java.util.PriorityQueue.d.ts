declare namespace java {
  namespace util {

    class PriorityQueue<E> extends java.util.AbstractQueue<E> implements java.io.Serializable {
      queue: java.lang.Object[]
      size: int
      modCount: int
      public constructor()
      public constructor(arg0: number | java.lang.Integer)
      public constructor(arg0: java.util.Comparator<unknown>)
      public constructor(arg0: number | java.lang.Integer, arg1: java.util.Comparator<unknown>)
      public constructor(arg0: java.util.Collection<E>)
      public constructor(arg0: java.util.PriorityQueue<E>)
      public constructor(arg0: java.util.SortedSet<E>)
      public add(arg0: E): boolean
      public offer(arg0: E): boolean
      public peek(): E
      public remove(arg0: java.lang.Object | any): boolean
      removeEq(arg0: java.lang.Object | any): void
      public contains(arg0: java.lang.Object | any): boolean
      public toArray(): java.lang.Object[]
      public toArray<T>(arg0: T[]): T[]
      public iterator(): java.util.Iterator<E>
      public size(): number
      public clear(): void
      public poll(): E
      removeAt(arg0: number | java.lang.Integer): E
      public comparator(): java.util.Comparator<unknown>
      public spliterator(): java.util.Spliterator<E>
      public removeIf(arg0: java.util.function$.Predicate<unknown>): boolean
      public removeAll(arg0: java.util.Collection<unknown>): boolean
      public retainAll(arg0: java.util.Collection<unknown>): boolean
      public forEach(arg0: java.util.function$.Consumer<unknown>): void
    }

  }
}

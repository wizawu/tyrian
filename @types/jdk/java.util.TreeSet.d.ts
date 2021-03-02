declare namespace java {
  namespace util {

    class TreeSet<E> extends java.util.AbstractSet<E> implements java.util.NavigableSet<E>, java.lang.Cloneable, java.io.Serializable {
      constructor(arg0: java.util.NavigableMap<E,java.lang.Object>)
      public constructor()
      public constructor(arg0: java.util.Comparator<unknown>)
      public constructor(arg0: java.util.Collection<E>)
      public constructor(arg0: java.util.SortedSet<E>)
      public iterator(): java.util.Iterator<E>
      public descendingIterator(): java.util.Iterator<E>
      public descendingSet(): java.util.NavigableSet<E>
      public size(): number
      public isEmpty(): boolean
      public contains(arg0: java.lang.Object | any): boolean
      public add(arg0: E): boolean
      public remove(arg0: java.lang.Object | any): boolean
      public clear(): void
      public addAll(arg0: java.util.Collection<E>): boolean
      public subSet(arg0: E, arg1: boolean | java.lang.Boolean, arg2: E, arg3: boolean | java.lang.Boolean): java.util.NavigableSet<E>
      public headSet(arg0: E, arg1: boolean | java.lang.Boolean): java.util.NavigableSet<E>
      public tailSet(arg0: E, arg1: boolean | java.lang.Boolean): java.util.NavigableSet<E>
      public subSet(arg0: E, arg1: E): java.util.SortedSet<E>
      public headSet(arg0: E): java.util.SortedSet<E>
      public tailSet(arg0: E): java.util.SortedSet<E>
      public comparator(): java.util.Comparator<unknown>
      public first(): E
      public last(): E
      public lower(arg0: E): E
      public floor(arg0: E): E
      public ceiling(arg0: E): E
      public higher(arg0: E): E
      public pollFirst(): E
      public pollLast(): E
      public clone(): java.lang.Object
      public spliterator(): java.util.Spliterator<E>
    }

  }
}

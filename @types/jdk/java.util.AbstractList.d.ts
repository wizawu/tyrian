declare namespace java {
  namespace util {

    abstract class AbstractList<E> extends java.util.AbstractCollection<E> implements java.util.List<E> {
      protected modCount: int
      protected constructor()
      public add(arg0: E): boolean
      public abstract get(arg0: int): E
      public set(arg0: int, arg1: E): E
      public add(arg0: int, arg1: E): void
      public remove(arg0: int): E
      public indexOf(arg0: java.lang.Object): int
      public lastIndexOf(arg0: java.lang.Object): int
      public clear(): void
      public addAll(arg0: int, arg1: java.util.Collection<E>): boolean
      public iterator(): java.util.Iterator<E>
      public listIterator(): java.util.ListIterator<E>
      public listIterator(arg0: int): java.util.ListIterator<E>
      public subList(arg0: int, arg1: int): java.util.List<E>
      static subListRangeCheck(arg0: int, arg1: int, arg2: int): void
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      protected removeRange(arg0: int, arg1: int): void
    }

  }
}

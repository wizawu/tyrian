declare namespace java {
  namespace util {
    abstract class AbstractList<E> extends java.util.AbstractCollection<E> implements java.util.List<E> {
      protected modCount: int
      protected constructor()
      public add(arg0: E): boolean
      public abstract get(arg0: number | java.lang.Integer): E
      public set(arg0: number | java.lang.Integer, arg1: E): E
      public add(arg0: number | java.lang.Integer, arg1: E): void
      public remove(arg0: number | java.lang.Integer): E
      public indexOf(arg0: java.lang.Object | any): number
      public lastIndexOf(arg0: java.lang.Object | any): number
      public clear(): void
      public addAll(arg0: number | java.lang.Integer, arg1: java.util.Collection<E>): boolean
      public iterator(): java.util.Iterator<E>
      public listIterator(): java.util.ListIterator<E>
      public listIterator(arg0: number | java.lang.Integer): java.util.ListIterator<E>
      public subList(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.util.List<E>
      static subListRangeCheck(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): void
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      protected removeRange(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
    }
  }
}

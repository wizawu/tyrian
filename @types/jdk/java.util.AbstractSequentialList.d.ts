declare namespace java {
  namespace util {
    abstract class AbstractSequentialList<E> extends java.util.AbstractList<E> {
      protected constructor()
      public get(arg0: number | java.lang.Integer): E
      public set(arg0: number | java.lang.Integer, arg1: E): E
      public add(arg0: number | java.lang.Integer, arg1: E): void
      public remove(arg0: number | java.lang.Integer): E
      public addAll(arg0: number | java.lang.Integer, arg1: java.util.Collection<E>): boolean
      public iterator(): java.util.Iterator<E>
      public abstract listIterator(arg0: number | java.lang.Integer): java.util.ListIterator<E>
    }
  }
}

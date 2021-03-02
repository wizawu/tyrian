declare namespace java {
  namespace util {

    abstract class AbstractQueue<E> extends java.util.AbstractCollection<E> implements java.util.Queue<E> {
      protected constructor()
      public add(arg0: E): boolean
      public remove(): E
      public element(): E
      public clear(): void
      public addAll(arg0: java.util.Collection<E>): boolean
    }

  }
}

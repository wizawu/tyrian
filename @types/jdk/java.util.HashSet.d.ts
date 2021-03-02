declare namespace java {
  namespace util {

    class HashSet<E> extends java.util.AbstractSet<E> implements java.util.Set<E>, java.lang.Cloneable, java.io.Serializable {
      static readonly serialVersionUID: long
      public constructor()
      public constructor(arg0: java.util.Collection<E>)
      public constructor(arg0: int, arg1: float)
      public constructor(arg0: int)
      constructor(arg0: int, arg1: float, arg2: boolean)
      public iterator(): java.util.Iterator<E>
      public size(): int
      public isEmpty(): boolean
      public contains(arg0: java.lang.Object): boolean
      public add(arg0: E): boolean
      public remove(arg0: java.lang.Object): boolean
      public clear(): void
      public clone(): java.lang.Object
      public spliterator(): java.util.Spliterator<E>
    }

  }
}

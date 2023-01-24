declare namespace java {
  namespace util {
    class HashSet<E>
      extends java.util.AbstractSet<E>
      implements java.util.Set<E>, java.lang.Cloneable, java.io.Serializable
    {
      static readonly serialVersionUID: long
      public constructor()
      public constructor(arg0: java.util.Collection<E>)
      public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Float)
      public constructor(arg0: number | java.lang.Integer)
      constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Float, arg2: boolean | java.lang.Boolean)
      public iterator(): java.util.Iterator<E>
      public size(): number
      public isEmpty(): boolean
      public contains(arg0: java.lang.Object | any): boolean
      public add(arg0: E): boolean
      public remove(arg0: java.lang.Object | any): boolean
      public clear(): void
      public clone(): java.lang.Object
      public spliterator(): java.util.Spliterator<E>
    }
  }
}

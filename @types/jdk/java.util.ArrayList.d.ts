declare namespace java {
  namespace util {
    class ArrayList<E>
      extends java.util.AbstractList<E>
      implements java.util.List<E>, java.util.RandomAccess, java.lang.Cloneable, java.io.Serializable
    {
      elementData: java.lang.Object[]
      public constructor(arg0: number | java.lang.Integer)
      public constructor()
      public constructor(arg0: java.util.Collection<E>)
      public trimToSize(): void
      public ensureCapacity(arg0: number | java.lang.Integer): void
      public size(): number
      public isEmpty(): boolean
      public contains(arg0: java.lang.Object | any): boolean
      public indexOf(arg0: java.lang.Object | any): number
      indexOfRange(
        arg0: java.lang.Object | any,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): number
      public lastIndexOf(arg0: java.lang.Object | any): number
      lastIndexOfRange(
        arg0: java.lang.Object | any,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): number
      public clone(): java.lang.Object
      public toArray(): java.lang.Object[]
      public toArray<T>(arg0: T[]): T[]
      elementData(arg0: number | java.lang.Integer): E
      static elementAt<E>(arg0: java.lang.Object[] | any[], arg1: number | java.lang.Integer): E
      public get(arg0: number | java.lang.Integer): E
      public set(arg0: number | java.lang.Integer, arg1: E): E
      public add(arg0: E): boolean
      public add(arg0: number | java.lang.Integer, arg1: E): void
      public remove(arg0: number | java.lang.Integer): E
      public equals(arg0: java.lang.Object | any): boolean
      equalsRange(
        arg0: java.util.List<unknown>,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): boolean
      public hashCode(): number
      hashCodeRange(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
      public remove(arg0: java.lang.Object | any): boolean
      public clear(): void
      public addAll(arg0: java.util.Collection<E>): boolean
      public addAll(arg0: number | java.lang.Integer, arg1: java.util.Collection<E>): boolean
      protected removeRange(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public removeAll(arg0: java.util.Collection<unknown>): boolean
      public retainAll(arg0: java.util.Collection<unknown>): boolean
      batchRemove(
        arg0: java.util.Collection<unknown>,
        arg1: boolean | java.lang.Boolean,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer
      ): boolean
      public listIterator(arg0: number | java.lang.Integer): java.util.ListIterator<E>
      public listIterator(): java.util.ListIterator<E>
      public iterator(): java.util.Iterator<E>
      public subList(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.util.List<E>
      public forEach(arg0: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>): void
      public spliterator(): java.util.Spliterator<E>
      public removeIf(arg0: java.util.function$.Predicate<unknown>): boolean
      removeIf(
        arg0: java.util.function$.Predicate<unknown>,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): boolean
      public replaceAll(arg0: java.util.function$.UnaryOperator<E>): void
      public sort(arg0: java.util.Comparator<unknown>): void
      checkInvariants(): void
    }
  }
}

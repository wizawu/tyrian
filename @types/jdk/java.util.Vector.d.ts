declare namespace java {
  namespace util {
    class Vector<E>
      extends java.util.AbstractList<E>
      implements java.util.List<E>, java.util.RandomAccess, java.lang.Cloneable, java.io.Serializable
    {
      protected elementData: java.lang.Object[]
      protected elementCount: int
      protected capacityIncrement: int
      public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer)
      public constructor(arg0: number | java.lang.Integer)
      public constructor()
      public constructor(arg0: java.util.Collection<E>)
      public copyInto(arg0: java.lang.Object[] | any[]): void
      public trimToSize(): void
      public ensureCapacity(arg0: number | java.lang.Integer): void
      public setSize(arg0: number | java.lang.Integer): void
      public capacity(): number
      public size(): number
      public isEmpty(): boolean
      public elements(): java.util.Enumeration<E>
      public contains(arg0: java.lang.Object | any): boolean
      public indexOf(arg0: java.lang.Object | any): number
      public indexOf(arg0: java.lang.Object | any, arg1: number | java.lang.Integer): number
      public lastIndexOf(arg0: java.lang.Object | any): number
      public lastIndexOf(arg0: java.lang.Object | any, arg1: number | java.lang.Integer): number
      public elementAt(arg0: number | java.lang.Integer): E
      public firstElement(): E
      public lastElement(): E
      public setElementAt(arg0: E, arg1: number | java.lang.Integer): void
      public removeElementAt(arg0: number | java.lang.Integer): void
      public insertElementAt(arg0: E, arg1: number | java.lang.Integer): void
      public addElement(arg0: E): void
      public removeElement(arg0: java.lang.Object | any): boolean
      public removeAllElements(): void
      public clone(): java.lang.Object
      public toArray(): java.lang.Object[]
      public toArray<T>(arg0: T[]): T[]
      elementData(arg0: number | java.lang.Integer): E
      static elementAt<E>(arg0: java.lang.Object[] | any[], arg1: number | java.lang.Integer): E
      public get(arg0: number | java.lang.Integer): E
      public set(arg0: number | java.lang.Integer, arg1: E): E
      public add(arg0: E): boolean
      public remove(arg0: java.lang.Object | any): boolean
      public add(arg0: number | java.lang.Integer, arg1: E): void
      public remove(arg0: number | java.lang.Integer): E
      public clear(): void
      public containsAll(arg0: java.util.Collection<unknown>): boolean
      public addAll(arg0: java.util.Collection<E>): boolean
      public removeAll(arg0: java.util.Collection<unknown>): boolean
      public retainAll(arg0: java.util.Collection<unknown>): boolean
      public removeIf(arg0: java.util.function$.Predicate<unknown>): boolean
      public addAll(arg0: number | java.lang.Integer, arg1: java.util.Collection<E>): boolean
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public toString(): java.lang.String
      public subList(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.util.List<E>
      protected removeRange(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public listIterator(arg0: number | java.lang.Integer): java.util.ListIterator<E>
      public listIterator(): java.util.ListIterator<E>
      public iterator(): java.util.Iterator<E>
      public forEach(arg0: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>): void
      public replaceAll(arg0: java.util.function$.UnaryOperator<E>): void
      public sort(arg0: java.util.Comparator<unknown>): void
      public spliterator(): java.util.Spliterator<E>
      checkInvariants(): void
    }
  }
}

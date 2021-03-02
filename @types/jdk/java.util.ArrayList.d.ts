declare namespace java {
  namespace util {

    class ArrayList<E> extends java.util.AbstractList<E> implements java.util.List<E>, java.util.RandomAccess, java.lang.Cloneable, java.io.Serializable {
      elementData: java.lang.Object[]
      public constructor(arg0: int)
      public constructor()
      public constructor(arg0: java.util.Collection<E>)
      public trimToSize(): void
      public ensureCapacity(arg0: int): void
      public size(): int
      public isEmpty(): boolean
      public contains(arg0: java.lang.Object): boolean
      public indexOf(arg0: java.lang.Object): int
      indexOfRange(arg0: java.lang.Object, arg1: int, arg2: int): int
      public lastIndexOf(arg0: java.lang.Object): int
      lastIndexOfRange(arg0: java.lang.Object, arg1: int, arg2: int): int
      public clone(): java.lang.Object
      public toArray(): java.lang.Object[]
      public toArray<T>(arg0: T[]): T[]
      elementData(arg0: int): E
      static elementAt<E>(arg0: java.lang.Object[], arg1: int): E
      public get(arg0: int): E
      public set(arg0: int, arg1: E): E
      public add(arg0: E): boolean
      public add(arg0: int, arg1: E): void
      public remove(arg0: int): E
      public equals(arg0: java.lang.Object): boolean
      equalsRange(arg0: java.util.List<unknown>, arg1: int, arg2: int): boolean
      public hashCode(): int
      hashCodeRange(arg0: int, arg1: int): int
      public remove(arg0: java.lang.Object): boolean
      public clear(): void
      public addAll(arg0: java.util.Collection<E>): boolean
      public addAll(arg0: int, arg1: java.util.Collection<E>): boolean
      protected removeRange(arg0: int, arg1: int): void
      public removeAll(arg0: java.util.Collection<unknown>): boolean
      public retainAll(arg0: java.util.Collection<unknown>): boolean
      batchRemove(arg0: java.util.Collection<unknown>, arg1: boolean, arg2: int, arg3: int): boolean
      public listIterator(arg0: int): java.util.ListIterator<E>
      public listIterator(): java.util.ListIterator<E>
      public iterator(): java.util.Iterator<E>
      public subList(arg0: int, arg1: int): java.util.List<E>
      public forEach(arg0: java.util.function$.Consumer<unknown>): void
      public spliterator(): java.util.Spliterator<E>
      public removeIf(arg0: java.util.function$.Predicate<unknown>): boolean
      removeIf(arg0: java.util.function$.Predicate<unknown>, arg1: int, arg2: int): boolean
      public replaceAll(arg0: java.util.function$.UnaryOperator<E>): void
      public sort(arg0: java.util.Comparator<unknown>): void
      checkInvariants(): void
    }

  }
}

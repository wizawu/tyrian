declare namespace java {
  namespace util {
    namespace concurrent {

      class CopyOnWriteArrayList<E> implements java.util.List<E>, java.util.RandomAccess, java.lang.Cloneable, java.io.Serializable {
        readonly lock: java.lang.Object
        getArray(): java.lang.Object[]
        setArray(arg0: java.lang.Object[]): void
        public constructor()
        public constructor(arg0: java.util.Collection<E>)
        public constructor(arg0: E[])
        public size(): int
        public isEmpty(): boolean
        public contains(arg0: java.lang.Object): boolean
        public indexOf(arg0: java.lang.Object): int
        public indexOf(arg0: E, arg1: int): int
        public lastIndexOf(arg0: java.lang.Object): int
        public lastIndexOf(arg0: E, arg1: int): int
        public clone(): java.lang.Object
        public toArray(): java.lang.Object[]
        public toArray<T>(arg0: T[]): T[]
        static elementAt<E>(arg0: java.lang.Object[], arg1: int): E
        static outOfBounds(arg0: int, arg1: int): java.lang.String
        public get(arg0: int): E
        public set(arg0: int, arg1: E): E
        public add(arg0: E): boolean
        public add(arg0: int, arg1: E): void
        public remove(arg0: int): E
        public remove(arg0: java.lang.Object): boolean
        removeRange(arg0: int, arg1: int): void
        public addIfAbsent(arg0: E): boolean
        public containsAll(arg0: java.util.Collection<unknown>): boolean
        public removeAll(arg0: java.util.Collection<unknown>): boolean
        public retainAll(arg0: java.util.Collection<unknown>): boolean
        public addAllAbsent(arg0: java.util.Collection<E>): int
        public clear(): void
        public addAll(arg0: java.util.Collection<E>): boolean
        public addAll(arg0: int, arg1: java.util.Collection<E>): boolean
        public forEach(arg0: java.util.function$.Consumer<unknown>): void
        public removeIf(arg0: java.util.function$.Predicate<unknown>): boolean
        bulkRemove(arg0: java.util.function$.Predicate<unknown>, arg1: int, arg2: int): boolean
        public replaceAll(arg0: java.util.function$.UnaryOperator<E>): void
        replaceAllRange(arg0: java.util.function$.UnaryOperator<E>, arg1: int, arg2: int): void
        public sort(arg0: java.util.Comparator<unknown>): void
        sortRange(arg0: java.util.Comparator<unknown>, arg1: int, arg2: int): void
        public toString(): java.lang.String
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
        public iterator(): java.util.Iterator<E>
        public listIterator(): java.util.ListIterator<E>
        public listIterator(arg0: int): java.util.ListIterator<E>
        public spliterator(): java.util.Spliterator<E>
        public subList(arg0: int, arg1: int): java.util.List<E>
      }

    }
  }
}

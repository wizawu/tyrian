declare namespace java {
    namespace util {
        class ArrayList<E> extends java.util.AbstractList<E> implements java.util.List<E> , java.util.RandomAccess , java.lang.Cloneable , java.io.Serializable {
            public constructor(arg0: int)
            public constructor()
            public constructor(arg0: java.util.Collection<E>)
            public trimToSize(): void
            public ensureCapacity(arg0: int): void
            public size(): int
            public isEmpty(): boolean
            public contains(arg0: java.lang.Object): boolean
            public indexOf(arg0: java.lang.Object): int
            public lastIndexOf(arg0: java.lang.Object): int
            public clone(): java.lang.Object
            public toArray(): java.lang.Object[]
            public toArray<T>(arg0: T[]): T[]
            public get<T>(arg0: int): E
            public set<T>(arg0: int, arg1: E): E
            public add<T>(arg0: E): boolean
            public add<T>(arg0: int, arg1: E): void
            public remove<T>(arg0: int): E
            public remove<T>(arg0: java.lang.Object): boolean
            public clear<T>(): void
            public addAll<T>(arg0: java.util.Collection<E>): boolean
            public addAll<T>(arg0: int, arg1: java.util.Collection<E>): boolean
            protected removeRange<T>(arg0: int, arg1: int): void
            public removeAll<T>(arg0: java.util.Collection<any>): boolean
            public retainAll<T>(arg0: java.util.Collection<any>): boolean
            public listIterator<T>(arg0: int): java.util.ListIterator<E>
            public listIterator<T>(): java.util.ListIterator<E>
            public iterator<T>(): java.util.Iterator<E>
            public subList<T>(arg0: int, arg1: int): java.util.List<E>
            public forEach<T>(arg0: java.util.function$.Consumer$$TypeScript<E>): void
            public spliterator<T>(): java.util.Spliterator<E>
            public removeIf<T>(arg0: java.util.function$.Predicate<E>): boolean
            public replaceAll<T>(arg0: java.util.function$.UnaryOperator<E>): void
            public sort<T>(arg0: java.util.Comparator<E>): void
            public static class: java.lang.Class<any>
        }
    }
}
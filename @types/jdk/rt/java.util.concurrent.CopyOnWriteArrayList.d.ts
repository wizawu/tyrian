declare namespace java {
    namespace util {
        namespace concurrent {
            class CopyOnWriteArrayList<E> implements java.util.List<E> , java.util.RandomAccess , java.lang.Cloneable , java.io.Serializable {
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
                public get<T>(arg0: int): E
                public set<T>(arg0: int, arg1: E): E
                public add<T>(arg0: E): boolean
                public add<T>(arg0: int, arg1: E): void
                public remove<T>(arg0: int): E
                public remove<T>(arg0: java.lang.Object): boolean
                public addIfAbsent<T>(arg0: E): boolean
                public containsAll<T>(arg0: java.util.Collection<any>): boolean
                public removeAll<T>(arg0: java.util.Collection<any>): boolean
                public retainAll<T>(arg0: java.util.Collection<any>): boolean
                public addAllAbsent<T>(arg0: java.util.Collection<E>): int
                public clear<T>(): void
                public addAll<T>(arg0: java.util.Collection<E>): boolean
                public addAll<T>(arg0: int, arg1: java.util.Collection<E>): boolean
                public forEach<T>(arg0: java.util.function$.Consumer$$Lambda<E>): void
                public removeIf<T>(arg0: java.util.function$.Predicate<E>): boolean
                public replaceAll<T>(arg0: java.util.function$.UnaryOperator<E> | java.util.function$.UnaryOperator$$Lambda<E>): void
                public sort<T>(arg0: java.util.Comparator<E>): void
                public toString<T>(): string
                public equals<T>(arg0: java.lang.Object): boolean
                public hashCode<T>(): int
                public iterator<T>(): java.util.Iterator<E>
                public listIterator<T>(): java.util.ListIterator<E>
                public listIterator<T>(arg0: int): java.util.ListIterator<E>
                public spliterator<T>(): java.util.Spliterator<E>
                public subList<T>(arg0: int, arg1: int): java.util.List<E>
                public static class: java.lang.Class<any>
            }
        }
    }
}
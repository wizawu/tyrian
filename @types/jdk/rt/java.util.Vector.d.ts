declare namespace java {
    namespace util {
        class Vector<E> extends java.util.AbstractList<E> implements java.util.List<E> , java.util.RandomAccess , java.lang.Cloneable , java.io.Serializable {
            protected elementData: java.lang.Object[]
            protected elementCount: int
            protected capacityIncrement: int
            public constructor(arg0: int, arg1: int)
            public constructor(arg0: int)
            public constructor()
            public constructor(arg0: java.util.Collection<E>)
            public copyInto(arg0: java.lang.Object[]): void
            public trimToSize(): void
            public ensureCapacity(arg0: int): void
            public setSize(arg0: int): void
            public capacity(): int
            public size(): int
            public isEmpty(): boolean
            public elements(): java.util.Enumeration<E>
            public contains(arg0: java.lang.Object): boolean
            public indexOf(arg0: java.lang.Object): int
            public indexOf(arg0: java.lang.Object, arg1: int): int
            public lastIndexOf(arg0: java.lang.Object): int
            public lastIndexOf(arg0: java.lang.Object, arg1: int): int
            public elementAt(arg0: int): E
            public firstElement(): E
            public lastElement(): E
            public setElementAt(arg0: E, arg1: int): void
            public removeElementAt(arg0: int): void
            public insertElementAt(arg0: E, arg1: int): void
            public addElement(arg0: E): void
            public removeElement(arg0: java.lang.Object): boolean
            public removeAllElements(): void
            public clone(): java.lang.Object
            public toArray(): java.lang.Object[]
            public toArray<T>(arg0: T[]): T[]
            public get(arg0: int): E
            public set(arg0: int, arg1: E): E
            public add(arg0: E): boolean
            public remove(arg0: java.lang.Object): boolean
            public add(arg0: int, arg1: E): void
            public remove(arg0: int): E
            public clear(): void
            public containsAll(arg0: java.util.Collection<any>): boolean
            public addAll(arg0: java.util.Collection<E>): boolean
            public removeAll(arg0: java.util.Collection<any>): boolean
            public retainAll(arg0: java.util.Collection<any>): boolean
            public addAll(arg0: int, arg1: java.util.Collection<E>): boolean
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public toString(): string
            public subList(arg0: int, arg1: int): java.util.List<E>
            protected removeRange(arg0: int, arg1: int): void
            public listIterator(arg0: int): java.util.ListIterator<E>
            public listIterator(): java.util.ListIterator<E>
            public iterator(): java.util.Iterator<E>
            public forEach(arg0: java.util.function$.Consumer$$Lambda<E>): void
            public removeIf(arg0: java.util.function$.Predicate<E>): boolean
            public replaceAll(arg0: java.util.function$.UnaryOperator<E>): void
            public sort(arg0: java.util.Comparator<E>): void
            public spliterator(): java.util.Spliterator<E>
            public static class: java.lang.Class<any>
        }
    }
}
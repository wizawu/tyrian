declare namespace java {
    namespace util {
        namespace concurrent {
            class CopyOnWriteArrayList$COWSubList<E> extends java.util.AbstractList<E> implements java.util.RandomAccess {
                public set(arg0: int, arg1: E): E
                public get(arg0: int): E
                public size(): int
                public add(arg0: int, arg1: E): void
                public clear(): void
                public remove(arg0: int): E
                public remove(arg0: java.lang.Object): boolean
                public iterator(): java.util.Iterator<E>
                public listIterator(arg0: int): java.util.ListIterator<E>
                public subList(arg0: int, arg1: int): java.util.List<E>
                public forEach(arg0: java.util.function$.Consumer$$Lambda<E>): void
                public replaceAll(arg0: java.util.function$.UnaryOperator<E>): void
                public sort(arg0: java.util.Comparator<E>): void
                public removeAll(arg0: java.util.Collection<any>): boolean
                public retainAll(arg0: java.util.Collection<any>): boolean
                public removeIf(arg0: java.util.function$.Predicate<E>): boolean
                public spliterator(): java.util.Spliterator<E>
                public static class: java.lang.Class<any>
            }
        }
    }
}
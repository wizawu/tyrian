declare namespace java {
    namespace util {
        namespace concurrent {
            class ConcurrentSkipListMap$KeySet<E> extends java.util.AbstractSet<E> implements java.util.NavigableSet<E> {
                public size(): int
                public isEmpty(): boolean
                public contains(arg0: java.lang.Object): boolean
                public remove(arg0: java.lang.Object): boolean
                public clear(): void
                public lower(arg0: E): E
                public floor(arg0: E): E
                public ceiling(arg0: E): E
                public higher(arg0: E): E
                public comparator(): java.util.Comparator<E>
                public first(): E
                public last(): E
                public pollFirst(): E
                public pollLast(): E
                public iterator(): java.util.Iterator<E>
                public equals(arg0: java.lang.Object): boolean
                public toArray(): java.lang.Object[]
                public toArray<T>(arg0: T[]): T[]
                public descendingIterator<T>(): java.util.Iterator<E>
                public subSet<T>(arg0: E, arg1: boolean, arg2: E, arg3: boolean): java.util.NavigableSet<E>
                public headSet<T>(arg0: E, arg1: boolean): java.util.NavigableSet<E>
                public tailSet<T>(arg0: E, arg1: boolean): java.util.NavigableSet<E>
                public subSet<T>(arg0: E, arg1: E): java.util.NavigableSet<E>
                public headSet<T>(arg0: E): java.util.NavigableSet<E>
                public tailSet<T>(arg0: E): java.util.NavigableSet<E>
                public descendingSet<T>(): java.util.NavigableSet<E>
                public spliterator<T>(): java.util.Spliterator<E>
                public tailSet<T>(arg0: java.lang.Object): java.util.SortedSet
                public headSet<T>(arg0: java.lang.Object): java.util.SortedSet
                public subSet<T>(arg0: java.lang.Object, arg1: java.lang.Object): java.util.SortedSet
                public static class: java.lang.Class<any>
            }
        }
    }
}
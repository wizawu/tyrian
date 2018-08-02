declare namespace java {
    namespace util {
        class Collections$SynchronizedNavigableSet<E> extends java.util.Collections$SynchronizedSortedSet<E> implements java.util.NavigableSet<E> {
            public lower(arg0: E): E
            public floor(arg0: E): E
            public ceiling(arg0: E): E
            public higher(arg0: E): E
            public pollFirst(): E
            public pollLast(): E
            public descendingSet(): java.util.NavigableSet<E>
            public descendingIterator(): java.util.Iterator<E>
            public subSet(arg0: E, arg1: E): java.util.NavigableSet<E>
            public headSet(arg0: E): java.util.NavigableSet<E>
            public tailSet(arg0: E): java.util.NavigableSet<E>
            public subSet(arg0: E, arg1: boolean, arg2: E, arg3: boolean): java.util.NavigableSet<E>
            public headSet(arg0: E, arg1: boolean): java.util.NavigableSet<E>
            public tailSet(arg0: E, arg1: boolean): java.util.NavigableSet<E>
            public tailSet(arg0: java.lang.Object): java.util.SortedSet
            public headSet(arg0: java.lang.Object): java.util.SortedSet
            public subSet(arg0: java.lang.Object, arg1: java.lang.Object): java.util.SortedSet
            public static class: java.lang.Class<any>
        }
    }
}
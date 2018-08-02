declare namespace java {
    namespace util {
        interface NavigableSet<E> extends java.util.SortedSet<E> {
            lower(arg0: E): E
            floor(arg0: E): E
            ceiling(arg0: E): E
            higher(arg0: E): E
            pollFirst(): E
            pollLast(): E
            iterator(): java.util.Iterator<E>
            descendingSet(): java.util.NavigableSet<E>
            descendingIterator(): java.util.Iterator<E>
            subSet(arg0: E, arg1: boolean, arg2: E, arg3: boolean): java.util.NavigableSet<E>
            headSet(arg0: E, arg1: boolean): java.util.NavigableSet<E>
            tailSet(arg0: E, arg1: boolean): java.util.NavigableSet<E>
            subSet(arg0: E, arg1: E): java.util.SortedSet<E>
            headSet(arg0: E): java.util.SortedSet<E>
            tailSet(arg0: E): java.util.SortedSet<E>
        }
    }
}
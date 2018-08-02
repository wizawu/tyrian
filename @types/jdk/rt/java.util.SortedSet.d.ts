declare namespace java {
    namespace util {
interface SortedSet<E> extends java.util.Set<E> {
    comparator(): java.util.Comparator<E>
    subSet(arg0: E, arg1: E): java.util.SortedSet<E>
    headSet(arg0: E): java.util.SortedSet<E>
    tailSet(arg0: E): java.util.SortedSet<E>
    first(): E
    last(): E
    spliterator(): java.util.Spliterator<E>
}

    }
}
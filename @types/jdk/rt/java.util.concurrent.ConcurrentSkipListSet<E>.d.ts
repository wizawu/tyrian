declare namespace java {
    namespace util {
        namespace concurrent {
class ConcurrentSkipListSet<E> extends java.util.AbstractSet<E> implements java.util.NavigableSet<E> , java.lang.Cloneable , java.io.Serializable {
    public constructor()
    public constructor(arg0: java.util.Comparator<E>)
    public constructor(arg0: java.util.Collection<E>)
    public constructor(arg0: java.util.SortedSet<E>)
    public clone(): java.util.concurrent.ConcurrentSkipListSet<E>
    public size(): int
    public isEmpty(): boolean
    public contains(arg0: java.lang.Object): boolean
    public add(arg0: E): boolean
    public remove(arg0: java.lang.Object): boolean
    public clear(): void
    public iterator(): java.util.Iterator<E>
    public descendingIterator(): java.util.Iterator<E>
    public equals(arg0: java.lang.Object): boolean
    public removeAll(arg0: java.util.Collection<any>): boolean
    public lower(arg0: E): E
    public floor(arg0: E): E
    public ceiling(arg0: E): E
    public higher(arg0: E): E
    public pollFirst(): E
    public pollLast(): E
    public comparator(): java.util.Comparator<E>
    public first(): E
    public last(): E
    public subSet(arg0: E, arg1: boolean, arg2: E, arg3: boolean): java.util.NavigableSet<E>
    public headSet(arg0: E, arg1: boolean): java.util.NavigableSet<E>
    public tailSet(arg0: E, arg1: boolean): java.util.NavigableSet<E>
    public subSet(arg0: E, arg1: E): java.util.NavigableSet<E>
    public headSet(arg0: E): java.util.NavigableSet<E>
    public tailSet(arg0: E): java.util.NavigableSet<E>
    public descendingSet(): java.util.NavigableSet<E>
    public spliterator(): java.util.Spliterator<E>
    public clone(): java.lang.Object
    public tailSet(arg0: java.lang.Object): java.util.SortedSet
    public headSet(arg0: java.lang.Object): java.util.SortedSet
    public subSet(arg0: java.lang.Object, arg1: java.lang.Object): java.util.SortedSet
    public static class: java.lang.Class<any>
}

        }
    }
}
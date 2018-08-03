declare namespace java {
    namespace util {
        class Collections$UnmodifiableList<E> extends java.util.Collections$UnmodifiableCollection<E> implements java.util.List<E> {
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public get(arg0: int): E
            public set(arg0: int, arg1: E): E
            public add(arg0: int, arg1: E): void
            public remove(arg0: int): E
            public indexOf(arg0: java.lang.Object): int
            public lastIndexOf(arg0: java.lang.Object): int
            public addAll(arg0: int, arg1: java.util.Collection<E>): boolean
            public replaceAll(arg0: java.util.function$.UnaryOperator<E> | java.util.function$.UnaryOperator$$Lambda<E>): void
            public sort(arg0: java.util.Comparator<E>): void
            public listIterator(): java.util.ListIterator<E>
            public listIterator(arg0: int): java.util.ListIterator<E>
            public subList(arg0: int, arg1: int): java.util.List<E>
            public static class: java.lang.Class<any>
        }
    }
}
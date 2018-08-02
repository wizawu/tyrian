declare namespace java {
    namespace util {
interface Comparator<T> {
    compare(arg0: T, arg1: T): int
    equals(arg0: java.lang.Object): boolean
    reversed(): java.util.Comparator<T>
    thenComparing(arg0: java.util.Comparator<T>): java.util.Comparator<T>
    thenComparing<U>(arg0: java.util.function$.Function<T, U>, arg1: java.util.Comparator<U>): java.util.Comparator<T>
    thenComparing<U extends java.lang.Comparable<U>>(arg0: java.util.function$.Function<T, U>): java.util.Comparator<T>
    thenComparingInt<U extends java.lang.Comparable<U>>(arg0: java.util.function$.ToIntFunction<T> | java.util.function$.ToIntFunction$$Lambda<T>): java.util.Comparator<T>
    thenComparingLong<U extends java.lang.Comparable<U>>(arg0: java.util.function$.ToLongFunction<T> | java.util.function$.ToLongFunction$$Lambda<T>): java.util.Comparator<T>
    thenComparingDouble<U extends java.lang.Comparable<U>>(arg0: java.util.function$.ToDoubleFunction<T> | java.util.function$.ToDoubleFunction$$Lambda<T>): java.util.Comparator<T>
    reverseOrder<T extends java.lang.Comparable<T>>(): java.util.Comparator<T>
    naturalOrder<T extends java.lang.Comparable<T>>(): java.util.Comparator<T>
    nullsFirst<T>(arg0: java.util.Comparator<T>): java.util.Comparator<T>
    nullsLast<T>(arg0: java.util.Comparator<T>): java.util.Comparator<T>
    comparing<T, U>(arg0: java.util.function$.Function<T, U>, arg1: java.util.Comparator<U>): java.util.Comparator<T>
    comparing<T, U extends java.lang.Comparable<U>>(arg0: java.util.function$.Function<T, U>): java.util.Comparator<T>
    comparingInt<T>(arg0: java.util.function$.ToIntFunction<T> | java.util.function$.ToIntFunction$$Lambda<T>): java.util.Comparator<T>
    comparingLong<T>(arg0: java.util.function$.ToLongFunction<T> | java.util.function$.ToLongFunction$$Lambda<T>): java.util.Comparator<T>
    comparingDouble<T>(arg0: java.util.function$.ToDoubleFunction<T> | java.util.function$.ToDoubleFunction$$Lambda<T>): java.util.Comparator<T>
}

    }
}
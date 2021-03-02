declare namespace java {
  namespace util {

    interface Comparator<T> {
      compare(arg0: T, arg1: T): int
      equals(arg0: java.lang.Object): boolean
      reversed(): java.util.Comparator<T>
      thenComparing(arg0: java.util.Comparator<unknown>): java.util.Comparator<T>
      thenComparing<U>(arg0: java.util.function$.Function<unknown,U>, arg1: java.util.Comparator<unknown>): java.util.Comparator<T>
      thenComparing<U extends java.lang.Comparable<unknown>>(arg0: java.util.function$.Function<unknown,U>): java.util.Comparator<T>
      thenComparingInt(arg0: java.util.function$.ToIntFunction<unknown>): java.util.Comparator<T>
      thenComparingLong(arg0: java.util.function$.ToLongFunction<unknown>): java.util.Comparator<T>
      thenComparingDouble(arg0: java.util.function$.ToDoubleFunction<unknown>): java.util.Comparator<T>
      reverseOrder<T extends java.lang.Comparable<unknown>>(): java.util.Comparator<T>
      naturalOrder<T extends java.lang.Comparable<unknown>>(): java.util.Comparator<T>
      nullsFirst<T>(arg0: java.util.Comparator<unknown>): java.util.Comparator<T>
      nullsLast<T>(arg0: java.util.Comparator<unknown>): java.util.Comparator<T>
      comparing<T,U>(arg0: java.util.function$.Function<unknown,U>, arg1: java.util.Comparator<unknown>): java.util.Comparator<T>
      comparing<T,U extends java.lang.Comparable<unknown>>(arg0: java.util.function$.Function<unknown,U>): java.util.Comparator<T>
      comparingInt<T>(arg0: java.util.function$.ToIntFunction<unknown>): java.util.Comparator<T>
      comparingLong<T>(arg0: java.util.function$.ToLongFunction<unknown>): java.util.Comparator<T>
      comparingDouble<T>(arg0: java.util.function$.ToDoubleFunction<unknown>): java.util.Comparator<T>
    }

  }
}

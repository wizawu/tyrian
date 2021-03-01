declare namespace java {
  namespace util {

    class Arrays {

      static readonly $assertionsDisabled: boolean
      static rangeCheck(arg0: int, arg1: int, arg2: int): void
      public static sort(arg0: int[]): void
      public static sort(arg0: int[], arg1: int, arg2: int): void
      public static sort(arg0: long[]): void
      public static sort(arg0: long[], arg1: int, arg2: int): void
      public static sort(arg0: short[]): void
      public static sort(arg0: short[], arg1: int, arg2: int): void
      public static sort(arg0: char[]): void
      public static sort(arg0: char[], arg1: int, arg2: int): void
      public static sort(arg0: byte[]): void
      public static sort(arg0: byte[], arg1: int, arg2: int): void
      public static sort(arg0: float[]): void
      public static sort(arg0: float[], arg1: int, arg2: int): void
      public static sort(arg0: double[]): void
      public static sort(arg0: double[], arg1: int, arg2: int): void
      public static parallelSort(arg0: byte[]): void
      public static parallelSort(arg0: byte[], arg1: int, arg2: int): void
      public static parallelSort(arg0: char[]): void
      public static parallelSort(arg0: char[], arg1: int, arg2: int): void
      public static parallelSort(arg0: short[]): void
      public static parallelSort(arg0: short[], arg1: int, arg2: int): void
      public static parallelSort(arg0: int[]): void
      public static parallelSort(arg0: int[], arg1: int, arg2: int): void
      public static parallelSort(arg0: long[]): void
      public static parallelSort(arg0: long[], arg1: int, arg2: int): void
      public static parallelSort(arg0: float[]): void
      public static parallelSort(arg0: float[], arg1: int, arg2: int): void
      public static parallelSort(arg0: double[]): void
      public static parallelSort(arg0: double[], arg1: int, arg2: int): void
      public static parallelSort<T extends java.lang.Comparable<unknown>>(arg0: T[]): void
      public static parallelSort<T extends java.lang.Comparable<unknown>>(arg0: T[], arg1: int, arg2: int): void
      public static parallelSort<T>(arg0: T[], arg1: java.util.Comparator<unknown>): void
      public static parallelSort<T>(arg0: T[], arg1: int, arg2: int, arg3: java.util.Comparator<unknown>): void
      public static sort(arg0: java.lang.Object[]): void
      public static sort(arg0: java.lang.Object[], arg1: int, arg2: int): void
      public static sort<T>(arg0: T[], arg1: java.util.Comparator<unknown>): void
      public static sort<T>(arg0: T[], arg1: int, arg2: int, arg3: java.util.Comparator<unknown>): void
      public static parallelPrefix<T>(arg0: T[], arg1: java.util.function$.BinaryOperator<T>): void
      public static parallelPrefix<T>(arg0: T[], arg1: int, arg2: int, arg3: java.util.function$.BinaryOperator<T>): void
      public static parallelPrefix(arg0: long[], arg1: java.util.function$.LongBinaryOperator): void
      public static parallelPrefix(arg0: long[], arg1: int, arg2: int, arg3: java.util.function$.LongBinaryOperator): void
      public static parallelPrefix(arg0: double[], arg1: java.util.function$.DoubleBinaryOperator): void
      public static parallelPrefix(arg0: double[], arg1: int, arg2: int, arg3: java.util.function$.DoubleBinaryOperator): void
      public static parallelPrefix(arg0: int[], arg1: java.util.function$.IntBinaryOperator): void
      public static parallelPrefix(arg0: int[], arg1: int, arg2: int, arg3: java.util.function$.IntBinaryOperator): void
      public static binarySearch(arg0: long[], arg1: long): int
      public static binarySearch(arg0: long[], arg1: int, arg2: int, arg3: long): int
      public static binarySearch(arg0: int[], arg1: int): int
      public static binarySearch(arg0: int[], arg1: int, arg2: int, arg3: int): int
      public static binarySearch(arg0: short[], arg1: short): int
      public static binarySearch(arg0: short[], arg1: int, arg2: int, arg3: short): int
      public static binarySearch(arg0: char[], arg1: char): int
      public static binarySearch(arg0: char[], arg1: int, arg2: int, arg3: char): int
      public static binarySearch(arg0: byte[], arg1: byte): int
      public static binarySearch(arg0: byte[], arg1: int, arg2: int, arg3: byte): int
      public static binarySearch(arg0: double[], arg1: double): int
      public static binarySearch(arg0: double[], arg1: int, arg2: int, arg3: double): int
      public static binarySearch(arg0: float[], arg1: float): int
      public static binarySearch(arg0: float[], arg1: int, arg2: int, arg3: float): int
      public static binarySearch(arg0: java.lang.Object[], arg1: java.lang.Object): int
      public static binarySearch(arg0: java.lang.Object[], arg1: int, arg2: int, arg3: java.lang.Object): int
      public static binarySearch<T>(arg0: T[], arg1: T, arg2: java.util.Comparator<unknown>): int
      public static binarySearch<T>(arg0: T[], arg1: int, arg2: int, arg3: T, arg4: java.util.Comparator<unknown>): int
      public static equals(arg0: long[], arg1: long[]): boolean
      public static equals(arg0: long[], arg1: int, arg2: int, arg3: long[], arg4: int, arg5: int): boolean
      public static equals(arg0: int[], arg1: int[]): boolean
      public static equals(arg0: int[], arg1: int, arg2: int, arg3: int[], arg4: int, arg5: int): boolean
      public static equals(arg0: short[], arg1: short[]): boolean
      public static equals(arg0: short[], arg1: int, arg2: int, arg3: short[], arg4: int, arg5: int): boolean
      public static equals(arg0: char[], arg1: char[]): boolean
      public static equals(arg0: char[], arg1: int, arg2: int, arg3: char[], arg4: int, arg5: int): boolean
      public static equals(arg0: byte[], arg1: byte[]): boolean
      public static equals(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: int): boolean
      public static equals(arg0: boolean[], arg1: boolean[]): boolean
      public static equals(arg0: boolean[], arg1: int, arg2: int, arg3: boolean[], arg4: int, arg5: int): boolean
      public static equals(arg0: double[], arg1: double[]): boolean
      public static equals(arg0: double[], arg1: int, arg2: int, arg3: double[], arg4: int, arg5: int): boolean
      public static equals(arg0: float[], arg1: float[]): boolean
      public static equals(arg0: float[], arg1: int, arg2: int, arg3: float[], arg4: int, arg5: int): boolean
      public static equals(arg0: java.lang.Object[], arg1: java.lang.Object[]): boolean
      public static equals(arg0: java.lang.Object[], arg1: int, arg2: int, arg3: java.lang.Object[], arg4: int, arg5: int): boolean
      public static equals<T>(arg0: T[], arg1: T[], arg2: java.util.Comparator<unknown>): boolean
      public static equals<T>(arg0: T[], arg1: int, arg2: int, arg3: T[], arg4: int, arg5: int, arg6: java.util.Comparator<unknown>): boolean
      public static fill(arg0: long[], arg1: long): void
      public static fill(arg0: long[], arg1: int, arg2: int, arg3: long): void
      public static fill(arg0: int[], arg1: int): void
      public static fill(arg0: int[], arg1: int, arg2: int, arg3: int): void
      public static fill(arg0: short[], arg1: short): void
      public static fill(arg0: short[], arg1: int, arg2: int, arg3: short): void
      public static fill(arg0: char[], arg1: char): void
      public static fill(arg0: char[], arg1: int, arg2: int, arg3: char): void
      public static fill(arg0: byte[], arg1: byte): void
      public static fill(arg0: byte[], arg1: int, arg2: int, arg3: byte): void
      public static fill(arg0: boolean[], arg1: boolean): void
      public static fill(arg0: boolean[], arg1: int, arg2: int, arg3: boolean): void
      public static fill(arg0: double[], arg1: double): void
      public static fill(arg0: double[], arg1: int, arg2: int, arg3: double): void
      public static fill(arg0: float[], arg1: float): void
      public static fill(arg0: float[], arg1: int, arg2: int, arg3: float): void
      public static fill(arg0: java.lang.Object[], arg1: java.lang.Object): void
      public static fill(arg0: java.lang.Object[], arg1: int, arg2: int, arg3: java.lang.Object): void
      public static copyOf<T>(arg0: T[], arg1: int): T[]
      public static copyOf<T,U>(arg0: U[], arg1: int, arg2: java.lang.Class<T[]>): T[]
      public static copyOf(arg0: byte[], arg1: int): byte[]
      public static copyOf(arg0: short[], arg1: int): short[]
      public static copyOf(arg0: int[], arg1: int): int[]
      public static copyOf(arg0: long[], arg1: int): long[]
      public static copyOf(arg0: char[], arg1: int): char[]
      public static copyOf(arg0: float[], arg1: int): float[]
      public static copyOf(arg0: double[], arg1: int): double[]
      public static copyOf(arg0: boolean[], arg1: int): boolean[]
      public static copyOfRange<T>(arg0: T[], arg1: int, arg2: int): T[]
      public static copyOfRange<T,U>(arg0: U[], arg1: int, arg2: int, arg3: java.lang.Class<T[]>): T[]
      public static copyOfRange(arg0: byte[], arg1: int, arg2: int): byte[]
      public static copyOfRange(arg0: short[], arg1: int, arg2: int): short[]
      public static copyOfRange(arg0: int[], arg1: int, arg2: int): int[]
      public static copyOfRange(arg0: long[], arg1: int, arg2: int): long[]
      public static copyOfRange(arg0: char[], arg1: int, arg2: int): char[]
      public static copyOfRange(arg0: float[], arg1: int, arg2: int): float[]
      public static copyOfRange(arg0: double[], arg1: int, arg2: int): double[]
      public static copyOfRange(arg0: boolean[], arg1: int, arg2: int): boolean[]
      public static asList<T>(...arg0: T[]): java.util.List<T>
      public static hashCode(arg0: long[]): int
      public static hashCode(arg0: int[]): int
      public static hashCode(arg0: short[]): int
      public static hashCode(arg0: char[]): int
      public static hashCode(arg0: byte[]): int
      public static hashCode(arg0: boolean[]): int
      public static hashCode(arg0: float[]): int
      public static hashCode(arg0: double[]): int
      public static hashCode(arg0: java.lang.Object[]): int
      public static deepHashCode(arg0: java.lang.Object[]): int
      public static deepEquals(arg0: java.lang.Object[], arg1: java.lang.Object[]): boolean
      static deepEquals0(arg0: java.lang.Object, arg1: java.lang.Object): boolean
      public static toString(arg0: long[]): java.lang.String
      public static toString(arg0: int[]): java.lang.String
      public static toString(arg0: short[]): java.lang.String
      public static toString(arg0: char[]): java.lang.String
      public static toString(arg0: byte[]): java.lang.String
      public static toString(arg0: boolean[]): java.lang.String
      public static toString(arg0: float[]): java.lang.String
      public static toString(arg0: double[]): java.lang.String
      public static toString(arg0: java.lang.Object[]): java.lang.String
      public static deepToString(arg0: java.lang.Object[]): java.lang.String
      public static setAll<T>(arg0: T[], arg1: java.util.function$.IntFunction<T>): void
      public static parallelSetAll<T>(arg0: T[], arg1: java.util.function$.IntFunction<T>): void
      public static setAll(arg0: int[], arg1: java.util.function$.IntUnaryOperator): void
      public static parallelSetAll(arg0: int[], arg1: java.util.function$.IntUnaryOperator): void
      public static setAll(arg0: long[], arg1: java.util.function$.IntToLongFunction): void
      public static parallelSetAll(arg0: long[], arg1: java.util.function$.IntToLongFunction): void
      public static setAll(arg0: double[], arg1: java.util.function$.IntToDoubleFunction): void
      public static parallelSetAll(arg0: double[], arg1: java.util.function$.IntToDoubleFunction): void
      public static spliterator<T>(arg0: T[]): java.util.Spliterator<T>
      public static spliterator<T>(arg0: T[], arg1: int, arg2: int): java.util.Spliterator<T>
      public static spliterator(arg0: int[]): java.util.Spliterator$OfInt
      public static spliterator(arg0: int[], arg1: int, arg2: int): java.util.Spliterator$OfInt
      public static spliterator(arg0: long[]): java.util.Spliterator$OfLong
      public static spliterator(arg0: long[], arg1: int, arg2: int): java.util.Spliterator$OfLong
      public static spliterator(arg0: double[]): java.util.Spliterator$OfDouble
      public static spliterator(arg0: double[], arg1: int, arg2: int): java.util.Spliterator$OfDouble
      public static stream<T>(arg0: T[]): java.util.stream.Stream<T>
      public static stream<T>(arg0: T[], arg1: int, arg2: int): java.util.stream.Stream<T>
      public static stream(arg0: int[]): java.util.stream.IntStream
      public static stream(arg0: int[], arg1: int, arg2: int): java.util.stream.IntStream
      public static stream(arg0: long[]): java.util.stream.LongStream
      public static stream(arg0: long[], arg1: int, arg2: int): java.util.stream.LongStream
      public static stream(arg0: double[]): java.util.stream.DoubleStream
      public static stream(arg0: double[], arg1: int, arg2: int): java.util.stream.DoubleStream
      public static compare(arg0: boolean[], arg1: boolean[]): int
      public static compare(arg0: boolean[], arg1: int, arg2: int, arg3: boolean[], arg4: int, arg5: int): int
      public static compare(arg0: byte[], arg1: byte[]): int
      public static compare(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: int): int
      public static compareUnsigned(arg0: byte[], arg1: byte[]): int
      public static compareUnsigned(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: int): int
      public static compare(arg0: short[], arg1: short[]): int
      public static compare(arg0: short[], arg1: int, arg2: int, arg3: short[], arg4: int, arg5: int): int
      public static compareUnsigned(arg0: short[], arg1: short[]): int
      public static compareUnsigned(arg0: short[], arg1: int, arg2: int, arg3: short[], arg4: int, arg5: int): int
      public static compare(arg0: char[], arg1: char[]): int
      public static compare(arg0: char[], arg1: int, arg2: int, arg3: char[], arg4: int, arg5: int): int
      public static compare(arg0: int[], arg1: int[]): int
      public static compare(arg0: int[], arg1: int, arg2: int, arg3: int[], arg4: int, arg5: int): int
      public static compareUnsigned(arg0: int[], arg1: int[]): int
      public static compareUnsigned(arg0: int[], arg1: int, arg2: int, arg3: int[], arg4: int, arg5: int): int
      public static compare(arg0: long[], arg1: long[]): int
      public static compare(arg0: long[], arg1: int, arg2: int, arg3: long[], arg4: int, arg5: int): int
      public static compareUnsigned(arg0: long[], arg1: long[]): int
      public static compareUnsigned(arg0: long[], arg1: int, arg2: int, arg3: long[], arg4: int, arg5: int): int
      public static compare(arg0: float[], arg1: float[]): int
      public static compare(arg0: float[], arg1: int, arg2: int, arg3: float[], arg4: int, arg5: int): int
      public static compare(arg0: double[], arg1: double[]): int
      public static compare(arg0: double[], arg1: int, arg2: int, arg3: double[], arg4: int, arg5: int): int
      public static compare<T extends java.lang.Comparable<unknown>>(arg0: T[], arg1: T[]): int
      public static compare<T extends java.lang.Comparable<unknown>>(arg0: T[], arg1: int, arg2: int, arg3: T[], arg4: int, arg5: int): int
      public static compare<T>(arg0: T[], arg1: T[], arg2: java.util.Comparator<unknown>): int
      public static compare<T>(arg0: T[], arg1: int, arg2: int, arg3: T[], arg4: int, arg5: int, arg6: java.util.Comparator<unknown>): int
      public static mismatch(arg0: boolean[], arg1: boolean[]): int
      public static mismatch(arg0: boolean[], arg1: int, arg2: int, arg3: boolean[], arg4: int, arg5: int): int
      public static mismatch(arg0: byte[], arg1: byte[]): int
      public static mismatch(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: int): int
      public static mismatch(arg0: char[], arg1: char[]): int
      public static mismatch(arg0: char[], arg1: int, arg2: int, arg3: char[], arg4: int, arg5: int): int
      public static mismatch(arg0: short[], arg1: short[]): int
      public static mismatch(arg0: short[], arg1: int, arg2: int, arg3: short[], arg4: int, arg5: int): int
      public static mismatch(arg0: int[], arg1: int[]): int
      public static mismatch(arg0: int[], arg1: int, arg2: int, arg3: int[], arg4: int, arg5: int): int
      public static mismatch(arg0: long[], arg1: long[]): int
      public static mismatch(arg0: long[], arg1: int, arg2: int, arg3: long[], arg4: int, arg5: int): int
      public static mismatch(arg0: float[], arg1: float[]): int
      public static mismatch(arg0: float[], arg1: int, arg2: int, arg3: float[], arg4: int, arg5: int): int
      public static mismatch(arg0: double[], arg1: double[]): int
      public static mismatch(arg0: double[], arg1: int, arg2: int, arg3: double[], arg4: int, arg5: int): int
      public static mismatch(arg0: java.lang.Object[], arg1: java.lang.Object[]): int
      public static mismatch(arg0: java.lang.Object[], arg1: int, arg2: int, arg3: java.lang.Object[], arg4: int, arg5: int): int
      public static mismatch<T>(arg0: T[], arg1: T[], arg2: java.util.Comparator<unknown>): int
      public static mismatch<T>(arg0: T[], arg1: int, arg2: int, arg3: T[], arg4: int, arg5: int, arg6: java.util.Comparator<unknown>): int
    }

  }
}

declare namespace java {
  namespace util {

    class Arrays {
      static readonly $assertionsDisabled: boolean
      static rangeCheck(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public static sort(arg0: int[]): void
      public static sort(arg0: int[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public static sort(arg0: long[]): void
      public static sort(arg0: long[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public static sort(arg0: short[]): void
      public static sort(arg0: short[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public static sort(arg0: char[]): void
      public static sort(arg0: char[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public static sort(arg0: byte[]): void
      public static sort(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public static sort(arg0: float[]): void
      public static sort(arg0: float[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public static sort(arg0: double[]): void
      public static sort(arg0: double[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public static parallelSort(arg0: byte[]): void
      public static parallelSort(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public static parallelSort(arg0: char[]): void
      public static parallelSort(arg0: char[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public static parallelSort(arg0: short[]): void
      public static parallelSort(arg0: short[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public static parallelSort(arg0: int[]): void
      public static parallelSort(arg0: int[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public static parallelSort(arg0: long[]): void
      public static parallelSort(arg0: long[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public static parallelSort(arg0: float[]): void
      public static parallelSort(arg0: float[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public static parallelSort(arg0: double[]): void
      public static parallelSort(arg0: double[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public static parallelSort<T extends java.lang.Comparable<unknown>>(arg0: T[]): void
      public static parallelSort<T extends java.lang.Comparable<unknown>>(arg0: T[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public static parallelSort<T>(arg0: T[], arg1: java.util.Comparator<unknown>): void
      public static parallelSort<T>(arg0: T[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.util.Comparator<unknown>): void
      public static sort(arg0: java.lang.Object[]): void
      public static sort(arg0: java.lang.Object[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public static sort<T>(arg0: T[], arg1: java.util.Comparator<unknown>): void
      public static sort<T>(arg0: T[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.util.Comparator<unknown>): void
      public static parallelPrefix<T>(arg0: T[], arg1: java.util.function$.BinaryOperator<T>): void
      public static parallelPrefix<T>(arg0: T[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.util.function$.BinaryOperator<T>): void
      public static parallelPrefix(arg0: long[], arg1: java.util.function$.LongBinaryOperator | java.util.function$.LongBinaryOperator$$lambda): void
      public static parallelPrefix(arg0: long[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.util.function$.LongBinaryOperator | java.util.function$.LongBinaryOperator$$lambda): void
      public static parallelPrefix(arg0: double[], arg1: java.util.function$.DoubleBinaryOperator | java.util.function$.DoubleBinaryOperator$$lambda): void
      public static parallelPrefix(arg0: double[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.util.function$.DoubleBinaryOperator | java.util.function$.DoubleBinaryOperator$$lambda): void
      public static parallelPrefix(arg0: int[], arg1: java.util.function$.IntBinaryOperator | java.util.function$.IntBinaryOperator$$lambda): void
      public static parallelPrefix(arg0: int[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.util.function$.IntBinaryOperator | java.util.function$.IntBinaryOperator$$lambda): void
      public static binarySearch(arg0: long[], arg1: number | java.lang.Long): number
      public static binarySearch(arg0: long[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Long): number
      public static binarySearch(arg0: int[], arg1: number | java.lang.Integer): number
      public static binarySearch(arg0: int[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): number
      public static binarySearch(arg0: short[], arg1: number | java.lang.Short): number
      public static binarySearch(arg0: short[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Short): number
      public static binarySearch(arg0: char[], arg1: string | java.lang.Character): number
      public static binarySearch(arg0: char[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: string | java.lang.Character): number
      public static binarySearch(arg0: byte[], arg1: number | java.lang.Byte): number
      public static binarySearch(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Byte): number
      public static binarySearch(arg0: double[], arg1: number | java.lang.Double): number
      public static binarySearch(arg0: double[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Double): number
      public static binarySearch(arg0: float[], arg1: number | java.lang.Float): number
      public static binarySearch(arg0: float[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Float): number
      public static binarySearch(arg0: java.lang.Object[], arg1: java.lang.Object | any): number
      public static binarySearch(arg0: java.lang.Object[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.lang.Object | any): number
      public static binarySearch<T>(arg0: T[], arg1: T, arg2: java.util.Comparator<unknown>): number
      public static binarySearch<T>(arg0: T[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: T, arg4: java.util.Comparator<unknown>): number
      public static equals(arg0: long[], arg1: long[]): boolean
      public static equals(arg0: long[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: long[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): boolean
      public static equals(arg0: int[], arg1: int[]): boolean
      public static equals(arg0: int[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: int[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): boolean
      public static equals(arg0: short[], arg1: short[]): boolean
      public static equals(arg0: short[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: short[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): boolean
      public static equals(arg0: char[], arg1: char[]): boolean
      public static equals(arg0: char[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: char[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): boolean
      public static equals(arg0: byte[], arg1: byte[]): boolean
      public static equals(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: byte[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): boolean
      public static equals(arg0: boolean[], arg1: boolean[]): boolean
      public static equals(arg0: boolean[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: boolean[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): boolean
      public static equals(arg0: double[], arg1: double[]): boolean
      public static equals(arg0: double[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: double[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): boolean
      public static equals(arg0: float[], arg1: float[]): boolean
      public static equals(arg0: float[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: float[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): boolean
      public static equals(arg0: java.lang.Object[], arg1: java.lang.Object[]): boolean
      public static equals(arg0: java.lang.Object[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.lang.Object[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): boolean
      public static equals<T>(arg0: T[], arg1: T[], arg2: java.util.Comparator<unknown>): boolean
      public static equals<T>(arg0: T[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: T[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: java.util.Comparator<unknown>): boolean
      public static fill(arg0: long[], arg1: number | java.lang.Long): void
      public static fill(arg0: long[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Long): void
      public static fill(arg0: int[], arg1: number | java.lang.Integer): void
      public static fill(arg0: int[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
      public static fill(arg0: short[], arg1: number | java.lang.Short): void
      public static fill(arg0: short[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Short): void
      public static fill(arg0: char[], arg1: string | java.lang.Character): void
      public static fill(arg0: char[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: string | java.lang.Character): void
      public static fill(arg0: byte[], arg1: number | java.lang.Byte): void
      public static fill(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Byte): void
      public static fill(arg0: boolean[], arg1: boolean | java.lang.Boolean): void
      public static fill(arg0: boolean[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: boolean | java.lang.Boolean): void
      public static fill(arg0: double[], arg1: number | java.lang.Double): void
      public static fill(arg0: double[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Double): void
      public static fill(arg0: float[], arg1: number | java.lang.Float): void
      public static fill(arg0: float[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Float): void
      public static fill(arg0: java.lang.Object[], arg1: java.lang.Object | any): void
      public static fill(arg0: java.lang.Object[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.lang.Object | any): void
      public static copyOf<T>(arg0: T[], arg1: number | java.lang.Integer): T[]
      public static copyOf<T,U>(arg0: U[], arg1: number | java.lang.Integer, arg2: java.lang.Class<T[]>): T[]
      public static copyOf(arg0: byte[], arg1: number | java.lang.Integer): number[]
      public static copyOf(arg0: short[], arg1: number | java.lang.Integer): number[]
      public static copyOf(arg0: int[], arg1: number | java.lang.Integer): number[]
      public static copyOf(arg0: long[], arg1: number | java.lang.Integer): number[]
      public static copyOf(arg0: char[], arg1: number | java.lang.Integer): string[]
      public static copyOf(arg0: float[], arg1: number | java.lang.Integer): number[]
      public static copyOf(arg0: double[], arg1: number | java.lang.Integer): number[]
      public static copyOf(arg0: boolean[], arg1: number | java.lang.Integer): boolean[]
      public static copyOfRange<T>(arg0: T[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): T[]
      public static copyOfRange<T,U>(arg0: U[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.lang.Class<T[]>): T[]
      public static copyOfRange(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number[]
      public static copyOfRange(arg0: short[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number[]
      public static copyOfRange(arg0: int[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number[]
      public static copyOfRange(arg0: long[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number[]
      public static copyOfRange(arg0: char[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): string[]
      public static copyOfRange(arg0: float[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number[]
      public static copyOfRange(arg0: double[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number[]
      public static copyOfRange(arg0: boolean[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): boolean[]
      public static asList<T>(...vargs: (T)[]): java.util.List<T>
      public static hashCode(arg0: long[]): number
      public static hashCode(arg0: int[]): number
      public static hashCode(arg0: short[]): number
      public static hashCode(arg0: char[]): number
      public static hashCode(arg0: byte[]): number
      public static hashCode(arg0: boolean[]): number
      public static hashCode(arg0: float[]): number
      public static hashCode(arg0: double[]): number
      public static hashCode(arg0: java.lang.Object[]): number
      public static deepHashCode(arg0: java.lang.Object[]): number
      public static deepEquals(arg0: java.lang.Object[], arg1: java.lang.Object[]): boolean
      static deepEquals0(arg0: java.lang.Object | any, arg1: java.lang.Object | any): boolean
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
      public static setAll<T>(arg0: T[], arg1: java.util.function$.IntFunction<T> | java.util.function$.IntFunction$$lambda<T>): void
      public static parallelSetAll<T>(arg0: T[], arg1: java.util.function$.IntFunction<T> | java.util.function$.IntFunction$$lambda<T>): void
      public static setAll(arg0: int[], arg1: java.util.function$.IntUnaryOperator): void
      public static parallelSetAll(arg0: int[], arg1: java.util.function$.IntUnaryOperator): void
      public static setAll(arg0: long[], arg1: java.util.function$.IntToLongFunction | java.util.function$.IntToLongFunction$$lambda): void
      public static parallelSetAll(arg0: long[], arg1: java.util.function$.IntToLongFunction | java.util.function$.IntToLongFunction$$lambda): void
      public static setAll(arg0: double[], arg1: java.util.function$.IntToDoubleFunction | java.util.function$.IntToDoubleFunction$$lambda): void
      public static parallelSetAll(arg0: double[], arg1: java.util.function$.IntToDoubleFunction | java.util.function$.IntToDoubleFunction$$lambda): void
      public static spliterator<T>(arg0: T[]): java.util.Spliterator<T>
      public static spliterator<T>(arg0: T[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.util.Spliterator<T>
      public static spliterator(arg0: int[]): java.util.Spliterator$OfInt
      public static spliterator(arg0: int[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.util.Spliterator$OfInt
      public static spliterator(arg0: long[]): java.util.Spliterator$OfLong
      public static spliterator(arg0: long[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.util.Spliterator$OfLong
      public static spliterator(arg0: double[]): java.util.Spliterator$OfDouble
      public static spliterator(arg0: double[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.util.Spliterator$OfDouble
      public static stream<T>(arg0: T[]): java.util.stream.Stream<T>
      public static stream<T>(arg0: T[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.util.stream.Stream<T>
      public static stream(arg0: int[]): java.util.stream.IntStream
      public static stream(arg0: int[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.util.stream.IntStream
      public static stream(arg0: long[]): java.util.stream.LongStream
      public static stream(arg0: long[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.util.stream.LongStream
      public static stream(arg0: double[]): java.util.stream.DoubleStream
      public static stream(arg0: double[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.util.stream.DoubleStream
      public static compare(arg0: boolean[], arg1: boolean[]): number
      public static compare(arg0: boolean[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: boolean[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): number
      public static compare(arg0: byte[], arg1: byte[]): number
      public static compare(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: byte[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): number
      public static compareUnsigned(arg0: byte[], arg1: byte[]): number
      public static compareUnsigned(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: byte[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): number
      public static compare(arg0: short[], arg1: short[]): number
      public static compare(arg0: short[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: short[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): number
      public static compareUnsigned(arg0: short[], arg1: short[]): number
      public static compareUnsigned(arg0: short[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: short[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): number
      public static compare(arg0: char[], arg1: char[]): number
      public static compare(arg0: char[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: char[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): number
      public static compare(arg0: int[], arg1: int[]): number
      public static compare(arg0: int[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: int[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): number
      public static compareUnsigned(arg0: int[], arg1: int[]): number
      public static compareUnsigned(arg0: int[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: int[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): number
      public static compare(arg0: long[], arg1: long[]): number
      public static compare(arg0: long[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: long[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): number
      public static compareUnsigned(arg0: long[], arg1: long[]): number
      public static compareUnsigned(arg0: long[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: long[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): number
      public static compare(arg0: float[], arg1: float[]): number
      public static compare(arg0: float[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: float[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): number
      public static compare(arg0: double[], arg1: double[]): number
      public static compare(arg0: double[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: double[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): number
      public static compare<T extends java.lang.Comparable<unknown>>(arg0: T[], arg1: T[]): number
      public static compare<T extends java.lang.Comparable<unknown>>(arg0: T[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: T[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): number
      public static compare<T>(arg0: T[], arg1: T[], arg2: java.util.Comparator<unknown>): number
      public static compare<T>(arg0: T[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: T[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: java.util.Comparator<unknown>): number
      public static mismatch(arg0: boolean[], arg1: boolean[]): number
      public static mismatch(arg0: boolean[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: boolean[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): number
      public static mismatch(arg0: byte[], arg1: byte[]): number
      public static mismatch(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: byte[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): number
      public static mismatch(arg0: char[], arg1: char[]): number
      public static mismatch(arg0: char[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: char[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): number
      public static mismatch(arg0: short[], arg1: short[]): number
      public static mismatch(arg0: short[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: short[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): number
      public static mismatch(arg0: int[], arg1: int[]): number
      public static mismatch(arg0: int[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: int[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): number
      public static mismatch(arg0: long[], arg1: long[]): number
      public static mismatch(arg0: long[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: long[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): number
      public static mismatch(arg0: float[], arg1: float[]): number
      public static mismatch(arg0: float[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: float[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): number
      public static mismatch(arg0: double[], arg1: double[]): number
      public static mismatch(arg0: double[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: double[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): number
      public static mismatch(arg0: java.lang.Object[], arg1: java.lang.Object[]): number
      public static mismatch(arg0: java.lang.Object[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.lang.Object[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): number
      public static mismatch<T>(arg0: T[], arg1: T[], arg2: java.util.Comparator<unknown>): number
      public static mismatch<T>(arg0: T[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: T[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: java.util.Comparator<unknown>): number
    }

  }
}

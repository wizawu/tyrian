declare namespace java {
  namespace util {
    class Arrays {
      static readonly $assertionsDisabled: boolean
      static rangeCheck(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): void
      public static sort(arg0: number[] | java.lang.Integer[]): void
      public static sort(
        arg0: number[] | java.lang.Integer[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): void
      public static sort(arg0: number[] | java.lang.Long[]): void
      public static sort(
        arg0: number[] | java.lang.Long[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): void
      public static sort(arg0: number[] | java.lang.Short[]): void
      public static sort(
        arg0: number[] | java.lang.Short[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): void
      public static sort(arg0: string[] | java.lang.Character[]): void
      public static sort(
        arg0: string[] | java.lang.Character[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): void
      public static sort(arg0: number[] | java.lang.Byte[]): void
      public static sort(
        arg0: number[] | java.lang.Byte[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): void
      public static sort(arg0: number[] | java.lang.Float[]): void
      public static sort(
        arg0: number[] | java.lang.Float[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): void
      public static sort(arg0: number[] | java.lang.Double[]): void
      public static sort(
        arg0: number[] | java.lang.Double[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): void
      public static parallelSort(arg0: number[] | java.lang.Byte[]): void
      public static parallelSort(
        arg0: number[] | java.lang.Byte[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): void
      public static parallelSort(arg0: string[] | java.lang.Character[]): void
      public static parallelSort(
        arg0: string[] | java.lang.Character[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): void
      public static parallelSort(arg0: number[] | java.lang.Short[]): void
      public static parallelSort(
        arg0: number[] | java.lang.Short[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): void
      public static parallelSort(arg0: number[] | java.lang.Integer[]): void
      public static parallelSort(
        arg0: number[] | java.lang.Integer[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): void
      public static parallelSort(arg0: number[] | java.lang.Long[]): void
      public static parallelSort(
        arg0: number[] | java.lang.Long[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): void
      public static parallelSort(arg0: number[] | java.lang.Float[]): void
      public static parallelSort(
        arg0: number[] | java.lang.Float[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): void
      public static parallelSort(arg0: number[] | java.lang.Double[]): void
      public static parallelSort(
        arg0: number[] | java.lang.Double[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): void
      public static parallelSort<T extends java.lang.Comparable<unknown>>(arg0: T[]): void
      public static parallelSort<T extends java.lang.Comparable<unknown>>(
        arg0: T[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): void
      public static parallelSort<T>(arg0: T[], arg1: java.util.Comparator<unknown>): void
      public static parallelSort<T>(
        arg0: T[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: java.util.Comparator<unknown>
      ): void
      public static sort(arg0: java.lang.Object[] | any[]): void
      public static sort(
        arg0: java.lang.Object[] | any[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): void
      public static sort<T>(arg0: T[], arg1: java.util.Comparator<unknown>): void
      public static sort<T>(
        arg0: T[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: java.util.Comparator<unknown>
      ): void
      public static parallelPrefix<T>(arg0: T[], arg1: java.util.function$.BinaryOperator<T>): void
      public static parallelPrefix<T>(
        arg0: T[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: java.util.function$.BinaryOperator<T>
      ): void
      public static parallelPrefix(
        arg0: number[] | java.lang.Long[],
        arg1: java.util.function$.LongBinaryOperator | java.util.function$.LongBinaryOperator$$lambda
      ): void
      public static parallelPrefix(
        arg0: number[] | java.lang.Long[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: java.util.function$.LongBinaryOperator | java.util.function$.LongBinaryOperator$$lambda
      ): void
      public static parallelPrefix(
        arg0: number[] | java.lang.Double[],
        arg1: java.util.function$.DoubleBinaryOperator | java.util.function$.DoubleBinaryOperator$$lambda
      ): void
      public static parallelPrefix(
        arg0: number[] | java.lang.Double[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: java.util.function$.DoubleBinaryOperator | java.util.function$.DoubleBinaryOperator$$lambda
      ): void
      public static parallelPrefix(
        arg0: number[] | java.lang.Integer[],
        arg1: java.util.function$.IntBinaryOperator | java.util.function$.IntBinaryOperator$$lambda
      ): void
      public static parallelPrefix(
        arg0: number[] | java.lang.Integer[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: java.util.function$.IntBinaryOperator | java.util.function$.IntBinaryOperator$$lambda
      ): void
      public static binarySearch(arg0: number[] | java.lang.Long[], arg1: number | java.lang.Long): number
      public static binarySearch(
        arg0: number[] | java.lang.Long[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Long
      ): number
      public static binarySearch(arg0: number[] | java.lang.Integer[], arg1: number | java.lang.Integer): number
      public static binarySearch(
        arg0: number[] | java.lang.Integer[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer
      ): number
      public static binarySearch(arg0: number[] | java.lang.Short[], arg1: number | java.lang.Short): number
      public static binarySearch(
        arg0: number[] | java.lang.Short[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Short
      ): number
      public static binarySearch(arg0: string[] | java.lang.Character[], arg1: string | java.lang.Character): number
      public static binarySearch(
        arg0: string[] | java.lang.Character[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: string | java.lang.Character
      ): number
      public static binarySearch(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Byte): number
      public static binarySearch(
        arg0: number[] | java.lang.Byte[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Byte
      ): number
      public static binarySearch(arg0: number[] | java.lang.Double[], arg1: number | java.lang.Double): number
      public static binarySearch(
        arg0: number[] | java.lang.Double[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Double
      ): number
      public static binarySearch(arg0: number[] | java.lang.Float[], arg1: number | java.lang.Float): number
      public static binarySearch(
        arg0: number[] | java.lang.Float[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Float
      ): number
      public static binarySearch(arg0: java.lang.Object[] | any[], arg1: java.lang.Object | any): number
      public static binarySearch(
        arg0: java.lang.Object[] | any[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: java.lang.Object | any
      ): number
      public static binarySearch<T>(arg0: T[], arg1: T, arg2: java.util.Comparator<unknown>): number
      public static binarySearch<T>(
        arg0: T[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: T,
        arg4: java.util.Comparator<unknown>
      ): number
      public static equals(arg0: number[] | java.lang.Long[], arg1: number[] | java.lang.Long[]): boolean
      public static equals(
        arg0: number[] | java.lang.Long[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number[] | java.lang.Long[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): boolean
      public static equals(arg0: number[] | java.lang.Integer[], arg1: number[] | java.lang.Integer[]): boolean
      public static equals(
        arg0: number[] | java.lang.Integer[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number[] | java.lang.Integer[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): boolean
      public static equals(arg0: number[] | java.lang.Short[], arg1: number[] | java.lang.Short[]): boolean
      public static equals(
        arg0: number[] | java.lang.Short[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number[] | java.lang.Short[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): boolean
      public static equals(arg0: string[] | java.lang.Character[], arg1: string[] | java.lang.Character[]): boolean
      public static equals(
        arg0: string[] | java.lang.Character[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: string[] | java.lang.Character[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): boolean
      public static equals(arg0: number[] | java.lang.Byte[], arg1: number[] | java.lang.Byte[]): boolean
      public static equals(
        arg0: number[] | java.lang.Byte[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number[] | java.lang.Byte[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): boolean
      public static equals(arg0: boolean[] | java.lang.Boolean[], arg1: boolean[] | java.lang.Boolean[]): boolean
      public static equals(
        arg0: boolean[] | java.lang.Boolean[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: boolean[] | java.lang.Boolean[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): boolean
      public static equals(arg0: number[] | java.lang.Double[], arg1: number[] | java.lang.Double[]): boolean
      public static equals(
        arg0: number[] | java.lang.Double[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number[] | java.lang.Double[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): boolean
      public static equals(arg0: number[] | java.lang.Float[], arg1: number[] | java.lang.Float[]): boolean
      public static equals(
        arg0: number[] | java.lang.Float[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number[] | java.lang.Float[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): boolean
      public static equals(arg0: java.lang.Object[] | any[], arg1: java.lang.Object[] | any[]): boolean
      public static equals(
        arg0: java.lang.Object[] | any[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: java.lang.Object[] | any[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): boolean
      public static equals<T>(arg0: T[], arg1: T[], arg2: java.util.Comparator<unknown>): boolean
      public static equals<T>(
        arg0: T[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: T[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer,
        arg6: java.util.Comparator<unknown>
      ): boolean
      public static fill(arg0: number[] | java.lang.Long[], arg1: number | java.lang.Long): void
      public static fill(
        arg0: number[] | java.lang.Long[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Long
      ): void
      public static fill(arg0: number[] | java.lang.Integer[], arg1: number | java.lang.Integer): void
      public static fill(
        arg0: number[] | java.lang.Integer[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer
      ): void
      public static fill(arg0: number[] | java.lang.Short[], arg1: number | java.lang.Short): void
      public static fill(
        arg0: number[] | java.lang.Short[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Short
      ): void
      public static fill(arg0: string[] | java.lang.Character[], arg1: string | java.lang.Character): void
      public static fill(
        arg0: string[] | java.lang.Character[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: string | java.lang.Character
      ): void
      public static fill(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Byte): void
      public static fill(
        arg0: number[] | java.lang.Byte[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Byte
      ): void
      public static fill(arg0: boolean[] | java.lang.Boolean[], arg1: boolean | java.lang.Boolean): void
      public static fill(
        arg0: boolean[] | java.lang.Boolean[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: boolean | java.lang.Boolean
      ): void
      public static fill(arg0: number[] | java.lang.Double[], arg1: number | java.lang.Double): void
      public static fill(
        arg0: number[] | java.lang.Double[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Double
      ): void
      public static fill(arg0: number[] | java.lang.Float[], arg1: number | java.lang.Float): void
      public static fill(
        arg0: number[] | java.lang.Float[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Float
      ): void
      public static fill(arg0: java.lang.Object[] | any[], arg1: java.lang.Object | any): void
      public static fill(
        arg0: java.lang.Object[] | any[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: java.lang.Object | any
      ): void
      public static copyOf<T>(arg0: T[], arg1: number | java.lang.Integer): T[]
      public static copyOf<T, U>(arg0: U[], arg1: number | java.lang.Integer, arg2: java.lang.Class<T[]>): T[]
      public static copyOf(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer): number[]
      public static copyOf(arg0: number[] | java.lang.Short[], arg1: number | java.lang.Integer): number[]
      public static copyOf(arg0: number[] | java.lang.Integer[], arg1: number | java.lang.Integer): number[]
      public static copyOf(arg0: number[] | java.lang.Long[], arg1: number | java.lang.Integer): number[]
      public static copyOf(arg0: string[] | java.lang.Character[], arg1: number | java.lang.Integer): string[]
      public static copyOf(arg0: number[] | java.lang.Float[], arg1: number | java.lang.Integer): number[]
      public static copyOf(arg0: number[] | java.lang.Double[], arg1: number | java.lang.Integer): number[]
      public static copyOf(arg0: boolean[] | java.lang.Boolean[], arg1: number | java.lang.Integer): boolean[]
      public static copyOfRange<T>(arg0: T[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): T[]
      public static copyOfRange<T, U>(
        arg0: U[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: java.lang.Class<T[]>
      ): T[]
      public static copyOfRange(
        arg0: number[] | java.lang.Byte[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): number[]
      public static copyOfRange(
        arg0: number[] | java.lang.Short[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): number[]
      public static copyOfRange(
        arg0: number[] | java.lang.Integer[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): number[]
      public static copyOfRange(
        arg0: number[] | java.lang.Long[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): number[]
      public static copyOfRange(
        arg0: string[] | java.lang.Character[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): string[]
      public static copyOfRange(
        arg0: number[] | java.lang.Float[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): number[]
      public static copyOfRange(
        arg0: number[] | java.lang.Double[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): number[]
      public static copyOfRange(
        arg0: boolean[] | java.lang.Boolean[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): boolean[]
      public static asList<T>(...vargs: T[]): java.util.List<T>
      public static hashCode(arg0: number[] | java.lang.Long[]): number
      public static hashCode(arg0: number[] | java.lang.Integer[]): number
      public static hashCode(arg0: number[] | java.lang.Short[]): number
      public static hashCode(arg0: string[] | java.lang.Character[]): number
      public static hashCode(arg0: number[] | java.lang.Byte[]): number
      public static hashCode(arg0: boolean[] | java.lang.Boolean[]): number
      public static hashCode(arg0: number[] | java.lang.Float[]): number
      public static hashCode(arg0: number[] | java.lang.Double[]): number
      public static hashCode(arg0: java.lang.Object[] | any[]): number
      public static deepHashCode(arg0: java.lang.Object[] | any[]): number
      public static deepEquals(arg0: java.lang.Object[] | any[], arg1: java.lang.Object[] | any[]): boolean
      static deepEquals0(arg0: java.lang.Object | any, arg1: java.lang.Object | any): boolean
      public static toString(arg0: number[] | java.lang.Long[]): java.lang.String
      public static toString(arg0: number[] | java.lang.Integer[]): java.lang.String
      public static toString(arg0: number[] | java.lang.Short[]): java.lang.String
      public static toString(arg0: string[] | java.lang.Character[]): java.lang.String
      public static toString(arg0: number[] | java.lang.Byte[]): java.lang.String
      public static toString(arg0: boolean[] | java.lang.Boolean[]): java.lang.String
      public static toString(arg0: number[] | java.lang.Float[]): java.lang.String
      public static toString(arg0: number[] | java.lang.Double[]): java.lang.String
      public static toString(arg0: java.lang.Object[] | any[]): java.lang.String
      public static deepToString(arg0: java.lang.Object[] | any[]): java.lang.String
      public static setAll<T>(
        arg0: T[],
        arg1: java.util.function$.IntFunction<T> | java.util.function$.IntFunction$$lambda<T>
      ): void
      public static parallelSetAll<T>(
        arg0: T[],
        arg1: java.util.function$.IntFunction<T> | java.util.function$.IntFunction$$lambda<T>
      ): void
      public static setAll(arg0: number[] | java.lang.Integer[], arg1: java.util.function$.IntUnaryOperator): void
      public static parallelSetAll(
        arg0: number[] | java.lang.Integer[],
        arg1: java.util.function$.IntUnaryOperator
      ): void
      public static setAll(
        arg0: number[] | java.lang.Long[],
        arg1: java.util.function$.IntToLongFunction | java.util.function$.IntToLongFunction$$lambda
      ): void
      public static parallelSetAll(
        arg0: number[] | java.lang.Long[],
        arg1: java.util.function$.IntToLongFunction | java.util.function$.IntToLongFunction$$lambda
      ): void
      public static setAll(
        arg0: number[] | java.lang.Double[],
        arg1: java.util.function$.IntToDoubleFunction | java.util.function$.IntToDoubleFunction$$lambda
      ): void
      public static parallelSetAll(
        arg0: number[] | java.lang.Double[],
        arg1: java.util.function$.IntToDoubleFunction | java.util.function$.IntToDoubleFunction$$lambda
      ): void
      public static spliterator<T>(arg0: T[]): java.util.Spliterator<T>
      public static spliterator<T>(
        arg0: T[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.util.Spliterator<T>
      public static spliterator(arg0: number[] | java.lang.Integer[]): java.util.Spliterator$OfInt
      public static spliterator(
        arg0: number[] | java.lang.Integer[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.util.Spliterator$OfInt
      public static spliterator(arg0: number[] | java.lang.Long[]): java.util.Spliterator$OfLong
      public static spliterator(
        arg0: number[] | java.lang.Long[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.util.Spliterator$OfLong
      public static spliterator(arg0: number[] | java.lang.Double[]): java.util.Spliterator$OfDouble
      public static spliterator(
        arg0: number[] | java.lang.Double[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.util.Spliterator$OfDouble
      public static stream<T>(arg0: T[]): java.util.stream.Stream<T>
      public static stream<T>(
        arg0: T[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.util.stream.Stream<T>
      public static stream(arg0: number[] | java.lang.Integer[]): java.util.stream.IntStream
      public static stream(
        arg0: number[] | java.lang.Integer[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.util.stream.IntStream
      public static stream(arg0: number[] | java.lang.Long[]): java.util.stream.LongStream
      public static stream(
        arg0: number[] | java.lang.Long[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.util.stream.LongStream
      public static stream(arg0: number[] | java.lang.Double[]): java.util.stream.DoubleStream
      public static stream(
        arg0: number[] | java.lang.Double[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.util.stream.DoubleStream
      public static compare(arg0: boolean[] | java.lang.Boolean[], arg1: boolean[] | java.lang.Boolean[]): number
      public static compare(
        arg0: boolean[] | java.lang.Boolean[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: boolean[] | java.lang.Boolean[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): number
      public static compare(arg0: number[] | java.lang.Byte[], arg1: number[] | java.lang.Byte[]): number
      public static compare(
        arg0: number[] | java.lang.Byte[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number[] | java.lang.Byte[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): number
      public static compareUnsigned(arg0: number[] | java.lang.Byte[], arg1: number[] | java.lang.Byte[]): number
      public static compareUnsigned(
        arg0: number[] | java.lang.Byte[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number[] | java.lang.Byte[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): number
      public static compare(arg0: number[] | java.lang.Short[], arg1: number[] | java.lang.Short[]): number
      public static compare(
        arg0: number[] | java.lang.Short[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number[] | java.lang.Short[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): number
      public static compareUnsigned(arg0: number[] | java.lang.Short[], arg1: number[] | java.lang.Short[]): number
      public static compareUnsigned(
        arg0: number[] | java.lang.Short[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number[] | java.lang.Short[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): number
      public static compare(arg0: string[] | java.lang.Character[], arg1: string[] | java.lang.Character[]): number
      public static compare(
        arg0: string[] | java.lang.Character[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: string[] | java.lang.Character[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): number
      public static compare(arg0: number[] | java.lang.Integer[], arg1: number[] | java.lang.Integer[]): number
      public static compare(
        arg0: number[] | java.lang.Integer[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number[] | java.lang.Integer[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): number
      public static compareUnsigned(arg0: number[] | java.lang.Integer[], arg1: number[] | java.lang.Integer[]): number
      public static compareUnsigned(
        arg0: number[] | java.lang.Integer[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number[] | java.lang.Integer[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): number
      public static compare(arg0: number[] | java.lang.Long[], arg1: number[] | java.lang.Long[]): number
      public static compare(
        arg0: number[] | java.lang.Long[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number[] | java.lang.Long[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): number
      public static compareUnsigned(arg0: number[] | java.lang.Long[], arg1: number[] | java.lang.Long[]): number
      public static compareUnsigned(
        arg0: number[] | java.lang.Long[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number[] | java.lang.Long[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): number
      public static compare(arg0: number[] | java.lang.Float[], arg1: number[] | java.lang.Float[]): number
      public static compare(
        arg0: number[] | java.lang.Float[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number[] | java.lang.Float[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): number
      public static compare(arg0: number[] | java.lang.Double[], arg1: number[] | java.lang.Double[]): number
      public static compare(
        arg0: number[] | java.lang.Double[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number[] | java.lang.Double[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): number
      public static compare<T extends java.lang.Comparable<unknown>>(arg0: T[], arg1: T[]): number
      public static compare<T extends java.lang.Comparable<unknown>>(
        arg0: T[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: T[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): number
      public static compare<T>(arg0: T[], arg1: T[], arg2: java.util.Comparator<unknown>): number
      public static compare<T>(
        arg0: T[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: T[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer,
        arg6: java.util.Comparator<unknown>
      ): number
      public static mismatch(arg0: boolean[] | java.lang.Boolean[], arg1: boolean[] | java.lang.Boolean[]): number
      public static mismatch(
        arg0: boolean[] | java.lang.Boolean[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: boolean[] | java.lang.Boolean[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): number
      public static mismatch(arg0: number[] | java.lang.Byte[], arg1: number[] | java.lang.Byte[]): number
      public static mismatch(
        arg0: number[] | java.lang.Byte[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number[] | java.lang.Byte[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): number
      public static mismatch(arg0: string[] | java.lang.Character[], arg1: string[] | java.lang.Character[]): number
      public static mismatch(
        arg0: string[] | java.lang.Character[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: string[] | java.lang.Character[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): number
      public static mismatch(arg0: number[] | java.lang.Short[], arg1: number[] | java.lang.Short[]): number
      public static mismatch(
        arg0: number[] | java.lang.Short[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number[] | java.lang.Short[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): number
      public static mismatch(arg0: number[] | java.lang.Integer[], arg1: number[] | java.lang.Integer[]): number
      public static mismatch(
        arg0: number[] | java.lang.Integer[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number[] | java.lang.Integer[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): number
      public static mismatch(arg0: number[] | java.lang.Long[], arg1: number[] | java.lang.Long[]): number
      public static mismatch(
        arg0: number[] | java.lang.Long[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number[] | java.lang.Long[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): number
      public static mismatch(arg0: number[] | java.lang.Float[], arg1: number[] | java.lang.Float[]): number
      public static mismatch(
        arg0: number[] | java.lang.Float[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number[] | java.lang.Float[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): number
      public static mismatch(arg0: number[] | java.lang.Double[], arg1: number[] | java.lang.Double[]): number
      public static mismatch(
        arg0: number[] | java.lang.Double[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number[] | java.lang.Double[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): number
      public static mismatch(arg0: java.lang.Object[] | any[], arg1: java.lang.Object[] | any[]): number
      public static mismatch(
        arg0: java.lang.Object[] | any[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: java.lang.Object[] | any[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): number
      public static mismatch<T>(arg0: T[], arg1: T[], arg2: java.util.Comparator<unknown>): number
      public static mismatch<T>(
        arg0: T[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: T[],
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer,
        arg6: java.util.Comparator<unknown>
      ): number
    }
  }
}

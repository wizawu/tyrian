declare namespace java {
  namespace util {
    namespace stream {
      interface DoubleStream extends java.util.stream.BaseStream<java.lang.Double, java.util.stream.DoubleStream> {
        filter(arg0: java.util.function$.DoublePredicate): java.util.stream.DoubleStream
        map(arg0: java.util.function$.DoubleUnaryOperator): java.util.stream.DoubleStream
        mapToObj<U>(
          arg0: java.util.function$.DoubleFunction<U> | java.util.function$.DoubleFunction$$lambda<U>
        ): java.util.stream.Stream<U>
        mapToInt(
          arg0: java.util.function$.DoubleToIntFunction | java.util.function$.DoubleToIntFunction$$lambda
        ): java.util.stream.IntStream
        mapToLong(
          arg0: java.util.function$.DoubleToLongFunction | java.util.function$.DoubleToLongFunction$$lambda
        ): java.util.stream.LongStream
        flatMap(
          arg0:
            | java.util.function$.DoubleFunction<java.util.stream.DoubleStream>
            | java.util.function$.DoubleFunction$$lambda<java.util.stream.DoubleStream>
        ): java.util.stream.DoubleStream
        distinct(): java.util.stream.DoubleStream
        sorted(): java.util.stream.DoubleStream
        peek(arg0: java.util.function$.DoubleConsumer): java.util.stream.DoubleStream
        limit(arg0: number | java.lang.Long): java.util.stream.DoubleStream
        skip(arg0: number | java.lang.Long): java.util.stream.DoubleStream
        takeWhile?(arg0: java.util.function$.DoublePredicate): java.util.stream.DoubleStream
        dropWhile?(arg0: java.util.function$.DoublePredicate): java.util.stream.DoubleStream
        forEach(arg0: java.util.function$.DoubleConsumer): void
        forEachOrdered(arg0: java.util.function$.DoubleConsumer): void
        toArray(): number[]
        reduce(
          arg0: number | java.lang.Double,
          arg1: java.util.function$.DoubleBinaryOperator | java.util.function$.DoubleBinaryOperator$$lambda
        ): number
        reduce(
          arg0: java.util.function$.DoubleBinaryOperator | java.util.function$.DoubleBinaryOperator$$lambda
        ): java.util.OptionalDouble
        collect<R>(
          arg0: java.util.function$.Supplier<R> | java.util.function$.Supplier$$lambda<R>,
          arg1: java.util.function$.ObjDoubleConsumer<R> | java.util.function$.ObjDoubleConsumer$$lambda<R>,
          arg2: java.util.function$.BiConsumer<R, R>
        ): R
        sum(): number
        min(): java.util.OptionalDouble
        max(): java.util.OptionalDouble
        count(): number
        average(): java.util.OptionalDouble
        summaryStatistics(): java.util.DoubleSummaryStatistics
        anyMatch(arg0: java.util.function$.DoublePredicate): boolean
        allMatch(arg0: java.util.function$.DoublePredicate): boolean
        noneMatch(arg0: java.util.function$.DoublePredicate): boolean
        findFirst(): java.util.OptionalDouble
        findAny(): java.util.OptionalDouble
        boxed(): java.util.stream.Stream<java.lang.Double>
        sequential(): java.util.stream.DoubleStream
        parallel(): java.util.stream.DoubleStream
        iterator(): java.util.PrimitiveIterator$OfDouble
        spliterator(): java.util.Spliterator$OfDouble
        builder?(): java.util.stream.DoubleStream$Builder
        empty?(): java.util.stream.DoubleStream
        of?(arg0: number | java.lang.Double): java.util.stream.DoubleStream
        of?(...vargs: (number | java.lang.Double)[]): java.util.stream.DoubleStream
        iterate?(
          arg0: number | java.lang.Double,
          arg1: java.util.function$.DoubleUnaryOperator
        ): java.util.stream.DoubleStream
        iterate?(
          arg0: number | java.lang.Double,
          arg1: java.util.function$.DoublePredicate,
          arg2: java.util.function$.DoubleUnaryOperator
        ): java.util.stream.DoubleStream
        generate?(
          arg0: java.util.function$.DoubleSupplier | java.util.function$.DoubleSupplier$$lambda
        ): java.util.stream.DoubleStream
        concat?(arg0: java.util.stream.DoubleStream, arg1: java.util.stream.DoubleStream): java.util.stream.DoubleStream
        parallel?(): java.util.stream.BaseStream
        sequential?(): java.util.stream.BaseStream
        spliterator?(): java.util.Spliterator
        iterator?(): java.util.Iterator
      }
    }
  }
}

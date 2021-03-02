declare namespace java {
  namespace util {
    namespace stream {

      interface IntStream extends java.util.stream.BaseStream<java.lang.Integer,java.util.stream.IntStream> {
        filter(arg0: java.util.function$.IntPredicate): java.util.stream.IntStream
        map(arg0: java.util.function$.IntUnaryOperator): java.util.stream.IntStream
        mapToObj<U>(arg0: java.util.function$.IntFunction<U>): java.util.stream.Stream<U>
        mapToLong(arg0: java.util.function$.IntToLongFunction): java.util.stream.LongStream
        mapToDouble(arg0: java.util.function$.IntToDoubleFunction): java.util.stream.DoubleStream
        flatMap(arg0: java.util.function$.IntFunction<java.util.stream.IntStream>): java.util.stream.IntStream
        distinct(): java.util.stream.IntStream
        sorted(): java.util.stream.IntStream
        peek(arg0: java.util.function$.IntConsumer): java.util.stream.IntStream
        limit(arg0: long): java.util.stream.IntStream
        skip(arg0: long): java.util.stream.IntStream
        takeWhile(arg0: java.util.function$.IntPredicate): java.util.stream.IntStream
        dropWhile(arg0: java.util.function$.IntPredicate): java.util.stream.IntStream
        forEach(arg0: java.util.function$.IntConsumer): void
        forEachOrdered(arg0: java.util.function$.IntConsumer): void
        toArray(): int[]
        reduce(arg0: int, arg1: java.util.function$.IntBinaryOperator): int
        reduce(arg0: java.util.function$.IntBinaryOperator): java.util.OptionalInt
        collect<R>(arg0: java.util.function$.Supplier<R>, arg1: java.util.function$.ObjIntConsumer<R>, arg2: java.util.function$.BiConsumer<R,R>): R
        sum(): int
        min(): java.util.OptionalInt
        max(): java.util.OptionalInt
        count(): long
        average(): java.util.OptionalDouble
        summaryStatistics(): java.util.IntSummaryStatistics
        anyMatch(arg0: java.util.function$.IntPredicate): boolean
        allMatch(arg0: java.util.function$.IntPredicate): boolean
        noneMatch(arg0: java.util.function$.IntPredicate): boolean
        findFirst(): java.util.OptionalInt
        findAny(): java.util.OptionalInt
        asLongStream(): java.util.stream.LongStream
        asDoubleStream(): java.util.stream.DoubleStream
        boxed(): java.util.stream.Stream<java.lang.Integer>
        sequential(): java.util.stream.IntStream
        parallel(): java.util.stream.IntStream
        iterator(): java.util.PrimitiveIterator$OfInt
        spliterator(): java.util.Spliterator$OfInt
        builder(): java.util.stream.IntStream$Builder
        empty(): java.util.stream.IntStream
        of(arg0: int): java.util.stream.IntStream
        of(...arg0: int[]): java.util.stream.IntStream
        iterate(arg0: int, arg1: java.util.function$.IntUnaryOperator): java.util.stream.IntStream
        iterate(arg0: int, arg1: java.util.function$.IntPredicate, arg2: java.util.function$.IntUnaryOperator): java.util.stream.IntStream
        generate(arg0: java.util.function$.IntSupplier): java.util.stream.IntStream
        range(arg0: int, arg1: int): java.util.stream.IntStream
        rangeClosed(arg0: int, arg1: int): java.util.stream.IntStream
        concat(arg0: java.util.stream.IntStream, arg1: java.util.stream.IntStream): java.util.stream.IntStream
        parallel(): java.util.stream.BaseStream
        sequential(): java.util.stream.BaseStream
        spliterator(): java.util.Spliterator
        iterator(): java.util.Iterator
      }

    }
  }
}

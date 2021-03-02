declare namespace java {
  namespace util {
    namespace stream {

      interface LongStream extends java.util.stream.BaseStream<java.lang.Long,java.util.stream.LongStream> {
        filter(arg0: java.util.function$.LongPredicate): java.util.stream.LongStream
        map(arg0: java.util.function$.LongUnaryOperator): java.util.stream.LongStream
        mapToObj<U>(arg0: java.util.function$.LongFunction<U>): java.util.stream.Stream<U>
        mapToInt(arg0: java.util.function$.LongToIntFunction): java.util.stream.IntStream
        mapToDouble(arg0: java.util.function$.LongToDoubleFunction): java.util.stream.DoubleStream
        flatMap(arg0: java.util.function$.LongFunction<java.util.stream.LongStream>): java.util.stream.LongStream
        distinct(): java.util.stream.LongStream
        sorted(): java.util.stream.LongStream
        peek(arg0: java.util.function$.LongConsumer): java.util.stream.LongStream
        limit(arg0: long): java.util.stream.LongStream
        skip(arg0: long): java.util.stream.LongStream
        takeWhile(arg0: java.util.function$.LongPredicate): java.util.stream.LongStream
        dropWhile(arg0: java.util.function$.LongPredicate): java.util.stream.LongStream
        forEach(arg0: java.util.function$.LongConsumer): void
        forEachOrdered(arg0: java.util.function$.LongConsumer): void
        toArray(): long[]
        reduce(arg0: long, arg1: java.util.function$.LongBinaryOperator): long
        reduce(arg0: java.util.function$.LongBinaryOperator): java.util.OptionalLong
        collect<R>(arg0: java.util.function$.Supplier<R>, arg1: java.util.function$.ObjLongConsumer<R>, arg2: java.util.function$.BiConsumer<R,R>): R
        sum(): long
        min(): java.util.OptionalLong
        max(): java.util.OptionalLong
        count(): long
        average(): java.util.OptionalDouble
        summaryStatistics(): java.util.LongSummaryStatistics
        anyMatch(arg0: java.util.function$.LongPredicate): boolean
        allMatch(arg0: java.util.function$.LongPredicate): boolean
        noneMatch(arg0: java.util.function$.LongPredicate): boolean
        findFirst(): java.util.OptionalLong
        findAny(): java.util.OptionalLong
        asDoubleStream(): java.util.stream.DoubleStream
        boxed(): java.util.stream.Stream<java.lang.Long>
        sequential(): java.util.stream.LongStream
        parallel(): java.util.stream.LongStream
        iterator(): java.util.PrimitiveIterator$OfLong
        spliterator(): java.util.Spliterator$OfLong
        builder(): java.util.stream.LongStream$Builder
        empty(): java.util.stream.LongStream
        of(arg0: long): java.util.stream.LongStream
        of(...arg0: long[]): java.util.stream.LongStream
        iterate(arg0: long, arg1: java.util.function$.LongUnaryOperator): java.util.stream.LongStream
        iterate(arg0: long, arg1: java.util.function$.LongPredicate, arg2: java.util.function$.LongUnaryOperator): java.util.stream.LongStream
        generate(arg0: java.util.function$.LongSupplier): java.util.stream.LongStream
        range(arg0: long, arg1: long): java.util.stream.LongStream
        rangeClosed(arg0: long, arg1: long): java.util.stream.LongStream
        concat(arg0: java.util.stream.LongStream, arg1: java.util.stream.LongStream): java.util.stream.LongStream
        parallel(): java.util.stream.BaseStream
        sequential(): java.util.stream.BaseStream
        spliterator(): java.util.Spliterator
        iterator(): java.util.Iterator
      }

    }
  }
}

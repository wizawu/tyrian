declare namespace java {
    namespace util {
        namespace stream {
            interface IntStream extends java.util.stream.BaseStream<java.lang.Integer, java.util.stream.IntStream> {
                filter(arg0: java.util.function$.IntPredicate): java.util.stream.IntStream
                map(arg0: java.util.function$.IntUnaryOperator): java.util.stream.IntStream
                mapToObj<U>(arg0: java.util.function$.IntFunction<U> | java.util.function$.IntFunction$$Lambda<U>): java.util.stream.Stream<U>
                mapToLong<U>(arg0: java.util.function$.IntToLongFunction | java.util.function$.IntToLongFunction$$Lambda): java.util.stream.LongStream
                mapToDouble<U>(arg0: java.util.function$.IntToDoubleFunction | java.util.function$.IntToDoubleFunction$$Lambda): java.util.stream.DoubleStream
                flatMap<U>(arg0: java.util.function$.IntFunction<java.util.stream.IntStream> | java.util.function$.IntFunction$$Lambda<java.util.stream.IntStream>): java.util.stream.IntStream
                distinct<U>(): java.util.stream.IntStream
                sorted<U>(): java.util.stream.IntStream
                peek<U>(arg0: java.util.function$.IntConsumer): java.util.stream.IntStream
                limit<U>(arg0: long): java.util.stream.IntStream
                skip<U>(arg0: long): java.util.stream.IntStream
                forEach<U>(arg0: java.util.function$.IntConsumer): void
                forEachOrdered<U>(arg0: java.util.function$.IntConsumer): void
                toArray<U>(): int[]
                reduce<U>(arg0: int, arg1: java.util.function$.IntBinaryOperator | java.util.function$.IntBinaryOperator$$Lambda): int
                reduce<U>(arg0: java.util.function$.IntBinaryOperator | java.util.function$.IntBinaryOperator$$Lambda): java.util.OptionalInt
                collect<R>(arg0: java.util.function$.Supplier<R> | java.util.function$.Supplier$$Lambda<R>, arg1: java.util.function$.ObjIntConsumer<R> | java.util.function$.ObjIntConsumer$$Lambda<R>, arg2: java.util.function$.BiConsumer<R, R>): R
                sum<R>(): int
                min<R>(): java.util.OptionalInt
                max<R>(): java.util.OptionalInt
                count<R>(): long
                average<R>(): java.util.OptionalDouble
                summaryStatistics<R>(): java.util.IntSummaryStatistics
                anyMatch<R>(arg0: java.util.function$.IntPredicate): boolean
                allMatch<R>(arg0: java.util.function$.IntPredicate): boolean
                noneMatch<R>(arg0: java.util.function$.IntPredicate): boolean
                findFirst<R>(): java.util.OptionalInt
                findAny<R>(): java.util.OptionalInt
                asLongStream<R>(): java.util.stream.LongStream
                asDoubleStream<R>(): java.util.stream.DoubleStream
                boxed<R>(): java.util.stream.Stream<java.lang.Integer>
                sequential<R>(): java.util.stream.IntStream
                parallel<R>(): java.util.stream.IntStream
                iterator<R>(): java.util.PrimitiveIterator$OfInt
                spliterator<R>(): java.util.Spliterator$OfInt
                builder<R>(): java.util.stream.IntStream$Builder
                empty<R>(): java.util.stream.IntStream
                of<R>(arg0: int): java.util.stream.IntStream
                of<R>(...arg0: int[]): java.util.stream.IntStream
                iterate<R>(arg0: int, arg1: java.util.function$.IntUnaryOperator): java.util.stream.IntStream
                generate<R>(arg0: java.util.function$.IntSupplier | java.util.function$.IntSupplier$$Lambda): java.util.stream.IntStream
                range<R>(arg0: int, arg1: int): java.util.stream.IntStream
                rangeClosed<R>(arg0: int, arg1: int): java.util.stream.IntStream
                concat<R>(arg0: java.util.stream.IntStream, arg1: java.util.stream.IntStream): java.util.stream.IntStream
                parallel<R>(): java.util.stream.BaseStream
                sequential<R>(): java.util.stream.BaseStream
                spliterator<R>(): java.util.Spliterator
                iterator<R>(): java.util.Iterator
            }
        }
    }
}
declare namespace java {
    namespace util {
        namespace stream {
            interface LongStream extends java.util.stream.BaseStream<java.lang.Long, java.util.stream.LongStream> {
                filter(arg0: java.util.function$.LongPredicate): java.util.stream.LongStream
                map(arg0: java.util.function$.LongUnaryOperator): java.util.stream.LongStream
                mapToObj<U>(arg0: java.util.function$.LongFunction<U> | java.util.function$.LongFunction$$Lambda<U>): java.util.stream.Stream<U>
                mapToInt<U>(arg0: java.util.function$.LongToIntFunction | java.util.function$.LongToIntFunction$$Lambda): java.util.stream.IntStream
                mapToDouble<U>(arg0: java.util.function$.LongToDoubleFunction | java.util.function$.LongToDoubleFunction$$Lambda): java.util.stream.DoubleStream
                flatMap<U>(arg0: java.util.function$.LongFunction<java.util.stream.LongStream> | java.util.function$.LongFunction$$Lambda<java.util.stream.LongStream>): java.util.stream.LongStream
                distinct<U>(): java.util.stream.LongStream
                sorted<U>(): java.util.stream.LongStream
                peek<U>(arg0: java.util.function$.LongConsumer): java.util.stream.LongStream
                limit<U>(arg0: long): java.util.stream.LongStream
                skip<U>(arg0: long): java.util.stream.LongStream
                forEach<U>(arg0: java.util.function$.LongConsumer): void
                forEachOrdered<U>(arg0: java.util.function$.LongConsumer): void
                toArray<U>(): long[]
                reduce<U>(arg0: long, arg1: java.util.function$.LongBinaryOperator | java.util.function$.LongBinaryOperator$$Lambda): long
                reduce<U>(arg0: java.util.function$.LongBinaryOperator | java.util.function$.LongBinaryOperator$$Lambda): java.util.OptionalLong
                collect<R>(arg0: java.util.function$.Supplier<R> | java.util.function$.Supplier$$Lambda<R>, arg1: java.util.function$.ObjLongConsumer<R> | java.util.function$.ObjLongConsumer$$Lambda<R>, arg2: java.util.function$.BiConsumer<R, R>): R
                sum<R>(): long
                min<R>(): java.util.OptionalLong
                max<R>(): java.util.OptionalLong
                count<R>(): long
                average<R>(): java.util.OptionalDouble
                summaryStatistics<R>(): java.util.LongSummaryStatistics
                anyMatch<R>(arg0: java.util.function$.LongPredicate): boolean
                allMatch<R>(arg0: java.util.function$.LongPredicate): boolean
                noneMatch<R>(arg0: java.util.function$.LongPredicate): boolean
                findFirst<R>(): java.util.OptionalLong
                findAny<R>(): java.util.OptionalLong
                asDoubleStream<R>(): java.util.stream.DoubleStream
                boxed<R>(): java.util.stream.Stream<java.lang.Long>
                sequential<R>(): java.util.stream.LongStream
                parallel<R>(): java.util.stream.LongStream
                iterator<R>(): java.util.PrimitiveIterator$OfLong
                spliterator<R>(): java.util.Spliterator$OfLong
                builder<R>(): java.util.stream.LongStream$Builder
                empty<R>(): java.util.stream.LongStream
                of<R>(arg0: long): java.util.stream.LongStream
                of<R>(...arg0: long[]): java.util.stream.LongStream
                iterate<R>(arg0: long, arg1: java.util.function$.LongUnaryOperator): java.util.stream.LongStream
                generate<R>(arg0: java.util.function$.LongSupplier | java.util.function$.LongSupplier$$Lambda): java.util.stream.LongStream
                range<R>(arg0: long, arg1: long): java.util.stream.LongStream
                rangeClosed<R>(arg0: long, arg1: long): java.util.stream.LongStream
                concat<R>(arg0: java.util.stream.LongStream, arg1: java.util.stream.LongStream): java.util.stream.LongStream
                parallel<R>(): java.util.stream.BaseStream
                sequential<R>(): java.util.stream.BaseStream
                spliterator<R>(): java.util.Spliterator
                iterator<R>(): java.util.Iterator
            }
        }
    }
}
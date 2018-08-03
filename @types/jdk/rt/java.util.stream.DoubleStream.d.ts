declare namespace java {
    namespace util {
        namespace stream {
            interface DoubleStream extends java.util.stream.BaseStream<java.lang.Double, java.util.stream.DoubleStream> {
                filter(arg0: java.util.function$.DoublePredicate): java.util.stream.DoubleStream
                map(arg0: java.util.function$.DoubleUnaryOperator): java.util.stream.DoubleStream
                mapToObj<U>(arg0: java.util.function$.DoubleFunction<U> | java.util.function$.DoubleFunction$$Lambda<U>): java.util.stream.Stream<U>
                mapToInt<U>(arg0: java.util.function$.DoubleToIntFunction | java.util.function$.DoubleToIntFunction$$Lambda): java.util.stream.IntStream
                mapToLong<U>(arg0: java.util.function$.DoubleToLongFunction | java.util.function$.DoubleToLongFunction$$Lambda): java.util.stream.LongStream
                flatMap<U>(arg0: java.util.function$.DoubleFunction<java.util.stream.DoubleStream> | java.util.function$.DoubleFunction$$Lambda<java.util.stream.DoubleStream>): java.util.stream.DoubleStream
                distinct<U>(): java.util.stream.DoubleStream
                sorted<U>(): java.util.stream.DoubleStream
                peek<U>(arg0: java.util.function$.DoubleConsumer): java.util.stream.DoubleStream
                limit<U>(arg0: long): java.util.stream.DoubleStream
                skip<U>(arg0: long): java.util.stream.DoubleStream
                forEach<U>(arg0: java.util.function$.DoubleConsumer): void
                forEachOrdered<U>(arg0: java.util.function$.DoubleConsumer): void
                toArray<U>(): double[]
                reduce<U>(arg0: double, arg1: java.util.function$.DoubleBinaryOperator | java.util.function$.DoubleBinaryOperator$$Lambda): double
                reduce<U>(arg0: java.util.function$.DoubleBinaryOperator | java.util.function$.DoubleBinaryOperator$$Lambda): java.util.OptionalDouble
                collect<R>(arg0: java.util.function$.Supplier<R> | java.util.function$.Supplier$$Lambda<R>, arg1: java.util.function$.ObjDoubleConsumer<R> | java.util.function$.ObjDoubleConsumer$$Lambda<R>, arg2: java.util.function$.BiConsumer<R, R>): R
                sum<R>(): double
                min<R>(): java.util.OptionalDouble
                max<R>(): java.util.OptionalDouble
                count<R>(): long
                average<R>(): java.util.OptionalDouble
                summaryStatistics<R>(): java.util.DoubleSummaryStatistics
                anyMatch<R>(arg0: java.util.function$.DoublePredicate): boolean
                allMatch<R>(arg0: java.util.function$.DoublePredicate): boolean
                noneMatch<R>(arg0: java.util.function$.DoublePredicate): boolean
                findFirst<R>(): java.util.OptionalDouble
                findAny<R>(): java.util.OptionalDouble
                boxed<R>(): java.util.stream.Stream<java.lang.Double>
                sequential<R>(): java.util.stream.DoubleStream
                parallel<R>(): java.util.stream.DoubleStream
                iterator<R>(): java.util.PrimitiveIterator$OfDouble
                spliterator<R>(): java.util.Spliterator$OfDouble
                builder<R>(): java.util.stream.DoubleStream$Builder
                empty<R>(): java.util.stream.DoubleStream
                of<R>(arg0: double): java.util.stream.DoubleStream
                of<R>(...arg0: double[]): java.util.stream.DoubleStream
                iterate<R>(arg0: double, arg1: java.util.function$.DoubleUnaryOperator): java.util.stream.DoubleStream
                generate<R>(arg0: java.util.function$.DoubleSupplier | java.util.function$.DoubleSupplier$$Lambda): java.util.stream.DoubleStream
                concat<R>(arg0: java.util.stream.DoubleStream, arg1: java.util.stream.DoubleStream): java.util.stream.DoubleStream
                parallel<R>(): java.util.stream.BaseStream
                sequential<R>(): java.util.stream.BaseStream
                spliterator<R>(): java.util.Spliterator
                iterator<R>(): java.util.Iterator
            }
        }
    }
}
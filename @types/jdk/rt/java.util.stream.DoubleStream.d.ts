declare namespace java {
    namespace util {
        namespace stream {
            interface DoubleStream extends java.util.stream.BaseStream<java.lang.Double, java.util.stream.DoubleStream> {
                filter(arg0: java.util.function$.DoublePredicate): java.util.stream.DoubleStream
                map(arg0: java.util.function$.DoubleUnaryOperator): java.util.stream.DoubleStream
                mapToObj<U>(arg0: java.util.function$.DoubleFunction<U> | java.util.function$.DoubleFunction$$Lambda<U>): java.util.stream.Stream<U>
                mapToInt(arg0: java.util.function$.DoubleToIntFunction | java.util.function$.DoubleToIntFunction$$Lambda): java.util.stream.IntStream
                mapToLong(arg0: java.util.function$.DoubleToLongFunction | java.util.function$.DoubleToLongFunction$$Lambda): java.util.stream.LongStream
                flatMap(arg0: java.util.function$.DoubleFunction<java.util.stream.DoubleStream> | java.util.function$.DoubleFunction$$Lambda<java.util.stream.DoubleStream>): java.util.stream.DoubleStream
                distinct(): java.util.stream.DoubleStream
                sorted(): java.util.stream.DoubleStream
                peek(arg0: java.util.function$.DoubleConsumer): java.util.stream.DoubleStream
                limit(arg0: long): java.util.stream.DoubleStream
                skip(arg0: long): java.util.stream.DoubleStream
                forEach(arg0: java.util.function$.DoubleConsumer): void
                forEachOrdered(arg0: java.util.function$.DoubleConsumer): void
                toArray(): double[]
                reduce(arg0: double, arg1: java.util.function$.DoubleBinaryOperator | java.util.function$.DoubleBinaryOperator$$Lambda): double
                reduce(arg0: java.util.function$.DoubleBinaryOperator | java.util.function$.DoubleBinaryOperator$$Lambda): java.util.OptionalDouble
                collect<R>(arg0: java.util.function$.Supplier<R> | java.util.function$.Supplier$$Lambda<R>, arg1: java.util.function$.ObjDoubleConsumer<R> | java.util.function$.ObjDoubleConsumer$$Lambda<R>, arg2: java.util.function$.BiConsumer<R, R>): R
                sum(): double
                min(): java.util.OptionalDouble
                max(): java.util.OptionalDouble
                count(): long
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
                builder(): java.util.stream.DoubleStream$Builder
                empty(): java.util.stream.DoubleStream
                of(arg0: double): java.util.stream.DoubleStream
                of(...arg0: double[]): java.util.stream.DoubleStream
                iterate(arg0: double, arg1: java.util.function$.DoubleUnaryOperator): java.util.stream.DoubleStream
                generate(arg0: java.util.function$.DoubleSupplier | java.util.function$.DoubleSupplier$$Lambda): java.util.stream.DoubleStream
                concat(arg0: java.util.stream.DoubleStream, arg1: java.util.stream.DoubleStream): java.util.stream.DoubleStream
                parallel(): java.util.stream.BaseStream
                sequential(): java.util.stream.BaseStream
                spliterator(): java.util.Spliterator
                iterator(): java.util.Iterator
            }
        }
    }
}
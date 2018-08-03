declare namespace java {
    namespace util {
        namespace stream {
            abstract class DoublePipeline<E_IN> extends java.util.stream.AbstractPipeline<E_IN, java.lang.Double, java.util.stream.DoubleStream> implements java.util.stream.DoubleStream {
                public iterator(): java.util.PrimitiveIterator$OfDouble
                public spliterator(): java.util.Spliterator$OfDouble
                public boxed(): java.util.stream.Stream<java.lang.Double>
                public map(arg0: java.util.function$.DoubleUnaryOperator): java.util.stream.DoubleStream
                public mapToObj<U>(arg0: java.util.function$.DoubleFunction<U> | java.util.function$.DoubleFunction$$Lambda<U>): java.util.stream.Stream<U>
                public mapToInt<U>(arg0: java.util.function$.DoubleToIntFunction | java.util.function$.DoubleToIntFunction$$Lambda): java.util.stream.IntStream
                public mapToLong<U>(arg0: java.util.function$.DoubleToLongFunction | java.util.function$.DoubleToLongFunction$$Lambda): java.util.stream.LongStream
                public flatMap<U>(arg0: java.util.function$.DoubleFunction<java.util.stream.DoubleStream> | java.util.function$.DoubleFunction$$Lambda<java.util.stream.DoubleStream>): java.util.stream.DoubleStream
                public unordered<U>(): java.util.stream.DoubleStream
                public filter<U>(arg0: java.util.function$.DoublePredicate): java.util.stream.DoubleStream
                public peek<U>(arg0: java.util.function$.DoubleConsumer): java.util.stream.DoubleStream
                public limit<U>(arg0: long): java.util.stream.DoubleStream
                public skip<U>(arg0: long): java.util.stream.DoubleStream
                public sorted<U>(): java.util.stream.DoubleStream
                public distinct<U>(): java.util.stream.DoubleStream
                public forEach<U>(arg0: java.util.function$.DoubleConsumer): void
                public forEachOrdered<U>(arg0: java.util.function$.DoubleConsumer): void
                public sum<U>(): double
                public min<U>(): java.util.OptionalDouble
                public max<U>(): java.util.OptionalDouble
                public average<U>(): java.util.OptionalDouble
                public count<U>(): long
                public summaryStatistics<U>(): java.util.DoubleSummaryStatistics
                public reduce<U>(arg0: double, arg1: java.util.function$.DoubleBinaryOperator | java.util.function$.DoubleBinaryOperator$$Lambda): double
                public reduce<U>(arg0: java.util.function$.DoubleBinaryOperator | java.util.function$.DoubleBinaryOperator$$Lambda): java.util.OptionalDouble
                public collect<R>(arg0: java.util.function$.Supplier<R> | java.util.function$.Supplier$$Lambda<R>, arg1: java.util.function$.ObjDoubleConsumer<R> | java.util.function$.ObjDoubleConsumer$$Lambda<R>, arg2: java.util.function$.BiConsumer<R, R>): R
                public anyMatch<R>(arg0: java.util.function$.DoublePredicate): boolean
                public allMatch<R>(arg0: java.util.function$.DoublePredicate): boolean
                public noneMatch<R>(arg0: java.util.function$.DoublePredicate): boolean
                public findFirst<R>(): java.util.OptionalDouble
                public findAny<R>(): java.util.OptionalDouble
                public toArray<R>(): double[]
                public spliterator<R>(): java.util.Spliterator
                public unordered<R>(): java.util.stream.BaseStream
                public iterator<R>(): java.util.Iterator
                public parallel<R>(): java.util.stream.DoubleStream
                public sequential<R>(): java.util.stream.DoubleStream
                public static class: java.lang.Class<any>
            }
        }
    }
}
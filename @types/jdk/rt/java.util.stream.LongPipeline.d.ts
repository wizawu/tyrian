declare namespace java {
    namespace util {
        namespace stream {
            abstract class LongPipeline<E_IN> extends java.util.stream.AbstractPipeline<E_IN, java.lang.Long, java.util.stream.LongStream> implements java.util.stream.LongStream {
                public iterator(): java.util.PrimitiveIterator$OfLong
                public spliterator(): java.util.Spliterator$OfLong
                public asDoubleStream(): java.util.stream.DoubleStream
                public boxed(): java.util.stream.Stream<java.lang.Long>
                public map(arg0: java.util.function$.LongUnaryOperator): java.util.stream.LongStream
                public mapToObj<U>(arg0: java.util.function$.LongFunction<U> | java.util.function$.LongFunction$$Lambda<U>): java.util.stream.Stream<U>
                public mapToInt(arg0: java.util.function$.LongToIntFunction | java.util.function$.LongToIntFunction$$Lambda): java.util.stream.IntStream
                public mapToDouble(arg0: java.util.function$.LongToDoubleFunction | java.util.function$.LongToDoubleFunction$$Lambda): java.util.stream.DoubleStream
                public flatMap(arg0: java.util.function$.LongFunction<java.util.stream.LongStream> | java.util.function$.LongFunction$$Lambda<java.util.stream.LongStream>): java.util.stream.LongStream
                public unordered(): java.util.stream.LongStream
                public filter(arg0: java.util.function$.LongPredicate): java.util.stream.LongStream
                public peek(arg0: java.util.function$.LongConsumer): java.util.stream.LongStream
                public limit(arg0: long): java.util.stream.LongStream
                public skip(arg0: long): java.util.stream.LongStream
                public sorted(): java.util.stream.LongStream
                public distinct(): java.util.stream.LongStream
                public forEach(arg0: java.util.function$.LongConsumer): void
                public forEachOrdered(arg0: java.util.function$.LongConsumer): void
                public sum(): long
                public min(): java.util.OptionalLong
                public max(): java.util.OptionalLong
                public average(): java.util.OptionalDouble
                public count(): long
                public summaryStatistics(): java.util.LongSummaryStatistics
                public reduce(arg0: long, arg1: java.util.function$.LongBinaryOperator | java.util.function$.LongBinaryOperator$$Lambda): long
                public reduce(arg0: java.util.function$.LongBinaryOperator | java.util.function$.LongBinaryOperator$$Lambda): java.util.OptionalLong
                public collect<R>(arg0: java.util.function$.Supplier<R> | java.util.function$.Supplier$$Lambda<R>, arg1: java.util.function$.ObjLongConsumer<R> | java.util.function$.ObjLongConsumer$$Lambda<R>, arg2: java.util.function$.BiConsumer<R, R>): R
                public anyMatch(arg0: java.util.function$.LongPredicate): boolean
                public allMatch(arg0: java.util.function$.LongPredicate): boolean
                public noneMatch(arg0: java.util.function$.LongPredicate): boolean
                public findFirst(): java.util.OptionalLong
                public findAny(): java.util.OptionalLong
                public toArray(): long[]
                public spliterator(): java.util.Spliterator
                public unordered(): java.util.stream.BaseStream
                public iterator(): java.util.Iterator
                public parallel(): java.util.stream.LongStream
                public sequential(): java.util.stream.LongStream
                public static class: java.lang.Class<any>
            }
        }
    }
}
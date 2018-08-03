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
                public mapToInt<U>(arg0: java.util.function$.LongToIntFunction | java.util.function$.LongToIntFunction$$Lambda): java.util.stream.IntStream
                public mapToDouble<U>(arg0: java.util.function$.LongToDoubleFunction | java.util.function$.LongToDoubleFunction$$Lambda): java.util.stream.DoubleStream
                public flatMap<U>(arg0: java.util.function$.LongFunction<java.util.stream.LongStream> | java.util.function$.LongFunction$$Lambda<java.util.stream.LongStream>): java.util.stream.LongStream
                public unordered<U>(): java.util.stream.LongStream
                public filter<U>(arg0: java.util.function$.LongPredicate): java.util.stream.LongStream
                public peek<U>(arg0: java.util.function$.LongConsumer): java.util.stream.LongStream
                public limit<U>(arg0: long): java.util.stream.LongStream
                public skip<U>(arg0: long): java.util.stream.LongStream
                public sorted<U>(): java.util.stream.LongStream
                public distinct<U>(): java.util.stream.LongStream
                public forEach<U>(arg0: java.util.function$.LongConsumer): void
                public forEachOrdered<U>(arg0: java.util.function$.LongConsumer): void
                public sum<U>(): long
                public min<U>(): java.util.OptionalLong
                public max<U>(): java.util.OptionalLong
                public average<U>(): java.util.OptionalDouble
                public count<U>(): long
                public summaryStatistics<U>(): java.util.LongSummaryStatistics
                public reduce<U>(arg0: long, arg1: java.util.function$.LongBinaryOperator | java.util.function$.LongBinaryOperator$$Lambda): long
                public reduce<U>(arg0: java.util.function$.LongBinaryOperator | java.util.function$.LongBinaryOperator$$Lambda): java.util.OptionalLong
                public collect<R>(arg0: java.util.function$.Supplier<R> | java.util.function$.Supplier$$Lambda<R>, arg1: java.util.function$.ObjLongConsumer<R> | java.util.function$.ObjLongConsumer$$Lambda<R>, arg2: java.util.function$.BiConsumer<R, R>): R
                public anyMatch<R>(arg0: java.util.function$.LongPredicate): boolean
                public allMatch<R>(arg0: java.util.function$.LongPredicate): boolean
                public noneMatch<R>(arg0: java.util.function$.LongPredicate): boolean
                public findFirst<R>(): java.util.OptionalLong
                public findAny<R>(): java.util.OptionalLong
                public toArray<R>(): long[]
                public spliterator<R>(): java.util.Spliterator
                public unordered<R>(): java.util.stream.BaseStream
                public iterator<R>(): java.util.Iterator
                public parallel<R>(): java.util.stream.LongStream
                public sequential<R>(): java.util.stream.LongStream
                public static class: java.lang.Class<any>
            }
        }
    }
}
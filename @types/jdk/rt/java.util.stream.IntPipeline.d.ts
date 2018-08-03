declare namespace java {
    namespace util {
        namespace stream {
            abstract class IntPipeline<E_IN> extends java.util.stream.AbstractPipeline<E_IN, java.lang.Integer, java.util.stream.IntStream> implements java.util.stream.IntStream {
                public iterator(): java.util.PrimitiveIterator$OfInt
                public spliterator(): java.util.Spliterator$OfInt
                public asLongStream(): java.util.stream.LongStream
                public asDoubleStream(): java.util.stream.DoubleStream
                public boxed(): java.util.stream.Stream<java.lang.Integer>
                public map(arg0: java.util.function$.IntUnaryOperator): java.util.stream.IntStream
                public mapToObj<U>(arg0: java.util.function$.IntFunction<U> | java.util.function$.IntFunction$$Lambda<U>): java.util.stream.Stream<U>
                public mapToLong<U>(arg0: java.util.function$.IntToLongFunction | java.util.function$.IntToLongFunction$$Lambda): java.util.stream.LongStream
                public mapToDouble<U>(arg0: java.util.function$.IntToDoubleFunction | java.util.function$.IntToDoubleFunction$$Lambda): java.util.stream.DoubleStream
                public flatMap<U>(arg0: java.util.function$.IntFunction<java.util.stream.IntStream> | java.util.function$.IntFunction$$Lambda<java.util.stream.IntStream>): java.util.stream.IntStream
                public unordered<U>(): java.util.stream.IntStream
                public filter<U>(arg0: java.util.function$.IntPredicate): java.util.stream.IntStream
                public peek<U>(arg0: java.util.function$.IntConsumer): java.util.stream.IntStream
                public limit<U>(arg0: long): java.util.stream.IntStream
                public skip<U>(arg0: long): java.util.stream.IntStream
                public sorted<U>(): java.util.stream.IntStream
                public distinct<U>(): java.util.stream.IntStream
                protected static promoteGPUCompile<U>(): void
                public forEach<U>(arg0: java.util.function$.IntConsumer): void
                public forEachOrdered<U>(arg0: java.util.function$.IntConsumer): void
                public sum<U>(): int
                public min<U>(): java.util.OptionalInt
                public max<U>(): java.util.OptionalInt
                public count<U>(): long
                public average<U>(): java.util.OptionalDouble
                public summaryStatistics<U>(): java.util.IntSummaryStatistics
                public reduce<U>(arg0: int, arg1: java.util.function$.IntBinaryOperator | java.util.function$.IntBinaryOperator$$Lambda): int
                public reduce<U>(arg0: java.util.function$.IntBinaryOperator | java.util.function$.IntBinaryOperator$$Lambda): java.util.OptionalInt
                public collect<R>(arg0: java.util.function$.Supplier<R> | java.util.function$.Supplier$$Lambda<R>, arg1: java.util.function$.ObjIntConsumer<R> | java.util.function$.ObjIntConsumer$$Lambda<R>, arg2: java.util.function$.BiConsumer<R, R>): R
                public anyMatch<R>(arg0: java.util.function$.IntPredicate): boolean
                public allMatch<R>(arg0: java.util.function$.IntPredicate): boolean
                public noneMatch<R>(arg0: java.util.function$.IntPredicate): boolean
                public findFirst<R>(): java.util.OptionalInt
                public findAny<R>(): java.util.OptionalInt
                public toArray<R>(): int[]
                public spliterator<R>(): java.util.Spliterator
                public unordered<R>(): java.util.stream.BaseStream
                public iterator<R>(): java.util.Iterator
                public parallel<R>(): java.util.stream.IntStream
                public sequential<R>(): java.util.stream.IntStream
                public static class: java.lang.Class<any>
            }
        }
    }
}
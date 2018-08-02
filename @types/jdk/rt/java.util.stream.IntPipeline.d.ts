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
                public mapToLong(arg0: java.util.function$.IntToLongFunction | java.util.function$.IntToLongFunction$$Lambda): java.util.stream.LongStream
                public mapToDouble(arg0: java.util.function$.IntToDoubleFunction | java.util.function$.IntToDoubleFunction$$Lambda): java.util.stream.DoubleStream
                public flatMap(arg0: java.util.function$.IntFunction<java.util.stream.IntStream> | java.util.function$.IntFunction$$Lambda<java.util.stream.IntStream>): java.util.stream.IntStream
                public unordered(): java.util.stream.IntStream
                public filter(arg0: java.util.function$.IntPredicate): java.util.stream.IntStream
                public peek(arg0: java.util.function$.IntConsumer): java.util.stream.IntStream
                public limit(arg0: long): java.util.stream.IntStream
                public skip(arg0: long): java.util.stream.IntStream
                public sorted(): java.util.stream.IntStream
                public distinct(): java.util.stream.IntStream
                protected static promoteGPUCompile(): void
                public forEach(arg0: java.util.function$.IntConsumer): void
                public forEachOrdered(arg0: java.util.function$.IntConsumer): void
                public sum(): int
                public min(): java.util.OptionalInt
                public max(): java.util.OptionalInt
                public count(): long
                public average(): java.util.OptionalDouble
                public summaryStatistics(): java.util.IntSummaryStatistics
                public reduce(arg0: int, arg1: java.util.function$.IntBinaryOperator | java.util.function$.IntBinaryOperator$$Lambda): int
                public reduce(arg0: java.util.function$.IntBinaryOperator | java.util.function$.IntBinaryOperator$$Lambda): java.util.OptionalInt
                public collect<R>(arg0: java.util.function$.Supplier<R> | java.util.function$.Supplier$$Lambda<R>, arg1: java.util.function$.ObjIntConsumer<R> | java.util.function$.ObjIntConsumer$$Lambda<R>, arg2: java.util.function$.BiConsumer<R, R>): R
                public anyMatch(arg0: java.util.function$.IntPredicate): boolean
                public allMatch(arg0: java.util.function$.IntPredicate): boolean
                public noneMatch(arg0: java.util.function$.IntPredicate): boolean
                public findFirst(): java.util.OptionalInt
                public findAny(): java.util.OptionalInt
                public toArray(): int[]
                public spliterator(): java.util.Spliterator
                public unordered(): java.util.stream.BaseStream
                public iterator(): java.util.Iterator
                public parallel(): java.util.stream.IntStream
                public sequential(): java.util.stream.IntStream
                public static class: java.lang.Class<any>
            }
        }
    }
}
declare namespace java {
    namespace util {
        namespace stream {
abstract class DoublePipeline<E_IN> extends java.util.stream.AbstractPipeline<E_IN, java.lang.Double, java.util.stream.DoubleStream> implements java.util.stream.DoubleStream {
    public iterator(): java.util.PrimitiveIterator$OfDouble
    public spliterator(): java.util.Spliterator$OfDouble
    public boxed(): java.util.stream.Stream<java.lang.Double>
    public map(arg0: java.util.function$.DoubleUnaryOperator): java.util.stream.DoubleStream
    public mapToObj<U>(arg0: java.util.function$.DoubleFunction<U> | java.util.function$.DoubleFunction$$Lambda<U>): java.util.stream.Stream<U>
    public mapToInt(arg0: java.util.function$.DoubleToIntFunction | java.util.function$.DoubleToIntFunction$$Lambda): java.util.stream.IntStream
    public mapToLong(arg0: java.util.function$.DoubleToLongFunction | java.util.function$.DoubleToLongFunction$$Lambda): java.util.stream.LongStream
    public flatMap(arg0: java.util.function$.DoubleFunction<java.util.stream.DoubleStream> | java.util.function$.DoubleFunction$$Lambda<java.util.stream.DoubleStream>): java.util.stream.DoubleStream
    public unordered(): java.util.stream.DoubleStream
    public filter(arg0: java.util.function$.DoublePredicate): java.util.stream.DoubleStream
    public peek(arg0: java.util.function$.DoubleConsumer): java.util.stream.DoubleStream
    public limit(arg0: long): java.util.stream.DoubleStream
    public skip(arg0: long): java.util.stream.DoubleStream
    public sorted(): java.util.stream.DoubleStream
    public distinct(): java.util.stream.DoubleStream
    public forEach(arg0: java.util.function$.DoubleConsumer): void
    public forEachOrdered(arg0: java.util.function$.DoubleConsumer): void
    public sum(): double
    public min(): java.util.OptionalDouble
    public max(): java.util.OptionalDouble
    public average(): java.util.OptionalDouble
    public count(): long
    public summaryStatistics(): java.util.DoubleSummaryStatistics
    public reduce(arg0: double, arg1: java.util.function$.DoubleBinaryOperator | java.util.function$.DoubleBinaryOperator$$Lambda): double
    public reduce(arg0: java.util.function$.DoubleBinaryOperator | java.util.function$.DoubleBinaryOperator$$Lambda): java.util.OptionalDouble
    public collect<R>(arg0: java.util.function$.Supplier<R> | java.util.function$.Supplier$$Lambda<R>, arg1: java.util.function$.ObjDoubleConsumer<R> | java.util.function$.ObjDoubleConsumer$$Lambda<R>, arg2: java.util.function$.BiConsumer<R, R>): R
    public anyMatch(arg0: java.util.function$.DoublePredicate): boolean
    public allMatch(arg0: java.util.function$.DoublePredicate): boolean
    public noneMatch(arg0: java.util.function$.DoublePredicate): boolean
    public findFirst(): java.util.OptionalDouble
    public findAny(): java.util.OptionalDouble
    public toArray(): double[]
    public spliterator(): java.util.Spliterator
    public unordered(): java.util.stream.BaseStream
    public iterator(): java.util.Iterator
    public parallel(): java.util.stream.DoubleStream
    public sequential(): java.util.stream.DoubleStream
    public static class: java.lang.Class<any>
}

        }
    }
}
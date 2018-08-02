declare namespace java {
    namespace util {
        namespace stream {
abstract class ReferencePipeline<P_IN, P_OUT> extends java.util.stream.AbstractPipeline<P_IN, P_OUT, java.util.stream.Stream<P_OUT>> implements java.util.stream.Stream<P_OUT> {
    public iterator(): java.util.Iterator<P_OUT>
    public unordered(): java.util.stream.Stream<P_OUT>
    public filter(arg0: java.util.function$.Predicate<P_OUT>): java.util.stream.Stream<P_OUT>
    public map<R>(arg0: java.util.function$.Function<P_OUT, R>): java.util.stream.Stream<R>
    public mapToInt(arg0: java.util.function$.ToIntFunction<P_OUT> | java.util.function$.ToIntFunction$$Lambda<P_OUT>): java.util.stream.IntStream
    public mapToLong(arg0: java.util.function$.ToLongFunction<P_OUT> | java.util.function$.ToLongFunction$$Lambda<P_OUT>): java.util.stream.LongStream
    public mapToDouble(arg0: java.util.function$.ToDoubleFunction<P_OUT> | java.util.function$.ToDoubleFunction$$Lambda<P_OUT>): java.util.stream.DoubleStream
    public flatMap<R>(arg0: java.util.function$.Function<P_OUT, java.util.stream.Stream<R>>): java.util.stream.Stream<R>
    public flatMapToInt(arg0: java.util.function$.Function<P_OUT, java.util.stream.IntStream>): java.util.stream.IntStream
    public flatMapToDouble(arg0: java.util.function$.Function<P_OUT, java.util.stream.DoubleStream>): java.util.stream.DoubleStream
    public flatMapToLong(arg0: java.util.function$.Function<P_OUT, java.util.stream.LongStream>): java.util.stream.LongStream
    public peek(arg0: java.util.function$.Consumer$$TypeScript<P_OUT>): java.util.stream.Stream<P_OUT>
    public distinct(): java.util.stream.Stream<P_OUT>
    public sorted(): java.util.stream.Stream<P_OUT>
    public sorted(arg0: java.util.Comparator<P_OUT>): java.util.stream.Stream<P_OUT>
    public limit(arg0: long): java.util.stream.Stream<P_OUT>
    public skip(arg0: long): java.util.stream.Stream<P_OUT>
    public forEach(arg0: java.util.function$.Consumer$$TypeScript<P_OUT>): void
    public forEachOrdered(arg0: java.util.function$.Consumer$$TypeScript<P_OUT>): void
    public toArray<A>(arg0: java.util.function$.IntFunction<A[]> | java.util.function$.IntFunction$$Lambda<A[]>): A[]
    public toArray(): java.lang.Object[]
    public anyMatch(arg0: java.util.function$.Predicate<P_OUT>): boolean
    public allMatch(arg0: java.util.function$.Predicate<P_OUT>): boolean
    public noneMatch(arg0: java.util.function$.Predicate<P_OUT>): boolean
    public findFirst(): java.util.Optional<P_OUT>
    public findAny(): java.util.Optional<P_OUT>
    public reduce(arg0: P_OUT, arg1: java.util.function$.BinaryOperator<P_OUT>): P_OUT
    public reduce(arg0: java.util.function$.BinaryOperator<P_OUT>): java.util.Optional<P_OUT>
    public reduce<R>(arg0: R, arg1: java.util.function$.BiFunction<R, P_OUT, R>, arg2: java.util.function$.BinaryOperator<R>): R
    public collect<R, A>(arg0: java.util.stream.Collector<P_OUT, A, R>): R
    public collect<R>(arg0: java.util.function$.Supplier<R> | java.util.function$.Supplier$$Lambda<R>, arg1: java.util.function$.BiConsumer<R, P_OUT>, arg2: java.util.function$.BiConsumer<R, R>): R
    public max(arg0: java.util.Comparator<P_OUT>): java.util.Optional<P_OUT>
    public min(arg0: java.util.Comparator<P_OUT>): java.util.Optional<P_OUT>
    public count(): long
    public unordered(): java.util.stream.BaseStream
    public static class: java.lang.Class<any>
}

        }
    }
}
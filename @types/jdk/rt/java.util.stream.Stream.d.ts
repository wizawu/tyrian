declare namespace java {
    namespace util {
        namespace stream {
            interface Stream<T> extends java.util.stream.BaseStream<T, java.util.stream.Stream<T>> {
                filter(arg0: java.util.function$.Predicate<T>): java.util.stream.Stream<T>
                map<R>(arg0: java.util.function$.Function<T, R>): java.util.stream.Stream<R>
                mapToInt<R>(arg0: java.util.function$.ToIntFunction<T> | java.util.function$.ToIntFunction$$Lambda<T>): java.util.stream.IntStream
                mapToLong<R>(arg0: java.util.function$.ToLongFunction<T> | java.util.function$.ToLongFunction$$Lambda<T>): java.util.stream.LongStream
                mapToDouble<R>(arg0: java.util.function$.ToDoubleFunction<T> | java.util.function$.ToDoubleFunction$$Lambda<T>): java.util.stream.DoubleStream
                flatMap<R>(arg0: java.util.function$.Function<T, java.util.stream.Stream<R>>): java.util.stream.Stream<R>
                flatMapToInt<R>(arg0: java.util.function$.Function<T, java.util.stream.IntStream>): java.util.stream.IntStream
                flatMapToLong<R>(arg0: java.util.function$.Function<T, java.util.stream.LongStream>): java.util.stream.LongStream
                flatMapToDouble<R>(arg0: java.util.function$.Function<T, java.util.stream.DoubleStream>): java.util.stream.DoubleStream
                distinct<R>(): java.util.stream.Stream<T>
                sorted<R>(): java.util.stream.Stream<T>
                sorted<R>(arg0: java.util.Comparator<T>): java.util.stream.Stream<T>
                peek<R>(arg0: java.util.function$.Consumer$$Lambda<T>): java.util.stream.Stream<T>
                limit<R>(arg0: long): java.util.stream.Stream<T>
                skip<R>(arg0: long): java.util.stream.Stream<T>
                forEach<R>(arg0: java.util.function$.Consumer$$Lambda<T>): void
                forEachOrdered<R>(arg0: java.util.function$.Consumer$$Lambda<T>): void
                toArray<R>(): java.lang.Object[]
                toArray<A>(arg0: java.util.function$.IntFunction<A[]> | java.util.function$.IntFunction$$Lambda<A[]>): A[]
                reduce<A>(arg0: T, arg1: java.util.function$.BinaryOperator<T>): T
                reduce<A>(arg0: java.util.function$.BinaryOperator<T>): java.util.Optional<T>
                reduce<U>(arg0: U, arg1: java.util.function$.BiFunction<U, T, U>, arg2: java.util.function$.BinaryOperator<U>): U
                collect<R>(arg0: java.util.function$.Supplier<R> | java.util.function$.Supplier$$Lambda<R>, arg1: java.util.function$.BiConsumer<R, T>, arg2: java.util.function$.BiConsumer<R, R>): R
                collect<R, A>(arg0: java.util.stream.Collector<T, A, R>): R
                min<R, A>(arg0: java.util.Comparator<T>): java.util.Optional<T>
                max<R, A>(arg0: java.util.Comparator<T>): java.util.Optional<T>
                count<R, A>(): long
                anyMatch<R, A>(arg0: java.util.function$.Predicate<T>): boolean
                allMatch<R, A>(arg0: java.util.function$.Predicate<T>): boolean
                noneMatch<R, A>(arg0: java.util.function$.Predicate<T>): boolean
                findFirst<R, A>(): java.util.Optional<T>
                findAny<R, A>(): java.util.Optional<T>
                builder<T>(): java.util.stream.Stream$Builder<T>
                empty<T>(): java.util.stream.Stream<T>
                of<T>(arg0: T): java.util.stream.Stream<T>
                of<T>(...arg0: T[]): java.util.stream.Stream<T>
                iterate<T>(arg0: T, arg1: java.util.function$.UnaryOperator<T>): java.util.stream.Stream<T>
                generate<T>(arg0: java.util.function$.Supplier<T> | java.util.function$.Supplier$$Lambda<T>): java.util.stream.Stream<T>
                concat<T>(arg0: java.util.stream.Stream<T>, arg1: java.util.stream.Stream<T>): java.util.stream.Stream<T>
            }
        }
    }
}
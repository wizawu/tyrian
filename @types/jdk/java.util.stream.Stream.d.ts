declare namespace java {
  namespace util {
    namespace stream {

      interface Stream<T> extends java.util.stream.BaseStream<T,java.util.stream.Stream<T>> {
        filter(arg0: java.util.function$.Predicate<unknown>): java.util.stream.Stream<T>
        map<R>(arg0: java.util.function$.Function<unknown,R>): java.util.stream.Stream<R>
        mapToInt(arg0: java.util.function$.ToIntFunction<unknown> | java.util.function$.ToIntFunction$$lambda<unknown>): java.util.stream.IntStream
        mapToLong(arg0: java.util.function$.ToLongFunction<unknown> | java.util.function$.ToLongFunction$$lambda<unknown>): java.util.stream.LongStream
        mapToDouble(arg0: java.util.function$.ToDoubleFunction<unknown> | java.util.function$.ToDoubleFunction$$lambda<unknown>): java.util.stream.DoubleStream
        flatMap<R>(arg0: java.util.function$.Function<unknown,java.util.stream.Stream<R>>): java.util.stream.Stream<R>
        flatMapToInt(arg0: java.util.function$.Function<unknown,java.util.stream.IntStream>): java.util.stream.IntStream
        flatMapToLong(arg0: java.util.function$.Function<unknown,java.util.stream.LongStream>): java.util.stream.LongStream
        flatMapToDouble(arg0: java.util.function$.Function<unknown,java.util.stream.DoubleStream>): java.util.stream.DoubleStream
        distinct(): java.util.stream.Stream<T>
        sorted(): java.util.stream.Stream<T>
        sorted(arg0: java.util.Comparator<unknown>): java.util.stream.Stream<T>
        peek(arg0: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>): java.util.stream.Stream<T>
        limit(arg0: number | java.lang.Long): java.util.stream.Stream<T>
        skip(arg0: number | java.lang.Long): java.util.stream.Stream<T>
        takeWhile(arg0: java.util.function$.Predicate<unknown>): java.util.stream.Stream<T>
        dropWhile(arg0: java.util.function$.Predicate<unknown>): java.util.stream.Stream<T>
        forEach(arg0: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>): void
        forEachOrdered(arg0: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>): void
        toArray(): java.lang.Object[]
        toArray<A>(arg0: java.util.function$.IntFunction<A[]> | java.util.function$.IntFunction$$lambda<A[]>): A[]
        reduce(arg0: T, arg1: java.util.function$.BinaryOperator<T>): T
        reduce(arg0: java.util.function$.BinaryOperator<T>): java.util.Optional<T>
        reduce<U>(arg0: U, arg1: java.util.function$.BiFunction<U,unknown,U>, arg2: java.util.function$.BinaryOperator<U>): U
        collect<R>(arg0: java.util.function$.Supplier<R> | java.util.function$.Supplier$$lambda<R>, arg1: java.util.function$.BiConsumer<R,unknown>, arg2: java.util.function$.BiConsumer<R,R>): R
        collect<R,A>(arg0: java.util.stream.Collector<unknown,A,R>): R
        min(arg0: java.util.Comparator<unknown>): java.util.Optional<T>
        max(arg0: java.util.Comparator<unknown>): java.util.Optional<T>
        count(): number
        anyMatch(arg0: java.util.function$.Predicate<unknown>): boolean
        allMatch(arg0: java.util.function$.Predicate<unknown>): boolean
        noneMatch(arg0: java.util.function$.Predicate<unknown>): boolean
        findFirst(): java.util.Optional<T>
        findAny(): java.util.Optional<T>
        builder<T>(): java.util.stream.Stream$Builder<T>
        empty<T>(): java.util.stream.Stream<T>
        of<T>(arg0: T): java.util.stream.Stream<T>
        ofNullable<T>(arg0: T): java.util.stream.Stream<T>
        of<T>(...vargs: (T)[]): java.util.stream.Stream<T>
        iterate<T>(arg0: T, arg1: java.util.function$.UnaryOperator<T>): java.util.stream.Stream<T>
        iterate<T>(arg0: T, arg1: java.util.function$.Predicate<unknown>, arg2: java.util.function$.UnaryOperator<T>): java.util.stream.Stream<T>
        generate<T>(arg0: java.util.function$.Supplier<T> | java.util.function$.Supplier$$lambda<T>): java.util.stream.Stream<T>
        concat<T>(arg0: java.util.stream.Stream<T>, arg1: java.util.stream.Stream<T>): java.util.stream.Stream<T>
      }

    }
  }
}

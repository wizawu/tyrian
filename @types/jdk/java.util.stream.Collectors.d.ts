declare namespace java {
  namespace util {
    namespace stream {

      class Collectors {
        static readonly CH_CONCURRENT_ID: java.util.Set<java.util.stream.Collector$Characteristics>
        static readonly CH_CONCURRENT_NOID: java.util.Set<java.util.stream.Collector$Characteristics>
        static readonly CH_ID: java.util.Set<java.util.stream.Collector$Characteristics>
        static readonly CH_UNORDERED_ID: java.util.Set<java.util.stream.Collector$Characteristics>
        static readonly CH_NOID: java.util.Set<java.util.stream.Collector$Characteristics>
        static readonly CH_UNORDERED_NOID: java.util.Set<java.util.stream.Collector$Characteristics>
        public static toCollection<T,C extends java.util.Collection<T>>(arg0: java.util.function$.Supplier<C> | java.util.function$.Supplier$$lambda<C>): java.util.stream.Collector<T,unknown,C>
        public static toList<T>(): java.util.stream.Collector<T,unknown,java.util.List<T>>
        public static toUnmodifiableList<T>(): java.util.stream.Collector<T,unknown,java.util.List<T>>
        public static toSet<T>(): java.util.stream.Collector<T,unknown,java.util.Set<T>>
        public static toUnmodifiableSet<T>(): java.util.stream.Collector<T,unknown,java.util.Set<T>>
        public static joining(): java.util.stream.Collector<java.lang.CharSequence,unknown,java.lang.String>
        public static joining(arg0: string | java.lang.CharSequence): java.util.stream.Collector<java.lang.CharSequence,unknown,java.lang.String>
        public static joining(arg0: string | java.lang.CharSequence, arg1: string | java.lang.CharSequence, arg2: string | java.lang.CharSequence): java.util.stream.Collector<java.lang.CharSequence,unknown,java.lang.String>
        public static mapping<T,U,A,R>(arg0: java.util.function$.Function<unknown,U>, arg1: java.util.stream.Collector<unknown,A,R>): java.util.stream.Collector<T,unknown,R>
        public static flatMapping<T,U,A,R>(arg0: java.util.function$.Function<unknown,java.util.stream.Stream<U>>, arg1: java.util.stream.Collector<unknown,A,R>): java.util.stream.Collector<T,unknown,R>
        public static filtering<T,A,R>(arg0: java.util.function$.Predicate<unknown>, arg1: java.util.stream.Collector<unknown,A,R>): java.util.stream.Collector<T,unknown,R>
        public static collectingAndThen<T,A,R,RR>(arg0: java.util.stream.Collector<T,A,R>, arg1: java.util.function$.Function<R,RR>): java.util.stream.Collector<T,A,RR>
        public static counting<T>(): java.util.stream.Collector<T,unknown,java.lang.Long>
        public static minBy<T>(arg0: java.util.Comparator<unknown>): java.util.stream.Collector<T,unknown,java.util.Optional<T>>
        public static maxBy<T>(arg0: java.util.Comparator<unknown>): java.util.stream.Collector<T,unknown,java.util.Optional<T>>
        public static summingInt<T>(arg0: java.util.function$.ToIntFunction<unknown> | java.util.function$.ToIntFunction$$lambda<unknown>): java.util.stream.Collector<T,unknown,java.lang.Integer>
        public static summingLong<T>(arg0: java.util.function$.ToLongFunction<unknown> | java.util.function$.ToLongFunction$$lambda<unknown>): java.util.stream.Collector<T,unknown,java.lang.Long>
        public static summingDouble<T>(arg0: java.util.function$.ToDoubleFunction<unknown> | java.util.function$.ToDoubleFunction$$lambda<unknown>): java.util.stream.Collector<T,unknown,java.lang.Double>
        static sumWithCompensation(arg0: number[] | java.lang.Double[], arg1: number | java.lang.Double): number[]
        static computeFinalSum(arg0: number[] | java.lang.Double[]): number
        public static averagingInt<T>(arg0: java.util.function$.ToIntFunction<unknown> | java.util.function$.ToIntFunction$$lambda<unknown>): java.util.stream.Collector<T,unknown,java.lang.Double>
        public static averagingLong<T>(arg0: java.util.function$.ToLongFunction<unknown> | java.util.function$.ToLongFunction$$lambda<unknown>): java.util.stream.Collector<T,unknown,java.lang.Double>
        public static averagingDouble<T>(arg0: java.util.function$.ToDoubleFunction<unknown> | java.util.function$.ToDoubleFunction$$lambda<unknown>): java.util.stream.Collector<T,unknown,java.lang.Double>
        public static reducing<T>(arg0: T, arg1: java.util.function$.BinaryOperator<T>): java.util.stream.Collector<T,unknown,T>
        public static reducing<T>(arg0: java.util.function$.BinaryOperator<T>): java.util.stream.Collector<T,unknown,java.util.Optional<T>>
        public static reducing<T,U>(arg0: U, arg1: java.util.function$.Function<unknown,U>, arg2: java.util.function$.BinaryOperator<U>): java.util.stream.Collector<T,unknown,U>
        public static groupingBy<T,K>(arg0: java.util.function$.Function<unknown,K>): java.util.stream.Collector<T,unknown,java.util.Map<K,java.util.List<T>>>
        public static groupingBy<T,K,A,D>(arg0: java.util.function$.Function<unknown,K>, arg1: java.util.stream.Collector<unknown,A,D>): java.util.stream.Collector<T,unknown,java.util.Map<K,D>>
        public static groupingBy<T,K,D,A,M extends java.util.Map<K,D>>(arg0: java.util.function$.Function<unknown,K>, arg1: java.util.function$.Supplier<M> | java.util.function$.Supplier$$lambda<M>, arg2: java.util.stream.Collector<unknown,A,D>): java.util.stream.Collector<T,unknown,M>
        public static groupingByConcurrent<T,K>(arg0: java.util.function$.Function<unknown,K>): java.util.stream.Collector<T,unknown,java.util.concurrent.ConcurrentMap<K,java.util.List<T>>>
        public static groupingByConcurrent<T,K,A,D>(arg0: java.util.function$.Function<unknown,K>, arg1: java.util.stream.Collector<unknown,A,D>): java.util.stream.Collector<T,unknown,java.util.concurrent.ConcurrentMap<K,D>>
        public static groupingByConcurrent<T,K,A,D,M extends java.util.concurrent.ConcurrentMap<K,D>>(arg0: java.util.function$.Function<unknown,K>, arg1: java.util.function$.Supplier<M> | java.util.function$.Supplier$$lambda<M>, arg2: java.util.stream.Collector<unknown,A,D>): java.util.stream.Collector<T,unknown,M>
        public static partitioningBy<T>(arg0: java.util.function$.Predicate<unknown>): java.util.stream.Collector<T,unknown,java.util.Map<java.lang.Boolean,java.util.List<T>>>
        public static partitioningBy<T,D,A>(arg0: java.util.function$.Predicate<unknown>, arg1: java.util.stream.Collector<unknown,A,D>): java.util.stream.Collector<T,unknown,java.util.Map<java.lang.Boolean,D>>
        public static toMap<T,K,U>(arg0: java.util.function$.Function<unknown,K>, arg1: java.util.function$.Function<unknown,U>): java.util.stream.Collector<T,unknown,java.util.Map<K,U>>
        public static toUnmodifiableMap<T,K,U>(arg0: java.util.function$.Function<unknown,K>, arg1: java.util.function$.Function<unknown,U>): java.util.stream.Collector<T,unknown,java.util.Map<K,U>>
        public static toMap<T,K,U>(arg0: java.util.function$.Function<unknown,K>, arg1: java.util.function$.Function<unknown,U>, arg2: java.util.function$.BinaryOperator<U>): java.util.stream.Collector<T,unknown,java.util.Map<K,U>>
        public static toUnmodifiableMap<T,K,U>(arg0: java.util.function$.Function<unknown,K>, arg1: java.util.function$.Function<unknown,U>, arg2: java.util.function$.BinaryOperator<U>): java.util.stream.Collector<T,unknown,java.util.Map<K,U>>
        public static toMap<T,K,U,M extends java.util.Map<K,U>>(arg0: java.util.function$.Function<unknown,K>, arg1: java.util.function$.Function<unknown,U>, arg2: java.util.function$.BinaryOperator<U>, arg3: java.util.function$.Supplier<M> | java.util.function$.Supplier$$lambda<M>): java.util.stream.Collector<T,unknown,M>
        public static toConcurrentMap<T,K,U>(arg0: java.util.function$.Function<unknown,K>, arg1: java.util.function$.Function<unknown,U>): java.util.stream.Collector<T,unknown,java.util.concurrent.ConcurrentMap<K,U>>
        public static toConcurrentMap<T,K,U>(arg0: java.util.function$.Function<unknown,K>, arg1: java.util.function$.Function<unknown,U>, arg2: java.util.function$.BinaryOperator<U>): java.util.stream.Collector<T,unknown,java.util.concurrent.ConcurrentMap<K,U>>
        public static toConcurrentMap<T,K,U,M extends java.util.concurrent.ConcurrentMap<K,U>>(arg0: java.util.function$.Function<unknown,K>, arg1: java.util.function$.Function<unknown,U>, arg2: java.util.function$.BinaryOperator<U>, arg3: java.util.function$.Supplier<M> | java.util.function$.Supplier$$lambda<M>): java.util.stream.Collector<T,unknown,M>
        public static summarizingInt<T>(arg0: java.util.function$.ToIntFunction<unknown> | java.util.function$.ToIntFunction$$lambda<unknown>): java.util.stream.Collector<T,unknown,java.util.IntSummaryStatistics>
        public static summarizingLong<T>(arg0: java.util.function$.ToLongFunction<unknown> | java.util.function$.ToLongFunction$$lambda<unknown>): java.util.stream.Collector<T,unknown,java.util.LongSummaryStatistics>
        public static summarizingDouble<T>(arg0: java.util.function$.ToDoubleFunction<unknown> | java.util.function$.ToDoubleFunction$$lambda<unknown>): java.util.stream.Collector<T,unknown,java.util.DoubleSummaryStatistics>
      }

    }
  }
}

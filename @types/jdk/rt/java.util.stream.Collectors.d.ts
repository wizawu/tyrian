declare namespace java {
    namespace util {
        namespace stream {
            class Collectors {
                public static toCollection<T, C extends java.util.Collection<T>>(arg0: java.util.function$.Supplier<C> | java.util.function$.Supplier$$Lambda<C>): java.util.stream.Collector<T, any, C>
                public static toList<T>(): java.util.stream.Collector<T, any, java.util.List<T>>
                public static toSet<T>(): java.util.stream.Collector<T, any, java.util.Set<T>>
                public static joining<T>(): java.util.stream.Collector<java.lang.CharSequence, any, java.lang.String>
                public static joining<T>(arg0: java.lang.CharSequence): java.util.stream.Collector<java.lang.CharSequence, any, java.lang.String>
                public static joining<T>(arg0: java.lang.CharSequence, arg1: java.lang.CharSequence, arg2: java.lang.CharSequence): java.util.stream.Collector<java.lang.CharSequence, any, java.lang.String>
                public static mapping<T, U, A, R>(arg0: java.util.function$.Function<T, U>, arg1: java.util.stream.Collector<U, A, R>): java.util.stream.Collector<T, any, R>
                public static collectingAndThen<T, A, R, RR>(arg0: java.util.stream.Collector<T, A, R>, arg1: java.util.function$.Function<R, RR>): java.util.stream.Collector<T, A, RR>
                public static counting<T>(): java.util.stream.Collector<T, any, java.lang.Long>
                public static minBy<T>(arg0: java.util.Comparator<T>): java.util.stream.Collector<T, any, java.util.Optional<T>>
                public static maxBy<T>(arg0: java.util.Comparator<T>): java.util.stream.Collector<T, any, java.util.Optional<T>>
                public static summingInt<T>(arg0: java.util.function$.ToIntFunction<T> | java.util.function$.ToIntFunction$$Lambda<T>): java.util.stream.Collector<T, any, java.lang.Integer>
                public static summingLong<T>(arg0: java.util.function$.ToLongFunction<T> | java.util.function$.ToLongFunction$$Lambda<T>): java.util.stream.Collector<T, any, java.lang.Long>
                public static summingDouble<T>(arg0: java.util.function$.ToDoubleFunction<T> | java.util.function$.ToDoubleFunction$$Lambda<T>): java.util.stream.Collector<T, any, java.lang.Double>
                public static averagingInt<T>(arg0: java.util.function$.ToIntFunction<T> | java.util.function$.ToIntFunction$$Lambda<T>): java.util.stream.Collector<T, any, java.lang.Double>
                public static averagingLong<T>(arg0: java.util.function$.ToLongFunction<T> | java.util.function$.ToLongFunction$$Lambda<T>): java.util.stream.Collector<T, any, java.lang.Double>
                public static averagingDouble<T>(arg0: java.util.function$.ToDoubleFunction<T> | java.util.function$.ToDoubleFunction$$Lambda<T>): java.util.stream.Collector<T, any, java.lang.Double>
                public static reducing<T>(arg0: T, arg1: java.util.function$.BinaryOperator<T>): java.util.stream.Collector<T, any, T>
                public static reducing<T>(arg0: java.util.function$.BinaryOperator<T>): java.util.stream.Collector<T, any, java.util.Optional<T>>
                public static reducing<T, U>(arg0: U, arg1: java.util.function$.Function<T, U>, arg2: java.util.function$.BinaryOperator<U>): java.util.stream.Collector<T, any, U>
                public static groupingBy<T, K>(arg0: java.util.function$.Function<T, K>): java.util.stream.Collector<T, any, java.util.Map<K, java.util.List<T>>>
                public static groupingBy<T, K, A, D>(arg0: java.util.function$.Function<T, K>, arg1: java.util.stream.Collector<T, A, D>): java.util.stream.Collector<T, any, java.util.Map<K, D>>
                public static groupingBy<T, K, D, A, M extends java.util.Map<K, D>>(arg0: java.util.function$.Function<T, K>, arg1: java.util.function$.Supplier<M> | java.util.function$.Supplier$$Lambda<M>, arg2: java.util.stream.Collector<T, A, D>): java.util.stream.Collector<T, any, M>
                public static groupingByConcurrent<T, K>(arg0: java.util.function$.Function<T, K>): java.util.stream.Collector<T, any, java.util.concurrent.ConcurrentMap<K, java.util.List<T>>>
                public static groupingByConcurrent<T, K, A, D>(arg0: java.util.function$.Function<T, K>, arg1: java.util.stream.Collector<T, A, D>): java.util.stream.Collector<T, any, java.util.concurrent.ConcurrentMap<K, D>>
                public static groupingByConcurrent<T, K, A, D, M extends java.util.concurrent.ConcurrentMap<K, D>>(arg0: java.util.function$.Function<T, K>, arg1: java.util.function$.Supplier<M> | java.util.function$.Supplier$$Lambda<M>, arg2: java.util.stream.Collector<T, A, D>): java.util.stream.Collector<T, any, M>
                public static partitioningBy<T>(arg0: java.util.function$.Predicate<T>): java.util.stream.Collector<T, any, java.util.Map<java.lang.Boolean, java.util.List<T>>>
                public static partitioningBy<T, D, A>(arg0: java.util.function$.Predicate<T>, arg1: java.util.stream.Collector<T, A, D>): java.util.stream.Collector<T, any, java.util.Map<java.lang.Boolean, D>>
                public static toMap<T, K, U>(arg0: java.util.function$.Function<T, K>, arg1: java.util.function$.Function<T, U>): java.util.stream.Collector<T, any, java.util.Map<K, U>>
                public static toMap<T, K, U>(arg0: java.util.function$.Function<T, K>, arg1: java.util.function$.Function<T, U>, arg2: java.util.function$.BinaryOperator<U>): java.util.stream.Collector<T, any, java.util.Map<K, U>>
                public static toMap<T, K, U, M extends java.util.Map<K, U>>(arg0: java.util.function$.Function<T, K>, arg1: java.util.function$.Function<T, U>, arg2: java.util.function$.BinaryOperator<U>, arg3: java.util.function$.Supplier<M> | java.util.function$.Supplier$$Lambda<M>): java.util.stream.Collector<T, any, M>
                public static toConcurrentMap<T, K, U>(arg0: java.util.function$.Function<T, K>, arg1: java.util.function$.Function<T, U>): java.util.stream.Collector<T, any, java.util.concurrent.ConcurrentMap<K, U>>
                public static toConcurrentMap<T, K, U>(arg0: java.util.function$.Function<T, K>, arg1: java.util.function$.Function<T, U>, arg2: java.util.function$.BinaryOperator<U>): java.util.stream.Collector<T, any, java.util.concurrent.ConcurrentMap<K, U>>
                public static toConcurrentMap<T, K, U, M extends java.util.concurrent.ConcurrentMap<K, U>>(arg0: java.util.function$.Function<T, K>, arg1: java.util.function$.Function<T, U>, arg2: java.util.function$.BinaryOperator<U>, arg3: java.util.function$.Supplier<M> | java.util.function$.Supplier$$Lambda<M>): java.util.stream.Collector<T, any, M>
                public static summarizingInt<T>(arg0: java.util.function$.ToIntFunction<T> | java.util.function$.ToIntFunction$$Lambda<T>): java.util.stream.Collector<T, any, java.util.IntSummaryStatistics>
                public static summarizingLong<T>(arg0: java.util.function$.ToLongFunction<T> | java.util.function$.ToLongFunction$$Lambda<T>): java.util.stream.Collector<T, any, java.util.LongSummaryStatistics>
                public static summarizingDouble<T>(arg0: java.util.function$.ToDoubleFunction<T> | java.util.function$.ToDoubleFunction$$Lambda<T>): java.util.stream.Collector<T, any, java.util.DoubleSummaryStatistics>
                public static class: java.lang.Class<any>
            }
        }
    }
}
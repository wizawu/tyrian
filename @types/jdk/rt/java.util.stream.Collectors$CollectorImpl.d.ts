declare namespace java {
    namespace util {
        namespace stream {
            class Collectors$CollectorImpl<T, A, R> implements java.util.stream.Collector<T, A, R> {
                public accumulator(): java.util.function$.BiConsumer<A, T>
                public supplier(): java.util.function$.Supplier<A>
                public combiner(): java.util.function$.BinaryOperator<A>
                public finisher(): java.util.function$.Function<A, R>
                public characteristics(): java.util.Set<java.util.stream.Collector$Characteristics>
                public static class: java.lang.Class<any>
            }
        }
    }
}
declare namespace java {
    namespace util {
        namespace stream {
            class ReduceOps$2ReducingSink implements java.util.stream.ReduceOps$AccumulatingSink<T, java.util.Optional<T>, java.util.stream.ReduceOps$2ReducingSink> {
                public begin(arg0: long): void
                public accept(arg0: T): void
                public get(): java.util.Optional<T>
                public combine(arg0: java.util.stream.ReduceOps$2ReducingSink): void
                public combine(arg0: java.util.stream.ReduceOps$AccumulatingSink): void
                public get(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}
declare namespace java {
    namespace util {
        namespace stream {
            class ReduceOps$ReduceTask<P_IN, P_OUT, R, S extends java.util.stream.ReduceOps$AccumulatingSink<P_OUT, R, S>> extends java.util.stream.AbstractTask<P_IN, P_OUT, S, java.util.stream.ReduceOps$ReduceTask<P_IN, P_OUT, R, S>> {
                protected makeChild(arg0: java.util.Spliterator<P_IN>): java.util.stream.ReduceOps$ReduceTask<P_IN, P_OUT, R, S>
                protected doLeaf(): S
                public onCompletion(arg0: java.util.concurrent.CountedCompleter<any>): void
                protected doLeaf(): java.lang.Object
                protected makeChild(arg0: java.util.Spliterator): java.util.stream.AbstractTask
                public static class: java.lang.Class<any>
            }
        }
    }
}
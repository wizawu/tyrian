declare namespace java {
    namespace util {
        namespace stream {
            abstract class ReduceOps$ReduceOp<T, R, S extends java.util.stream.ReduceOps$AccumulatingSink<T, R, S>> implements java.util.stream.TerminalOp<T, R> {
                public abstract makeSink(): S
                public inputShape(): java.util.stream.StreamShape
                public evaluateSequential<P_IN>(arg0: java.util.stream.PipelineHelper<T>, arg1: java.util.Spliterator<P_IN>): R
                public evaluateParallel<P_IN>(arg0: java.util.stream.PipelineHelper<T>, arg1: java.util.Spliterator<P_IN>): R
                public static class: java.lang.Class<any>
            }
            interface ReduceOps$ReduceOp$$Lambda<T, R, S extends java.util.stream.ReduceOps$AccumulatingSink<T, R, S>> implements java.util.stream.TerminalOp<T, R> {
                (): S
            }
        }
    }
}
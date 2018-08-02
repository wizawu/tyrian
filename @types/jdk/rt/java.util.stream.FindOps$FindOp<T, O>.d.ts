declare namespace java {
    namespace util {
        namespace stream {
class FindOps$FindOp<T, O> implements java.util.stream.TerminalOp<T, O> {
    public getOpFlags(): int
    public inputShape(): java.util.stream.StreamShape
    public evaluateSequential<S>(arg0: java.util.stream.PipelineHelper<T>, arg1: java.util.Spliterator<S>): O
    public evaluateParallel<P_IN>(arg0: java.util.stream.PipelineHelper<T>, arg1: java.util.Spliterator<P_IN>): O
    public static class: java.lang.Class<any>
}

        }
    }
}
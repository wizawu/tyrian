declare namespace java {
    namespace util {
        namespace stream {
class MatchOps$MatchOp<T> implements java.util.stream.TerminalOp<T, java.lang.Boolean> {
    public getOpFlags(): int
    public inputShape(): java.util.stream.StreamShape
    public evaluateSequential<S>(arg0: java.util.stream.PipelineHelper<T>, arg1: java.util.Spliterator<S>): boolean
    public evaluateParallel<S>(arg0: java.util.stream.PipelineHelper<T>, arg1: java.util.Spliterator<S>): boolean
    public evaluateSequential<S>(arg0: java.util.stream.PipelineHelper, arg1: java.util.Spliterator): java.lang.Object
    public evaluateParallel<S>(arg0: java.util.stream.PipelineHelper, arg1: java.util.Spliterator): java.lang.Object
    public static class: java.lang.Class<any>
}

        }
    }
}
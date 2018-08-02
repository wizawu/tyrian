declare namespace java {
    namespace util {
        namespace stream {
interface TerminalOp<E_IN, R> {
    inputShape(): java.util.stream.StreamShape
    getOpFlags(): int
    evaluateParallel<P_IN>(arg0: java.util.stream.PipelineHelper<E_IN>, arg1: java.util.Spliterator<P_IN>): R
    evaluateSequential<P_IN>(arg0: java.util.stream.PipelineHelper<E_IN>, arg1: java.util.Spliterator<P_IN>): R
}

        }
    }
}
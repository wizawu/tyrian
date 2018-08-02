declare namespace java {
    namespace util {
        namespace stream {
class FindOps$FindTask<P_IN, P_OUT, O> extends java.util.stream.AbstractShortCircuitTask<P_IN, P_OUT, O, java.util.stream.FindOps$FindTask<P_IN, P_OUT, O>> {
    protected makeChild(arg0: java.util.Spliterator<P_IN>): java.util.stream.FindOps$FindTask<P_IN, P_OUT, O>
    protected getEmptyResult(): O
    protected doLeaf(): O
    public onCompletion(arg0: java.util.concurrent.CountedCompleter<any>): void
    protected makeChild(arg0: java.util.Spliterator): java.util.stream.AbstractTask
    public static class: java.lang.Class<any>
}

        }
    }
}
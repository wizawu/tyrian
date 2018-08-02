declare namespace java {
    namespace util {
        namespace stream {
class SliceOps$SliceTask<P_IN, P_OUT> extends java.util.stream.AbstractShortCircuitTask<P_IN, P_OUT, java.util.stream.Node<P_OUT>, java.util.stream.SliceOps$SliceTask<P_IN, P_OUT>> {
    protected makeChild(arg0: java.util.Spliterator<P_IN>): java.util.stream.SliceOps$SliceTask<P_IN, P_OUT>
    protected getEmptyResult(): java.util.stream.Node<P_OUT>
    protected doLeaf(): java.util.stream.Node<P_OUT>
    public onCompletion(arg0: java.util.concurrent.CountedCompleter<any>): void
    protected cancel(): void
    protected getEmptyResult(): java.lang.Object
    protected doLeaf(): java.lang.Object
    protected makeChild(arg0: java.util.Spliterator): java.util.stream.AbstractTask
    public static class: java.lang.Class<any>
}

        }
    }
}
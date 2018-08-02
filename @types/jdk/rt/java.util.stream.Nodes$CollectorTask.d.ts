declare namespace java {
    namespace util {
        namespace stream {
class Nodes$CollectorTask<P_IN, P_OUT, T_NODE extends java.util.stream.Node<P_OUT>, T_BUILDER extends java.util.stream.Node$Builder<P_OUT>> extends java.util.stream.AbstractTask<P_IN, P_OUT, T_NODE, java.util.stream.Nodes$CollectorTask<P_IN, P_OUT, T_NODE, T_BUILDER>> {
    protected helper: java.util.stream.PipelineHelper<P_OUT>
    protected builderFactory: java.util.function$.LongFunction<T_BUILDER>
    protected concFactory: java.util.function$.BinaryOperator<T_NODE>
    protected makeChild(arg0: java.util.Spliterator<P_IN>): java.util.stream.Nodes$CollectorTask<P_IN, P_OUT, T_NODE, T_BUILDER>
    protected doLeaf(): T_NODE
    public onCompletion(arg0: java.util.concurrent.CountedCompleter<any>): void
    protected doLeaf(): java.lang.Object
    protected makeChild(arg0: java.util.Spliterator): java.util.stream.AbstractTask
    public static class: java.lang.Class<any>
}

        }
    }
}
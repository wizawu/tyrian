declare namespace java {
    namespace util {
        namespace stream {
            class SortedOps$OfRef<T> extends java.util.stream.ReferencePipeline$StatefulOp<T, T> {
                public opWrapSink(arg0: int, arg1: java.util.stream.Sink<T>): java.util.stream.Sink<T>
                public opEvaluateParallel<P_IN>(arg0: java.util.stream.PipelineHelper<T>, arg1: java.util.Spliterator<P_IN>, arg2: java.util.function$.IntFunction<T[]> | java.util.function$.IntFunction$$Lambda<T[]>): java.util.stream.Node<T>
                public static class: java.lang.Class<any>
            }
        }
    }
}
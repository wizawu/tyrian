declare namespace java {
    namespace util {
        namespace stream {
            abstract class ForEachOps$ForEachOp<T> implements java.util.stream.TerminalOp<T, java.lang.Void> , java.util.stream.TerminalSink<T, java.lang.Void> {
                protected constructor(arg0: boolean)
                public getOpFlags(): int
                public evaluateSequential<S>(arg0: java.util.stream.PipelineHelper<T>, arg1: java.util.Spliterator<S>): java.lang.Void
                public evaluateParallel<S>(arg0: java.util.stream.PipelineHelper<T>, arg1: java.util.Spliterator<S>): java.lang.Void
                public get<S>(): java.lang.Void
                public evaluateSequential<S>(arg0: java.util.stream.PipelineHelper, arg1: java.util.Spliterator): java.lang.Object
                public evaluateParallel<S>(arg0: java.util.stream.PipelineHelper, arg1: java.util.Spliterator): java.lang.Object
                public get<S>(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}
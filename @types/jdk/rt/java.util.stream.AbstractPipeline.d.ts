declare namespace java {
    namespace util {
        namespace stream {
            abstract class AbstractPipeline<E_IN, E_OUT, S extends java.util.stream.BaseStream<E_OUT, S>> extends java.util.stream.PipelineHelper<E_OUT> implements java.util.stream.BaseStream<E_OUT, S> {
                protected readonly sourceOrOpFlags: int
                public sequential(): S
                public parallel(): S
                public close(): void
                public onClose(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): S
                public spliterator(): java.util.Spliterator<E_OUT>
                public isParallel(): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}
declare namespace java {
    namespace util {
        namespace stream {
            abstract class Nodes$SizedCollectorTask<P_IN, P_OUT, T_SINK extends java.util.stream.Sink<P_OUT>, K extends java.util.stream.Nodes$SizedCollectorTask<P_IN, P_OUT, T_SINK, K>> extends java.util.concurrent.CountedCompleter<java.lang.Void> implements java.util.stream.Sink<P_OUT> {
                protected readonly spliterator: java.util.Spliterator<P_IN>
                protected readonly helper: java.util.stream.PipelineHelper<P_OUT>
                protected readonly targetSize: long
                protected offset: long
                protected length: long
                protected index: int
                protected fence: int
                public compute(): void
                public begin(arg0: long): void
                public static class: java.lang.Class<any>
            }
        }
    }
}
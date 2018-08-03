declare namespace java {
    namespace util {
        namespace stream {
            interface ReduceOps$AccumulatingSink<T, R, K extends java.util.stream.ReduceOps$AccumulatingSink<T, R, K>> extends java.util.stream.TerminalSink<T, R> {
                combine(arg0: K): void
            }
        }
    }
}
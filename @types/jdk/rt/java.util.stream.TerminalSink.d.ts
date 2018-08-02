declare namespace java {
    namespace util {
        namespace stream {
            interface TerminalSink<T, R> extends java.util.stream.Sink<T> , java.util.function$.Supplier<R> {
            }
        }
    }
}
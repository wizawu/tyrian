declare namespace java {
    namespace util {
        namespace stream {
            interface DoubleStream$Builder extends java.util.function$.DoubleConsumer {
                accept(arg0: double): void
                add(arg0: double): java.util.stream.DoubleStream$Builder
                build(): java.util.stream.DoubleStream
            }
        }
    }
}
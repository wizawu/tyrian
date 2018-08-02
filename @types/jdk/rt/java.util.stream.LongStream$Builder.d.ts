declare namespace java {
    namespace util {
        namespace stream {
            interface LongStream$Builder extends java.util.function$.LongConsumer {
                accept(arg0: long): void
                add(arg0: long): java.util.stream.LongStream$Builder
                build(): java.util.stream.LongStream
            }
        }
    }
}
declare namespace java {
  namespace util {
    namespace stream {
      interface LongStream$Builder extends java.util.function$.LongConsumer {
        accept(arg0: number | java.lang.Long): void
        add?(arg0: number | java.lang.Long): java.util.stream.LongStream$Builder
        build(): java.util.stream.LongStream
      }
    }
  }
}

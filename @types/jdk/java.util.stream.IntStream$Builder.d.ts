declare namespace java {
  namespace util {
    namespace stream {
      interface IntStream$Builder extends java.util.function$.IntConsumer {
        accept(arg0: number | java.lang.Integer): void
        add?(arg0: number | java.lang.Integer): java.util.stream.IntStream$Builder
        build(): java.util.stream.IntStream
      }
    }
  }
}

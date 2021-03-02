declare namespace java {
  namespace util {
    namespace stream {

      interface DoubleStream$Builder extends java.util.function$.DoubleConsumer {
        accept(arg0: number | java.lang.Double): void
        add(arg0: number | java.lang.Double): java.util.stream.DoubleStream$Builder
        build(): java.util.stream.DoubleStream
      }

    }
  }
}

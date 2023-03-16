declare namespace java {
  namespace util {
    namespace stream {
      interface Stream$Builder<T> extends java.util.function$.Consumer<T> {
        accept(arg0: T): void
        add?(arg0: T): java.util.stream.Stream$Builder<T>
        build(): java.util.stream.Stream<T>
      }
    }
  }
}

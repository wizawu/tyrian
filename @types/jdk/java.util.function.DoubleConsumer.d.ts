declare namespace java {
  namespace util {
    namespace function$ {
      interface DoubleConsumer {
        accept(arg0: number | java.lang.Double): void
        andThen?(arg0: java.util.function$.DoubleConsumer): java.util.function$.DoubleConsumer
      }
    }
  }
}

declare namespace java {
  namespace util {
    namespace function$ {
      interface IntConsumer {
        accept(arg0: number | java.lang.Integer): void
        andThen(arg0: java.util.function$.IntConsumer): java.util.function$.IntConsumer
      }
    }
  }
}

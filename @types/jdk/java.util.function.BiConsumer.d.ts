declare namespace java {
  namespace util {
    namespace function$ {

      interface BiConsumer<T,U> {
        accept(arg0: T, arg1: U): void
        andThen(arg0: java.util.function$.BiConsumer<unknown,unknown>): java.util.function$.BiConsumer<T,U>
      }

    }
  }
}

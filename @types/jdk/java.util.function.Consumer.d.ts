declare namespace java {
  namespace util {
    namespace function$ {

      interface Consumer$$lambda<T> {
        (arg0: T): void
      }

      interface Consumer<T> {
        accept(arg0: T): void
        andThen(arg0: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>): java.util.function$.Consumer<T>
      }

    }
  }
}

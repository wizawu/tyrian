declare namespace java {
  namespace util {
    namespace function$ {

      interface BiPredicate<T,U> {
        test(arg0: T, arg1: U): boolean
        and(arg0: java.util.function$.BiPredicate<unknown,unknown>): java.util.function$.BiPredicate<T,U>
        negate(): java.util.function$.BiPredicate<T,U>
        or(arg0: java.util.function$.BiPredicate<unknown,unknown>): java.util.function$.BiPredicate<T,U>
      }

    }
  }
}

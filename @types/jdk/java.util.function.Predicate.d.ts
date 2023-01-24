declare namespace java {
  namespace util {
    namespace function$ {
      interface Predicate<T> {
        test(arg0: T): boolean
        and(arg0: java.util.function$.Predicate<unknown>): java.util.function$.Predicate<T>
        negate(): java.util.function$.Predicate<T>
        or(arg0: java.util.function$.Predicate<unknown>): java.util.function$.Predicate<T>
        isEqual<T>(arg0: java.lang.Object | any): java.util.function$.Predicate<T>
        not<T>(arg0: java.util.function$.Predicate<unknown>): java.util.function$.Predicate<T>
      }
    }
  }
}

declare namespace java {
  namespace util {
    namespace function$ {
      interface BinaryOperator<T> extends java.util.function$.BiFunction<T, T, T> {
        minBy<T>(arg0: java.util.Comparator<unknown>): java.util.function$.BinaryOperator<T>
        maxBy<T>(arg0: java.util.Comparator<unknown>): java.util.function$.BinaryOperator<T>
      }
    }
  }
}

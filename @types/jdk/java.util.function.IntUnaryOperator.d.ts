declare namespace java {
  namespace util {
    namespace function$ {
      interface IntUnaryOperator {
        applyAsInt(arg0: number | java.lang.Integer): number
        compose(arg0: java.util.function$.IntUnaryOperator): java.util.function$.IntUnaryOperator
        andThen(arg0: java.util.function$.IntUnaryOperator): java.util.function$.IntUnaryOperator
        identity(): java.util.function$.IntUnaryOperator
      }
    }
  }
}

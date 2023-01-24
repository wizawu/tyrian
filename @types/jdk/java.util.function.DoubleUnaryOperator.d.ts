declare namespace java {
  namespace util {
    namespace function$ {
      interface DoubleUnaryOperator {
        applyAsDouble(arg0: number | java.lang.Double): number
        compose(arg0: java.util.function$.DoubleUnaryOperator): java.util.function$.DoubleUnaryOperator
        andThen(arg0: java.util.function$.DoubleUnaryOperator): java.util.function$.DoubleUnaryOperator
        identity(): java.util.function$.DoubleUnaryOperator
      }
    }
  }
}

declare namespace java {
  namespace util {
    namespace function$ {

      interface LongUnaryOperator {
        applyAsLong(arg0: number | java.lang.Long): number
        compose(arg0: java.util.function$.LongUnaryOperator): java.util.function$.LongUnaryOperator
        andThen(arg0: java.util.function$.LongUnaryOperator): java.util.function$.LongUnaryOperator
        identity(): java.util.function$.LongUnaryOperator
      }

    }
  }
}

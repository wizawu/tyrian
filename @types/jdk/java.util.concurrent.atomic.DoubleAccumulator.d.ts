declare namespace java {
  namespace util {
    namespace concurrent {
      namespace atomic {

        class DoubleAccumulator extends java.util.concurrent.atomic.Striped64 implements java.io.Serializable {
          public constructor(arg0: java.util.function$.DoubleBinaryOperator | java.util.function$.DoubleBinaryOperator$$lambda, arg1: number | java.lang.Double)
          public accumulate(arg0: number | java.lang.Double): void
          public get(): number
          public reset(): void
          public getThenReset(): number
          public toString(): java.lang.String
          public doubleValue(): number
          public longValue(): number
          public intValue(): number
          public floatValue(): number
        }

      }
    }
  }
}

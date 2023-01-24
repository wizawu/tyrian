declare namespace java {
  namespace util {
    namespace concurrent {
      namespace atomic {
        class LongAccumulator extends java.util.concurrent.atomic.Striped64 implements java.io.Serializable {
          public constructor(
            arg0: java.util.function$.LongBinaryOperator | java.util.function$.LongBinaryOperator$$lambda,
            arg1: number | java.lang.Long
          )
          public accumulate(arg0: number | java.lang.Long): void
          public get(): number
          public reset(): void
          public getThenReset(): number
          public toString(): java.lang.String
          public longValue(): number
          public intValue(): number
          public floatValue(): number
          public doubleValue(): number
        }
      }
    }
  }
}

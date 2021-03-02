declare namespace java {
  namespace util {
    namespace concurrent {
      namespace atomic {

        class LongAccumulator extends java.util.concurrent.atomic.Striped64 implements java.io.Serializable {
          public constructor(arg0: java.util.function$.LongBinaryOperator, arg1: long)
          public accumulate(arg0: long): void
          public get(): long
          public reset(): void
          public getThenReset(): long
          public toString(): java.lang.String
          public longValue(): long
          public intValue(): int
          public floatValue(): float
          public doubleValue(): double
        }

      }
    }
  }
}

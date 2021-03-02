declare namespace java {
  namespace util {
    namespace concurrent {
      namespace atomic {

        class DoubleAdder extends java.util.concurrent.atomic.Striped64 implements java.io.Serializable {
          public constructor()
          public add(arg0: double): void
          public sum(): double
          public reset(): void
          public sumThenReset(): double
          public toString(): java.lang.String
          public doubleValue(): double
          public longValue(): long
          public intValue(): int
          public floatValue(): float
        }

      }
    }
  }
}

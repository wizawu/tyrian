declare namespace java {
  namespace util {
    namespace concurrent {
      namespace atomic {

        class LongAdder extends java.util.concurrent.atomic.Striped64 implements java.io.Serializable {

          public constructor()
          public add(arg0: long): void
          public increment(): void
          public decrement(): void
          public sum(): long
          public reset(): void
          public sumThenReset(): long
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

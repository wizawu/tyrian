declare namespace java {
  namespace util {
    namespace concurrent {
      namespace atomic {

        class LongAdder extends java.util.concurrent.atomic.Striped64 implements java.io.Serializable {
          public constructor()
          public add(arg0: number | java.lang.Long): void
          public increment(): void
          public decrement(): void
          public sum(): number
          public reset(): void
          public sumThenReset(): number
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

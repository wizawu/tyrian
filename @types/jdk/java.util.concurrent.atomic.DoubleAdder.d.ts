declare namespace java {
  namespace util {
    namespace concurrent {
      namespace atomic {

        class DoubleAdder extends java.util.concurrent.atomic.Striped64 implements java.io.Serializable {
          public constructor()
          public add(arg0: number | java.lang.Double): void
          public sum(): number
          public reset(): void
          public sumThenReset(): number
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

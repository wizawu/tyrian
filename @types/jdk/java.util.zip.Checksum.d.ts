declare namespace java {
  namespace util {
    namespace zip {

      interface Checksum {
        update(arg0: number | java.lang.Integer): void
        update(arg0: number[] | java.lang.Byte[]): void
        update(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
        update(arg0: java.nio.ByteBuffer): void
        getValue(): number
        reset(): void
      }

    }
  }
}

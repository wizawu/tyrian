declare namespace java {
  namespace util {
    namespace zip {
      class Adler32 implements java.util.zip.Checksum {
        static readonly $assertionsDisabled: boolean
        public constructor()
        public update(arg0: number | java.lang.Integer): void
        public update(
          arg0: number[] | java.lang.Byte[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        public update(arg0: java.nio.ByteBuffer): void
        public reset(): void
        public getValue(): number
      }
    }
  }
}

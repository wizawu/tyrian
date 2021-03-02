declare namespace java {
  namespace util {
    namespace zip {

      class Adler32 implements java.util.zip.Checksum {
        static readonly $assertionsDisabled: boolean
        public constructor()
        public update(arg0: int): void
        public update(arg0: byte[], arg1: int, arg2: int): void
        public update(arg0: java.nio.ByteBuffer): void
        public reset(): void
        public getValue(): long
      }

    }
  }
}

declare namespace javax {
  namespace crypto {
    namespace spec {

      class PBEKeySpec implements java.security.spec.KeySpec {

        public constructor(arg0: char[])
        public constructor(arg0: char[], arg1: byte[], arg2: int, arg3: int)
        public constructor(arg0: char[], arg1: byte[], arg2: int)
        public readonly clearPassword(): void
        public readonly getPassword(): char[]
        public readonly getSalt(): byte[]
        public readonly getIterationCount(): int
        public readonly getKeyLength(): int
      }

    }
  }
}

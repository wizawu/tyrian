declare namespace javax {
  namespace crypto {
    namespace spec {

      class PBEKeySpec implements java.security.spec.KeySpec {
        public constructor(arg0: char[])
        public constructor(arg0: char[], arg1: byte[], arg2: number | java.lang.Integer, arg3: number | java.lang.Integer)
        public constructor(arg0: char[], arg1: byte[], arg2: number | java.lang.Integer)
        public clearPassword(): void
        public getPassword(): string[]
        public getSalt(): number[]
        public getIterationCount(): number
        public getKeyLength(): number
      }

    }
  }
}

declare namespace javax {
  namespace crypto {
    namespace spec {
      class PBEKeySpec implements java.security.spec.KeySpec {
        public constructor(arg0: string[] | java.lang.Character[])
        public constructor(
          arg0: string[] | java.lang.Character[],
          arg1: number[] | java.lang.Byte[],
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer
        )
        public constructor(
          arg0: string[] | java.lang.Character[],
          arg1: number[] | java.lang.Byte[],
          arg2: number | java.lang.Integer
        )
        public clearPassword(): void
        public getPassword(): string[]
        public getSalt(): number[]
        public getIterationCount(): number
        public getKeyLength(): number
      }
    }
  }
}

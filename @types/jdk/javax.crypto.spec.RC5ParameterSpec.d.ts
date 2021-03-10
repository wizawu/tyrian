declare namespace javax {
  namespace crypto {
    namespace spec {

      class RC5ParameterSpec implements java.security.spec.AlgorithmParameterSpec {
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer)
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number[] | java.lang.Byte[])
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number[] | java.lang.Byte[], arg4: number | java.lang.Integer)
        public getVersion(): number
        public getRounds(): number
        public getWordSize(): number
        public getIV(): number[]
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
      }

    }
  }
}

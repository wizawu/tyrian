declare namespace javax {
  namespace crypto {
    namespace spec {

      class IvParameterSpec implements java.security.spec.AlgorithmParameterSpec {
        public constructor(arg0: number[] | java.lang.Byte[])
        public constructor(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer)
        public getIV(): number[]
      }

    }
  }
}

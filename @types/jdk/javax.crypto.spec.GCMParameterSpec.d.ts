declare namespace javax {
  namespace crypto {
    namespace spec {

      class GCMParameterSpec implements java.security.spec.AlgorithmParameterSpec {
        public constructor(arg0: number | java.lang.Integer, arg1: number[] | java.lang.Byte[])
        public constructor(arg0: number | java.lang.Integer, arg1: number[] | java.lang.Byte[], arg2: number | java.lang.Integer, arg3: number | java.lang.Integer)
        public getTLen(): number
        public getIV(): number[]
      }

    }
  }
}

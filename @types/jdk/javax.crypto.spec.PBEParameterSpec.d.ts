declare namespace javax {
  namespace crypto {
    namespace spec {

      class PBEParameterSpec implements java.security.spec.AlgorithmParameterSpec {
        public constructor(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer)
        public constructor(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: java.security.spec.AlgorithmParameterSpec)
        public getSalt(): number[]
        public getIterationCount(): number
        public getParameterSpec(): java.security.spec.AlgorithmParameterSpec
      }

    }
  }
}

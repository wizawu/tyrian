declare namespace javax {
  namespace crypto {
    namespace spec {

      class ChaCha20ParameterSpec implements java.security.spec.AlgorithmParameterSpec {
        public constructor(arg0: byte[], arg1: number | java.lang.Integer)
        public getNonce(): number[]
        public getCounter(): number
      }

    }
  }
}

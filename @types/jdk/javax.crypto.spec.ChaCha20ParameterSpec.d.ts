declare namespace javax {
  namespace crypto {
    namespace spec {

      class ChaCha20ParameterSpec implements java.security.spec.AlgorithmParameterSpec {
        public constructor(arg0: byte[], arg1: int)
        public getNonce(): byte[]
        public getCounter(): int
      }

    }
  }
}

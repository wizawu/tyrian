declare namespace javax {
  namespace crypto {
    namespace spec {

      class SecretKeySpec implements java.security.spec.KeySpec, javax.crypto.SecretKey {
        public constructor(arg0: byte[], arg1: java.lang.String)
        public constructor(arg0: byte[], arg1: int, arg2: int, arg3: java.lang.String)
        public getAlgorithm(): java.lang.String
        public getFormat(): java.lang.String
        public getEncoded(): byte[]
        public hashCode(): int
        public equals(arg0: java.lang.Object): boolean
      }

    }
  }
}

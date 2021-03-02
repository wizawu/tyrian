declare namespace java {
  namespace security {
    namespace spec {

      class MGF1ParameterSpec implements java.security.spec.AlgorithmParameterSpec {
        public static readonly SHA1: java.security.spec.MGF1ParameterSpec
        public static readonly SHA224: java.security.spec.MGF1ParameterSpec
        public static readonly SHA256: java.security.spec.MGF1ParameterSpec
        public static readonly SHA384: java.security.spec.MGF1ParameterSpec
        public static readonly SHA512: java.security.spec.MGF1ParameterSpec
        public static readonly SHA512_224: java.security.spec.MGF1ParameterSpec
        public static readonly SHA512_256: java.security.spec.MGF1ParameterSpec
        public constructor(arg0: java.lang.String | string)
        public getDigestAlgorithm(): java.lang.String
      }

    }
  }
}

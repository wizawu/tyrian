declare namespace java {
  namespace security {
    namespace spec {

      class PSSParameterSpec implements java.security.spec.AlgorithmParameterSpec {

        public static readonly TRAILER_FIELD_BC: int
        public static readonly DEFAULT: java.security.spec.PSSParameterSpec
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.security.spec.AlgorithmParameterSpec, arg3: int, arg4: int)
        public constructor(arg0: int)
        public getDigestAlgorithm(): java.lang.String
        public getMGFAlgorithm(): java.lang.String
        public getMGFParameters(): java.security.spec.AlgorithmParameterSpec
        public getSaltLength(): int
        public getTrailerField(): int
        public toString(): java.lang.String
      }

    }
  }
}

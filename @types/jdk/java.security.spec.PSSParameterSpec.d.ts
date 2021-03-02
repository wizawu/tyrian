declare namespace java {
  namespace security {
    namespace spec {

      class PSSParameterSpec implements java.security.spec.AlgorithmParameterSpec {
        public static readonly TRAILER_FIELD_BC: int
        public static readonly DEFAULT: java.security.spec.PSSParameterSpec
        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.security.spec.AlgorithmParameterSpec, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer)
        public constructor(arg0: number | java.lang.Integer)
        public getDigestAlgorithm(): java.lang.String
        public getMGFAlgorithm(): java.lang.String
        public getMGFParameters(): java.security.spec.AlgorithmParameterSpec
        public getSaltLength(): number
        public getTrailerField(): number
        public toString(): java.lang.String
      }

    }
  }
}

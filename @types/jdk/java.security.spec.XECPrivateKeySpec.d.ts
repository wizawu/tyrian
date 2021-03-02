declare namespace java {
  namespace security {
    namespace spec {

      class XECPrivateKeySpec implements java.security.spec.KeySpec {
        public constructor(arg0: java.security.spec.AlgorithmParameterSpec, arg1: byte[])
        public getParams(): java.security.spec.AlgorithmParameterSpec
        public getScalar(): byte[]
      }

    }
  }
}

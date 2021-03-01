declare namespace java {
  namespace security {
    namespace spec {

      class ECParameterSpec implements java.security.spec.AlgorithmParameterSpec {

        public constructor(arg0: java.security.spec.EllipticCurve, arg1: java.security.spec.ECPoint, arg2: java.math.BigInteger, arg3: int)
        public getCurve(): java.security.spec.EllipticCurve
        public getGenerator(): java.security.spec.ECPoint
        public getOrder(): java.math.BigInteger
        public getCofactor(): int
      }

    }
  }
}

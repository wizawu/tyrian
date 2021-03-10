declare namespace java {
  namespace security {
    namespace spec {

      class EllipticCurve {
        public constructor(arg0: java.security.spec.ECField | java.security.spec.ECField$$lambda, arg1: java.math.BigInteger, arg2: java.math.BigInteger)
        public constructor(arg0: java.security.spec.ECField | java.security.spec.ECField$$lambda, arg1: java.math.BigInteger, arg2: java.math.BigInteger, arg3: number[] | java.lang.Byte[])
        public getField(): java.security.spec.ECField
        public getA(): java.math.BigInteger
        public getB(): java.math.BigInteger
        public getSeed(): number[]
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
      }

    }
  }
}

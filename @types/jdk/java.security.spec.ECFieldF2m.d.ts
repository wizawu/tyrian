declare namespace java {
  namespace security {
    namespace spec {
      class ECFieldF2m implements java.security.spec.ECField {
        public constructor(arg0: number | java.lang.Integer)
        public constructor(arg0: number | java.lang.Integer, arg1: java.math.BigInteger)
        public constructor(arg0: number | java.lang.Integer, arg1: number[] | java.lang.Integer[])
        public getFieldSize(): number
        public getM(): number
        public getReductionPolynomial(): java.math.BigInteger
        public getMidTermsOfReductionPolynomial(): number[]
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
      }
    }
  }
}

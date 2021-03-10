declare namespace javax {
  namespace crypto {
    namespace spec {

      class SecretKeySpec implements java.security.spec.KeySpec, javax.crypto.SecretKey {
        public constructor(arg0: number[] | java.lang.Byte[], arg1: java.lang.String | string)
        public constructor(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.lang.String | string)
        public getAlgorithm(): java.lang.String
        public getFormat(): java.lang.String
        public getEncoded(): number[]
        public hashCode(): number
        public equals(arg0: java.lang.Object | any): boolean
      }

    }
  }
}

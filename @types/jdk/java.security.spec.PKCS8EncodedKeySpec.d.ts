declare namespace java {
  namespace security {
    namespace spec {

      class PKCS8EncodedKeySpec extends java.security.spec.EncodedKeySpec {
        public constructor(arg0: number[] | java.lang.Byte[])
        public constructor(arg0: number[] | java.lang.Byte[], arg1: java.lang.String | string)
        public getEncoded(): number[]
        public getFormat(): java.lang.String
      }

    }
  }
}

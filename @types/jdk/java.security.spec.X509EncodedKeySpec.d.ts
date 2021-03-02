declare namespace java {
  namespace security {
    namespace spec {

      class X509EncodedKeySpec extends java.security.spec.EncodedKeySpec {
        public constructor(arg0: byte[])
        public constructor(arg0: byte[], arg1: java.lang.String)
        public getEncoded(): byte[]
        public getFormat(): java.lang.String
      }

    }
  }
}

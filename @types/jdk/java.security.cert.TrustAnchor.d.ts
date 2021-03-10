declare namespace java {
  namespace security {
    namespace cert {

      class TrustAnchor {
        public constructor(arg0: java.security.cert.X509Certificate, arg1: number[] | java.lang.Byte[])
        public constructor(arg0: javax.security.auth.x500.X500Principal, arg1: java.security.PublicKey, arg2: number[] | java.lang.Byte[])
        public constructor(arg0: java.lang.String | string, arg1: java.security.PublicKey, arg2: number[] | java.lang.Byte[])
        public getTrustedCert(): java.security.cert.X509Certificate
        public getCA(): javax.security.auth.x500.X500Principal
        public getCAName(): java.lang.String
        public getCAPublicKey(): java.security.PublicKey
        public getNameConstraints(): number[]
        public toString(): java.lang.String
      }

    }
  }
}

declare namespace java {
  namespace security {
    namespace cert {

      class TrustAnchor {

        public constructor(arg0: java.security.cert.X509Certificate, arg1: byte[])
        public constructor(arg0: javax.security.auth.x500.X500Principal, arg1: java.security.PublicKey, arg2: byte[])
        public constructor(arg0: java.lang.String, arg1: java.security.PublicKey, arg2: byte[])
        public readonly getTrustedCert(): java.security.cert.X509Certificate
        public readonly getCA(): javax.security.auth.x500.X500Principal
        public readonly getCAName(): java.lang.String
        public readonly getCAPublicKey(): java.security.PublicKey
        public readonly getNameConstraints(): byte[]
        public toString(): java.lang.String
      }

    }
  }
}

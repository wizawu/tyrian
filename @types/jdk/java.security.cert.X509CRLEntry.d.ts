declare namespace java {
  namespace security {
    namespace cert {

      abstract class X509CRLEntry implements java.security.cert.X509Extension {
        public constructor()
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
        public abstract getEncoded(): byte[]
        public abstract getSerialNumber(): java.math.BigInteger
        public getCertificateIssuer(): javax.security.auth.x500.X500Principal
        public abstract getRevocationDate(): java.util.Date
        public abstract hasExtensions(): boolean
        public abstract toString(): java.lang.String
        public getRevocationReason(): java.security.cert.CRLReason
      }

    }
  }
}

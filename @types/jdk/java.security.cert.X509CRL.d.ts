declare namespace java {
  namespace security {
    namespace cert {

      abstract class X509CRL extends java.security.cert.CRL implements java.security.cert.X509Extension {

        protected constructor()
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
        public abstract getEncoded(): byte[]
        public abstract verify(arg0: java.security.PublicKey): void
        public abstract verify(arg0: java.security.PublicKey, arg1: java.lang.String): void
        public verify(arg0: java.security.PublicKey, arg1: java.security.Provider): void
        public abstract getVersion(): int
        public abstract getIssuerDN(): java.security.Principal
        public getIssuerX500Principal(): javax.security.auth.x500.X500Principal
        public abstract getThisUpdate(): java.util.Date
        public abstract getNextUpdate(): java.util.Date
        public abstract getRevokedCertificate(arg0: java.math.BigInteger): java.security.cert.X509CRLEntry
        public getRevokedCertificate(arg0: java.security.cert.X509Certificate): java.security.cert.X509CRLEntry
        public abstract getRevokedCertificates(): java.util.Set<java.security.cert.X509CRLEntry>
        public abstract getTBSCertList(): byte[]
        public abstract getSignature(): byte[]
        public abstract getSigAlgName(): java.lang.String
        public abstract getSigAlgOID(): java.lang.String
        public abstract getSigAlgParams(): byte[]
      }

    }
  }
}

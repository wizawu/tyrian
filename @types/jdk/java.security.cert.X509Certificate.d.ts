declare namespace java {
  namespace security {
    namespace cert {
      abstract class X509Certificate
        extends java.security.cert.Certificate
        implements java.security.cert.X509Extension
      {
        protected constructor()
        public abstract checkValidity(): void
        public abstract checkValidity(arg0: java.util.Date): void
        public abstract getVersion(): number
        public abstract getSerialNumber(): java.math.BigInteger
        public abstract getIssuerDN(): java.security.Principal
        public getIssuerX500Principal(): javax.security.auth.x500.X500Principal
        public abstract getSubjectDN(): java.security.Principal
        public getSubjectX500Principal(): javax.security.auth.x500.X500Principal
        public abstract getNotBefore(): java.util.Date
        public abstract getNotAfter(): java.util.Date
        public abstract getTBSCertificate(): number[]
        public abstract getSignature(): number[]
        public abstract getSigAlgName(): java.lang.String
        public abstract getSigAlgOID(): java.lang.String
        public abstract getSigAlgParams(): number[]
        public abstract getIssuerUniqueID(): boolean[]
        public abstract getSubjectUniqueID(): boolean[]
        public abstract getKeyUsage(): boolean[]
        public getExtendedKeyUsage(): java.util.List<java.lang.String>
        public abstract getBasicConstraints(): number
        public getSubjectAlternativeNames(): java.util.Collection<java.util.List<unknown>>
        public getIssuerAlternativeNames(): java.util.Collection<java.util.List<unknown>>
        public verify(arg0: java.security.PublicKey, arg1: java.security.Provider): void
      }
    }
  }
}

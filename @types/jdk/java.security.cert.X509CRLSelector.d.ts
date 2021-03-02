declare namespace java {
  namespace security {
    namespace cert {

      class X509CRLSelector implements java.security.cert.CRLSelector {
        public constructor()
        public setIssuers(arg0: java.util.Collection<javax.security.auth.x500.X500Principal>): void
        public setIssuerNames(arg0: java.util.Collection<unknown>): void
        public addIssuer(arg0: javax.security.auth.x500.X500Principal): void
        public addIssuerName(arg0: java.lang.String | string): void
        public addIssuerName(arg0: byte[]): void
        public setMinCRLNumber(arg0: java.math.BigInteger): void
        public setMaxCRLNumber(arg0: java.math.BigInteger): void
        public setDateAndTime(arg0: java.util.Date): void
        setDateAndTime(arg0: java.util.Date, arg1: number | java.lang.Long): void
        public setCertificateChecking(arg0: java.security.cert.X509Certificate): void
        public getIssuers(): java.util.Collection<javax.security.auth.x500.X500Principal>
        public getIssuerNames(): java.util.Collection<java.lang.Object>
        public getMinCRL(): java.math.BigInteger
        public getMaxCRL(): java.math.BigInteger
        public getDateAndTime(): java.util.Date
        public getCertificateChecking(): java.security.cert.X509Certificate
        public toString(): java.lang.String
        public match(arg0: java.security.cert.CRL): boolean
        public clone(): java.lang.Object
      }

    }
  }
}

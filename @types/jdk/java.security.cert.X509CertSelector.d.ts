declare namespace java {
  namespace security {
    namespace cert {

      class X509CertSelector implements java.security.cert.CertSelector {
        static readonly NAME_ANY: int
        static readonly NAME_RFC822: int
        static readonly NAME_DNS: int
        static readonly NAME_X400: int
        static readonly NAME_DIRECTORY: int
        static readonly NAME_EDI: int
        static readonly NAME_URI: int
        static readonly NAME_IP: int
        static readonly NAME_OID: int
        public constructor()
        public setCertificate(arg0: java.security.cert.X509Certificate): void
        public setSerialNumber(arg0: java.math.BigInteger): void
        public setIssuer(arg0: javax.security.auth.x500.X500Principal): void
        public setIssuer(arg0: java.lang.String | string): void
        public setIssuer(arg0: byte[]): void
        public setSubject(arg0: javax.security.auth.x500.X500Principal): void
        public setSubject(arg0: java.lang.String | string): void
        public setSubject(arg0: byte[]): void
        public setSubjectKeyIdentifier(arg0: byte[]): void
        public setAuthorityKeyIdentifier(arg0: byte[]): void
        public setCertificateValid(arg0: java.util.Date): void
        public setPrivateKeyValid(arg0: java.util.Date): void
        public setSubjectPublicKeyAlgID(arg0: java.lang.String | string): void
        public setSubjectPublicKey(arg0: java.security.PublicKey): void
        public setSubjectPublicKey(arg0: byte[]): void
        public setKeyUsage(arg0: boolean[]): void
        public setExtendedKeyUsage(arg0: java.util.Set<java.lang.String>): void
        public setMatchAllSubjectAltNames(arg0: boolean | java.lang.Boolean): void
        public setSubjectAlternativeNames(arg0: java.util.Collection<java.util.List<unknown>>): void
        public addSubjectAlternativeName(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
        public addSubjectAlternativeName(arg0: number | java.lang.Integer, arg1: byte[]): void
        static equalNames(arg0: java.util.Collection<unknown>, arg1: java.util.Collection<unknown>): boolean
        static makeGeneralNameInterface(arg0: number | java.lang.Integer, arg1: java.lang.Object | any): sun.security.x509.GeneralNameInterface
        public setNameConstraints(arg0: byte[]): void
        public setBasicConstraints(arg0: number | java.lang.Integer): void
        public setPolicy(arg0: java.util.Set<java.lang.String>): void
        public setPathToNames(arg0: java.util.Collection<java.util.List<unknown>>): void
        setPathToNamesInternal(arg0: java.util.Set<sun.security.x509.GeneralNameInterface>): void
        public addPathToName(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
        public addPathToName(arg0: number | java.lang.Integer, arg1: byte[]): void
        public getCertificate(): java.security.cert.X509Certificate
        public getSerialNumber(): java.math.BigInteger
        public getIssuer(): javax.security.auth.x500.X500Principal
        public getIssuerAsString(): java.lang.String
        public getIssuerAsBytes(): number[]
        public getSubject(): javax.security.auth.x500.X500Principal
        public getSubjectAsString(): java.lang.String
        public getSubjectAsBytes(): number[]
        public getSubjectKeyIdentifier(): number[]
        public getAuthorityKeyIdentifier(): number[]
        public getCertificateValid(): java.util.Date
        public getPrivateKeyValid(): java.util.Date
        public getSubjectPublicKeyAlgID(): java.lang.String
        public getSubjectPublicKey(): java.security.PublicKey
        public getKeyUsage(): boolean[]
        public getExtendedKeyUsage(): java.util.Set<java.lang.String>
        public getMatchAllSubjectAltNames(): boolean
        public getSubjectAlternativeNames(): java.util.Collection<java.util.List<unknown>>
        public getNameConstraints(): number[]
        public getBasicConstraints(): number
        public getPolicy(): java.util.Set<java.lang.String>
        public getPathToNames(): java.util.Collection<java.util.List<unknown>>
        public toString(): java.lang.String
        public match(arg0: java.security.cert.Certificate): boolean
        public clone(): java.lang.Object
      }

    }
  }
}

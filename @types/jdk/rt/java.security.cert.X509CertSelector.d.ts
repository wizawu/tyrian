declare namespace java {
    namespace security {
        namespace cert {
class X509CertSelector implements java.security.cert.CertSelector {
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
    public setMatchAllSubjectAltNames(arg0: boolean): void
    public setSubjectAlternativeNames(arg0: java.util.Collection<java.util.List<any>>): void
    public addSubjectAlternativeName(arg0: int, arg1: java.lang.String | string): void
    public addSubjectAlternativeName(arg0: int, arg1: byte[]): void
    public setNameConstraints(arg0: byte[]): void
    public setBasicConstraints(arg0: int): void
    public setPolicy(arg0: java.util.Set<java.lang.String>): void
    public setPathToNames(arg0: java.util.Collection<java.util.List<any>>): void
    public addPathToName(arg0: int, arg1: java.lang.String | string): void
    public addPathToName(arg0: int, arg1: byte[]): void
    public getCertificate(): java.security.cert.X509Certificate
    public getSerialNumber(): java.math.BigInteger
    public getIssuer(): javax.security.auth.x500.X500Principal
    public getIssuerAsString(): string
    public getIssuerAsBytes(): byte[]
    public getSubject(): javax.security.auth.x500.X500Principal
    public getSubjectAsString(): string
    public getSubjectAsBytes(): byte[]
    public getSubjectKeyIdentifier(): byte[]
    public getAuthorityKeyIdentifier(): byte[]
    public getCertificateValid(): java.util.Date
    public getPrivateKeyValid(): java.util.Date
    public getSubjectPublicKeyAlgID(): string
    public getSubjectPublicKey(): java.security.PublicKey
    public getKeyUsage(): boolean[]
    public getExtendedKeyUsage(): java.util.Set<java.lang.String>
    public getMatchAllSubjectAltNames(): boolean
    public getSubjectAlternativeNames(): java.util.Collection<java.util.List<any>>
    public getNameConstraints(): byte[]
    public getBasicConstraints(): int
    public getPolicy(): java.util.Set<java.lang.String>
    public getPathToNames(): java.util.Collection<java.util.List<any>>
    public toString(): string
    public match(arg0: java.security.cert.Certificate): boolean
    public clone(): java.lang.Object
    public static class: java.lang.Class<any>
}

        }
    }
}
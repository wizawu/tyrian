declare namespace java {
    namespace security {
        namespace cert {
abstract class X509Certificate extends java.security.cert.Certificate implements java.security.cert.X509Extension {
    protected constructor()
    public checkValidity(): void
    public checkValidity(arg0: java.util.Date): void
    public getVersion(): int
    public getSerialNumber(): java.math.BigInteger
    public getIssuerDN(): java.security.Principal
    public getIssuerX500Principal(): javax.security.auth.x500.X500Principal
    public getSubjectDN(): java.security.Principal
    public getSubjectX500Principal(): javax.security.auth.x500.X500Principal
    public getNotBefore(): java.util.Date
    public getNotAfter(): java.util.Date
    public getTBSCertificate(): byte[]
    public getSignature(): byte[]
    public getSigAlgName(): string
    public getSigAlgOID(): string
    public getSigAlgParams(): byte[]
    public getIssuerUniqueID(): boolean[]
    public getSubjectUniqueID(): boolean[]
    public getKeyUsage(): boolean[]
    public getExtendedKeyUsage(): java.util.List<java.lang.String>
    public getBasicConstraints(): int
    public getSubjectAlternativeNames(): java.util.Collection<java.util.List<any>>
    public getIssuerAlternativeNames(): java.util.Collection<java.util.List<any>>
    public verify(arg0: java.security.PublicKey, arg1: java.security.Provider): void
    public static class: java.lang.Class<any>
}

        }
    }
}
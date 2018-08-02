declare namespace sun {
    namespace security {
        namespace provider {
            namespace certpath {
                namespace ldap {
class LDAPCertStore$LDAPCertSelector extends java.security.cert.X509CertSelector {
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
    public match(arg0: java.security.cert.Certificate): boolean
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}
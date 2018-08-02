declare namespace java {
    namespace security {
class KeyStore$TrustedCertificateEntry implements java.security.KeyStore$Entry {
    public constructor(arg0: java.security.cert.Certificate)
    public constructor(arg0: java.security.cert.Certificate, arg1: java.util.Set<java.security.KeyStore$Entry$Attribute>)
    public getTrustedCertificate(): java.security.cert.Certificate
    public getAttributes(): java.util.Set<java.security.KeyStore$Entry$Attribute>
    public toString(): string
    public static class: java.lang.Class<any>
}

class KeyStore$TrustedCertificateEntry$$Lambda implements java.security.KeyStore$Entry {
    public constructor(arg0: java.security.cert.Certificate)
}

    }
}
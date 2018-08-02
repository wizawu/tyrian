declare namespace sun {
    namespace security {
        namespace provider {
            namespace certpath {
class X509CertificatePair {
    public constructor()
    public constructor(arg0: java.security.cert.X509Certificate, arg1: java.security.cert.X509Certificate)
    public static clearCache(): void
    public static generateCertificatePair(arg0: byte[]): sun.security.provider.certpath.X509CertificatePair
    public setForward(arg0: java.security.cert.X509Certificate): void
    public setReverse(arg0: java.security.cert.X509Certificate): void
    public getForward(): java.security.cert.X509Certificate
    public getReverse(): java.security.cert.X509Certificate
    public getEncoded(): byte[]
    public toString(): string
    public static class: java.lang.Class<any>
}

            }
        }
    }
}
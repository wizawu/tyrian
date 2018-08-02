declare namespace sun {
    namespace security {
        namespace tools {
            namespace keytool {
class CertAndKeyGen {
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string)
    public setRandom(arg0: java.security.SecureRandom): void
    public generate(arg0: int): void
    public getPublicKey(): sun.security.x509.X509Key
    public getPublicKeyAnyway(): java.security.PublicKey
    public getPrivateKey(): java.security.PrivateKey
    public getSelfCertificate(arg0: sun.security.x509.X500Name, arg1: java.util.Date, arg2: long): java.security.cert.X509Certificate
    public getSelfCertificate(arg0: sun.security.x509.X500Name, arg1: java.util.Date, arg2: long, arg3: sun.security.x509.CertificateExtensions): java.security.cert.X509Certificate
    public getSelfCertificate(arg0: sun.security.x509.X500Name, arg1: long): java.security.cert.X509Certificate
    public getCertRequest(arg0: sun.security.x509.X500Name): sun.security.pkcs10.PKCS10
    public static class: java.lang.Class<any>
}

            }
        }
    }
}
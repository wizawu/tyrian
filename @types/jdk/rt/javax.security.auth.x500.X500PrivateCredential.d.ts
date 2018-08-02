declare namespace javax {
    namespace security {
        namespace auth {
            namespace x500 {
class X500PrivateCredential implements javax.security.auth.Destroyable {
    public constructor(arg0: java.security.cert.X509Certificate, arg1: java.security.PrivateKey)
    public constructor(arg0: java.security.cert.X509Certificate, arg1: java.security.PrivateKey, arg2: java.lang.String | string)
    public getCertificate(): java.security.cert.X509Certificate
    public getPrivateKey(): java.security.PrivateKey
    public getAlias(): string
    public destroy(): void
    public isDestroyed(): boolean
    public static class: java.lang.Class<any>
}

            }
        }
    }
}
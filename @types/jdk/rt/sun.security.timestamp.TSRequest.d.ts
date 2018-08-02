declare namespace sun {
    namespace security {
        namespace timestamp {
class TSRequest {
    public constructor(arg0: java.lang.String | string, arg1: byte[], arg2: java.security.MessageDigest)
    public getHashedMessage(): byte[]
    public setVersion(arg0: int): void
    public setPolicyId(arg0: java.lang.String | string): void
    public setNonce(arg0: java.math.BigInteger): void
    public requestCertificate(arg0: boolean): void
    public setExtensions(arg0: java.security.cert.X509Extension[]): void
    public encode(): byte[]
    public static class: java.lang.Class<any>
}

        }
    }
}
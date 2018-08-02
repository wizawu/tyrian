declare namespace java {
    namespace security {
        namespace cert {
abstract class CertPath implements java.io.Serializable {
    protected constructor(arg0: java.lang.String | string)
    public getType(): string
    public getEncodings(): java.util.Iterator<java.lang.String>
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public toString(): string
    public getEncoded(): byte[]
    public getEncoded(arg0: java.lang.String | string): byte[]
    public getCertificates(): java.util.List<java.security.cert.Certificate>
    protected writeReplace(): java.lang.Object
    public static class: java.lang.Class<any>
}

        }
    }
}
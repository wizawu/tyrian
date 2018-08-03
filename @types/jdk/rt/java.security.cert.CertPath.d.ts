declare namespace java {
    namespace security {
        namespace cert {
            abstract class CertPath implements java.io.Serializable {
                protected constructor(arg0: java.lang.String | string)
                public getType(): string
                public abstract getEncodings(): java.util.Iterator<java.lang.String>
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public abstract getEncoded(): byte[]
                public abstract getEncoded(arg0: java.lang.String | string): byte[]
                public abstract getCertificates(): java.util.List<java.security.cert.Certificate>
                protected writeReplace(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}